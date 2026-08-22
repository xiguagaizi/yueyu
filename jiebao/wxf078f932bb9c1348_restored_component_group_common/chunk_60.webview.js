$gwx_XC_57 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_57 || [];

        function gz$gwx_XC_57_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClick'])
                Z([a, [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'utils']
                            ],
                            [3, 'bem']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [1, 'tabbar-item']
                            ],
                            [
                                [8], 'active', [
                                    [7],
                                    [3, 'active']
                                ]
                            ]
                        ]
                    ],
                    [3, ' custom-class']
                ])
                Z([a, [3, 'color:'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'active']
                        ],
                        [
                            [7],
                            [3, 'activeColor']
                        ],
                        [
                            [7],
                            [3, 'inactiveColor']
                        ]
                    ]
                ])
                Z([3, 'van-tabbar-item__icon'])
                Z([
                    [7],
                    [3, 'icon']
                ])
                Z([
                    [7],
                    [3, 'iconPrefix']
                ])
                Z([3, 'van-tabbar-item__icon__inner'])
                Z(z[4])
                Z([
                    [7],
                    [3, 'active']
                ])
                Z([3, 'icon-active'])
                Z([3, 'icon'])
                Z([3, 'van-tabbar-item__info'])
                Z([
                    [7],
                    [3, 'dot']
                ])
                Z([
                    [7],
                    [3, 'info']
                ])
                Z([3, 'van-tabbar-item__text'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_57_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_57_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_57 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_57 = true;
        var x = ['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_57_1()
            var oD8 = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var xE8 = _n('view')
            _rz(z, xE8, 'class', 3, e, s, gg)
            var oF8 = _v()
            _(xE8, oF8)
            if (_oz(z, 4, e, s, gg)) {
                oF8.wxVkey = 1
                var fG8 = _mz(z, 'van-icon', ['classPrefix', 5, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(oF8, fG8)
            } else {
                oF8.wxVkey = 2
                var cH8 = _v()
                _(oF8, cH8)
                if (_oz(z, 8, e, s, gg)) {
                    cH8.wxVkey = 1
                    var hI8 = _n('slot')
                    _rz(z, hI8, 'name', 9, e, s, gg)
                    _(cH8, hI8)
                } else {
                    cH8.wxVkey = 2
                    var oJ8 = _n('slot')
                    _rz(z, oJ8, 'name', 10, e, s, gg)
                    _(cH8, oJ8)
                }
                cH8.wxXCkey = 1
            }
            var cK8 = _mz(z, 'van-info', ['customClass', 11, 'dot', 1, 'info', 2], [], e, s, gg)
            _(xE8, cK8)
            oF8.wxXCkey = 1
            oF8.wxXCkey = 3
            _(oD8, xE8)
            var oL8 = _n('view')
            _rz(z, oL8, 'class', 14, e, s, gg)
            var lM8 = _n('slot')
            _(oL8, lM8)
            _(oD8, oL8)
            _(r, oD8)
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
                g = "$gwx_XC_57";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_57();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'] = [$gwx_XC_57, './miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'] = $gwx_XC_57('./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar-item/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-tabbar-item{-webkit-align-items:center;align-items:center;color:var(--tabbar-item-text-color,#646566);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:var(--tabbar-item-font-size,12px);height:100%;-webkit-justify-content:center;justify-content:center;line-height:var(--tabbar-item-line-height,1)}\n.", [1], "van-tabbar-item__icon{font-size:var(--tabbar-item-icon-size,22px);margin-bottom:var(--tabbar-item-margin-bottom,4px);position:relative}\n.", [1], "van-tabbar-item__icon__inner{display:block;min-width:1em}\n.", [1], "van-tabbar-item--active{color:var(--tabbar-item-active-color,#1989fa)}\n.", [1], "van-tabbar-item__info{margin-top:2px}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/tabbar-item/index.wxss"
    });
}