$gwx_XC_69 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_69 || [];

        function gz$gwx_XC_69_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_69_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_69_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_69_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '有声内容'])
                Z([3, 'container'])
                Z([3, 'hero'])
                Z([3, 'hero__title'])
                Z([3, '古诗词、粤文读本、粤语鸡汤'])
                Z([3, 'hero__desc'])
                Z([3, '统一收口到音频图文内容列表，后续都从这里进入。'])
                Z([
                    [7],
                    [3, 'noticeText']
                ])
                Z([3, 'hero__notice'])
                Z([a, [
                    [7],
                    [3, 'noticeText']
                ]])
                Z([3, 'portal-list'])
                Z([
                    [7],
                    [3, 'items']
                ])
                Z([3, 'id'])
                Z([3, 'navToList'])
                Z([a, [3, 'portal-card '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'focusId']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'id']
                            ]
                        ],
                        [1, 'portal-card--focus'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'path']
                ])
                Z([a, [3, 'background:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'background']
                    ],
                    [3, ';']
                ])
                Z([3, 'portal-card__content'])
                Z([3, 'portal-card__title'])
                Z([a, [3, 'color:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'titleColor']
                    ], z[20][3]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ]])
                Z([3, 'portal-card__desc'])
                Z([a, z[23][1],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'descColor']
                    ], z[20][3]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'desc']
                ]])
                Z([3, 'portal-card__icon'])
                Z([3, 'aspectFit'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'icon']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_69_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_69_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_69 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_69 = true;
        var x = ['./pages/audio/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_69_1()
            var tMGB = _n('van-sticky')
            var eNGB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(tMGB, eNGB)
            _(r, tMGB)
            var bOGB = _n('view')
            _rz(z, bOGB, 'class', 5, e, s, gg)
            var oPGB = _n('view')
            _rz(z, oPGB, 'class', 6, e, s, gg)
            var oRGB = _n('view')
            _rz(z, oRGB, 'class', 7, e, s, gg)
            var fSGB = _oz(z, 8, e, s, gg)
            _(oRGB, fSGB)
            _(oPGB, oRGB)
            var cTGB = _n('view')
            _rz(z, cTGB, 'class', 9, e, s, gg)
            var hUGB = _oz(z, 10, e, s, gg)
            _(cTGB, hUGB)
            _(oPGB, cTGB)
            var xQGB = _v()
            _(oPGB, xQGB)
            if (_oz(z, 11, e, s, gg)) {
                xQGB.wxVkey = 1
                var oVGB = _n('view')
                _rz(z, oVGB, 'class', 12, e, s, gg)
                var cWGB = _oz(z, 13, e, s, gg)
                _(oVGB, cWGB)
                _(xQGB, oVGB)
            }
            xQGB.wxXCkey = 1
            _(bOGB, oPGB)
            var oXGB = _n('view')
            _rz(z, oXGB, 'class', 14, e, s, gg)
            var lYGB = _v()
            _(oXGB, lYGB)
            var aZGB = function(e2GB, t1GB, b3GB, gg) {
                var x5GB = _mz(z, 'view', ['bindtap', 17, 'class', 1, 'data-path', 2, 'style', 3], [], e2GB, t1GB, gg)
                var o6GB = _n('view')
                _rz(z, o6GB, 'class', 21, e2GB, t1GB, gg)
                var f7GB = _mz(z, 'view', ['class', 22, 'style', 1], [], e2GB, t1GB, gg)
                var c8GB = _oz(z, 24, e2GB, t1GB, gg)
                _(f7GB, c8GB)
                _(o6GB, f7GB)
                var h9GB = _mz(z, 'view', ['class', 25, 'style', 1], [], e2GB, t1GB, gg)
                var o0GB = _oz(z, 27, e2GB, t1GB, gg)
                _(h9GB, o0GB)
                _(o6GB, h9GB)
                _(x5GB, o6GB)
                var cAHB = _mz(z, 'image', ['class', 28, 'mode', 1, 'src', 2], [], e2GB, t1GB, gg)
                _(x5GB, cAHB)
                _(b3GB, x5GB)
                return b3GB
            }
            lYGB.wxXCkey = 2
            _2z(z, 15, aZGB, e, s, gg, lYGB, 'item', 'index', 'id')
            _(bOGB, oXGB)
            _(r, bOGB)
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
                g = "$gwx_XC_69";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_69();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/audio/index/index.wxml'] = [$gwx_XC_69, './pages/audio/index/index.wxml'];
else __wxAppCode__['pages/audio/index/index.wxml'] = $gwx_XC_69('./pages/audio/index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/audio/index/index.wxss'] = setCssToHead([".", [1], "container{background:linear-gradient(180deg,#f6f8fc,#eef4ff);box-sizing:border-box;min-height:100vh;padding:", [0, 24], "}\n.", [1], "hero{background:linear-gradient(135deg,#2245b5,#4a75ff 56%,#8bb2ff);border-radius:", [0, 28], ";box-shadow:0 ", [0, 18], " ", [0, 40], " rgba(34,69,181,.18);color:#fff;padding:", [0, 36], " ", [0, 32], "}\n.", [1], "hero__title{font-size:", [0, 38], ";font-weight:700;line-height:1.35}\n.", [1], "hero__desc{color:hsla(0,0%,100%,.88);font-size:", [0, 24], ";line-height:1.7;margin-top:", [0, 14], "}\n.", [1], "hero__notice{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.16);border-radius:", [0, 999], ";color:#fff;display:-webkit-inline-flex;display:inline-flex;font-size:", [0, 22], ";margin-top:", [0, 20], ";padding:", [0, 10], " ", [0, 18], "}\n.", [1], "portal-list{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 22], ";margin-top:", [0, 26], "}\n.", [1], "portal-card,.", [1], "portal-list{display:-webkit-flex;display:flex}\n.", [1], "portal-card{-webkit-align-items:center;align-items:center;border:", [0, 2], " solid transparent;border-radius:", [0, 24], ";box-shadow:0 ", [0, 10], " ", [0, 30], " rgba(15,23,42,.08);-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 30], " ", [0, 28], "}\n.", [1], "portal-card--focus{border-color:rgba(79,110,249,.28);box-shadow:0 ", [0, 14], " ", [0, 36], " rgba(79,110,249,.14)}\n.", [1], "portal-card__content{-webkit-flex:1;flex:1;min-width:0;padding-right:", [0, 24], "}\n.", [1], "portal-card__title{font-size:", [0, 34], ";font-weight:700;line-height:1.35}\n.", [1], "portal-card__desc{font-size:", [0, 24], ";line-height:1.6;margin-top:", [0, 10], "}\n.", [1], "portal-card__icon{-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 112], ";width:", [0, 112], "}\n", ], undefined, {
        path: "./pages/audio/index/index.wxss"
    });
}