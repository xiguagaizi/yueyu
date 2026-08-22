$gwx_XC_75 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_75 || [];

        function gz$gwx_XC_75_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_75_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_75_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_75_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '重点字词'])
                Z([3, 'wordidx'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'meaning'])
                Z([3, 'play'])
                Z([3, 'audio-card'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'contoneseArr']
                ])
                Z([3, 'word'])
                Z([
                    [7],
                    [3, 'wordidx']
                ])
                Z([3, 'token'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'wordTokens']
                ])
                Z([3, 'key'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'token']
                        ],
                        [3, 'rubyToken']
                    ],
                    [3, 'alternativeTokens']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'token']
                        ],
                        [3, 'rubyToken']
                    ],
                    [3, 'displayPinyin']
                ])
                Z([
                    [7],
                    [3, 'rubyDisplayStyle']
                ])
                Z([3, '40'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'token']
                        ],
                        [3, 'rubyToken']
                    ],
                    [3, 'pinyinParts']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'token']
                        ],
                        [3, 'rubyToken']
                    ],
                    [3, 'text']
                ])
                Z([3, '60'])
                Z(z[19])
                Z([3, 'word-inline'])
                Z([3, '#5b72eb'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'isPlaying']
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'currWordIdx']
                                ],
                                [
                                    [7],
                                    [3, 'wordidx']
                                ]
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currMode']
                            ],
                            [1, 'word']
                        ]
                    ],
                    [1, 'stop-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z([1, 55])
                Z(z[25])
                Z([3, 'question-o'])
                Z([3, '24'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'usage']
                    ],
                    [3, 'length']
                ])
                Z([3, 'section example-section'])
                Z(z[25])
                Z([3, 'chat-o'])
                Z(z[30])
                Z([3, 'usageItem'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'usage']
                ])
                Z([3, 'index'])
                Z(z[8])
                Z([3, 'example-item'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'usageItem']
                    ],
                    [3, 'cantonese']
                ])
                Z([3, 'example'])
                Z(z[12])
                Z([3, 'cantonese'])
                Z(z[25])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'isPlaying']
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'currWordIdx']
                                ],
                                [
                                    [7],
                                    [3, 'wordidx']
                                ]
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currExampleIdx']
                            ],
                            [
                                [7],
                                [3, 'index']
                            ]
                        ]
                    ],
                    [1, 'stop-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z(z[30])
                Z(z[13])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'usageItem']
                    ],
                    [3, 'cantoneseTokens']
                ])
                Z(z[15])
                Z(z[16])
                Z(z[17])
                Z(z[18])
                Z([3, '32'])
                Z(z[20])
                Z(z[21])
                Z([3, '35'])
                Z([3, '30'])
                Z(z[24])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'tips']
                ])
                Z(z[25])
                Z([3, 'description-o'])
                Z(z[30])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_75_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_75_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_75 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_75 = true;
        var x = ['./pages/vocabulary/detail/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_75_1()
            var b94 = _n('van-sticky')
            var o04 = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(b94, o04)
            _(r, b94)
            var xA5 = _v()
            _(r, xA5)
            var oB5 = function(cD5, fC5, hE5, gg) {
                var lI5 = _mz(z, 'view', ['bind:tap', 8, 'class', 1, 'data-item', 2, 'data-mode', 3, 'data-wordidx', 4], [], cD5, fC5, gg)
                var aJ5 = _v()
                _(lI5, aJ5)
                var tK5 = function(bM5, eL5, oN5, gg) {
                    var oP5 = _mz(z, 'ruby-token', ['alternativeTokens', 16, 'displayPinyin', 1, 'displayStyle', 2, 'pinyinFontSize', 3, 'pinyinParts', 4, 'text', 5, 'textFontSize', 6, 'toneFontSize', 7, 'variant', 8], [], bM5, eL5, gg)
                    _(oN5, oP5)
                    return oN5
                }
                aJ5.wxXCkey = 4
                _2z(z, 14, tK5, cD5, fC5, gg, aJ5, 'token', 'index', 'key')
                var fQ5 = _mz(z, 'van-icon', ['color', 25, 'name', 1, 'size', 2], [], cD5, fC5, gg)
                _(lI5, fQ5)
                _(hE5, lI5)
                var cR5 = _mz(z, 'van-icon', ['color', 28, 'name', 1, 'size', 2], [], cD5, fC5, gg)
                _(hE5, cR5)
                var cG5 = _v()
                _(hE5, cG5)
                if (_oz(z, 31, cD5, fC5, gg)) {
                    cG5.wxVkey = 1
                    var hS5 = _n('view')
                    _rz(z, hS5, 'class', 32, cD5, fC5, gg)
                    var oT5 = _mz(z, 'van-icon', ['color', 33, 'name', 1, 'size', 2], [], cD5, fC5, gg)
                    _(hS5, oT5)
                    var cU5 = _v()
                    _(hS5, cU5)
                    var oV5 = function(aX5, lW5, tY5, gg) {
                        var b15 = _mz(z, 'view', ['bind:tap', 39, 'class', 1, 'data-exampleidx', 2, 'data-item', 3, 'data-mode', 4, 'data-wordidx', 5], [], aX5, lW5, gg)
                        var o25 = _n('view')
                        _rz(z, o25, 'class', 45, aX5, lW5, gg)
                        var x35 = _mz(z, 'van-icon', ['color', 46, 'name', 1, 'size', 2], [], aX5, lW5, gg)
                        _(o25, x35)
                        var o45 = _v()
                        _(o25, o45)
                        var f55 = function(h75, c65, o85, gg) {
                            var o05 = _mz(z, 'ruby-token', ['alternativeTokens', 52, 'displayPinyin', 1, 'displayStyle', 2, 'pinyinFontSize', 3, 'pinyinParts', 4, 'text', 5, 'textFontSize', 6, 'toneFontSize', 7, 'variant', 8], [], h75, c65, gg)
                            _(o85, o05)
                            return o85
                        }
                        o45.wxXCkey = 4
                        _2z(z, 50, f55, aX5, lW5, gg, o45, 'token', 'index', 'key')
                        _(b15, o25)
                        _(tY5, b15)
                        return tY5
                    }
                    cU5.wxXCkey = 4
                    _2z(z, 37, oV5, cD5, fC5, gg, cU5, 'usageItem', 'index', 'index')
                    _(cG5, hS5)
                }
                var oH5 = _v()
                _(hE5, oH5)
                if (_oz(z, 61, cD5, fC5, gg)) {
                    oH5.wxVkey = 1
                    var lA6 = _mz(z, 'van-icon', ['color', 62, 'name', 1, 'size', 2], [], cD5, fC5, gg)
                    _(oH5, lA6)
                }
                cG5.wxXCkey = 1
                cG5.wxXCkey = 3
                oH5.wxXCkey = 1
                oH5.wxXCkey = 3
                return hE5
            }
            xA5.wxXCkey = 4
            _2z(z, 6, oB5, e, s, gg, xA5, 'item', 'wordidx', 'meaning')
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
                g = "$gwx_XC_75";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_75();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/vocabulary/detail/index.wxml'] = [$gwx_XC_75, './pages/vocabulary/detail/index.wxml'];
else __wxAppCode__['pages/vocabulary/detail/index.wxml'] = $gwx_XC_75('./pages/vocabulary/detail/index.wxml');;
__wxRoute = "pages/vocabulary/detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/vocabulary/detail/index.js";
define("pages/vocabulary/detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../@babel/runtime/helpers/toConsumableArray"),
        a = (e = require("../../../api/getVocabulary")) && e.__esModule ? e : {
            default: e
        },
        i = require("../../../commons/utils"),
        o = require("../../../commons/config"),
        s = require("../../../components/ruby-token/shared");
    Page({
        navBack: i.navBack,
        data: {
            isPlaying: !1,
            currWordIdx: -1,
            currExampleIdx: -1,
            currMode: "",
            list: [],
            pinyinScheme: "",
            rubyDisplayStyle: "annotated"
        },
        parseCantonesePairs: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = /(.+?)\(([a-zA-Z]+\d?)\)/g;
            return r(String(e || "").matchAll(t)).map((function(e) {
                return [e[1], e[2]]
            }))
        },
        decoratePairs: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.pinyinScheme;
            return (Array.isArray(e) ? e : []).map((function(e, n) {
                return {
                    key: "".concat(e[0] || "", "_").concat(e[1] || "", "_").concat(n),
                    rubyToken: (0, s.buildRubyToken)(e[0] || "", e[1] || "", t)
                }
            }))
        },
        formatData: function(e) {
            var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.pinyinScheme,
                a = r(e),
                i = a.map((function(e) {
                    var r = t.parseCantonesePairs(e.cantonese),
                        a = (Array.isArray(e.usage) ? e.usage : []).map((function(e) {
                            var r = t.parseCantonesePairs(e.cantonese);
                            return {
                                chinese: e.chinese || "",
                                audio: e.audioUrl || "",
                                cantonese: r,
                                cantoneseTokens: t.decoratePairs(r, n)
                            }
                        }));
                    return {
                        word: r.map((function(e) {
                            return e[0]
                        })).join(""),
                        contoneseArr: r,
                        wordTokens: t.decoratePairs(r, n),
                        meaning: e.meaning || "",
                        tips: e.tips || "",
                        usage: a
                    }
                }));
            return i
        },
        onLoad: function(e) {
            var r = this;
            return n(t().mark((function n() {
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r.id = e.id, r.id) {
                                t.next = 4;
                                break
                            }
                            return wx.showModal({
                                content: "参数错误",
                                showCancel: !1,
                                complete: i.navBack
                            }), t.abrupt("return");
                        case 4:
                            r.setData({
                                pinyinScheme: r.getCurrentPinyinScheme(),
                                rubyDisplayStyle: r.getCurrentRubyDisplayStyle()
                            }), r.loadData(), r.AUDIO_BASE = (0, i.getAudioBasePath)();
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        loadData: function() {
            var e = this;
            return n(t().mark((function n() {
                var r, i, o, s;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, a.default)(e.id);
                        case 2:
                            i = t.sent, o = i.code, s = i.data, 0 === o && null != s && null !== (r = s.item) && void 0 !== r && r.length && (e.rawList = Array.isArray(s.item) ? s.item : [], e.setData({
                                list: e.formatData(e.rawList, e.data.pinyinScheme)
                            }));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        getCurrentPinyinScheme: function() {
            return (0, i.getPinyinScheme)() || ""
        },
        getCurrentRubyDisplayStyle: function() {
            return (0, i.getRubyDisplayStyle)() || "annotated"
        },
        refreshDisplayPreferences: function() {
            var e = this.getCurrentPinyinScheme(),
                t = this.getCurrentRubyDisplayStyle();
            if (e !== this.data.pinyinScheme || t !== this.data.rubyDisplayStyle) {
                var n = {};
                e !== this.data.pinyinScheme && (n.pinyinScheme = e, n.list = this.formatData(this.rawList || [], e)), t !== this.data.rubyDisplayStyle && (n.rubyDisplayStyle = t), this.setData(n)
            }
        },
        resetCurrent: function() {
            this.setData({
                isPlaying: !1,
                currExampleIdx: -1,
                currWordIdx: -1,
                currMode: ""
            })
        },
        play: function(e) {
            var t = this,
                n = this,
                r = n.data,
                a = r.isPlaying,
                o = r.currWordIdx,
                s = r.currExampleIdx,
                u = e.currentTarget.dataset,
                c = u.item,
                l = u.mode,
                d = u.wordidx,
                y = u.exampleidx;
            if (!a || (i.playAudio.stop(), i.playAudio.destroy(), n.resetCurrent(), o !== d || s !== y)) {
                var p = c.map((function(e) {
                        return e[1]
                    })),
                    h = function e(r) {
                        var a = function() {
                                (r += 1) >= p.length ? n.resetCurrent() : i.playAudio.t = setTimeout((function() {
                                    e(r)
                                }), 0)
                            },
                            o = p[r];
                        if (!1 !== /^\w+\d{1}$/.test(o)) {
                            var s = "".concat(t.AUDIO_BASE, "/").concat(o, ".mp3");
                            (0, i.playAudio)(s, a, a), n.setData({
                                isPlaying: !0,
                                currWordIdx: d,
                                currExampleIdx: y,
                                currMode: l
                            })
                        } else a()
                    };
                h(0)
            }
        },
        navToNotebookAdd: function(e) {
            var t = e.currentTarget.dataset.word || "",
                n = String(t).trim();
            n && wx.navigateTo({
                url: "/pages/tools/vocab-notebook/add/index?word=".concat(encodeURIComponent(n))
            })
        },
        onReady: function() {},
        onShow: function() {
            this.refreshDisplayPreferences()
        },
        onHide: function() {},
        onUnload: function() {
            i.playAudio.stop(), i.playAudio.destroy()
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {
            var e, t, n = "粤语重点词汇学习";
            return null !== (e = this.data.list) && void 0 !== e && null !== (t = e[0]) && void 0 !== t && t.contoneseArr && (n = "“".concat(this.data.list[0].contoneseArr.map((function(e) {
                return e[0]
            })).join(""), "”是什么意思")), {
                title: n,
                imageUrl: o.SHARE_IMG_URLS.VOC
            }
        },
        onShareTimeline: function() {
            var e, t, n = "粤语重点词汇学习";
            return null !== (e = this.data.list) && void 0 !== e && null !== (t = e[0]) && void 0 !== t && t.contoneseArr && (n = "“".concat(this.data.list[0].contoneseArr.map((function(e) {
                return e[0]
            })).join(""), "”是什么意思")), {
                title: n,
                imageUrl: o.SHARE_IMG_URLS.VOC
            }
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/vocabulary/detail/index.js'
});
require("pages/vocabulary/detail/index.js");