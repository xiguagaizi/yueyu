$gwx_XC_12 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];

        function gz$gwx_XC_12_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'player-bar__body'])
                Z([3, 'player-bar__actions'])
                Z([3, 'onFavoriteTap'])
                Z([3, 'player-bar__action'])
                Z([3, '#1f2937'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isFavorite']
                    ],
                    [1, 'like'],
                    [1, 'like-o']
                ])
                Z([3, '20px'])
                Z([3, 'onSettingTap'])
                Z(z[3])
                Z(z[4])
                Z([3, 'setting-o'])
                Z(z[6])
                Z([3, 'onPlayTap'])
                Z([a, [3, 'player-bar__button '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isPlaying']
                        ],
                        [1, 'player-bar__button--active'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'audioSrc']
                        ],
                        [1, ''],
                        [1, 'player-bar__button--disabled']
                    ]
                ])
                Z([3, '#ffffff'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlaying']
                    ],
                    [1, 'pause'],
                    [1, 'play']
                ])
                Z([3, '24px'])
                Z([
                    [7],
                    [3, 'audioSrc']
                ])
                Z([3, 'player-bar__progress-block'])
                Z([3, '#155eef'])
                Z([3, '6rpx'])
                Z([3, 'onProgressChange'])
                Z([3, 'onProgressDrag'])
                Z([3, 'onProgressDragEnd'])
                Z([3, 'onProgressDragStart'])
                Z([3, 'player-bar__slider'])
                Z([3, 'rgba(148, 163, 184, 0.26)'])
                Z([3, '100'])
                Z([3, '0'])
                Z([3, '0.1'])
                Z([
                    [7],
                    [3, 'progressValue']
                ])
                Z([
                    [7],
                    [3, 'paragraphPlaybackLabel']
                ])
                Z([
                    [7],
                    [3, 'episodeLoading']
                ])
                Z([
                    [7],
                    [3, 'loadError']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }

        function gz$gwx_XC_12_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClose'])
                Z([3, 'background: transparent;'])
                Z([3, 'right'])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([1, 10000])
                Z([3, 'index'])
                Z([3, 'episode'])
                Z([
                    [7],
                    [3, 'episodes']
                ])
                Z([3, 'id'])
                Z([3, 'onSelect'])
                Z([a, [3, 'episode-card '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'episode']
                                ],
                                [3, 'id']
                            ],
                            [
                                [7],
                                [3, 'activeEpisodeId']
                            ]
                        ],
                        [1, 'episode-card--active'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'id']
                ])
                Z([3, 'episode-card__meta'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'displayDuration']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'isAccessFree']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2
        }

        function gz$gwx_XC_12_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_3) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_3
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_3 = [];
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
                                [1, 'slider']
                            ],
                            [
                                [9],
                                [
                                    [8], 'disabled', [
                                        [7],
                                        [3, 'disabled']
                                    ]
                                ],
                                [
                                    [8], 'vertical', [
                                        [7],
                                        [3, 'vertical']
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'wrapperStyle']
                ])
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
                        [1, 'slider__bar']
                    ]
                ])
                Z([a, [
                        [7],
                        [3, 'barStyle']
                    ],
                    [3, ';'],
                    [
                        [12],
                        [
                            [7],
                            [3, 'style']
                        ],
                        [
                            [5],
                            [
                                [8], 'backgroundColor', [
                                    [7],
                                    [3, 'activeColor']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'range']
                ])
                Z([3, 'onTouchEnd'])
                Z(z[6])
                Z([3, 'onTouchStart'])
                Z([3, 'onTouchMove'])
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
                        [1, 'slider__button-wrapper-left']
                    ]
                ])
                Z([1, 0])
                Z([
                    [7],
                    [3, 'useButtonSlot']
                ])
                Z([3, 'left-button'])
                Z(z[5])
                Z(z[6])
                Z(z[6])
                Z(z[8])
                Z(z[9])
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
                        [1, 'slider__button-wrapper-right']
                    ]
                ])
                Z([1, 1])
                Z(z[12])
                Z([3, 'right-button'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'range']
                    ]
                ])
                Z(z[6])
                Z(z[6])
                Z(z[8])
                Z(z[9])
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
                        [1, 'slider__button-wrapper']
                    ]
                ])
                Z(z[12])
                Z([3, 'button'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_3
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./components/audio-player-bar/index.wxml', './components/episode-drawer/index.wxml', './miniprogram_npm/@vant/weapp/slider/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
            var oBI = _n('view')
            _rz(z, oBI, 'class', 0, e, s, gg)
            var aDI = _n('view')
            _rz(z, aDI, 'class', 1, e, s, gg)
            var tEI = _mz(z, 'view', ['bindtap', 2, 'class', 1], [], e, s, gg)
            var eFI = _mz(z, 'van-icon', ['color', 4, 'name', 1, 'size', 2], [], e, s, gg)
            _(tEI, eFI)
            _(aDI, tEI)
            var bGI = _mz(z, 'view', ['bindtap', 7, 'class', 1], [], e, s, gg)
            var oHI = _mz(z, 'van-icon', ['color', 9, 'name', 1, 'size', 2], [], e, s, gg)
            _(bGI, oHI)
            _(aDI, bGI)
            var xII = _mz(z, 'view', ['bindtap', 12, 'class', 1], [], e, s, gg)
            var oJI = _mz(z, 'van-icon', ['color', 14, 'name', 1, 'size', 2], [], e, s, gg)
            _(xII, oJI)
            _(aDI, xII)
            _(oBI, aDI)
            var lCI = _v()
            _(oBI, lCI)
            if (_oz(z, 17, e, s, gg)) {
                lCI.wxVkey = 1
                var fKI = _n('view')
                _rz(z, fKI, 'class', 18, e, s, gg)
                var hMI = _mz(z, 'van-slider', ['activeColor', 19, 'barHeight', 1, 'bind:change', 2, 'bind:drag', 3, 'bind:drag-end', 4, 'bind:drag-start', 5, 'customClass', 6, 'inactiveColor', 7, 'max', 8, 'min', 9, 'step', 10, 'value', 11], [], e, s, gg)
                _(fKI, hMI)
                var cLI = _v()
                _(fKI, cLI)
                if (_oz(z, 31, e, s, gg)) {
                    cLI.wxVkey = 1
                }
                cLI.wxXCkey = 1
                _(lCI, fKI)
            } else if (_oz(z, 32, e, s, gg)) {
                lCI.wxVkey = 2
            } else if (_oz(z, 33, e, s, gg)) {
                lCI.wxVkey = 3
            } else {
                lCI.wxVkey = 4
            }
            lCI.wxXCkey = 1
            lCI.wxXCkey = 3
            _(r, oBI)
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
            var z = gz$gwx_XC_12_2()
            var cOI = _mz(z, 'van-popup', ['safeAreaInsetRight', -1, 'bind:close', 0, 'customStyle', 1, 'position', 1, 'show', 2, 'zIndex', 3], [], e, s, gg)
            var oPI = _v()
            _(cOI, oPI)
            var lQI = function(tSI, aRI, eTI, gg) {
                var oVI = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-uuid', 2], [], tSI, aRI, gg)
                var xWI = _n('view')
                _rz(z, xWI, 'class', 12, tSI, aRI, gg)
                var oXI = _v()
                _(xWI, oXI)
                if (_oz(z, 13, tSI, aRI, gg)) {
                    oXI.wxVkey = 1
                }
                var fYI = _v()
                _(xWI, fYI)
                if (_oz(z, 14, tSI, aRI, gg)) {
                    fYI.wxVkey = 1
                }
                oXI.wxXCkey = 1
                fYI.wxXCkey = 1
                _(oVI, xWI)
                _(eTI, oVI)
                return eTI
            }
            oPI.wxXCkey = 2
            _2z(z, 7, lQI, e, s, gg, oPI, 'episode', 'index', 'id')
            _(r, cOI)
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[2]] = {}
        var m2 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_3()
            var h1I = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var o2I = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
            var c3I = _v()
            _(o2I, c3I)
            if (_oz(z, 5, e, s, gg)) {
                c3I.wxVkey = 1
                var a6I = _mz(z, 'view', ['bind:touchcancel', 6, 'bind:touchend', 1, 'bind:touchstart', 2, 'catch:touchmove', 3, 'class', 4, 'data-index', 5], [], e, s, gg)
                var t7I = _v()
                _(a6I, t7I)
                if (_oz(z, 12, e, s, gg)) {
                    t7I.wxVkey = 1
                    var e8I = _n('slot')
                    _rz(z, e8I, 'name', 13, e, s, gg)
                    _(t7I, e8I)
                } else {
                    t7I.wxVkey = 2
                }
                t7I.wxXCkey = 1
                _(c3I, a6I)
            }
            var o4I = _v()
            _(o2I, o4I)
            if (_oz(z, 14, e, s, gg)) {
                o4I.wxVkey = 1
                var b9I = _mz(z, 'view', ['bind:touchcancel', 15, 'bind:touchend', 1, 'bind:touchstart', 2, 'catch:touchmove', 3, 'class', 4, 'data-index', 5], [], e, s, gg)
                var o0I = _v()
                _(b9I, o0I)
                if (_oz(z, 21, e, s, gg)) {
                    o0I.wxVkey = 1
                    var xAJ = _n('slot')
                    _rz(z, xAJ, 'name', 22, e, s, gg)
                    _(o0I, xAJ)
                } else {
                    o0I.wxVkey = 2
                }
                o0I.wxXCkey = 1
                _(o4I, b9I)
            }
            var l5I = _v()
            _(o2I, l5I)
            if (_oz(z, 23, e, s, gg)) {
                l5I.wxVkey = 1
                var oBJ = _mz(z, 'view', ['bind:touchcancel', 24, 'bind:touchend', 1, 'bind:touchstart', 2, 'catch:touchmove', 3, 'class', 4], [], e, s, gg)
                var fCJ = _v()
                _(oBJ, fCJ)
                if (_oz(z, 29, e, s, gg)) {
                    fCJ.wxVkey = 1
                    var cDJ = _n('slot')
                    _rz(z, cDJ, 'name', 30, e, s, gg)
                    _(fCJ, cDJ)
                } else {
                    fCJ.wxVkey = 2
                }
                fCJ.wxXCkey = 1
                _(l5I, oBJ)
            }
            c3I.wxXCkey = 1
            o4I.wxXCkey = 1
            l5I.wxXCkey = 1
            _(h1I, o2I)
            _(r, h1I)
            return r
        }
        e_[x[2]] = {
            f: m2,
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
                g = "$gwx_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/audio-player-bar/index.wxml'] = [$gwx_XC_12, './components/audio-player-bar/index.wxml'];
else __wxAppCode__['components/audio-player-bar/index.wxml'] = $gwx_XC_12('./components/audio-player-bar/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/episode-drawer/index.wxml'] = [$gwx_XC_12, './components/episode-drawer/index.wxml'];
else __wxAppCode__['components/episode-drawer/index.wxml'] = $gwx_XC_12('./components/episode-drawer/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxml'] = [$gwx_XC_12, './miniprogram_npm/@vant/weapp/slider/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxml'] = $gwx_XC_12('./miniprogram_npm/@vant/weapp/slider/index.wxml');;
__wxRoute = "components/audio-player-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/audio-player-bar/index.js";
define("components/audio-player-bar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        options: {
            styleIsolation: "isolated"
        },
        properties: {
            title: {
                type: String,
                value: ""
            },
            audioSrc: {
                type: String,
                value: ""
            },
            isPlaying: {
                type: Boolean,
                value: !1
            },
            progressValue: {
                type: Number,
                value: 0
            },
            currentTimeLabel: {
                type: String,
                value: "00:00"
            },
            durationLabel: {
                type: String,
                value: "00:00"
            },
            paragraphPlaybackLabel: {
                type: String,
                value: ""
            },
            isFavorite: {
                type: Boolean,
                value: !1
            },
            episodeLoading: {
                type: Boolean,
                value: !1
            },
            loadError: {
                type: String,
                value: ""
            }
        },
        methods: {
            emit: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.triggerEvent(t, e)
            },
            onFavoriteTap: function() {
                this.emit("favorite")
            },
            onSettingTap: function() {
                this.emit("setting")
            },
            onPlayTap: function() {
                this.emit("playtoggle")
            },
            onStopLoopTap: function() {
                this.emit("stoploop")
            },
            onProgressDragStart: function(t) {
                this.emit("progressdragstart", t.detail || {})
            },
            onProgressDrag: function(t) {
                this.emit("progressdrag", t.detail || {})
            },
            onProgressDragEnd: function(t) {
                this.emit("progressdragend", t.detail || {})
            },
            onProgressChange: function(t) {
                this.emit("progresschange", t.detail || {})
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/audio-player-bar/index.js'
});
require("components/audio-player-bar/index.js");;
__wxRoute = "components/episode-drawer/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/episode-drawer/index.js";
define("components/episode-drawer/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        options: {
            styleIsolation: "isolated"
        },
        properties: {
            show: {
                type: Boolean,
                value: !1
            },
            courseInfo: {
                type: Object,
                value: null
            },
            episodes: {
                type: Array,
                value: []
            },
            activeEpisodeId: {
                type: String,
                value: ""
            }
        },
        methods: {
            onClose: function() {
                this.triggerEvent("close")
            },
            onSelect: function(e) {
                var t, o = (null == e || null === (t = e.currentTarget) || void 0 === t ? void 0 : t.dataset) || {};
                this.triggerEvent("select", {
                    uuid: o.uuid || ""
                })
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/episode-drawer/index.js'
});
require("components/episode-drawer/index.js");;
__wxRoute = "miniprogram_npm/@vant/weapp/slider/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/slider/index.js";
define("miniprogram_npm/@vant/weapp/slider/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        a = require("../mixins/touch"),
        e = require("../common/version"),
        i = require("../common/utils"),
        n = "start",
        s = "moving",
        r = "end";
    (0, t.VantComponent)({
        mixins: [a.touch],
        props: {
            range: Boolean,
            disabled: Boolean,
            useButtonSlot: Boolean,
            activeColor: String,
            inactiveColor: String,
            max: {
                type: Number,
                value: 100
            },
            min: {
                type: Number,
                value: 0
            },
            step: {
                type: Number,
                value: 1
            },
            value: {
                type: null,
                value: 0,
                observer: function(t) {
                    t !== this.value && this.updateValue(t)
                }
            },
            vertical: Boolean,
            barHeight: null
        },
        created: function() {
            this.updateValue(this.data.value)
        },
        methods: {
            onTouchStart: function(t) {
                var a = this;
                if (!this.data.disabled) {
                    var e = t.currentTarget.dataset.index;
                    "number" == typeof e && (this.buttonIndex = e), this.touchStart(t), this.startValue = this.format(this.value), this.newValue = this.value, this.isRange(this.newValue) ? this.startValue = this.newValue.map((function(t) {
                        return a.format(t)
                    })) : this.startValue = this.format(this.newValue), this.dragStatus = n
                }
            },
            onTouchMove: function(t) {
                var a = this;
                this.data.disabled || (this.dragStatus === n && this.$emit("drag-start"), this.touchMove(t), this.dragStatus = s, (0, i.getRect)(this, ".van-slider").then((function(t) {
                    var e = a.data.vertical,
                        i = (e ? a.deltaY : a.deltaX) / (e ? t.height : t.width) * a.getRange();
                    a.isRange(a.startValue) ? a.newValue[a.buttonIndex] = a.startValue[a.buttonIndex] + i : a.newValue = a.startValue + i, a.updateValue(a.newValue, !1, !0)
                })))
            },
            onTouchEnd: function() {
                var t = this;
                this.data.disabled || this.dragStatus === s && (this.dragStatus = r, (0, i.nextTick)((function() {
                    t.updateValue(t.newValue, !0), t.$emit("drag-end")
                })))
            },
            onClick: function(t) {
                var a = this;
                if (!this.data.disabled) {
                    var e = this.data.min;
                    (0, i.getRect)(this, ".van-slider").then((function(i) {
                        var n = a.data.vertical,
                            s = t.touches[0],
                            r = n ? s.clientY - i.top : s.clientX - i.left,
                            u = n ? i.height : i.width,
                            h = Number(e) + r / u * a.getRange();
                        if (a.isRange(a.value)) {
                            var o = a.value,
                                c = o[0],
                                l = o[1];
                            h <= (c + l) / 2 ? a.updateValue([h, l], !0) : a.updateValue([c, h], !0)
                        } else a.updateValue(h, !0)
                    }))
                }
            },
            isRange: function(t) {
                return this.data.range && Array.isArray(t)
            },
            handleOverlap: function(t) {
                return t[0] > t[1] ? t.slice(0).reverse() : t
            },
            updateValue: function(t, a, n) {
                var s = this;
                t = this.isRange(t) ? this.handleOverlap(t).map((function(t) {
                    return s.format(t)
                })) : this.format(t), this.value = t;
                var r = this.data.vertical,
                    u = r ? "height" : "width";
                this.setData({
                    wrapperStyle: "\n          background: ".concat(this.data.inactiveColor || "", ";\n          ").concat(r ? "width" : "height", ": ").concat((0, i.addUnit)(this.data.barHeight) || "", ";\n        "),
                    barStyle: "\n          ".concat(u, ": ").concat(this.calcMainAxis(), ";\n          left: ").concat(r ? 0 : this.calcOffset(), ";\n          top: ").concat(r ? this.calcOffset() : 0, ";\n          ").concat(n ? "transition: none;" : "", "\n        ")
                }), n && this.$emit("drag", {
                    value: t
                }), a && this.$emit("change", t), (n || a) && (0, e.canIUseModel)() && this.setData({
                    value: t
                })
            },
            getScope: function() {
                return Number(this.data.max) - Number(this.data.min)
            },
            getRange: function() {
                var t = this.data;
                return t.max - t.min
            },
            getOffsetWidth: function(t, a) {
                var e = this.getScope();
                return "".concat(Math.max(100 * (t - a) / e, 0), "%")
            },
            calcMainAxis: function() {
                var t = this.value,
                    a = this.data.min;
                return this.isRange(t) ? this.getOffsetWidth(t[1], t[0]) : this.getOffsetWidth(t, Number(a))
            },
            calcOffset: function() {
                var t = this.value,
                    a = this.data.min,
                    e = this.getScope();
                return this.isRange(t) ? "".concat(100 * (t[0] - Number(a)) / e, "%") : "0%"
            },
            format: function(t) {
                var a = +this.data.min,
                    e = +this.data.max,
                    n = +this.data.step;
                t = (0, i.clamp)(t, a, e);
                var s = Math.round((t - a) / n) * n;
                return (0, i.addNumber)(a, s)
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/slider/index.js'
});
require("miniprogram_npm/@vant/weapp/slider/index.js");