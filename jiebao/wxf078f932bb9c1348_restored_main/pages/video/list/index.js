var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        t = require("../../../commons/utils"),
        n = r(require("../../../api/getVideoEpisodeList")),
        i = r(require("../../../api/getVideoEpisodeTags")),
        o = require("../../../commons/config");

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function s(e) {
        var a = Number(e);
        if (!Number.isFinite(a) || a <= 0) return "";
        var t = Math.max(1, Math.round(a)),
            n = Math.floor(t / 60),
            i = t % 60;
        return n > 0 ? i > 0 ? "".concat(n, "分").concat(i, "秒") : "".concat(n, "分") : "".concat(i, "秒")
    }

    function c(e) {
        var a = Number(e);
        return Number.isFinite(a) ? Math.trunc(a) : null
    }

    function d(e) {
        var a = c(e);
        return null === a || a < 1 || a > 5 ? "" : "最近".concat(a, "天更新")
    }

    function l(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = c(e);
        if (null === t || t < 0) return "";
        var n = a ? "正式发布" : "上新";
        return t <= 0 ? "今日".concat(n) : 1 === t ? "明天".concat(n) : "".concat(t, "天后").concat(n)
    }

    function u(e) {
        switch (e) {
            case "slow":
                return "慢速";
            case "fast":
                return "快速";
            case "normal":
                return "常速";
            default:
                return ""
        }
    }

    function p() {
        var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = !!a.needVip,
            n = !!a.isVipOnly,
            i = !!a.isUpcoming,
            o = a.speechRate || "",
            r = u(o),
            p = d(a.recentUpdateDays),
            g = l(a.publishDayOffset),
            v = l(a.publishDayOffset, !0),
            h = Array.isArray(a.tags) ? a.tags : [],
            f = "",
            T = "",
            m = t ? "locked" : "default",
            y = "#4f6ef9",
            k = t ? "episode-item--locked" : "",
            x = "",
            b = [];
        return i && t ? (f = "会员先解锁", T = "locked", m = "locked", y = "#ff9a3c", x = g || "即将上新") : i && n && !t ? (f = "会员抢先看", T = "unlocked", m = "unlocked", y = "#d97706", k = "episode-item--unlocked", x = v || "即将正式发布") : t ? (f = "会员专享", T = "locked", m = "locked", y = "#ff9a3c") : n && !t && (f = "VIP专享", T = "unlocked", m = "unlocked", y = "#d97706", k = "episode-item--unlocked"), x && b.push({
            key: "upcoming-update-".concat(x),
            text: x,
            kind: "upcoming"
        }), p && b.push({
            key: "recent-update-".concat(p),
            text: p,
            kind: "recent"
        }), r && b.push({
            key: "speech-rate-".concat(o),
            text: r,
            kind: "speech-rate"
        }), h.forEach((function(e, a) {
            var t = (null == e ? void 0 : e.name) || "";
            t && b.push({
                key: "tag-".concat(e.id || e.slug || t, "-").concat(a),
                text: t,
                kind: "tag"
            })
        })), {
            uuid: a.id,
            title: a.title || "",
            summary: a.summary || "",
            courseTitle: (null === (e = a.course) || void 0 === e ? void 0 : e.title) || "",
            durationLabel: s(a.duration),
            tags: h,
            contentTags: b,
            speechRate: o,
            speechRateLabel: r,
            createdAt: a.createdAt,
            needVip: t,
            isVipOnly: n,
            isUpcoming: i,
            publishDayOffset: c(a.publishDayOffset),
            recentUpdateDays: c(a.recentUpdateDays),
            accessToken: a.accessToken || "",
            badgeText: f,
            badgeType: T,
            actionType: m,
            playColor: y,
            cardClass: k
        }
    }
    Page({
        navBack: t.navBack,
        data: {
            list: [],
            page: 1,
            pageSize: 10,
            hasNext: !1,
            isGuest: !1,
            loading: !1,
            loaded: !1,
            tags: [],
            activeTag: "",
            activeTagName: "全部",
            activeMediaType: "",
            isVip: !1
        },
        onLoad: function() {
            var e, a, n, i, o = this,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null === (e = (a = wx).showShareMenu) || void 0 === e || e.call(a, {
                menus: ["shareAppMessage", "shareTimeline"]
            });
            var s = "string" == typeof r.tag ? r.tag : "",
                c = "string" == typeof r.tagName ? decodeURIComponent(r.tagName) : "",
                d = s ? c || s : "全部",
                l = "string" == typeof r.mediaType && r.mediaType ? r.mediaType : "video";
            this.setData({
                activeTag: s,
                activeTagName: d,
                activeMediaType: l,
                isVip: (0, t.getVip)()
            }, (function() {
                o.loadEpisodes(!0), o.loadTags()
            })), this.notAllowVideo = null === (n = getApp()) || void 0 === n || null === (i = n.globalData) || void 0 === i ? void 0 : i.notAllowVideo
        },
        onShow: function() {
            var e = this,
                a = (0, t.getVip)();
            a !== this.data.isVip && this.setData({
                isVip: a
            }, (function() {
                e.data.loaded && e.loadEpisodes(!0)
            }))
        },
        onPullDownRefresh: function() {
            this.loadEpisodes(!0)
        },
        loadEpisodes: function() {
            var i = arguments,
                o = this;
            return a(e().mark((function a() {
                var r, s, c, d, l, u, g, v, h, f, T;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = i.length > 0 && void 0 !== i[0] && i[0], !o.data.loading) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return s = r ? 1 : o.data.page, o.setData({
                                loading: !0
                            }), e.prev = 5, c = (0, t.getVip)(), !1, e.next = 10, (0, n.default)({
                                page: s,
                                pageSize: o.data.pageSize,
                                tag: o.data.activeTag,
                                mediaType: o.data.activeMediaType
                            }, {
                                guest: !1
                            });
                        case 10:
                            if (d = e.sent, l = d.code, u = d.data, 0 === l) {
                                e.next = 15;
                                break
                            }
                            throw new Error("加载失败");
                        case 15:
                            g = ((null == u ? void 0 : u.list) || []).map((function(e) {
                                return p(e, c)
                            })), v = r ? g : o.data.list.concat(g), h = (null == u ? void 0 : u.pagination) || {}, f = "boolean" == typeof h.hasNext ? h.hasNext : !(null == u || !u.hasNext), T = f ? s + 1 : s, o.setData({
                                list: v,
                                hasNext: f,
                                page: T,
                                loaded: !0,
                                isGuest: !(null == u || !u.isGuest),
                                isVip: c
                            }), e.next = 27;
                            break;
                        case 23:
                            e.prev = 23, e.t0 = e.catch(5), wx.showToast({
                                title: (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || "加载失败",
                                icon: "none"
                            }), o.data.loaded || o.setData({
                                loaded: !0
                            });
                        case 27:
                            return e.prev = 27, o.setData({
                                loading: !1
                            }), wx.stopPullDownRefresh(), e.finish(27);
                        case 31:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [5, 23, 27, 31]
                ])
            })))()
        },
        loadMore: function() {
            this.data.hasNext && !this.data.loading && this.loadEpisodes(!1)
        },
        loadTags: function() {
            var t = this;
            return a(e().mark((function a() {
                var n, o, r;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, !1, e.next = 4, (0, i.default)({
                                mediaType: t.data.activeMediaType
                            }, {
                                guest: !1
                            });
                        case 4:
                            if (n = e.sent, o = n.code, r = n.data, 0 === o) {
                                e.next = 9;
                                break
                            }
                            throw new Error("标签加载失败");
                        case 9:
                            t.setData({
                                tags: Array.isArray(null == r ? void 0 : r.list) ? r.list : []
                            }), e.next = 15;
                            break;
                        case 12:
                            e.prev = 12, e.t0 = e.catch(0), console.error("loadTags error", e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [0, 12]
                ])
            })))()
        },
        handleTagTap: function(e) {
            var a, t, n, i, o = this,
                r = (null == e || null === (a = e.currentTarget) || void 0 === a || null === (t = a.dataset) || void 0 === t ? void 0 : t.slug) || "",
                s = (null == e || null === (n = e.currentTarget) || void 0 === n || null === (i = n.dataset) || void 0 === i ? void 0 : i.name) || "全部";
            r !== this.data.activeTag && this.setData({
                activeTag: r,
                activeTagName: s
            }, (function() {
                o.loadEpisodes(!0)
            }))
        },
        navToDetail: function(e) {
            var a, n, i, o, r, s, c = null == e || null === (a = e.currentTarget) || void 0 === a || null === (n = a.dataset) || void 0 === n ? void 0 : n.uuid,
                d = !(null == e || null === (i = e.currentTarget) || void 0 === i || null === (o = i.dataset) || void 0 === o || !o.needvip),
                l = (null == e || null === (r = e.currentTarget) || void 0 === r || null === (s = r.dataset) || void 0 === s ? void 0 : s.accesstoken) || "";
            c && (d ? (0, t.navToOpenVip)() : this.notAllowVideo ? wx.showModal({
                content: "小程序暂不支持播放，请下载APP体验",
                showCancel: !1
            }) : wx.navigateTo({
                url: "/pages/video/detail/index?uuid=".concat(c).concat(l ? "&accessToken=".concat(encodeURIComponent(l)) : "")
            }))
        },
        buildShareQuery: function() {
            var e = [];
            return this.data.activeMediaType && e.push("mediaType=".concat(encodeURIComponent(this.data.activeMediaType))), this.data.activeTag && (e.push("tag=".concat(encodeURIComponent(this.data.activeTag))), e.push("tagName=".concat(encodeURIComponent(this.data.activeTagName || this.data.activeTag)))), e.join("&")
        },
        onShareAppMessage: function() {
            var e = this.buildShareQuery();
            return {
                title: "短视频学粤语",
                path: "/pages/video/list/index".concat(e ? "?".concat(e) : ""),
                imageUrl: o.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        },
        onShareTimeline: function() {
            return {
                title: "短视频学粤语",
                query: this.buildShareQuery(),
                imageUrl: o.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        }
    });