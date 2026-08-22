$gwx_XC_62 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_62 || [];

        function gz$gwx_XC_62_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'showHint']
                ])
                Z([3, 'container'])
                Z([a, [3, 'top:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'position']
                        ],
                        [3, 'top']
                    ],
                    [3, 'px;right:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'position']
                        ],
                        [3, 'right']
                    ],
                    [3, 'px;']
                ])
                Z([3, 'arrow'])
                Z([a, [3, 'border-bottom-color:'],
                    [
                        [2, '||'],
                        [
                            [7],
                            [3, 'background']
                        ],
                        [1, '#fff']
                    ],
                    [3, ';']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'bar']
                ])
                Z([3, 'showDetail'])
                Z([3, 'body'])
                Z([3, 'bar'])
                Z([a, [3, 'background:'],
                    [
                        [7],
                        [3, 'background']
                    ], z[4][3]
                ])
                Z([3, 'text'])
                Z([a, [3, 'color:'],
                    [
                        [7],
                        [3, 'color']
                    ]
                ])
                Z([a, [
                    [7],
                    [3, 'text']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'card']
                ])
                Z(z[7])
                Z([3, 'card'])
                Z([3, 'step'])
                Z([3, 'label'])
                Z([3, '1'])
                Z([3, 'step-1__desc'])
                Z([3, '点击右上角'])
                Z([3, './assets/dots.png'])
                Z([3, 'width:20px;height:20px;margin-left:4px;'])
                Z(z[16])
                Z(z[17])
                Z([3, '2'])
                Z([3, '选择「添加到我的小程序」'])
                Z([3, 'image'])
                Z([3, 'aspectFit'])
                Z([3, './assets/step-2.png'])
                Z([3, 'width:100%;height:60px;'])
                Z(z[16])
                Z(z[17])
                Z([3, '3'])
                Z([3, '微信首页下拉，快速进入小程序'])
                Z([3, 'quick-entry'])
                Z([3, 'quick-entry-title'])
                Z([3, '我的小程序'])
                Z([3, 'mini-app'])
                Z([3, 'logo'])
                Z([
                    [7],
                    [3, 'logo']
                ])
                Z([3, 'name'])
                Z([a, [
                    [7],
                    [3, 'name']
                ]])
                Z([3, 'tail'])
                Z([3, 'onTapClose'])
                Z([3, 'got-it'])
                Z([3, '我知道了'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'custom']
                ])
                Z(z[7])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'showBackdrop']
                    ],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'show']
                        ],
                        [
                            [7],
                            [3, 'backdrop']
                        ]
                    ]
                ])
                Z([3, 'onTapBackdrop'])
                Z([3, 'backdrop'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_62 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_62 = true;
        var x = ['./miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_62_1()
            var c59 = _v()
            _(r, c59)
            if (_oz(z, 0, e, s, gg)) {
                c59.wxVkey = 1
                var l79 = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
                var bA0 = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
                _(l79, bA0)
                var a89 = _v()
                _(l79, a89)
                if (_oz(z, 5, e, s, gg)) {
                    a89.wxVkey = 1
                    var oB0 = _mz(z, 'view', ['bindtap', 6, 'class', 1], [], e, s, gg)
                    var xC0 = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg)
                    var oD0 = _mz(z, 'text', ['class', 10, 'style', 1], [], e, s, gg)
                    var fE0 = _oz(z, 12, e, s, gg)
                    _(oD0, fE0)
                    _(xC0, oD0)
                    _(oB0, xC0)
                    _(a89, oB0)
                }
                var t99 = _v()
                _(l79, t99)
                if (_oz(z, 13, e, s, gg)) {
                    t99.wxVkey = 1
                    var cF0 = _n('view')
                    _rz(z, cF0, 'class', 14, e, s, gg)
                    var hG0 = _n('view')
                    _rz(z, hG0, 'class', 15, e, s, gg)
                    var oH0 = _n('view')
                    _rz(z, oH0, 'class', 16, e, s, gg)
                    var cI0 = _n('view')
                    _rz(z, cI0, 'class', 17, e, s, gg)
                    var oJ0 = _oz(z, 18, e, s, gg)
                    _(cI0, oJ0)
                    _(oH0, cI0)
                    var lK0 = _n('view')
                    _rz(z, lK0, 'class', 19, e, s, gg)
                    var aL0 = _n('view')
                    var tM0 = _oz(z, 20, e, s, gg)
                    _(aL0, tM0)
                    _(lK0, aL0)
                    var eN0 = _mz(z, 'image', ['src', 21, 'style', 1], [], e, s, gg)
                    _(lK0, eN0)
                    _(oH0, lK0)
                    _(hG0, oH0)
                    var bO0 = _n('view')
                    _rz(z, bO0, 'class', 23, e, s, gg)
                    var oP0 = _n('view')
                    _rz(z, oP0, 'class', 24, e, s, gg)
                    var xQ0 = _oz(z, 25, e, s, gg)
                    _(oP0, xQ0)
                    _(bO0, oP0)
                    var oR0 = _n('view')
                    var fS0 = _n('view')
                    var cT0 = _oz(z, 26, e, s, gg)
                    _(fS0, cT0)
                    _(oR0, fS0)
                    var hU0 = _mz(z, 'image', ['class', 27, 'mode', 1, 'src', 2, 'style', 3], [], e, s, gg)
                    _(oR0, hU0)
                    _(bO0, oR0)
                    _(hG0, bO0)
                    var oV0 = _n('view')
                    _rz(z, oV0, 'class', 31, e, s, gg)
                    var cW0 = _n('view')
                    _rz(z, cW0, 'class', 32, e, s, gg)
                    var oX0 = _oz(z, 33, e, s, gg)
                    _(cW0, oX0)
                    _(oV0, cW0)
                    var lY0 = _n('view')
                    var aZ0 = _n('view')
                    var t10 = _oz(z, 34, e, s, gg)
                    _(aZ0, t10)
                    _(lY0, aZ0)
                    var e20 = _n('view')
                    _rz(z, e20, 'class', 35, e, s, gg)
                    var b30 = _n('view')
                    _rz(z, b30, 'class', 36, e, s, gg)
                    var o40 = _oz(z, 37, e, s, gg)
                    _(b30, o40)
                    _(e20, b30)
                    var x50 = _n('view')
                    _rz(z, x50, 'class', 38, e, s, gg)
                    var o60 = _mz(z, 'image', ['class', 39, 'src', 1], [], e, s, gg)
                    _(x50, o60)
                    var f70 = _n('view')
                    _rz(z, f70, 'class', 41, e, s, gg)
                    var c80 = _oz(z, 42, e, s, gg)
                    _(f70, c80)
                    _(x50, f70)
                    _(e20, x50)
                    _(lY0, e20)
                    _(oV0, lY0)
                    _(hG0, oV0)
                    _(cF0, hG0)
                    var h90 = _n('view')
                    _rz(z, h90, 'class', 43, e, s, gg)
                    var o00 = _mz(z, 'view', ['bindtap', 44, 'class', 1], [], e, s, gg)
                    var cAAB = _oz(z, 46, e, s, gg)
                    _(o00, cAAB)
                    _(h90, o00)
                    _(cF0, h90)
                    _(t99, cF0)
                }
                var e09 = _v()
                _(l79, e09)
                if (_oz(z, 47, e, s, gg)) {
                    e09.wxVkey = 1
                    var oBAB = _n('view')
                    _rz(z, oBAB, 'class', 48, e, s, gg)
                    var lCAB = _n('slot')
                    _(oBAB, lCAB)
                    _(e09, oBAB)
                }
                a89.wxXCkey = 1
                t99.wxXCkey = 1
                e09.wxXCkey = 1
                _(c59, l79)
            }
            var o69 = _v()
            _(r, o69)
            if (_oz(z, 49, e, s, gg)) {
                o69.wxVkey = 1
                var aDAB = _mz(z, 'view', ['bindtap', 50, 'class', 1], [], e, s, gg)
                _(o69, aDAB)
            }
            c59.wxXCkey = 1
            o69.wxXCkey = 1
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
                g = "$gwx_XC_62";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_62();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'] = [$gwx_XC_62, './miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'];
else __wxAppCode__['miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'] = $gwx_XC_62('./miniprogram_npm/wx-pin-prompt/pin-prompt.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/wx-pin-prompt/pin-prompt.wxss'] = setCssToHead([".", [1], "container{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-end;justify-content:flex-end;position:fixed;right:0;top:0;width:", [0, 600], ";z-index:10001}\n.", [1], "arrow{border:10px solid transparent;border-bottom-color:#fff;height:0;margin-right:30px;width:0}\n.", [1], "body{min-height:40px}\n.", [1], "bar{background:#fff;border-radius:8px;padding:4px 8px}\n.", [1], "bar .", [1], "text{color:#000;font-size:12px;font-weight:400}\n.", [1], "card{background-color:#fff;border-radius:16px;box-shadow:0 ", [0, 10], " ", [0, 20], " ", [0, -10], " #fff;box-sizing:border-box;-webkit-flex-direction:column;flex-direction:column;min-width:", [0, 200], ";padding:24px}\n.", [1], "card,.", [1], "card .", [1], "step{display:-webkit-flex;display:flex}\n.", [1], "card .", [1], "step{-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-direction:row;flex-direction:row;font-size:14px;justify-items:start;padding:8px 0;width:100%}\n.", [1], "card .", [1], "label{background:#f18282;border-radius:100%;font-size:12px;height:20px;line-height:20px;margin-right:8px;min-height:20px;min-width:20px;text-align:center;width:20px}\n.", [1], "card .", [1], "step-1__desc{display:-webkit-flex;display:flex}\n.", [1], "card .", [1], "image,.", [1], "quick-entry{border-radius:8px;margin-top:4px}\n.", [1], "quick-entry{background:#444158;color:#fff;height:70px;padding:8px 16px;position:relative}\n.", [1], "quick-entry .", [1], "quick-entry-title{color:gray;font-size:10px}\n.", [1], "quick-entry .", [1], "mini-app{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;width:45px}\n.", [1], "quick-entry .", [1], "mini-app .", [1], "logo{border-radius:100%;height:30px;margin-top:8px;width:30px}\n.", [1], "quick-entry .", [1], "mini-app .", [1], "name{color:#fff;font-size:8px;margin-top:4px;text-align:center}\n.", [1], "tail{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:8px 0;text-align:center;width:100%}\n.", [1], "got-it{background:transparent;border:1px solid #fff;border-radius:1000px;color:#fff;width:80px}\n.", [1], "backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;position:fixed;right:0;top:0;z-index:10000}\n", ], undefined, {
        path: "./miniprogram_npm/wx-pin-prompt/pin-prompt.wxss"
    });
}