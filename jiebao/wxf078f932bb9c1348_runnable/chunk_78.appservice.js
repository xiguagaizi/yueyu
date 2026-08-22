$gwx_XC_76 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_76 || [];

        function gz$gwx_XC_76_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_76_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_76_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_76_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([1, '每日粤听'])
                Z([
                    [7],
                    [3, 'loaded']
                ])
                Z([3, 'container'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'length']
                ])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'uuid'])
                Z([3, 'navToDetail'])
                Z([a, [3, 'item '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'needVip']
                        ],
                        [1, 'not-vip'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'accessToken']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'needVip']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'uuid']
                ])
                Z([
                    [2, '<'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'days']
                    ],
                    [1, 4]
                ])
                Z([3, 'value'])
                Z(z[13])
                Z([3, '#ff9a3c'])
                Z([3, 'vip-card-o'])
                Z([3, '30'])
                Z([3, 'arrow'])
                Z([3, '20'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'isGuest']
                    ],
                    [
                        [7],
                        [3, 'hasNext']
                    ]
                ])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z([3, 'loadmore'])
                Z(z[25])
                Z([3, 'normal'])
                Z([3, 'info'])
                Z([3, '暂无数据'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_76_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_76_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_76 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_76 = true;
        var x = ['./pages/voice/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_76_1()
            var eD6 = _n('van-sticky')
            var bE6 = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(eD6, bE6)
            _(r, eD6)
            var tC6 = _v()
            _(r, tC6)
            if (_oz(z, 5, e, s, gg)) {
                tC6.wxVkey = 1
                var oF6 = _n('view')
                _rz(z, oF6, 'class', 6, e, s, gg)
                var xG6 = _v()
                _(oF6, xG6)
                if (_oz(z, 7, e, s, gg)) {
                    xG6.wxVkey = 1
                    var fI6 = _v()
                    _(xG6, fI6)
                    var cJ6 = function(oL6, hK6, cM6, gg) {
                        var lO6 = _mz(z, 'view', ['bind:tap', 10, 'class', 1, 'data-accesstoken', 2, 'data-needvip', 3, 'data-uuid', 4], [], oL6, hK6, gg)
                        var aP6 = _v()
                        _(lO6, aP6)
                        if (_oz(z, 15, oL6, hK6, gg)) {
                            aP6.wxVkey = 1
                        }
                        var tQ6 = _n('view')
                        _rz(z, tQ6, 'class', 16, oL6, hK6, gg)
                        var eR6 = _v()
                        _(tQ6, eR6)
                        if (_oz(z, 17, oL6, hK6, gg)) {
                            eR6.wxVkey = 1
                            var bS6 = _mz(z, 'van-icon', ['color', 18, 'name', 1, 'size', 2], [], oL6, hK6, gg)
                            _(eR6, bS6)
                        } else {
                            eR6.wxVkey = 2
                            var oT6 = _mz(z, 'van-icon', ['name', 21, 'size', 1], [], oL6, hK6, gg)
                            _(eR6, oT6)
                        }
                        eR6.wxXCkey = 1
                        eR6.wxXCkey = 3
                        eR6.wxXCkey = 3
                        _(lO6, tQ6)
                        aP6.wxXCkey = 1
                        _(cM6, lO6)
                        return cM6
                    }
                    fI6.wxXCkey = 4
                    _2z(z, 8, cJ6, e, s, gg, fI6, 'item', 'index', 'uuid')
                    var oH6 = _v()
                    _(xG6, oH6)
                    if (_oz(z, 23, e, s, gg)) {
                        oH6.wxVkey = 1
                        var xU6 = _n('guest-mode')
                        _(oH6, xU6)
                    } else {
                        oH6.wxVkey = 2
                        var oV6 = _v()
                        _(oH6, oV6)
                        if (_oz(z, 24, e, s, gg)) {
                            oV6.wxVkey = 1
                            var fW6 = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 25, 'customClass', 1, 'size', 2, 'type', 3], [], e, s, gg)
                            _(oV6, fW6)
                        } else {
                            oV6.wxVkey = 2
                        }
                        oV6.wxXCkey = 1
                        oV6.wxXCkey = 3
                    }
                    oH6.wxXCkey = 1
                    oH6.wxXCkey = 3
                    oH6.wxXCkey = 3
                } else {
                    xG6.wxVkey = 2
                    var cX6 = _n('van-empty')
                    _rz(z, cX6, 'description', 29, e, s, gg)
                    _(xG6, cX6)
                }
                xG6.wxXCkey = 1
                xG6.wxXCkey = 3
                xG6.wxXCkey = 3
                _(tC6, oF6)
            }
            tC6.wxXCkey = 1
            tC6.wxXCkey = 3
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
                g = "$gwx_XC_76";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_76();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/voice/index/index.wxml'] = [$gwx_XC_76, './pages/voice/index/index.wxml'];
else __wxAppCode__['pages/voice/index/index.wxml'] = $gwx_XC_76('./pages/voice/index/index.wxml');;
__wxRoute = "pages/voice/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/voice/index/index.js";
define("pages/voice/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../commons/utils"),
        i = (e = require("../../../api/getDailyVoiceList")) && e.__esModule ? e : {
            default: e
        };
    Page({
        pageSize: 20,
        page: 1,
        data: {
            title: "每日粤听",
            searchValue: "",
            loaded: !1,
            list: []
        },
        onLoad: function(e) {
            this.getData()
        },
        navBack: n.navBack,
        getData: function() {
            var e = this;
            return r(a().mark((function r() {
                var n, s, o, c, u;
                return a().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return (n = e).setData({
                                loading: !0,
                                error: !1
                            }), wx.showLoading({
                                title: "加载中..."
                            }), s = n.page, o = n.pageSize, a.prev = 4, !1, a.next = 8, (0, i.default)({
                                page: s,
                                pageSize: o
                            }, {
                                guest: !1
                            });
                        case 8:
                            c = a.sent, u = c.data, e.setData({
                                list: [].concat(t(n.data.list), t(u.list)),
                                hasNext: u.hasNext,
                                isGuest: u.isGuest || !1
                            }), a.next = 16;
                            break;
                        case 13:
                            a.prev = 13, a.t0 = a.catch(4), console.error(a.t0);
                        case 16:
                            wx.hideLoading(), n.setData({
                                loaded: !0
                            });
                        case 18:
                        case "end":
                            return a.stop()
                    }
                }), r, null, [
                    [4, 13]
                ])
            })))()
        },
        loadmore: function() {
            this.page += 1, this.getData()
        },
        navToDetail: function(e) {
            var a = e.currentTarget.dataset,
                t = a.uuid,
                r = a.needvip,
                i = void 0 !== r && r,
                s = a.accesstoken,
                o = void 0 === s ? "" : s;
            if (i)(0, n.navToOpenVip)();
            else {
                var c = o ? "&accessToken=".concat(encodeURIComponent(o)) : "";
                wx.navigateTo({
                    url: "../detail/index?id=".concat(t).concat(c)
                })
            }
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/voice/index/index.js'
});
require("pages/voice/index/index.js");