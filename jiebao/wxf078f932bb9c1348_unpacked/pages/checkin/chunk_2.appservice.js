$gwx0_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];

        function gz$gwx0_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([1, 10000])
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '往期打卡'])
                Z([3, 'onSwitchChange'])
                Z([3, 'filter'])
                Z([
                    [7],
                    [3, 'filterOptions']
                ])
                Z([
                    [7],
                    [3, 'filter']
                ])
                Z(z[6])
                Z([3, 'sort'])
                Z([
                    [7],
                    [3, 'sortOptions']
                ])
                Z([
                    [7],
                    [3, 'sort']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([3, 'container'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'uuid'])
                Z([3, 'navToCheckin'])
                Z([3, 'item'])
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
                    [3, 'uuid']
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
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'showVipBadge']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'checked']
                        ]
                    ]
                ])
                Z([3, 'status'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'checked']
                ])
                Z([3, '#1f9d55'])
                Z([3, 'success'])
                Z([3, '14'])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'needVip']
                    ]
                ])
                Z([3, 'small'])
                Z([3, 'info'])
                Z([3, 'status-unlock-btn'])
                Z(z[30])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z([3, '8'])
                Z(z[35])
                Z([3, 'loadMore'])
                Z([3, 'normal'])
                Z(z[31])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_2 = true;
        var x = ['./pages/checkin/history/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_2_1()
            var a6B = _n('van-sticky')
            _rz(z, a6B, 'zIndex', 0, e, s, gg)
            var t7B = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 1, 'border', 1, 'customClass', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(a6B, t7B)
            var e8B = _n('van-dropdown-menu')
            var b9B = _mz(z, 'van-dropdown-item', ['bind:change', 6, 'data-type', 1, 'options', 2, 'value', 3], [], e, s, gg)
            _(e8B, b9B)
            var o0B = _mz(z, 'van-dropdown-item', ['bind:change', 10, 'data-type', 1, 'options', 2, 'value', 3], [], e, s, gg)
            _(e8B, o0B)
            _(a6B, e8B)
            _(r, a6B)
            var l5B = _v()
            _(r, l5B)
            if (_oz(z, 14, e, s, gg)) {
                l5B.wxVkey = 1
                var xAC = _n('view')
                _rz(z, xAC, 'class', 15, e, s, gg)
                var fCC = _v()
                _(xAC, fCC)
                var cDC = function(oFC, hEC, cGC, gg) {
                    var lIC = _mz(z, 'view', ['bind:tap', 18, 'class', 1, 'data-accesstoken', 2, 'data-id', 3, 'data-needvip', 4], [], oFC, hEC, gg)
                    var aJC = _v()
                    _(lIC, aJC)
                    if (_oz(z, 23, oFC, hEC, gg)) {
                        aJC.wxVkey = 1
                    }
                    var tKC = _n('view')
                    _rz(z, tKC, 'class', 24, oFC, hEC, gg)
                    var eLC = _v()
                    _(tKC, eLC)
                    if (_oz(z, 25, oFC, hEC, gg)) {
                        eLC.wxVkey = 1
                        var bMC = _mz(z, 'van-icon', ['color', 26, 'name', 1, 'size', 2], [], oFC, hEC, gg)
                        _(eLC, bMC)
                    } else if (_oz(z, 29, oFC, hEC, gg)) {
                        eLC.wxVkey = 2
                        var oNC = _mz(z, 'van-button', ['round', -1, 'size', 30, 'type', 1], [], oFC, hEC, gg)
                        _(eLC, oNC)
                    } else {
                        eLC.wxVkey = 3
                        var xOC = _mz(z, 'van-button', ['plain', -1, 'round', -1, 'customClass', 32, 'size', 1], [], oFC, hEC, gg)
                        _(eLC, xOC)
                    }
                    eLC.wxXCkey = 1
                    eLC.wxXCkey = 3
                    eLC.wxXCkey = 3
                    eLC.wxXCkey = 3
                    _(lIC, tKC)
                    aJC.wxXCkey = 1
                    _(cGC, lIC)
                    return cGC
                }
                fCC.wxXCkey = 4
                _2z(z, 16, cDC, e, s, gg, fCC, 'item', 'index', 'uuid')
                var oBC = _v()
                _(xAC, oBC)
                if (_oz(z, 34, e, s, gg)) {
                    oBC.wxVkey = 1
                    var oPC = _n('van-row')
                    var fQC = _mz(z, 'van-col', ['offset', 35, 'span', 1], [], e, s, gg)
                    var cRC = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 37, 'size', 1, 'type', 2], [], e, s, gg)
                    _(fQC, cRC)
                    _(oPC, fQC)
                    _(oBC, oPC)
                }
                oBC.wxXCkey = 1
                oBC.wxXCkey = 3
                _(l5B, xAC)
            }
            l5B.wxXCkey = 1
            l5B.wxXCkey = 3
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
                g = "$gwx0_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/history/index.wxml'] = [$gwx0_XC_2, './pages/checkin/history/index.wxml'];
else __wxAppCode__['pages/checkin/history/index.wxml'] = $gwx0_XC_2('./pages/checkin/history/index.wxml');;
__wxRoute = "pages/checkin/history/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/history/index.js";
define("pages/checkin/history/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t, e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../commons/utils"),
        i = require("../../../commons/config"),
        o = (t = require("../../../api/getCheckinList")) && t.__esModule ? t : {
            default: t
        };
    Page({
        pageSize: 20,
        page: 1,
        navBack: r.navBack,
        data: {
            show: !1,
            list: [],
            filter: 0,
            sort: 0,
            filterOptions: [{
                text: "全部",
                value: 0
            }, {
                text: "未打卡",
                value: 1
            }],
            sortOptions: [{
                text: "最新",
                value: 0
            }, {
                text: "最早",
                value: 1
            }]
        },
        onLoad: function(t) {
            this.getFilterAndSort(), this.getData()
        },
        getData: function() {
            var t = this;
            return n(e().mark((function n() {
                var i, s, c, l, u, f, h, d, p, g;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return s = (i = t).page, c = i.pageSize, l = i.data, u = l.sort, f = l.filter, wx.showLoading({
                                title: "加载中..."
                            }), e.prev = 4, e.next = 7, (0, o.default)({
                                page: s,
                                pageSize: c,
                                filter: f,
                                sort: u
                            });
                        case 7:
                            h = e.sent, d = h.code, p = h.data, 0 === d ? (g = i.data.list, 1 === s && (g = []), i.setData({
                                list: [].concat(a(g), a(p.list)),
                                hasNext: p.hasNext
                            })) : wx.showModal({
                                title: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            }), e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e.catch(4), wx.showModal({
                                title: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            });
                        case 16:
                            i.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [4, 13]
                ])
            })))()
        },
        loadMore: function() {
            this.page += 1, this.getData()
        },
        navToCheckin: function(t) {
            var e = this,
                a = t.currentTarget.dataset,
                n = a.id,
                i = a.needvip,
                o = void 0 !== i && i,
                s = a.accesstoken,
                c = void 0 === s ? "" : s;
            if (o)(0, r.navToOpenVip)();
            else {
                var l = c ? "&accessToken=".concat(encodeURIComponent(c)) : "";
                wx.navigateTo({
                    url: "../index/index?id=".concat(n).concat(l),
                    success: function(t) {
                        t.eventChannel.emit("acceptDataFromOpenerPage", {
                            from: "history"
                        })
                    },
                    events: {
                        checkedNotify: function(t) {
                            var a = e.data.list;
                            e.setData({
                                list: a.map((function(e) {
                                    return e.uuid === t && (e.checked = !0), e
                                }))
                            })
                        }
                    }
                })
            }
        },
        onSwitchChange: function(t) {
            var e = this,
                a = t.currentTarget.dataset.type,
                n = e.data,
                r = n.sort,
                i = n.filter;
            "sort" === a ? r = t.detail : "filter" === a && (i = t.detail), e.setData({
                sort: r,
                filter: i
            }, (function() {
                e.cacheFilterAndSort()
            })), e.sort = r, e.filter = i, e.page = 1, e.getData()
        },
        getFilterAndSort: function() {
            try {
                var t = wx.getStorageSync(i.HIS_CHECKIN_LIST_KEY);
                "sort" in t && "filter" in t && (this.setData({
                    sort: t.sort,
                    filter: t.filter
                }), this.sort = t.sort, this.filter = t.filter)
            } catch (t) {}
        },
        cacheFilterAndSort: function() {
            var t = this.data,
                e = t.sort,
                a = t.filter,
                n = {
                    sort: e,
                    filter: a
                };
            this.sort = e, this.filter = a, wx.setStorage({
                key: i.HIS_CHECKIN_LIST_KEY,
                data: n
            })
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/history/index.js'
});
require("pages/checkin/history/index.js");