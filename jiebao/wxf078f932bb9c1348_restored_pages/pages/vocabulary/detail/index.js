var e, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../@babel/runtime/helpers/toConsumableArray"),
        a = (e = require("../../../api/getVocabulary")) && e.__esModule ? e : {
            default: e
        },
        i = require("../../../commons/utils"),
        o = require("../../../commons/config"),
        s = require("../../../components/ruby-token/shared");
    Page({
        navBack: i.navBack,
        data: {
            isPlaying: !1,
            currWordIdx: -1,
            currExampleIdx: -1,
            currMode: "",
            list: [],
            pinyinScheme: "",
            rubyDisplayStyle: "annotated"
        },
        parseCantonesePairs: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = /(.+?)\(([a-zA-Z]+\d?)\)/g;
            return r(String(e || "").matchAll(t)).map((function(e) {
                return [e[1], e[2]]
            }))
        },
        decoratePairs: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.pinyinScheme;
            return (Array.isArray(e) ? e : []).map((function(e, n) {
                return {
                    key: "".concat(e[0] || "", "_").concat(e[1] || "", "_").concat(n),
                    rubyToken: (0, s.buildRubyToken)(e[0] || "", e[1] || "", t)
                }
            }))
        },
        formatData: function(e) {
            var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.pinyinScheme,
                a = r(e),
                i = a.map((function(e) {
                    var r = t.parseCantonesePairs(e.cantonese),
                        a = (Array.isArray(e.usage) ? e.usage : []).map((function(e) {
                            var r = t.parseCantonesePairs(e.cantonese);
                            return {
                                chinese: e.chinese || "",
                                audio: e.audioUrl || "",
                                cantonese: r,
                                cantoneseTokens: t.decoratePairs(r, n)
                            }
                        }));
                    return {
                        word: r.map((function(e) {
                            return e[0]
                        })).join(""),
                        contoneseArr: r,
                        wordTokens: t.decoratePairs(r, n),
                        meaning: e.meaning || "",
                        tips: e.tips || "",
                        usage: a
                    }
                }));
            return i
        },
        onLoad: function(e) {
            var r = this;
            return n(t().mark((function n() {
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r.id = e.id, r.id) {
                                t.next = 4;
                                break
                            }
                            return wx.showModal({
                                content: "参数错误",
                                showCancel: !1,
                                complete: i.navBack
                            }), t.abrupt("return");
                        case 4:
                            r.setData({
                                pinyinScheme: r.getCurrentPinyinScheme(),
                                rubyDisplayStyle: r.getCurrentRubyDisplayStyle()
                            }), r.loadData(), r.AUDIO_BASE = (0, i.getAudioBasePath)();
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        loadData: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, i, o, s;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, a.default)(e.id);
                        case 2:
                            i = t.sent, o = i.code, s = i.data, 0 === o && null != s && null !== (r = s.item) && void 0 !== r && r.length && (e.rawList = Array.isArray(s.item) ? s.item : [], e.setData({
                                list: e.formatData(e.rawList, e.data.pinyinScheme)
                            }));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        getCurrentPinyinScheme: function() {
            return (0, i.getPinyinScheme)() || ""
        },
        getCurrentRubyDisplayStyle: function() {
            return (0, i.getRubyDisplayStyle)() || "annotated"
        },
        refreshDisplayPreferences: function() {
            var e = this.getCurrentPinyinScheme(),
                t = this.getCurrentRubyDisplayStyle();
            if (e !== this.data.pinyinScheme || t !== this.data.rubyDisplayStyle) {
                var n = {};
                e !== this.data.pinyinScheme && (n.pinyinScheme = e, n.list = this.formatData(this.rawList || [], e)), t !== this.data.rubyDisplayStyle && (n.rubyDisplayStyle = t), this.setData(n)
            }
        },
        resetCurrent: function() {
            this.setData({
                isPlaying: !1,
                currExampleIdx: -1,
                currWordIdx: -1,
                currMode: ""
            })
        },
        play: function(e) {
            var t = this,
                n = this,
                r = n.data,
                a = r.isPlaying,
                o = r.currWordIdx,
                s = r.currExampleIdx,
                u = e.currentTarget.dataset,
                c = u.item,
                l = u.mode,
                d = u.wordidx,
                y = u.exampleidx;
            if (!a || (i.playAudio.stop(), i.playAudio.destroy(), n.resetCurrent(), o !== d || s !== y)) {
                var p = c.map((function(e) {
                        return e[1]
                    })),
                    h = function e(r) {
                        var a = function() {
                                (r += 1) >= p.length ? n.resetCurrent() : i.playAudio.t = setTimeout((function() {
                                    e(r)
                                }), 0)
                            },
                            o = p[r];
                        if (!1 !== /^\w+\d{1}$/.test(o)) {
                            var s = "".concat(t.AUDIO_BASE, "/").concat(o, ".mp3");
                            (0, i.playAudio)(s, a, a), n.setData({
                                isPlaying: !0,
                                currWordIdx: d,
                                currExampleIdx: y,
                                currMode: l
                            })
                        } else a()
                    };
                h(0)
            }
        },
        navToNotebookAdd: function(e) {
            var t = e.currentTarget.dataset.word || "",
                n = String(t).trim();
            n && wx.navigateTo({
                url: "/pages/tools/vocab-notebook/add/index?word=".concat(encodeURIComponent(n))
            })
        },
        onReady: function() {},
        onShow: function() {
            this.refreshDisplayPreferences()
        },
        onHide: function() {},
        onUnload: function() {
            i.playAudio.stop(), i.playAudio.destroy()
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {
            var e, t, n = "粤语重点词汇学习";
            return null !== (e = this.data.list) && void 0 !== e && null !== (t = e[0]) && void 0 !== t && t.contoneseArr && (n = "“".concat(this.data.list[0].contoneseArr.map((function(e) {
                return e[0]
            })).join(""), "”是什么意思")), {
                title: n,
                imageUrl: o.SHARE_IMG_URLS.VOC
            }
        },
        onShareTimeline: function() {
            var e, t, n = "粤语重点词汇学习";
            return null !== (e = this.data.list) && void 0 !== e && null !== (t = e[0]) && void 0 !== t && t.contoneseArr && (n = "“".concat(this.data.list[0].contoneseArr.map((function(e) {
                return e[0]
            })).join(""), "”是什么意思")), {
                title: n,
                imageUrl: o.SHARE_IMG_URLS.VOC
            }
        }
    });