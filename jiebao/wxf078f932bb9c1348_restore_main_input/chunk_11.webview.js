$gwx_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClickOverlay'])
                Z([
                    [7],
                    [3, 'closeOnClickOverlay']
                ])
                Z([3, 'van-action-sheet custom-class'])
                Z([
                    [7],
                    [3, 'overlay']
                ])
                Z([3, 'bottom'])
                Z([
                    [7],
                    [3, 'round']
                ])
                Z([
                    [7],
                    [3, 'safeAreaInsetBottom']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [7],
                    [3, 'zIndex']
                ])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'van-action-sheet__header'])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([3, 'onClose'])
                Z([3, 'van-action-sheet__close'])
                Z([3, 'cross'])
                Z([
                    [7],
                    [3, 'description']
                ])
                Z([3, 'van-action-sheet__description van-hairline--bottom'])
                Z([a, [
                    [7],
                    [3, 'description']
                ]])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'actions']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'actions']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'list-class'])
                Z([
                    [7],
                    [3, 'actions']
                ])
                Z([3, 'index'])
                Z([
                    [7],
                    [3, 'appParameter']
                ])
                Z([3, 'onContact'])
                Z([3, 'onError'])
                Z([3, 'onGetPhoneNumber'])
                Z([3, 'onGetUserInfo'])
                Z([3, 'onLaunchApp'])
                Z([3, 'onOpenSetting'])
                Z([
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'disabled']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'loading']
                        ]
                    ],
                    [1, ''],
                    [1, 'onSelect']
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
                                [1, 'action-sheet__item']
                            ],
                            [
                                [8], 'disabled', [
                                    [2, '||'],
                                    [
                                        [6],
                                        [
                                            [7],
                                            [3, 'item']
                                        ],
                                        [3, 'disabled']
                                    ],
                                    [
                                        [6],
                                        [
                                            [7],
                                            [3, 'item']
                                        ],
                                        [3, 'loading']
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [3, ' '],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'className']
                        ],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([3, 'van-action-sheet__item--hover'])
                Z([
                    [7],
                    [3, 'lang']
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '||'],
                        [
                            [2, '||'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'disabled']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'loading']
                            ]
                        ],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'canIUseGetUserProfile']
                            ],
                            [
                                [2, '==='],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'item']
                                    ],
                                    [3, 'openType']
                                ],
                                [1, 'getUserInfo']
                            ]
                        ]
                    ],
                    [1, ''],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'openType']
                    ]
                ])
                Z([
                    [7],
                    [3, 'sendMessageImg']
                ])
                Z([
                    [7],
                    [3, 'sendMessagePath']
                ])
                Z([
                    [7],
                    [3, 'sendMessageTitle']
                ])
                Z([
                    [7],
                    [3, 'sessionFrom']
                ])
                Z([
                    [7],
                    [3, 'showMessageCard']
                ])
                Z([
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'color']
                    ],
                    [
                        [2, '+'],
                        [1, 'color: '],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'color']
                        ]
                    ],
                    [1, '']
                ])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'loading']
                    ]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'name']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'subname']
                ])
                Z([3, 'van-action-sheet__subname'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'subname']
                ]])
                Z([3, 'van-action-sheet__loading'])
                Z([3, '22px'])
                Z([
                    [7],
                    [3, 'cancelText']
                ])
                Z([3, 'van-action-sheet__gap'])
                Z([3, 'onCancel'])
                Z([3, 'van-action-sheet__cancel'])
                Z([3, 'van-action-sheet__cancel--hover'])
                Z([3, '70'])
                Z([a, [
                    [7],
                    [3, 'cancelText']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var aZH = _mz(z, 'van-popup', ['bind:close', 0, 'closeOnClickOverlay', 1, 'customClass', 1, 'overlay', 2, 'position', 3, 'round', 4, 'safeAreaInsetBottom', 5, 'show', 6, 'zIndex', 7], [], e, s, gg)
            var t1H = _v()
            _(aZH, t1H)
            if (_oz(z, 9, e, s, gg)) {
                t1H.wxVkey = 1
                var x5H = _n('view')
                _rz(z, x5H, 'class', 10, e, s, gg)
                var o6H = _oz(z, 11, e, s, gg)
                _(x5H, o6H)
                var f7H = _mz(z, 'van-icon', ['bind:click', 12, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(x5H, f7H)
                _(t1H, x5H)
            }
            var e2H = _v()
            _(aZH, e2H)
            if (_oz(z, 15, e, s, gg)) {
                e2H.wxVkey = 1
                var c8H = _n('view')
                _rz(z, c8H, 'class', 16, e, s, gg)
                var h9H = _oz(z, 17, e, s, gg)
                _(c8H, h9H)
                _(e2H, c8H)
            }
            var b3H = _v()
            _(aZH, b3H)
            if (_oz(z, 18, e, s, gg)) {
                b3H.wxVkey = 1
                var o0H = _n('view')
                _rz(z, o0H, 'class', 19, e, s, gg)
                var cAI = _v()
                _(o0H, cAI)
                var oBI = function(aDI, lCI, tEI, gg) {
                    var bGI = _mz(z, 'button', ['appParameter', 22, 'bindcontact', 1, 'binderror', 2, 'bindgetphonenumber', 3, 'bindgetuserinfo', 4, 'bindlaunchapp', 5, 'bindopensetting', 6, 'bindtap', 7, 'class', 8, 'data-index', 9, 'hoverClass', 10, 'lang', 11, 'openType', 12, 'sendMessageImg', 13, 'sendMessagePath', 14, 'sendMessageTitle', 15, 'sessionFrom', 16, 'showMessageCard', 17, 'style', 18], [], aDI, lCI, gg)
                    var oHI = _v()
                    _(bGI, oHI)
                    if (_oz(z, 41, aDI, lCI, gg)) {
                        oHI.wxVkey = 1
                        var oJI = _oz(z, 42, aDI, lCI, gg)
                        _(oHI, oJI)
                        var xII = _v()
                        _(oHI, xII)
                        if (_oz(z, 43, aDI, lCI, gg)) {
                            xII.wxVkey = 1
                            var fKI = _n('view')
                            _rz(z, fKI, 'class', 44, aDI, lCI, gg)
                            var cLI = _oz(z, 45, aDI, lCI, gg)
                            _(fKI, cLI)
                            _(xII, fKI)
                        }
                        xII.wxXCkey = 1
                    } else {
                        oHI.wxVkey = 2
                        var hMI = _mz(z, 'van-loading', ['customClass', 46, 'size', 1], [], aDI, lCI, gg)
                        _(oHI, hMI)
                    }
                    oHI.wxXCkey = 1
                    oHI.wxXCkey = 3
                    _(tEI, bGI)
                    return tEI
                }
                cAI.wxXCkey = 4
                _2z(z, 20, oBI, e, s, gg, cAI, 'item', 'index', 'index')
                _(b3H, o0H)
            }
            var oNI = _n('slot')
            _(aZH, oNI)
            var o4H = _v()
            _(aZH, o4H)
            if (_oz(z, 48, e, s, gg)) {
                o4H.wxVkey = 1
                var cOI = _n('view')
                _rz(z, cOI, 'class', 49, e, s, gg)
                _(o4H, cOI)
                var oPI = _mz(z, 'view', ['bind:tap', 50, 'class', 1, 'hoverClass', 2, 'hoverStayTime', 3], [], e, s, gg)
                var lQI = _oz(z, 54, e, s, gg)
                _(oPI, lQI)
                _(o4H, oPI)
            }
            t1H.wxXCkey = 1
            t1H.wxXCkey = 3
            e2H.wxXCkey = 1
            b3H.wxXCkey = 1
            b3H.wxXCkey = 3
            o4H.wxXCkey = 1
            _(r, aZH)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/action-sheet/index.wxml'] = [$gwx_XC_3, './miniprogram_npm/@vant/weapp/action-sheet/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/action-sheet/index.wxml'] = $gwx_XC_3('./miniprogram_npm/@vant/weapp/action-sheet/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/action-sheet/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-action-sheet{color:var(--action-sheet-item-text-color,#323233);max-height:var(--action-sheet-max-height,90%)!important}\n.", [1], "van-action-sheet__cancel,.", [1], "van-action-sheet__item{background-color:var(--action-sheet-item-background,#fff);font-size:var(--action-sheet-item-font-size,16px);line-height:var(--action-sheet-item-line-height,22px);padding:14px 16px;text-align:center}\n.", [1], "van-action-sheet__cancel--hover,.", [1], "van-action-sheet__item--hover{background-color:#f2f3f5}\n.", [1], "van-action-sheet__cancel:after,.", [1], "van-action-sheet__item:after{border-width:0}\n.", [1], "van-action-sheet__cancel{color:var(--action-sheet-cancel-text-color,#646566)}\n.", [1], "van-action-sheet__gap{background-color:var(--action-sheet-cancel-padding-color,#f7f8fa);display:block;height:var(--action-sheet-cancel-padding-top,8px)}\n.", [1], "van-action-sheet__item--disabled{color:var(--action-sheet-item-disabled-text-color,#c8c9cc)}\n.", [1], "van-action-sheet__item--disabled.", [1], "van-action-sheet__item--hover{background-color:var(--action-sheet-item-background,#fff)}\n.", [1], "van-action-sheet__subname{color:var(--action-sheet-subname-color,#969799);font-size:var(--action-sheet-subname-font-size,12px);line-height:var(--action-sheet-subname-line-height,20px);margin-top:var(--padding-xs,8px)}\n.", [1], "van-action-sheet__header{font-size:var(--action-sheet-header-font-size,16px);font-weight:var(--font-weight-bold,500);line-height:var(--action-sheet-header-height,48px);text-align:center}\n.", [1], "van-action-sheet__description{color:var(--action-sheet-description-color,#969799);font-size:var(--action-sheet-description-font-size,14px);line-height:var(--action-sheet-description-line-height,20px);padding:20px var(--padding-md,16px);text-align:center}\n.", [1], "van-action-sheet__close{color:var(--action-sheet-close-icon-color,#c8c9cc);font-size:var(--action-sheet-close-icon-size,22px)!important;line-height:inherit!important;padding:var(--action-sheet-close-icon-padding,0 16px);position:absolute!important;right:0;top:0}\n.", [1], "van-action-sheet__loading{display:-webkit-flex!important;display:flex!important}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/action-sheet/index.wxss"
    });
}