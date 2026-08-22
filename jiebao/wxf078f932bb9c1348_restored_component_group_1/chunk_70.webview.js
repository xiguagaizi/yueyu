/* [OBFUSCATED] status=partial techniques=hex-literal */
$gwx_XC_68 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_68 || [];

        function gz$gwx_XC_68_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1 = [];
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
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'tags']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tags']
                        ],
                        [3, 'length']
                    ]
                ])
                Z([3, 'tag-list'])
                Z([
                    [7],
                    [3, 'tags']
                ])
                Z([3, 'index'])
                Z([3, 'tag-chip'])
                Z([a, [
                    [2, '||'],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'name']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'slug']
                        ]
                    ],
                    [1, '标签']
                ]])
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
                Z([3, 'article'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'autoScroll']
                        ],
                        [
                            [2, '>='],
                            [
                                [7],
                                [3, 'currentRow']
                            ],
                            [1, 0]
                        ]
                    ],
                    [
                        [2, '+'],
                        [1, 'el_'],
                        [
                            [7],
                            [3, 'currentRow']
                        ]
                    ],
                    [1, '']
                ])
                Z([
                    [7],
                    [3, 'scrollTop']
                ])
                Z([3, 'false'])
                Z([3, 'height:100%;'])
                Z([3, 'content'])
                Z([a, [3, 'padding-bottom:'],
                    [
                        [7],
                        [3, 'articlePaddingBottom']
                    ],
                    [3, 'px;']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'title']
                    ],
                    [
                        [7],
                        [3, 'subtitle']
                    ]
                ])
                Z([3, 'article-head'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'article-head__title'])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([
                    [7],
                    [3, 'subtitle']
                ])
                Z([3, 'article-head__subtitle'])
                Z([a, [
                    [7],
                    [3, 'subtitle']
                ]])
                Z([3, 'row'])
                Z([3, 'line'])
                Z([
                    [7],
                    [3, 'article']
                ])
                Z(z[29])
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
                Z([a, [3, 'el_'], z[36]])
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
                Z(z[38])
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
                Z([3, 'mandarin'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'line']
                    ],
                    [3, 'translation']
                ]])
                Z([3, 'article-empty'])
                Z([
                    [7],
                    [3, 'episodeLoading']
                ])
                Z([3, '字幕加载中...'])
                Z([
                    [7],
                    [3, 'loadError']
                ])
                Z([a, [
                    [7],
                    [3, 'loadError']
                ]])
                Z([3, '暂无字幕'])
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
                Z(z[51])
                Z([
                    [7],
                    [3, 'isFavorite']
                ])
                Z([
                    [7],
                    [3, 'isPlaying']
                ])
                Z(z[53])
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
                    [1, '音频素材']
                ])
                Z([
                    [7],
                    [3, 'autoScroll']
                ])
                Z(z[63])
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
                Z(z[44])
                Z([
                    [7],
                    [3, 'showSentenceTranslation']
                ])
                Z(z[45])
                Z([
                    [7],
                    [3, 'singleLoopCount']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_68_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_68_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_68 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_68 = true;
        var x = ['./pages/audio/detail/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_68_1()
            var x7EB = _n('van-sticky')
            var o8EB = _mz(z, 'van-nav-bar', ['back', -1, 'leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'customStyle', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(x7EB, o8EB)
            _(r, x7EB)
            var f9EB = _n('view')
            _rz(z, f9EB, 'class', 6, e, s, gg)
            var c0EB = _v()
            _(f9EB, c0EB)
            if (_oz(z, 7, e, s, gg)) {
                c0EB.wxVkey = 1
                var oBFB = _n('view')
                _rz(z, oBFB, 'class', 8, e, s, gg)
                var cCFB = _v()
                _(oBFB, cCFB)
                var oDFB = function(aFFB, lEFB, tGFB, gg) {
                    var bIFB = _n('view')
                    _rz(z, bIFB, 'class', 11, aFFB, lEFB, gg)
                    var oJFB = _oz(z, 12, aFFB, lEFB, gg)
                    _(bIFB, oJFB)
                    _(tGFB, bIFB)
                    return tGFB
                }
                cCFB.wxXCkey = 2
                _2z(z, 9, oDFB, e, s, gg, cCFB, 'item', 'index', 'index')
                _(c0EB, oBFB)
            }
            var hAFB = _v()
            _(f9EB, hAFB)
            if (_oz(z, 13, e, s, gg)) {
                hAFB.wxVkey = 1
                var xKFB = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 14, 'scrollIntoView', 1, 'scrollTop', 2, 'scrollWithAnimation', 3, 'style', 4], [], e, s, gg)
                var oLFB = _mz(z, 'view', ['class', 19, 'style', 1], [], e, s, gg)
                var fMFB = _v()
                _(oLFB, fMFB)
                if (_oz(z, 21, e, s, gg)) {
                    fMFB.wxVkey = 1
                    var cNFB = _n('view')
                    _rz(z, cNFB, 'class', 22, e, s, gg)
                    var hOFB = _v()
                    _(cNFB, hOFB)
                    if (_oz(z, 23, e, s, gg)) {
                        hOFB.wxVkey = 1
                        var cQFB = _n('view')
                        _rz(z, cQFB, 'class', 24, e, s, gg)
                        var oRFB = _oz(z, 25, e, s, gg)
                        _(cQFB, oRFB)
                        _(hOFB, cQFB)
                    }
                    var oPFB = _v()
                    _(cNFB, oPFB)
                    if (_oz(z, 26, e, s, gg)) {
                        oPFB.wxVkey = 1
                        var lSFB = _n('view')
                        _rz(z, lSFB, 'class', 27, e, s, gg)
                        var aTFB = _oz(z, 28, e, s, gg)
                        _(lSFB, aTFB)
                        _(oPFB, lSFB)
                    }
                    hOFB.wxXCkey = 1
                    oPFB.wxXCkey = 1
                    _(fMFB, cNFB)
                }
                var tUFB = _v()
                _(oLFB, tUFB)
                var eVFB = function(oXFB, bWFB, xYFB, gg) {
                    var f1FB = _mz(z, 'view', ['bind:longtap', 33, 'bindtap', 1, 'class', 2, 'data-row', 3, 'id', 4], [], oXFB, bWFB, gg)
                    var h3FB = _v()
                    _(f1FB, h3FB)
                    var o4FB = function(o6FB, c5FB, l7FB, gg) {
                        var t9FB = _mz(z, 'ruby-segment', ['displayStyle', 42, 'item', 1, 'showPinyin', 2, 'showWordTranslation', 3, 'variant', 4], [], o6FB, c5FB, gg)
                        _(l7FB, t9FB)
                        return l7FB
                    }
                    h3FB.wxXCkey = 4
                    _2z(z, 40, o4FB, oXFB, bWFB, gg, h3FB, 'segment', 'col', 'col')
                    var c2FB = _v()
                    _(f1FB, c2FB)
                    if (_oz(z, 47, oXFB, bWFB, gg)) {
                        c2FB.wxVkey = 1
                        var e0FB = _n('view')
                        _rz(z, e0FB, 'class', 48, oXFB, bWFB, gg)
                        var bAGB = _oz(z, 49, oXFB, bWFB, gg)
                        _(e0FB, bAGB)
                        _(c2FB, e0FB)
                    }
                    c2FB.wxXCkey = 1
                    _(xYFB, f1FB)
                    return xYFB
                }
                tUFB.wxXCkey = 4
                _2z(z, 31, eVFB, e, s, gg, tUFB, 'line', 'row', 'row')
                fMFB.wxXCkey = 1
                _(xKFB, oLFB)
                _(hAFB, xKFB)
            } else {
                hAFB.wxVkey = 2
                var oBGB = _n('view')
                _rz(z, oBGB, 'class', 50, e, s, gg)
                var xCGB = _v()
                _(oBGB, xCGB)
                if (_oz(z, 51, e, s, gg)) {
                    xCGB.wxVkey = 1
                    var oDGB = _n('text')
                    var fEGB = _oz(z, 52, e, s, gg)
                    _(oDGB, fEGB)
                    _(xCGB, oDGB)
                } else if (_oz(z, 53, e, s, gg)) {
                    xCGB.wxVkey = 2
                    var cFGB = _n('text')
                    var hGGB = _oz(z, 54, e, s, gg)
                    _(cFGB, hGGB)
                    _(xCGB, cFGB)
                } else {
                    xCGB.wxVkey = 3
                    var oHGB = _n('text')
                    var cIGB = _oz(z, 55, e, s, gg)
                    _(oHGB, cIGB)
                    _(xCGB, oHGB)
                }
                xCGB.wxXCkey = 1
                _(hAFB, oBGB)
            }
            c0EB.wxXCkey = 1
            hAFB.wxXCkey = 1
            hAFB.wxXCkey = 3
            _(r, f9EB)
            var oJGB = _mz(z, 'audio-player-bar', ['audioSrc', 56, 'bind:favorite', 1, 'bind:playtoggle', 2, 'bind:progresschange', 3, 'bind:progressdrag', 4, 'bind:progressdragend', 5, 'bind:progressdragstart', 6, 'bind:setting', 7, 'bind:stoploop', 8, 'currentTimeLabel', 9, 'durationLabel', 10, 'episodeLoading', 11, 'isFavorite', 12, 'isPlaying', 13, 'loadError', 14, 'paragraphPlaybackLabel', 15, 'progressValue', 16, 'title', 17], [], e, s, gg)
            _(r, oJGB)
            var lKGB = _mz(z, 'subtitle-settings-sheet', ['autoScroll', 74, 'bind:close', 1, 'bind:loopcountchange', 2, 'bind:loopintervalchange', 3, 'bind:settingchange', 4, 'enablePinyinOption', 5, 'enableSentenceTranslationOption', 6, 'enableWordTranslationOption', 7, 'loopIntervalSeconds', 8, 'show', 9, 'showPinyin', 10, 'showSentenceTranslation', 11, 'showWordTranslation', 12, 'singleLoopCount', 13], [], e, s, gg)
            _(r, lKGB)
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
                g = "$gwx_XC_68";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_68();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/audio/detail/index.wxml'] = [$gwx_XC_68, './pages/audio/detail/index.wxml'];
else __wxAppCode__['pages/audio/detail/index.wxml'] = $gwx_XC_68('./pages/audio/detail/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/audio/detail/index.wxss'] = setCssToHead(["body{background-color:#f8f9fa;-webkit-flex-direction:column;flex-direction:column;height:100%}\n.", [1], "container,body{display:-webkit-flex;display:flex;overflow-x:hidden}\n.", [1], "container{box-sizing:border-box;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;min-height:0;padding-bottom:", [0, 260], ";width:100%}\n.", [1], "tag-list{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 12], ";margin:", [0, 24], " ", [0, 24], " ", [0, 8], "}\n.", [1], "tag-chip{background:rgba(15,118,110,.12);border-radius:", [0, 999], ";color:#0f766e;font-size:", [0, 24], ";padding:", [0, 6], " ", [0, 18], "}\n.", [1], "article{background:transparent;border-radius:0;box-shadow:none;-webkit-flex:1;flex:1;margin:", [0, 12], " 0 0;overflow:hidden}\n.", [1], "article,.", [1], "content{box-sizing:border-box;width:100%}\n.", [1], "content{color:#1a1a1a;line-height:1.8;padding:", [0, 8], " ", [0, 12], " ", [0, 128], "}\n.", [1], "article-head{border-bottom:", [0, 2], " solid rgba(15,23,42,.06);margin:0 ", [0, 12], " ", [0, 24], ";padding:", [0, 8], " ", [0, 4], " ", [0, 18], "}\n.", [1], "article-head__title{color:#111827;font-size:", [0, 40], ";font-weight:700;line-height:1.45;word-break:break-word}\n.", [1], "article-head__subtitle{color:#6b7280;font-size:", [0, 26], ";line-height:1.7;margin-top:", [0, 10], ";word-break:break-word}\n.", [1], "paragraph{border-left:", [0, 4], " solid transparent;color:#1a1a1a;font-size:", [0, 40], ";font-weight:400;letter-spacing:", [0, 1], ";line-height:2.6;margin-bottom:", [0, 32], ";padding:", [0, 18], " ", [0, 14], ";position:relative;text-align:left;transition:all .3s ease}\n.", [1], "paragraph:last-child{margin-bottom:0}\n.", [1], "paragraph:not(:last-child)::after{background:linear-gradient(90deg,transparent,rgba(0,0,0,.05),transparent);border-radius:", [0, 999], ";bottom:", [0, -12], ";content:\"\";height:", [0, 2], ";left:", [0, 12], ";position:absolute;right:", [0, 12], "}\n.", [1], "active{background:#f4f7ff;border-left:", [0, 4], " solid #597ef7;box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(30,60,160,.08);color:#151515;font-weight:500}\n.", [1], "paragraph--compact{line-height:2.25;margin-bottom:", [0, 24], ";padding:", [0, 14], " ", [0, 12], "}\n.", [1], "paragraph--compact:not(:last-child)::after{bottom:", [0, -8], "}\n.", [1], "mandarin{color:#5f6368;font-size:", [0, 28], ";line-height:1.8;margin-top:", [0, 12], "}\n.", [1], "article-empty{color:#94a3b8;font-size:", [0, 28], ";padding:", [0, 96], " ", [0, 24], " ", [0, 300], ";text-align:center}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/audio/detail/index.wxss:1:106)", {
        path: "./pages/audio/detail/index.wxss"
    });
}