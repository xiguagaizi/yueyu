var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        e = require("../../../@babel/runtime/helpers/asyncToGenerator");
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var a = require("../../../commons/utils"),
        o = l(require("../../../api/getAudioContentList")),
        n = l(require("../../../api/getAudioContentTags")),
        i = require("../../../commons/config"),
        r = require("../../../utils/audio-content-adapter");

    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function c() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = "string" == typeof t ? t : "";
        if (!e) return "";
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e
        }
    }

    function d() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = "string" == typeof t ? t.trim().toLowerCase() : "";
        return "poetry" === e || "auto" === e ? e : "audio"
    }

    function u() {
        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (null == e || null === (t = e.categoryInfo) || void 0 === t ? void 0 : t.slug) || (null == e ? void 0 : e.category) || ""
    }

    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "audio";
        if ("audio" === e || "poetry" === e) return e;
        var a = u(t).toLowerCase();
        return "poetry" === a || a.includes("poetry") ? "poetry" : "audio"
    }

    function g(t) {
        return (0, r.formatEpisodeDuration)(t) || ""
    }

    function p() {
        var t, e, a, o, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = [],
            r = (null == n || null === (t = n.categoryInfo) || void 0 === t ? void 0 : t.name) || "",
            l = (null == n || null === (e = n.collection) || void 0 === e ? void 0 : e.title) || "",
            c = Array.isArray(n.tags) ? n.tags : [];
        r && i.push({
            key: "category-".concat((null == n || null === (a = n.categoryInfo) || void 0 === a ? void 0 : a.slug) || r),
            text: r,
            kind: "category"
        });
        l && i.push({
            key: "collection-".concat((null == n || null === (o = n.collection) || void 0 === o ? void 0 : o.id) || l),
            text: l,
            kind: "collection"
        });
        return c.forEach((function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 ? arguments[1] : void 0,
                a = t.name || "";
            a && i.push({
                key: "tag-".concat(t.id || t.slug || a, "-").concat(e),
                text: a,
                kind: "tag"
            })
        })), i
    }

    function h() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = !!t.needVip,
            a = !!t.isUpcoming,
            o = "",
            n = "",
            i = e ? "locked" : "default",
            r = "#4f6ef9",
            l = e ? "episode-item--locked" : "";
        return a && e ? (o = "会员先解锁", n = "locked", i = "locked", r = "#ff9a3c") : e && (o = "会员专享", n = "locked", i = "locked", r = "#ff9a3c"), {
            uuid: t.id || "",
            title: t.title || "",
            summary: t.summary || "",
            durationLabel: g(t.duration),
            accessToken: t.accessToken || "",
            needVip: e,
            isUpcoming: a,
            badgeText: o,
            badgeType: n,
            actionType: i,
            playColor: r,
            cardClass: l,
            contentTags: p(t)
        }
    }

    function v() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "audio";
        return "poetry" === t ? "诗词赏析" : "音频内容"
    }

    function f() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "audio";
        return "poetry" === t ? "暂时没有诗词内容" : "暂时没有音频内容"
    }
    Page({
        navBack: a.navBack,
        data: {
            pageTitle: "音频内容",
            emptyText: "暂时没有音频内容",
            list: [],
            page: 1,
            pageSize: 10,
            hasNext: !1,
            loading: !1,
            loaded: !1,
            tags: [],
            activeTag: "",
            activeTagName: "全部",
            detailType: "audio",
            routeCategory: "",
            routeCollection: "",
            routeCollectionId: "",
            isVip: !1
        },
        onLoad: function() {
            var t, e, o = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null === (t = (e = wx).showShareMenu) || void 0 === t || t.call(e, {
                menus: ["shareAppMessage", "shareTimeline"]
            });
            var i = d(n.detailType),
                r = "string" == typeof n.tag ? n.tag.trim() : "",
                l = "string" == typeof n.tagName ? c(n.tagName) : "",
                u = "string" == typeof n.category ? n.category.trim() : "",
                s = "string" == typeof n.collection ? n.collection.trim() : "",
                g = "string" == typeof n.collectionId ? n.collectionId.trim() : "",
                p = c(n.title) || v(i),
                h = f(i);
            this.setData({
                detailType: i,
                activeTag: r,
                activeTagName: r ? l || r : "全部",
                routeCategory: u,
                routeCollection: s,
                routeCollectionId: g,
                pageTitle: p,
                emptyText: h,
                isVip: (0, a.getVip)()
            }, (function() {
                o.loadList(!0), o.loadTags()
            }))
        },
        onShow: function() {
            var t = this,
                e = (0, a.getVip)();
            e !== this.data.isVip && this.setData({
                isVip: e
            }, (function() {
                t.data.loaded && t.loadList(!0)
            }))
        },
        onPullDownRefresh: function() {
            this.loadList(!0)
        },
        loadList: function() {
            var a = arguments,
                n = this;
            return e(t().mark((function e() {
                var i, r, l, c, d, u, s, g, p, v, f, y;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (i = a.length > 0 && void 0 !== a[0] && a[0], !n.data.loading) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return r = i ? 1 : n.data.page, n.setData({
                                loading: !0
                            }), t.prev = 5, t.next = 8, (0, o.default)({
                                page: r,
                                pageSize: n.data.pageSize,
                                category: n.data.routeCategory,
                                collection: n.data.routeCollection,
                                collectionId: n.data.routeCollectionId,
                                tag: n.data.activeTag
                            });
                        case 8:
                            if (l = t.sent, c = l.code, d = l.data, 0 === c) {
                                t.next = 13;
                                break
                            }
                            throw new Error("LOAD_AUDIO_CONTENT_LIST_FAILED");
                        case 13:
                            u = ((null == d ? void 0 : d.list) || []).map((function(t) {
                                return h(t)
                            })), s = i ? u : n.data.list.concat(u), g = (null == d ? void 0 : d.pagination) || {}, p = "boolean" == typeof g.hasNext ? g.hasNext : !(null == d || !d.hasNext), v = p ? r + 1 : r, n.setData({
                                list: s,
                                page: v,
                                hasNext: p,
                                loaded: !0
                            }), t.next = 25;
                            break;
                        case 21:
                            t.prev = 21, t.t0 = t.catch(5), wx.showToast({
                                title: "加载列表失败",
                                icon: "none"
                            }), n.data.loaded || n.setData({
                                loaded: !0
                            });
                        case 25:
                            return t.prev = 25, n.setData({
                                loading: !1
                            }), null === (f = (y = wx).stopPullDownRefresh) || void 0 === f || f.call(y), t.finish(25);
                        case 29:
                        case "end":
                            return t.stop()
                    }
                }), e, null, [
                    [5, 21, 25, 29]
                ])
            })))()
        },
        loadTags: function() {
            var a = this;
            return e(t().mark((function e() {
                var o, i, r;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!a.data.routeCollection && !a.data.routeCollectionId) {
                                t.next = 3;
                                break
                            }
                            return a.setData({
                                tags: []
                            }), t.abrupt("return");
                        case 3:
                            return t.prev = 3, t.next = 6, (0, n.default)({
                                category: a.data.routeCategory
                            });
                        case 6:
                            if (o = t.sent, i = o.code, r = o.data, 0 === i) {
                                t.next = 11;
                                break
                            }
                            throw new Error("LOAD_AUDIO_CONTENT_TAGS_FAILED");
                        case 11:
                            a.setData({
                                tags: Array.isArray(null == r ? void 0 : r.list) ? r.list : []
                            }), t.next = 17;
                            break;
                        case 14:
                            t.prev = 14, t.t0 = t.catch(3), a.setData({
                                tags: []
                            });
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), e, null, [
                    [3, 14]
                ])
            })))()
        },
        handleTagTap: function(t) {
            var e, a = this,
                o = (null == t || null === (e = t.currentTarget) || void 0 === e ? void 0 : e.dataset) || {},
                n = o.slug,
                i = void 0 === n ? "" : n,
                r = o.name,
                l = void 0 === r ? "全部" : r;
            i !== this.data.activeTag && this.setData({
                activeTag: i,
                activeTagName: l || "全部"
            }, (function() {
                a.loadList(!0)
            }))
        },
        loadMore: function() {
            this.data.hasNext && !this.data.loading && this.loadList(!1)
        },
        navToDetail: function(t) {
            var e, o = ((null == t || null === (e = t.currentTarget) || void 0 === e ? void 0 : e.dataset) || {}).index;
            if (void 0 !== o && this.data.list[o]) {
                var n = this.data.list[o];
                if (n.needVip)(0, a.navToOpenVip)();
                else {
                    var i = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "audio",
                            a = t.uuid || "";
                        if (!a) return "";
                        var o = s(t, e),
                            n = "poetry" === o ? "/pages/poetry/detail/index" : "/pages/audio/detail/index",
                            i = t.accessToken ? "&accessToken=".concat(encodeURIComponent(t.accessToken)) : "";
                        return "".concat(n, "?uuid=").concat(a).concat(i)
                    }(n, this.data.detailType);
                    i && wx.navigateTo({
                        url: i
                    })
                }
            }
        },
        buildShareQuery: function() {
            var t = [];
            return this.data.routeCategory && t.push("category=".concat(encodeURIComponent(this.data.routeCategory))), this.data.routeCollection && t.push("collection=".concat(encodeURIComponent(this.data.routeCollection))), this.data.routeCollectionId && t.push("collectionId=".concat(encodeURIComponent(this.data.routeCollectionId))), this.data.detailType && t.push("detailType=".concat(encodeURIComponent(this.data.detailType))), this.data.activeTag && (t.push("tag=".concat(encodeURIComponent(this.data.activeTag))), t.push("tagName=".concat(encodeURIComponent(this.data.activeTagName || this.data.activeTag)))), this.data.pageTitle && t.push("title=".concat(encodeURIComponent(this.data.pageTitle))), t.join("&")
        },
        onShareAppMessage: function() {
            var t = this.buildShareQuery();
            return {
                title: this.data.pageTitle || "粤语派有声内容",
                path: "/pages/audio/list/index".concat(t ? "?".concat(t) : ""),
                imageUrl: i.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        },
        onShareTimeline: function() {
            return {
                title: this.data.pageTitle || "粤语派有声内容",
                query: this.buildShareQuery(),
                imageUrl: i.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        }
    });