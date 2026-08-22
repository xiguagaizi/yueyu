$gwx_XC_53 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_53 || [];

        function gz$gwx_XC_53_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-submit-bar custom-class'])
                Z([3, 'top'])
                Z([3, 'van-submit-bar__tip'])
                Z([
                    [7],
                    [3, 'tipIcon']
                ])
                Z([3, 'van-submit-bar__tip-icon'])
                Z(z[3])
                Z([3, '12px'])
                Z([
                    [7],
                    [3, 'hasTip']
                ])
                Z([3, 'tip'])
                Z([3, 'bar-class van-submit-bar__bar'])
                Z([
                    [7],
                    [3, 'hasPrice']
                ])
                Z([3, 'onSubmit'])
                Z([3, 'van-submit-bar__button'])
                Z([3, 'button-class'])
                Z([3, 'width: 100%;'])
                Z([
                    [7],
                    [3, 'disabled']
                ])
                Z([
                    [7],
                    [3, 'loading']
                ])
                Z([
                    [7],
                    [3, 'buttonType']
                ])
                Z([
                    [7],
                    [3, 'safeAreaInsetBottom']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_53_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_53_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_53 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_53 = true;
        var x = ['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_53_1()
            var oFT = _n('view')
            _rz(z, oFT, 'class', 0, e, s, gg)
            var cHT = _n('slot')
            _rz(z, cHT, 'name', 1, e, s, gg)
            _(oFT, cHT)
            var hIT = _n('view')
            _rz(z, hIT, 'class', 2, e, s, gg)
            var oJT = _v()
            _(hIT, oJT)
            if (_oz(z, 3, e, s, gg)) {
                oJT.wxVkey = 1
                var oLT = _mz(z, 'van-icon', ['customClass', 4, 'name', 1, 'size', 2], [], e, s, gg)
                _(oJT, oLT)
            }
            var cKT = _v()
            _(hIT, cKT)
            if (_oz(z, 7, e, s, gg)) {
                cKT.wxVkey = 1
            }
            var lMT = _n('slot')
            _rz(z, lMT, 'name', 8, e, s, gg)
            _(hIT, lMT)
            oJT.wxXCkey = 1
            oJT.wxXCkey = 3
            cKT.wxXCkey = 1
            _(oFT, hIT)
            var aNT = _n('view')
            _rz(z, aNT, 'class', 9, e, s, gg)
            var ePT = _n('slot')
            _(aNT, ePT)
            var tOT = _v()
            _(aNT, tOT)
            if (_oz(z, 10, e, s, gg)) {
                tOT.wxVkey = 1
            }
            var bQT = _mz(z, 'van-button', ['round', -1, 'bind:click', 11, 'class', 1, 'customClass', 2, 'customStyle', 3, 'disabled', 4, 'loading', 5, 'type', 6], [], e, s, gg)
            _(aNT, bQT)
            tOT.wxXCkey = 1
            _(oFT, aNT)
            var fGT = _v()
            _(oFT, fGT)
            if (_oz(z, 18, e, s, gg)) {
                fGT.wxVkey = 1
            }
            fGT.wxXCkey = 1
            _(r, oFT)
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
                g = "$gwx_XC_53";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_53();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/submit-bar/index.wxml'] = [$gwx_XC_53, './miniprogram_npm/@vant/weapp/submit-bar/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/submit-bar/index.wxml'] = $gwx_XC_53('./miniprogram_npm/@vant/weapp/submit-bar/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/submit-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/submit-bar/index.js";
define("miniprogram_npm/@vant/weapp/submit-bar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), (0, require("../common/component").VantComponent)({
        classes: ["bar-class", "price-class", "button-class"],
        props: {
            tip: {
                type: null,
                observer: "updateTip"
            },
            tipIcon: String,
            type: Number,
            price: {
                type: null,
                observer: "updatePrice"
            },
            label: String,
            loading: Boolean,
            disabled: Boolean,
            buttonText: String,
            currency: {
                type: String,
                value: "¥"
            },
            buttonType: {
                type: String,
                value: "danger"
            },
            decimalLength: {
                type: Number,
                value: 2,
                observer: "updatePrice"
            },
            suffixLabel: String,
            safeAreaInsetBottom: {
                type: Boolean,
                value: !0
            }
        },
        methods: {
            updatePrice: function() {
                var e = this.data,
                    t = e.price,
                    i = e.decimalLength,
                    a = "number" == typeof t && (t / 100).toFixed(i).split(".");
                this.setData({
                    hasPrice: "number" == typeof t,
                    integerStr: a && a[0],
                    decimalStr: i && a ? ".".concat(a[1]) : ""
                })
            },
            updateTip: function() {
                this.setData({
                    hasTip: "string" == typeof this.data.tip
                })
            },
            onSubmit: function(e) {
                this.$emit("submit", e.detail)
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/submit-bar/index.js'
});
require("miniprogram_npm/@vant/weapp/submit-bar/index.js");