$gwx_XC_31 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];

        function gz$gwx_XC_31_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1 = [];
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
                                [1, 'image']
                            ],
                            [
                                [8], 'round', [
                                    [7],
                                    [3, 'round']
                                ]
                            ]
                        ]
                    ]
                ])
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
                                [9],
                                [
                                    [8], 'width', [
                                        [7],
                                        [3, 'width']
                                    ]
                                ],
                                [
                                    [8], 'height', [
                                        [7],
                                        [3, 'height']
                                    ]
                                ]
                            ],
                            [
                                [8], 'radius', [
                                    [7],
                                    [3, 'radius']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'error']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'loading']
                    ],
                    [
                        [7],
                        [3, 'showLoading']
                    ]
                ])
                Z([3, 'loading-class van-image__loading'])
                Z([
                    [7],
                    [3, 'useLoadingSlot']
                ])
                Z([3, 'loading'])
                Z([3, 'van-image__loading-icon'])
                Z([3, 'photo'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'error']
                    ],
                    [
                        [7],
                        [3, 'showError']
                    ]
                ])
                Z([3, 'error-class van-image__error'])
                Z([
                    [7],
                    [3, 'useErrorSlot']
                ])
                Z([3, 'error'])
                Z([3, 'van-image__error-icon'])
                Z([3, 'photo-fail'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_31 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_31 = true;
        var x = ['./miniprogram_npm/@vant/weapp/image/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_31_1()
            var t3M = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var e4M = _v()
            _(t3M, e4M)
            if (_oz(z, 3, e, s, gg)) {
                e4M.wxVkey = 1
            }
            var b5M = _v()
            _(t3M, b5M)
            if (_oz(z, 4, e, s, gg)) {
                b5M.wxVkey = 1
                var x7M = _n('view')
                _rz(z, x7M, 'class', 5, e, s, gg)
                var o8M = _v()
                _(x7M, o8M)
                if (_oz(z, 6, e, s, gg)) {
                    o8M.wxVkey = 1
                    var f9M = _n('slot')
                    _rz(z, f9M, 'name', 7, e, s, gg)
                    _(o8M, f9M)
                } else {
                    o8M.wxVkey = 2
                    var c0M = _mz(z, 'van-icon', ['customClass', 8, 'name', 1], [], e, s, gg)
                    _(o8M, c0M)
                }
                o8M.wxXCkey = 1
                o8M.wxXCkey = 3
                _(b5M, x7M)
            }
            var o6M = _v()
            _(t3M, o6M)
            if (_oz(z, 10, e, s, gg)) {
                o6M.wxVkey = 1
                var hAN = _n('view')
                _rz(z, hAN, 'class', 11, e, s, gg)
                var oBN = _v()
                _(hAN, oBN)
                if (_oz(z, 12, e, s, gg)) {
                    oBN.wxVkey = 1
                    var cCN = _n('slot')
                    _rz(z, cCN, 'name', 13, e, s, gg)
                    _(oBN, cCN)
                } else {
                    oBN.wxVkey = 2
                    var oDN = _mz(z, 'van-icon', ['customClass', 14, 'name', 1], [], e, s, gg)
                    _(oBN, oDN)
                }
                oBN.wxXCkey = 1
                oBN.wxXCkey = 3
                _(o6M, hAN)
            }
            e4M.wxXCkey = 1
            b5M.wxXCkey = 1
            b5M.wxXCkey = 3
            o6M.wxXCkey = 1
            o6M.wxXCkey = 3
            _(r, t3M)
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
                g = "$gwx_XC_31";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_31();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/image/index.wxml'] = [$gwx_XC_31, './miniprogram_npm/@vant/weapp/image/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/image/index.wxml'] = $gwx_XC_31('./miniprogram_npm/@vant/weapp/image/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/image/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/image/index.js";
define("miniprogram_npm/@vant/weapp/image/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var o = require("../common/component"),
        e = require("../mixins/button");
    (0, o.VantComponent)({
        mixins: [e.button],
        classes: ["custom-class", "loading-class", "error-class", "image-class"],
        props: {
            src: {
                type: String,
                observer: function() {
                    this.setData({
                        error: !1,
                        loading: !0
                    })
                }
            },
            round: Boolean,
            width: null,
            height: null,
            radius: null,
            lazyLoad: Boolean,
            useErrorSlot: Boolean,
            useLoadingSlot: Boolean,
            showMenuByLongpress: Boolean,
            fit: {
                type: String,
                value: "fill"
            },
            webp: {
                type: Boolean,
                value: !1
            },
            showError: {
                type: Boolean,
                value: !0
            },
            showLoading: {
                type: Boolean,
                value: !0
            }
        },
        data: {
            error: !1,
            loading: !0,
            viewStyle: ""
        },
        methods: {
            onLoad: function(o) {
                this.setData({
                    loading: !1
                }), this.$emit("load", o.detail)
            },
            onError: function(o) {
                this.setData({
                    loading: !1,
                    error: !0
                }), this.$emit("error", o.detail)
            },
            onClick: function(o) {
                this.$emit("click", o.detail)
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/image/index.js'
});
require("miniprogram_npm/@vant/weapp/image/index.js");