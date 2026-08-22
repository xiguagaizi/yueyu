$gwx_XC_36 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];

        function gz$gwx_XC_36_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'fixed']
                    ],
                    [
                        [7],
                        [3, 'placeholder']
                    ]
                ])
                Z([3, 'van-nav-bar__content'])
                Z([3, 'onClickLeft'])
                Z([3, 'van-nav-bar__left'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'leftArrow']
                    ],
                    [
                        [7],
                        [3, 'leftText']
                    ]
                ])
                Z([
                    [7],
                    [3, 'leftArrow']
                ])
                Z([3, 'van-nav-bar__arrow'])
                Z([3, 'arrow-left'])
                Z([3, '16px'])
                Z([
                    [7],
                    [3, 'leftText']
                ])
                Z([3, 'left'])
                Z([3, 'van-nav-bar__title title-class van-ellipsis'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'title'])
                Z([3, 'onClickRight'])
                Z([3, 'van-nav-bar__right'])
                Z([
                    [7],
                    [3, 'rightText']
                ])
                Z([3, 'right'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_36 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_36 = true;
        var x = ['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_36_1()
            var l7N = _v()
            _(r, l7N)
            if (_oz(z, 0, e, s, gg)) {
                l7N.wxVkey = 1
            }
            var a8N = _n('view')
            _rz(z, a8N, 'class', 1, e, s, gg)
            var t9N = _mz(z, 'view', ['bind:tap', 2, 'class', 1], [], e, s, gg)
            var e0N = _v()
            _(t9N, e0N)
            if (_oz(z, 4, e, s, gg)) {
                e0N.wxVkey = 1
                var bAO = _v()
                _(e0N, bAO)
                if (_oz(z, 5, e, s, gg)) {
                    bAO.wxVkey = 1
                    var xCO = _mz(z, 'van-icon', ['customClass', 6, 'name', 1, 'size', 2], [], e, s, gg)
                    _(bAO, xCO)
                }
                var oBO = _v()
                _(e0N, oBO)
                if (_oz(z, 9, e, s, gg)) {
                    oBO.wxVkey = 1
                }
                bAO.wxXCkey = 1
                bAO.wxXCkey = 3
                oBO.wxXCkey = 1
            } else {
                e0N.wxVkey = 2
                var oDO = _n('slot')
                _rz(z, oDO, 'name', 10, e, s, gg)
                _(e0N, oDO)
            }
            e0N.wxXCkey = 1
            e0N.wxXCkey = 3
            _(a8N, t9N)
            var fEO = _n('view')
            _rz(z, fEO, 'class', 11, e, s, gg)
            var cFO = _v()
            _(fEO, cFO)
            if (_oz(z, 12, e, s, gg)) {
                cFO.wxVkey = 1
            } else {
                cFO.wxVkey = 2
                var hGO = _n('slot')
                _rz(z, hGO, 'name', 13, e, s, gg)
                _(cFO, hGO)
            }
            cFO.wxXCkey = 1
            _(a8N, fEO)
            var oHO = _mz(z, 'view', ['bind:tap', 14, 'class', 1], [], e, s, gg)
            var cIO = _v()
            _(oHO, cIO)
            if (_oz(z, 16, e, s, gg)) {
                cIO.wxVkey = 1
            } else {
                cIO.wxVkey = 2
                var oJO = _n('slot')
                _rz(z, oJO, 'name', 17, e, s, gg)
                _(cIO, oJO)
            }
            cIO.wxXCkey = 1
            _(a8N, oHO)
            _(r, a8N)
            l7N.wxXCkey = 1
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
                g = "$gwx_XC_36";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_36();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = [$gwx_XC_36, './miniprogram_npm/@vant/weapp/nav-bar/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = $gwx_XC_36('./miniprogram_npm/@vant/weapp/nav-bar/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/nav-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/nav-bar/index.js";
define("miniprogram_npm/@vant/weapp/nav-bar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        e = require("../common/utils");
    (0, t.VantComponent)({
        classes: ["title-class"],
        props: {
            title: String,
            fixed: {
                type: Boolean,
                observer: "setHeight"
            },
            placeholder: {
                type: Boolean,
                observer: "setHeight"
            },
            leftText: String,
            rightText: String,
            customStyle: String,
            leftArrow: Boolean,
            border: {
                type: Boolean,
                value: !0
            },
            zIndex: {
                type: Number,
                value: 1
            },
            safeAreaInsetTop: {
                type: Boolean,
                value: !0
            }
        },
        data: {
            height: 46
        },
        created: function() {
            var t = (0, e.getSystemInfoSync)().statusBarHeight;
            this.setData({
                statusBarHeight: t,
                height: 46 + t
            })
        },
        mounted: function() {
            this.setHeight()
        },
        methods: {
            onClickLeft: function() {
                this.$emit("click-left")
            },
            onClickRight: function() {
                this.$emit("click-right")
            },
            setHeight: function() {
                var t = this;
                this.data.fixed && this.data.placeholder && wx.nextTick((function() {
                    (0, e.getRect)(t, ".van-nav-bar").then((function(e) {
                        e && "height" in e && t.setData({
                            height: e.height
                        })
                    }))
                }))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/nav-bar/index.js'
});
require("miniprogram_npm/@vant/weapp/nav-bar/index.js");