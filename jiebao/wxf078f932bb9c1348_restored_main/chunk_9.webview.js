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
                Z([3, 'ruby-token__basic-pinyin'])
                Z(z[4])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'alt']
                    ],
                    [3, 'displayPinyin']
                ]])
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
                Z([3, 'ruby-token__initial'])
                Z([a, [
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
                ]])
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
                Z([a, [3, 'ruby-token__final '],
                    [
                        [2, '?:'],
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
                            [3, 'initial']
                        ],
                        [1, 'ruby-token__final--with-initial'],
                        [1, '']
                    ]
                ])
                Z([a, [
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
                ]])
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
                Z([a, [3, 'ruby-token__tone-number ruby-token__tone-number--'], z[0][4]])
                Z([
                    [7],
                    [3, 'toneNumberInlineStyle']
                ])
                Z([a, [
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
                ]])
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
                Z([a, [3, 'ruby-token__tone-wrap ruby-token__tone-wrap--'],
                    [
                        [7],
                        [3, 'resolvedToneStyle']
                    ], z[0][5],
                    [
                        [2, '?:'],
                        [
                            [2, '||'],
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
                                [3, 'initial']
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
                                [3, 'final']
                            ]
                        ],
                        [1, 'ruby-token__tone-wrap--with-text'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'toneInlineStyle']
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
                Z([a, [3, 'ruby-token__tone-connector ruby-token__tone-connector--'],
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
                Z([a, [3, 'ruby-token__tone ruby-token__tone--'], z[29][2],
                    [3, ' ruby-token__tone--'], z[26][2]
                ])
                Z(z[27])
                Z([a, z[22][1], z[0][4]])
                Z(z[23])
                Z([a, z[24][1]])
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
                Z([3, 'ruby-token__separator'])
                Z([3, '/'])
                Z([
                    [7],
                    [3, 'safePinyinParts']
                ])
                Z(z[11])
                Z(z[12])
                Z(z[4])
                Z([a, [
                    [7],
                    [3, 'safeDisplayPinyin']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'initial']
                ])
                Z(z[16])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'initial']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'final']
                ])
                Z([a, z[19][1],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'safePinyinParts']
                            ],
                            [3, 'initial']
                        ],
                        [1, 'ruby-token__final--with-initial'],
                        [1, '']
                    ]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'final']
                ]])
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
                Z([a, z[22][1], z[0][4]])
                Z(z[23])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'safePinyinParts']
                    ],
                    [3, 'tone']
                ]])
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
                Z([a, z[26][1], z[26][2], z[0][5],
                    [
                        [2, '?:'],
                        [
                            [2, '||'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'safePinyinParts']
                                ],
                                [3, 'initial']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'safePinyinParts']
                                ],
                                [3, 'final']
                            ]
                        ],
                        [1, 'ruby-token__tone-wrap--with-text'],
                        [1, '']
                    ]
                ])
                Z(z[27])
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
                Z([a, z[29][1],
                    [
                        [6],
                        [
                            [7],
                            [3, 'safePinyinParts']
                        ],
                        [3, 'tone']
                    ]
                ])
                Z([a, z[30][1], z[57][2], z[30][3], z[26][2]])
                Z(z[27])
                Z([a, z[22][1], z[0][4]])
                Z(z[23])
                Z([a, z[52][1]])
                Z([3, 'ruby-token__raw'])
                Z(z[4])
                Z([a, z[42][1]])
                Z([
                    [7],
                    [3, 'showText']
                ])
                Z([a, [3, 'ruby-token__text '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'underlineText']
                        ],
                        [1, 'ruby-token__text--underline'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'textInlineStyle']
                ])
                Z([a, [
                    [7],
                    [3, 'text']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_79_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_79_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_79 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_79 = true;
        var x = ['./components/ruby-token/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_79_1()
            var h7WB = _n('view')
            _rz(z, h7WB, 'class', 0, e, s, gg)
            var c9WB = _mz(z, 'view', ['catchtap', 1, 'class', 1], [], e, s, gg)
            var o0WB = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
            var lAXB = _v()
            _(o0WB, lAXB)
            if (_oz(z, 5, e, s, gg)) {
                lAXB.wxVkey = 1
                var aBXB = _v()
                _(lAXB, aBXB)
                var tCXB = function(bEXB, eDXB, oFXB, gg) {
                    var oHXB = _n('view')
                    _rz(z, oHXB, 'class', 10, bEXB, eDXB, gg)
                    var fIXB = _v()
                    _(oHXB, fIXB)
                    if (_oz(z, 11, bEXB, eDXB, gg)) {
                        fIXB.wxVkey = 1
                        var oLXB = _mz(z, 'text', ['class', 12, 'style', 1], [], bEXB, eDXB, gg)
                        var cMXB = _oz(z, 14, bEXB, eDXB, gg)
                        _(oLXB, cMXB)
                        _(fIXB, oLXB)
                    } else {
                        fIXB.wxVkey = 2
                        var oNXB = _v()
                        _(fIXB, oNXB)
                        if (_oz(z, 15, bEXB, eDXB, gg)) {
                            oNXB.wxVkey = 1
                            var aPXB = _n('text')
                            _rz(z, aPXB, 'class', 16, bEXB, eDXB, gg)
                            var tQXB = _oz(z, 17, bEXB, eDXB, gg)
                            _(aPXB, tQXB)
                            _(oNXB, aPXB)
                        }
                        var lOXB = _v()
                        _(fIXB, lOXB)
                        if (_oz(z, 18, bEXB, eDXB, gg)) {
                            lOXB.wxVkey = 1
                            var eRXB = _n('text')
                            _rz(z, eRXB, 'class', 19, bEXB, eDXB, gg)
                            var bSXB = _oz(z, 20, bEXB, eDXB, gg)
                            _(eRXB, bSXB)
                            _(lOXB, eRXB)
                        }
                        oNXB.wxXCkey = 1
                        lOXB.wxXCkey = 1
                    }
                    var cJXB = _v()
                    _(oHXB, cJXB)
                    if (_oz(z, 21, bEXB, eDXB, gg)) {
                        cJXB.wxVkey = 1
                        var oTXB = _mz(z, 'text', ['class', 22, 'style', 1], [], bEXB, eDXB, gg)
                        var xUXB = _oz(z, 24, bEXB, eDXB, gg)
                        _(oTXB, xUXB)
                        _(cJXB, oTXB)
                    } else if (_oz(z, 25, bEXB, eDXB, gg)) {
                        cJXB.wxVkey = 2
                        var oVXB = _mz(z, 'view', ['class', 26, 'style', 1], [], bEXB, eDXB, gg)
                        var fWXB = _v()
                        _(oVXB, fWXB)
                        if (_oz(z, 28, bEXB, eDXB, gg)) {
                            fWXB.wxVkey = 1
                            var cXXB = _n('view')
                            _rz(z, cXXB, 'class', 29, bEXB, eDXB, gg)
                            _(fWXB, cXXB)
                        }
                        var hYXB = _mz(z, 'view', ['class', 30, 'style', 1], [], bEXB, eDXB, gg)
                        var oZXB = _mz(z, 'text', ['class', 32, 'style', 1], [], bEXB, eDXB, gg)
                        var c1XB = _oz(z, 34, bEXB, eDXB, gg)
                        _(oZXB, c1XB)
                        _(hYXB, oZXB)
                        _(oVXB, hYXB)
                        fWXB.wxXCkey = 1
                        _(cJXB, oVXB)
                    }
                    var hKXB = _v()
                    _(oHXB, hKXB)
                    if (_oz(z, 35, bEXB, eDXB, gg)) {
                        hKXB.wxVkey = 1
                        var o2XB = _n('text')
                        _rz(z, o2XB, 'class', 36, bEXB, eDXB, gg)
                        var l3XB = _oz(z, 37, bEXB, eDXB, gg)
                        _(o2XB, l3XB)
                        _(hKXB, o2XB)
                    }
                    fIXB.wxXCkey = 1
                    cJXB.wxXCkey = 1
                    hKXB.wxXCkey = 1
                    _(oFXB, oHXB)
                    return oFXB
                }
                aBXB.wxXCkey = 2
                _2z(z, 8, tCXB, e, s, gg, aBXB, 'alt', 'altIndex', 'key')
            } else if (_oz(z, 38, e, s, gg)) {
                lAXB.wxVkey = 2
                var a4XB = _v()
                _(lAXB, a4XB)
                if (_oz(z, 39, e, s, gg)) {
                    a4XB.wxVkey = 1
                    var e6XB = _mz(z, 'text', ['class', 40, 'style', 1], [], e, s, gg)
                    var b7XB = _oz(z, 42, e, s, gg)
                    _(e6XB, b7XB)
                    _(a4XB, e6XB)
                } else {
                    a4XB.wxVkey = 2
                    var o8XB = _v()
                    _(a4XB, o8XB)
                    if (_oz(z, 43, e, s, gg)) {
                        o8XB.wxVkey = 1
                        var o0XB = _n('text')
                        _rz(z, o0XB, 'class', 44, e, s, gg)
                        var fAYB = _oz(z, 45, e, s, gg)
                        _(o0XB, fAYB)
                        _(o8XB, o0XB)
                    }
                    var x9XB = _v()
                    _(a4XB, x9XB)
                    if (_oz(z, 46, e, s, gg)) {
                        x9XB.wxVkey = 1
                        var cBYB = _n('text')
                        _rz(z, cBYB, 'class', 47, e, s, gg)
                        var hCYB = _oz(z, 48, e, s, gg)
                        _(cBYB, hCYB)
                        _(x9XB, cBYB)
                    }
                    o8XB.wxXCkey = 1
                    x9XB.wxXCkey = 1
                }
                var t5XB = _v()
                _(lAXB, t5XB)
                if (_oz(z, 49, e, s, gg)) {
                    t5XB.wxVkey = 1
                    var oDYB = _mz(z, 'text', ['class', 50, 'style', 1], [], e, s, gg)
                    var cEYB = _oz(z, 52, e, s, gg)
                    _(oDYB, cEYB)
                    _(t5XB, oDYB)
                } else if (_oz(z, 53, e, s, gg)) {
                    t5XB.wxVkey = 2
                    var oFYB = _mz(z, 'view', ['class', 54, 'style', 1], [], e, s, gg)
                    var lGYB = _v()
                    _(oFYB, lGYB)
                    if (_oz(z, 56, e, s, gg)) {
                        lGYB.wxVkey = 1
                        var aHYB = _n('view')
                        _rz(z, aHYB, 'class', 57, e, s, gg)
                        _(lGYB, aHYB)
                    }
                    var tIYB = _mz(z, 'view', ['class', 58, 'style', 1], [], e, s, gg)
                    var eJYB = _mz(z, 'text', ['class', 60, 'style', 1], [], e, s, gg)
                    var bKYB = _oz(z, 62, e, s, gg)
                    _(eJYB, bKYB)
                    _(tIYB, eJYB)
                    _(oFYB, tIYB)
                    lGYB.wxXCkey = 1
                    _(t5XB, oFYB)
                }
                a4XB.wxXCkey = 1
                t5XB.wxXCkey = 1
            } else {
                lAXB.wxVkey = 3
                var oLYB = _mz(z, 'text', ['class', 63, 'style', 1], [], e, s, gg)
                var xMYB = _oz(z, 65, e, s, gg)
                _(oLYB, xMYB)
                _(lAXB, oLYB)
            }
            lAXB.wxXCkey = 1
            _(c9WB, o0WB)
            _(h7WB, c9WB)
            var o8WB = _v()
            _(h7WB, o8WB)
            if (_oz(z, 66, e, s, gg)) {
                o8WB.wxVkey = 1
                var oNYB = _mz(z, 'text', ['class', 67, 'style', 1], [], e, s, gg)
                var fOYB = _oz(z, 69, e, s, gg)
                _(oNYB, fOYB)
                _(o8WB, oNYB)
            }
            o8WB.wxXCkey = 1
            _(r, h7WB)
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
                g = "$gwx_XC_79";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_79();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ruby-token/index.wxml'] = [$gwx_XC_79, './components/ruby-token/index.wxml'];
else __wxAppCode__['components/ruby-token/index.wxml'] = $gwx_XC_79('./components/ruby-token/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/ruby-token/index.wxss'] = setCssToHead([".", [1], "ruby-token{display:-webkit-inline-flex;display:inline-flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start;min-width:0;vertical-align:top}\n.", [1], "ruby-token,.", [1], "ruby-token__pinyin-wrap{-webkit-align-items:center;align-items:center}\n.", [1], "ruby-token__pinyin-wrap{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;transition:opacity .22s ease,-webkit-filter .22s ease;transition:filter .22s ease,opacity .22s ease;transition:filter .22s ease,opacity .22s ease,-webkit-filter .22s ease;-webkit-transition:-webkit-filter .22s ease,opacity .22s ease;will-change:filter,opacity}\n.", [1], "ruby-token__pinyin-wrap--blur{filter:blur(", [0, 5], ");-webkit-filter:blur(", [0, 5], ");opacity:.82}\n.", [1], "ruby-token__pinyin{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-family:Inter,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:300;-webkit-justify-content:center;justify-content:center;line-height:1.15}\n.", [1], "ruby-token__initial{color:#b37a3c}\n.", [1], "ruby-token__final{color:#0089b6}\n.", [1], "ruby-token__basic-pinyin{color:#5f7098;line-height:inherit}\n.", [1], "ruby-token__alternative,.", [1], "ruby-token__separator{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex}\n.", [1], "ruby-token__separator{color:#8d99b0;padding:0 ", [0, 10], "}\n.", [1], "ruby-token__tone-wrap{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;position:relative}\n.", [1], "ruby-token__tone-wrap--with-text{margin-left:", [0, 0], "}\n.", [1], "ruby-token__tone-connector{-webkit-align-self:flex-end;align-self:flex-end;background-color:#d8524e;border-radius:", [0, 999], ";height:", [0, 2], ";margin-left:", [0, 0], ";margin-right:", [0, 0], ";opacity:.8;-webkit-transform-origin:left center;transform-origin:left center;width:", [0, 10], "}\n.", [1], "ruby-token__tone-connector--1{-webkit-transform:translateY(", [0, -28], ") rotate(0deg);transform:translateY(", [0, -28], ") rotate(0deg)}\n.", [1], "ruby-token__tone-connector--2{-webkit-transform:translateY(", [0, -20], ") rotate(-25deg);transform:translateY(", [0, -20], ") rotate(-25deg)}\n.", [1], "ruby-token__tone-connector--3{-webkit-transform:translateY(", [0, -20], ") rotate(0deg);transform:translateY(", [0, -20], ") rotate(0deg)}\n.", [1], "ruby-token__tone-connector--4{-webkit-transform:translateY(", [0, -12], ") rotate(28deg);transform:translateY(", [0, -12], ") rotate(28deg)}\n.", [1], "ruby-token__tone-connector--5{-webkit-transform:translateY(", [0, -8], ") rotate(-18deg);transform:translateY(", [0, -8], ") rotate(-18deg)}\n.", [1], "ruby-token__tone-connector--6{-webkit-transform:translateY(", [0, -12], ");transform:translateY(", [0, -12], ")}\n.", [1], "ruby-token__tone{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;line-height:1;margin-left:", [0, 0], ";min-height:", [0, 44], "}\n.", [1], "ruby-token__tone--1{-webkit-transform:translateY(", [0, -8], ");transform:translateY(", [0, -8], ")}\n.", [1], "ruby-token__tone--2{-webkit-transform:translateY(", [0, -6], ");transform:translateY(", [0, -6], ")}\n.", [1], "ruby-token__tone--4,.", [1], "ruby-token__tone--6{-webkit-transform:translateY(", [0, 8], ");transform:translateY(", [0, 8], ")}\n.", [1], "ruby-token__tone-number{color:#d8524e;font-size:", [0, 24], ";line-height:1;-webkit-transform:translateY(", [0, -8], ");transform:translateY(", [0, -8], ")}\n.", [1], "ruby-token__tone-number--split-flat{line-height:inherit;-webkit-transform:translateY(", [0, 2], ");transform:translateY(", [0, 2], ");vertical-align:initial}\n.", [1], "ruby-token__tone-number--basic{color:#5f7098;-webkit-transform:none;transform:none}\n.", [1], "ruby-token__raw{color:#666;font-weight:300}\n.", [1], "ruby-token__text{text-align:center}\n.", [1], "ruby-token__text--underline{border-bottom:", [0, 1], " dashed #aaa}\n.", [1], "ruby-token--char-card .", [1], "ruby-token__pinyin-wrap{min-height:", [0, 30], "}\n.", [1], "ruby-token--char-card .", [1], "ruby-token__pinyin{font-size:", [0, 28], ";min-height:", [0, 30], "}\n.", [1], "ruby-token--char-card .", [1], "ruby-token__tone{min-height:", [0, 30], "}\n.", [1], "ruby-token--char-card .", [1], "ruby-token__text{color:#1f2f57;font-size:", [0, 52], ";font-weight:700;line-height:1;margin-top:", [0, 10], "}\n.", [1], "ruby-token--word-inline .", [1], "ruby-token__pinyin-wrap{min-height:", [0, 30], "}\n.", [1], "ruby-token--word-inline .", [1], "ruby-token__pinyin{font-size:", [0, 24], ";min-height:", [0, 30], "}\n.", [1], "ruby-token--word-inline .", [1], "ruby-token__tone{min-height:", [0, 30], "}\n.", [1], "ruby-token--word-inline .", [1], "ruby-token__tone-number{font-size:", [0, 21], ";-webkit-transform:translateY(", [0, -4], ");transform:translateY(", [0, -4], ")}\n.", [1], "ruby-token--word-inline .", [1], "ruby-token__text{color:#1f2f57;font-size:", [0, 29], ";font-weight:600;line-height:1.15;margin-top:", [0, 4], "}\n.", [1], "ruby-token--active .", [1], "ruby-token__initial{color:#8e5b2b}\n.", [1], "ruby-token--active .", [1], "ruby-token__basic-pinyin,.", [1], "ruby-token--active .", [1], "ruby-token__final,.", [1], "ruby-token--active .", [1], "ruby-token__raw,.", [1], "ruby-token--active .", [1], "ruby-token__tone-number--basic{color:#2f5fda}\n.", [1], "ruby-token--active .", [1], "ruby-token__text{color:#17357f}\n", ], undefined, {
        path: "./components/ruby-token/index.wxss"
    });
}