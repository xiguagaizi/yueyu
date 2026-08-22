$gwx_XC_66 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_66 || [];

        function gz$gwx_XC_66_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_66_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, ''])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'products']
                    ],
                    [3, 'length']
                ])
                Z([3, 'container'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'duration']
                    ],
                    [
                        [7],
                        [3, 'endTime']
                    ]
                ])
                Z([3, 'onChange'])
                Z([3, 'finished'])
                Z([
                    [7],
                    [3, 'countDownDesc']
                ])
                Z([
                    [7],
                    [3, 'duration']
                ])
                Z([
                    [7],
                    [3, 'endTime']
                ])
                Z([
                    [7],
                    [3, 'products']
                ])
                Z([3, 'id'])
                Z([3, 'selectPlan'])
                Z([a, [3, 'plan-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selectedIndex']
                            ],
                            [
                                [7],
                                [3, 'index']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'recommand']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'inPromoPeriod']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'originalAmount']
                        ]
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'originalAmount']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'amount']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'rights']
                ])
                Z([3, 'index'])
                Z([3, '#07c160'])
                Z([3, 'checked'])
                Z([3, 'pay'])
                Z([3, 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)'])
                Z([3, 'primary'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_66_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_66_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_66 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_66 = true;
        var x = ['./pages/app/pay/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_66_1()
            var eTW = _n('van-sticky')
            var bUW = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(eTW, bUW)
            _(r, eTW)
            var tSW = _v()
            _(r, tSW)
            if (_oz(z, 5, e, s, gg)) {
                tSW.wxVkey = 1
                var oVW = _n('view')
                _rz(z, oVW, 'class', 6, e, s, gg)
                var xWW = _v()
                _(oVW, xWW)
                if (_oz(z, 7, e, s, gg)) {
                    xWW.wxVkey = 1
                    var oXW = _mz(z, 'count-down', ['bind:change', 8, 'bind:finished', 1, 'desc', 2, 'duration', 3, 'endTime', 4], [], e, s, gg)
                    _(xWW, oXW)
                }
                var fYW = _v()
                _(oVW, fYW)
                var cZW = function(o2W, h1W, c3W, gg) {
                    var l5W = _mz(z, 'view', ['bind:tap', 15, 'class', 1, 'data-idx', 2], [], o2W, h1W, gg)
                    var a6W = _v()
                    _(l5W, a6W)
                    if (_oz(z, 18, o2W, h1W, gg)) {
                        a6W.wxVkey = 1
                    }
                    var t7W = _v()
                    _(l5W, t7W)
                    if (_oz(z, 19, o2W, h1W, gg)) {
                        t7W.wxVkey = 1
                    }
                    a6W.wxXCkey = 1
                    t7W.wxXCkey = 1
                    _(c3W, l5W)
                    return c3W
                }
                fYW.wxXCkey = 2
                _2z(z, 13, cZW, e, s, gg, fYW, 'item', 'index', 'id')
                var e8W = _v()
                _(oVW, e8W)
                var b9W = function(xAX, o0W, oBX, gg) {
                    var cDX = _mz(z, 'van-icon', ['color', 22, 'name', 1], [], xAX, o0W, gg)
                    _(oBX, cDX)
                    return oBX
                }
                e8W.wxXCkey = 4
                _2z(z, 20, b9W, e, s, gg, e8W, 'item', 'index', 'index')
                var hEX = _mz(z, 'van-button', ['block', -1, 'bind:tap', 24, 'color', 1, 'type', 2], [], e, s, gg)
                _(oVW, hEX)
                xWW.wxXCkey = 1
                xWW.wxXCkey = 3
                _(tSW, oVW)
            }
            tSW.wxXCkey = 1
            tSW.wxXCkey = 3
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
                g = "$gwx_XC_66";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_66();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/pay/index.wxml'] = [$gwx_XC_66, './pages/app/pay/index.wxml'];
else __wxAppCode__['pages/app/pay/index.wxml'] = $gwx_XC_66('./pages/app/pay/index.wxml');;
__wxRoute = "pages/app/pay/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/app/pay/index.js";
define("pages/app/pay/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = i(require("../../../api/appPay")),
        a = require("../../../commons/utils"),
        o = i(require("../../../api/getCommonDataByKey"));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Page({
        navBack: a.navBack,
        data: {
            selectedIndex: 2,
            inPromoPeriod: !1
        },
        selectPlan: function(e) {
            var t = e.currentTarget.dataset.idx;
            this.setData({
                selectedIndex: t
            })
        },
        pay: function(o) {
            var i = this;
            return n(e().mark((function n() {
                var o, c, s, u, d, l, p, h, w, x;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = i.data, c = o.selectedIndex, s = o.products, u = o.inPromoPeriod, d = wx.getDeviceInfo(), l = d.brand, p = void 0 === l ? "" : l, e.prev = 2, wx.showLoading({
                                title: "处理中..."
                            }), e.next = 6, (0, r.default)({
                                goodsId: s[c].id,
                                inPromoPeriod: u,
                                brand: p
                            });
                        case 6:
                            if (h = e.sent, w = h.code, x = h.data, wx.hideLoading(), 0 === w) {
                                e.next = 13;
                                break
                            }
                            return wx.showModal({
                                title: "提示",
                                content: "系统错误，请重试。[".concat(w, "]"),
                                showCancel: !1
                            }), e.abrupt("return");
                        case 13:
                            wx.miniapp.requestPayment(t(t({}, x), {}, {
                                success: function() {
                                    wx.showModal({
                                        title: "开通成功",
                                        content: "已为您解锁会员功能",
                                        showCancel: !1,
                                        confirmText: "立即体验",
                                        complete: function(e) {
                                            wx.reLaunch({
                                                url: "/pages/index/index"
                                            })
                                        }
                                    }), (0, a.setVip)(!0)
                                },
                                fail: function(e) {
                                    console.error("err", e, x), wx.showToast({
                                        title: "支付取消",
                                        icon: "none"
                                    })
                                }
                            })), e.next = 21;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(2), console.log(e.t0), wx.hideLoading(), wx.showToast({
                                title: "支付异常，请重试",
                                icon: "none"
                            });
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [2, 16]
                ])
            })))()
        },
        onLoad: function(t) {
            var r = this;
            return n(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, r.getProducts();
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        getProducts: function() {
            var r = this;
            return n(e().mark((function n() {
                var i, c;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.prev = 1, e.next = 4, (0, o.default)("app_pay_products");
                        case 4:
                            i = e.sent, c = i.data, r.setData(t({}, c)), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(1), wx.showModal({
                                content: "获取数据失败，请稍后再试",
                                showCancel: !1,
                                complete: a.navBack
                            });
                        case 12:
                            wx.hideLoading();
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [1, 9]
                ])
            })))()
        },
        navTo: function(e) {
            var t = e.currentTarget.dataset.url;
            wx.navigateTo({
                url: t
            })
        },
        finished: function(e) {
            this.setData({
                inPromoPeriod: !1
            })
        },
        onChange: function(e) {
            this.setData({
                inPromoPeriod: !0
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/app/pay/index.js'
});
require("pages/app/pay/index.js");