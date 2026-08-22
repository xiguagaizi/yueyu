require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/defineProperty");
    require("../../@babel/runtime/helpers/Objectvalues");
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../@babel/runtime/helpers/objectSpread2"),
        a = f(require("../../api/getBanners")),
        i = require("../../commons/utils"),
        o = require("../../utils/login"),
        u = f(require("../../api/getCheckin")),
        s = f(require("../../api/getUserInfo")),
        c = require("../../commons/config"),
        d = require("../../commons/homeFuncs"),
        l = f(require("../../api/getCorrectionBadge")),
        p = f(require("../../api/getCommonDataByKey"));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Page({
        data: r(r({
            NAV: d.NAV
        }, d.HOME_FUNCTIONS), {}, {
            userInfo: {},
            recentlyUsed: [],
            spotlightBanners: []
        }),
        onLoad: function(e) {
            var r = this;
            return n(t().mark((function n() {
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, r.getUserInfo();
                        case 2:
                            if (r.getRecentlyUsed(), r.setData({
                                    loaded: !0
                                }), "login" !== (null == e ? void 0 : e.from)) {
                                t.next = 7;
                                break
                            }
                            return t.next = 7, (0, i.updateVipStatus)();
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        refreshUserInfo: function() {
            var e, t = getApp();
            if (!0 === (null == t || null === (e = t.globalData) || void 0 === e ? void 0 : e.refreshUserInfo)) {
                var n = (0, i.getLoginInfo)();
                n && n.nickname && n.avatar && this.setData({
                    "userInfo.nickname": n.nickname,
                    "userInfo.aratar": n.avatar
                }), t.globalData.refreshUserInfo = !1
            }
        },
        initData: function() {
            var e = this;
            e.getBanners(), e.getPopupNotice(), e.getCheckin(), setTimeout((function() {
                "guest" !== e.data.userInfo.openid && e.reqUserInfo()
            }), 500)
        },
        reqUserInfo: function() {
            var e = this;
            return n(t().mark((function n() {
                var a, o, u, d, l, p, f, h;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, s.default)();
                        case 2:
                            if (a = t.sent, o = a.data, 0 !== a.code) {
                                t.next = 13;
                                break
                            }
                            return d = (u = o || {}).days, l = u.loginType, p = u.unionidReady, f = l || e.data.userInfo.loginType || ("MP" === c.APP_STORE_CHANNEL ? "mp" : ""), e.setData({
                                signupTime: d,
                                "userInfo.loginType": f
                            }), null != (h = (0, i.getLoginInfo)()) && h.openid && (f && (null == h ? void 0 : h.loginType) !== f || (null == h ? void 0 : h.unionidReady) !== p) && (0, i.setLoginInfo)(r(r({}, h), {}, {
                                loginType: f,
                                unionidReady: p
                            })), t.next = 13, e.refreshWechatIdentityIfNeeded(r(r({}, h || {}), {}, {
                                loginType: f,
                                unionidReady: p
                            }));
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        refreshWechatIdentityIfNeeded: function() {
            var e = arguments,
                a = this;
            return n(t().mark((function n() {
                var u, s, d, l, p, f, h, g, v, y;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (u = e.length > 0 && void 0 !== e[0] ? e[0] : {}, "MP" === c.APP_STORE_CHANNEL) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            if (null != u && u.openid && !0 !== (null == u ? void 0 : u.unionidReady)) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return");
                        case 5:
                            if (!((s = Number((null == u ? void 0 : u.identityRefreshAt) || 0)) && Date.now() - s < 864e5)) {
                                t.next = 8;
                                break
                            }
                            return t.abrupt("return");
                        case 8:
                            return t.next = 10, (0, o.login)(!0);
                        case 10:
                            if (null != (d = t.sent) && d.openid) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return");
                        case 13:
                            l = d.nickname, p = d.avatar, f = d.openid, h = d.checkinDays, g = d.loginType, v = d.unionidReady, y = d.identityRefreshAt, a.setData({
                                userInfo: r(r({}, a.data.userInfo), {}, {
                                    nickname: l,
                                    avatar: p,
                                    openid: f,
                                    checkinDays: h,
                                    loginType: g || a.data.userInfo.loginType || "mp"
                                })
                            }), (0, i.setLoginInfo)({
                                nickname: l,
                                avatar: p,
                                openid: f,
                                token: d.token,
                                checkinDays: h,
                                loginType: g,
                                unionidReady: v,
                                identityRefreshAt: y
                            });
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        getUserInfo: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, a, u, s, d, l, p, f, h, g, v;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r = e, !((a = (0, i.getLoginInfo)()) && a.nickname && a.avatar)) {
                                t.next = 7;
                                break
                            }
                            r.setData({
                                userInfo: {
                                    nickname: null == a ? void 0 : a.nickname,
                                    avatar: null == a ? void 0 : a.avatar,
                                    openid: null == a ? void 0 : a.openid,
                                    checkinDays: null == a ? void 0 : a.checkinDays,
                                    loginType: (null == a ? void 0 : a.loginType) || ""
                                }
                            }), r.initData(), t.next = 11;
                            break;
                        case 7:
                            return t.next = 9, (0, o.login)();
                        case 9:
                            (u = t.sent) && (s = u.nickname, d = u.avatar, l = u.openid, p = u.token, f = u.checkinDays, h = u.loginType, g = u.unionidReady, v = u.identityRefreshAt, r.setData({
                                userInfo: {
                                    nickname: s,
                                    avatar: d,
                                    openid: l,
                                    checkinDays: f,
                                    loginType: h || ("MP" === c.APP_STORE_CHANNEL ? "mp" : "")
                                }
                            }), (0, i.setLoginInfo)({
                                nickname: s,
                                avatar: d,
                                openid: l,
                                token: p,
                                checkinDays: f,
                                loginType: h,
                                unionidReady: g,
                                identityRefreshAt: v
                            }), r.initData());
                        case 11:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        getCheckin: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, a, i, o;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = e, t.prev = 1, t.next = 4, (0, u.default)(1, {
                                guest: !0
                            });
                        case 4:
                            if (a = t.sent, i = a.code, o = a.data, 0 !== i) {
                                t.next = 11;
                                break
                            }
                            r.setData({
                                checkin: o
                            }), t.next = 12;
                            break;
                        case 11:
                            throw new Error;
                        case 12:
                            t.next = 16;
                            break;
                        case 14:
                            t.prev = 14, t.t0 = t.catch(1);
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), n, null, [
                    [1, 14]
                ])
            })))()
        },
        getBanners: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, i, o;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return !1, r = e, t.prev = 2, t.next = 5, (0, a.default)(Object.values(c.HOME_ADS).join(","), {
                                guest: !1
                            });
                        case 5:
                            i = t.sent, o = i.data, 0 === i.code && (o[c.HOME_ADS.BANNER] && r.setData({
                                adList: o[c.HOME_ADS.BANNER]
                            }), o[c.HOME_ADS.NOTICE] && r.renderNotice(o[c.HOME_ADS.NOTICE], "notice", c.NOTICE_READ_KEY), o[c.HOME_ADS.DAILI_VOICE] && r.renderProfileBanner(o[c.HOME_ADS.DAILI_VOICE]), c.HOME_ADS.HOME_BANNER && o[c.HOME_ADS.HOME_BANNER] && r.renderSpotlightBanners(o[c.HOME_ADS.HOME_BANNER]), o[c.HOME_ADS.OPEN_VIP] && r.renderVipGuide(o[c.HOME_ADS.OPEN_VIP])), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(2);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), n, null, [
                    [2, 11]
                ])
            })))()
        },
        getPopupNotice: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, i, o;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return !1, r = e, t.prev = 2, t.next = 5, (0, a.default)(Object.values(c.POPUP_NOTICE).join(","), {
                                guest: !1
                            });
                        case 5:
                            i = t.sent, o = i.data, 0 === i.code && o[c.POPUP_NOTICE.NOTICE] && r.renderNotice(o[c.POPUP_NOTICE.NOTICE], "popupNotice", c.POPUP_NOTICE_READ_KEY), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(2);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), n, null, [
                    [2, 11]
                ])
            })))()
        },
        renderVipGuide: function(e) {
            if (e && e.length) {
                var t = e[0];
                this.setData({
                    vipGuide: {
                        title: t.title,
                        path: t.path
                    }
                })
            }
        },
        renderProfileBanner: function(e) {
            if (e && e.length) {
                var t = e[0];
                this.setData({
                    profileBanner: {
                        title: t.title,
                        path: t.path
                    }
                })
            }
        },
        renderSpotlightBanners: function(e) {
            var t = (Array.isArray(e) ? e : []).filter((function(e) {
                return !!String((null == e ? void 0 : e.imageUrl) || "").trim()
            }));
            this.setData({
                spotlightBanners: t
            })
        },
        renderNotice: function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "notice",
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.NOTICE_READ_KEY;
            if (t && t.length) {
                var a = this.pickUnreadNotice(t, r);
                if (!a) return void this.setData(e({}, n, null));
                this.setData(e({}, n, {
                    uuid: a.uuid,
                    title: a.title,
                    navigateType: a.navigateType,
                    detail: a.noticeDetail,
                    path: a.path,
                    appId: a.appId,
                    closeable: a.closeable || !1,
                    rememberRead: !1 !== a.rememberRead,
                    popup: a.popup || !1
                }))
            }
        },
        pickUnreadNotice: function(e, t) {
            var n = this.getNoticeReadIds(t);
            return (Array.isArray(e) ? e : []).find((function(e) {
                return !(null == e || !e.uuid) && (!1 === e.rememberRead || !1 === n.includes(e.uuid))
            }))
        },
        getNoticeReadIds: function(e) {
            try {
                var t = wx.getStorageSync(e);
                return Array.isArray(t) ? t : []
            } catch (e) {
                return []
            }
        },
        markNoticeRead: function(e, t) {
            if (t) {
                var n = this.getNoticeReadIds(e).filter((function(e) {
                    return e !== t
                }));
                n.unshift(t), wx.setStorage({
                    key: e,
                    data: n.slice(0, 20)
                })
            }
        },
        noticeClickHandler: function() {
            var e = this.data.notice;
            "mppath" === e.navigateType && e.path ? wx.navigateTo({
                url: e.path
            }) : "thirdmp" === e.navigateType && e.path && e.appId && wx.navigateToMiniProgram({
                appId: e.appId,
                path: e.path
            })
        },
        updateRecentlyUsed: function(e) {
            var t = e.detail || {},
                n = t.icon,
                r = t.path,
                a = t.title;
            if (n && r && a) try {
                var i = wx.getStorageSync(c.RECENTLY_USED) || [];
                (i = i.filter((function(e) {
                    return e.path !== r
                }))).unshift({
                    icon: n,
                    title: a,
                    path: r
                }), wx.setStorageSync(c.RECENTLY_USED, i.slice(0, 5))
            } catch (e) {}
        },
        onReady: function() {
            this.loadHomeConf()
        },
        getRecentlyUsed: function() {
            try {
                var e = wx.getStorageSync(c.RECENTLY_USED) || [];
                this.setData({
                    recentlyUsed: e.slice(0, 5)
                })
            } catch (e) {}
        },
        onShow: function() {
            this.getRecentlyUsed(), this.refreshUserInfo(), this.loadCorrectionBadge()
        },
        onHide: function() {},
        onUnload: function() {},
        onShareAppMessage: function() {
            return {
                title: "粤语派丨系统学粤语",
                path: "/pages/index/index",
                imageUrl: c.SHARE_IMG_URLS.HOME
            }
        },
        onShareTimeline: function() {
            return {
                title: "粤语派丨系统学粤语",
                query: "",
                imageUrl: c.SHARE_IMG_URLS.HOME
            }
        },
        hideAd: function() {
            this.setData({
                adList: []
            })
        },
        hideNoticePanel: function() {
            var e, t;
            !1 !== (null === (e = this.data.popupNotice) || void 0 === e ? void 0 : e.rememberRead) && this.markNoticeRead(c.POPUP_NOTICE_READ_KEY, null === (t = this.data.popupNotice) || void 0 === t ? void 0 : t.uuid);
            this.setData({
                "popupNotice.popup": !1
            })
        },
        loadCorrectionBadge: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, a, i;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, l.default)("student");
                        case 3:
                            r = t.sent, a = r.code, i = r.data, 0 === a && i ? e.setData({
                                correctionBadge: i.total || 0
                            }) : e.setData({
                                correctionBadge: 0
                            }), t.next = 12;
                            break;
                        case 9:
                            t.prev = 9, t.t0 = t.catch(0), e.setData({
                                correctionBadge: 0
                            });
                        case 12:
                        case "end":
                            return t.stop()
                    }
                }), n, null, [
                    [0, 9]
                ])
            })))()
        },
        loadHomeConf: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, a;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return !1, t.prev = 1, t.next = 4, (0, p.default)("home_conf", {
                                guest: !1
                            });
                        case 4:
                            r = t.sent, null != (a = r.data) && a.hide && a.hide.length && e.setData({
                                ADVANCED: d.HOME_FUNCTIONS.ADVANCED.filter((function(e) {
                                    return !a.hide.includes(e.path)
                                }))
                            }), (null == a ? void 0 : a.audioVersion) === c.PI_VERSION && (getApp().globalData.notAllowAudio = !0), (null == a ? void 0 : a.videoVersion) === c.PI_VERSION && (getApp().globalData.notAllowVideo = !0), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(1);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), n, null, [
                    [1, 11]
                ])
            })))()
        }
    });