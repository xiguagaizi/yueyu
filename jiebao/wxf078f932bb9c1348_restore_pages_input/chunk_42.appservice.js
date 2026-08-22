$gwx_XC_37 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_37 || [];

        function gz$gwx_XC_37_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'show']
                ])
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
                                [1, 'notice-bar']
                            ],
                            [
                                [9],
                                [
                                    [8], 'withicon', [
                                        [7],
                                        [3, 'mode']
                                    ]
                                ],
                                [
                                    [8], 'wrapable', [
                                        [7],
                                        [3, 'wrapable']
                                    ]
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
                                    [8], 'color', [
                                        [7],
                                        [3, 'color']
                                    ]
                                ],
                                [
                                    [8], 'backgroundColor', [
                                        [7],
                                        [3, 'backgroundColor']
                                    ]
                                ]
                            ],
                            [
                                [8], 'background', [
                                    [7],
                                    [3, 'background']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'leftIcon']
                ])
                Z([3, 'van-notice-bar__left-icon'])
                Z(z[4])
                Z([3, 'left-icon'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'text']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'mode']
                    ],
                    [1, 'closeable']
                ])
                Z([3, 'onClickIcon'])
                Z([3, 'van-notice-bar__right-icon'])
                Z([3, 'cross'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'mode']
                    ],
                    [1, 'link']
                ])
                Z(z[11])
                Z([3, 'arrow'])
                Z([3, 'right-icon'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_37 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_37 = true;
        var x = ['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_37_1()
            var aLO = _v()
            _(r, aLO)
            if (_oz(z, 0, e, s, gg)) {
                aLO.wxVkey = 1
                var tMO = _mz(z, 'view', ['bind:tap', 1, 'class', 1, 'style', 2], [], e, s, gg)
                var eNO = _v()
                _(tMO, eNO)
                if (_oz(z, 4, e, s, gg)) {
                    eNO.wxVkey = 1
                    var xQO = _mz(z, 'van-icon', ['class', 5, 'name', 1], [], e, s, gg)
                    _(eNO, xQO)
                } else {
                    eNO.wxVkey = 2
                    var oRO = _n('slot')
                    _rz(z, oRO, 'name', 7, e, s, gg)
                    _(eNO, oRO)
                }
                var bOO = _v()
                _(tMO, bOO)
                if (_oz(z, 8, e, s, gg)) {
                    bOO.wxVkey = 1
                    var fSO = _n('slot')
                    _(bOO, fSO)
                }
                var oPO = _v()
                _(tMO, oPO)
                if (_oz(z, 9, e, s, gg)) {
                    oPO.wxVkey = 1
                    var cTO = _mz(z, 'van-icon', ['catch:tap', 10, 'class', 1, 'name', 2], [], e, s, gg)
                    _(oPO, cTO)
                } else if (_oz(z, 13, e, s, gg)) {
                    oPO.wxVkey = 2
                    var hUO = _mz(z, 'van-icon', ['class', 14, 'name', 1], [], e, s, gg)
                    _(oPO, hUO)
                } else {
                    oPO.wxVkey = 3
                    var oVO = _n('slot')
                    _rz(z, oVO, 'name', 16, e, s, gg)
                    _(oPO, oVO)
                }
                eNO.wxXCkey = 1
                eNO.wxXCkey = 3
                bOO.wxXCkey = 1
                oPO.wxXCkey = 1
                oPO.wxXCkey = 3
                oPO.wxXCkey = 3
                _(aLO, tMO)
            }
            aLO.wxXCkey = 1
            aLO.wxXCkey = 3
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
                g = "$gwx_XC_37";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_37();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/notice-bar/index.wxml'] = [$gwx_XC_37, './miniprogram_npm/@vant/weapp/notice-bar/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/notice-bar/index.wxml'] = $gwx_XC_37('./miniprogram_npm/@vant/weapp/notice-bar/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/notice-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/notice-bar/index.js";
define("miniprogram_npm/@vant/weapp/notice-bar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        i = require("../common/utils");
    (0, t.VantComponent)({
        props: {
            text: {
                type: String,
                value: "",
                observer: "init"
            },
            mode: {
                type: String,
                value: ""
            },
            url: {
                type: String,
                value: ""
            },
            openType: {
                type: String,
                value: "navigate"
            },
            delay: {
                type: Number,
                value: 1
            },
            speed: {
                type: Number,
                value: 60,
                observer: "init"
            },
            scrollable: null,
            leftIcon: {
                type: String,
                value: ""
            },
            color: String,
            backgroundColor: String,
            background: String,
            wrapable: Boolean
        },
        data: {
            show: !0
        },
        created: function() {
            this.resetAnimation = wx.createAnimation({
                duration: 0,
                timingFunction: "linear"
            })
        },
        destroyed: function() {
            this.timer && clearTimeout(this.timer)
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function() {
                var t = this;
                (0, i.requestAnimationFrame)((function() {
                    Promise.all([(0, i.getRect)(t, ".van-notice-bar__content"), (0, i.getRect)(t, ".van-notice-bar__wrap")]).then((function(i) {
                        var e = i[0],
                            n = i[1],
                            a = t.data,
                            o = a.speed,
                            r = a.scrollable,
                            l = a.delay;
                        if (null != e && null != n && e.width && n.width && !1 !== r && (r || n.width < e.width)) {
                            var s = (n.width + e.width) / o * 1e3;
                            t.wrapWidth = n.width, t.contentWidth = e.width, t.duration = s, t.animation = wx.createAnimation({
                                duration: s,
                                timingFunction: "linear",
                                delay: l
                            }), t.scroll(!0)
                        }
                    }))
                }))
            },
            scroll: function(t) {
                var e = this;
                void 0 === t && (t = !1), this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
                    animationData: this.resetAnimation.translateX(t ? 0 : this.wrapWidth).step().export()
                }), (0, i.requestAnimationFrame)((function() {
                    e.setData({
                        animationData: e.animation.translateX(-e.contentWidth).step().export()
                    })
                })), this.timer = setTimeout((function() {
                    e.scroll()
                }), this.duration + this.data.delay)
            },
            onClickIcon: function(t) {
                "closeable" === this.data.mode && (this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
                    show: !1
                }), this.$emit("close", t.detail))
            },
            onClick: function(t) {
                this.$emit("click", t)
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/notice-bar/index.js'
});
require("miniprogram_npm/@vant/weapp/notice-bar/index.js");