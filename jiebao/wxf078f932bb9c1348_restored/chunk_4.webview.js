$gwx_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];

        function gz$gwx_XC_34_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'discountDuration']
                ])
                Z([3, 'countdown'])
                Z([3, '#fff'])
                Z([3, 'underway'])
                Z([3, '24rpx'])
                Z([3, 'onChange'])
                Z([3, 'finished'])
                Z(z[0])
                Z([3, 'countdown-text'])
                Z([a, [
                        [7],
                        [3, 'desc']
                    ],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'timeData']
                            ],
                            [3, 'days']
                        ],
                        [
                            [2, '+'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'timeData']
                                ],
                                [3, 'days']
                            ],
                            [1, '天']
                        ],
                        [1, '']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'timeData']
                        ],
                        [3, 'hours']
                    ],
                    [3, '小时'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'timeData']
                        ],
                        [3, 'minutes']
                    ],
                    [3, '分'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'timeData']
                        ],
                        [3, 'seconds']
                    ],
                    [3, '秒']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
        }

        function gz$gwx_XC_34_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-count-down'])
                Z([
                    [7],
                    [3, 'useSlot']
                ])
                Z([a, [
                    [7],
                    [3, 'formattedTime']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_34 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_34 = true;
        var x = ['./components/count-down/index.wxml', './miniprogram_npm/@vant/weapp/count-down/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_34_1()
            var oFX = _v()
            _(r, oFX)
            if (_oz(z, 0, e, s, gg)) {
                oFX.wxVkey = 1
                var cGX = _n('view')
                _rz(z, cGX, 'class', 1, e, s, gg)
                var oHX = _mz(z, 'van-icon', ['color', 2, 'name', 1, 'size', 2], [], e, s, gg)
                _(cGX, oHX)
                var lIX = _mz(z, 'van-count-down', ['useSlot', -1, 'bind:change', 5, 'bind:finish', 1, 'time', 2], [], e, s, gg)
                var aJX = _n('text')
                _rz(z, aJX, 'class', 8, e, s, gg)
                var tKX = _oz(z, 9, e, s, gg)
                _(aJX, tKX)
                _(lIX, aJX)
                _(cGX, lIX)
                _(oFX, cGX)
            }
            oFX.wxXCkey = 1
            oFX.wxXCkey = 3
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_XC_34_2()
            var bMX = _n('view')
            _rz(z, bMX, 'class', 0, e, s, gg)
            var oNX = _v()
            _(bMX, oNX)
            if (_oz(z, 1, e, s, gg)) {
                oNX.wxVkey = 1
                var xOX = _n('slot')
                _(oNX, xOX)
            } else {
                oNX.wxVkey = 2
                var oPX = _oz(z, 2, e, s, gg)
                _(oNX, oPX)
            }
            oNX.wxXCkey = 1
            _(r, bMX)
            return r
        }
        e_[x[1]] = {
            f: m1,
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
                g = "$gwx_XC_34";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/count-down/index.wxml'] = [$gwx_XC_34, './components/count-down/index.wxml'];
else __wxAppCode__['components/count-down/index.wxml'] = $gwx_XC_34('./components/count-down/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = [$gwx_XC_34, './miniprogram_npm/@vant/weapp/count-down/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = $gwx_XC_34('./miniprogram_npm/@vant/weapp/count-down/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/count-down/index.wxss'] = setCssToHead([".", [1], "countdown{-webkit-align-items:center;align-items:center;background:#ff6b6b;border-radius:", [0, 40], ";display:-webkit-flex;display:flex;gap:", [0, 8], ";margin-top:", [0, 20], ";padding:", [0, 8], " ", [0, 24], "}\n.", [1], "countdown-text{color:#fff;font-size:", [0, 24], "}\n", ], undefined, {
        path: "./components/count-down/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-count-down{color:var(--count-down-text-color,#323233);font-size:var(--count-down-font-size,14px);line-height:var(--count-down-line-height,20px)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/count-down/index.wxss"
    });
}