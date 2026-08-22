$gwx_XC_56 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_56 || [];

        function gz$gwx_XC_56_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'comp-player-container'])
                Z([3, 'play-ctrl'])
                Z([3, 'play'])
                Z([3, '#363333'])
                Z([
                    [7],
                    [3, 'info']
                ])
                Z([3, 'info-cls'])
                Z([a, [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'playing']
                        ],
                        [1, 'stop'],
                        [1, 'play']
                    ],
                    [3, '-circle-o']
                ])
                Z([3, '45px'])
                Z([3, 'progress'])
                Z([3, 'progress-bar'])
                Z([3, 'green'])
                Z([
                    [7],
                    [3, 'percentage']
                ])
                Z([1, false])
                Z([1, 2])
                Z([3, 'time-bar'])
                Z([3, '00:00'])
                Z([a, [
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tools']
                        ],
                        [3, 'formatDuration']
                    ],
                    [
                        [5],
                        [
                            [2, '||'],
                            [
                                [7],
                                [3, 'duration']
                            ],
                            [1, 0]
                        ]
                    ]
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_1
        }

        function gz$gwx_XC_56_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_56_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_56_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-progress custom-class'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'rootStyle']
                    ],
                    [
                        [5],
                        [
                            [9],
                            [
                                [8], 'strokeWidth', [
                                    [7],
                                    [3, 'strokeWidth']
                                ]
                            ],
                            [
                                [8], 'trackColor', [
                                    [7],
                                    [3, 'trackColor']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'van-progress__portion'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'portionStyle']
                    ],
                    [
                        [5],
                        [
                            [9],
                            [
                                [9],
                                [
                                    [8], 'percentage', [
                                        [7],
                                        [3, 'percentage']
                                    ]
                                ],
                                [
                                    [8], 'inactive', [
                                        [7],
                                        [3, 'inactive']
                                    ]
                                ]
                            ],
                            [
                                [8], 'color', [
                                    [7],
                                    [3, 'color']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showPivot']
                    ],
                    [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'computed']
                            ],
                            [3, 'pivotText']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [7],
                                    [3, 'pivotText']
                                ]
                            ],
                            [
                                [7],
                                [3, 'percentage']
                            ]
                        ]
                    ]
                ])
                Z([3, 'van-progress__pivot'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'pivotStyle']
                    ],
                    [
                        [5],
                        [
                            [9],
                            [
                                [9],
                                [
                                    [9],
                                    [
                                        [9],
                                        [
                                            [8], 'textColor', [
                                                [7],
                                                [3, 'textColor']
                                            ]
                                        ],
                                        [
                                            [8], 'pivotColor', [
                                                [7],
                                                [3, 'pivotColor']
                                            ]
                                        ]
                                    ],
                                    [
                                        [8], 'inactive', [
                                            [7],
                                            [3, 'inactive']
                                        ]
                                    ]
                                ],
                                [
                                    [8], 'color', [
                                        [7],
                                        [3, 'color']
                                    ]
                                ]
                            ],
                            [
                                [8], 'right', [
                                    [7],
                                    [3, 'right']
                                ]
                            ]
                        ]
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
                        [3, 'pivotText']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [
                                [7],
                                [3, 'pivotText']
                            ]
                        ],
                        [
                            [7],
                            [3, 'percentage']
                        ]
                    ]
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_56 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_56 = true;
        var x = ['./components/player/index.wxml', './miniprogram_npm/@vant/weapp/progress/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_56_1()
            var lU7 = _n('view')
            _rz(z, lU7, 'class', 0, e, s, gg)
            var aV7 = _n('view')
            _rz(z, aV7, 'class', 1, e, s, gg)
            var tW7 = _mz(z, 'van-icon', ['bind:tap', 2, 'color', 1, 'info', 2, 'infoClass', 3, 'name', 4, 'size', 5], [], e, s, gg)
            _(aV7, tW7)
            _(lU7, aV7)
            var eX7 = _n('view')
            _rz(z, eX7, 'class', 8, e, s, gg)
            var bY7 = _n('view')
            _rz(z, bY7, 'class', 9, e, s, gg)
            var oZ7 = _n('view')
            var x17 = _mz(z, 'van-progress', ['color', 10, 'percentage', 1, 'showPivot', 2, 'strokeWidth', 3], [], e, s, gg)
            _(oZ7, x17)
            _(bY7, oZ7)
            _(eX7, bY7)
            var o27 = _n('view')
            _rz(z, o27, 'class', 14, e, s, gg)
            var f37 = _n('text')
            var c47 = _oz(z, 15, e, s, gg)
            _(f37, c47)
            _(o27, f37)
            var h57 = _n('text')
            var o67 = _oz(z, 16, e, s, gg)
            _(h57, o67)
            _(o27, h57)
            _(eX7, o27)
            _(lU7, eX7)
            _(r, lU7)
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
            var z = gz$gwx_XC_56_2()
            var o87 = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var l97 = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            var a07 = _v()
            _(l97, a07)
            if (_oz(z, 4, e, s, gg)) {
                a07.wxVkey = 1
                var tA8 = _mz(z, 'view', ['class', 5, 'style', 1], [], e, s, gg)
                var eB8 = _oz(z, 7, e, s, gg)
                _(tA8, eB8)
                _(a07, tA8)
            }
            a07.wxXCkey = 1
            _(o87, l97)
            _(r, o87)
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
                g = "$gwx_XC_56";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_56();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/player/index.wxml'] = [$gwx_XC_56, './components/player/index.wxml'];
else __wxAppCode__['components/player/index.wxml'] = $gwx_XC_56('./components/player/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxml'] = [$gwx_XC_56, './miniprogram_npm/@vant/weapp/progress/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxml'] = $gwx_XC_56('./miniprogram_npm/@vant/weapp/progress/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/player/index.wxss'] = setCssToHead([".", [1], "comp-player-container{display:-webkit-flex;display:flex;width:100%}\n.", [1], "comp-player-container .", [1], "play-ctrl{margin-right:8px}\n.", [1], "comp-player-container .", [1], "progress{width:100%}\n.", [1], "comp-player-container .", [1], "progress,.", [1], "comp-player-container .", [1], "progress .", [1], "progress-bar{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "comp-player-container .", [1], "progress .", [1], "progress-bar{height:50%;-webkit-justify-content:center;justify-content:center}\n.", [1], "comp-player-container .", [1], "time-bar{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-size:14px;height:50%;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "info-cls{font-size:12px}\n", ], undefined, {
        path: "./components/player/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-progress{background:var(--progress-background-color,#ebedf0);border-radius:var(--progress-height,4px);height:var(--progress-height,4px);position:relative}\n.", [1], "van-progress__portion{background:var(--progress-color,#1989fa);border-radius:inherit;height:100%;left:0;position:absolute}\n.", [1], "van-progress__pivot{background-color:var(--progress-pivot-background-color,#1989fa);border-radius:1em;box-sizing:border-box;color:var(--progress-pivot-text-color,#fff);font-size:var(--progress-pivot-font-size,10px);line-height:var(--progress-pivot-line-height,1.6);min-width:3.6em;padding:var(--progress-pivot-padding,0 5px);position:absolute;text-align:center;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);word-break:keep-all}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/progress/index.wxss"
    });
}