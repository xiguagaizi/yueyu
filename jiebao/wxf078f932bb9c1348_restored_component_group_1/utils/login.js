Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.getLoginAutoCode = a, exports.isLogin = c, exports.login = d, exports.navToAppLogin = function() {
        wx.navigateTo({
            url: o.APP_LOGIN_PATH
        })
    }, exports.requestLogin = l, exports.requestWidthAuth = function e(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = r.retry,
            a = void 0 === u || u,
            c = r.autoLogin,
            s = void 0 === c || c;
        r.guest;
        return new Promise((function(u, c) {
            try {
                var l, p, f = wx.getStorageSync(o.LOGIN_LS_KEY) || {};
                if (null != r && null !== (l = r.header) && void 0 !== l && l.openid && null != r && null !== (p = r.header) && void 0 !== p && p.token && (f.openid = r.header.openid, f.token = r.header.token), null == f || !f.token || null == f || !f.openid) return s ? d(!0).then((function() {
                    e(n, {
                        retry: !1,
                        autoLogin: !1
                    }).then(u).catch(c)
                })) : c("TOKEN_MISSING");
                n.header = t(t({}, n.header), {}, {
                    openid: f.openid,
                    token: f.token
                }), (0, i.default)(n).then((function(t) {
                    if (104 === t.code) return !0 === a ? d(!0).then((function() {
                        e(n, {
                            retry: !1,
                            autoLogin: !1
                        }).then(u).catch(c)
                    })) : c("SESSION_EXPIRED");
                    u(t)
                }), c)
            } catch (e) {
                console.error(e), c(e)
            }
        }))
    };
    var e, n = require("../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../@babel/runtime/helpers/objectSpread2"),
        r = require("../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../commons/config"),
        i = (e = require("./request")) && e.__esModule ? e : {
            default: e
        },
        u = require("../commons/utils");

    function a() {
        return new Promise((function(e, n) {
            wx.login({
                complete: function(t) {
                    t.code ? e(t.code) : n(t)
                }
            })
        }))
    }

    function c() {
        var e = !1;
        try {
            var n = wx.getStorageSync(o.LOGIN_LS_KEY),
                t = n.openid,
                r = n.token;
            t && r && (e = !0)
        } catch (e) {}
        return e
    }

    function d() {
        return s.apply(this, arguments)
    }

    function s() {
        return (s = r(n().mark((function e() {
            var t, r, o, i, d, s, p, f, h, g, v, m = arguments;
            return n().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t = m.length > 0 && void 0 !== m[0] && m[0], r = null, !1 !== t || !c()) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return");
                    case 4:
                        return e.prev = 4, e.next = 7, a();
                    case 7:
                        return o = e.sent, e.next = 10, l(o);
                    case 10:
                        r = e.sent, d = (i = r).openid, s = i.token, p = i.nickname, f = i.avatar, h = i.loginType, g = i.unionidReady, v = i.identityRefreshAt, (0, u.setLoginInfo)({
                            openid: d,
                            token: s,
                            nickname: p,
                            avatar: f,
                            loginType: h,
                            unionidReady: g,
                            identityRefreshAt: v
                        }), e.next = 17;
                        break;
                    case 15:
                        e.prev = 15, e.t0 = e.catch(4);
                    case 17:
                        return e.abrupt("return", r);
                    case 18:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [4, 15]
            ])
        })))).apply(this, arguments)
    }

    function l(e) {
        return new Promise((function(n, t) {
            var r = o.APP_ID;
            (0, i.default)({
                apiName: "login",
                url: o.LOGIN_URL,
                method: "POST",
                data: {
                    code: e,
                    appId: r,
                    platformType: "MP"
                }
            }).then((function(e) {
                0 === e.code ? n(e.data) : t(e)
            }), (function(e) {
                t(e)
            }))
        }))
    }