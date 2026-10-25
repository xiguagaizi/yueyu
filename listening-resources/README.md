# 已下载粤语听力资源

收集日期：2026-10-05。独立于现有朗读课文。

- 10 份完整原声，约 65.5 分钟。
- 10 段短音频，38–75 秒，共约 9.4 分钟。
- 新下载的原始音频和短音频共约 53.8MB；另有当前听力任务的本地缓存。
- 入门故事按原站完整页面边界拼接；成人对话优先在停顿处剪辑，片段内容及边界尚未逐句审核。
- 新素材供试听与选材，尚未准备自动评分信息点。

## 试听与下载

直接打开本目录的 `index.html` 可以离线试听。网页中「听力训练 → 试听已下载的素材」也能打开素材库。

`short-listening-pack.zip` 包含全部 10 段短音频和可离线播放的目录，解压后打开 `index.html`；压缩包不包含完整原声。

## 已下载清单

| 内容 | 类型 | 片段 | 完整原声 | 来源 |
| --- | --- | --- | --- | --- |
| 早晨 | 入门故事 | 38.1 秒 | 2.9 分钟 | [Storybooks HamBaangLaang](https://global-asp.github.io/storybooks-hbl/stories/yue/00007/) |
| 我唔明白 | 入门故事 | 45.5 秒 | 2.2 分钟 | [Storybooks HamBaangLaang](https://global-asp.github.io/storybooks-hbl/stories/yue/00011/) |
| 同阿仔玩嘅一日 | 入门故事 | 48.8 秒 | 4.0 分钟 | [Storybooks HamBaangLaang](https://global-asp.github.io/storybooks-hbl/stories/yue/00012/) |
| 我想要嗰個 | 入门故事 | 56.6 秒 | 5.2 分钟 | [Storybooks HamBaangLaang](https://global-asp.github.io/storybooks-hbl/stories/yue/00103p/) |
| 新雨褸 | 入门故事 | 44.3 秒 | 3.4 分钟 | [Storybooks HamBaangLaang](https://global-asp.github.io/storybooks-hbl/stories/yue/p00015/) |
| 香港饮品与茶餐厅 | 自然对话 | 64.8 秒 | 11.9 分钟 | [Chatty Cantonese · 粤语白白讲](https://www.buzzsprout.com/1864001/episodes/12642018-conversation-hong-kong-beverages) |
| 数字时代的时间观念 | 自然对话 | 64.6 秒 | 6.1 分钟 | [Chatty Cantonese · 粤语白白讲](https://www.buzzsprout.com/1864001/episodes/11815111-conversation-time-in-the-digital-age) |
| 老电影台词与现代说法 | 自然对话 | 75.1 秒 | 11.7 分钟 | [Chatty Cantonese · 粤语白白讲](https://www.buzzsprout.com/1864001/episodes/10302884-conversation-updating-old-movie-lines) |
| 冬天想吃什么 | 自然对话 | 66.8 秒 | 6.6 分钟 | [Chatty Cantonese · 粤语白白讲](https://www.buzzsprout.com/1864001/episodes/10080759-conversation-winter-food-cravings) |
| 一分钟阅读 · 第5785–5789集 | 广播 | 60.0 秒 | 11.3 分钟 | [香港电台 RTHK](https://podcast.rthk.hk/podcast/item_epi.php?pid=23&lang=zh-CN&id=266284) |

## 文件位置与恢复

完整原声：`originals/2026-10-05/`。短音频：项目的 `public/listening-audio/`。来源、原文状态、剪辑起止和 SHA-256 校验值：`data/listening-resources.json`。

音频文件较大，已加入 `.gitignore`，仍完整保留在本机。需要重新下载时运行 `python3 scripts/collect-listening-resources.py`，仅检查本地文件时运行 `python3 scripts/collect-listening-resources.py --verify-only`。依赖 Python 3.11+、ffmpeg、ffprobe。

## 未下载成功的候选

- TVB《爱回家》YouTube 片段：平台要求登录确认非机器人。
- 哔哩哔哩粤语日常对话、影视教学、茶餐厅对话：网页与公开元数据接口返回 HTTP 412。
- 未使用账户或 Cookie；这些失败项没有计入已下载数量。

当前听力训练原有三组《出街玩》的 12 条片段也已下载并改成本地播放。
