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
                Z([3, 'green'])
                Z([
                    [7],
                    [3, 'percentage']
                ])
                Z([1, false])
                Z([1, 2])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_56_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_56_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_56 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_56 = true;
        var x = ['./components/player/index.wxml', './miniprogram_npm/@vant/weapp/progress/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_56_1()
            var x7T = _n('view')
            _rz(z, x7T, 'class', 0, e, s, gg)
            var o8T = _mz(z, 'van-icon', ['bind:tap', 1, 'color', 1, 'info', 2, 'infoClass', 3, 'name', 4, 'size', 5], [], e, s, gg)
            _(x7T, o8T)
            var f9T = _mz(z, 'van-progress', ['color', 7, 'percentage', 1, 'showPivot', 2, 'strokeWidth', 3], [], e, s, gg)
            _(x7T, f9T)
            _(r, x7T)
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
            var hAU = _v()
            _(r, hAU)
            if (_oz(z, 0, e, s, gg)) {
                hAU.wxVkey = 1
            }
            hAU.wxXCkey = 1
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_56();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/player/index.wxml'] = [$gwx_XC_56, './components/player/index.wxml'];
else __wxAppCode__['components/player/index.wxml'] = $gwx_XC_56('./components/player/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxml'] = [$gwx_XC_56, './miniprogram_npm/@vant/weapp/progress/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxml'] = $gwx_XC_56('./miniprogram_npm/@vant/weapp/progress/index.wxml');;
__wxRoute = "components/player/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/player/index.js";
define("components/player/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../commons/utils"),
        e = getApp();
    Component({
        properties: {
            src: {
                type: String
            },
            duration: {
                type: Number,
                value: 0
            }
        },
        lifetimes: {
            attached: function() {
                var e = (0, t.isUseWebAudio)();
                this.useWebAudioImplement = e
            }
        },
        data: {
            playing: !1,
            percentage: 0
        },
        methods: {
            play: function() {
                var t = this,
                    i = this.data,
                    a = i.src,
                    o = i.playing;
                if (this.triggerEvent(o ? "onStop" : "onPlay"), o) this.stop();
                else if (a) {
                    if (e.audio) try {
                        e.audio.stop(), e.audio.destroy()
                    } catch (t) {}
                    var n = wx.createInnerAudioContext({
                        useWebAudioImplement: (null == e ? void 0 : e.isOHOS) || !!this.useWebAudioImplement
                    });
                    e.audio = n, n.src = this.data.src, n.onCanplay((function() {
                        n.play()
                    })), n.onTimeUpdate((function() {
                        var e = Math.ceil(n.currentTime / t.data.duration * 100);
                        console.log(n.currentTime), t.setData({
                            percentage: e
                        })
                    })), n.onEnded((function() {
                        t.setData({
                            playing: !1,
                            percentage: 100
                        })
                    })), this.setData({
                        playing: !0
                    })
                } else wx.showToast({
                    title: "请先录音",
                    icon: "error"
                })
            },
            stop: function() {
                console.log("au", e.audio), e.audio && (e.audio.stop(), e.audio.destroy(), this.setData({
                    percentage: 0,
                    playing: !1
                }))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/player/index.js'
});
require("components/player/index.js");;
__wxRoute = "miniprogram_npm/@vant/weapp/progress/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/progress/index.js";
define("miniprogram_npm/@vant/weapp/progress/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        e = require("../common/color"),
        o = require("../common/utils");
    (0, t.VantComponent)({
        props: {
            inactive: Boolean,
            percentage: {
                type: Number,
                observer: "setLeft"
            },
            pivotText: String,
            pivotColor: String,
            trackColor: String,
            showPivot: {
                type: Boolean,
                value: !0
            },
            color: {
                type: String,
                value: e.BLUE
            },
            textColor: {
                type: String,
                value: "#fff"
            },
            strokeWidth: {
                type: null,
                value: 4
            }
        },
        data: {
            right: 0
        },
        mounted: function() {
            this.setLeft()
        },
        methods: {
            setLeft: function() {
                var t = this;
                Promise.all([(0, o.getRect)(this, ".van-progress"), (0, o.getRect)(this, ".van-progress__pivot")]).then((function(e) {
                    var o = e[0],
                        r = e[1];
                    o && r && t.setData({
                        right: r.width * (t.data.percentage - 100) / 100
                    })
                }))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/progress/index.js'
});
require("miniprogram_npm/@vant/weapp/progress/index.js");