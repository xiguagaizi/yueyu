$gwx_XC_39 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];

        function gz$gwx_XC_39_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'rootPortal']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
        }

        function gz$gwx_XC_39_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_39_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_39_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'overlay']
                ])
                Z([3, 'onClickOverlay'])
                Z([
                    [7],
                    [3, 'overlayStyle']
                ])
                Z([
                    [7],
                    [3, 'duration']
                ])
                Z([
                    [7],
                    [3, 'lockScroll']
                ])
                Z([
                    [7],
                    [3, 'rootPortal']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [7],
                    [3, 'zIndex']
                ])
                Z(z[5])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_39 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_39 = true;
        var x = ['./miniprogram_npm/@vant/weapp/overlay/index.wxml', './overlay.wxml', './miniprogram_npm/@vant/weapp/popup/index.wxml', './popup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_39_1()
            var t1O = e_[x[0]].i
            _ai(t1O, x[1], e_, x[0], 1, 1)
            var e2O = _v()
            _(r, e2O)
            if (_oz(z, 0, e, s, gg)) {
                e2O.wxVkey = 1
                var b3O = e_[x[0]].j
                _ic(x[1], e_, x[0], e, s, e2O, gg);
                b3O.pop()
            } else {
                e2O.wxVkey = 2
                var o4O = e_[x[0]].j
                _ic(x[1], e_, x[0], e, s, e2O, gg);
                o4O.pop()
            }
            e2O.wxXCkey = 1
            t1O.pop()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [x[1]],
            ic: []
        }
        d_[x[2]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_XC_39_2()
            var o6O = e_[x[2]].i
            _ai(o6O, x[3], e_, x[2], 1, 87)
            var f7O = _v()
            _(r, f7O)
            if (_oz(z, 0, e, s, gg)) {
                f7O.wxVkey = 1
                var h9O = _mz(z, 'van-overlay', ['bind:click', 1, 'customStyle', 1, 'duration', 2, 'lockScroll', 3, 'rootPortal', 4, 'show', 5, 'zIndex', 6], [], e, s, gg)
                _(f7O, h9O)
            }
            var c8O = _v()
            _(r, c8O)
            if (_oz(z, 8, e, s, gg)) {
                c8O.wxVkey = 1
                var o0O = e_[x[2]].j
                _ic(x[3], e_, x[2], e, s, c8O, gg);
                o0O.pop()
            } else {
                c8O.wxVkey = 2
                var cAP = e_[x[2]].j
                _ic(x[3], e_, x[2], e, s, c8O, gg);
                cAP.pop()
            }
            f7O.wxXCkey = 1
            f7O.wxXCkey = 3
            c8O.wxXCkey = 1
            o6O.pop()
            return r
        }
        e_[x[2]] = {
            f: m1,
            j: [],
            i: [],
            ti: [x[3]],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_39";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_39();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = [$gwx_XC_39, './miniprogram_npm/@vant/weapp/overlay/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = $gwx_XC_39('./miniprogram_npm/@vant/weapp/overlay/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = [$gwx_XC_39, './miniprogram_npm/@vant/weapp/popup/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = $gwx_XC_39('./miniprogram_npm/@vant/weapp/popup/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/overlay/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/overlay/index.js";
define("miniprogram_npm/@vant/weapp/overlay/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), (0, require("../common/component").VantComponent)({
        props: {
            show: Boolean,
            customStyle: String,
            duration: {
                type: null,
                value: 300
            },
            zIndex: {
                type: Number,
                value: 1
            },
            lockScroll: {
                type: Boolean,
                value: !0
            },
            rootPortal: {
                type: Boolean,
                value: !1
            }
        },
        methods: {
            onClick: function() {
                this.$emit("click")
            },
            noop: function() {}
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/overlay/index.js'
});
require("miniprogram_npm/@vant/weapp/overlay/index.js");;
__wxRoute = "miniprogram_npm/@vant/weapp/popup/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/popup/index.js";
define("miniprogram_npm/@vant/weapp/popup/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = require("../common/component"),
        o = require("../mixins/transition");
    (0, e.VantComponent)({
        classes: ["enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class", "close-icon-class"],
        mixins: [(0, o.transition)(!1)],
        props: {
            round: Boolean,
            closeable: Boolean,
            customStyle: String,
            overlayStyle: String,
            transition: {
                type: String,
                observer: "observeClass"
            },
            zIndex: {
                type: Number,
                value: 100
            },
            overlay: {
                type: Boolean,
                value: !0
            },
            closeIcon: {
                type: String,
                value: "cross"
            },
            closeIconPosition: {
                type: String,
                value: "top-right"
            },
            closeOnClickOverlay: {
                type: Boolean,
                value: !0
            },
            position: {
                type: String,
                value: "center",
                observer: "observeClass"
            },
            safeAreaInsetBottom: {
                type: Boolean,
                value: !0
            },
            safeAreaInsetTop: {
                type: Boolean,
                value: !1
            },
            safeAreaTabBar: {
                type: Boolean,
                value: !1
            },
            lockScroll: {
                type: Boolean,
                value: !0
            },
            rootPortal: {
                type: Boolean,
                value: !1
            }
        },
        created: function() {
            this.observeClass()
        },
        methods: {
            onClickCloseIcon: function() {
                this.$emit("close")
            },
            onClickOverlay: function() {
                this.$emit("click-overlay"), this.data.closeOnClickOverlay && this.$emit("close")
            },
            observeClass: function() {
                var e = this.data,
                    o = e.transition,
                    t = e.position,
                    a = e.duration,
                    s = {
                        name: o || t
                    };
                "none" === o ? (s.duration = 0, this.originDuration = a) : null != this.originDuration && (s.duration = this.originDuration), this.setData(s)
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/popup/index.js'
});
require("miniprogram_npm/@vant/weapp/popup/index.js");