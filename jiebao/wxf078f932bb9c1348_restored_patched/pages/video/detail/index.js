var e = require("../../../@babel/runtime/helpers/defineProperty"),
        t = require("../../../@babel/runtime/helpers/slicedToArray"),
        i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/typeof"),
        o = require("../../../commons/utils"),
        s = g(require("../../../api/getVideoEpisodeDetail")),
        l = require("../../../commons/config"),
        u = require("../../../behaviors/subtitle-behavior"),
        d = require("../../../commons/punctuation"),
        c = g(require("../../../api/addFav")),
        h = g(require("../../../api/deleteFav")),
        p = g(require("../../../api/getFavState")),
        v = (require("../../../utils/login"), require("../../../components/ruby-token/shared")),
        f = require("../../../utils/subtitle-capabilities");

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var b = (null === u.subtitleBehaviorMixin || void 0 === u.subtitleBehaviorMixin ? void 0 : u.subtitleBehaviorMixin.data) || {},
        m = (null === u.subtitleBehaviorMixin || void 0 === u.subtitleBehaviorMixin ? void 0 : u.subtitleBehaviorMixin.methods) || {};

    function y() {
        for (var e = [], t = 0; t < 3; ++t) {
            var i = Math.floor(256 * Math.random()).toString(16);
            i = 1 == i.length ? "0" + i : i, e.push(i)
        }
        return "#" + e.join("")
    }

    function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!e || "string" != typeof e) return "";
        if (/^(https?:)?\/\//.test(e)) return e.startsWith("//") ? "https:".concat(e) : e;
        var t = "string" == typeof l.BASE_URL ? l.BASE_URL : "";
        if (!t) return e;
        var i = t.replace(/\/$/, ""),
            a = e.startsWith("/") ? e : "/".concat(e);
        return "".concat(i).concat(a)
    }

    function x() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e && "object" === n(e) && (e.uuid || e.episodeUuid || e.episode || e.id) || ""
    }

    function T(e) {
        var t = Number(e);
        if (!Number.isFinite(t) || t <= 0) return "";
        if (t >= 6e4) {
            var i = Math.round(t / 6e4 * 10) / 10;
            return "".concat(i, "分钟")
        }
        var a = Math.max(1, Math.round(t / 1e3));
        return "".concat(a, "秒")
    }

    function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (!e || "object" !== n(e)) return null;
        var t = "string" == typeof e.title ? e.title.trim() : "",
            i = "string" == typeof e.subtitle ? e.subtitle.trim() : "";
        return t || i ? r(r({}, e), {}, {
            title: t,
            subtitle: i
        }) : null
    }

    function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e && "string" == typeof e.pinyin && e.pinyin.trim();
        if (t) return e.pinyin.trim();
        var i = e && Array.isArray(e.pinyinArr) && e.pinyinArr[0];
        return i ? e.pinyinArr[0] : ""
    }

    function D() {
        var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = (0, d.normalizeWordsWithPunctuation)(Array.isArray(i.words) ? i.words : []),
            n = r.map((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = A(e);
                return {
                    text: e.text || "",
                    translation: e.translation || "",
                    rubyToken: (0, v.buildRubyToken)(e.text || "", t, a),
                    leadingPunctuation: e.leadingPunctuation || e.punctuationBefore || "",
                    trailingPunctuation: e.trailingPunctuation || e.punctuationAfter || e.punctuation || ""
                }
            })),
            o = (null === (e = n[0]) || void 0 === e ? void 0 : e.translation) || "",
            s = Number(null === (t = r[0]) || void 0 === t ? void 0 : t.begin_time);
        return {
            text: i.text || "",
            translation: i.translation || "",
            cn: i.cn,
            annotationText: i.translation || i.text || o || "",
            showWordDivider: n.length > 1 || !!o,
            displayWords: n,
            segmentStart: Number.isFinite(s) ? s : void 0
        }
    }

    function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = Array.isArray(e) ? e : [],
            a = i.map((function() {
                var e, i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = Array.isArray(a.segments) ? a.segments : [],
                    n = r.map((function(e) {
                        return D(e, t)
                    }));
                return {
                    beginTime: null !== (e = a.beginTime) && void 0 !== e ? e : a.start,
                    endTime: null !== (i = a.endTime) && void 0 !== i ? i : a.end,
                    translation: a.translation || "",
                    segments: n
                }
            }));
        return a
    }

    function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return Array.isArray(e) ? e.slice(0, 5) : []
    }
    Page(r(r({}, m), {}, {
        onLoad: function() {
            var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null === (e = (t = wx).showShareMenu) || void 0 === e || e.call(t, {
                menus: ["shareAppMessage", "shareTimeline"]
            }), this.subtitleVisibilityPreferences = (0, f.createSubtitleVisibilityPreferences)(), this.loadSetting(), this.pinyinScheme = (0, o.getPinyinScheme)() || "", this.episodeUuid = x(i), this.accessToken = i.accessToken || "";
            try {
                this.accessToken = this.accessToken ? decodeURIComponent(this.accessToken) : ""
            } catch (e) {}
            if (!this.episodeUuid) return wx.showToast({
                title: "缺少视频ID",
                icon: "none"
            }), void this.setData({
                loadError: "缺少视频ID",
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            });
            this.setData({
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            }), this.fetchEpisodeDetail(!0)
        },
        navBack: o.navBack,
        data: r(r({}, b), {}, {
            showPinyin: !0,
            showWordTranslation: !0,
            showSentenceTranslation: !0,
            showSettingPanel: !1,
            singleLoopCount: 1,
            loopIntervalSeconds: .5,
            autoScroll: !0,
            showActionMenu: !1,
            isFavorite: !1,
            title: "",
            videoSrc: "",
            fallbackMediaSrc: "",
            isAudioOnly: !1,
            videoPoster: "",
            article: [],
            tags: [],
            courseInfo: null,
            episodes: [],
            hasEpisodeGroup: !1,
            activeEpisodeId: "",
            episodeLoading: !1,
            loadError: "",
            firstParagraphHeight: 0,
            articlePaddingBottom: 0,
            showEpisodeList: !1,
            favId: 0,
            favoriteLoading: !1,
            isGuest: !1,
            pinyinScheme: "",
            rubyDisplayStyle: "annotated",
            subtitleCapabilities: (0, f.normalizeSubtitleCapabilities)()
        }),
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: l.VIDEO_PLAY_SETTING_KEY,
                success: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.data,
                        a = void 0 === i ? {} : i,
                        r = {},
                        n = (0, f.normalizeSubtitleVisibilityPreferences)(a);
                    if (e.subtitleVisibilityPreferences = n, Object.assign(r, (0, f.applySubtitleCapabilitiesToVisibility)(n, e.data.subtitleCapabilities)), Number.isFinite(Number(a.singleLoopCount))) {
                        var o = Math.max(1, Math.min(5, Math.floor(Number(a.singleLoopCount))));
                        r.singleLoopCount = o
                    }
                    if (Number.isFinite(Number(a.loopIntervalSeconds))) {
                        var s = Math.max(0, Math.min(5, Number(a.loopIntervalSeconds)));
                        r.loopIntervalSeconds = Number(s.toFixed(1))
                    }
                    "boolean" == typeof a.autoScroll && (r.autoScroll = a.autoScroll), Object.keys(r).length && e.setData(r)
                }
            })
        },
        fetchEpisodeDetail: function() {
            var e = arguments,
                t = this;
            return a(i().mark((function a() {
                var n, l, u, d, c, h, p, v, g, b, m, y, x, A, D, L, E, I, M, C, F, B, U, N, V, R, _, O, q;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (n = e.length > 0 && void 0 !== e[0] && e[0], t.episodeUuid) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return l = t.createLoadingBarrier(n), u = !1, t.cancelRenderPerfSession("start new fetch"), n && wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), t.setData({
                                episodeLoading: !0,
                                loadError: "",
                                favId: 0,
                                isFavorite: !1
                            }), i.prev = 8, !1, i.next = 12, (0, s.default)(t.episodeUuid, {
                                guest: !1,
                                accessToken: t.accessToken
                            });
                        case 12:
                            if (v = i.sent, g = v.code, b = v.data, 0 === g && b) {
                                i.next = 17;
                                break
                            }
                            throw new Error("EPISODE_NOT_FOUND");
                        case 17:
                            if (!0 !== b.needVip) {
                                i.next = 22;
                                break
                            }
                            return wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.setData({
                                episodeLoading: !1
                            }), t.flushLoadingBarrier(l), i.abrupt("return");
                        case 22:
                            m = b || {}, y = w(b.course || b.collection || null), x = Array.isArray(b.episodes) ? b.episodes.map((function(e) {
                                return r(r({}, e), {}, {
                                    displayDuration: T(e.duration)
                                })
                            })) : [], A = !!y || x.length > 0, D = m.video || {}, L = Array.isArray(m.article) ? m.article : [], E = S(D.src || ""), I = S(D.audioSrc || ""), M = E || I, C = E && I && E !== I ? I : "", F = S(m.coverUrl || (null !== (d = null === (c = b.course) || void 0 === c ? void 0 : c.coverUrl) && void 0 !== d ? d : "") || (null !== (h = null === (p = m.categoryInfo) || void 0 === p ? void 0 : p.coverUrl) && void 0 !== h ? h : "") || ""), B = P(L, t.pinyinScheme || t.data.pinyinScheme || ""), U = (0, f.applySubtitleCapabilitiesToVisibility)(t.subtitleVisibilityPreferences, m.subtitleCapabilities), N = k(B), t.stopParagraphPlayback(!1), V = m.id || t.episodeUuid, t.articleRenderToken = (t.articleRenderToken || 0) + 1, R = t.articleRenderToken, u = N.length > 0, t.episodeUuid = V, t.setData(r({
                                title: m.title || y && y.title || "",
                                videoSrc: M,
                                fallbackMediaSrc: C,
                                isAudioOnly: !E && !!I,
                                videoPoster: F
                            }, U)), t.initSubtitles(B, {
                                renderArticle: N,
                                tags: Array.isArray(m.tags) ? m.tags : [],
                                courseInfo: y,
                                episodes: x,
                                hasEpisodeGroup: A,
                                activeEpisodeId: V,
                                episodeLoading: !1,
                                loadError: "",
                                isGuest: !!b.isGuest,
                                showEpisodeList: !1
                            }, (function() {
                                u || t.flushLoadingBarrier(l), t.measureFirstParagraphReady(l, (function() {
                                    t.scheduleDeferredArticleAppend(B, R)
                                })), t.ensureVideoContext(), t.calHeight(), t.syncFavoriteState(V)
                            })), i.next = 56;
                            break;
                        case 46:
                            i.prev = 46, i.t0 = i.catch(8), console.error("fetchEpisodeDetail error", i.t0), t.stopParagraphPlayback(!1), t.cancelRenderPerfSession("fetch failed"), _ = "EPISODE_NOT_FOUND" === (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.message) ? "未找到视频" : "加载失败", t.initSubtitles([]), t.setData({
                                episodeLoading: !1,
                                loadError: _,
                                videoSrc: "",
                                fallbackMediaSrc: "",
                                isAudioOnly: !1,
                                videoPoster: "",
                                courseInfo: null,
                                episodes: [],
                                hasEpisodeGroup: !1,
                                activeEpisodeId: "",
                                showEpisodeList: !1,
                                favId: 0,
                                isFavorite: !1,
                                isGuest: !1
                            }), t.flushLoadingBarrier(l), wx.showToast({
                                title: _,
                                icon: "none"
                            });
                        case 56:
                            return i.prev = 56, n && !u && t.flushLoadingBarrier(l), null === (O = (q = wx).stopPullDownRefresh) || void 0 === O || O.call(q), i.finish(56);
                        case 60:
                        case "end":
                            return i.stop()
                    }
                }), a, null, [
                    [8, 46, 56, 60]
                ])
            })))()
        },
        saveSetting: function() {
            var e = this.data,
                t = e.singleLoopCount,
                i = e.loopIntervalSeconds,
                a = e.autoScroll,
                n = (0, f.normalizeSubtitleVisibilityPreferences)(this.subtitleVisibilityPreferences);
            wx.setStorage({
                key: l.VIDEO_PLAY_SETTING_KEY,
                data: r(r({}, n), {}, {
                    singleLoopCount: Math.max(1, Math.min(5, Math.floor(Number(t) || 1))),
                    loopIntervalSeconds: Math.max(0, Math.min(5, Number(i) || 0)),
                    autoScroll: !!a
                })
            })
        },
        onPullDownRefresh: function() {
            this.fetchEpisodeDetail(!1)
        },
        onReady: function(e) {
            this.videoContext = wx.createVideoContext("myVideo")
        },
        onUnload: function() {
            this.stopParagraphPlayback(!1), this.cancelRenderPerfSession("page unload"), this.flushLoadingBarrier(this.loadingBarrier)
        },
        inputValue: "",
        paragraphPlaybackTimer: null,
        bindInputBlur: function(e) {
            this.inputValue = e.detail.value
        },
        bindtimeupdate: function(e) {
            var t, i = Number(null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.currentTime);
            Number.isFinite(i) && this.handleBindTimeUpdate(1e3 * i)
        },
        bindSendDanmu: function() {
            this.videoContext.sendDanmu({
                text: this.inputValue,
                color: y()
            })
        },
        handleVideoError: function() {
            var e = this.data,
                t = e.videoSrc,
                i = e.fallbackMediaSrc;
            i && t !== i && (this.setData({
                videoSrc: i,
                isAudioOnly: !0
            }), wx.showToast({
                title: "已切换到音频",
                icon: "none"
            }))
        },
        clearDeferredArticleAppend: function() {
            this.deferredArticleAppendTimer && (clearTimeout(this.deferredArticleAppendTimer), this.deferredArticleAppendTimer = null)
        },
        scheduleDeferredArticleAppend: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                i = arguments.length > 1 ? arguments[1] : void 0;
            this.clearDeferredArticleAppend(), !Array.isArray(t) || t.length <= 5 || (this.deferredArticleAppendTimer = setTimeout((function() {
                e.deferredArticleAppendTimer = null, i === e.articleRenderToken && e.setData({
                    article: t
                })
            }), 0))
        },
        createLoadingBarrier: function(e) {
            this.flushLoadingBarrier(this.loadingBarrier);
            var t = {
                enabled: !!e,
                hidden: !e
            };
            return this.loadingBarrier = t, t
        },
        flushLoadingBarrier: function(e) {
            e && e.enabled && !e.hidden && (this.loadingBarrier && this.loadingBarrier !== e || (wx.hideLoading(), e.hidden = !0, this.loadingBarrier === e && (this.loadingBarrier = null)))
        },
        cancelRenderPerfSession: function() {
            this.clearDeferredArticleAppend(), this.articleRenderToken = (this.articleRenderToken || 0) + 1
        },
        measureFirstParagraphReady: function(e, t) {
            var i, a = this;
            if (null === (i = this.data.article) || void 0 === i || !i.length) return this.flushLoadingBarrier(e), void(null == t || t());
            var r = function() {
                var i = wx.createSelectorQuery();
                i.select("#el_0").boundingClientRect(), i.exec((function(i) {
                    var r = Array.isArray(i) ? i[0] : null;
                    a.flushLoadingBarrier(e), null == t || t(r || null)
                }))
            };
            "function" != typeof wx.nextTick ? r() : wx.nextTick((function() {
                r()
            }))
        },
        calHeight: function(e) {
            var i = this,
                a = i.data,
                r = a.firstParagraphHeight,
                n = a.articlePaddingBottom,
                o = wx.createSelectorQuery();
            o.select(".article").boundingClientRect(), o.select("#el_0").boundingClientRect(), o.exec((function(a) {
                var o = t(a, 2),
                    s = o[0],
                    l = o[1];
                if (null != s && s.height && null != l && l.height) return r = l.height + 24, n = s.height - r - 24, void i.setData({
                    firstParagraphHeight: r,
                    articlePaddingBottom: n
                }, e);
                null == e || e()
            }))
        },
        onSettingChange: function(t) {
            var i = this,
                a = t && t.currentTarget && t.currentTarget.dataset || {},
                o = t ? t.detail : void 0,
                s = a.setting || (null == o ? void 0 : o.setting);
            if (s) {
                var l = "object" === n(o) && null !== o && "value" in o ? o.value : o;
                if ("boolean" == typeof l)
                    if ((0, f.isSubtitleVisibilitySetting)(s)) {
                        this.subtitleVisibilityPreferences = r(r({}, (0, f.normalizeSubtitleVisibilityPreferences)(this.subtitleVisibilityPreferences)), {}, e({}, s, l));
                        var u = (0, f.applySubtitleCapabilitiesToVisibility)(this.subtitleVisibilityPreferences, this.data.subtitleCapabilities);
                        this.setData(u, (function() {
                            i.saveSetting()
                        }))
                    } else this.setData(e({}, s, l), (function() {
                        i.saveSetting()
                    }))
            }
        },
        onLoopCountChange: function(e) {
            var t = this,
                i = "object" === n(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                a = Math.max(1, Math.min(5, Math.floor(Number(i) || 1)));
            this.setData({
                singleLoopCount: a
            }, (function() {
                t.saveSetting()
            }))
        },
        onLoopIntervalChange: function(e) {
            var t = this,
                i = "object" === n(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                a = Math.max(0, Math.min(5, Number(i) || 0));
            this.setData({
                loopIntervalSeconds: Number(a.toFixed(1))
            }, (function() {
                t.saveSetting()
            }))
        },
        toggleSettingPanel: function() {
            var e = !this.data.showSettingPanel;
            this.setData({
                showSettingPanel: e,
                showActionMenu: !e && this.data.showActionMenu
            })
        },
        handleParagraphTap: function(e) {
            var t, i = e && e.currentTarget && e.currentTarget.dataset || {},
                a = "number" == typeof i.row ? i.row : Number(i.row);
            if (Number.isFinite(a)) {
                var r = null === (t = this.data.article) || void 0 === t ? void 0 : t[a];
                if (r)
                    if (this.data.paragraphPlayback && this.data.paragraphPlayback.row === a) this.stopParagraphPlayback(!0);
                    else {
                        var n = this.resolveParagraphTimes(r),
                            o = n.start,
                            s = n.end;
                        if ("number" != typeof o || "number" != typeof s || s <= o) this.seekToParagraph(a);
                        else {
                            var l = Number.isFinite(Number(this.data.singleLoopCount)) ? Math.max(1, Math.min(5, Math.floor(Number(this.data.singleLoopCount)))) : 1;
                            this.startParagraphPlayback({
                                row: a,
                                start: o,
                                end: s,
                                loops: l
                            })
                        }
                    }
            }
        },
        toggleActionMenu: function() {
            this.setData({
                showActionMenu: !this.data.showActionMenu
            })
        },
        handleToggleFavorite: function() {
            this.episodeUuid && !this.data.favoriteLoading && (this.data.favId ? this.removeFavorite() : this.addFavorite())
        },
        handleEpisodeSelect: function(e) {
            var t = (e && e.currentTarget && e.currentTarget.dataset || {}).uuid;
            t && t !== this.episodeUuid && (this.stopParagraphPlayback(!1), this.episodeUuid = t, this.handleEpisodeListClose(), this.fetchEpisodeDetail(!0))
        },
        toggleEpisodeList: function() {
            var e;
            null !== (e = this.data.episodes) && void 0 !== e && e.length && this.setData({
                showEpisodeList: !this.data.showEpisodeList
            })
        },
        handleEpisodeListClose: function() {
            this.data.showEpisodeList && this.setData({
                showEpisodeList: !1
            })
        },
        seek: function(e) {
            var t = e && e.currentTarget && e.currentTarget.dataset || {};
            this.seekToParagraph(t.row)
        },
        getLoopIntervalMs: function() {
            return 1e3 * Math.max(0, Math.min(5, Number(this.data.loopIntervalSeconds) || 0))
        },
        ensureVideoContext: function() {
            this.videoContext || (this.videoContext = wx.createVideoContext("myVideo"))
        },
        syncFavoriteState: function(e) {
            var t = this;
            return a(i().mark((function a() {
                var r, n, o, s;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (r = e || t.episodeUuid) {
                                i.next = 4;
                                break
                            }
                            return t.setData({
                                favId: 0,
                                isFavorite: !1
                            }), i.abrupt("return");
                        case 4:
                            return i.prev = 4, i.next = 7, (0, p.default)("video", r);
                        case 7:
                            n = i.sent, o = n.code, s = n.data, 0 === o && null != s && s.id ? t.setData({
                                favId: s.id,
                                isFavorite: !0
                            }) : t.setData({
                                favId: 0,
                                isFavorite: !1
                            }), i.next = 16;
                            break;
                        case 13:
                            i.prev = 13, i.t0 = i.catch(4), t.setData({
                                favId: 0,
                                isFavorite: !1
                            });
                        case 16:
                        case "end":
                            return i.stop()
                    }
                }), a, null, [
                    [4, 13]
                ])
            })))()
        },
        addFavorite: function() {
            var e = this;
            return a(i().mark((function t() {
                var a, r, n;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e.episodeUuid) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return e.setData({
                                favoriteLoading: !0
                            }), t.prev = 3, t.next = 6, (0, c.default)({
                                bid: e.episodeUuid,
                                category: "video"
                            });
                        case 6:
                            if (a = t.sent, r = a.code, n = a.data, 0 !== r || null == n || !n.id) {
                                t.next = 14;
                                break
                            }
                            e.setData({
                                favId: n.id,
                                isFavorite: !0
                            }), wx.showToast({
                                title: "已收藏",
                                icon: "none",
                                duration: 1500
                            }), t.next = 15;
                            break;
                        case 14:
                            throw new Error("FAVORITE_ADD_FAILED");
                        case 15:
                            t.next = 20;
                            break;
                        case 17:
                            t.prev = 17, t.t0 = t.catch(3), wx.showToast({
                                title: "收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 20:
                            return t.prev = 20, e.setData({
                                favoriteLoading: !1
                            }), t.finish(20);
                        case 23:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [3, 17, 20, 23]
                ])
            })))()
        },
        removeFavorite: function() {
            var e = this;
            return a(i().mark((function t() {
                var a, r, n, o;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (a = e.data.favId) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return e.setData({
                                favoriteLoading: !0
                            }), t.prev = 4, t.next = 7, (0, h.default)(a);
                        case 7:
                            if (r = t.sent, n = r.code, o = r.data, 0 !== n || 1 !== (null == o ? void 0 : o.removed)) {
                                t.next = 15;
                                break
                            }
                            e.setData({
                                favId: 0,
                                isFavorite: !1
                            }), wx.showToast({
                                title: "已取消收藏",
                                icon: "none",
                                duration: 1500
                            }), t.next = 16;
                            break;
                        case 15:
                            throw new Error("FAVORITE_DELETE_FAILED");
                        case 16:
                            t.next = 21;
                            break;
                        case 18:
                            t.prev = 18, t.t0 = t.catch(4), wx.showToast({
                                title: "取消收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 21:
                            return t.prev = 21, e.setData({
                                favoriteLoading: !1
                            }), t.finish(21);
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [4, 18, 21, 24]
                ])
            })))()
        },
        onShareAppMessage: function() {
            var e;
            return {
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语视频",
                path: "/pages/video/detail/index?uuid=".concat(encodeURIComponent(this.episodeUuid || "")),
                imageUrl: this.data.videoPoster || l.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        },
        onShareTimeline: function() {
            var e, t = encodeURIComponent(this.episodeUuid || "");
            return {
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语视频",
                query: t ? "uuid=".concat(t) : "",
                imageUrl: this.data.videoPoster || l.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        }
    }));