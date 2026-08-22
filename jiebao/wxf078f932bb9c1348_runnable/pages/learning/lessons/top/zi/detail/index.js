// 此页面由缺失分包恢复器生成，使用本地模拟数据
const defaults = {
  "route": "learning/lessons/top/zi/detail/index",
  "title": "热门字词",
  "subtitle": "常见粤语特色字",
  "type": "detail",
  "items": [
    [
      "粤语原句",
      "我今日想去饮茶。",
      "ngo5 gam1 jat6 soeng2 heoi3 jam2 caa4"
    ],
    [
      "普通话释义",
      "我今天想去喝早茶。",
      "生活会话"
    ],
    [
      "学习提示",
      "“饮茶”在粤语地区也常指吃早茶。",
      "收藏例句"
    ]
  ],
  "inputLabel": "请输入内容",
  "inputValue": "",
  "primary": "保存到本地"
};

function normalize(items) {
  return items.map((item, index) => Array.isArray(item)
    ? { id: index + 1, title: item[0], desc: item[1], meta: item[2], enabled: index < 2 }
    : item);
}

Page({
  data: {
    route: defaults.route, title: defaults.title, subtitle: defaults.subtitle, type: defaults.type,
    inputLabel: defaults.inputLabel, inputValue: defaults.inputValue, primary: defaults.primary,
    sectionTitle: defaults.type === 'quiz' ? '练习题' : '本地内容',
    hasInput: ['search', 'convert', 'form'].includes(defaults.type),
    stats: { days: 28, minutes: 860, words: 326 },
    items: normalize(defaults.items)
  },
  onLoad(options) {
    const key = 'fallback:' + defaults.route;
    this.storageKey = key;
    const saved = wx.getStorageSync(key);
    if (saved && saved.items) this.setData({ ...saved, route: defaults.route, title: defaults.title, subtitle: defaults.subtitle });
    if (options && options.keyword) this.setData({ inputValue: options.keyword });
  },
  persist() {
    wx.setStorageSync(this.storageKey, { items: this.data.items, inputValue: this.data.inputValue, stats: this.data.stats });
  },
  onInput(e) { this.setData({ inputValue: e.detail.value }); },
  onSwitch(e) {
    const i = Number(e.currentTarget.dataset.index);
    this.setData({ ['items[' + i + '].enabled']: e.detail.value });
    this.persist();
    wx.showToast({ title: '设置已保存', icon: 'success' });
  },
  onPrimary() {
    const value = (this.data.inputValue || '').trim();
    if (!value) return wx.showToast({ title: '请先输入内容', icon: 'none' });
    let item;
    if (defaults.type === 'convert') {
      const dictionary = { '今天': '今日 gam1 jat6', '吃饭': '食饭 sik6 faan6', '谢谢': '多谢 do1 ze6', '哪里': '边度 bin1 dou6', '回家': '返屋企 faan1 uk1 kei2' };
      let result = value;
      Object.keys(dictionary).forEach(k => { result = result.split(k).join(dictionary[k]); });
      item = { id: Date.now(), title: '转换结果', desc: result === value ? value + '（本地示例粤拼）' : result, meta: '可复制' };
    } else if (defaults.type === 'search') {
      item = { id: Date.now(), title: value, desc: '本地搜索结果 · 粤语歌曲', meta: '播放' };
    } else {
      item = { id: Date.now(), title: value, desc: '已保存于 ' + new Date().toLocaleString(), meta: '本地记录' };
    }
    this.setData({ items: [item, ...this.data.items], inputValue: '' });
    this.persist();
    wx.showToast({ title: defaults.type === 'search' ? '搜索完成' : '已保存', icon: 'success' });
  },
  onItemTap(e) {
    const item = this.data.items[Number(e.currentTarget.dataset.index)];
    if (!item) return;
    wx.showModal({ title: item.title, content: item.desc + (item.meta ? '\n\n' + item.meta : ''), confirmText: '复制', success: r => { if (r.confirm) wx.setClipboardData({ data: item.title + '\n' + item.desc }); } });
  },
  onAdd() {
    const item = { id: Date.now(), title: '自定义演示数据', desc: '创建于 ' + new Date().toLocaleString(), meta: '可用' };
    this.setData({ items: [item, ...this.data.items] }); this.persist();
    wx.showToast({ title: '添加成功', icon: 'success' });
  },
  onReset() {
    wx.removeStorageSync(this.storageKey);
    this.setData({ items: normalize(defaults.items), inputValue: '', stats: { days: 28, minutes: 860, words: 326 } });
    wx.showToast({ title: '已恢复默认', icon: 'success' });
  },
  onShareAppMessage() { return { title: defaults.title, path: '/' + defaults.route }; }
});
