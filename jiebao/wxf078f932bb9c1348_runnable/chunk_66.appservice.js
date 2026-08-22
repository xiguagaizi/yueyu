$gwx_XC_63 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_63 || [];

        function gz$gwx_XC_63_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([3, 'restore'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, 'background:#f8f9fa;'])
                Z([3, '返回'])
                Z([3, '恢复购买'])
                Z([3, ''])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'normalProducts']
                    ],
                    [3, 'length']
                ])
                Z([3, 'container'])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'countDownConf']
                        ],
                        [3, 'duration']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'countDownConf']
                        ],
                        [3, 'endTime']
                    ]
                ])
                Z([3, 'onChange'])
                Z([3, 'finished'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'countDownConf']
                    ],
                    [3, 'countDownDesc']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'countDownConf']
                    ],
                    [3, 'duration']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'countDownConf']
                    ],
                    [3, 'endTime']
                ])
                Z([
                    [7],
                    [3, 'normalProducts']
                ])
                Z([3, 'productIdentifier'])
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
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'productIdentifier']
                    ],
                    [
                        [7],
                        [3, 'recomand']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'inPromoPeriod']
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'timeLimitedProducts']
                            ],
                            [3, 'length']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'normalProducts']
                            ],
                            [3, 'length']
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
                Z([3, 'subscribe'])
                Z([3, 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)'])
                Z([3, 'primary'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_63 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_63 = true;
        var x = ['./pages/app/iap/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_63_1()
            var t1V = _n('van-sticky')
            var e2V = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'bind:click-right', 1, 'border', 1, 'customClass', 2, 'customStyle', 3, 'leftText', 4, 'rightText', 5, 'title', 6], [], e, s, gg)
            _(t1V, e2V)
            _(r, t1V)
            var aZV = _v()
            _(r, aZV)
            if (_oz(z, 8, e, s, gg)) {
                aZV.wxVkey = 1
                var b3V = _n('view')
                _rz(z, b3V, 'class', 9, e, s, gg)
                var o4V = _v()
                _(b3V, o4V)
                if (_oz(z, 10, e, s, gg)) {
                    o4V.wxVkey = 1
                    var x5V = _mz(z, 'count-down', ['bind:change', 11, 'bind:finished', 1, 'desc', 2, 'duration', 3, 'endTime', 4], [], e, s, gg)
                    _(o4V, x5V)
                }
                var o6V = _v()
                _(b3V, o6V)
                var f7V = function(h9V, c8V, o0V, gg) {
                    var oBW = _mz(z, 'view', ['bind:tap', 18, 'class', 1, 'data-idx', 2], [], h9V, c8V, gg)
                    var lCW = _v()
                    _(oBW, lCW)
                    if (_oz(z, 21, h9V, c8V, gg)) {
                        lCW.wxVkey = 1
                    }
                    var aDW = _v()
                    _(oBW, aDW)
                    if (_oz(z, 22, h9V, c8V, gg)) {
                        aDW.wxVkey = 1
                    }
                    lCW.wxXCkey = 1
                    aDW.wxXCkey = 1
                    _(o0V, oBW)
                    return o0V
                }
                o6V.wxXCkey = 2
                _2z(z, 16, f7V, e, s, gg, o6V, 'item', 'index', 'productIdentifier')
                var tEW = _v()
                _(b3V, tEW)
                var eFW = function(oHW, bGW, xIW, gg) {
                    var fKW = _mz(z, 'van-icon', ['color', 25, 'name', 1], [], oHW, bGW, gg)
                    _(xIW, fKW)
                    return xIW
                }
                tEW.wxXCkey = 4
                _2z(z, 23, eFW, e, s, gg, tEW, 'item', 'index', 'index')
                var cLW = _mz(z, 'van-button', ['block', -1, 'bind:tap', 27, 'color', 1, 'type', 2], [], e, s, gg)
                _(b3V, cLW)
                o4V.wxXCkey = 1
                o4V.wxXCkey = 3
                _(aZV, b3V)
            }
            aZV.wxXCkey = 1
            aZV.wxXCkey = 3
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
                g = "$gwx_XC_63";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_63();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/iap/index.wxml'] = [$gwx_XC_63, './pages/app/iap/index.wxml'];
else __wxAppCode__['pages/app/iap/index.wxml'] = $gwx_XC_63('./pages/app/iap/index.wxml');;
__wxRoute = "pages/app/iap/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/app/iap/index.js";
define("pages/app/iap/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../commons/utils"),
        a = (e = require("../../../api/getCommonDataByKey")) && e.__esModule ? e : {
            default: e
        };
    Page({
        navBack: o.navBack,
        data: {
            selectedIndex: 2,
            products: [],
            inPromoPeriod: !1
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
        },
        onLoad: function(e) {
            this.requestSKProducts()
        },
        selectPlan: function(e) {
            var t = e.currentTarget.dataset.idx;
            this.setData({
                selectedIndex: t
            })
        },
        requestSKProducts: function() {
            var e = this;
            return r(t().mark((function r() {
                var i, s, c, u, d, l, m, f, p;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), i = [], s = [], c = [], u = {
                                endTime: 0,
                                duration: 0
                            }, t.prev = 5, t.next = 8, (0, a.default)("ios_pay_products");
                        case 8:
                            d = t.sent, l = d.data, s = l.normalIdentifiers, c = l.timeLimitedIdentifiers, i = [].concat(n(s), n(c)), u.endTime = l.endTime || 0, u.duration = l.duration || 0, u.countDownDesc = l.countDownDesc || "限时优惠剩余时长：", e.setData({
                                rights: l.rights,
                                recomand: l.recomand,
                                selectedIndex: l.selectedIndex || e.data.selectedIndex
                            }), t.next = 23;
                            break;
                        case 18:
                            return t.prev = 18, t.t0 = t.catch(5), wx.showModal({
                                content: "获取数据失败，请稍后再试",
                                showCancel: !1,
                                complete: o.navBack
                            }), wx.hideLoading(), t.abrupt("return");
                        case 23:
                            return t.prev = 23, t.next = 26, new Promise((function(e, t) {
                                wx.miniapp.IAP.requestSKProducts({
                                    productIdentifiers: i,
                                    success: e,
                                    fail: t
                                })
                            }));
                        case 26:
                            m = t.sent, f = c.map((function(e) {
                                return m.products.find((function(t) {
                                    return t.productIdentifier === e
                                }))
                            })).filter(Boolean), p = s.map((function(e) {
                                return m.products.find((function(t) {
                                    return t.productIdentifier === e
                                }))
                            })).filter(Boolean), e.setData({
                                timeLimitedProducts: f,
                                normalProducts: p,
                                countDownConf: u
                            }), t.next = 36;
                            break;
                        case 32:
                            t.prev = 32, t.t1 = t.catch(23), console.error("requestSKProducts failed. ".concat(t.t1)), wx.showModal({
                                content: "获取数据失败，请稍后再试",
                                showCancel: !1,
                                complete: o.navBack
                            });
                        case 36:
                            return t.prev = 36, wx.hideLoading(), t.finish(36);
                        case 39:
                        case "end":
                            return t.stop()
                    }
                }), r, null, [
                    [5, 18],
                    [23, 32, 36, 39]
                ])
            })))()
        },
        subscribe: function() {
            var e = this;
            return r(t().mark((function n() {
                var r, o, a, i, s, c;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (wx.miniapp.IAP.canMakePayments()) {
                                t.next = 4;
                                break
                            }
                            return wx.showToast({
                                title: "当前无法完成支付"
                            }), t.abrupt("return");
                        case 4:
                            r = e.data, o = r.timeLimitedProducts, a = r.normalProducts, i = r.inPromoPeriod, s = r.selectedIndex, c = (i ? o : a)[s], e.timer && clearTimeout(e.timer), wx.showLoading({
                                title: "加载中..."
                            }), wx.miniapp.IAP.addPaymentByProductIdentifiers({
                                productIdentifier: c.productIdentifier,
                                quantity: 1,
                                simulatesAskToBuyInSandbox: !1,
                                fail: function() {
                                    wx.showToast({
                                        title: "支付失败",
                                        icon: "error"
                                    }), wx.hideLoading()
                                }
                            }), e.timer = setTimeout((function() {
                                wx.hideLoading()
                            }), 15e3);
                        case 11:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        navTo: function(e) {
            var t = e.currentTarget.dataset.url;
            wx.navigateTo({
                url: t
            })
        },
        restore: function() {
            wx.miniapp.IAP.restoreCompletedTransactions({
                success: function(e) {
                    console.log("restoreCompletedTransactions", e)
                },
                fail: function(e) {
                    console.log("failed restoreCompletedTransactions", e)
                }
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/app/iap/index.js'
});
require("pages/app/iap/index.js");