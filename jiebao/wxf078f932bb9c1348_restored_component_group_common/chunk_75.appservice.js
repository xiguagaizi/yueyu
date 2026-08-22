$gwx_XC_73 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_73 || [];

        function gz$gwx_XC_73_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, 'background:#f8f9fa;'])
                Z([3, '返回'])
                Z([1, ''])
                Z([3, 'container'])
                Z([3, 'section'])
                Z([
                    [7],
                    [3, 'isAudioOnly']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'videoSrc']
                    ]
                ])
                Z([
                    [7],
                    [3, 'hasEpisodeGroup']
                ])
                Z([3, 'toggleEpisodeList'])
                Z([3, 'episode-inline'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episodes']
                    ],
                    [3, 'length']
                ])
                Z([3, '#1f2a37'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'showEpisodeList']
                    ],
                    [1, 'arrow-up'],
                    [1, 'arrow-down']
                ])
                Z([3, '20px'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'article']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'article']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'content'])
                Z([a, [3, 'padding-bottom:'],
                    [
                        [7],
                        [3, 'articlePaddingBottom']
                    ],
                    [3, 'px;']
                ])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'row'])
                Z([3, 'line'])
                Z([
                    [7],
                    [3, 'article']
                ])
                Z(z[21])
                Z([3, 'seek'])
                Z([3, 'handleParagraphTap'])
                Z([a, [3, 'paragraph '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentRow']
                            ],
                            [
                                [7],
                                [3, 'row']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '&&'],
                                [
                                    [2, '!'],
                                    [
                                        [7],
                                        [3, 'showPinyin']
                                    ]
                                ],
                                [
                                    [2, '!'],
                                    [
                                        [7],
                                        [3, 'showWordTranslation']
                                    ]
                                ]
                            ],
                            [
                                [2, '!'],
                                [
                                    [7],
                                    [3, 'showSentenceTranslation']
                                ]
                            ]
                        ],
                        [1, 'paragraph--compact'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'row']
                ])
                Z([a, [3, 'el_'], z[28]])
                Z([3, 'col'])
                Z([3, 'segment'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'line']
                    ],
                    [3, 'segments']
                ])
                Z(z[30])
                Z([
                    [7],
                    [3, 'rubyDisplayStyle']
                ])
                Z([
                    [7],
                    [3, 'segment']
                ])
                Z([
                    [7],
                    [3, 'showPinyin']
                ])
                Z([
                    [7],
                    [3, 'showWordTranslation']
                ])
                Z([3, 'subtitle'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showSentenceTranslation']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'line']
                        ],
                        [3, 'translation']
                    ]
                ])
                Z([3, 'action-menu'])
                Z([
                    [7],
                    [3, 'paragraphPlayback']
                ])
                Z([3, 'stopParagraphPlayback'])
                Z([3, 'loop-indicator__content'])
                Z([3, 'indicator'])
                Z([3, '#ffffff'])
                Z([3, 'stop-circle-o'])
                Z([3, '32px'])
                Z([
                    [7],
                    [3, 'showActionMenu']
                ])
                Z([3, 'action-menu__list'])
                Z(z[1])
                Z([3, 'handleToggleFavorite'])
                Z([3, 'action-menu__item'])
                Z(z[45])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isFavorite']
                    ],
                    [1, 'like'],
                    [1, 'like-o']
                ])
                Z([3, '28px'])
                Z([3, 'toggleSettingPanel'])
                Z(z[52])
                Z(z[45])
                Z([3, 'setting-o'])
                Z(z[55])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'showSettingPanel']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'paragraphPlayback']
                        ]
                    ]
                ])
                Z([3, 'toggleActionMenu'])
                Z([3, 'action-toggle'])
                Z(z[45])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'showActionMenu']
                    ],
                    [1, 'cross'],
                    [1, 'arrow-left']
                ])
                Z(z[55])
                Z([
                    [7],
                    [3, 'autoScroll']
                ])
                Z(z[56])
                Z([3, 'onLoopCountChange'])
                Z([3, 'onLoopIntervalChange'])
                Z([3, 'onSettingChange'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'subtitleCapabilities']
                    ],
                    [3, 'supportsPinyin']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'subtitleCapabilities']
                    ],
                    [3, 'supportsSentenceTranslation']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'subtitleCapabilities']
                    ],
                    [3, 'supportsWordTranslation']
                ])
                Z([
                    [7],
                    [3, 'loopIntervalSeconds']
                ])
                Z([
                    [7],
                    [3, 'showSettingPanel']
                ])
                Z(z[36])
                Z([
                    [7],
                    [3, 'showSentenceTranslation']
                ])
                Z(z[37])
                Z([
                    [7],
                    [3, 'singleLoopCount']
                ])
                Z(z[10])
                Z([3, 'handleEpisodeListClose'])
                Z([3, 'background: transparent;'])
                Z([3, 'right'])
                Z([
                    [7],
                    [3, 'showEpisodeList']
                ])
                Z([3, 'episode-popup'])
                Z([3, 'episode-popup__header'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'courseInfo']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'courseInfo']
                        ],
                        [3, 'subtitle']
                    ]
                ])
                Z(z[13])
                Z([3, 'index'])
                Z([3, 'episode'])
                Z([
                    [7],
                    [3, 'episodes']
                ])
                Z([3, 'id'])
                Z([3, 'handleEpisodeSelect'])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_73_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_73_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_73 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_73 = true;
        var x = ['./pages/video/detail/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_73_1()
            var aF2 = _n('van-sticky')
            var tG2 = _mz(z, 'van-nav-bar', ['back', -1, 'leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'customStyle', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(aF2, tG2)
            _(r, aF2)
            var eH2 = _n('view')
            _rz(z, eH2, 'class', 6, e, s, gg)
            var xK2 = _n('view')
            _rz(z, xK2, 'class', 7, e, s, gg)
            var oL2 = _v()
            _(xK2, oL2)
            if (_oz(z, 8, e, s, gg)) {
                oL2.wxVkey = 1
            }
            var fM2 = _v()
            _(xK2, fM2)
            if (_oz(z, 9, e, s, gg)) {
                fM2.wxVkey = 1
            }
            oL2.wxXCkey = 1
            fM2.wxXCkey = 1
            _(eH2, xK2)
            var bI2 = _v()
            _(eH2, bI2)
            if (_oz(z, 10, e, s, gg)) {
                bI2.wxVkey = 1
                var cN2 = _mz(z, 'view', ['bindtap', 11, 'class', 1], [], e, s, gg)
                var hO2 = _v()
                _(cN2, hO2)
                if (_oz(z, 13, e, s, gg)) {
                    hO2.wxVkey = 1
                }
                var oP2 = _mz(z, 'van-icon', ['color', 14, 'name', 1, 'size', 2], [], e, s, gg)
                _(cN2, oP2)
                hO2.wxXCkey = 1
                _(bI2, cN2)
            }
            var oJ2 = _v()
            _(eH2, oJ2)
            if (_oz(z, 17, e, s, gg)) {
                oJ2.wxVkey = 1
                var cQ2 = _mz(z, 'view', ['class', 18, 'style', 1], [], e, s, gg)
                var oR2 = _v()
                _(cQ2, oR2)
                if (_oz(z, 20, e, s, gg)) {
                    oR2.wxVkey = 1
                }
                var lS2 = _v()
                _(cQ2, lS2)
                var aT2 = function(eV2, tU2, bW2, gg) {
                    var xY2 = _mz(z, 'view', ['bind:longtap', 25, 'bindtap', 1, 'class', 2, 'data-row', 3, 'id', 4], [], eV2, tU2, gg)
                    var f12 = _v()
                    _(xY2, f12)
                    var c22 = function(o42, h32, c52, gg) {
                        var l72 = _mz(z, 'ruby-segment', ['displayStyle', 34, 'item', 1, 'showPinyin', 2, 'showWordTranslation', 3, 'variant', 4], [], o42, h32, gg)
                        _(c52, l72)
                        return c52
                    }
                    f12.wxXCkey = 4
                    _2z(z, 32, c22, eV2, tU2, gg, f12, 'segment', 'col', 'col')
                    var oZ2 = _v()
                    _(xY2, oZ2)
                    if (_oz(z, 39, eV2, tU2, gg)) {
                        oZ2.wxVkey = 1
                    }
                    oZ2.wxXCkey = 1
                    _(bW2, xY2)
                    return bW2
                }
                lS2.wxXCkey = 4
                _2z(z, 23, aT2, e, s, gg, lS2, 'line', 'row', 'row')
                oR2.wxXCkey = 1
                _(oJ2, cQ2)
            } else {
                oJ2.wxVkey = 2
            }
            var a82 = _n('view')
            _rz(z, a82, 'class', 40, e, s, gg)
            var t92 = _v()
            _(a82, t92)
            if (_oz(z, 41, e, s, gg)) {
                t92.wxVkey = 1
                var bA3 = _mz(z, 'view', ['bindtap', 42, 'class', 1, 'data-from', 2], [], e, s, gg)
                var oB3 = _mz(z, 'van-icon', ['color', 45, 'name', 1, 'size', 2], [], e, s, gg)
                _(bA3, oB3)
                _(t92, bA3)
            } else if (_oz(z, 48, e, s, gg)) {
                t92.wxVkey = 2
                var xC3 = _n('view')
                _rz(z, xC3, 'class', 49, e, s, gg)
                var oD3 = _v()
                _(xC3, oD3)
                if (_oz(z, 50, e, s, gg)) {
                    oD3.wxVkey = 1
                    var fE3 = _mz(z, 'view', ['bindtap', 51, 'class', 1], [], e, s, gg)
                    var cF3 = _mz(z, 'van-icon', ['color', 53, 'name', 1, 'size', 2], [], e, s, gg)
                    _(fE3, cF3)
                    _(oD3, fE3)
                }
                var hG3 = _mz(z, 'view', ['bindtap', 56, 'class', 1], [], e, s, gg)
                var oH3 = _mz(z, 'van-icon', ['color', 58, 'name', 1, 'size', 2], [], e, s, gg)
                _(hG3, oH3)
                _(xC3, hG3)
                oD3.wxXCkey = 1
                oD3.wxXCkey = 3
                _(t92, xC3)
            }
            var e02 = _v()
            _(a82, e02)
            if (_oz(z, 61, e, s, gg)) {
                e02.wxVkey = 1
                var cI3 = _mz(z, 'view', ['bindtap', 62, 'class', 1], [], e, s, gg)
                var oJ3 = _mz(z, 'van-icon', ['color', 64, 'name', 1, 'size', 2], [], e, s, gg)
                _(cI3, oJ3)
                _(e02, cI3)
            }
            t92.wxXCkey = 1
            t92.wxXCkey = 3
            t92.wxXCkey = 3
            e02.wxXCkey = 1
            e02.wxXCkey = 3
            _(eH2, a82)
            bI2.wxXCkey = 1
            bI2.wxXCkey = 3
            oJ2.wxXCkey = 1
            oJ2.wxXCkey = 3
            _(r, eH2)
            var lK3 = _mz(z, 'subtitle-settings-sheet', ['autoScroll', 67, 'bind:close', 1, 'bind:loopcountchange', 2, 'bind:loopintervalchange', 3, 'bind:settingchange', 4, 'enablePinyinOption', 5, 'enableSentenceTranslationOption', 6, 'enableWordTranslationOption', 7, 'loopIntervalSeconds', 8, 'show', 9, 'showPinyin', 10, 'showSentenceTranslation', 11, 'showWordTranslation', 12, 'singleLoopCount', 13], [], e, s, gg)
            _(r, lK3)
            var lE2 = _v()
            _(r, lE2)
            if (_oz(z, 81, e, s, gg)) {
                lE2.wxVkey = 1
                var aL3 = _mz(z, 'van-popup', ['safeAreaInsetRight', -1, 'bind:close', 82, 'customStyle', 1, 'position', 2, 'show', 3], [], e, s, gg)
                var tM3 = _n('view')
                _rz(z, tM3, 'class', 86, e, s, gg)
                var eN3 = _n('view')
                _rz(z, eN3, 'class', 87, e, s, gg)
                var bO3 = _v()
                _(eN3, bO3)
                if (_oz(z, 88, e, s, gg)) {
                    bO3.wxVkey = 1
                }
                var oP3 = _v()
                _(eN3, oP3)
                if (_oz(z, 89, e, s, gg)) {
                    oP3.wxVkey = 1
                }
                bO3.wxXCkey = 1
                oP3.wxXCkey = 1
                _(tM3, eN3)
                var xQ3 = _v()
                _(tM3, xQ3)
                var oR3 = function(cT3, fS3, hU3, gg) {
                    var cW3 = _mz(z, 'view', ['bindtap', 94, 'class', 1, 'data-uuid', 2], [], cT3, fS3, gg)
                    var oX3 = _n('view')
                    _rz(z, oX3, 'class', 97, cT3, fS3, gg)
                    var lY3 = _v()
                    _(oX3, lY3)
                    if (_oz(z, 98, cT3, fS3, gg)) {
                        lY3.wxVkey = 1
                    }
                    var aZ3 = _v()
                    _(oX3, aZ3)
                    if (_oz(z, 99, cT3, fS3, gg)) {
                        aZ3.wxVkey = 1
                    }
                    lY3.wxXCkey = 1
                    aZ3.wxXCkey = 1
                    _(cW3, oX3)
                    _(hU3, cW3)
                    return hU3
                }
                xQ3.wxXCkey = 2
                _2z(z, 92, oR3, e, s, gg, xQ3, 'episode', 'index', 'id')
                _(aL3, tM3)
                _(lE2, aL3)
            }
            lE2.wxXCkey = 1
            lE2.wxXCkey = 3
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
                g = "$gwx_XC_73";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_73();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/video/detail/index.wxml'] = [$gwx_XC_73, './pages/video/detail/index.wxml'];
else __wxAppCode__['pages/video/detail/index.wxml'] = $gwx_XC_73('./pages/video/detail/index.wxml');;
__wxRoute = "pages/video/detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/video/detail/index.js";
define("pages/video/detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/defineProperty"),
        t = require("../../../@babel/runtime/helpers/slicedToArray"),
        i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/typeof"),
        o = require("../../../commons/utils"),
        s = g(require("../../../api/getVideoEpisodeDetail")),
        l = require("../../../commons/config"),
        u = require("../../../behaviors/subtitle-behavior"),
        d = require("../../../commons/punctuation"),
        c = g(require("../../../api/addFav")),
        h = g(require("../../../api/deleteFav")),
        p = g(require("../../../api/getFavState")),
        v = (require("../../../utils/login"), require("../../../components/ruby-token/shared")),
        f = require("../../../utils/subtitle-capabilities");

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var b = (null === u.subtitleBehaviorMixin || void 0 === u.subtitleBehaviorMixin ? void 0 : u.subtitleBehaviorMixin.data) || {},
        m = (null === u.subtitleBehaviorMixin || void 0 === u.subtitleBehaviorMixin ? void 0 : u.subtitleBehaviorMixin.methods) || {};

    function y() {
        for (var e = [], t = 0; t < 3; ++t) {
            var i = Math.floor(256 * Math.random()).toString(16);
            i = 1 == i.length ? "0" + i : i, e.push(i)
        }
        return "#" + e.join("")
    }

    function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!e || "string" != typeof e) return "";
        if (/^(https?:)?\/\//.test(e)) return e.startsWith("//") ? "https:".concat(e) : e;
        var t = "string" == typeof l.BASE_URL ? l.BASE_URL : "";
        if (!t) return e;
        var i = t.replace(/\/$/, ""),
            a = e.startsWith("/") ? e : "/".concat(e);
        return "".concat(i).concat(a)
    }

    function x() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e && "object" === n(e) && (e.uuid || e.episodeUuid || e.episode || e.id) || ""
    }

    function T(e) {
        var t = Number(e);
        if (!Number.isFinite(t) || t <= 0) return "";
        if (t >= 6e4) {
            var i = Math.round(t / 6e4 * 10) / 10;
            return "".concat(i, "分钟")
        }
        var a = Math.max(1, Math.round(t / 1e3));
        return "".concat(a, "秒")
    }

    function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (!e || "object" !== n(e)) return null;
        var t = "string" == typeof e.title ? e.title.trim() : "",
            i = "string" == typeof e.subtitle ? e.subtitle.trim() : "";
        return t || i ? r(r({}, e), {}, {
            title: t,
            subtitle: i
        }) : null
    }

    function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e && "string" == typeof e.pinyin && e.pinyin.trim();
        if (t) return e.pinyin.trim();
        var i = e && Array.isArray(e.pinyinArr) && e.pinyinArr[0];
        return i ? e.pinyinArr[0] : ""
    }

    function D() {
        var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = (0, d.normalizeWordsWithPunctuation)(Array.isArray(i.words) ? i.words : []),
            n = r.map((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = A(e);
                return {
                    text: e.text || "",
                    translation: e.translation || "",
                    rubyToken: (0, v.buildRubyToken)(e.text || "", t, a),
                    leadingPunctuation: e.leadingPunctuation || e.punctuationBefore || "",
                    trailingPunctuation: e.trailingPunctuation || e.punctuationAfter || e.punctuation || ""
                }
            })),
            o = (null === (e = n[0]) || void 0 === e ? void 0 : e.translation) || "",
            s = Number(null === (t = r[0]) || void 0 === t ? void 0 : t.begin_time);
        return {
            text: i.text || "",
            translation: i.translation || "",
            cn: i.cn,
            annotationText: i.translation || i.text || o || "",
            showWordDivider: n.length > 1 || !!o,
            displayWords: n,
            segmentStart: Number.isFinite(s) ? s : void 0
        }
    }

    function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = Array.isArray(e) ? e : [],
            a = i.map((function() {
                var e, i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = Array.isArray(a.segments) ? a.segments : [],
                    n = r.map((function(e) {
                        return D(e, t)
                    }));
                return {
                    beginTime: null !== (e = a.beginTime) && void 0 !== e ? e : a.start,
                    endTime: null !== (i = a.endTime) && void 0 !== i ? i : a.end,
                    translation: a.translation || "",
                    segments: n
                }
            }));
        return a
    }

    function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return Array.isArray(e) ? e.slice(0, 5) : []
    }
    Page(r(r({}, m), {}, {
        onLoad: function() {
            var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null === (e = (t = wx).showShareMenu) || void 0 === e || e.call(t, {
                menus: ["shareAppMessage", "shareTimeline"]
            }), this.subtitleVisibilityPreferences = (0, f.createSubtitleVisibilityPreferences)(), this.loadSetting(), this.pinyinScheme = (0, o.getPinyinScheme)() || "", this.episodeUuid = x(i), this.accessToken = i.accessToken || "";
            try {
                this.accessToken = this.accessToken ? decodeURIComponent(this.accessToken) : ""
            } catch (e) {}
            if (!this.episodeUuid) return wx.showToast({
                title: "缺少视频ID",
                icon: "none"
            }), void this.setData({
                loadError: "缺少视频ID",
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            });
            this.setData({
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            }), this.fetchEpisodeDetail(!0)
        },
        navBack: o.navBack,
        data: r(r({}, b), {}, {
            showPinyin: !0,
            showWordTranslation: !0,
            showSentenceTranslation: !0,
            showSettingPanel: !1,
            singleLoopCount: 1,
            loopIntervalSeconds: .5,
            autoScroll: !0,
            showActionMenu: !1,
            isFavorite: !1,
            title: "",
            videoSrc: "",
            fallbackMediaSrc: "",
            isAudioOnly: !1,
            videoPoster: "",
            article: [],
            tags: [],
            courseInfo: null,
            episodes: [],
            hasEpisodeGroup: !1,
            activeEpisodeId: "",
            episodeLoading: !1,
            loadError: "",
            firstParagraphHeight: 0,
            articlePaddingBottom: 0,
            showEpisodeList: !1,
            favId: 0,
            favoriteLoading: !1,
            isGuest: !1,
            pinyinScheme: "",
            rubyDisplayStyle: "annotated",
            subtitleCapabilities: (0, f.normalizeSubtitleCapabilities)()
        }),
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: l.VIDEO_PLAY_SETTING_KEY,
                success: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.data,
                        a = void 0 === i ? {} : i,
                        r = {},
                        n = (0, f.normalizeSubtitleVisibilityPreferences)(a);
                    if (e.subtitleVisibilityPreferences = n, Object.assign(r, (0, f.applySubtitleCapabilitiesToVisibility)(n, e.data.subtitleCapabilities)), Number.isFinite(Number(a.singleLoopCount))) {
                        var o = Math.max(1, Math.min(5, Math.floor(Number(a.singleLoopCount))));
                        r.singleLoopCount = o
                    }
                    if (Number.isFinite(Number(a.loopIntervalSeconds))) {
                        var s = Math.max(0, Math.min(5, Number(a.loopIntervalSeconds)));
                        r.loopIntervalSeconds = Number(s.toFixed(1))
                    }
                    "boolean" == typeof a.autoScroll && (r.autoScroll = a.autoScroll), Object.keys(r).length && e.setData(r)
                }
            })
        },
        fetchEpisodeDetail: function() {
            var e = arguments,
                t = this;
            return a(i().mark((function a() {
                var n, l, u, d, c, h, p, v, g, b, m, y, x, A, D, L, E, I, M, C, F, B, U, N, V, R, _, O, q;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (n = e.length > 0 && void 0 !== e[0] && e[0], t.episodeUuid) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return l = t.createLoadingBarrier(n), u = !1, t.cancelRenderPerfSession("start new fetch"), n && wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), t.setData({
                                episodeLoading: !0,
                                loadError: "",
                                favId: 0,
                                isFavorite: !1
                            }), i.prev = 8, !1, i.next = 12, (0, s.default)(t.episodeUuid, {
                                guest: !1,
                                accessToken: t.accessToken
                            });
                        case 12:
                            if (v = i.sent, g = v.code, b = v.data, 0 === g && b) {
                                i.next = 17;
                                break
                            }
                            throw new Error("EPISODE_NOT_FOUND");
                        case 17:
                            if (!0 !== b.needVip) {
                                i.next = 22;
                                break
                            }
                            return wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.setData({
                                episodeLoading: !1
                            }), t.flushLoadingBarrier(l), i.abrupt("return");
                        case 22:
                            m = b || {}, y = w(b.course || b.collection || null), x = Array.isArray(b.episodes) ? b.episodes.map((function(e) {
                                return r(r({}, e), {}, {
                                    displayDuration: T(e.duration)
                                })
                            })) : [], A = !!y || x.length > 0, D = m.video || {}, L = Array.isArray(m.article) ? m.article : [], E = S(D.src || ""), I = S(D.audioSrc || ""), M = E || I, C = E && I && E !== I ? I : "", F = S(m.coverUrl || (null !== (d = null === (c = b.course) || void 0 === c ? void 0 : c.coverUrl) && void 0 !== d ? d : "") || (null !== (h = null === (p = m.categoryInfo) || void 0 === p ? void 0 : p.coverUrl) && void 0 !== h ? h : "") || ""), B = P(L, t.pinyinScheme || t.data.pinyinScheme || ""), U = (0, f.applySubtitleCapabilitiesToVisibility)(t.subtitleVisibilityPreferences, m.subtitleCapabilities), N = k(B), t.stopParagraphPlayback(!1), V = m.id || t.episodeUuid, t.articleRenderToken = (t.articleRenderToken || 0) + 1, R = t.articleRenderToken, u = N.length > 0, t.episodeUuid = V, t.setData(r({
                                title: m.title || y && y.title || "",
                                videoSrc: M,
                                fallbackMediaSrc: C,
                                isAudioOnly: !E && !!I,
                                videoPoster: F
                            }, U)), t.initSubtitles(B, {
                                renderArticle: N,
                                tags: Array.isArray(m.tags) ? m.tags : [],
                                courseInfo: y,
                                episodes: x,
                                hasEpisodeGroup: A,
                                activeEpisodeId: V,
                                episodeLoading: !1,
                                loadError: "",
                                isGuest: !!b.isGuest,
                                showEpisodeList: !1
                            }, (function() {
                                u || t.flushLoadingBarrier(l), t.measureFirstParagraphReady(l, (function() {
                                    t.scheduleDeferredArticleAppend(B, R)
                                })), t.ensureVideoContext(), t.calHeight(), t.syncFavoriteState(V)
                            })), i.next = 56;
                            break;
                        case 46:
                            i.prev = 46, i.t0 = i.catch(8), console.error("fetchEpisodeDetail error", i.t0), t.stopParagraphPlayback(!1), t.cancelRenderPerfSession("fetch failed"), _ = "EPISODE_NOT_FOUND" === (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.message) ? "未找到视频" : "加载失败", t.initSubtitles([]), t.setData({
                                episodeLoading: !1,
                                loadError: _,
                                videoSrc: "",
                                fallbackMediaSrc: "",
                                isAudioOnly: !1,
                                videoPoster: "",
                                courseInfo: null,
                                episodes: [],
                                hasEpisodeGroup: !1,
                                activeEpisodeId: "",
                                showEpisodeList: !1,
                                favId: 0,
                                isFavorite: !1,
                                isGuest: !1
                            }), t.flushLoadingBarrier(l), wx.showToast({
                                title: _,
                                icon: "none"
                            });
                        case 56:
                            return i.prev = 56, n && !u && t.flushLoadingBarrier(l), null === (O = (q = wx).stopPullDownRefresh) || void 0 === O || O.call(q), i.finish(56);
                        case 60:
                        case "end":
                            return i.stop()
                    }
                }), a, null, [
                    [8, 46, 56, 60]
                ])
            })))()
        },
        saveSetting: function() {
            var e = this.data,
                t = e.singleLoopCount,
                i = e.loopIntervalSeconds,
                a = e.autoScroll,
                n = (0, f.normalizeSubtitleVisibilityPreferences)(this.subtitleVisibilityPreferences);
            wx.setStorage({
                key: l.VIDEO_PLAY_SETTING_KEY,
                data: r(r({}, n), {}, {
                    singleLoopCount: Math.max(1, Math.min(5, Math.floor(Number(t) || 1))),
                    loopIntervalSeconds: Math.max(0, Math.min(5, Number(i) || 0)),
                    autoScroll: !!a
                })
            })
        },
        onPullDownRefresh: function() {
            this.fetchEpisodeDetail(!1)
        },
        onReady: function(e) {
            this.videoContext = wx.createVideoContext("myVideo")
        },
        onUnload: function() {
            this.stopParagraphPlayback(!1), this.cancelRenderPerfSession("page unload"), this.flushLoadingBarrier(this.loadingBarrier)
        },
        inputValue: "",
        paragraphPlaybackTimer: null,
        bindInputBlur: function(e) {
            this.inputValue = e.detail.value
        },
        bindtimeupdate: function(e) {
            var t, i = Number(null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.currentTime);
            Number.isFinite(i) && this.handleBindTimeUpdate(1e3 * i)
        },
        bindSendDanmu: function() {
            this.videoContext.sendDanmu({
                text: this.inputValue,
                color: y()
            })
        },
        handleVideoError: function() {
            var e = this.data,
                t = e.videoSrc,
                i = e.fallbackMediaSrc;
            i && t !== i && (this.setData({
                videoSrc: i,
                isAudioOnly: !0
            }), wx.showToast({
                title: "已切换到音频",
                icon: "none"
            }))
        },
        clearDeferredArticleAppend: function() {
            this.deferredArticleAppendTimer && (clearTimeout(this.deferredArticleAppendTimer), this.deferredArticleAppendTimer = null)
        },
        scheduleDeferredArticleAppend: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                i = arguments.length > 1 ? arguments[1] : void 0;
            this.clearDeferredArticleAppend(), !Array.isArray(t) || t.length <= 5 || (this.deferredArticleAppendTimer = setTimeout((function() {
                e.deferredArticleAppendTimer = null, i === e.articleRenderToken && e.setData({
                    article: t
                })
            }), 0))
        },
        createLoadingBarrier: function(e) {
            this.flushLoadingBarrier(this.loadingBarrier);
            var t = {
                enabled: !!e,
                hidden: !e
            };
            return this.loadingBarrier = t, t
        },
        flushLoadingBarrier: function(e) {
            e && e.enabled && !e.hidden && (this.loadingBarrier && this.loadingBarrier !== e || (wx.hideLoading(), e.hidden = !0, this.loadingBarrier === e && (this.loadingBarrier = null)))
        },
        cancelRenderPerfSession: function() {
            this.clearDeferredArticleAppend(), this.articleRenderToken = (this.articleRenderToken || 0) + 1
        },
        measureFirstParagraphReady: function(e, t) {
            var i, a = this;
            if (null === (i = this.data.article) || void 0 === i || !i.length) return this.flushLoadingBarrier(e), void(null == t || t());
            var r = function() {
                var i = wx.createSelectorQuery();
                i.select("#el_0").boundingClientRect(), i.exec((function(i) {
                    var r = Array.isArray(i) ? i[0] : null;
                    a.flushLoadingBarrier(e), null == t || t(r || null)
                }))
            };
            "function" != typeof wx.nextTick ? r() : wx.nextTick((function() {
                r()
            }))
        },
        calHeight: function(e) {
            var i = this,
                a = i.data,
                r = a.firstParagraphHeight,
                n = a.articlePaddingBottom,
                o = wx.createSelectorQuery();
            o.select(".article").boundingClientRect(), o.select("#el_0").boundingClientRect(), o.exec((function(a) {
                var o = t(a, 2),
                    s = o[0],
                    l = o[1];
                if (null != s && s.height && null != l && l.height) return r = l.height + 24, n = s.height - r - 24, void i.setData({
                    firstParagraphHeight: r,
                    articlePaddingBottom: n
                }, e);
                null == e || e()
            }))
        },
        onSettingChange: function(t) {
            var i = this,
                a = t && t.currentTarget && t.currentTarget.dataset || {},
                o = t ? t.detail : void 0,
                s = a.setting || (null == o ? void 0 : o.setting);
            if (s) {
                var l = "object" === n(o) && null !== o && "value" in o ? o.value : o;
                if ("boolean" == typeof l)
                    if ((0, f.isSubtitleVisibilitySetting)(s)) {
                        this.subtitleVisibilityPreferences = r(r({}, (0, f.normalizeSubtitleVisibilityPreferences)(this.subtitleVisibilityPreferences)), {}, e({}, s, l));
                        var u = (0, f.applySubtitleCapabilitiesToVisibility)(this.subtitleVisibilityPreferences, this.data.subtitleCapabilities);
                        this.setData(u, (function() {
                            i.saveSetting()
                        }))
                    } else this.setData(e({}, s, l), (function() {
                        i.saveSetting()
                    }))
            }
        },
        onLoopCountChange: function(e) {
            var t = this,
                i = "object" === n(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                a = Math.max(1, Math.min(5, Math.floor(Number(i) || 1)));
            this.setData({
                singleLoopCount: a
            }, (function() {
                t.saveSetting()
            }))
        },
        onLoopIntervalChange: function(e) {
            var t = this,
                i = "object" === n(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                a = Math.max(0, Math.min(5, Number(i) || 0));
            this.setData({
                loopIntervalSeconds: Number(a.toFixed(1))
            }, (function() {
                t.saveSetting()
            }))
        },
        toggleSettingPanel: function() {
            var e = !this.data.showSettingPanel;
            this.setData({
                showSettingPanel: e,
                showActionMenu: !e && this.data.showActionMenu
            })
        },
        handleParagraphTap: function(e) {
            var t, i = e && e.currentTarget && e.currentTarget.dataset || {},
                a = "number" == typeof i.row ? i.row : Number(i.row);
            if (Number.isFinite(a)) {
                var r = null === (t = this.data.article) || void 0 === t ? void 0 : t[a];
                if (r)
                    if (this.data.paragraphPlayback && this.data.paragraphPlayback.row === a) this.stopParagraphPlayback(!0);
                    else {
                        var n = this.resolveParagraphTimes(r),
                            o = n.start,
                            s = n.end;
                        if ("number" != typeof o || "number" != typeof s || s <= o) this.seekToParagraph(a);
                        else {
                            var l = Number.isFinite(Number(this.data.singleLoopCount)) ? Math.max(1, Math.min(5, Math.floor(Number(this.data.singleLoopCount)))) : 1;
                            this.startParagraphPlayback({
                                row: a,
                                start: o,
                                end: s,
                                loops: l
                            })
                        }
                    }
            }
        },
        toggleActionMenu: function() {
            this.setData({
                showActionMenu: !this.data.showActionMenu
            })
        },
        handleToggleFavorite: function() {
            this.episodeUuid && !this.data.favoriteLoading && (this.data.favId ? this.removeFavorite() : this.addFavorite())
        },
        handleEpisodeSelect: function(e) {
            var t = (e && e.currentTarget && e.currentTarget.dataset || {}).uuid;
            t && t !== this.episodeUuid && (this.stopParagraphPlayback(!1), this.episodeUuid = t, this.handleEpisodeListClose(), this.fetchEpisodeDetail(!0))
        },
        toggleEpisodeList: function() {
            var e;
            null !== (e = this.data.episodes) && void 0 !== e && e.length && this.setData({
                showEpisodeList: !this.data.showEpisodeList
            })
        },
        handleEpisodeListClose: function() {
            this.data.showEpisodeList && this.setData({
                showEpisodeList: !1
            })
        },
        seek: function(e) {
            var t = e && e.currentTarget && e.currentTarget.dataset || {};
            this.seekToParagraph(t.row)
        },
        getLoopIntervalMs: function() {
            return 1e3 * Math.max(0, Math.min(5, Number(this.data.loopIntervalSeconds) || 0))
        },
        ensureVideoContext: function() {
            this.videoContext || (this.videoContext = wx.createVideoContext("myVideo"))
        },
        syncFavoriteState: function(e) {
            var t = this;
            return a(i().mark((function a() {
                var r, n, o, s;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (r = e || t.episodeUuid) {
                                i.next = 4;
                                break
                            }
                            return t.setData({
                                favId: 0,
                                isFavorite: !1
                            }), i.abrupt("return");
                        case 4:
                            return i.prev = 4, i.next = 7, (0, p.default)("video", r);
                        case 7:
                            n = i.sent, o = n.code, s = n.data, 0 === o && null != s && s.id ? t.setData({
                                favId: s.id,
                                isFavorite: !0
                            }) : t.setData({
                                favId: 0,
                                isFavorite: !1
                            }), i.next = 16;
                            break;
                        case 13:
                            i.prev = 13, i.t0 = i.catch(4), t.setData({
                                favId: 0,
                                isFavorite: !1
                            });
                        case 16:
                        case "end":
                            return i.stop()
                    }
                }), a, null, [
                    [4, 13]
                ])
            })))()
        },
        addFavorite: function() {
            var e = this;
            return a(i().mark((function t() {
                var a, r, n;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e.episodeUuid) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return e.setData({
                                favoriteLoading: !0
                            }), t.prev = 3, t.next = 6, (0, c.default)({
                                bid: e.episodeUuid,
                                category: "video"
                            });
                        case 6:
                            if (a = t.sent, r = a.code, n = a.data, 0 !== r || null == n || !n.id) {
                                t.next = 14;
                                break
                            }
                            e.setData({
                                favId: n.id,
                                isFavorite: !0
                            }), wx.showToast({
                                title: "已收藏",
                                icon: "none",
                                duration: 1500
                            }), t.next = 15;
                            break;
                        case 14:
                            throw new Error("FAVORITE_ADD_FAILED");
                        case 15:
                            t.next = 20;
                            break;
                        case 17:
                            t.prev = 17, t.t0 = t.catch(3), wx.showToast({
                                title: "收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 20:
                            return t.prev = 20, e.setData({
                                favoriteLoading: !1
                            }), t.finish(20);
                        case 23:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [3, 17, 20, 23]
                ])
            })))()
        },
        removeFavorite: function() {
            var e = this;
            return a(i().mark((function t() {
                var a, r, n, o;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (a = e.data.favId) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return e.setData({
                                favoriteLoading: !0
                            }), t.prev = 4, t.next = 7, (0, h.default)(a);
                        case 7:
                            if (r = t.sent, n = r.code, o = r.data, 0 !== n || 1 !== (null == o ? void 0 : o.removed)) {
                                t.next = 15;
                                break
                            }
                            e.setData({
                                favId: 0,
                                isFavorite: !1
                            }), wx.showToast({
                                title: "已取消收藏",
                                icon: "none",
                                duration: 1500
                            }), t.next = 16;
                            break;
                        case 15:
                            throw new Error("FAVORITE_DELETE_FAILED");
                        case 16:
                            t.next = 21;
                            break;
                        case 18:
                            t.prev = 18, t.t0 = t.catch(4), wx.showToast({
                                title: "取消收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 21:
                            return t.prev = 21, e.setData({
                                favoriteLoading: !1
                            }), t.finish(21);
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [4, 18, 21, 24]
                ])
            })))()
        },
        onShareAppMessage: function() {
            var e;
            return {
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语视频",
                path: "/pages/video/detail/index?uuid=".concat(encodeURIComponent(this.episodeUuid || "")),
                imageUrl: this.data.videoPoster || l.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        },
        onShareTimeline: function() {
            var e, t = encodeURIComponent(this.episodeUuid || "");
            return {
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语视频",
                query: t ? "uuid=".concat(t) : "",
                imageUrl: this.data.videoPoster || l.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        }
    }));
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/video/detail/index.js'
});
require("pages/video/detail/index.js");