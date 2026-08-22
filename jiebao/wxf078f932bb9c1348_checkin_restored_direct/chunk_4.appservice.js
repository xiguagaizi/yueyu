$gwx0_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_4 || [];

        function gz$gwx0_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([a, [3, '我的打卡'],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'type']
                            ],
                            [1, 2]
                        ],
                        [1, '纠音'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'show']
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
                Z([3, 'cell-group'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, '_id'])
                Z([3, 'navToDetail'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([a, [3, '打卡时间：'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'date']
                    ]
                ])
                Z([3, 'title'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'newAnswer']
                ])
                Z([3, 'danger'])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z([3, 'loadMore'])
                Z([3, 'info'])
                Z([3, '暂无记录'])
                Z([3, 'navToCheckin'])
                Z([3, 'bottom-button'])
                Z(z[19])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
        var x = ['./pages/checkin/my/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_4_1()
            var o8F = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, o8F)
            var x7F = _v()
            _(r, x7F)
            if (_oz(z, 5, e, s, gg)) {
                x7F.wxVkey = 1
                var f9F = _n('view')
                _rz(z, f9F, 'class', 6, e, s, gg)
                var c0F = _v()
                _(f9F, c0F)
                if (_oz(z, 7, e, s, gg)) {
                    c0F.wxVkey = 1
                    var oBG = _mz(z, 'van-cell-group', ['inset', -1, 'customClass', 8], [], e, s, gg)
                    var cCG = _v()
                    _(oBG, cCG)
                    var oDG = function(aFG, lEG, tGG, gg) {
                        var bIG = _mz(z, 'van-cell', ['isLink', -1, 'bind:tap', 11, 'data-index', 1, 'label', 2], [], aFG, lEG, gg)
                        var oJG = _n('view')
                        _rz(z, oJG, 'slot', 14, aFG, lEG, gg)
                        var xKG = _v()
                        _(oJG, xKG)
                        if (_oz(z, 15, aFG, lEG, gg)) {
                            xKG.wxVkey = 1
                            var oLG = _n('van-tag')
                            _rz(z, oLG, 'type', 16, aFG, lEG, gg)
                            _(xKG, oLG)
                        }
                        xKG.wxXCkey = 1
                        xKG.wxXCkey = 3
                        _(bIG, oJG)
                        _(tGG, bIG)
                        return tGG
                    }
                    cCG.wxXCkey = 4
                    _2z(z, 9, oDG, e, s, gg, cCG, 'item', 'index', '_id')
                    _(c0F, oBG)
                    var hAG = _v()
                    _(c0F, hAG)
                    if (_oz(z, 17, e, s, gg)) {
                        hAG.wxVkey = 1
                        var fMG = _mz(z, 'van-button', ['round', -1, 'bind:tap', 18, 'type', 1], [], e, s, gg)
                        _(hAG, fMG)
                    }
                    hAG.wxXCkey = 1
                    hAG.wxXCkey = 3
                } else {
                    c0F.wxVkey = 2
                    var cNG = _n('van-empty')
                    _rz(z, cNG, 'description', 20, e, s, gg)
                    var hOG = _mz(z, 'van-button', ['round', -1, 'bind:tap', 21, 'class', 1, 'type', 2], [], e, s, gg)
                    _(cNG, hOG)
                    _(c0F, cNG)
                }
                c0F.wxXCkey = 1
                c0F.wxXCkey = 3
                c0F.wxXCkey = 3
                _(x7F, f9F)
            }
            x7F.wxXCkey = 1
            x7F.wxXCkey = 3
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
                g = "$gwx0_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/my/index.wxml'] = [$gwx0_XC_4, './pages/checkin/my/index.wxml'];
else __wxAppCode__['pages/checkin/my/index.wxml'] = $gwx0_XC_4('./pages/checkin/my/index.wxml');;
__wxRoute = "pages/checkin/my/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/my/index.js";
define("pages/checkin/my/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/toConsumableArray"),
        a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/defineProperty"),
        r = require("../../../commons/utils"),
        i = c(require("../../../api/getMyCheckins")),
        s = c(require("../../../api/getMyFeedbackCheckins"));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Page({
        page: 1,
        pageSize: 15,
        navBack: r.navBack,
        data: {
            show: !1,
            list: []
        },
        navToDetail: function(e) {
            var t = e.currentTarget.dataset.index,
                a = this.data.list[t],
                r = a.userCheckinId,
                i = a.uuid,
                s = a.newAnswer,
                c = "/pages/checkin/index/index?id=".concat(encodeURIComponent(i));
            2 === this.type && (c = "/pages/checkin/comment/index?id=".concat(encodeURIComponent(r)), s && (c += "&newAnswer=1"), this.setData(n({}, "list[".concat(t, "].newAnswer"), !1))), wx.navigateTo({
                url: c
            })
        },
        loadMore: function() {
            this.page += 1, this.getData()
        },
        getData: function() {
            var n = this;
            return a(e().mark((function a() {
                var c, o, u, l;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c = n, wx.showLoading({
                                    title: "加载中..."
                                }), e.prev = 2, 1 !== n.type) {
                                e.next = 9;
                                break
                            }
                            return e.next = 6, (0, i.default)(n.page, n.pageSize);
                        case 6:
                            e.t0 = e.sent, e.next = 12;
                            break;
                        case 9:
                            return e.next = 11, (0, s.default)(n.page, n.pageSize);
                        case 11:
                            e.t0 = e.sent;
                        case 12:
                            o = e.t0, u = o.code, l = o.data, 0 === u ? c.setData({
                                list: [].concat(t(c.data.list), t(l.list)),
                                hasNext: l.hasNext
                            }) : wx.showModal({
                                content: "系统出错，请稍后再试",
                                complete: r.navBack,
                                showCancel: !1
                            }), e.next = 21;
                            break;
                        case 17:
                            e.prev = 17, e.t1 = e.catch(2), console.error(e.t1), wx.showModal({
                                content: "系统出错，请稍后再试",
                                complete: r.navBack,
                                showCancel: !1
                            });
                        case 21:
                            c.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [2, 17]
                ])
            })))()
        },
        onLoad: function(e) {
            this.type = parseInt(e.type || 1, 10), this.getData(), this.setData({
                type: this.type
            })
        },
        navToCheckin: function() {
            wx.navigateTo({
                url: "/pages/checkin/index/index"
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/my/index.js'
});
require("pages/checkin/my/index.js");