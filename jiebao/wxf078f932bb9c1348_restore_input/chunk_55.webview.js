$gwx_XC_51 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_51 || [];

        function gz$gwx_XC_51_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'custom-class '],
                    [
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
                                [1, 'steps']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'direction']
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'van-step__wrapper'])
                Z([
                    [7],
                    [3, 'steps']
                ])
                Z([3, 'index'])
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
                                [1, 'step']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'direction']
                                        ]
                                    ],
                                    [
                                        [12],
                                        [
                                            [7],
                                            [3, 'status']
                                        ],
                                        [
                                            [5],
                                            [
                                                [5],
                                                [
                                                    [7],
                                                    [3, 'index']
                                                ]
                                            ],
                                            [
                                                [7],
                                                [3, 'active']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [3, ' van-hairline']
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [12],
                            [
                                [7],
                                [3, 'status']
                            ],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'index']
                                    ]
                                ],
                                [
                                    [7],
                                    [3, 'active']
                                ]
                            ]
                        ],
                        [1, 'inactive']
                    ],
                    [
                        [2, '+'],
                        [1, 'color: '],
                        [
                            [7],
                            [3, 'inactiveColor']
                        ]
                    ],
                    [1, '']
                ])
                Z([3, 'van-step__title'])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'index']
                        ],
                        [
                            [7],
                            [3, 'active']
                        ]
                    ],
                    [
                        [2, '+'],
                        [1, 'color: '],
                        [
                            [7],
                            [3, 'activeColor']
                        ]
                    ],
                    [1, '']
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'text']
                ]])
                Z([3, 'desc-class'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'desc']
                ]])
                Z([3, 'van-step__circle-container'])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [7],
                        [3, 'active']
                    ]
                ])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'inactiveIcon']
                    ],
                    [
                        [7],
                        [3, 'inactiveIcon']
                    ]
                ])
                Z([3, 'van-step__icon'])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [12],
                            [
                                [7],
                                [3, 'status']
                            ],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'index']
                                    ]
                                ],
                                [
                                    [7],
                                    [3, 'active']
                                ]
                            ]
                        ],
                        [1, 'inactive']
                    ],
                    [
                        [7],
                        [3, 'inactiveColor']
                    ],
                    [
                        [7],
                        [3, 'activeColor']
                    ]
                ])
                Z(z[15])
                Z([3, 'van-step__circle'])
                Z([
                    [2, '+'],
                    [1, 'background-color: '],
                    [
                        [2, '?:'],
                        [
                            [2, '<'],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'active']
                            ]
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
                Z(z[16])
                Z([
                    [7],
                    [3, 'activeColor']
                ])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'activeIcon']
                    ],
                    [
                        [7],
                        [3, 'activeIcon']
                    ]
                ])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [
                        [2, '-'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'steps']
                            ],
                            [3, 'length']
                        ],
                        [1, 1]
                    ]
                ])
                Z([3, 'van-step__line'])
                Z(z[20])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_51_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_51_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_51 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_51 = true;
        var x = ['./miniprogram_npm/@vant/weapp/steps/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_51_1()
            var oV5 = _n('view')
            _rz(z, oV5, 'class', 0, e, s, gg)
            var lW5 = _n('view')
            _rz(z, lW5, 'class', 1, e, s, gg)
            var aX5 = _v()
            _(lW5, aX5)
            var tY5 = function(b15, eZ5, o25, gg) {
                var o45 = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-index', 2, 'style', 3], [], b15, eZ5, gg)
                var c65 = _mz(z, 'view', ['class', 8, 'style', 1], [], b15, eZ5, gg)
                var h75 = _n('view')
                var o85 = _oz(z, 10, b15, eZ5, gg)
                _(h75, o85)
                _(c65, h75)
                var c95 = _n('view')
                _rz(z, c95, 'class', 11, b15, eZ5, gg)
                var o05 = _oz(z, 12, b15, eZ5, gg)
                _(c95, o05)
                _(c65, c95)
                _(o45, c65)
                var lA6 = _n('view')
                _rz(z, lA6, 'class', 13, b15, eZ5, gg)
                var aB6 = _v()
                _(lA6, aB6)
                if (_oz(z, 14, b15, eZ5, gg)) {
                    aB6.wxVkey = 1
                    var tC6 = _v()
                    _(aB6, tC6)
                    if (_oz(z, 15, b15, eZ5, gg)) {
                        tC6.wxVkey = 1
                        var eD6 = _mz(z, 'van-icon', ['class', 16, 'color', 1, 'name', 2], [], b15, eZ5, gg)
                        _(tC6, eD6)
                    } else {
                        tC6.wxVkey = 2
                        var bE6 = _mz(z, 'view', ['class', 19, 'style', 1], [], b15, eZ5, gg)
                        _(tC6, bE6)
                    }
                    tC6.wxXCkey = 1
                    tC6.wxXCkey = 3
                } else {
                    aB6.wxVkey = 2
                    var oF6 = _mz(z, 'van-icon', ['class', 21, 'color', 1, 'name', 2], [], b15, eZ5, gg)
                    _(aB6, oF6)
                }
                aB6.wxXCkey = 1
                aB6.wxXCkey = 3
                aB6.wxXCkey = 3
                _(o45, lA6)
                var f55 = _v()
                _(o45, f55)
                if (_oz(z, 24, b15, eZ5, gg)) {
                    f55.wxVkey = 1
                    var xG6 = _mz(z, 'view', ['class', 25, 'style', 1], [], b15, eZ5, gg)
                    _(f55, xG6)
                }
                f55.wxXCkey = 1
                _(o25, o45)
                return o25
            }
            aX5.wxXCkey = 4
            _2z(z, 2, tY5, e, s, gg, aX5, 'item', 'index', 'index')
            _(oV5, lW5)
            _(r, oV5)
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
                g = "$gwx_XC_51";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_51();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/steps/index.wxml'] = [$gwx_XC_51, './miniprogram_npm/@vant/weapp/steps/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/steps/index.wxml'] = $gwx_XC_51('./miniprogram_npm/@vant/weapp/steps/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/steps/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-steps{background-color:var(--steps-background-color,#fff);overflow:hidden}\n.", [1], "van-steps--horizontal{padding:10px}\n.", [1], "van-steps--horizontal .", [1], "van-step__wrapper{display:-webkit-flex;display:flex;overflow:hidden;position:relative}\n.", [1], "van-steps--vertical{padding-left:10px}\n.", [1], "van-steps--vertical .", [1], "van-step__wrapper{padding:0 0 0 20px}\n.", [1], "van-step{color:var(--step-text-color,#969799);-webkit-flex:1;flex:1;font-size:var(--step-font-size,14px);position:relative}\n.", [1], "van-step--finish{color:var(--step-finish-text-color,#323233)}\n.", [1], "van-step__circle{background-color:var(--step-circle-color,#969799);border-radius:50%;height:var(--step-circle-size,5px);width:var(--step-circle-size,5px)}\n.", [1], "van-step--horizontal{padding-bottom:14px}\n.", [1], "van-step--horizontal:first-child .", [1], "van-step__title{-webkit-transform:none;transform:none}\n.", [1], "van-step--horizontal:first-child .", [1], "van-step__circle-container{padding:0 8px 0 0;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}\n.", [1], "van-step--horizontal:last-child{position:absolute;right:0;width:auto}\n.", [1], "van-step--horizontal:last-child .", [1], "van-step__title{text-align:right;-webkit-transform:none;transform:none}\n.", [1], "van-step--horizontal:last-child .", [1], "van-step__circle-container{padding:0 0 0 8px;right:0;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}\n.", [1], "van-step--horizontal .", [1], "van-step__circle-container{background-color:#fff;bottom:6px;padding:0 var(--padding-xs,8px);position:absolute;-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0);z-index:1}\n.", [1], "van-step--horizontal .", [1], "van-step__title{display:inline-block;font-size:var(--step-horizontal-title-font-size,12px);-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}\n.", [1], "van-step--horizontal .", [1], "van-step__line{background-color:var(--step-line-color,#ebedf0);bottom:6px;height:1px;left:0;position:absolute;right:0;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}\n.", [1], "van-step--horizontal.", [1], "van-step--process{color:var(--step-process-text-color,#323233)}\n.", [1], "van-step--horizontal.", [1], "van-step--process .", [1], "van-step__icon{display:block;font-size:var(--step-icon-size,12px);line-height:1}\n.", [1], "van-step--vertical{line-height:18px;padding:10px 10px 10px 0}\n.", [1], "van-step--vertical:after{border-bottom-width:1px}\n.", [1], "van-step--vertical:last-child:after{border-bottom-width:none}\n.", [1], "van-step--vertical:first-child:before{background-color:#fff;content:\x22\x22;height:20px;left:-15px;position:absolute;top:0;width:1px;z-index:1}\n.", [1], "van-step--vertical .", [1], "van-step__circle,.", [1], "van-step--vertical .", [1], "van-step__icon,.", [1], "van-step--vertical .", [1], "van-step__line{left:-14px;position:absolute;top:19px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);z-index:2}\n.", [1], "van-step--vertical .", [1], "van-step__icon{background-color:var(--steps-background-color,#fff);font-size:var(--step-icon-size,12px);line-height:1}\n.", [1], "van-step--vertical .", [1], "van-step__line{background-color:var(--step-line-color,#ebedf0);height:100%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);width:1px;z-index:1}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/steps/index.wxss"
    });
}