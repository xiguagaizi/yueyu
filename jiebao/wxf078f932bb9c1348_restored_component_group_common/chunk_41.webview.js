$gwx_XC_36 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];

        function gz$gwx_XC_36_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'fixed']
                    ],
                    [
                        [7],
                        [3, 'placeholder']
                    ]
                ])
                Z([a, [3, 'height:'],
                    [
                        [7],
                        [3, 'height']
                    ],
                    [3, 'px;']
                ])
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
                                [1, 'nav-bar']
                            ],
                            [
                                [8], 'fixed', [
                                    [7],
                                    [3, 'fixed']
                                ]
                            ]
                        ]
                    ],
                    [3, ' custom-class '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'border']
                        ],
                        [1, 'van-hairline--bottom'],
                        [1, '']
                    ]
                ])
                Z([a, [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'computed']
                            ],
                            [3, 'barStyle']
                        ],
                        [
                            [5],
                            [
                                [9],
                                [
                                    [9],
                                    [
                                        [8], 'zIndex', [
                                            [7],
                                            [3, 'zIndex']
                                        ]
                                    ],
                                    [
                                        [8], 'statusBarHeight', [
                                            [7],
                                            [3, 'statusBarHeight']
                                        ]
                                    ]
                                ],
                                [
                                    [8], 'safeAreaInsetTop', [
                                        [7],
                                        [3, 'safeAreaInsetTop']
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [3, ';'],
                    [
                        [7],
                        [3, 'customStyle']
                    ]
                ])
                Z([3, 'van-nav-bar__content'])
                Z([3, 'onClickLeft'])
                Z([3, 'van-nav-bar__left'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'leftArrow']
                    ],
                    [
                        [7],
                        [3, 'leftText']
                    ]
                ])
                Z([
                    [7],
                    [3, 'leftArrow']
                ])
                Z([3, 'van-nav-bar__arrow'])
                Z([3, 'arrow-left'])
                Z([3, '16px'])
                Z([
                    [7],
                    [3, 'leftText']
                ])
                Z([3, 'van-nav-bar__text'])
                Z([3, 'van-nav-bar__text--hover'])
                Z([3, '70'])
                Z([a, [
                    [7],
                    [3, 'leftText']
                ]])
                Z([3, 'left'])
                Z([3, 'van-nav-bar__title title-class van-ellipsis'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([3, 'title'])
                Z([3, 'onClickRight'])
                Z([3, 'van-nav-bar__right'])
                Z([
                    [7],
                    [3, 'rightText']
                ])
                Z(z[13])
                Z(z[14])
                Z(z[15])
                Z([a, [
                    [7],
                    [3, 'rightText']
                ]])
                Z([3, 'right'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_36 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_36 = true;
        var x = ['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_36_1()
            var f5X = _v()
            _(r, f5X)
            if (_oz(z, 0, e, s, gg)) {
                f5X.wxVkey = 1
                var c6X = _n('view')
                _rz(z, c6X, 'style', 1, e, s, gg)
                _(f5X, c6X)
            }
            var h7X = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            var o8X = _n('view')
            _rz(z, o8X, 'class', 4, e, s, gg)
            var c9X = _mz(z, 'view', ['bind:tap', 5, 'class', 1], [], e, s, gg)
            var o0X = _v()
            _(c9X, o0X)
            if (_oz(z, 7, e, s, gg)) {
                o0X.wxVkey = 1
                var lAY = _v()
                _(o0X, lAY)
                if (_oz(z, 8, e, s, gg)) {
                    lAY.wxVkey = 1
                    var tCY = _mz(z, 'van-icon', ['customClass', 9, 'name', 1, 'size', 2], [], e, s, gg)
                    _(lAY, tCY)
                }
                var aBY = _v()
                _(o0X, aBY)
                if (_oz(z, 12, e, s, gg)) {
                    aBY.wxVkey = 1
                    var eDY = _mz(z, 'view', ['class', 13, 'hoverClass', 1, 'hoverStayTime', 2], [], e, s, gg)
                    var bEY = _oz(z, 16, e, s, gg)
                    _(eDY, bEY)
                    _(aBY, eDY)
                }
                lAY.wxXCkey = 1
                lAY.wxXCkey = 3
                aBY.wxXCkey = 1
            } else {
                o0X.wxVkey = 2
                var oFY = _n('slot')
                _rz(z, oFY, 'name', 17, e, s, gg)
                _(o0X, oFY)
            }
            o0X.wxXCkey = 1
            o0X.wxXCkey = 3
            _(o8X, c9X)
            var xGY = _n('view')
            _rz(z, xGY, 'class', 18, e, s, gg)
            var oHY = _v()
            _(xGY, oHY)
            if (_oz(z, 19, e, s, gg)) {
                oHY.wxVkey = 1
                var fIY = _oz(z, 20, e, s, gg)
                _(oHY, fIY)
            } else {
                oHY.wxVkey = 2
                var cJY = _n('slot')
                _rz(z, cJY, 'name', 21, e, s, gg)
                _(oHY, cJY)
            }
            oHY.wxXCkey = 1
            _(o8X, xGY)
            var hKY = _mz(z, 'view', ['bind:tap', 22, 'class', 1], [], e, s, gg)
            var oLY = _v()
            _(hKY, oLY)
            if (_oz(z, 24, e, s, gg)) {
                oLY.wxVkey = 1
                var cMY = _mz(z, 'view', ['class', 25, 'hoverClass', 1, 'hoverStayTime', 2], [], e, s, gg)
                var oNY = _oz(z, 28, e, s, gg)
                _(cMY, oNY)
                _(oLY, cMY)
            } else {
                oLY.wxVkey = 2
                var lOY = _n('slot')
                _rz(z, lOY, 'name', 29, e, s, gg)
                _(oLY, lOY)
            }
            oLY.wxXCkey = 1
            _(o8X, hKY)
            _(h7X, o8X)
            _(r, h7X)
            f5X.wxXCkey = 1
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
                g = "$gwx_XC_36";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_36();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = [$gwx_XC_36, './miniprogram_npm/@vant/weapp/nav-bar/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = $gwx_XC_36('./miniprogram_npm/@vant/weapp/nav-bar/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-nav-bar{background-color:var(--nav-bar-background-color,#fff);box-sizing:initial;height:var(--nav-bar-height,46px);line-height:var(--nav-bar-height,46px);position:relative;text-align:center;-webkit-user-select:none;user-select:none}\n.", [1], "van-nav-bar__content{height:100%;position:relative}\n.", [1], "van-nav-bar__text{color:var(--nav-bar-text-color,#1989fa);display:inline-block;margin:0 calc(var(--padding-md, 16px)*-1);padding:0 var(--padding-md,16px);vertical-align:middle}\n.", [1], "van-nav-bar__text--hover{background-color:#f2f3f5}\n.", [1], "van-nav-bar__arrow{color:var(--nav-bar-icon-color,#1989fa)!important;font-size:var(--nav-bar-arrow-size,16px)!important;vertical-align:middle}\n.", [1], "van-nav-bar__arrow+.", [1], "van-nav-bar__text{margin-left:-20px;padding-left:25px}\n.", [1], "van-nav-bar--fixed{left:0;position:fixed;top:0;width:100%}\n.", [1], "van-nav-bar__title{color:var(--nav-bar-title-text-color,#323233);font-size:var(--nav-bar-title-font-size,16px);font-weight:var(--font-weight-bold,500);margin:0 auto;max-width:60%}\n.", [1], "van-nav-bar__left,.", [1], "van-nav-bar__right{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;font-size:var(--font-size-md,14px);position:absolute;top:0}\n.", [1], "van-nav-bar__left{left:var(--padding-md,16px)}\n.", [1], "van-nav-bar__right{right:var(--padding-md,16px)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/nav-bar/index.wxss"
    });
}