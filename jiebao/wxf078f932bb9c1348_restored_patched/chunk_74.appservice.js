$gwx_XC_72 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_72 || [];

        function gz$gwx_XC_72_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_72_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, 'background:#f7f2ea;'])
                Z([3, '返回'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'poetryNavTitle']
                    ],
                    [1, '粤语古诗词']
                ])
                Z([3, 'content'])
                Z([3, 'poetry-hero'])
                Z([
                    [7],
                    [3, 'poetrySource']
                ])
                Z([
                    [7],
                    [3, 'poetryTitleLine']
                ])
                Z([3, 'col'])
                Z([3, 'segment'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'poetryTitleLine']
                    ],
                    [3, 'segments']
                ])
                Z(z[10])
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
                Z(z[1])
                Z([3, 'hero-title'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'poetryMetaLines']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'poetryMetaLines']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'metaLine'])
                Z([
                    [7],
                    [3, 'poetryMetaLines']
                ])
                Z([3, 'sourceRow'])
                Z(z[10])
                Z(z[11])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'metaLine']
                    ],
                    [3, 'segments']
                ])
                Z(z[10])
                Z(z[14])
                Z(z[15])
                Z(z[16])
                Z(z[1])
                Z([3, 'hero-meta'])
                Z([
                    [7],
                    [3, 'poetryMetaLine']
                ])
                Z([
                    [7],
                    [3, 'poetryIntro']
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'episodes']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'episodes']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'toggleEpisodeList'])
                Z([3, 'episode-inline'])
                Z([3, '#785a3b'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'showEpisodeList']
                    ],
                    [1, 'arrow-up'],
                    [1, 'arrow-down']
                ])
                Z([3, '18px'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'displayArticle']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'displayArticle']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'line'])
                Z([
                    [7],
                    [3, 'displayArticle']
                ])
                Z(z[22])
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
                                [6],
                                [
                                    [7],
                                    [3, 'line']
                                ],
                                [3, 'sourceRow']
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
                    [6],
                    [
                        [7],
                        [3, 'line']
                    ],
                    [3, 'sourceRow']
                ])
                Z([a, [3, 'el_'], z[47]])
                Z(z[10])
                Z(z[11])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'line']
                    ],
                    [3, 'segments']
                ])
                Z(z[10])
                Z(z[14])
                Z(z[15])
                Z(z[16])
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
                Z([
                    [7],
                    [3, 'audioSrc']
                ])
                Z([3, 'handleToggleFavorite'])
                Z([3, 'handlePlayToggle'])
                Z([3, 'handleProgressChange'])
                Z([3, 'handleProgressDrag'])
                Z([3, 'handleProgressDragEnd'])
                Z([3, 'handleProgressDragStart'])
                Z([3, 'toggleSettingPanel'])
                Z([3, 'handleStopLoop'])
                Z([
                    [7],
                    [3, 'currentTimeLabel']
                ])
                Z([
                    [7],
                    [3, 'durationLabel']
                ])
                Z([
                    [7],
                    [3, 'episodeLoading']
                ])
                Z([
                    [7],
                    [3, 'isFavorite']
                ])
                Z([
                    [7],
                    [3, 'isPlaying']
                ])
                Z([
                    [7],
                    [3, 'loadError']
                ])
                Z([
                    [7],
                    [3, 'paragraphPlaybackLabel']
                ])
                Z([
                    [7],
                    [3, 'progressValue']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'title']
                    ],
                    [1, '诗词音频']
                ])
                Z([
                    [7],
                    [3, 'autoScroll']
                ])
                Z(z[66])
                Z([3, 'onLoopCountChange'])
                Z([3, 'onLoopIntervalChange'])
                Z([3, 'onSettingChange'])
                Z([
                    [7],
                    [3, 'directReadPoetry']
                ])
                Z(z[1])
                Z([1, true])
                Z(z[1])
                Z(z[1])
                Z([
                    [7],
                    [3, 'loopIntervalSeconds']
                ])
                Z([
                    [7],
                    [3, 'showSettingPanel']
                ])
                Z(z[16])
                Z([
                    [7],
                    [3, 'showSentenceTranslation']
                ])
                Z(z[56])
                Z([
                    [7],
                    [3, 'singleLoopCount']
                ])
                Z([
                    [7],
                    [3, 'activeEpisodeId']
                ])
                Z([3, 'handleEpisodeListClose'])
                Z([3, 'handleEpisodeSelect'])
                Z([
                    [7],
                    [3, 'courseInfo']
                ])
                Z([
                    [7],
                    [3, 'episodes']
                ])
                Z([
                    [7],
                    [3, 'showEpisodeList']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_72_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_72_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_72 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_72 = true;
        var x = ['./pages/poetry/detail/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_72_1()
            var oZZ = _n('van-sticky')
            var x1Z = _mz(z, 'van-nav-bar', ['back', -1, 'leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'customStyle', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(oZZ, x1Z)
            _(r, oZZ)
            var o2Z = _n('view')
            _rz(z, o2Z, 'class', 6, e, s, gg)
            var h5Z = _n('view')
            _rz(z, h5Z, 'class', 7, e, s, gg)
            var o6Z = _v()
            _(h5Z, o6Z)
            if (_oz(z, 8, e, s, gg)) {
                o6Z.wxVkey = 1
            }
            var c7Z = _v()
            _(h5Z, c7Z)
            if (_oz(z, 9, e, s, gg)) {
                c7Z.wxVkey = 1
                var a0Z = _v()
                _(c7Z, a0Z)
                var tA1 = function(bC1, eB1, oD1, gg) {
                    var oF1 = _mz(z, 'ruby-segment', ['displayStyle', 14, 'item', 1, 'showPinyin', 2, 'showWordTranslation', 3, 'variant', 4], [], bC1, eB1, gg)
                    _(oD1, oF1)
                    return oD1
                }
                a0Z.wxXCkey = 4
                _2z(z, 12, tA1, e, s, gg, a0Z, 'segment', 'col', 'col')
            } else {
                c7Z.wxVkey = 2
            }
            var o8Z = _v()
            _(h5Z, o8Z)
            if (_oz(z, 19, e, s, gg)) {
                o8Z.wxVkey = 1
                var fG1 = _v()
                _(o8Z, fG1)
                var cH1 = function(oJ1, hI1, cK1, gg) {
                    var lM1 = _v()
                    _(cK1, lM1)
                    var aN1 = function(eP1, tO1, bQ1, gg) {
                        var xS1 = _mz(z, 'ruby-segment', ['displayStyle', 27, 'item', 1, 'showPinyin', 2, 'showWordTranslation', 3, 'variant', 4], [], eP1, tO1, gg)
                        _(bQ1, xS1)
                        return bQ1
                    }
                    lM1.wxXCkey = 4
                    _2z(z, 25, aN1, oJ1, hI1, gg, lM1, 'segment', 'col', 'col')
                    return cK1
                }
                fG1.wxXCkey = 4
                _2z(z, 21, cH1, e, s, gg, fG1, 'metaLine', 'index', 'sourceRow')
            } else if (_oz(z, 32, e, s, gg)) {
                o8Z.wxVkey = 2
            }
            var l9Z = _v()
            _(h5Z, l9Z)
            if (_oz(z, 33, e, s, gg)) {
                l9Z.wxVkey = 1
            }
            o6Z.wxXCkey = 1
            c7Z.wxXCkey = 1
            c7Z.wxXCkey = 3
            o8Z.wxXCkey = 1
            o8Z.wxXCkey = 3
            l9Z.wxXCkey = 1
            _(o2Z, h5Z)
            var f3Z = _v()
            _(o2Z, f3Z)
            if (_oz(z, 34, e, s, gg)) {
                f3Z.wxVkey = 1
                var oT1 = _mz(z, 'view', ['bindtap', 35, 'class', 1], [], e, s, gg)
                var fU1 = _mz(z, 'van-icon', ['color', 37, 'name', 1, 'size', 2], [], e, s, gg)
                _(oT1, fU1)
                _(f3Z, oT1)
            }
            var c4Z = _v()
            _(o2Z, c4Z)
            if (_oz(z, 40, e, s, gg)) {
                c4Z.wxVkey = 1
                var cV1 = _v()
                _(c4Z, cV1)
                var hW1 = function(cY1, oX1, oZ1, gg) {
                    var a21 = _mz(z, 'view', ['bind:longtap', 44, 'bindtap', 1, 'class', 2, 'data-row', 3, 'id', 4], [], cY1, oX1, gg)
                    var e41 = _v()
                    _(a21, e41)
                    var b51 = function(x71, o61, o81, gg) {
                        var c01 = _mz(z, 'ruby-segment', ['displayStyle', 53, 'item', 1, 'showPinyin', 2, 'showWordTranslation', 3, 'variant', 4], [], x71, o61, gg)
                        _(o81, c01)
                        return o81
                    }
                    e41.wxXCkey = 4
                    _2z(z, 51, b51, cY1, oX1, gg, e41, 'segment', 'col', 'col')
                    var t31 = _v()
                    _(a21, t31)
                    if (_oz(z, 58, cY1, oX1, gg)) {
                        t31.wxVkey = 1
                    }
                    t31.wxXCkey = 1
                    _(oZ1, a21)
                    return oZ1
                }
                cV1.wxXCkey = 4
                _2z(z, 42, hW1, e, s, gg, cV1, 'line', 'index', 'sourceRow')
            } else {
                c4Z.wxVkey = 2
            }
            f3Z.wxXCkey = 1
            f3Z.wxXCkey = 3
            c4Z.wxXCkey = 1
            c4Z.wxXCkey = 3
            _(r, o2Z)
            var hA2 = _mz(z, 'audio-player-bar', ['audioSrc', 59, 'bind:favorite', 1, 'bind:playtoggle', 2, 'bind:progresschange', 3, 'bind:progressdrag', 4, 'bind:progressdragend', 5, 'bind:progressdragstart', 6, 'bind:setting', 7, 'bind:stoploop', 8, 'currentTimeLabel', 9, 'durationLabel', 10, 'episodeLoading', 11, 'isFavorite', 12, 'isPlaying', 13, 'loadError', 14, 'paragraphPlaybackLabel', 15, 'progressValue', 16, 'title', 17], [], e, s, gg)
            _(r, hA2)
            var oB2 = _mz(z, 'subtitle-settings-sheet', ['autoScroll', 77, 'bind:close', 1, 'bind:loopcountchange', 2, 'bind:loopintervalchange', 3, 'bind:settingchange', 4, 'directReadPoetry', 5, 'enableAutoScrollOption', 6, 'enableDirectReadPoetryOption', 7, 'enableSentenceTranslationOption', 8, 'enableWordTranslationOption', 9, 'loopIntervalSeconds', 10, 'show', 11, 'showPinyin', 12, 'showSentenceTranslation', 13, 'showWordTranslation', 14, 'singleLoopCount', 15], [], e, s, gg)
            _(r, oB2)
            var cC2 = _mz(z, 'episode-drawer', ['activeEpisodeId', 93, 'bind:close', 1, 'bind:select', 2, 'courseInfo', 3, 'episodes', 4, 'show', 5], [], e, s, gg)
            _(r, cC2)
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
                g = "$gwx_XC_72";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_72();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/poetry/detail/index.wxml'] = [$gwx_XC_72, './pages/poetry/detail/index.wxml'];
else __wxAppCode__['pages/poetry/detail/index.wxml'] = $gwx_XC_72('./pages/poetry/detail/index.wxml');;
__wxRoute = "pages/poetry/detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/poetry/detail/index.js";
define("pages/poetry/detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/slicedToArray"),
        t = require("../../../@babel/runtime/helpers/defineProperty"),
        i = require("../../../@babel/runtime/helpers/typeof"),
        a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator");
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var r = require("../../../@babel/runtime/helpers/objectSpread2"),
        o = require("../../../commons/utils"),
        s = m(require("../../../api/getAudioContentDetail")),
        u = m(require("../../../api/getAudioContentCollectionDetail")),
        l = m(require("../../../api/addFav")),
        d = m(require("../../../api/getFavState")),
        c = m(require("../../../api/deleteFav")),
        h = require("../../../behaviors/subtitle-behavior"),
        p = require("../../../behaviors/audio-playback"),
        v = require("../../../utils/audio-content-adapter"),
        y = require("../../../utils/audio-content-share"),
        f = require("../../../utils/favorite-target"),
        g = require("../../../commons/punctuation"),
        b = require("../../../components/ruby-token/shared");

    function m(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var T = (null === h.subtitleBehaviorMixin || void 0 === h.subtitleBehaviorMixin ? void 0 : h.subtitleBehaviorMixin.data) || {},
        x = (null === h.subtitleBehaviorMixin || void 0 === h.subtitleBehaviorMixin ? void 0 : h.subtitleBehaviorMixin.methods) || {},
        w = (null === p.audioPlaybackMixin || void 0 === p.audioPlaybackMixin ? void 0 : p.audioPlaybackMixin.data) || {},
        S = (null === p.audioPlaybackMixin || void 0 === p.audioPlaybackMixin ? void 0 : p.audioPlaybackMixin.methods) || {};

    function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = "string" == typeof e ? e : "";
        if (!t) return "";
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    }

    function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "string" == typeof e ? e.trim() : ""
    }

    function A() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = [e.lineType, e.type, e.role, e.kind, e.subType, e.subtype, e.sub], i = 0, a = t; i < a.length; i++) {
            var n = a[i],
                r = P(n).toLowerCase();
            if (r) return r
        }
        return !0 === e.isTitle || !0 === e.title ? "title" : !0 === e.isAuthor || !0 === e.author ? "author" : !0 === e.isDynasty || !0 === e.dynasty ? "dynasty" : !0 === e.isSource || !0 === e.source ? "source" : ""
    }

    function M() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = [e.metaType, e.meta, e.metaKind], a = 0, n = i; a < n.length; a++) {
            var r = n[a],
                o = P(r).toLowerCase();
            if (o) return o
        }
        return ["title", "author", "dynasty", "source"].includes(t) ? t : ""
    }

    function D() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = Array.isArray(e.segments) ? e.segments : [];
        return t.map((function(e) {
            return (Array.isArray(null == e ? void 0 : e.words) ? e.words : []).map((function(e) {
                return "".concat((null == e ? void 0 : e.beforePunctuation) || "").concat((null == e ? void 0 : e.text) || "").concat((null == e ? void 0 : e.punctuation) || "")
            })).join("")
        })).join("").trim()
    }

    function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = P(e);
        return !!t && (/[，。！？；：、,.!?;]/.test(t) || t.length >= 5)
    }

    function L() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = P(t);
        return i && e.find((function(e, t) {
            return t < 3 && e.plainText === i
        })) || null
    }

    function U() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, i = Math.max(0, e.findIndex((function(e) {
                return e.sourceRow === t
            })) + 1), a = [], n = i; n < e.length && a.length < 2; n += 1) {
            var r = e[n],
                o = P((null == r ? void 0 : r.plainText) || "");
            if (o) {
                if (I(o)) break;
                a.push(r)
            }
        }
        return a
    }

    function C() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e && "string" == typeof e.pinyin && e.pinyin.trim();
        if (t) return e.pinyin.trim();
        var i = e && Array.isArray(e.pinyinArr) && e.pinyinArr[0];
        return i ? e.pinyinArr[0] : ""
    }

    function E() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            a = (0, g.normalizeWordsWithPunctuation)(Array.isArray(t.words) ? t.words : []),
            n = a.map((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = C(e);
                return {
                    text: e.text || "",
                    translation: e.translation || "",
                    rubyToken: (0, b.buildRubyToken)(e.text || "", t, i),
                    leadingPunctuation: e.leadingPunctuation || e.punctuationBefore || "",
                    trailingPunctuation: e.trailingPunctuation || e.punctuationAfter || e.punctuation || ""
                }
            })),
            r = (null === (e = n[0]) || void 0 === e ? void 0 : e.translation) || "";
        return {
            text: t.text || "",
            translation: t.translation || "",
            cn: t.cn,
            annotationText: t.translation || t.text || r || "",
            showWordDivider: n.length > 1 || !!r,
            displayWords: n
        }
    }

    function N() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return r(r({}, e), {}, {
            segments: (Array.isArray(e.segments) ? e.segments : []).map((function(e) {
                return E(e, t)
            }))
        })
    }

    function F() {
        for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = (Array.isArray(n) ? n : []).map((function(e, t) {
                var i = A(e),
                    a = M(e, i);
                return r(r({}, e), {}, {
                    sourceRow: t,
                    lineType: i,
                    metaType: a,
                    plainText: D(e)
                })
            })), s = o.find((function(e) {
                return "title" === e.lineType || "title" === e.metaType
            })) || null, u = P((null === (e = o.find((function(e) {
                return "title" === e.lineType || "title" === e.metaType
            }))) || void 0 === e ? void 0 : e.plainText) || ""), l = P(t.title || u || ""), d = s || L(o, l), c = o.filter((function(e) {
                return (!d || e.sourceRow !== d.sourceRow) && (["author", "dynasty", "source"].includes(e.lineType) || "meta" === e.lineType && ["author", "dynasty", "source"].includes(e.metaType))
            })), h = c.length ? c : U(o, null == d ? void 0 : d.sourceRow), p = h.some((function(e) {
                return "source" === e.lineType || "source" === e.metaType
            })), v = function(e) {
                var t = o.find(e);
                return P((null == t ? void 0 : t.plainText) || "")
            }, y = v((function(e) {
                return "author" === e.lineType || "author" === e.metaType
            })), f = v((function(e) {
                return "dynasty" === e.lineType || "dynasty" === e.metaType
            })), g = v((function(e) {
                return "source" === e.lineType || "source" === e.metaType
            })), b = h.map((function(e) {
                return P((null == e ? void 0 : e.plainText) || "")
            })).filter(Boolean), m = P(a.author || t.author || y || (b.length > 1 ? b[1] : "")), T = P(a.dynasty || t.dynasty || f || (b.length > 1 ? b[0] : "")), x = P(a.source || t.source || g || (null == i ? void 0 : i.title) || ""), w = P(a.intro || t.summary || t.subtitle || (null == i ? void 0 : i.subtitle) || ""), S = [T, m].filter(Boolean).join(" · "), k = !p && x && x !== l ? x : "", I = w && w !== l && w !== S ? w : "", C = new Set([l, T, m, k].filter(Boolean)), E = o.filter((function(e) {
                return (!d || e.sourceRow !== d.sourceRow) && !h.some((function(t) {
                    return t.sourceRow === e.sourceRow
                }))
            })); E.length;) {
            var N, F = P((null === (N = E[0]) || void 0 === N ? void 0 : N.plainText) || "");
            if (!F || !C.has(F)) break;
            E.shift()
        }
        return {
            title: l,
            titleLine: d,
            metaLines: h,
            source: k,
            intro: I,
            metaLine: S,
            displayArticle: E
        }
    }
    Page(r(r(r({}, S), x), {}, {
        data: r(r(r({}, T), w), {}, {
            showPinyin: !0,
            showWordTranslation: !1,
            showSentenceTranslation: !1,
            directReadPoetry: !0,
            showSettingPanel: !1,
            singleLoopCount: 1,
            loopIntervalSeconds: .5,
            autoScroll: !0,
            isFavorite: !1,
            favId: 0,
            isPlaying: !1,
            title: "",
            subtitle: "",
            audioSrc: "",
            coverUrl: "",
            displayDuration: "",
            article: [],
            displayArticle: [],
            poetryTitleLine: null,
            poetryMetaLines: [],
            tags: [],
            categoryInfo: null,
            courseInfo: null,
            episodes: [],
            activeEpisodeId: "",
            episodeLoading: !1,
            loadError: "",
            showEpisodeList: !1,
            poetryNavTitle: "古诗词",
            poetryMetaLine: "",
            poetrySource: "",
            poetryIntro: "",
            pinyinScheme: "",
            rubyDisplayStyle: "annotated"
        }),
        navBack: o.navBack,
        onLoad: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, y.openAudioContentShareMenu)(), this.loadSetting(), this.ensureVideoContext(), this.pinyinScheme = (0, o.getPinyinScheme)() || "", this.poetryRouteMeta = {
                author: k(e.author),
                dynasty: k(e.dynasty),
                source: k(e.source),
                intro: k(e.intro || e.summary)
            }, this.episodeUuid = (0, v.getEpisodeUuidFromOptions)(e), this.accessToken = e.accessToken || "";
            try {
                this.accessToken = this.accessToken ? decodeURIComponent(this.accessToken) : ""
            } catch (e) {}
            if (!this.episodeUuid) return wx.showToast({
                title: "缺少内容ID",
                icon: "none"
            }), void this.setData({
                loadError: "缺少内容ID",
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            });
            this.setData({
                pinyinScheme: this.pinyinScheme,
                rubyDisplayStyle: (0, o.getRubyDisplayStyle)() || "annotated"
            }), this.fetchEpisodeDetail(!0)
        },
        onUnload: function() {
            var e;
            this.stopParagraphPlayback(!1), null === (e = this.destroyAudioManager) || void 0 === e || e.call(this)
        },
        paragraphPlaybackTimer: null,
        currentAudioSrc: "",
        shouldAutoPause: !1,
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: "POETRY_PLAY_SETTING_KEY",
                success: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.data,
                        a = void 0 === i ? {} : i,
                        n = {};
                    if ("boolean" == typeof a.showPinyin && (n.showPinyin = a.showPinyin), "boolean" == typeof a.directReadPoetry && (n.directReadPoetry = a.directReadPoetry), Number.isFinite(Number(a.singleLoopCount)) && (n.singleLoopCount = Math.max(1, Math.min(5, Math.floor(Number(a.singleLoopCount))))), Number.isFinite(Number(a.loopIntervalSeconds))) {
                        var r = Math.max(0, Math.min(5, Number(a.loopIntervalSeconds)));
                        n.loopIntervalSeconds = Number(r.toFixed(1))
                    }
                    Object.keys(n).length && e.setData(n)
                }
            })
        },
        saveSetting: function() {
            var e = this.data,
                t = e.showPinyin,
                i = e.directReadPoetry,
                a = e.singleLoopCount,
                n = e.loopIntervalSeconds;
            wx.setStorage({
                key: "POETRY_PLAY_SETTING_KEY",
                data: {
                    showPinyin: t,
                    directReadPoetry: i,
                    singleLoopCount: Math.max(1, Math.min(5, Math.floor(Number(a) || 1))),
                    loopIntervalSeconds: Math.max(0, Math.min(5, Number(n) || 0))
                }
            })
        },
        onPullDownRefresh: function() {
            this.fetchEpisodeDetail(!1)
        },
        fetchAudioContentPayload: function() {
            var e = this;
            return n(a().mark((function t() {
                var i, n, r, o, l, d;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, s.default)(e.episodeUuid, {
                                accessToken: e.accessToken
                            });
                        case 2:
                            if (n = t.sent, r = n.code, o = n.data, 0 === r && o) {
                                t.next = 7;
                                break
                            }
                            throw new Error("AUDIO_CONTENT_NOT_FOUND");
                        case 7:
                            if (!0 !== o.needVip) {
                                t.next = 9;
                                break
                            }
                            return t.abrupt("return", (0, v.normalizeAudioContentDetailPayload)(o, e.episodeUuid));
                        case 9:
                            if (l = (null === (i = o.collection) || void 0 === i ? void 0 : i.id) || "") {
                                t.next = 12;
                                break
                            }
                            return t.abrupt("return", (0, v.normalizeAudioContentDetailPayload)(o, e.episodeUuid));
                        case 12:
                            return t.prev = 12, t.next = 15, (0, u.default)(l, {
                                item: e.episodeUuid,
                                accessToken: e.accessToken
                            });
                        case 15:
                            if (0 !== (d = t.sent).code || !d.data) {
                                t.next = 18;
                                break
                            }
                            return t.abrupt("return", (0, v.normalizeAudioContentCollectionPayload)(d.data, e.episodeUuid));
                        case 18:
                            t.next = 23;
                            break;
                        case 20:
                            t.prev = 20, t.t0 = t.catch(12), console.error("fetchAudioContentCollectionDetail error", t.t0);
                        case 23:
                            return t.abrupt("return", (0, v.normalizeAudioContentDetailPayload)(o, e.episodeUuid));
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [12, 20]
                ])
            })))()
        },
        applyEpisodePayload: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = t.courseInfo || null,
                a = Array.isArray(t.episodes) ? t.episodes : [],
                n = t.currentEpisode || {},
                o = Array.isArray(n.article) ? n.article : [],
                s = n.id || this.episodeUuid,
                u = F(n, i, this.poetryRouteMeta, o),
                l = u.titleLine ? N(u.titleLine, this.pinyinScheme || this.data.pinyinScheme || "") : null,
                d = (Array.isArray(u.metaLines) ? u.metaLines : []).map((function(t) {
                    return N(t, e.pinyinScheme || e.data.pinyinScheme || "")
                })),
                c = (Array.isArray(u.displayArticle) ? u.displayArticle : []).map((function(t) {
                    return N(t, e.pinyinScheme || e.data.pinyinScheme || "")
                }));
            this.stopParagraphPlayback(!1), this.initSubtitles(o), this.episodeUuid = s;
            var h = u.title || n.title || (null == i ? void 0 : i.title) || "",
                p = u.metaLine || n.subtitle || (null == i ? void 0 : i.subtitle) || "",
                v = Math.max(0, Number(n.duration) || 0),
                y = P(u.source || (null == i ? void 0 : i.title) || "古诗词");
            this.setData(r({
                title: h,
                subtitle: p,
                displayArticle: c,
                poetryTitleLine: l,
                poetryMetaLines: d,
                tags: Array.isArray(n.tags) ? n.tags : [],
                categoryInfo: n.categoryInfo || null,
                audioSrc: n.audioSrc || "",
                coverUrl: n.coverUrl || "",
                courseInfo: i,
                episodes: a,
                activeEpisodeId: s,
                episodeLoading: !1,
                loadError: "",
                displayDuration: n.displayDuration || "",
                poetryNavTitle: y,
                poetryMetaLine: u.metaLine,
                poetrySource: u.source,
                poetryIntro: u.intro
            }, this.buildAudioPlaybackState(v)), (function() {
                e.ensureVideoContext(), e.setupBackgroundAudio(n.audioSrc || "", {
                    title: h,
                    subtitle: p,
                    coverUrl: n.coverUrl || "",
                    singer: (null == i ? void 0 : i.title) || "粤语派"
                }), e.loadFavoriteState()
            }))
        },
        fetchEpisodeDetail: function() {
            var e = arguments,
                t = this;
            return n(a().mark((function i() {
                var n, s, u, l, d;
                return a().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (n = e.length > 0 && void 0 !== e[0] && e[0], t.episodeUuid) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return n && wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), t.setData({
                                episodeLoading: !0,
                                loadError: ""
                            }), i.prev = 5, i.next = 8, t.fetchAudioContentPayload();
                        case 8:
                            if ((s = i.sent) && s.currentEpisode) {
                                i.next = 11;
                                break
                            }
                            throw new Error("AUDIO_CONTENT_NOT_FOUND");
                        case 11:
                            if (!0 !== s.currentEpisode.needVip) {
                                i.next = 15;
                                break
                            }
                            return wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.setData({
                                episodeLoading: !1,
                                favId: 0,
                                isFavorite: !1
                            }), i.abrupt("return");
                        case 15:
                            t.applyEpisodePayload(s), i.next = 27;
                            break;
                        case 18:
                            i.prev = 18, i.t0 = i.catch(5), console.error("fetchEpisodeDetail error", i.t0), t.stopParagraphPlayback(!1), t.initSubtitles([]), u = "AUDIO_CONTENT_NOT_FOUND" === (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.message) ? "未找到诗词内容" : "加载失败", t.setupBackgroundAudio("", {}), t.setData(r({
                                episodeLoading: !1,
                                loadError: u,
                                title: "",
                                subtitle: "",
                                audioSrc: "",
                                coverUrl: "",
                                displayArticle: [],
                                poetryTitleLine: null,
                                poetryMetaLines: [],
                                courseInfo: null,
                                episodes: [],
                                activeEpisodeId: "",
                                tags: [],
                                categoryInfo: null,
                                displayDuration: "",
                                poetryMetaLine: "",
                                poetrySource: "",
                                poetryIntro: "",
                                favId: 0,
                                isFavorite: !1
                            }, t.buildAudioPlaybackState(0))), wx.showToast({
                                title: u,
                                icon: "none"
                            });
                        case 27:
                            return i.prev = 27, n && wx.hideLoading(), null === (l = (d = wx).stopPullDownRefresh) || void 0 === l || l.call(d), i.finish(27);
                        case 31:
                        case "end":
                            return i.stop()
                    }
                }), i, null, [
                    [5, 18, 27, 31]
                ])
            })))()
        },
        onSettingChange: function(e) {
            var a = this,
                n = e && e.currentTarget && e.currentTarget.dataset || {},
                r = e ? e.detail : void 0,
                o = n.setting || (null == r ? void 0 : r.setting);
            if (o) {
                var s = "object" === i(r) && null !== r && "value" in r ? r.value : r;
                "boolean" == typeof s && this.setData(t({}, o, s), (function() {
                    a.saveSetting()
                }))
            }
        },
        onLoopCountChange: function(e) {
            var t = this,
                a = "object" === i(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                n = Math.max(1, Math.min(5, Math.floor(Number(a) || 1)));
            this.setData({
                singleLoopCount: n
            }, (function() {
                t.saveSetting()
            }))
        },
        onLoopIntervalChange: function(e) {
            var t = this,
                a = "object" === i(null == e ? void 0 : e.detail) && null !== e.detail && "value" in e.detail ? e.detail.value : null == e ? void 0 : e.detail,
                n = Math.max(0, Math.min(5, Number(a) || 0));
            this.setData({
                loopIntervalSeconds: Number(n.toFixed(1))
            }, (function() {
                t.saveSetting()
            }))
        },
        toggleSettingPanel: function() {
            this.setData({
                showSettingPanel: !this.data.showSettingPanel
            })
        },
        handleParagraphTap: function(e) {
            var t, i = e && e.currentTarget && e.currentTarget.dataset || {},
                a = "number" == typeof i.row ? i.row : Number(i.row);
            if (Number.isFinite(a))
                if (this.data.audioSrc) {
                    var n = null === (t = this.data.article) || void 0 === t ? void 0 : t[a];
                    if (n)
                        if (this.data.paragraphPlayback && this.data.paragraphPlayback.row === a) this.stopParagraphPlayback(!0);
                        else {
                            var r = this.resolveParagraphTimes(n),
                                o = r.start,
                                s = r.end;
                            if ("number" != typeof o || "number" != typeof s || s <= o) this.seekToParagraph(a);
                            else {
                                var u = Number.isFinite(Number(this.data.singleLoopCount)) ? Math.max(1, Math.min(5, Math.floor(Number(this.data.singleLoopCount)))) : 1;
                                this.startParagraphPlayback({
                                    row: a,
                                    start: o,
                                    end: s,
                                    loops: u
                                })
                            }
                        }
                } else wx.showToast({
                    title: "暂无音频",
                    icon: "none"
                })
        },
        handleToggleFavorite: function() {
            var e = this.data.favId;
            e ? this.doDeleteFavorite(e) : this.doCreateFavorite()
        },
        getFavoriteTarget: function() {
            var e;
            return (0, f.buildAudioContentFavoriteTarget)({
                targetUuid: this.episodeUuid,
                category: (null === (e = this.data.categoryInfo) || void 0 === e ? void 0 : e.slug) || "",
                categoryInfo: this.data.categoryInfo,
                fallbackBizType: "poetry"
            })
        },
        loadFavoriteState: function() {
            var e = this;
            return n(a().mark((function t() {
                var i, n, r, o, s;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ((i = e.getFavoriteTarget()).targetUuid) {
                                t.next = 4;
                                break
                            }
                            return e.setData({
                                favId: 0,
                                isFavorite: !1
                            }), t.abrupt("return");
                        case 4:
                            return n = i.targetUuid, t.prev = 5, t.next = 8, (0, d.default)(i);
                        case 8:
                            if (r = t.sent, o = r.code, s = r.data, n === e.episodeUuid) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return");
                        case 13:
                            if (0 !== o || null == s || !s.id) {
                                t.next = 16;
                                break
                            }
                            return e.setData({
                                favId: s.id,
                                isFavorite: !0
                            }), t.abrupt("return");
                        case 16:
                            e.setData({
                                favId: 0,
                                isFavorite: !1
                            }), t.next = 24;
                            break;
                        case 19:
                            if (t.prev = 19, t.t0 = t.catch(5), n === e.episodeUuid) {
                                t.next = 23;
                                break
                            }
                            return t.abrupt("return");
                        case 23:
                            e.setData({
                                favId: 0,
                                isFavorite: !1
                            });
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [5, 19]
                ])
            })))()
        },
        doCreateFavorite: function() {
            var e = this;
            return n(a().mark((function t() {
                var i, n, r, o;
                return a().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ((i = e.getFavoriteTarget()).targetUuid) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return t.prev = 3, t.next = 6, (0, l.default)(i);
                        case 6:
                            if (n = t.sent, r = n.code, o = n.data, i.targetUuid === e.episodeUuid) {
                                t.next = 11;
                                break
                            }
                            return t.abrupt("return");
                        case 11:
                            if (0 !== r || null == o || !o.id) {
                                t.next = 15;
                                break
                            }
                            return e.setData({
                                favId: o.id,
                                isFavorite: !0
                            }), wx.showToast({
                                title: "收藏成功",
                                icon: "none"
                            }), t.abrupt("return");
                        case 15:
                            100002 === r && (e.loadFavoriteState(), wx.showToast({
                                title: "已收藏过",
                                icon: "none"
                            })), t.next = 21;
                            break;
                        case 18:
                            t.prev = 18, t.t0 = t.catch(3), wx.showToast({
                                title: "收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 21:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [3, 18]
                ])
            })))()
        },
        doDeleteFavorite: function(e) {
            var t = this;
            return n(a().mark((function i() {
                var n, r, o;
                return a().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.prev = 0, i.next = 3, (0, c.default)(e);
                        case 3:
                            n = i.sent, r = n.code, o = n.data, 0 === r && null != o && o.removed && (t.setData({
                                favId: 0,
                                isFavorite: !1
                            }), wx.showToast({
                                title: "已取消收藏",
                                icon: "none"
                            })), i.next = 12;
                            break;
                        case 9:
                            i.prev = 9, i.t0 = i.catch(0), wx.showToast({
                                title: "取消收藏失败，请稍后重试",
                                icon: "none"
                            });
                        case 12:
                        case "end":
                            return i.stop()
                    }
                }), i, null, [
                    [0, 9]
                ])
            })))()
        },
        getDirectReadPoetryStartMs: function() {
            if (!this.data.directReadPoetry) return 0;
            var e = Array.isArray(this.data.displayArticle) ? this.data.displayArticle[0] : null,
                t = Number(null == e ? void 0 : e.start);
            return !Number.isFinite(t) || t <= 0 ? 0 : t
        },
        handlePlayToggle: function() {
            var e;
            if (this.data.audioSrc) {
                var t = null === (e = this.getAudioManager) || void 0 === e ? void 0 : e.call(this);
                if (t) {
                    var i;
                    if (this.currentAudioSrc !== this.data.audioSrc) this.setupBackgroundAudio(this.data.audioSrc, {
                        title: this.data.title,
                        subtitle: this.data.subtitle,
                        coverUrl: this.data.coverUrl,
                        singer: (null === (i = this.data.courseInfo) || void 0 === i ? void 0 : i.title) || "粤语派"
                    });
                    if (this.data.isPlaying) t.pause();
                    else {
                        var a = this.getDirectReadPoetryStartMs();
                        this.playbackEnded || this.data.currentTimeMs <= 0 && a > 0 || this.data.currentTimeMs >= Math.max(0, (Number(this.data.audioDurationMs) || 0) - 400) ? this.restartBackgroundAudio(a) : t.play()
                    }
                }
            } else wx.showToast({
                title: "暂无音频",
                icon: "none"
            })
        },
        handleStopLoop: function() {
            this.stopParagraphPlayback(!0)
        },
        handleEpisodeSelect: function(e) {
            var t, i = e && e.currentTarget && e.currentTarget.dataset || {},
                a = (null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.uuid) || i.uuid;
            a && a !== this.episodeUuid && (this.stopParagraphPlayback(!1), this.setupBackgroundAudio("", {}), this.episodeUuid = a, this.handleEpisodeListClose(), this.fetchEpisodeDetail(!0))
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
        scrollSubtitleToCenter: function() {
            var t = wx.createSelectorQuery();
            t.select(".active").boundingClientRect(), t.selectViewport().scrollOffset(), t.exec((function(t) {
                var i = e(t || [], 2),
                    a = i[0],
                    n = i[1];
                if (a && "number" == typeof a.top) {
                    var r = "number" == typeof(null == n ? void 0 : n.scrollTop) ? n.scrollTop : 0,
                        o = "number" == typeof(null == n ? void 0 : n.height) ? n.height : 0;
                    o || "function" != typeof wx.getSystemInfoSync || (o = wx.getSystemInfoSync().windowHeight || 0);
                    var s = r + a.top - o / 2 + a.height / 2;
                    wx.pageScrollTo({
                        scrollTop: Math.max(0, s),
                        duration: 240
                    })
                }
            }))
        },
        getLoopIntervalMs: function() {
            return 1e3 * Math.max(0, Math.min(5, Number(this.data.loopIntervalSeconds) || 0))
        },
        onShareAppMessage: function() {
            var e;
            return (0, y.buildAudioContentShareAppMessage)({
                pagePath: "/pages/poetry/detail/index",
                uuid: this.episodeUuid,
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语诗词",
                coverUrl: this.data.coverUrl,
                fallbackTitle: "粤语诗词"
            })
        },
        onShareTimeline: function() {
            var e;
            return (0, y.buildAudioContentShareTimeline)({
                uuid: this.episodeUuid,
                title: this.data.title || (null === (e = this.data.courseInfo) || void 0 === e ? void 0 : e.title) || "粤语诗词",
                coverUrl: this.data.coverUrl,
                fallbackTitle: "粤语诗词"
            })
        }
    }));
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/poetry/detail/index.js'
});
require("pages/poetry/detail/index.js");