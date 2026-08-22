$gwx_XC_48 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_48 || [];

        function gz$gwx_XC_48_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_48_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClickOverlay'])
                Z([3, 'onClose'])
                Z([3, 'van-share-sheet'])
                Z([
                    [7],
                    [3, 'closeOnClickOverlay']
                ])
                Z([
                    [7],
                    [3, 'duration']
                ])
                Z([
                    [7],
                    [3, 'overlay']
                ])
                Z([
                    [7],
                    [3, 'overlayStyle']
                ])
                Z([3, 'bottom'])
                Z([
                    [7],
                    [3, 'safeAreaInsetBottom']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [7],
                    [3, 'zIndex']
                ])
                Z([3, 'van-share-sheet__header'])
                Z([3, 'title'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'description'])
                Z([
                    [7],
                    [3, 'description']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'isMulti']
                    ],
                    [
                        [5],
                        [
                            [7],
                            [3, 'options']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'options']
                ])
                Z([3, 'index'])
                Z([3, 'onSelect'])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [1, 0]
                ])
                Z(z[19])
                Z(z[17])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_48_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_1
        }

        function gz$gwx_XC_48_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_48_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_48_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'options']
                ])
                Z([3, 'index'])
                Z([3, 'onSelect'])
                Z([3, 'van-share-sheet__option'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([3, 'van-share-sheet__button'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'openType']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'name']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'description']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_48_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_48_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_48 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_48 = true;
        var x = ['./miniprogram_npm/@vant/weapp/share-sheet/index.wxml', './miniprogram_npm/@vant/weapp/share-sheet/options.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_48_1()
            var c9Q = _mz(z, 'van-popup', ['round', -1, 'bind:click-overlay', 0, 'bind:close', 1, 'class', 1, 'closeOnClickOverlay', 2, 'duration', 3, 'overlay', 4, 'overlayStyle', 5, 'position', 6, 'safeAreaInsetBottom', 7, 'show', 8, 'zIndex', 9], [], e, s, gg)
            var lAR = _n('view')
            _rz(z, lAR, 'class', 11, e, s, gg)
            var eDR = _n('slot')
            _rz(z, eDR, 'name', 12, e, s, gg)
            _(lAR, eDR)
            var aBR = _v()
            _(lAR, aBR)
            if (_oz(z, 13, e, s, gg)) {
                aBR.wxVkey = 1
            }
            var bER = _n('slot')
            _rz(z, bER, 'name', 14, e, s, gg)
            _(lAR, bER)
            var tCR = _v()
            _(lAR, tCR)
            if (_oz(z, 15, e, s, gg)) {
                tCR.wxVkey = 1
            }
            aBR.wxXCkey = 1
            tCR.wxXCkey = 1
            _(c9Q, lAR)
            var o0Q = _v()
            _(c9Q, o0Q)
            if (_oz(z, 16, e, s, gg)) {
                o0Q.wxVkey = 1
                var oFR = _v()
                _(o0Q, oFR)
                var xGR = function(fIR, oHR, cJR, gg) {
                    var oLR = _mz(z, 'options', ['bind:select', 19, 'options', 1, 'showBorder', 2], [], fIR, oHR, gg)
                    _(cJR, oLR)
                    return cJR
                }
                oFR.wxXCkey = 4
                _2z(z, 17, xGR, e, s, gg, oFR, 'item', 'index', 'index')
            } else {
                o0Q.wxVkey = 2
                var cMR = _mz(z, 'options', ['bind:select', 22, 'options', 1], [], e, s, gg)
                _(o0Q, cMR)
            }
            o0Q.wxXCkey = 1
            o0Q.wxXCkey = 3
            o0Q.wxXCkey = 3
            _(r, c9Q)
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
            var z = gz$gwx_XC_48_2()
            var lOR = _v()
            _(r, lOR)
            var aPR = function(eRR, tQR, bSR, gg) {
                var xUR = _mz(z, 'view', ['bindtap', 2, 'class', 1, 'data-index', 2], [], eRR, tQR, gg)
                var oVR = _mz(z, 'button', ['class', 5, 'openType', 1], [], eRR, tQR, gg)
                var fWR = _v()
                _(oVR, fWR)
                if (_oz(z, 7, eRR, tQR, gg)) {
                    fWR.wxVkey = 1
                }
                var cXR = _v()
                _(oVR, cXR)
                if (_oz(z, 8, eRR, tQR, gg)) {
                    cXR.wxVkey = 1
                }
                fWR.wxXCkey = 1
                cXR.wxXCkey = 1
                _(xUR, oVR)
                _(bSR, xUR)
                return bSR
            }
            lOR.wxXCkey = 2
            _2z(z, 0, aPR, e, s, gg, lOR, 'item', 'index', 'index')
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
                g = "$gwx_XC_48";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_48();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/share-sheet/index.wxml'] = [$gwx_XC_48, './miniprogram_npm/@vant/weapp/share-sheet/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/share-sheet/index.wxml'] = $gwx_XC_48('./miniprogram_npm/@vant/weapp/share-sheet/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/share-sheet/options.wxml'] = [$gwx_XC_48, './miniprogram_npm/@vant/weapp/share-sheet/options.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/share-sheet/options.wxml'] = $gwx_XC_48('./miniprogram_npm/@vant/weapp/share-sheet/options.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/share-sheet/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/share-sheet/index.js";
define("miniprogram_npm/@vant/weapp/share-sheet/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), (0, require("../common/component").VantComponent)({
        props: {
            show: Boolean,
            overlayStyle: String,
            zIndex: {
                type: Number,
                value: 100
            },
            title: String,
            cancelText: {
                type: String,
                value: "取消"
            },
            description: String,
            options: {
                type: Array,
                value: []
            },
            overlay: {
                type: Boolean,
                value: !0
            },
            safeAreaInsetBottom: {
                type: Boolean,
                value: !0
            },
            closeOnClickOverlay: {
                type: Boolean,
                value: !0
            },
            duration: {
                type: null,
                value: 300
            }
        },
        methods: {
            onClickOverlay: function() {
                this.$emit("click-overlay")
            },
            onCancel: function() {
                this.onClose(), this.$emit("cancel")
            },
            onSelect: function(e) {
                this.$emit("select", e.detail)
            },
            onClose: function() {
                this.$emit("close")
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/share-sheet/index.js'
});
require("miniprogram_npm/@vant/weapp/share-sheet/index.js");;
__wxRoute = "miniprogram_npm/@vant/weapp/share-sheet/options";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/share-sheet/options.js";
define("miniprogram_npm/@vant/weapp/share-sheet/options.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(e) {
            for (var t, o = 1, r = arguments.length; o < r; o++)
                for (var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), (0, require("../common/component").VantComponent)({
        props: {
            options: Array,
            showBorder: Boolean
        },
        methods: {
            onSelect: function(t) {
                var o = t.currentTarget.dataset.index,
                    r = this.data.options[o];
                this.$emit("select", e(e({}, r), {
                    index: o
                }))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/share-sheet/options.js'
});
require("miniprogram_npm/@vant/weapp/share-sheet/options.js");