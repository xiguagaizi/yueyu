$gwx_XC_64 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_64 || [];

        function gz$gwx_XC_64_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '登录'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_64 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_64 = true;
        var x = ['./pages/app/login/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_64_1()
            var oNW = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, oNW)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_64";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_64();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/login/index.wxml'] = [$gwx_XC_64, './pages/app/login/index.wxml'];
else __wxAppCode__['pages/app/login/index.wxml'] = $gwx_XC_64('./pages/app/login/index.wxml');;
__wxRoute = "pages/app/login/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/app/login/index.js";
define("pages/app/login/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        t = require("../../../commons/utils"),
        i = require("../../../utils/login"),
        o = require("../../../commons/config");
    Page({
        navBack: t.navBack,
        data: {
            hasWechatInstall: !1,
            appIcon: "../../../images/mp-logo.png",
            appName: "",
            checkedAgree: !1,
            loginSuccess: !1
        },
        onHandleLogin: function(e) {
            var n = e.detail;
            console.log("sendphonesms errCode", n.errCode)
        },
        onLoad: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = this;
            wx.miniapp.hasWechatInstall({
                success: function(e) {
                    n.setData({
                        hasWechatInstall: e.hasWechatInstall || !1
                    })
                }
            }), null != e && e.payload && this.handleExternalLogin(e.payload)
        },
        onUnload: function() {
            var e = this.getOpenerEventChannel();
            e && e.emit("__donutLogin__", {
                success: this.data.loginSuccess
            })
        },
        onCheckboxChange: function() {
            this.setData({
                checkedAgree: !this.data.checkedAgree
            })
        },
        onShowAgreement: function(e) {
            var n = e.target.dataset.url;
            wx.navigateTo({
                url: n
            })
        },
        loginFailTips: function() {
            wx.showModal({
                content: "登录失败",
                showCancel: !1,
                complete: function(e) {}
            })
        },
        loginWidhCode: function(o) {
            var a = this;
            return n(e().mark((function n() {
                var r, s, c, u, l, d, h, p, g, f;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return wx.showLoading({
                                title: "登录中..."
                            }), e.prev = 1, e.next = 4, (0, i.requestLogin)(o);
                        case 4:
                            if (r = e.sent, s = r.openid, c = r.token, u = r.nickname, l = r.avatar, d = r.isDelete, h = void 0 !== d && d, p = r.loginType, g = r.unionidReady, f = r.identityRefreshAt, !h) {
                                e.next = 10;
                                break
                            }
                            return wx.showModal({
                                title: "登录失败",
                                content: "此账号已注销，无法再次注册或登录。",
                                showCancel: !1
                            }), wx.hideLoading(), e.abrupt("return");
                        case 10:
                            (0, t.setLoginInfo)({
                                openid: s,
                                token: c,
                                nickname: u,
                                avatar: l,
                                loginType: p,
                                unionidReady: g,
                                identityRefreshAt: f
                            }), wx.showToast({
                                title: "登录成功"
                            }), (0, t.navToHome)({
                                from: "login"
                            }), e.next = 18;
                            break;
                        case 15:
                            e.prev = 15, e.t0 = e.catch(1), a.loginFailTips();
                        case 18:
                            return e.prev = 18, wx.hideLoading(), e.finish(18);
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [1, 15, 18, 21]
                ])
            })))()
        },
        handleExternalLogin: function(e) {
            try {
                var n = JSON.parse(decodeURIComponent(e)),
                    i = n.openid,
                    o = n.token,
                    a = n.nickname,
                    r = n.avatar,
                    s = n.isDelete,
                    c = void 0 !== s && s,
                    u = n.loginType,
                    l = n.unionidReady,
                    d = n.identityRefreshAt;
                if (!i || !o) throw new Error("empty login payload");
                if (c) return void wx.showModal({
                    title: "登录失败",
                    content: "此账号已注销，无法再次注册或登录。",
                    showCancel: !1
                });
                (0, t.setLoginInfo)({
                    openid: i,
                    token: o,
                    nickname: a,
                    avatar: r,
                    loginType: u,
                    unionidReady: l,
                    identityRefreshAt: d
                }), this.setData({
                    loginSuccess: !0
                }), wx.showToast({
                    title: "登录成功"
                }), (0, t.navToHome)({
                    from: "login"
                })
            } catch (e) {
                this.loginFailTips()
            }
        },
        isAgree: function() {
            var e = this;
            return !!this.data.checkedAgree || (this.setData({
                checkboxShake: !0
            }), setTimeout((function() {
                e.setData({
                    checkboxShake: !1
                })
            }), 600), !1)
        },
        weixinLogin: function() {
            var t = this;
            return n(e().mark((function i() {
                var o;
                return e().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (!0 === (o = t).isAgree()) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            wx.showLoading({
                                title: "登录中..."
                            }), wx.weixinAppLogin({
                                success: function(t) {
                                    return n(e().mark((function n() {
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    t.code ? o.loginWidhCode(t.code) : o.loginFailTips();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), n)
                                    })))()
                                },
                                fail: function(e) {
                                    o.loginFailTips()
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return i.stop()
                    }
                }), i)
            })))()
        },
        appleLogin: function() {
            var t = this;
            return n(e().mark((function i() {
                var o;
                return e().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (!0 === (o = t).isAgree()) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            wx.showLoading({
                                title: "登录中..."
                            }), wx.appleLogin({
                                success: function(t) {
                                    return n(e().mark((function n() {
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    t.code ? o.loginWidhCode(t.code) : o.loginFailTips();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), n)
                                    })))()
                                },
                                fail: function() {
                                    o.loginFailTips()
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return i.stop()
                    }
                }), i)
            })))()
        },
        huaweiLogin: function() {
            if (!0 === this.isAgree()) {
                var e = "https://oauth-login.cloud.huawei.com/oauth2/v3/authorize?response_type=code&access_type=offline&state=state_parameter_passthrough_value&client_id=115861443&redirect_uri=".concat(o.HUAWEI_REDIRECT_URI, "&scope=openid+profile");
                wx.navigateTo({
                    url: "/pages/webview/index?url=".concat(encodeURIComponent(e))
                })
            }
        },
        mpLogin: function() {
            var t = this;
            return n(e().mark((function n() {
                var i;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 === (i = t).isAgree()) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            wx.showLoading({
                                title: "登录中..."
                            }), wx.weixinMiniProgramLogin({
                                redirectPath: o.HOME_PATH,
                                success: function(e) {
                                    e.code ? i.loginWidhCode(e.code) : i.loginFailTips()
                                },
                                fail: function() {
                                    i.loginFailTips()
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), n)
            })))()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/app/login/index.js'
});
require("pages/app/login/index.js");