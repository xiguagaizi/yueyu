# 粤语纠音台

用 [cantonese.ai 发音评分接口](https://docs.cantonese.ai/score-pronunciation) 识别跟读音频中的粤拼，
再按课文原注音计算粤拼相似度，逐音节提示识别结果在**声调**、**声母**或**韵母**上的差异，供复听确认。

课文和示范音频来自本机的 `D:\粤语打卡\小打卡任务`：**152 课 / 2559 句 / 151 段示范 mp3**。

## 跑起来

```bash
npm install
```

```bash
cp .env.example .env
```

在 Ubuntu 上安装 MySQL 后，创建 `mcdb`、本机最小权限应用账号和表结构，并导入旧数据：

```bash
sudo apt-get update
sudo apt-get install -y mysql-server
sudo node scripts/setup-mysql.mjs
npm run db:migrate
```

需要让 Navicat 等远程客户端连接时，可创建远程账号（生产环境建议把 `%` 换成客户端固定 IP）：

```bash
sudo env DB_REMOTE_HOST=% node scripts/setup-mysql.mjs
```

把 key 填进 `.env` 的 `CANTONESE_AI_API_KEY=`（服务端读取，不会进浏览器），然后：

```bash
npm start
```

打开 http://localhost:5178 。

> 临时试用也可以在页面右上角「API Key」里填，存在浏览器 localStorage，随请求转发给本地服务端。

## 怎么用

两种模式，右上角切换：

- **单句** — 挑一句反复练
- **整课连读** — 按顺序读完一课所有句子，录一次、评一次分，报告再拆回每一句，直接告诉你哪几句拖后腿

1. **挑句子** — 左边按 Day 选课，或直接搜「问路 / 几多钱」；`随机一句` 抽查。筛选条下面的**最近打卡**卡片汇总本合集过去 12 小时的逐句评分（新→旧，可折叠），点一条直接跳回那句课文。日期筛选有两个互不相干的入口：点**「全部日期」**用日历选**课文的发布日期**（标题里的日期，只能选有课文的日子）；点**「今日打卡」**卡片展开**打卡日历**：块状月历记录每一天的打卡篇数（颜色越深篇数越多，浅色块 = 练到一半没完成整课；凌晨 4 点前算前一天，与「今日打卡 N 篇」同口径），点日期块按**打卡记录**筛出那天练过的课文，筛选条上会出现可取消的小标记。
2. **听示范** — 播放这一课的 mp3，可 0.6× 慢放跟读；顶部可切换打卡合集，新合集有慢速录音时会同时显示「原速 / 慢速」两个播放器。课文里点字听单字发音，点句首 ▶ 按顺序逐字播整句示范。「课文」标题旁的**「连读间隔」**滑杆全局调节逐字连读时字与字的停顿（0–1000ms，存在浏览器 localStorage，对课文点读、字典整句、声调连读同样生效）。
3. **录你的** — `🎤 开始录音` 用麦克风录，或 `上传音频文件` 传已有的 wav/mp3/m4a/flac/ogg（≤10MB）。
4. **送去评分** — 粤语按课文源粤拼与接口识别粤拼的字符串相似度计分。评分前统一大小写、首尾及连续空格、换行、音节连写和入声调号（7/8/9 → 1/3/6），音节之间统一一个空格。分数为 `round(100 × (1 − 字符编辑距离 / 两串最大长度))`，插入、删除、替换一个字符各计 1；无识别音节得 0 分，90 分通过。逐字明细仍与同一课文参考音比较，标为「识别读音差异」，需结合录音确认。接口原分保留在结果和历史详情中，英语及普通话使用接口分数。

服务启动时会按这套规则重算已有粤语评分中保存了识别粤拼的记录，同步打卡成绩；上一版本地评分详情保留在 `previousGrading` 中，最早评分详情保留在 `originalGrading` 中，原接口分数及目标音保存在 `upstreamScore` / `upstreamExpectedJyutping`。没有可用识别明细的记录保留原值。版本号为 `jyutping-string-similarity-v1`，已重算的记录不会重复更新。

已有本地评分的历史沿用当时保存的课文目标粤拼，迁移只调整算法；更早仅按接口评分的历史仍从课文恢复参考音。

中英混合句保留接口对英文片段的目标音，仅替换能一一对应的汉字粤拼；英文或数字展开成多个音节、无法可靠对应时，使用接口整句目标音。各句都已评分后，整课按标准音节数加权，总分不低于 90 即通过；低于 90 分的句子仍单独标注，可选择重练。

分数衡量规范化粤拼的字符串相似度，不是声学标准度；长句少量差异可能四舍五入为 100 分，逐字明细和「音节匹配率」仍会显示这些差异。当前不自动合并异读，课文目标音不变。

## 听力训练

顶部新增「听力训练」：播放独立的粤语音频，用普通话录音复述，确认识别文字后提交评分；也可以直接输入复述。原有课文仍用于朗读。每次录音最多 90 秒、6MB，可回放或上传音频；转写失败时保留本次录音，允许重新识别。

首批 3 个入门练习来自 [Storybooks HamBaangLaang《出街玩》](https://global-asp.github.io/storybooks-hbl/stories/yue/00001/)，使用 Edwin 的真人朗读，按连续片段自动播放。原始创作者和来源显示在播放器下方。音频已下载至 `public/listening-audio/`，直接从本机播放。原文、参考意思与评分信息点只在评分后返回。

2026-10-05 新收集了 10 组独立听力素材：5 组分级故事、4 组成人自然对话、1 组港台广播，保留完整原声并提供 38–75 秒试听片段。从「听力训练 → 试听已下载的素材」打开素材库；也可以直接打开 `listening-resources/index.html`，或解压 `listening-resources/short-listening-pack.zip` 离线试听。详细来源和状态在 `listening-resources/README.md`、`data/listening-resources.json`。新素材尚未整理自动评分标准。

大体积音频未纳入 Git。部署到新环境时，运行 `python3 scripts/collect-listening-resources.py` 恢复完整节目、短片段与现有任务的本地音频；需要 ffmpeg、ffprobe 和 Python 3.11+。已下载的文件会校验后跳过。仅验证文件可运行 `python3 scripts/collect-listening-resources.py --verify-only`。运行 `python3 scripts/build-listening-catalog.py` 可重新生成试听目录和短音频压缩包。

在服务端 `.env` 中配置 `DASHSCOPE_API_KEY` 和与你的 Key 地域匹配的 `DASHSCOPE_BASE_URL`，参考 `.env.example`，重启服务后启用转写和评分。默认 `qwen3-asr-flash` 支持将短录音以 Base64 直接提交；评分使用 `qwen3.7-plus-2026-05-26` 快照版。可用 `LISTENING_ASR_MODEL`、`LISTENING_GRADE_MODEL` 切换模型，评分模型须支持非思考模式和严格 JSON Schema 输出。不要将 API Key 填到浏览器中。

每段素材的普通话参考意思和固定信息点保存在 `data/listening-tasks.json`，主旨、细节、逻辑关系的权重分别为 40/40/20。模型只判断各信息点是否正确、部分理解、遗漏或理解错误，并引用复述作为依据；程序按 1/0.5/0/0 的比例计算分数。接受同义表达、概括和调整顺序，不评价普通话口音；重听和慢放只记录使用情况，不扣分。模型响应缺字段、引用不是原话、请求失败或保存失败时不会显示编造的成绩。

评分与复述存入独立的 MySQL `listening_attempts` 表，不计入朗读打卡。历史保留当时的复述、分项反馈、参考答案、规则版本、模型名和播放情况；已经返回过解析的素材，后续练习标记为「看过解析后」。重复提交同一请求不会重复保存或重新调用模型。个人复述录音只在浏览器内暂存，上传至百炼用于转写，不长期保存；刷新页面后录音回放会清除，文字和评分仍可在听力记录中查看。

增加素材时新增独立任务，填写 HTTPS `audioUrl` 或 `/listening-audio/<文件名>.mp3` 本地地址、校对的粤语文字、普通话参考意思、信息点及分值；`segment` 是对应片段的零基下标，用于反馈后的定点重听。每个类别分值必须满足 40/40/20，修改标准时增加 `rubricVersion`。影视视频应先准备可播放的片段音频与校对文字，平台网页链接不能直接当音频地址。

验证：`npm run test:listening`。API 接入依据：[非实时语音识别](https://help.aliyun.com/zh/model-studio/non-realtime-speech-recognition-user-guide)、[结构化输出](https://help.aliyun.com/zh/model-studio/qwen-structured-output)。

## 查字典

顶部「查字典」页：输入**单字或整句**（简繁皆可），逐字给出粤语发音和粤拼——

- **发音**：点任意汉字卡听读音，输入框右侧 `▶ 听整句` 按顺序连播整句（与课文点读同一发音源）。
- **粤拼与多音字**：每字一张卡，粤拼声调数字标色；单字查询会拆出**声母 / 韵母 / 声调**（含调值）。多音字按读音列出词例，各读音可单独试听；点击词例可到原词条查看释义和例句。已有人工核对的读音还会显示词义和使用场景，句子查询也会展示其中的多音字。
- 注音来自 [CanCLID/to-jyutping](https://github.com/CanCLID/to-jyutping) 词典（`GET /api/jyutping?text=…`，整句先分词再注音；`details=1` 返回词例详情），接口带 ETag + gzip。词例索引由[粤典公有领域词表](https://words.hk/faiman/analysis/)及词频表生成：从约 6.2 万条词语中抽取出 5,123 个字、6,489 个读音组、33,098 个词例位置；其中 1,028 个字有至少两组配词读音。简繁对应来自 [OpenCC](https://github.com/BYVoid/OpenCC)，遵循 Apache-2.0 授权，详见 `data/dictionary-opencc-LICENSE.txt`。已核实的详细词义依据香港中文大学[《汉语多功能字库》](https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/)整理，存放于 `data/dictionary-curated.json`；「行路」等口语词参考[粤典](https://words.hk/zidin/%E8%A1%8C)。词表没有提供释义，因此未人工核对的读音只展示配词及原词条链接，不自动编造词义。
- 词例索引存放于 `data/dictionary-word-index.json`，更新公开词表后运行 `npm run build:dictionary-index` 即可重建；日常查询直接读取索引，无需向 MySQL 导入只读词典资料。
- 个人学习词典可额外读取 `data/private/dictionary-study-index.json`，补充按读音区分的释义、例句和词性。该索引由本地 `data/private/all.csv`、`data/private/wordpos.csv` 运行 `npm run build:private-dictionary` 生成，只取已覆核且词形、读音能对应现有词例的记录。`data/private/` 已忽略版本控制，也不在网页静态目录中；更新后重启服务即可加载。无此文件时仍使用公开词例索引和人工释义。
- 课文上方的注音优先使用源资源自带的粤拼（包括 `心，(sam1)` 这种标点后的注音），仅缺失的字通过词典整句查询补齐。点字听音、逐字连播及音频预热都使用同一套读音。已入库但丢失注音的旧课文，会在服务启动时从合集的原资源目录补回，无需重导数据库。
- 点读发音不用 TTS：按页面显示的粤拼播放 words.hk 的**粤拼音节库**（`public/jyutping-audio/`，每个粤拼音节一个小 mp3，Web Audio 逐音节拼接）。音库由 `npm run fetch:jyutping-audio` 从 words.hk 官方音源下载，覆盖词典全部音节；个别非标准拼式缺音频时会跳过并在状态栏提示。

打卡记录和逐句纠音详情保存在 MySQL 的 `mcdb` 中（每次逐句评分都留档）。录音不进数据库：每条录音按评分时间戳存成实体文件 `RECORDING_DIR/<合集>/<句子>/<时间戳>.<ext>`（默认 `recordings/`），互不覆盖，重录一次多一个文件；历史明细里的时间戳就是文件名，数据库里没有录音相关的表。

快捷键：`空格` 播放/暂停示范，`R` 开始/停止录音，`Enter` 送评分。

## 报告怎么读

分数来自接口（0–100，粤语 ≥90 算过关，普通话/英文 ≥70）。下面的逐字卡片是本地算的：

| 卡片下边框 | 含义 | 常见原因 |
| --- | --- | --- |
| 绿 | 正确 | — |
| 紫 | **识别声调差异**（声母韵母匹配，调号不同） | 对照示范和自己的录音复听 |
| 橙 | **识别声母 / 韵母差异** | 复听声母、长短元音及收尾 |
| 红 | 识别音节差异 / 未识别 / 额外识别 | 确认是否漏读、多读或识别偏差 |

鼠标悬停卡片看具体解释（例如「应读 第6声 低平 ˨，你读成 第2声 高升 ˧˥」）。
下面还有完整的标准粤拼 vs 识别粤拼、按错误类型汇总的改进建议，以及可展开的接口原始返回。
### 整课连读是怎么做到的

接口一次只收「一段音频 + 一段目标文本」，没有分句接口。所以整课模式把这一课的句子拼成一段文本送评分，拿回整段的标准粤拼后，**按「一个汉字＝一个音节」把逐音节结果切回每一句**（day01 实测：84 个汉字 → 接口返回 84 个音节，能一一对应）。

于是一次调用就能得到：整体分数 + 每句的音节匹配率 + 每句的识别读音差异。完全匹配的句子只列一行，有差异的展开逐字卡片；句间的呼吸声、翻页声可能被额外识别，在句子行上单独标注，不混进逐字对照里。

万一某课的字数和接口返回的音节数对不上（生僻字、异读），会自动退回整段报告，不会给出错位的分句结果。

「历史记录」页展示**服务端数据库里的全部打卡明细**（`GET /api/history`）：同一课前后间隔 15 分钟内的连续评分归为一次练习，没练完的也会列出来（标「已评 N/M 句」）。**点任意一条可以展开当时的完整纠音详情**：错误分类徽章、逐字卡片、标准/识别粤拼、改进建议，还有「再练一次」直接跳回那句。
每次评分的录音都长期按文件保存在服务端，历史里每条评分都可以回放**当时那一条录音**（按时间戳对应，不会混）；课文页里回放的则是每句最新一次的录音。浏览器断网或服务端接口失败时，历史页退回显示本机 localStorage 的练习记录（最多 50 条）。

## 命令行自测

不开浏览器，直接验证 key 和接口：

```bash
node scripts/score-file.mjs "D:\粤语打卡\小打卡任务\day01打招呼.mp3" "早晨"
```

会打印 HTTP 状态、接口原始 JSON，以及逐音节纠音表。

## 结构

```
server.mjs              Express 服务：静态页 + 课文/音频接口 + 评分代理 + 粤拼查询
lib/database.mjs        MySQL 连接池、表结构和持久化读写
lib/jyutping.mjs        粤拼拆分(声母/韵母/声调) + Needleman-Wunsch 对齐 + 错误归类
to-jyutping             CanCLID 粤拼词典（查字典页用，整句分词注音）
scripts/build-lessons.mjs  把「小打卡任务」的 txt + mp3 整理成 data/lessons.json
scripts/fetch-jyutping-audio.mjs  下载 words.hk 粤拼音节库到 public/jyutping-audio/
scripts/score-file.mjs  命令行评分
scripts/setup-mysql.mjs 创建 mcdb 和最小权限应用账号，写入 .env
scripts/migrate-to-mysql.mjs  将旧 JSON/JSONL 打卡记录幂等迁移到 MySQL（录音为实体文件，无需迁移数据库）
public/                 前端（原生 JS，无构建）
public/jyutping-audio/  粤拼音节库（2400+ 个小 mp3 ≈6MB，点读发音源）
data/lessons.json       生成物，换素材目录后重新生成
```

## 裁掉示范音频的开场白

每段示范开头都有一截开场白。切点不是拍脑袋定的：这批课件的开场白是**同一段录音**，所以脚本先求出全部 mp3 逐字节相同的最长公共前缀，那一段就是开场白。

```bash
node scripts/trim-audio.mjs
```

这批素材实测：151 个文件的公共前缀精确等于 264713 字节 = **16.56 秒**，一个不多一个不少。按帧无损裁掉（CBR MPEG-1 Layer III，丢整帧即可，不重编码、不掉音质、不需要 ffmpeg），输出到 `<素材目录>\去掉开场白\`，文件名与原始一一对应。

`--dry-run` 只看不写，`--force` 覆盖已有副本，`--seconds N` 跳过检测改裁固定秒数，`--src` / `--out` 换目录。
换一批开场白不同的素材时，脚本会自动算出新的公共前缀；若各文件开头压根不同，会直接报错让你改用 `--seconds`。

> 开场白之后还有一段**每课不同**的报课名（day01 约 16.6–25s，能听出课名「打招呼」），那段每个文件都不一样，没法靠比对定位。

要让 demo 直接用裁过的音频，在 `.env` 里加一行（课文仍从 `LESSON_DIR` 读，只换音频）：

```
AUDIO_DIR=D:\粤语打卡\小打卡任务\去掉开场白
```

## 换素材

课文换了目录或加了新的 day，改 `.env` 里的 `LESSON_DIR` 再跑：

```bash
npm run build:lessons
```

解析时保留带注音的 `raw` 原文，另生成不带注音的 `text` 供评分使用；可识别括号注音及 TXT 原文中的行内粤拼（如 `好荣幸wing6认识你`）。字上方优先显示原文里带声调数字的粤拼，无有效注音时查词典补齐。

日期目录格式的资源（`resource/<日期>/response.json + sound.mp3 + slowSound.mp3`）可更新为独立合集：

```bash
npm run build:resource-lessons
```

脚本只生成 `data/resource-lessons.json` 索引，不复制音频；可用 `RESOURCE_DIR` 指定资源目录。

## 几个坑

- **代理**：这台机器有 `HTTPS_PROXY=http://127.0.0.1:7897`，而 Node 的 `fetch` 默认不认这个环境变量（curl 认），直连 cantonese.ai 会 `ECONNRESET`。所以启动脚本带了 `--use-env-proxy`（需要 Node ≥24）—— **用 `npm start`，别直接 `node server.mjs`**。启动日志会打印代理是否已启用，评分失败时错误信息里也会提示。

- **录音格式**：浏览器 `MediaRecorder` 默认输出 webm/opus，接口不收。这里直接用 AudioWorklet 采 PCM，本地封成 16kHz 单声道 WAV 再上传（6 秒约 190KB，离 10MB 上限很远）。
- **麦克风权限**：`getUserMedia` 只在 `localhost` 或 https 下可用，用 IP 访问会拿不到麦克风。
- **示范音频是整课连读**（day01 全长 88 秒），不是单句素材，整段直接送评分分数会很低，只适合听和跟读。
- **Day 08 没有 mp3**，Day 150 课文里只有「这个任务走丢了」，已跳过。
- API key 只在服务端用；`.env` 已在 `.gitignore` 里，`.env.example` 里别填真 key。
- **手机上**布局是「练习区在上、课文列表在下」，点句子会自动跳回练习区。
