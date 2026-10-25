#!/usr/bin/env python3
"""Build a local-only study index from user-provided words.hk CSV exports."""

import argparse
import ast
import csv
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PRIVATE = ROOT / 'data' / 'private'
PRONUNCIATION = re.compile(r'^[a-z]+[1-6](?: [a-z]+[1-6])*$')
POS = re.compile(r'\(pos:([^)]*)\)')
ROMANIZATION = re.compile(r'\s+\([a-z]+[1-6][a-z0-9\s.,!?-]*\)$')


def clean(value, limit):
    value = ROMANIZATION.sub('', value.strip())
    value = value.replace('#', '').replace('\r', ' ')
    value = re.sub(r'\s+', ' ', value)
    value = re.sub(r'(?<=[\u3400-\u9fff]) (?=[\u3400-\u9fff])', '', value)
    return value[:limit]


def senses_of(body):
    senses = []
    for block in re.split(r'(?m)^----\s*$', body):
        gloss = ''
        example = ''
        in_example = False
        for raw in block.splitlines():
            line = raw.strip()
            if line == '<eg>':
                in_example = True
            elif line.startswith('yue:'):
                if in_example and not example:
                    example = clean(line[4:], 110)
                elif not in_example and not gloss:
                    gloss = clean(line[4:], 150)
        if gloss and gloss not in {sense['gloss'] for sense in senses}:
            senses.append({'gloss': gloss, **({'example': example} if example else {})})
        if len(senses) >= 3:
            break
    return senses


def csv_rows(path):
    with path.open(encoding='utf-8-sig', newline='') as source:
        rows = csv.reader(source)
        next(rows)  # Export notice, kept in the private source file.
        next(rows)
        yield from rows


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--all', type=Path, default=PRIVATE / 'all.csv')
    parser.add_argument('--wordpos', type=Path, default=PRIVATE / 'wordpos.csv')
    parser.add_argument('--out', type=Path, default=PRIVATE / 'dictionary-study-index.json')
    args = parser.parse_args()

    public_index = json.loads((ROOT / 'data' / 'dictionary-word-index.json').read_text())
    wanted = {word for readings in public_index['entries'].values()
              for examples in readings.values() for word in examples}
    wanted.update(public_index['entries'])

    word_pos = {}
    for row in csv_rows(args.wordpos):
        if len(row) < 2:
            continue
        try:
            positions = ast.literal_eval(row[1])
        except (SyntaxError, ValueError):
            continue
        if not isinstance(positions, list):
            continue
        labels = [clean(str(position), 24) for position in positions if position]
        for word in row[0].split(' / '):
            if word in wanted and labels:
                word_pos[word] = labels[:3]

    entries = defaultdict(lambda: defaultdict(list))
    accepted = 0
    for row in csv_rows(args.all):
        if len(row) < 6 or row[4] != 'OK':
            continue  # Do not treat unreviewed entries as explanations.
        senses = senses_of(row[2])
        if not senses:
            continue
        positions = [clean(position, 24) for position in POS.findall(row[2])]
        entry = {
            'senses': senses,
            'published': row[5] == '已公開',
            **({'pos': positions[:3]} if positions else {}),
        }
        forms = row[1].split(',')
        canonical = forms[0].rsplit(':', 1)[0].strip()
        for form in forms:
            if ':' not in form:
                continue
            word, jyutping = form.rsplit(':', 1)
            word = word.strip()
            jyutping = jyutping.strip()
            # A variant can share the spelling/pronunciation of a different word.
            # Its explanation belongs to the primary headword only.
            if word != canonical or word not in wanted or not PRONUNCIATION.fullmatch(jyutping):
                continue
            if len(word) != len(jyutping.split(' ')):
                continue
            entries[word][jyutping].append(entry)
            accepted += 1

    ordered_entries = {}
    for word, by_pronunciation in sorted(entries.items()):
        ordered_entries[word] = {}
        for jyutping, records in sorted(by_pronunciation.items()):
            records.sort(key=lambda record: (not record['published'], -len(record['senses'])))
            ordered_entries[word][jyutping] = records[:4]

    output = {
        'meta': {
            'source': 'User-provided words.hk all and wordpos CSV exports',
            'reviewedMatches': accepted,
            'wordsWithDefinitions': len(ordered_entries),
            'wordsWithPartOfSpeech': len(word_pos),
        },
        'entries': ordered_entries,
        'wordPos': dict(sorted(word_pos.items())),
    }
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.parent.chmod(0o700)
    args.out.write_text(json.dumps(output, ensure_ascii=False, separators=(',', ':')) + '\n')
    args.out.chmod(0o600)
    print(f"Built {args.out}: {accepted} reviewed matches, "
          f"{len(ordered_entries)} words with definitions, {len(word_pos)} with part of speech")


if __name__ == '__main__':
    main()
