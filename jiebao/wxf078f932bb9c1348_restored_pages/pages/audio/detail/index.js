var e = require("../../../@babel/runtime/helpers/slicedToArray"),
        t = require("../../../@babel/runtime/helpers/defineProperty"),
        i = require("../../../@babel/runtime/helpers/typeof"),
        a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/objectSpread2"),
        o = require("../../../commons/utils"),
        s = S(require("../../../api/getAudioContentDetail")),
        l = S(require("../../../api/addFav")),
        u = S(require("../../../api/getFavState")),
        d = S(require("../../../api/deleteFav")),
        c = require("../../../commons/config"),
        h = require("../../../behaviors/subtitle-behavior"),
        p = require("../../../behaviors/audio-playback"),
        v = require("../../../commons/punctuation"),
        f = require("../../../utils/audio-content-adapter"),
        g = require("../../../utils/audio-content-share"),
        b = require("../../../utils/favorite-target"),
        y = require("../../../components/ruby-token/shared"),
        m = require("../../../utils/subtitle-capabilities");

    function S(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var x = (null === h.subtitleBehaviorMixin || void 0 === h.subtitleBehaviorMixin ? void 0 : h.subtitleBehaviorMixin.data) || {},
        T = (null === h.subtitleBehaviorMixin || void 0 === h.subtitleBehaviorMixin ? void 0 : h.subtitleBehaviorMixin.methods) || {},
        P = (null === p.audioPlaybackMixin || void 0 === p.audioPlaybackMixin ? void 0 : p.audioPlaybackMixin.data) || {},
        k = (null === p.audioPlaybackMixin || void 0 === p.audioPlaybackMixin ? void 0 : p.audioPlaybackMixin.methods) || {};

    function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e && "string" == typeof e.pinyin && e.pinyin.trim();
        if (t) return e.pinyin.trim();
        var i = e && Array.isArray(e.pinyinArr) && e.pinyinArr[0];
        return i ? e.pinyinArr[0] : ""
    }

    function w() {
        var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = (0, v.normalizeWordsWithPunctuation)(Array.isArray(i.words) ? i.words : []),
            n = r.map((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = A(e);
                return {
                    text: e.text || "",
                    translation: e.translation || "",
                    rubyToken: (0, y.buildRubyToken)(e.text || "", t, a),
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

    function D() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = Array.isArray(e) ? e : [];
        return i.map((function() {
            var e, i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = Array.isArray(a.segments) ? a.segments : [];
            return {
                beginTime: null !== (e = a.beginTime) && void 0 !== e ? e : a.start,
                endTime: null !== (i = a.endTime) && void 0 !== i ? i : a.end,
                translation: a.translation || "",
                segments: r.map((function(e) {
                    return w(e, t)
                }))
            }
        }))
    }

    function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return Array.isArray(e) ? e.slice(0, 5) : []
    }
    Page(n(n(n({}, k), T), {}, {
        data: n(n(n({}, x), P), {}, {
            showPinyin: !0,
            showWordTranslation: !0,
            showSentenceTranslation: !0,
            showSettingPanel: !1,
            singleLoopCount: 1,
            loopIntervalSeconds: .5,
            autoScroll: !0,
            isFavorite: !1,
            favId: 0,
            isPlaying: !1,
            title: "",
            subtitle: "",
            audioSrc: "",
            coverUrl: "",
            displayDuration: "",
            article: [],
            tags: [],
            categoryInfo: null,
            courseInfo: null,
            episodeLoading: !1,
            loadError: "",
            firstParagraphHeight: 0,
            articlePaddingBottom: 0,
            pinyinScheme: "",
            rubyDisplayStyle: "annotated",
            subtitleCapabilities: (0, m.normalizeSubtitleCapabilities)()
        }),
        navBack: o.navBack,
        onLoad: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, g.openAudioContentShareMenu)(), this.subtitleVisibilityPreferences = (0, m.createSubtitleVisibilityPreferences)(), this.loadSetting(), this.ensureVideoContext(), this.pinyinScheme = (0, o.getPinyinScheme)() || "", this.episodeUuid = (0, f.getEpisodeUuidFromOptions)(e), this.accessToken = e.accessToken || "";
            try {
                this.accessToken = this.accessToken ? decodeURIComponent(this.accessToken) : ""
            } catch (e) {}
            if (!this.episodeUuid) return wx.showToast({
                title: "缺少内容ID",
                icon: "none"
            }), void this.setData({
                loadError: "缺少内容ID",
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            });
            this.setData({
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            }), this.fetchEpisodeDetail(!0)
        },
        onUnload: function() {
            var e;
            this.stopParagraphPlayback(!1), null === (e = this.destroyAudioManager) || void 0 === e || e.call(this), this.cancelSubtitleRenderSession(), this.flushLoadingBarrier(this.loadingBarrier)
        },
        paragraphPlaybackTimer: null,
        currentAudioSrc: "",
        shouldAutoPause: !1,
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: c.VIDEO_PLAY_SETTING_KEY,
                success: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.data,
                        a = void 0 === i ? {} : i,
                        r = {},
                        n = (0, m.normalizeSubtitleVisibilityPreferences)(a);
                    if (e.subtitleVisibilityPreferences = n, Object.assign(r, (0, m.applySubtitleCapabilitiesToVisibility)(n, e.data.subtitleCapabilities)), Number.isFinite(Number(a.singleLoopCount))) {
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
        saveSetting: function() {
            var e = this.data,
                t = e.singleLoopCount,
                i = e.loopIntervalSeconds,
                a = e.autoScroll,
                r = (0, m.normalizeSubtitleVisibilityPreferences)(this.subtitleVisibilityPreferences);
            wx.setStorage({
                key: c.VIDEO_PLAY_SETTING_KEY,
                data: n(n({}, r), {}, {
                    singleLoopCount: Math.max(1, Math.min(5, Math.floor(Number(t) || 1))),
                    loopIntervalSeconds: Math.max(0, Math.min(5, Number(i) || 0)),
                    autoScroll: !!a
                })
            })
        },
        onPullDownRefresh: function() {
            this.fetchEpisodeDetail(!1)
        },
        fetchAudioContentPayload: function() {
            var e = this;
            return r(a().mark((function t() {
                var i, r, n;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, s.default)(e.episodeUuid, {
                                accessToken: e.accessToken
                            });
                        case 2:
                            if (i = t.sent, r = i.code, n = i.data, 0 === r && n) {
                                t.next = 7;
                                break
                            }
                            throw new Error("AUDIO_CONTENT_NOT_FOUND");
                        case 7:
                            return t.abrupt("return", (0, f.normalizeAudioContentDetailPayload)(n, e.episodeUuid));
                        case 8:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        applyEpisodePayload: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = i.loadingBarrier,
                r = t.courseInfo || null,
                o = t.currentEpisode || {},
                s = D(Array.isArray(o.article) ? o.article : [], this.pinyinScheme || this.data.pinyinScheme || ""),
                l = I(s);
            this.stopParagraphPlayback(!1), this.episodeUuid = o.id || this.episodeUuid;
            var u = o.title || (null == r ? void 0 : r.title) || "",
                d = o.subtitle || (null == r ? void 0 : r.subtitle) || "",
                c = o.audioSrc || "",
                h = o.coverUrl || "",
                p = Math.max(0, Number(o.duration) || 0),
                v = this.articleRenderToken,
                f = l.length > 0,
                g = (0, m.applySubtitleCapabilitiesToVisibility)(this.subtitleVisibilityPreferences, o.subtitleCapabilities);
            return this.setData(n({
                title: u,
                subtitle: d,
                audioSrc: c,
                coverUrl: h
            }, g)), this.ensureVideoContext(), this.setupBackgroundAudio(c, {
                title: u,
                subtitle: d,
                coverUrl: h,
                singer: o.artist || (null == r ? void 0 : r.title) || "粤语派"
            }), this.initSubtitles(s, n({
                renderArticle: l,
                tags: Array.isArray(o.tags) ? o.tags : [],
                categoryInfo: o.categoryInfo || (null == r ? void 0 : r.categoryInfo) || null,
                courseInfo: r,
                episodeLoading: !1,
                loadError: "",
                displayDuration: o.displayDuration || ""
            }, this.buildAudioPlaybackState(p)), (function() {
                e.flushLoadingBarrier(a), e.measureFirstParagraphReady(a, (function() {
                    e.scheduleDeferredArticleAppend(s, v)
                })), e.loadFavoriteState(), e.calHeight()
            })), f
        },
        fetchEpisodeDetail: function() {
            var e = arguments,
                t = this;
            return r(a().mark((function i() {
                var r, s, l, u, d, c, h;
                return a().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (r = e.length > 0 && void 0 !== e[0] && e[0], t.episodeUuid) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return s = t.createLoadingBarrier(r), l = !1, t.cancelSubtitleRenderSession(), r && wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), t.setData({
                                episodeLoading: !0,
                                loadError: ""
                            }), i.prev = 8, i.next = 11, t.fetchAudioContentPayload();
                        case 11:
                            if ((u = i.sent) && u.currentEpisode) {
                                i.next = 14;
                                break
                            }
                            throw new Error("AUDIO_CONTENT_NOT_FOUND");
                        case 14:
                            if (!0 !== u.currentEpisode.needVip) {
                                i.next = 19;
                                break
                            }
                            return wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.setData({
                                episodeLoading: !1,
                                favId: 0,
                                isFavorite: !1
                            }), t.flushLoadingBarrier(s), i.abrupt("return");
                        case 19:
                            l = t.applyEpisodePayload(u, {
                                loadingBarrier: s
                            }), i.next = 33;
                            break;
                        case 22:
                            i.prev = 22, i.t0 = i.catch(8), console.error("fetchEpisodeDetail error", i.t0), t.stopParagraphPlayback(!1), t.cancelSubtitleRenderSession(), t.initSubtitles([]), d = "AUDIO_CONTENT_NOT_FOUND" === (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.message) ? "未找到音频" : "加载失败", t.setupBackgroundAudio("", {}), t.setData(n({
                                episodeLoading: !1,
                                loadError: d,
                                title: "",
                                subtitle: "",
                                audioSrc: "",
                                coverUrl: "",
                                courseInfo: null,
                                tags: [],
                                categoryInfo: null,
                                displayDuration: "",
                                favId: 0,
                                isFavorite: !1
                            }, t.buildAudioPlaybackState(0))), t.flushLoadingBarrier(s), wx.showToast({
                                title: d,
                                icon: "none"
                            });
                        case 33:
                            return i.prev = 33, r && !l && t.flushLoadingBarrier(s), null === (c = (h = wx).stopPullDownRefresh) || void 0 === c || c.call(h), i.finish(33);
                        case 37:
                        case "end":
                            return i.stop()
                    }
                }), i, null, [
                    [8, 22, 33, 37]
                ])
            })))()
        },
        onSettingChange: function(e) {
            var a = this,
                r = e && e.currentTarget && e.currentTarget.dataset || {},
                o = e ? e.detail : void 0,
                s = r.setting || (null == o ? void 0 : o.setting);
            if (s) {
                var l = "object" === i(o) && null !== o && "value" in o ? o.value : o;
                if ("boolean" == typeof l)
                    if ((0, m.isSubtitleVisibilitySetting)(s)) {
                        this.subtitleVisibilityPreferences = n(n({}, (0, m.normalizeSubtitleVisibilityPreferences)(this.subtitleVisibilityPreferences)), {}, t({}, s, l));
                        var u = (0, m.applySubtitleCapabilitiesToVisibility)(this.subtitleVisibilityPreferences, this.data.subtitleCapabilities);
                        this.setData(u, (function() {
                            a.saveSetting()
                        }))
                    } else this.setData(t({}, s, l), (function() {
                        a.saveSetting()
                    }))
            }
        },
        onLoopCountChange: function(e) {
            var t = this,
                a = "object" === i(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                r = Math.max(1, Math.min(5, Math.floor(Number(a) || 1)));
            this.setData({
                singleLoopCount: r
            }, (function() {
                t.saveSetting()
            }))
        },
        onLoopIntervalChange: function(e) {
            var t = this,
                a = "object" === i(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                r = Math.max(0, Math.min(5, Number(a) || 0));
            this.setData({
                loopIntervalSeconds: Number(r.toFixed(1))
            }, (function() {
                t.saveSetting()
            }))
        },
        toggleSettingPanel: function() {
            var e = !this.data.showSettingPanel;
            this.setData({
                showSettingPanel: e
            })
        },
        handleParagraphTap: function(e) {
            var t, i = e && e.currentTarget && e.currentTarget.dataset || {},
                a = "number" == typeof i.row ? i.row : Number(i.row);
            if (Number.isFinite(a))
                if (this.data.audioSrc) {
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
                } else wx.showToast({
                    title: "暂无音频",
                    icon: "none"
                })
        },
        handleToggleFavorite: function() {
            var e = this.data.favId;
            e ? this.doDeleteFavorite(e) : this.doCreateFavorite()
        },
        getFavoriteTarget: function() {
            var e;
            return (0, b.buildAudioContentFavoriteTarget)({
                targetUuid: this.episodeUuid,
                category: (null === (e = this.data.categoryInfo) || void 0 === e ? void 0 : e.slug) || "",
                categoryInfo: this.data.categoryInfo,
                fallbackBizType: "audio-content"
            })
        },
        loadFavoriteState: function() {
            var e = this;
            return r(a().mark((function t() {
                var i, r, n, o, s;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ((i = e.getFavoriteTarget()).targetUuid) {
                                t.next = 4;
                                break
                            }
                            return e.setData({
                                favId: 0,
                                isFavorite: !1
                            }), t.abrupt("return");
                        case 4:
                            return r = i.targetUuid, t.prev = 5, t.next = 8, (0, u.default)(i);
                        case 8:
                            if (n = t.sent, o = n.code, s = n.data, r === e.episodeUuid) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return");
                        case 13:
                            if (0 !== o || null == s || !s.id) {
                                t.next = 16;
                                break
                            }
                            return e.setData({
                                favId: s.id,
                                isFavorite: !0
                            }), t.abrupt("return");
                        case 16:
                            e.setData({
                                favId: 0,
                                isFavorite: !1
                            }), t.next = 24;
                            break;
                        case 19:
                            if (t.prev = 19, t.t0 = t.catch(5), r === e.episodeUuid) {
                                t.next = 23;
                                break
                            }
                            return t.abrupt("return");
                        case 23:
                            e.setData({
                                favId: 0,
                                isFavorite: !1
                            });
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [5, 19]
                ])
            })))()
        },
        doCreateFavorite: function() {
            var e = this;
            return r(a().mark((function t() {
                var i, r, n, o;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ((i = e.getFavoriteTarget()).targetUuid) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return t.prev = 3, t.next = 6, (0, l.default)(i);
                        case 6:
                            if (r = t.sent, n = r.code, o = r.data, i.targetUuid === e.episodeUuid) {
                                t.next = 11;
                                break
                            }
                            return t.abrupt("return");
                        case 11:
                            if (0 !== n || null == o || !o.id) {
                                t.next = 15;
                                break
                            }
                            return e.setData({
                                favId: o.id,
                                isFavorite: !0
                            }), wx.showToast({
                                title: "收藏成功",
                                icon: "none"
                            }), t.abrupt("return");
                        case 15:
                            100002 === n && (e.loadFavoriteState(), wx.showToast({
                                title: "已收藏过",
                                icon: "none"
                            })), t.next = 21;
                            break;
                        case 18:
                            t.prev = 18, t.t0 = t.catch(3), wx.showToast({
                                title: "收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 21:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [3, 18]
                ])
            })))()
        },
        doDeleteFavorite: function(e) {
            var t = this;
            return r(a().mark((function i() {
                var r, n, o;
                return a().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.prev = 0, i.next = 3, (0, d.default)(e);
                        case 3:
                            r = i.sent, n = r.code, o = r.data, 0 === n && null != o && o.removed && (t.setData({
                                favId: 0,
                                isFavorite: !1
                            }), wx.showToast({
                                title: "已取消收藏",
                                icon: "none"
                            })), i.next = 12;
                            break;
                        case 9:
                            i.prev = 9, i.t0 = i.catch(0), wx.showToast({
                                title: "取消收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 12:
                        case "end":
                            return i.stop()
                    }
                }), i, null, [
                    [0, 9]
                ])
            })))()
        },
        handleStopLoop: function() {
            this.stopParagraphPlayback(!0)
        },
        seek: function(e) {
            var t = e && e.currentTarget && e.currentTarget.dataset || {};
            this.seekToParagraph(t.row)
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
        cancelSubtitleRenderSession: function() {
            this.clearDeferredArticleAppend(), this.articleRenderToken = (this.articleRenderToken || 0) + 1
        },
        measureFirstParagraphReady: function(e, t) {
            var i, a = this;
            if (null === (i = this.data.article) || void 0 === i || !i.length) return this.flushLoadingBarrier(e), void(null == t || t());
            var r = function() {
                var i = wx.createSelectorQuery();
                i.select("#el_0").boundingClientRect(), i.exec((function(i) {
                    a.flushLoadingBarrier(e), null == t || t(Array.isArray(i) && i[0] || null)
                }))
            };
            "function" != typeof wx.nextTick ? r() : wx.nextTick((function() {
                r()
            }))
        },
        calHeight: function() {
            var t = this,
                i = t.data,
                a = i.firstParagraphHeight,
                r = i.articlePaddingBottom,
                n = wx.createSelectorQuery();
            n.select(".article").boundingClientRect(), n.select("#el_0").boundingClientRect(), n.exec((function(i) {
                var n = e(i, 2),
                    o = n[0],
                    s = n[1];
                null != o && o.height && null != s && s.height && (a = s.height + 24, r = o.height - a - 24, t.setData({
                    firstParagraphHeight: a,
                    articlePaddingBottom: r
                }))
            }))
        },
        getLoopIntervalMs: function() {
            return 1e3 * Math.max(0, Math.min(5, Number(this.data.loopIntervalSeconds) || 0))
        },
        onShareAppMessage: function() {
            var e;
            return (0, g.buildAudioContentShareAppMessage)({
                pagePath: "/pages/audio/detail/index",
                uuid: this.episodeUuid,
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语派音频",
                coverUrl: this.data.coverUrl,
                fallbackTitle: "粤语派音频"
            })
        },
        onShareTimeline: function() {
            var e;
            return (0, g.buildAudioContentShareTimeline)({
                uuid: this.episodeUuid,
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语派音频",
                coverUrl: this.data.coverUrl,
                fallbackTitle: "粤语派音频"
            })
        }
    }));