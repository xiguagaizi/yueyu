$gwx_XC_71 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_71 || [];

        function gz$gwx_XC_71_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '我的订单'])
                Z([
                    [7],
                    [3, 'loaded']
                ])
                Z([3, 'order-list'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'orders']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([3, '#999'])
                Z([3, 'orders-o'])
                Z([3, '64rpx'])
                Z([
                    [7],
                    [3, 'orders']
                ])
                Z([3, 'id'])
                Z([3, 'copyOrderId'])
                Z([3, 'copy-icon'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'orderId']
                ])
                Z([3, 'description'])
                Z([3, '28rpx'])
                Z([3, 'loading-more'])
                Z([
                    [7],
                    [3, 'loading']
                ])
                Z([3, '24rpx'])
                Z([3, 'spinner'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'hasMore']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_71 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_71 = true;
        var x = ['./pages/order/list/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_71_1()
            var bKZ = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, bKZ)
            var eJZ = _v()
            _(r, eJZ)
            if (_oz(z, 5, e, s, gg)) {
                eJZ.wxVkey = 1
                var oLZ = _n('view')
                _rz(z, oLZ, 'class', 6, e, s, gg)
                var xMZ = _v()
                _(oLZ, xMZ)
                if (_oz(z, 7, e, s, gg)) {
                    xMZ.wxVkey = 1
                    var oNZ = _mz(z, 'van-icon', ['color', 8, 'name', 1, 'size', 2], [], e, s, gg)
                    _(xMZ, oNZ)
                } else {
                    xMZ.wxVkey = 2
                    var fOZ = _v()
                    _(xMZ, fOZ)
                    var cPZ = function(oRZ, hQZ, cSZ, gg) {
                        var lUZ = _mz(z, 'van-icon', ['bindtap', 13, 'class', 1, 'data-id', 2, 'name', 3, 'size', 4], [], oRZ, hQZ, gg)
                        _(cSZ, lUZ)
                        return cSZ
                    }
                    fOZ.wxXCkey = 4
                    _2z(z, 11, cPZ, e, s, gg, fOZ, 'item', 'index', 'id')
                }
                var aVZ = _n('view')
                _rz(z, aVZ, 'class', 18, e, s, gg)
                var tWZ = _v()
                _(aVZ, tWZ)
                if (_oz(z, 19, e, s, gg)) {
                    tWZ.wxVkey = 1
                    var eXZ = _mz(z, 'van-loading', ['size', 20, 'type', 1], [], e, s, gg)
                    _(tWZ, eXZ)
                } else if (_oz(z, 22, e, s, gg)) {
                    tWZ.wxVkey = 2
                } else {
                    tWZ.wxVkey = 3
                }
                tWZ.wxXCkey = 1
                tWZ.wxXCkey = 3
                _(oLZ, aVZ)
                xMZ.wxXCkey = 1
                xMZ.wxXCkey = 3
                xMZ.wxXCkey = 3
                _(eJZ, oLZ)
            }
            eJZ.wxXCkey = 1
            eJZ.wxXCkey = 3
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
                g = "$gwx_XC_71";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_71();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/list/index.wxml'] = [$gwx_XC_71, './pages/order/list/index.wxml'];
else __wxAppCode__['pages/order/list/index.wxml'] = $gwx_XC_71('./pages/order/list/index.wxml');;
__wxRoute = "pages/order/list/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/order/list/index.js";
define("pages/order/list/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/toConsumableArray"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../commons/utils"),
        s = (e = require("../../../api/getOrderList")) && e.__esModule ? e : {
            default: e
        };
    Page({
        navBack: n.navBack,
        page: 1,
        pageSize: 15,
        data: {
            orders: [],
            loading: !1,
            hasMore: !0,
            loaded: !1
        },
        onLoad: function() {
            this.loadOrders()
        },
        loadOrders: function() {
            var e = this;
            return t(a().mark((function t() {
                var o, i, d, c;
                return a().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            if (!e.data.loading) {
                                a.next = 2;
                                break
                            }
                            return a.abrupt("return");
                        case 2:
                            return e.setData({
                                loading: !0
                            }), a.prev = 3, a.next = 6, (0, s.default)({
                                page: e.page,
                                pageSize: e.pageSize
                            });
                        case 6:
                            if (o = a.sent, i = o.code, d = o.data, 0 === i) {
                                a.next = 12;
                                break
                            }
                            return wx.showModal({
                                title: "提示",
                                content: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: n.navBack
                            }), a.abrupt("return");
                        case 12:
                            c = d.list || [], e.setData({
                                orders: [].concat(r(e.data.orders), r(c)),
                                hasMore: d.hasNext,
                                loaded: !0
                            }), a.next = 19;
                            break;
                        case 16:
                            a.prev = 16, a.t0 = a.catch(3), wx.showToast({
                                title: "加载失败",
                                icon: "none"
                            });
                        case 19:
                            return a.prev = 19, e.setData({
                                loading: !1
                            }), a.finish(19);
                        case 22:
                        case "end":
                            return a.stop()
                    }
                }), t, null, [
                    [3, 16, 19, 22]
                ])
            })))()
        },
        loadMore: function() {
            this.data.hasMore && !this.data.loading && (this.page++, this.loadOrders())
        },
        copyOrderId: function(e) {
            var a = e.currentTarget.dataset.id;
            wx.setClipboardData({
                data: a,
                success: function() {
                    wx.showToast({
                        title: "订单号已复制",
                        icon: "success"
                    })
                }
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/order/list/index.js'
});
require("pages/order/list/index.js");