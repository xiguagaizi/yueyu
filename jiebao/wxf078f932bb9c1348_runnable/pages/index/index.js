const DEFAULT_RECENT = [
  { title: '粤拼基础：九声六调', desc: '认识粤语声调，从正确发音开始', tag: '入门', path: '/pages/learning/base/jyutping/index' },
  { title: '生活会话：食咗饭未？', desc: '学习最地道的日常问候', tag: '会话', path: '/pages/learning/base/beginner/list/index' },
  { title: '每日粤听', desc: '用短音频训练粤语听力', tag: '听力', path: '/pages/voice/index/index' }
];

Page({
  data: {
    nickname: '粤语学习者',
    checkinDays: 12,
    learnedWords: 326,
    studyMinutes: 860,
    recent: DEFAULT_RECENT
  },

  onLoad() {
    const profile = wx.getStorageSync('local-home-profile');
    if (profile) this.setData(profile);
  },

  go(e) {
    const url = e.currentTarget.dataset.url;
    if (!url) return;
    wx.navigateTo({
      url,
      fail() {
        wx.showToast({ title: '页面暂时无法打开', icon: 'none' });
      }
    });
  },

  checkin() {
    const next = Number(this.data.checkinDays || 0) + 1;
    this.setData({ checkinDays: next });
    wx.setStorageSync('local-home-profile', {
      nickname: this.data.nickname,
      checkinDays: next,
      learnedWords: this.data.learnedWords,
      studyMinutes: this.data.studyMinutes
    });
    wx.showToast({ title: '打卡成功', icon: 'success' });
  },

  onShareAppMessage() {
    return { title: '粤语派 · 轻松学粤语', path: '/pages/index/index' };
  }
});
