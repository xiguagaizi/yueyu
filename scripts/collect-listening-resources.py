#!/usr/bin/env python3
"""恢复已整理的听力音频；仅依赖 Python 标准库、ffmpeg 和 ffprobe。"""
import argparse
import hashlib
import json
import pathlib
import subprocess
import tempfile
import time
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent


def file_path(relative):
    path = (ROOT / relative).resolve()
    if not path.is_relative_to(ROOT):
        raise ValueError("音频路径必须在项目内")
    return path


def checksum(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def probe(path):
    data = json.loads(subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries",
        "format=duration,size:stream=codec_type", "-of", "json", str(path),
    ]))
    if not any(stream["codec_type"] == "audio" for stream in data["streams"]):
        raise ValueError(f"文件没有音轨：{path.name}")
    return float(data["format"]["duration"])


def download(url, path, expected=None):
    if not url.startswith("https://"):
        raise ValueError("只接受 HTTPS 下载地址")
    if path.exists() and (not expected or checksum(path) == expected):
        probe(path)
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    part = path.with_suffix(path.suffix + ".part")
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(request, timeout=30) as response, part.open("wb") as target:
                total = 0
                while chunk := response.read(65536):
                    total += len(chunk)
                    if total > 100 * 1024 * 1024:
                        raise ValueError("单个资源超过 100MB")
                    target.write(chunk)
            probe(part)
            if expected and checksum(part) != expected:
                raise ValueError(f"来源文件已变化，需重新核对：{path.name}")
            part.replace(path)
            return
        except Exception:
            part.unlink(missing_ok=True)
            if attempt == 2:
                raise
            time.sleep(attempt + 1)


def restore(resource):
    original = file_path(resource["originalPath"])
    download(resource["originalUrl"], original, resource["original"]["sha256"])
    clip = file_path(resource["clipPath"])
    if clip.exists():
        if checksum(clip) != resource["clip"]["sha256"]:
            raise ValueError(f"本地片段与清单不一致：{clip.name}")
        probe(clip)
        return
    clip.parent.mkdir(parents=True, exist_ok=True)
    recipe = resource["clipRecipe"]
    args = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y"]
    with tempfile.TemporaryDirectory(prefix="yueyu-listening-") as directory:
        if recipe["mode"] == "concat":
            paths = []
            for segment in recipe["segments"]:
                path = file_path(segment["path"])
                download(segment["url"], path)
                paths.append(path)
            playlist = pathlib.Path(directory) / "concat.txt"
            # ffmpeg concat 的引号转义；文件名只来自受控的资源清单。
            playlist.write_text("\n".join("file '" + str(path).replace("'", "'\\''") + "'" for path in paths))
            args += ["-f", "concat", "-safe", "0", "-i", str(playlist)]
        elif recipe["mode"] == "slice":
            args += ["-ss", str(recipe["start"]), "-i", str(original), "-t", str(recipe["end"] - recipe["start"])]
        else:
            raise ValueError("未知剪辑方式")
        args += ["-ac", "1", "-ar", "24000", "-c:a", "libmp3lame", "-b:a", "80k", str(clip)]
        subprocess.run(args, check=True)
    duration = probe(clip)
    if abs(duration - resource["clip"]["duration"]) > 0.2:
        raise ValueError(f"剪辑时长与清单不一致：{clip.name}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--verify-only", action="store_true", help="仅核查本地文件，不联网或重新剪辑")
    args = parser.parse_args()
    manifest = json.loads((ROOT / "data/listening-resources.json").read_text())
    for resource in manifest["resources"]:
        if args.verify_only:
            for field in ("original", "clip"):
                path = file_path(resource[field + "Path"])
                if checksum(path) != resource[field]["sha256"]:
                    raise ValueError(f"文件校验失败：{path.name}")
                if abs(probe(path) - resource[field]["duration"]) > 0.2:
                    raise ValueError(f"时长校验失败：{path.name}")
        else:
            restore(resource)
        print(f"已核查：{resource['title']} · {resource['clip']['duration']:.1f} 秒", flush=True)
    tasks = json.loads((ROOT / "data/listening-tasks.json").read_text())
    for task in tasks:
        for segment in task["segments"]:
            if segment["audioUrl"].startswith("/listening-audio/"):
                path = file_path("public" + segment["audioUrl"])
                if args.verify_only:
                    probe(path)
                else:
                    download(segment["originalAudioUrl"], path)
    print("素材文件及当前听力任务音频核查完成。")


if __name__ == "__main__":
    main()
