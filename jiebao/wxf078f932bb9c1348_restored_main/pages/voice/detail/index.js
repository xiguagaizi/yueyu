var e, t = require("../../../@babel/runtime/helpers/defineProperty"),
        a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        i = require("../../../@babel/runtime/helpers/objectSpread2"),
        r = require("../../../commons/utils"),
        o = require("../../../commons/punctuation"),
        s = h(require("../../../api/getDailyVoice")),
        c = h(require("../../../api/addFav")),
        u = h(require("../../../api/getFavState")),
        l = h(require("../../../api/deleteFav")),
        d = require("../../../commons/config");
    require("../../../utils/login");

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = function(e) {
        var t = Math.floor(e / 60),
            a = Math.floor(e % 60);
        return "".concat(t.toString().padStart(2, "0"), ":").concat(a.toString().padStart(2, "0"))
    };

    function v(e) {
        return "string" == typeof e.text ? i(i({}, e), {}, {
            cantonese: [e]
        }) : Array.isArray(e.text) ? i(i({}, e), {}, {
            cantonese: e.text
        }) : e
    }
    Page((e = {
        navBack: r.navBack,
        data: {
            isPlaying: !1,
            playCount: 1234,
            currentTime: "00:00",
            totalTime: "00:00",
            isFavorite: !1,
            article: [],
            currentRow: -1,
            currentCol: -1,
            showSettingPanel: !1,
            circlePlay: !1,
            autoPlay: !1,
            loaded: !1
        },
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: d.DAILY_VOICE_PLAY_SETTING,
                complete: function(t) {
                    if (t.data) {
                        var a = t.data,
                            n = a.autoPlay,
                            i = void 0 !== n && n,
                            r = a.circlePlay,
                            o = void 0 !== r && r;
                        e.setData({
                            autoPlay: i,
                            circlePlay: o
                        })
                    }
                }
            })
        },
        onLoad: function(e) {
            var t = this;
            return n(a().mark((function n() {
                var i, r;
                return a().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            t.id = e.id || "", t.accessToken = e.accessToken || "";
                            try {
                                t.accessToken = t.accessToken ? decodeURIComponent(t.accessToken) : ""
                            } catch (e) {}
                            if (t.id) {
                                a.next = 6;
                                break
                            }
                            return wx.showToast({
                                title: "参数错误"
                            }), a.abrupt("return");
                        case 6:
                            return a.next = 8, t.loadData();
                        case 8:
                            t.notAllowAudio = null === (i = getApp()) || void 0 === i || null === (r = i.globalData) || void 0 === r ? void 0 : r.notAllowAudio;
                        case 9:
                        case "end":
                            return a.stop()
                    }
                }), n)
            })))()
        },
        loadData: function() {
            var e = this;
            return n(a().mark((function t() {
                var n, i, o;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, wx.showLoading({
                                title: "加载中..."
                            }), t.prev = 2, !1, t.next = 6, (0, s.default)(e.id, {
                                guest: !1,
                                accessToken: e.accessToken
                            });
                        case 6:
                            if (i = t.sent, !0 !== (null == (o = i.data) ? void 0 : o.needVip)) {
                                t.next = 12;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, r.navToOpenVip)(), (0, r.navBack)()
                                }
                            }), t.abrupt("return");
                        case 12:
                            n.formatArticle(o), n.isGuest = o.isGuest || !1, n.getFavState(), n.loadSetting(), n.initAudio(o.audioUrl), t.next = 23;
                            break;
                        case 19:
                            t.prev = 19, t.t0 = t.catch(2), console.error(t.t0), wx.showModal({
                                content: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            });
                        case 23:
                            wx.hideLoading();
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 19]
                ])
            })))()
        },
        initAudio: function(e) {
            var t = this,
                a = this;
            a.audio = wx.createInnerAudioContext(), a.audio.src = e, a.audio.onCanplay((function() {
                a.setData({
                    totalTime: f(a.audio.duration)
                }), a.data.autoPlay && a.togglePlay()
            })), this.audio.onEnded((function() {
                a.setData({
                    currentRow: -1,
                    isPlaying: !1,
                    currentTime: "00:00"
                }, (function() {
                    a.data.circlePlay && a.togglePlay()
                }))
            })), this.audio.onTimeUpdate((function() {
                var e = 1e3 * t.audio.currentTime;
                t.audio.duration;
                t.setData({
                    currentTime: f(t.audio.currentTime),
                    totalTime: f(t.audio.duration)
                });
                for (var n = t.data, i = n.article, r = n.currentRow, o = 0; o < i.length; o++) {
                    var s = i[o];
                    s[0].begin_time < e && s[s.length - 1].end_time > e && r !== o && (a.setData({
                        currentRow: o
                    }), a.scrollToCenter())
                }
            }))
        },
        onUnload: function() {
            this.destroyAudio()
        },
        onHide: function() {
            this.pauseAudio()
        },
        destroyAudio: function() {
            this.audio && (this.audio.stop(), this.audio.destroy())
        },
        pauseAudio: function() {
            this.audio && this.data.isPlaying && this.audio.pause()
        },
        formatArticle: function(e) {
            var t = e.content.map((function(e) {
                return e.map((function(e) {
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = v(e),
                            a = Array.isArray(t.words) ? t.words : Array.isArray(t.cantonese) ? t.cantonese : [];
                        return a.length ? i(i({}, t), {}, {
                            words: (0, o.normalizeWordsWithPunctuation)(a)
                        }) : t
                    }(e)
                }))
            }));
            this.setData({
                article: t,
                title: "每日粤听".concat(e.vol ? " Vol." + e.vol : ""),
                loaded: !0
            }), this.audioUrl = e.audioUrl, this.shareConfig = {
                title: e.title || "每日粤听",
                path: "/pages/voice/detail/index?id=".concat(e.uuid)
            }, e.sharePic && (this.shareConfig.imageUrl = e.sharePic)
        },
        scrollToCenter: function() {
            wx.createSelectorQuery().select(".active").boundingClientRect().exec((function(e) {
                if (e[0]) {
                    var t = e[0].top;
                    wx.createSelectorQuery().selectViewport().scrollOffset().exec((function(e) {
                        var a = e[0].scrollTop,
                            n = (wx.getWindowInfo().windowHeight - 80) / 2;
                        wx.pageScrollTo({
                            scrollTop: a + t - n
                        })
                    }))
                }
            }))
        },
        togglePlay: function() {
            this.notAllowAudio ? wx.showModal({
                content: "小程序暂不支持播放，请下载APP体验",
                showCancel: !1
            }) : this.audio && (this.data.isPlaying ? (this.audio.pause(), this.setData({
                isPlaying: !1
            })) : (this.audio.play(), this.setData({
                isPlaying: !0
            })))
        },
        toggleFavorite: function() {
            var e = !this.data.isFavorite;
            this.setData({
                isFavorite: e
            }), wx.showToast({
                title: e ? "已收藏" : "已取消收藏",
                icon: "success",
                duration: 1500
            })
        },
        share: function() {
            wx.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
            })
        }
    }, t(e, "share", (function() {
        wx.showShareMenu({
            withShareTicket: !0,
            menus: ["shareAppMessage", "shareTimeline"]
        })
    })), t(e, "onShareAppMessage", (function() {
        return this.shareConfig
    })), t(e, "onShareTimeline", (function() {
        return {
            title: this.data.article.title,
            imageUrl: "/images/share-article.png"
        }
    })), t(e, "getFavState", (function() {
        var e = this;
        return n(a().mark((function t() {
            var n, i, r;
            return a().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, (0, u.default)("dailyvoice", e.id);
                    case 3:
                        if (n = t.sent, i = n.code, r = n.data.id, 0 !== i) {
                            t.next = 10;
                            break
                        }
                        e.setData({
                            favId: r
                        }), t.next = 11;
                        break;
                    case 10:
                        throw "error";
                    case 11:
                        t.next = 15;
                        break;
                    case 13:
                        t.prev = 13, t.t0 = t.catch(0);
                    case 15:
                    case "end":
                        return t.stop()
                }
            }), t, null, [
                [0, 13]
            ])
        })))()
    })), t(e, "favHandle", (function() {
        var e = this.data.favId;
        e ? this.doDeleteFav(e) : this.doAddFav()
    })), t(e, "doDeleteFav", (function(e) {
        var t = this;
        return n(a().mark((function n() {
            var i, r;
            return a().wrap((function(a) {
                for (;;) switch (a.prev = a.next) {
                    case 0:
                        return a.prev = 0, a.next = 3, (0, l.default)(e);
                    case 3:
                        i = a.sent, 1 === (null == (r = i.data) ? void 0 : r.removed) && t.setData({
                            favId: 0
                        }), a.next = 10;
                        break;
                    case 8:
                        a.prev = 8, a.t0 = a.catch(0);
                    case 10:
                    case "end":
                        return a.stop()
                }
            }), n, null, [
                [0, 8]
            ])
        })))()
    })), t(e, "doAddFav", (function() {
        var e = this;
        return n(a().mark((function t() {
            var n, i;
            return a().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, (0, c.default)({
                            bid: e.id,
                            category: "dailyvoice"
                        });
                    case 2:
                        n = t.sent, null != (i = n.data) && i.id && (e.setData({
                            favId: i.id
                        }), wx.showToast({
                            title: "收藏成功",
                            icon: "success"
                        }));
                    case 5:
                    case "end":
                        return t.stop()
                }
            }), t)
        })))()
    })), t(e, "toggleSettingPanel", (function() {
        this.setData({
            showSettingPanel: !this.data.showSettingPanel
        })
    })), t(e, "onChange", (function(e) {
        var a = this,
            n = e.currentTarget.dataset.name;
        this.setData(t({}, n, !a.data[n]), (function() {
            var e = a.data,
                t = e.circlePlay,
                n = void 0 !== t && t,
                i = e.autoPlay,
                r = void 0 !== i && i;
            wx.setStorage({
                key: d.DAILY_VOICE_PLAY_SETTING,
                data: {
                    circlePlay: n,
                    autoPlay: r
                }
            })
        }))
    })), t(e, "navBack", r.navBack), e));