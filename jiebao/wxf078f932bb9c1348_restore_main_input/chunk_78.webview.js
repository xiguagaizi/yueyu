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
                Z([3, 'title'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ]])
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
                Z([3, 'tag'])
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'days']
                        ],
                        [1, 0]
                    ],
                    [1, '今天'],
                    [
                        [2, '+'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'days']
                        ],
                        [1, '天前']
                    ]
                ]])
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
                Z([3, 'next'])
                Z([3, 'loadmore'])
                Z(z[30])
                Z([3, 'normal'])
                Z([3, 'info'])
                Z([3, '点击加载更多'])
                Z([3, 'no-more'])
                Z([3, '已加载全部数据，持续更新中'])
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
            var oPTB = _n('van-sticky')
            var cQTB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(oPTB, cQTB)
            _(r, oPTB)
            var hOTB = _v()
            _(r, hOTB)
            if (_oz(z, 5, e, s, gg)) {
                hOTB.wxVkey = 1
                var oRTB = _n('view')
                _rz(z, oRTB, 'class', 6, e, s, gg)
                var lSTB = _v()
                _(oRTB, lSTB)
                if (_oz(z, 7, e, s, gg)) {
                    lSTB.wxVkey = 1
                    var tUTB = _v()
                    _(lSTB, tUTB)
                    var eVTB = function(oXTB, bWTB, xYTB, gg) {
                        var f1TB = _mz(z, 'view', ['bind:tap', 10, 'class', 1, 'data-accesstoken', 2, 'data-needvip', 3, 'data-uuid', 4], [], oXTB, bWTB, gg)
                        var c2TB = _n('view')
                        _rz(z, c2TB, 'class', 15, oXTB, bWTB, gg)
                        var o4TB = _n('text')
                        var c5TB = _oz(z, 16, oXTB, bWTB, gg)
                        _(o4TB, c5TB)
                        _(c2TB, o4TB)
                        var h3TB = _v()
                        _(c2TB, h3TB)
                        if (_oz(z, 17, oXTB, bWTB, gg)) {
                            h3TB.wxVkey = 1
                            var o6TB = _n('text')
                            _rz(z, o6TB, 'class', 18, oXTB, bWTB, gg)
                            var l7TB = _oz(z, 19, oXTB, bWTB, gg)
                            _(o6TB, l7TB)
                            _(h3TB, o6TB)
                        }
                        h3TB.wxXCkey = 1
                        _(f1TB, c2TB)
                        var a8TB = _n('view')
                        _rz(z, a8TB, 'class', 20, oXTB, bWTB, gg)
                        var t9TB = _v()
                        _(a8TB, t9TB)
                        if (_oz(z, 21, oXTB, bWTB, gg)) {
                            t9TB.wxVkey = 1
                            var e0TB = _mz(z, 'van-icon', ['color', 22, 'name', 1, 'size', 2], [], oXTB, bWTB, gg)
                            _(t9TB, e0TB)
                        } else {
                            t9TB.wxVkey = 2
                            var bAUB = _mz(z, 'van-icon', ['name', 25, 'size', 1], [], oXTB, bWTB, gg)
                            _(t9TB, bAUB)
                        }
                        t9TB.wxXCkey = 1
                        t9TB.wxXCkey = 3
                        t9TB.wxXCkey = 3
                        _(f1TB, a8TB)
                        _(xYTB, f1TB)
                        return xYTB
                    }
                    tUTB.wxXCkey = 4
                    _2z(z, 8, eVTB, e, s, gg, tUTB, 'item', 'index', 'uuid')
                    var aTTB = _v()
                    _(lSTB, aTTB)
                    if (_oz(z, 27, e, s, gg)) {
                        aTTB.wxVkey = 1
                        var oBUB = _n('guest-mode')
                        _(aTTB, oBUB)
                    } else {
                        aTTB.wxVkey = 2
                        var xCUB = _v()
                        _(aTTB, xCUB)
                        if (_oz(z, 28, e, s, gg)) {
                            xCUB.wxVkey = 1
                            var oDUB = _n('view')
                            _rz(z, oDUB, 'class', 29, e, s, gg)
                            var fEUB = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 30, 'customClass', 1, 'size', 2, 'type', 3], [], e, s, gg)
                            var cFUB = _oz(z, 34, e, s, gg)
                            _(fEUB, cFUB)
                            _(oDUB, fEUB)
                            _(xCUB, oDUB)
                        } else {
                            xCUB.wxVkey = 2
                            var hGUB = _n('view')
                            _rz(z, hGUB, 'class', 35, e, s, gg)
                            var oHUB = _n('text')
                            var cIUB = _oz(z, 36, e, s, gg)
                            _(oHUB, cIUB)
                            _(hGUB, oHUB)
                            _(xCUB, hGUB)
                        }
                        xCUB.wxXCkey = 1
                        xCUB.wxXCkey = 3
                    }
                    aTTB.wxXCkey = 1
                    aTTB.wxXCkey = 3
                    aTTB.wxXCkey = 3
                } else {
                    lSTB.wxVkey = 2
                    var oJUB = _n('van-empty')
                    _rz(z, oJUB, 'description', 37, e, s, gg)
                    _(lSTB, oJUB)
                }
                lSTB.wxXCkey = 1
                lSTB.wxXCkey = 3
                lSTB.wxXCkey = 3
                _(hOTB, oRTB)
            }
            hOTB.wxXCkey = 1
            hOTB.wxXCkey = 3
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
            outerGlobal.__wxml_comp_version__ = 0.02
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
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
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
else __wxAppCode__['pages/voice/index/index.wxml'] = $gwx_XC_76('./pages/voice/index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/voice/index/index.wxss'] = setCssToHead([".", [1], "container{padding:10px}\n.", [1], "item{border-bottom:1px solid #e8e8e8;-webkit-justify-content:space-between;justify-content:space-between;padding:20px 10px}\n.", [1], "item,.", [1], "item .", [1], "title{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "item .", [1], "title{color:#333;font-size:20px;-webkit-justify-content:center;justify-content:center}\n.", [1], "item .", [1], "title .", [1], "tag{background-color:#fc6a3e;border-radius:", [0, 5], ";color:#fff;font-size:", [0, 22], ";margin-left:", [0, 5], ";padding:", [0, 2], " ", [0, 4], "}\n.", [1], "next{margin-bottom:20px;margin-top:20px}\n.", [1], "next .", [1], "loadmore{width:150px}\n.", [1], "no-more{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding:", [0, 20], "}\n.", [1], "no-more wx-text{color:gray;margin:", [0, 10], " auto}\n.", [1], "not-vip .", [1], "title{color:gray}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/voice/index/index.wxss:1:752)", {
        path: "./pages/voice/index/index.wxss"
    });
}