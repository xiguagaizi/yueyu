$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClick'])
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
                                [1, 'cell']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'size']
                                        ]
                                    ],
                                    [
                                        [9],
                                        [
                                            [9],
                                            [
                                                [9],
                                                [
                                                    [8], 'center', [
                                                        [7],
                                                        [3, 'center']
                                                    ]
                                                ],
                                                [
                                                    [8], 'required', [
                                                        [7],
                                                        [3, 'required']
                                                    ]
                                                ]
                                            ],
                                            [
                                                [8], 'borderless', [
                                                    [2, '!'],
                                                    [
                                                        [7],
                                                        [3, 'border']
                                                    ]
                                                ]
                                            ]
                                        ],
                                        [
                                            [8], 'clickable', [
                                                [2, '||'],
                                                [
                                                    [7],
                                                    [3, 'isLink']
                                                ],
                                                [
                                                    [7],
                                                    [3, 'clickable']
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'van-cell--hover hover-class'])
                Z([3, '70'])
                Z([
                    [7],
                    [3, 'customStyle']
                ])
                Z([
                    [7],
                    [3, 'icon']
                ])
                Z([3, 'van-cell__left-icon-wrap'])
                Z([3, 'van-cell__left-icon'])
                Z(z[5])
                Z([3, 'icon'])
                Z([3, 'van-cell__title title-class'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'titleStyle']
                    ],
                    [
                        [5],
                        [
                            [9],
                            [
                                [8], 'titleWidth', [
                                    [7],
                                    [3, 'titleWidth']
                                ]
                            ],
                            [
                                [8], 'titleStyle', [
                                    [7],
                                    [3, 'titleStyle']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([3, 'title'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'label']
                    ],
                    [
                        [7],
                        [3, 'useLabelSlot']
                    ]
                ])
                Z([3, 'van-cell__label label-class'])
                Z([
                    [7],
                    [3, 'useLabelSlot']
                ])
                Z([3, 'label'])
                Z([
                    [7],
                    [3, 'label']
                ])
                Z([a, [
                    [7],
                    [3, 'label']
                ]])
                Z([3, 'van-cell__value value-class'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'value']
                    ],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'value']
                        ],
                        [1, 0]
                    ]
                ])
                Z([a, [
                    [7],
                    [3, 'value']
                ]])
                Z([
                    [7],
                    [3, 'isLink']
                ])
                Z([3, 'van-cell__right-icon-wrap right-icon-class'])
                Z([3, 'van-cell__right-icon'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'arrowDirection']
                    ],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'arrow'],
                            [1, '-']
                        ],
                        [
                            [7],
                            [3, 'arrowDirection']
                        ]
                    ],
                    [1, 'arrow']
                ])
                Z([3, 'right-icon'])
                Z([3, 'extra'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./miniprogram_npm/@vant/weapp/cell/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var a8N = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'hoverClass', 1, 'hoverStayTime', 2, 'style', 3], [], e, s, gg)
            var t9N = _v()
            _(a8N, t9N)
            if (_oz(z, 5, e, s, gg)) {
                t9N.wxVkey = 1
                var bAO = _mz(z, 'van-icon', ['class', 6, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(t9N, bAO)
            } else {
                t9N.wxVkey = 2
                var oBO = _n('slot')
                _rz(z, oBO, 'name', 9, e, s, gg)
                _(t9N, oBO)
            }
            var xCO = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
            var oDO = _v()
            _(xCO, oDO)
            if (_oz(z, 12, e, s, gg)) {
                oDO.wxVkey = 1
                var cFO = _oz(z, 13, e, s, gg)
                _(oDO, cFO)
            } else {
                oDO.wxVkey = 2
                var hGO = _n('slot')
                _rz(z, hGO, 'name', 14, e, s, gg)
                _(oDO, hGO)
            }
            var fEO = _v()
            _(xCO, fEO)
            if (_oz(z, 15, e, s, gg)) {
                fEO.wxVkey = 1
                var oHO = _n('view')
                _rz(z, oHO, 'class', 16, e, s, gg)
                var cIO = _v()
                _(oHO, cIO)
                if (_oz(z, 17, e, s, gg)) {
                    cIO.wxVkey = 1
                    var oJO = _n('slot')
                    _rz(z, oJO, 'name', 18, e, s, gg)
                    _(cIO, oJO)
                } else if (_oz(z, 19, e, s, gg)) {
                    cIO.wxVkey = 2
                    var lKO = _oz(z, 20, e, s, gg)
                    _(cIO, lKO)
                }
                cIO.wxXCkey = 1
                _(fEO, oHO)
            }
            oDO.wxXCkey = 1
            fEO.wxXCkey = 1
            _(a8N, xCO)
            var aLO = _n('view')
            _rz(z, aLO, 'class', 21, e, s, gg)
            var tMO = _v()
            _(aLO, tMO)
            if (_oz(z, 22, e, s, gg)) {
                tMO.wxVkey = 1
                var eNO = _oz(z, 23, e, s, gg)
                _(tMO, eNO)
            } else {
                tMO.wxVkey = 2
                var bOO = _n('slot')
                _(tMO, bOO)
            }
            tMO.wxXCkey = 1
            _(a8N, aLO)
            var e0N = _v()
            _(a8N, e0N)
            if (_oz(z, 24, e, s, gg)) {
                e0N.wxVkey = 1
                var oPO = _mz(z, 'van-icon', ['class', 25, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(e0N, oPO)
            } else {
                e0N.wxVkey = 2
                var xQO = _n('slot')
                _rz(z, xQO, 'name', 28, e, s, gg)
                _(e0N, xQO)
            }
            var oRO = _n('slot')
            _rz(z, oRO, 'name', 29, e, s, gg)
            _(a8N, oRO)
            t9N.wxXCkey = 1
            t9N.wxXCkey = 3
            e0N.wxXCkey = 1
            e0N.wxXCkey = 3
            _(r, a8N)
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.wxml'] = [$gwx_XC_10, './miniprogram_npm/@vant/weapp/cell/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.wxml'] = $gwx_XC_10('./miniprogram_npm/@vant/weapp/cell/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-cell{background-color:var(--cell-background-color,#fff);box-sizing:border-box;color:var(--cell-text-color,#323233);display:-webkit-flex;display:flex;font-size:var(--cell-font-size,14px);line-height:var(--cell-line-height,24px);padding:var(--cell-vertical-padding,10px) var(--cell-horizontal-padding,16px);position:relative;width:100%}\n.", [1], "van-cell:after{border-bottom:1px solid #ebedf0;bottom:0;box-sizing:border-box;content:\x22 \x22;left:16px;pointer-events:none;position:absolute;right:16px;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:center;transform-origin:center}\n.", [1], "van-cell--borderless:after{display:none}\n.", [1], "van-cell-group{background-color:var(--cell-background-color,#fff)}\n.", [1], "van-cell__label{color:var(--cell-label-color,#969799);font-size:var(--cell-label-font-size,12px);line-height:var(--cell-label-line-height,18px);margin-top:var(--cell-label-margin-top,3px)}\n.", [1], "van-cell__value{color:var(--cell-value-color,#969799);overflow:hidden;text-align:right;vertical-align:middle}\n.", [1], "van-cell__title,.", [1], "van-cell__value{-webkit-flex:1;flex:1}\n.", [1], "van-cell__title:empty,.", [1], "van-cell__value:empty{display:none}\n.", [1], "van-cell__left-icon-wrap,.", [1], "van-cell__right-icon-wrap{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-size:var(--cell-icon-size,16px);height:var(--cell-line-height,24px)}\n.", [1], "van-cell__left-icon-wrap{margin-right:var(--padding-base,4px)}\n.", [1], "van-cell__right-icon-wrap{color:var(--cell-right-icon-color,#969799);margin-left:var(--padding-base,4px)}\n.", [1], "van-cell__left-icon{vertical-align:middle}\n.", [1], "van-cell__left-icon,.", [1], "van-cell__right-icon{line-height:var(--cell-line-height,24px)}\n.", [1], "van-cell--clickable.", [1], "van-cell--hover{background-color:var(--cell-active-color,#f2f3f5)}\n.", [1], "van-cell--required{overflow:visible}\n.", [1], "van-cell--required:before{color:var(--cell-required-color,#ee0a24);content:\x22*\x22;font-size:var(--cell-font-size,14px);left:var(--padding-xs,8px);position:absolute}\n.", [1], "van-cell--center{-webkit-align-items:center;align-items:center}\n.", [1], "van-cell--large{padding-bottom:var(--cell-large-vertical-padding,12px);padding-top:var(--cell-large-vertical-padding,12px)}\n.", [1], "van-cell--large .", [1], "van-cell__title{font-size:var(--cell-large-title-font-size,16px)}\n.", [1], "van-cell--large .", [1], "van-cell__value{font-size:var(--cell-large-value-font-size,16px)}\n.", [1], "van-cell--large .", [1], "van-cell__label{font-size:var(--cell-large-label-font-size,14px)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/cell/index.wxss"
    });
}