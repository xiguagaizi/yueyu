$gwx_XC_79 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_79 || [];

        function gz$gwx_XC_79_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'ruby-token ruby-token--'],
                    [
                        [7],
                        [3, 'variant']
                    ],
                    [3, ' ruby-token--display-'],
                    [
                        [7],
                        [3, 'resolvedDisplayStyle']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'active']
                        ],
                        [1, 'ruby-token--active'],
                        [1, '']
                    ]
                ])
                Z([3, 'onPinyinTap'])
                Z([a, [3, 'ruby-token__pinyin-wrap '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'blur']
                        ],
                        [1, 'ruby-token__pinyin-wrap--blur'],
                        [1, '']
                    ]
                ])
                Z([3, 'ruby-token__pinyin'])
                Z([
                    [7],
                    [3, 'pinyinInlineStyle']
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'safeAlternativeTokens']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'safeAlternativeTokens']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'altIndex'])
                Z([3, 'alt'])
                Z([
                    [7],
                    [3, 'safeAlternativeTokens']
                ])
                Z([3, 'key'])
                Z([3, 'ruby-token__alternative'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'resolvedDisplayStyle']
                    ],
                    [1, 'basic']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'alt']
                        ],
                        [3, 'pinyinParts']
                    ],
                    [3, 'initial']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'alt']
                        ],
                        [3, 'pinyinParts']
                    ],
                    [3, 'final']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'resolvedDisplayStyle']
                        ],
                        [1, 'split-flat']
                    ],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'alt']
                            ],
                            [3, 'pinyinParts']
                        ],
                        [3, 'tone']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!=='],
                        [
                            [7],
                            [3, 'resolvedDisplayStyle']
                        ],
                        [1, 'basic']
                    ],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'alt']
                            ],
                            [3, 'pinyinParts']
                        ],
                        [3, 'tone']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'alt']
                            ],
                            [3, 'pinyinParts']
                        ],
                        [3, 'final']
                    ],
                    [
                        [7],
                        [3, 'showToneConnector']
                    ]
                ])
                Z([
                    [2, '<'],
                    [
                        [7],
                        [3, 'altIndex']
                    ],
                    [
                        [2, '-'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'safeAlternativeTokens']
                            ],
                            [3, 'length']
                        ],
                        [1, 1]
                    ]
                ])
                Z([
                    [7],
                    [3, 'safePinyinParts']
                ])
                Z(z[11])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'initial']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'final']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'resolvedDisplayStyle']
                        ],
                        [1, 'split-flat']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'safePinyinParts']
                        ],
                        [3, 'tone']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!=='],
                        [
                            [7],
                            [3, 'resolvedDisplayStyle']
                        ],
                        [1, 'basic']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'safePinyinParts']
                        ],
                        [3, 'tone']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'safePinyinParts']
                        ],
                        [3, 'final']
                    ],
                    [
                        [7],
                        [3, 'showToneConnector']
                    ]
                ])
                Z([
                    [7],
                    [3, 'showText']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_79 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_79 = true;
        var x = ['./components/ruby-token/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_79_1()
            var c47 = _n('view')
            _rz(z, c47, 'class', 0, e, s, gg)
            var o67 = _mz(z, 'view', ['catchtap', 1, 'class', 1], [], e, s, gg)
            var c77 = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
            var o87 = _v()
            _(c77, o87)
            if (_oz(z, 5, e, s, gg)) {
                o87.wxVkey = 1
                var l97 = _v()
                _(o87, l97)
                var a07 = function(eB8, tA8, bC8, gg) {
                    var xE8 = _n('view')
                    _rz(z, xE8, 'class', 10, eB8, tA8, gg)
                    var oF8 = _v()
                    _(xE8, oF8)
                    if (_oz(z, 11, eB8, tA8, gg)) {
                        oF8.wxVkey = 1
                    } else {
                        oF8.wxVkey = 2
                        var hI8 = _v()
                        _(oF8, hI8)
                        if (_oz(z, 12, eB8, tA8, gg)) {
                            hI8.wxVkey = 1
                        }
                        var oJ8 = _v()
                        _(oF8, oJ8)
                        if (_oz(z, 13, eB8, tA8, gg)) {
                            oJ8.wxVkey = 1
                        }
                        hI8.wxXCkey = 1
                        oJ8.wxXCkey = 1
                    }
                    var fG8 = _v()
                    _(xE8, fG8)
                    if (_oz(z, 14, eB8, tA8, gg)) {
                        fG8.wxVkey = 1
                    } else if (_oz(z, 15, eB8, tA8, gg)) {
                        fG8.wxVkey = 2
                        var cK8 = _v()
                        _(fG8, cK8)
                        if (_oz(z, 16, eB8, tA8, gg)) {
                            cK8.wxVkey = 1
                        }
                        cK8.wxXCkey = 1
                    }
                    var cH8 = _v()
                    _(xE8, cH8)
                    if (_oz(z, 17, eB8, tA8, gg)) {
                        cH8.wxVkey = 1
                    }
                    oF8.wxXCkey = 1
                    fG8.wxXCkey = 1
                    cH8.wxXCkey = 1
                    _(bC8, xE8)
                    return bC8
                }
                l97.wxXCkey = 2
                _2z(z, 8, a07, e, s, gg, l97, 'alt', 'altIndex', 'key')
            } else if (_oz(z, 18, e, s, gg)) {
                o87.wxVkey = 2
                var oL8 = _v()
                _(o87, oL8)
                if (_oz(z, 19, e, s, gg)) {
                    oL8.wxVkey = 1
                } else {
                    oL8.wxVkey = 2
                    var aN8 = _v()
                    _(oL8, aN8)
                    if (_oz(z, 20, e, s, gg)) {
                        aN8.wxVkey = 1
                    }
                    var tO8 = _v()
                    _(oL8, tO8)
                    if (_oz(z, 21, e, s, gg)) {
                        tO8.wxVkey = 1
                    }
                    aN8.wxXCkey = 1
                    tO8.wxXCkey = 1
                }
                var lM8 = _v()
                _(o87, lM8)
                if (_oz(z, 22, e, s, gg)) {
                    lM8.wxVkey = 1
                } else if (_oz(z, 23, e, s, gg)) {
                    lM8.wxVkey = 2
                    var eP8 = _v()
                    _(lM8, eP8)
                    if (_oz(z, 24, e, s, gg)) {
                        eP8.wxVkey = 1
                    }
                    eP8.wxXCkey = 1
                }
                oL8.wxXCkey = 1
                lM8.wxXCkey = 1
            } else {
                o87.wxVkey = 3
            }
            o87.wxXCkey = 1
            _(o67, c77)
            _(c47, o67)
            var h57 = _v()
            _(c47, h57)
            if (_oz(z, 25, e, s, gg)) {
                h57.wxVkey = 1
            }
            h57.wxXCkey = 1
            _(r, c47)
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
                g = "$gwx_XC_79";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_79();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ruby-token/index.wxml'] = [$gwx_XC_79, './components/ruby-token/index.wxml'];
else __wxAppCode__['components/ruby-token/index.wxml'] = $gwx_XC_79('./components/ruby-token/index.wxml');;
__wxRoute = "components/ruby-token/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/ruby-token/index.js";
define("components/ruby-token/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/objectSpread2");
    require("../../@babel/runtime/helpers/Arrayincludes");

    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = String(t || "");
        return /[A-Za-z]/.test(e) ? e.replace(/([A-Za-z])(?=[A-Za-z])/g, "$1".concat("⁠")) : e
    }

    function n() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return n ? t(t({}, n), {}, {
            initial: e(n.initial || ""),
            final: e(n.final || "")
        }) : null
    }

    function i() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return Array.isArray(i) ? i.map((function(i) {
            return t(t({}, i), {}, {
                displayPinyin: e((null == i ? void 0 : i.displayPinyin) || ""),
                pinyinParts: n(null == i ? void 0 : i.pinyinParts)
            })
        })) : []
    }
    Component({
        observers: {
            "pinyinFontSize,toneFontSize,textFontSize,toneStyle,pinyinStyle,displayStyle,displayPinyin,pinyinParts,alternativeTokens,pinyinColor,textColor,pinyinFontWeight,textFontWeight,pinyinFontFamily,textFontFamily": function() {
                this.syncInlineStyles()
            }
        },
        options: {
            styleIsolation: "apply-shared"
        },
        properties: {
            text: {
                type: String,
                value: ""
            },
            displayPinyin: {
                type: String,
                value: ""
            },
            pinyinParts: {
                type: Object,
                value: null
            },
            alternativeTokens: {
                type: Array,
                value: []
            },
            variant: {
                type: String,
                value: "default"
            },
            blur: {
                type: Boolean,
                value: !1
            },
            active: {
                type: Boolean,
                value: !1
            },
            showText: {
                type: Boolean,
                value: !0
            },
            underlineText: {
                type: Boolean,
                value: !1
            },
            displayStyle: {
                type: String,
                value: "annotated"
            },
            toneStyle: {
                type: String,
                value: "annotated"
            },
            pinyinStyle: {
                type: String,
                value: "split"
            },
            pinyinFontSize: {
                type: Number,
                value: 0
            },
            toneFontSize: {
                type: Number,
                value: 0
            },
            textFontSize: {
                type: Number,
                value: 0
            },
            pinyinColor: {
                type: String,
                value: ""
            },
            textColor: {
                type: String,
                value: ""
            },
            pinyinFontWeight: {
                type: String,
                value: ""
            },
            textFontWeight: {
                type: String,
                value: ""
            },
            pinyinFontFamily: {
                type: String,
                value: ""
            },
            textFontFamily: {
                type: String,
                value: ""
            }
        },
        data: {
            pinyinInlineStyle: "",
            toneInlineStyle: "",
            toneNumberInlineStyle: "",
            textInlineStyle: "",
            resolvedDisplayStyle: "annotated",
            resolvedToneStyle: "annotated",
            showToneConnector: !0,
            safeDisplayPinyin: "",
            safePinyinParts: null,
            safeAlternativeTokens: []
        },
        lifetimes: {
            attached: function() {
                this.syncInlineStyles()
            }
        },
        methods: {
            syncInlineStyles: function() {
                var t = Number(this.properties.pinyinFontSize || 0),
                    o = Number(this.properties.toneFontSize || 0),
                    a = Number(this.properties.textFontSize || 0),
                    l = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            i = String(t || "").trim();
                        return ["annotated", "split-flat", "basic"].includes(i) ? i : "basic" === e ? "basic" : "plain" === n ? "split-flat" : "annotated"
                    }(this.properties.displayStyle, this.properties.pinyinStyle, this.properties.toneStyle),
                    r = "annotated" === l ? "annotated" : "plain",
                    p = "annotated" === l,
                    s = [];
                t > 0 && (s.push("font-size:".concat(t, "rpx")), s.push("min-height:".concat(Math.max(Math.round(1.1 * t), t), "rpx"))), this.properties.pinyinColor && s.push("color:".concat(this.properties.pinyinColor)), this.properties.pinyinFontWeight && s.push("font-weight:".concat(this.properties.pinyinFontWeight)), this.properties.pinyinFontFamily && s.push("font-family:".concat(this.properties.pinyinFontFamily));
                var y = s.length ? "".concat(s.join(";"), ";") : "",
                    u = o > 0 ? o : t > 0 ? Math.max(18, t - 4) : 0,
                    h = t > 0 && "plain" !== r ? "min-height:".concat(Math.max(Math.round(1.1 * t), t), "rpx;") : "",
                    c = u > 0 ? "font-size:".concat(u, "rpx;") : "",
                    v = [];
                a > 0 && v.push("font-size:".concat(a, "rpx")), this.properties.textColor && v.push("color:".concat(this.properties.textColor)), this.properties.textFontWeight && v.push("font-weight:".concat(this.properties.textFontWeight)), this.properties.textFontFamily && v.push("font-family:".concat(this.properties.textFontFamily));
                var S = v.length ? "".concat(v.join(";"), ";") : "";
                this.setData({
                    pinyinInlineStyle: y,
                    toneInlineStyle: h,
                    toneNumberInlineStyle: c,
                    textInlineStyle: S,
                    resolvedDisplayStyle: l,
                    resolvedToneStyle: r,
                    showToneConnector: p,
                    safeDisplayPinyin: e(this.properties.displayPinyin),
                    safePinyinParts: n(this.properties.pinyinParts),
                    safeAlternativeTokens: i(this.properties.alternativeTokens)
                })
            },
            onPinyinTap: function() {
                this.triggerEvent("pinyintap")
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/ruby-token/index.js'
});
require("components/ruby-token/index.js");