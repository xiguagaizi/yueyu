$gwx_XC_13 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
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
                                [1, 'checkbox']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [8], 'horizontal', [
                                            [2, '==='],
                                            [
                                                [7],
                                                [3, 'direction']
                                            ],
                                            [1, 'horizontal']
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [3, ' custom-class']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'labelPosition']
                    ],
                    [1, 'left']
                ])
                Z([3, 'onClickLabel'])
                Z([a, [3, 'label-class '],
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
                                [1, 'checkbox__label']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'labelPosition']
                                        ]
                                    ],
                                    [
                                        [8], 'disabled', [
                                            [2, '||'],
                                            [
                                                [7],
                                                [3, 'disabled']
                                            ],
                                            [
                                                [7],
                                                [3, 'parentDisabled']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'toggle'])
                Z([3, 'van-checkbox__icon-wrap'])
                Z([
                    [7],
                    [3, 'useIconSlot']
                ])
                Z([3, 'icon'])
                Z([
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
                            [1, 'checkbox__icon']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'shape']
                                    ]
                                ],
                                [
                                    [9],
                                    [
                                        [8], 'disabled', [
                                            [2, '||'],
                                            [
                                                [7],
                                                [3, 'disabled']
                                            ],
                                            [
                                                [7],
                                                [3, 'parentDisabled']
                                            ]
                                        ]
                                    ],
                                    [
                                        [8], 'checked', [
                                            [7],
                                            [3, 'value']
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'icon-class'])
                Z([3, 'line-height: 1.25em;'])
                Z([3, 'success'])
                Z([3, '0.8em'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'iconStyle']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'checkedColor']
                                        ]
                                    ],
                                    [
                                        [7],
                                        [3, 'value']
                                    ]
                                ],
                                [
                                    [7],
                                    [3, 'disabled']
                                ]
                            ],
                            [
                                [7],
                                [3, 'parentDisabled']
                            ]
                        ],
                        [
                            [7],
                            [3, 'iconSize']
                        ]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'labelPosition']
                    ],
                    [1, 'right']
                ])
                Z(z[2])
                Z([a, z[3][1], z[3][2]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./miniprogram_npm/@vant/weapp/checkbox/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var o4Q = _n('view')
            _rz(z, o4Q, 'class', 0, e, s, gg)
            var f5Q = _v()
            _(o4Q, f5Q)
            if (_oz(z, 1, e, s, gg)) {
                f5Q.wxVkey = 1
                var h7Q = _mz(z, 'view', ['bindtap', 2, 'class', 1], [], e, s, gg)
                var o8Q = _n('slot')
                _(h7Q, o8Q)
                _(f5Q, h7Q)
            }
            var c9Q = _mz(z, 'view', ['bindtap', 4, 'class', 1], [], e, s, gg)
            var o0Q = _v()
            _(c9Q, o0Q)
            if (_oz(z, 6, e, s, gg)) {
                o0Q.wxVkey = 1
                var lAR = _n('slot')
                _rz(z, lAR, 'name', 7, e, s, gg)
                _(o0Q, lAR)
            } else {
                o0Q.wxVkey = 2
                var aBR = _mz(z, 'van-icon', ['class', 8, 'customClass', 1, 'customStyle', 2, 'name', 3, 'size', 4, 'style', 5], [], e, s, gg)
                _(o0Q, aBR)
            }
            o0Q.wxXCkey = 1
            o0Q.wxXCkey = 3
            _(o4Q, c9Q)
            var c6Q = _v()
            _(o4Q, c6Q)
            if (_oz(z, 14, e, s, gg)) {
                c6Q.wxVkey = 1
                var tCR = _mz(z, 'view', ['bindtap', 15, 'class', 1], [], e, s, gg)
                var eDR = _n('slot')
                _(tCR, eDR)
                _(c6Q, tCR)
            }
            f5Q.wxXCkey = 1
            c6Q.wxXCkey = 1
            _(r, o4Q)
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
                g = "$gwx_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox/index.wxml'] = [$gwx_XC_13, './miniprogram_npm/@vant/weapp/checkbox/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox/index.wxml'] = $gwx_XC_13('./miniprogram_npm/@vant/weapp/checkbox/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-checkbox{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;overflow:hidden;-webkit-user-select:none;user-select:none}\n.", [1], "van-checkbox--horizontal{margin-right:12px}\n.", [1], "van-checkbox__icon-wrap,.", [1], "van-checkbox__label{line-height:var(--checkbox-size,20px)}\n.", [1], "van-checkbox__icon-wrap{-webkit-flex:none;flex:none}\n.", [1], "van-checkbox__icon{-webkit-align-items:center;align-items:center;border:1px solid var(--checkbox-border-color,#c8c9cc);box-sizing:border-box;color:transparent;display:-webkit-flex;display:flex;font-size:var(--checkbox-size,20px);height:1em;-webkit-justify-content:center;justify-content:center;text-align:center;transition-duration:var(--checkbox-transition-duration,.2s);transition-property:color,border-color,background-color;width:1em}\n.", [1], "van-checkbox__icon--round{border-radius:100%}\n.", [1], "van-checkbox__icon--checked{background-color:var(--checkbox-checked-icon-color,#1989fa);border-color:var(--checkbox-checked-icon-color,#1989fa);color:#fff}\n.", [1], "van-checkbox__icon--disabled{background-color:var(--checkbox-disabled-background-color,#ebedf0);border-color:var(--checkbox-disabled-icon-color,#c8c9cc)}\n.", [1], "van-checkbox__icon--disabled.", [1], "van-checkbox__icon--checked{color:var(--checkbox-disabled-icon-color,#c8c9cc)}\n.", [1], "van-checkbox__label{word-wrap:break-word;color:var(--checkbox-label-color,#323233);padding-left:var(--checkbox-label-margin,10px)}\n.", [1], "van-checkbox__label--left{float:left;margin:0 var(--checkbox-label-margin,10px) 0 0}\n.", [1], "van-checkbox__label--disabled{color:var(--checkbox-disabled-label-color,#c8c9cc)}\n.", [1], "van-checkbox__label:empty{margin:0}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/checkbox/index.wxss"
    });
}