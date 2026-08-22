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
            var xQH = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'hoverClass', 1, 'hoverStayTime', 2, 'style', 3], [], e, s, gg)
            var oRH = _v()
            _(xQH, oRH)
            if (_oz(z, 5, e, s, gg)) {
                oRH.wxVkey = 1
                var cTH = _mz(z, 'van-icon', ['class', 6, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(oRH, cTH)
            } else {
                oRH.wxVkey = 2
                var hUH = _n('slot')
                _rz(z, hUH, 'name', 9, e, s, gg)
                _(oRH, hUH)
            }
            var oVH = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
            var cWH = _v()
            _(oVH, cWH)
            if (_oz(z, 12, e, s, gg)) {
                cWH.wxVkey = 1
            } else {
                cWH.wxVkey = 2
                var lYH = _n('slot')
                _rz(z, lYH, 'name', 13, e, s, gg)
                _(cWH, lYH)
            }
            var oXH = _v()
            _(oVH, oXH)
            if (_oz(z, 14, e, s, gg)) {
                oXH.wxVkey = 1
                var aZH = _n('view')
                _rz(z, aZH, 'class', 15, e, s, gg)
                var t1H = _v()
                _(aZH, t1H)
                if (_oz(z, 16, e, s, gg)) {
                    t1H.wxVkey = 1
                    var e2H = _n('slot')
                    _rz(z, e2H, 'name', 17, e, s, gg)
                    _(t1H, e2H)
                } else if (_oz(z, 18, e, s, gg)) {
                    t1H.wxVkey = 2
                }
                t1H.wxXCkey = 1
                _(oXH, aZH)
            }
            cWH.wxXCkey = 1
            oXH.wxXCkey = 1
            _(xQH, oVH)
            var b3H = _n('view')
            _rz(z, b3H, 'class', 19, e, s, gg)
            var o4H = _v()
            _(b3H, o4H)
            if (_oz(z, 20, e, s, gg)) {
                o4H.wxVkey = 1
            } else {
                o4H.wxVkey = 2
                var x5H = _n('slot')
                _(o4H, x5H)
            }
            o4H.wxXCkey = 1
            _(xQH, b3H)
            var fSH = _v()
            _(xQH, fSH)
            if (_oz(z, 21, e, s, gg)) {
                fSH.wxVkey = 1
                var o6H = _mz(z, 'van-icon', ['class', 22, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(fSH, o6H)
            } else {
                fSH.wxVkey = 2
                var f7H = _n('slot')
                _rz(z, f7H, 'name', 25, e, s, gg)
                _(fSH, f7H)
            }
            var c8H = _n('slot')
            _rz(z, c8H, 'name', 26, e, s, gg)
            _(xQH, c8H)
            oRH.wxXCkey = 1
            oRH.wxXCkey = 3
            fSH.wxXCkey = 1
            fSH.wxXCkey = 3
            _(r, xQH)
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
                try {
                    main(env, {}, root, global);
                    _tsd(root)
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
else __wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.wxml'] = $gwx_XC_10('./miniprogram_npm/@vant/weapp/cell/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/cell/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/cell/index.js";
define("miniprogram_npm/@vant/weapp/cell/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = require("../mixins/link");
    (0, require("../common/component").VantComponent)({
        classes: ["title-class", "label-class", "value-class", "right-icon-class", "hover-class"],
        mixins: [e.link],
        props: {
            title: null,
            value: null,
            icon: String,
            size: String,
            label: String,
            center: Boolean,
            isLink: Boolean,
            required: Boolean,
            clickable: Boolean,
            titleWidth: String,
            customStyle: String,
            arrowDirection: String,
            useLabelSlot: Boolean,
            border: {
                type: Boolean,
                value: !0
            },
            titleStyle: String
        },
        methods: {
            onClick: function(e) {
                this.$emit("click", e.detail), this.jumpLink()
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/cell/index.js'
});
require("miniprogram_npm/@vant/weapp/cell/index.js");