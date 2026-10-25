import { customize, getJyutpingCandidates } from 'to-jyutping';
import { TONE_NAMES, parseSyllable } from './jyutping.mjs';
import { dictionaryNotes } from './dictionary-notes.mjs';

// 中大字库将古语「期月」「期年」的「期」配 gei1；覆盖词典的默认 kei4。
const converter = customize({ 期月: 'gei1 jyut6', 期年: 'gei1 nin4' });

export function lookupJyutping(text, { details = false } = {}) {
  return converter.getJyutpingList(text).map(([char, jp]) => {
    if (!jp) return { char, jp: null };
    const { initial, final, tone } = parseSyllable(jp);
    const candidates = getJyutpingCandidates(char)[0]?.[1] || [];
    const notes = details ? dictionaryNotes(char) : null;
    const readings = [...new Set([jp, ...candidates, ...Object.keys(notes?.readings || {})])];
    const others = readings.filter((reading) => reading && reading !== jp);
    return {
      char,
      jp,
      initial,
      final,
      tone,
      toneName: TONE_NAMES[tone] || '',
      readings: others,
      ...(details && readings.length > 1 ? {
        readingDetails: readings.map((reading) => ({
          jp: reading,
          ...(notes.readings?.[reading] || {}),
        })),
        source: notes.source,
        wordlistSource: notes.wordlistSource,
        studySource: notes.studySource,
        spokenSource: notes.spokenSource,
      } : {}),
    };
  });
}
