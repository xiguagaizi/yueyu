const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, 'wxf078f932bb9c1348_runnable');
const app = JSON.parse(fs.readFileSync(path.join(root, 'app.json'), 'utf8'));
const excluded = new Set(['pages/checkin/']);

const labels = {
  'my/index/index': ['我的粤语', '记录每一次学习进步', 'profile'],
  'my/favorites/index': ['我的收藏', '已收藏的粤语内容', 'collection'],
  'my/history/index': ['浏览记录', '最近学习过的内容', 'collection'],
  'my/user/setting': ['个人资料', '编辑本地展示资料', 'form'],
  'my/msg/index': ['消息中心', '课程、打卡与系统消息', 'collection'],
  'my/notification/index': ['通知设置', '选择需要接收的提醒', 'settings'],
  'my/notification/detail/index': ['通知详情', '一条本地模拟通知', 'detail'],
  'my/pinyin/index': ['拼音设置', '选择粤拼显示方式', 'settings'],
  'my/pinyin-style/index': ['粤拼样式', '调整声调与字号', 'settings'],
  'my/sound/index': ['声音设置', '设置播放速度与发音人', 'settings'],
  'my/audio-setting/index': ['音频设置', '控制自动播放与缓存', 'settings'],
  'my/account/index': ['账号与安全', '本地演示账号信息', 'settings'],
  'songs/search/index': ['粤语歌搜索', '按歌名或歌手查找', 'search'],
  'songs/list/index': ['粤语歌单', '适合跟唱学习的歌曲', 'collection'],
  'songs/detail/index': ['歌曲详情', '歌词、粤拼与学习提示', 'detail'],
  'sph/index': ['视频号课堂', '精选粤语短视频', 'collection'],
  'feedback/index/index': ['意见反馈', '告诉我们遇到的问题', 'form'],
  'feedback/list/index': ['我的反馈', '本地保存的反馈记录', 'collection'],
  'feedback/detail/index': ['反馈详情', '查看处理进度', 'detail'],
  'tools/jyutping/index': ['粤拼查询', '查询汉字的粤语读音', 'convert'],
  'tools/translate/index': ['粤语翻译', '普通话与粤语常用表达互译', 'convert'],
  'tools/translate/favorites/list': ['翻译收藏', '收藏的常用粤语表达', 'collection'],
  'tools/text-to-speech/index': ['粤语朗读', '将文字转成粤语朗读', 'convert'],
  'tools/text-to-jyutping/index/index': ['文字转粤拼', '批量生成粤拼标注', 'convert'],
  'tools/text-to-jyutping/preview/index': ['粤拼预览', '检查转换结果', 'detail'],
  'tools/text-to-jyutping/list/index': ['转换记录', '最近的粤拼转换', 'collection'],
  'tools/text-to-jyutping/detail/index': ['转换详情', '文字与粤拼对照', 'detail'],
  'tools/text-to-jyutping/export-records/index': ['导出记录', '本地模拟导出任务', 'collection'],
  'tools/comment-tools/index': ['评论助手', '快速生成友好的粤语评论', 'convert'],
  'tools/vocab-notebook/index': ['生词本', '管理粤语学习词汇', 'collection'],
  'tools/vocab-notebook/list/index': ['词汇列表', '按分类复习粤语词汇', 'collection'],
  'tools/vocab-notebook/add/index': ['添加生词', '记录新学的粤语词汇', 'form'],
  'tools/vocab-notebook/edit/index': ['编辑生词', '修改词汇和释义', 'form'],
  'tools/vocab-notebook/category-manage/index': ['分类管理', '整理生词本分类', 'collection'],
  'admin/index': ['管理面板', '本地演示管理数据', 'dashboard'],
  'admin/checkin/list/index': ['打卡审核', '查看学员打卡记录', 'collection'],
  'admin/checkin/manage/index': ['打卡管理', '配置打卡规则', 'settings'],
  'admin/user/profile/index': ['用户资料', '查看模拟用户学习档案', 'detail'],
  'learning/base/jyutping/index': ['粤拼基础', '认识声母、韵母和声调', 'course'],
  'learning/base/beginner/list/index': ['入门课程', '从零开始学粤语', 'course'],
  'learning/base/beginner/detail/index': ['课程详情', '今日入门学习内容', 'detail'],
  'learning/crat/index': ['粤语阅读', '通过短文积累词汇', 'course'],
  'learning/crat/article/index': ['阅读文章', '带粤拼的生活短文', 'detail'],
  'learning/crat/article-test/index': ['阅读测验', '检验文章理解程度', 'quiz'],
  'learning/lessons/zi/index/index': ['每日识字', '学习常用粤语字词', 'course'],
  'learning/lessons/zi/detail/index': ['字词详情', '发音、释义与例句', 'detail'],
  'learning/lessons/zi/slide/index': ['字词卡片', '左右切换进行记忆', 'course'],
  'learning/lessons/top/zi/detail/index': ['热门字词', '常见粤语特色字', 'detail'],
  'learning/lessons/top/zi/index/index': ['热门排行', '大家都在学的字词', 'collection'],
  'learning/books/hambaanglaang/detail/index': ['绘本详情', '粤语分级阅读绘本', 'detail'],
  'learning/books/hambaanglaang/index/index': ['粤语绘本', '适合亲子阅读的故事', 'course'],
  'learning/crat/char-bucket/index': ['生字篮', '文章中收集的生字', 'collection'],
  'learning/crat/char/index': ['汉字练习', '选择正确的粤语读音', 'quiz'],
  'learning/crat/test/index': ['综合测验', '完成今日学习挑战', 'quiz'],
  'learning/crat/word-bucket/index': ['生词篮', '文章中收集的词语', 'collection'],
  'learning/crat/word/index': ['词语练习', '理解词义和使用场景', 'quiz'],
  'pay/vip/index': ['粤语会员', '解锁完整学习工具', 'pay'],
  'pay/agreement/index': ['会员协议', '本地演示版服务说明', 'agreement'],
  'pay/redeem/index': ['兑换会员', '输入兑换码领取权益', 'form'],
  'pay/redeem-claim/index': ['领取成功', '会员权益已写入本地', 'success'],
  'correction/sessions/index': ['纠音课堂', '预约与查看练习记录', 'collection'],
  'correction/session/detail': ['课堂详情', '本次纠音重点与建议', 'detail'],
  'correction/teacher/students/index': ['我的学员', '学员学习进度概览', 'collection'],
  'correction/teacher/students/bind/index': ['绑定学员', '输入邀请码建立关系', 'form'],
  'correction/teacher/students/detail/index': ['学员详情', '查看学员训练数据', 'detail'],
  'correction/teacher/students/checkins/index': ['学员打卡', '最近提交的朗读练习', 'collection'],
  'correction/teacher/wallet/index': ['教师钱包', '本地模拟收益明细', 'pay'],
  'correction/student/bind/index': ['绑定老师', '输入老师邀请码', 'form'],
  'correction/student/errors/index': ['纠音报告', '需要重点改进的发音', 'dashboard'],
  'correction/student/errors/list/index': ['错音列表', '按声母韵母分类练习', 'collection'],
  'correction/student/errors/detail/index': ['错音详情', '发音建议与跟读例词', 'detail'],
  'correction/student/errors/tags/index': ['问题分类', '查看不同类型的错音', 'collection'],
  'correction/student/errors/tags/detail/index': ['分类详情', '专项纠音练习', 'detail']
};

const commonItems = {
  collection: [
    ['今日粤语：食咗饭未？', 'sik6 zo2 faan6 mei6 · 今天 09:30', '继续学习'],
    ['生活会话：搭车返屋企', 'daap3 ce1 faan1 uk1 kei2 · 昨天', '查看详情'],
    ['粤语小知识：九声六调', '完成度 72% · 3 天前', '再次复习']
  ],
  course: [
    ['第一课 · 打招呼', '你好 nei5 hou2 / 多谢 do1 ze6', '已完成'],
    ['第二课 · 饮茶', '唔该 m4 goi1 / 埋单 maai4 daan1', '学习中'],
    ['第三课 · 问路', '边度 bin1 dou6 / 点去 dim2 heoi3', '未开始']
  ],
  detail: [
    ['粤语原句', '我今日想去饮茶。', 'ngo5 gam1 jat6 soeng2 heoi3 jam2 caa4'],
    ['普通话释义', '我今天想去喝早茶。', '生活会话'],
    ['学习提示', '“饮茶”在粤语地区也常指吃早茶。', '收藏例句']
  ],
  dashboard: [
    ['今日任务', '已完成 3 / 5 项', '60%'],
    ['本周学习', '累计 128 分钟', '+18%'],
    ['连续打卡', '连续学习 12 天', '继续保持']
  ],
  settings: [
    ['显示粤拼', '在汉字下方显示粤拼标注', '开启'],
    ['自动播放', '进入详情后自动播放发音', '开启'],
    ['学习提醒', '每天 20:00 提醒打卡', '关闭']
  ],
  quiz: [
    ['“唔该”通常在什么场景使用？', '请求帮助或接受服务时', 'A'],
    ['“边度”是什么意思？', '哪里', 'B'],
    ['“返屋企”是什么意思？', '回家', 'C']
  ],
  pay: [
    ['月度会员', '连续包月，随时可取消', '¥12'],
    ['年度会员', '完整课程与学习工具', '¥98'],
    ['家庭会员', '最多 4 位成员共同使用', '¥168']
  ],
  agreement: [
    ['一、服务说明', '本恢复版本使用本地模拟数据，不会产生真实扣费。', ''],
    ['二、账号权益', '模拟会员权益仅保存在当前微信开发者工具缓存中。', ''],
    ['三、隐私说明', '表单内容仅保存在本机，不会上传服务器。', '']
  ]
};

function cfgFor(route) {
  const [title, subtitle, type] = labels[route] || ['功能页面', '使用本地模拟数据', 'collection'];
  let items = commonItems[type] || commonItems.collection;
  let inputLabel = '请输入内容';
  let inputValue = '';
  let primary = '保存到本地';
  if (type === 'search') { inputLabel = '输入歌名或歌手'; primary = '搜索'; items = [['海阔天空', 'Beyond · 粤语经典', '播放'], ['富士山下', '陈奕迅 · 粤语流行', '播放'], ['喜帖街', '谢安琪 · 粤语流行', '播放']]; }
  if (type === 'convert') { inputLabel = '输入中文，例如：今天一起吃饭'; primary = '开始转换'; items = [['普通话', '今天一起吃饭吧', '输入'], ['粤语表达', '今日一齐食饭啦', 'gam1 jat6 jat1 cai4 sik6 faan6 laa1'], ['提示', '点击结果可以复制', '本地生成']]; }
  if (type === 'form') { inputLabel = route.includes('redeem') ? '请输入兑换码，例如：JYUTPING2026' : '请输入名称、内容或邀请码'; primary = route.includes('feedback') ? '提交反馈' : '确认保存'; items = [['本地保存', '内容只写入开发者工具缓存', '安全'], ['演示数据', '可以反复修改或清空', '可编辑']]; }
  if (type === 'success') { primary = '返回首页'; items = [['领取结果', '粤语学习会员 30 天', '已生效'], ['到期时间', '2026-08-31 23:59', '本地模拟']]; }
  return { route, title, subtitle, type, items, inputLabel, inputValue, primary };
}

const wxml = `<!-- 此页面由缺失分包恢复器生成，使用本地模拟数据 -->
<view class="page">
  <view class="hero">
    <view class="hero-badge">离线演示</view>
    <view class="hero-title">{{title}}</view>
    <view class="hero-subtitle">{{subtitle}}</view>
  </view>

  <view wx:if="{{type === 'profile'}}" class="profile card">
    <view class="avatar">粤</view>
    <view class="profile-main"><view class="item-title">粤语学习者</view><view class="item-desc">ID: LOCAL-2026 · 广州</view></view>
    <view class="level">Lv.12</view>
  </view>

  <view wx:if="{{type === 'dashboard' || type === 'profile'}}" class="stats">
    <view class="stat"><text class="stat-value">{{stats.days}}</text><text class="stat-label">学习天数</text></view>
    <view class="stat"><text class="stat-value">{{stats.minutes}}</text><text class="stat-label">学习分钟</text></view>
    <view class="stat"><text class="stat-value">{{stats.words}}</text><text class="stat-label">掌握词汇</text></view>
  </view>

  <view wx:if="{{hasInput}}" class="card form-card">
    <view class="section-title">{{inputLabel}}</view>
    <textarea wx:if="{{type === 'convert' || type === 'form'}}" class="textarea" value="{{inputValue}}" placeholder="{{inputLabel}}" maxlength="300" bindinput="onInput" />
    <input wx:else class="input" value="{{inputValue}}" placeholder="{{inputLabel}}" bindinput="onInput" />
    <button class="primary" bindtap="onPrimary">{{primary}}</button>
  </view>

  <view wx:if="{{type === 'settings'}}" class="card settings-card">
    <view wx:for="{{items}}" wx:key="title" class="setting-row">
      <view class="setting-copy"><view class="item-title">{{item.title}}</view><view class="item-desc">{{item.desc}}</view></view>
      <switch color="#ff7a45" checked="{{item.enabled}}" data-index="{{index}}" bindchange="onSwitch" />
    </view>
  </view>

  <view wx:else class="card list-card">
    <view class="section-head"><text class="section-title">{{sectionTitle}}</text><text class="section-extra">{{items.length}} 项</text></view>
    <view wx:for="{{items}}" wx:key="title" class="item" data-index="{{index}}" bindtap="onItemTap">
      <view class="item-index">{{index + 1}}</view>
      <view class="item-main"><view class="item-title">{{item.title}}</view><view class="item-desc">{{item.desc}}</view></view>
      <view class="item-meta">{{item.meta}}</view>
    </view>
    <view wx:if="{{!items.length}}" class="empty">暂无内容，试试添加一条本地数据</view>
  </view>

  <view class="actions">
    <button class="ghost" bindtap="onAdd">添加演示数据</button>
    <button class="ghost" bindtap="onReset">恢复默认</button>
  </view>
  <view class="notice">本页面根据已知路由补全，数据仅保存在本机，不会调用原项目服务器。</view>
</view>`;

const wxss = `page{background:#f5f6f8;color:#24262b;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.page{padding:28rpx 28rpx 60rpx}.hero{padding:28rpx 4rpx 34rpx}.hero-badge{display:inline-block;padding:7rpx 16rpx;border-radius:999rpx;background:#fff0e8;color:#db5b20;font-size:22rpx}.hero-title{margin-top:20rpx;font-size:48rpx;font-weight:700;letter-spacing:1rpx}.hero-subtitle{margin-top:10rpx;color:#7a7f87;font-size:27rpx}.card{background:#fff;border-radius:24rpx;box-shadow:0 8rpx 28rpx rgba(27,33,45,.05);margin-bottom:24rpx}.profile{display:flex;align-items:center;padding:28rpx}.avatar{display:flex;align-items:center;justify-content:center;width:94rpx;height:94rpx;border-radius:30rpx;background:linear-gradient(135deg,#ffb36a,#ff7043);color:#fff;font-size:40rpx;font-weight:700}.profile-main{flex:1;margin-left:22rpx}.level{padding:7rpx 14rpx;border-radius:999rpx;background:#fff3d9;color:#a56600;font-size:22rpx}.stats{display:flex;gap:16rpx;margin-bottom:24rpx}.stat{flex:1;display:flex;flex-direction:column;align-items:center;padding:24rpx 8rpx;background:#fff;border-radius:20rpx}.stat-value{font-size:36rpx;font-weight:700;color:#ff7043}.stat-label{margin-top:6rpx;color:#92969d;font-size:21rpx}.form-card{padding:28rpx}.section-title{font-size:29rpx;font-weight:650}.input,.textarea{box-sizing:border-box;width:100%;margin-top:20rpx;padding:22rpx 24rpx;border:2rpx solid #e8eaed;border-radius:16rpx;background:#fafbfc;font-size:27rpx}.textarea{height:180rpx}.primary{margin-top:22rpx;border:0;border-radius:16rpx;background:linear-gradient(135deg,#ff8a55,#ff6242);color:white;font-size:28rpx}.primary::after,.ghost::after{border:0}.list-card{overflow:hidden}.section-head{display:flex;justify-content:space-between;align-items:center;padding:28rpx 26rpx 12rpx}.section-extra{color:#a0a4aa;font-size:22rpx}.item{display:flex;align-items:center;min-height:112rpx;padding:18rpx 24rpx;border-top:1rpx solid #f0f1f3}.item-index{display:flex;align-items:center;justify-content:center;width:52rpx;height:52rpx;border-radius:16rpx;background:#fff0e8;color:#e76532;font-size:24rpx}.item-main{flex:1;min-width:0;margin-left:18rpx}.item-title{font-size:28rpx;font-weight:600}.item-desc{overflow:hidden;margin-top:7rpx;color:#858a92;font-size:23rpx;text-overflow:ellipsis;white-space:nowrap}.item-meta{max-width:150rpx;margin-left:12rpx;color:#ff7043;font-size:21rpx;text-align:right}.settings-card{padding:0 24rpx}.setting-row{display:flex;align-items:center;min-height:120rpx;border-bottom:1rpx solid #f0f1f3}.setting-row:last-child{border-bottom:0}.setting-copy{flex:1}.empty{padding:60rpx 20rpx;color:#a0a4aa;text-align:center}.actions{display:flex;gap:18rpx;margin-top:28rpx}.ghost{flex:1;border:2rpx solid #e5e7eb;border-radius:15rpx;background:#fff;color:#60656d;font-size:25rpx}.notice{margin-top:26rpx;color:#a0a4aa;font-size:21rpx;line-height:1.6;text-align:center}`;

function jsFor(cfg) {
  const seed = JSON.stringify(cfg, null, 2);
  return `// 此页面由缺失分包恢复器生成，使用本地模拟数据\nconst defaults = ${seed};\n\nfunction normalize(items) {\n  return items.map((item, index) => Array.isArray(item)\n    ? { id: index + 1, title: item[0], desc: item[1], meta: item[2], enabled: index < 2 }\n    : item);\n}\n\nPage({\n  data: {\n    route: defaults.route, title: defaults.title, subtitle: defaults.subtitle, type: defaults.type,\n    inputLabel: defaults.inputLabel, inputValue: defaults.inputValue, primary: defaults.primary,\n    sectionTitle: defaults.type === 'quiz' ? '练习题' : '本地内容',\n    hasInput: ['search', 'convert', 'form'].includes(defaults.type),\n    stats: { days: 28, minutes: 860, words: 326 },\n    items: normalize(defaults.items)\n  },\n  onLoad(options) {\n    const key = 'fallback:' + defaults.route;\n    this.storageKey = key;\n    const saved = wx.getStorageSync(key);\n    if (saved && saved.items) this.setData({ ...saved, route: defaults.route, title: defaults.title, subtitle: defaults.subtitle });\n    if (options && options.keyword) this.setData({ inputValue: options.keyword });\n  },\n  persist() {\n    wx.setStorageSync(this.storageKey, { items: this.data.items, inputValue: this.data.inputValue, stats: this.data.stats });\n  },\n  onInput(e) { this.setData({ inputValue: e.detail.value }); },\n  onSwitch(e) {\n    const i = Number(e.currentTarget.dataset.index);\n    this.setData({ ['items[' + i + '].enabled']: e.detail.value });\n    this.persist();\n    wx.showToast({ title: '设置已保存', icon: 'success' });\n  },\n  onPrimary() {\n    const value = (this.data.inputValue || '').trim();\n    if (!value) return wx.showToast({ title: '请先输入内容', icon: 'none' });\n    let item;\n    if (defaults.type === 'convert') {\n      const dictionary = { '今天': '今日 gam1 jat6', '吃饭': '食饭 sik6 faan6', '谢谢': '多谢 do1 ze6', '哪里': '边度 bin1 dou6', '回家': '返屋企 faan1 uk1 kei2' };\n      let result = value;\n      Object.keys(dictionary).forEach(k => { result = result.split(k).join(dictionary[k]); });\n      item = { id: Date.now(), title: '转换结果', desc: result === value ? value + '（本地示例粤拼）' : result, meta: '可复制' };\n    } else if (defaults.type === 'search') {\n      item = { id: Date.now(), title: value, desc: '本地搜索结果 · 粤语歌曲', meta: '播放' };\n    } else {\n      item = { id: Date.now(), title: value, desc: '已保存于 ' + new Date().toLocaleString(), meta: '本地记录' };\n    }\n    this.setData({ items: [item, ...this.data.items], inputValue: '' });\n    this.persist();\n    wx.showToast({ title: defaults.type === 'search' ? '搜索完成' : '已保存', icon: 'success' });\n  },\n  onItemTap(e) {\n    const item = this.data.items[Number(e.currentTarget.dataset.index)];\n    if (!item) return;\n    wx.showModal({ title: item.title, content: item.desc + (item.meta ? '\\n\\n' + item.meta : ''), confirmText: '复制', success: r => { if (r.confirm) wx.setClipboardData({ data: item.title + '\\n' + item.desc }); } });\n  },\n  onAdd() {\n    const item = { id: Date.now(), title: '自定义演示数据', desc: '创建于 ' + new Date().toLocaleString(), meta: '可用' };\n    this.setData({ items: [item, ...this.data.items] }); this.persist();\n    wx.showToast({ title: '添加成功', icon: 'success' });\n  },\n  onReset() {\n    wx.removeStorageSync(this.storageKey);\n    this.setData({ items: normalize(defaults.items), inputValue: '', stats: { days: 28, minutes: 860, words: 326 } });\n    wx.showToast({ title: '已恢复默认', icon: 'success' });\n  },\n  onShareAppMessage() { return { title: defaults.title, path: '/' + defaults.route }; }\n});\n`;
}

let written = 0;
const missing = [];
for (const pkg of app.subPackages || []) {
  if (excluded.has(pkg.root)) continue;
  for (const page of pkg.pages || []) {
    const route = pkg.root + page;
    const base = path.join(root, route);
    const jsPath = base + '.js';
    const oldJs = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, 'utf8') : '';
    if (!/Page\s*\(\s*\{\s*data\s*:\s*\{\s*\}\s*\}\s*\)/.test(oldJs) && !oldJs.includes('缺失分包恢复器生成')) continue;
    const cfg = cfgFor(route.replace(/^pages\//, ''));
    fs.mkdirSync(path.dirname(base), { recursive: true });
    fs.writeFileSync(jsPath, jsFor(cfg));
    fs.writeFileSync(base + '.wxml', wxml);
    fs.writeFileSync(base + '.wxss', wxss);
    const jsonPath = base + '.json';
    let json = {};
    try { json = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch (_) {}
    json.navigationBarTitleText = cfg.title;
    json.backgroundColor = '#f5f6f8';
    fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
    written++;
    if (!labels[route.replace(/^pages\//, '')]) missing.push(route);
  }
}

console.log(JSON.stringify({ written, unlabeled: missing }, null, 2));
