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
                Z([3, 'van-cell-text'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'newAnswer']
                ])
                Z([3, 'danger'])
                Z([3, '有新点评'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'chinese']
                ]])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z([3, 'load-more'])
                Z([3, 'loadMore'])
                Z([3, 'info'])
                Z([3, '加载更多'])
                Z([3, '暂无记录'])
                Z([3, 'navToCheckin'])
                Z([3, 'bottom-button'])
                Z(z[23])
                Z([3, '现在去打卡'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
        var x = ['./pages/checkin/my/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_4_1()
            var oDM = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, oDM)
            var bCM = _v()
            _(r, bCM)
            if (_oz(z, 5, e, s, gg)) {
                bCM.wxVkey = 1
                var xEM = _n('view')
                _rz(z, xEM, 'class', 6, e, s, gg)
                var oFM = _v()
                _(xEM, oFM)
                if (_oz(z, 7, e, s, gg)) {
                    oFM.wxVkey = 1
                    var cHM = _mz(z, 'van-cell-group', ['inset', -1, 'customClass', 8], [], e, s, gg)
                    var hIM = _v()
                    _(cHM, hIM)
                    var oJM = function(oLM, cKM, lMM, gg) {
                        var tOM = _mz(z, 'van-cell', ['isLink', -1, 'bind:tap', 11, 'data-index', 1, 'label', 2], [], oLM, cKM, gg)
                        var ePM = _n('view')
                        _rz(z, ePM, 'slot', 14, oLM, cKM, gg)
                        var bQM = _n('view')
                        _rz(z, bQM, 'class', 15, oLM, cKM, gg)
                        var oRM = _v()
                        _(bQM, oRM)
                        if (_oz(z, 16, oLM, cKM, gg)) {
                            oRM.wxVkey = 1
                            var xSM = _n('van-tag')
                            _rz(z, xSM, 'type', 17, oLM, cKM, gg)
                            var oTM = _oz(z, 18, oLM, cKM, gg)
                            _(xSM, oTM)
                            _(oRM, xSM)
                        }
                        var fUM = _oz(z, 19, oLM, cKM, gg)
                        _(bQM, fUM)
                        oRM.wxXCkey = 1
                        oRM.wxXCkey = 3
                        _(ePM, bQM)
                        _(tOM, ePM)
                        _(lMM, tOM)
                        return lMM
                    }
                    hIM.wxXCkey = 4
                    _2z(z, 9, oJM, e, s, gg, hIM, 'item', 'index', '_id')
                    _(oFM, cHM)
                    var fGM = _v()
                    _(oFM, fGM)
                    if (_oz(z, 20, e, s, gg)) {
                        fGM.wxVkey = 1
                        var cVM = _n('view')
                        _rz(z, cVM, 'class', 21, e, s, gg)
                        var hWM = _mz(z, 'van-button', ['round', -1, 'bind:tap', 22, 'type', 1], [], e, s, gg)
                        var oXM = _oz(z, 24, e, s, gg)
                        _(hWM, oXM)
                        _(cVM, hWM)
                        _(fGM, cVM)
                    }
                    fGM.wxXCkey = 1
                    fGM.wxXCkey = 3
                } else {
                    oFM.wxVkey = 2
                    var cYM = _n('van-empty')
                    _rz(z, cYM, 'description', 25, e, s, gg)
                    var oZM = _mz(z, 'van-button', ['round', -1, 'bind:tap', 26, 'class', 1, 'type', 2], [], e, s, gg)
                    var l1M = _oz(z, 29, e, s, gg)
                    _(oZM, l1M)
                    _(cYM, oZM)
                    _(oFM, cYM)
                }
                oFM.wxXCkey = 1
                oFM.wxXCkey = 3
                oFM.wxXCkey = 3
                _(bCM, xEM)
            }
            bCM.wxXCkey = 1
            bCM.wxXCkey = 3
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
                g = "$gwx0_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/my/index.wxml'] = [$gwx0_XC_4, './pages/checkin/my/index.wxml'];
else __wxAppCode__['pages/checkin/my/index.wxml'] = $gwx0_XC_4('./pages/checkin/my/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/checkin/my/index.wxss'] = setCssToHead([".", [1], "load-more{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin-top:10px;width:100%}\n", ], undefined, {
        path: "./pages/checkin/my/index.wxss"
    });
}