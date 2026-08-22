$gwx_XC_63 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_63 || [];

        function gz$gwx_XC_63_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([3, 'restore'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, 'background:#f8f9fa;'])
                Z([3, '返回'])
                Z([3, '恢复购买'])
                Z([3, ''])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'normalProducts']
                    ],
                    [3, 'length']
                ])
                Z([3, 'container'])
                Z([3, 'header'])
                Z([3, 'vip-icon'])
                Z([3, '/images/vip.png'])
                Z([3, 'title'])
                Z([3, '开通会员'])
                Z([3, 'subtitle'])
                Z([3, '解锁全部高级功能'])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'countDownConf']
                        ],
                        [3, 'duration']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'countDownConf']
                        ],
                        [3, 'endTime']
                    ]
                ])
                Z([3, 'onChange'])
                Z([3, 'finished'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'countDownConf']
                    ],
                    [3, 'countDownDesc']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'countDownConf']
                    ],
                    [3, 'duration']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'countDownConf']
                    ],
                    [3, 'endTime']
                ])
                Z([3, 'plans'])
                Z([
                    [7],
                    [3, 'normalProducts']
                ])
                Z([3, 'productIdentifier'])
                Z([3, 'selectPlan'])
                Z([a, [3, 'plan-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selectedIndex']
                            ],
                            [
                                [7],
                                [3, 'index']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'productIdentifier']
                    ],
                    [
                        [7],
                        [3, 'recomand']
                    ]
                ])
                Z([3, 'plan-tag'])
                Z([3, '超值'])
                Z([3, 'plan-content'])
                Z([3, 'plan-header'])
                Z([3, 'plan-title'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'localizedTitle']
                ]])
                Z([3, 'price-container'])
                Z([3, 'plan-price'])
                Z([a, [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'priceLocale']
                        ],
                        [3, 'currencySymbol']
                    ],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'inPromoPeriod']
                            ],
                            [
                                [2, '==='],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'timeLimitedProducts']
                                    ],
                                    [3, 'length']
                                ],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'normalProducts']
                                    ],
                                    [3, 'length']
                                ]
                            ]
                        ],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'timeLimitedProducts']
                                ],
                                [
                                    [7],
                                    [3, 'index']
                                ]
                            ],
                            [3, 'price']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'price']
                        ]
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'inPromoPeriod']
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'timeLimitedProducts']
                            ],
                            [3, 'length']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'normalProducts']
                            ],
                            [3, 'length']
                        ]
                    ]
                ])
                Z([3, 'original-price'])
                Z([a, z[38][1],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'price']
                    ]
                ])
                Z([3, 'plan-desc'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'localizedDescription']
                ]])
                Z([3, 'benefits'])
                Z([
                    [7],
                    [3, 'rights']
                ])
                Z([3, 'index'])
                Z([3, 'benefit-item'])
                Z([3, '#07c160'])
                Z([3, 'checked'])
                Z([a, [
                    [7],
                    [3, 'item']
                ]])
                Z([3, 'footer'])
                Z([3, 'subscribe'])
                Z([3, 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)'])
                Z([3, 'primary'])
                Z([3, '立即开通'])
                Z([3, 'agreement'])
                Z([3, 'navTo'])
                Z([3, 'link'])
                Z([3, '/pages/webview/index?url\x3dhttps%3A%2F%2Fwww.apple.com%2Flegal%2Finternet-services%2Fitunes%2Fdev%2Fstdeula%2F'])
                Z([3, '用户协议'])
                Z(z[57])
                Z(z[58])
                Z([3, '/pages/webview/index?url\x3dhttps%3A%2F%2Fs.cantonesepi.top%2Fhtml%2FappWeb%2Fprivacy-policy.html'])
                Z([3, '隐私政策'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_63_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_63_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_63 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_63 = true;
        var x = ['./pages/app/iap/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_63_1()
            var bGAB = _n('van-sticky')
            var oHAB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'bind:click-right', 1, 'border', 1, 'customClass', 2, 'customStyle', 3, 'leftText', 4, 'rightText', 5, 'title', 6], [], e, s, gg)
            _(bGAB, oHAB)
            _(r, bGAB)
            var eFAB = _v()
            _(r, eFAB)
            if (_oz(z, 8, e, s, gg)) {
                eFAB.wxVkey = 1
                var xIAB = _n('view')
                _rz(z, xIAB, 'class', 9, e, s, gg)
                var oJAB = _n('view')
                _rz(z, oJAB, 'class', 10, e, s, gg)
                var cLAB = _mz(z, 'image', ['class', 11, 'src', 1], [], e, s, gg)
                _(oJAB, cLAB)
                var hMAB = _n('text')
                _rz(z, hMAB, 'class', 13, e, s, gg)
                var oNAB = _oz(z, 14, e, s, gg)
                _(hMAB, oNAB)
                _(oJAB, hMAB)
                var cOAB = _n('text')
                _rz(z, cOAB, 'class', 15, e, s, gg)
                var oPAB = _oz(z, 16, e, s, gg)
                _(cOAB, oPAB)
                _(oJAB, cOAB)
                var fKAB = _v()
                _(oJAB, fKAB)
                if (_oz(z, 17, e, s, gg)) {
                    fKAB.wxVkey = 1
                    var lQAB = _mz(z, 'count-down', ['bind:change', 18, 'bind:finished', 1, 'desc', 2, 'duration', 3, 'endTime', 4], [], e, s, gg)
                    _(fKAB, lQAB)
                }
                fKAB.wxXCkey = 1
                fKAB.wxXCkey = 3
                _(xIAB, oJAB)
                var aRAB = _n('view')
                _rz(z, aRAB, 'class', 23, e, s, gg)
                var tSAB = _v()
                _(aRAB, tSAB)
                var eTAB = function(oVAB, bUAB, xWAB, gg) {
                    var fYAB = _mz(z, 'view', ['bind:tap', 26, 'class', 1, 'data-idx', 2], [], oVAB, bUAB, gg)
                    var cZAB = _v()
                    _(fYAB, cZAB)
                    if (_oz(z, 29, oVAB, bUAB, gg)) {
                        cZAB.wxVkey = 1
                        var h1AB = _n('view')
                        _rz(z, h1AB, 'class', 30, oVAB, bUAB, gg)
                        var o2AB = _oz(z, 31, oVAB, bUAB, gg)
                        _(h1AB, o2AB)
                        _(cZAB, h1AB)
                    }
                    var c3AB = _n('view')
                    _rz(z, c3AB, 'class', 32, oVAB, bUAB, gg)
                    var o4AB = _n('view')
                    _rz(z, o4AB, 'class', 33, oVAB, bUAB, gg)
                    var l5AB = _n('text')
                    _rz(z, l5AB, 'class', 34, oVAB, bUAB, gg)
                    var a6AB = _oz(z, 35, oVAB, bUAB, gg)
                    _(l5AB, a6AB)
                    _(o4AB, l5AB)
                    var t7AB = _n('view')
                    _rz(z, t7AB, 'class', 36, oVAB, bUAB, gg)
                    var b9AB = _n('text')
                    _rz(z, b9AB, 'class', 37, oVAB, bUAB, gg)
                    var o0AB = _oz(z, 38, oVAB, bUAB, gg)
                    _(b9AB, o0AB)
                    _(t7AB, b9AB)
                    var e8AB = _v()
                    _(t7AB, e8AB)
                    if (_oz(z, 39, oVAB, bUAB, gg)) {
                        e8AB.wxVkey = 1
                        var xABB = _n('text')
                        _rz(z, xABB, 'class', 40, oVAB, bUAB, gg)
                        var oBBB = _oz(z, 41, oVAB, bUAB, gg)
                        _(xABB, oBBB)
                        _(e8AB, xABB)
                    }
                    e8AB.wxXCkey = 1
                    _(o4AB, t7AB)
                    _(c3AB, o4AB)
                    var fCBB = _n('text')
                    _rz(z, fCBB, 'class', 42, oVAB, bUAB, gg)
                    var cDBB = _oz(z, 43, oVAB, bUAB, gg)
                    _(fCBB, cDBB)
                    _(c3AB, fCBB)
                    _(fYAB, c3AB)
                    cZAB.wxXCkey = 1
                    _(xWAB, fYAB)
                    return xWAB
                }
                tSAB.wxXCkey = 2
                _2z(z, 24, eTAB, e, s, gg, tSAB, 'item', 'index', 'productIdentifier')
                _(xIAB, aRAB)
                var hEBB = _n('view')
                _rz(z, hEBB, 'class', 44, e, s, gg)
                var oFBB = _v()
                _(hEBB, oFBB)
                var cGBB = function(lIBB, oHBB, aJBB, gg) {
                    var eLBB = _n('view')
                    _rz(z, eLBB, 'class', 47, lIBB, oHBB, gg)
                    var bMBB = _mz(z, 'van-icon', ['color', 48, 'name', 1], [], lIBB, oHBB, gg)
                    _(eLBB, bMBB)
                    var oNBB = _n('text')
                    var xOBB = _oz(z, 50, lIBB, oHBB, gg)
                    _(oNBB, xOBB)
                    _(eLBB, oNBB)
                    _(aJBB, eLBB)
                    return aJBB
                }
                oFBB.wxXCkey = 4
                _2z(z, 45, cGBB, e, s, gg, oFBB, 'item', 'index', 'index')
                _(xIAB, hEBB)
                var oPBB = _n('view')
                _rz(z, oPBB, 'class', 51, e, s, gg)
                var fQBB = _mz(z, 'van-button', ['block', -1, 'bind:tap', 52, 'color', 1, 'type', 2], [], e, s, gg)
                var cRBB = _oz(z, 55, e, s, gg)
                _(fQBB, cRBB)
                _(oPBB, fQBB)
                var hSBB = _n('view')
                _rz(z, hSBB, 'class', 56, e, s, gg)
                var oTBB = _mz(z, 'text', ['bind:tap', 57, 'class', 1, 'data-url', 2], [], e, s, gg)
                var cUBB = _oz(z, 60, e, s, gg)
                _(oTBB, cUBB)
                _(hSBB, oTBB)
                var oVBB = _mz(z, 'text', ['bind:tap', 61, 'class', 1, 'data-url', 2], [], e, s, gg)
                var lWBB = _oz(z, 64, e, s, gg)
                _(oVBB, lWBB)
                _(hSBB, oVBB)
                _(oPBB, hSBB)
                _(xIAB, oPBB)
                _(eFAB, xIAB)
            }
            eFAB.wxXCkey = 1
            eFAB.wxXCkey = 3
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
                g = "$gwx_XC_63";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_63();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/iap/index.wxml'] = [$gwx_XC_63, './pages/app/iap/index.wxml'];
else __wxAppCode__['pages/app/iap/index.wxml'] = $gwx_XC_63('./pages/app/iap/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/app/iap/index.wxss'] = setCssToHead([".", [1], "container{background:#f7f8fa;min-height:100vh;padding:", [0, 24], "}\n.", [1], "header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "vip-icon{height:", [0, 96], ";margin-bottom:", [0, 24], ";width:", [0, 96], "}\n.", [1], "title{color:#323233;font-size:", [0, 40], ";font-weight:600;margin-bottom:", [0, 12], "}\n.", [1], "subtitle{color:#969799;font-size:", [0, 28], "}\n.", [1], "plans{margin:", [0, 22], " 0}\n.", [1], "plan-item{background:#fff;border:", [0, 2], " solid transparent;border-radius:", [0, 12], ";margin-bottom:", [0, 20], ";overflow:hidden;padding:", [0, 20], ";position:relative;transition:all .3s ease}\n.", [1], "plan-item.", [1], "active{background:#fff5f5;border-color:#ff6b6b}\n.", [1], "plan-tag{background:#ff6b6b;border-radius:", [0, 8], " 0 ", [0, 8], " ", [0, 0], ";bottom:0;color:#fff;font-size:", [0, 24], ";padding:", [0, 4], " ", [0, 16], ";position:absolute;right:0}\n.", [1], "plan-content{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 8], "}\n.", [1], "plan-content,.", [1], "plan-header{display:-webkit-flex;display:flex}\n.", [1], "plan-header{-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "plan-title{color:#323233;font-size:", [0, 32], ";font-weight:500}\n.", [1], "plan-price{color:#ff6b6b;font-size:", [0, 40], ";font-weight:600}\n.", [1], "price-container{-webkit-flex-direction:row;flex-direction:row}\n.", [1], "price-container,.", [1], "price-wrap{-webkit-align-items:baseline;align-items:baseline;display:-webkit-flex;display:flex;gap:", [0, 8], "}\n.", [1], "original-price{text-decoration:line-through}\n.", [1], "original-price,.", [1], "plan-desc{color:#969799;font-size:", [0, 24], "}\n.", [1], "check-icon{color:#ff6b6b;position:absolute;right:", [0, 32], ";top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.", [1], "benefits{background:#fff;border-radius:", [0, 12], ";margin-bottom:", [0, 32], ";padding:", [0, 32], "}\n.", [1], "benefit-item{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 16], ";margin-bottom:", [0, 16], "}\n.", [1], "benefit-item:last-child{margin-bottom:0}\n.", [1], "benefit-item wx-text{color:#323233;font-size:", [0, 28], "}\n.", [1], "footer{padding:", [0, 32], " 0}\n.", [1], "agreement{color:#969799;display:-webkit-flex;display:flex;font-size:", [0, 26], ";gap:", [0, 18], ";-webkit-justify-content:center;justify-content:center;margin-top:", [0, 22], "}\n.", [1], "link{color:#999}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/app/iap/index.wxss:1:1811)", {
        path: "./pages/app/iap/index.wxss"
    });
}