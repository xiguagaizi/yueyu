$gwx_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];

        function gz$gwx_XC_34_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'discountDuration']
                ])
                Z([3, 'countdown'])
                Z([3, '#fff'])
                Z([3, 'underway'])
                Z([3, '24rpx'])
                Z([3, 'onChange'])
                Z([3, 'finished'])
                Z(z[0])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
        }

        function gz$gwx_XC_34_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-count-down'])
                Z([
                    [7],
                    [3, 'useSlot']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_34 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_34 = true;
        var x = ['./components/count-down/index.wxml', './miniprogram_npm/@vant/weapp/count-down/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_34_1()
            var cNN = _v()
            _(r, cNN)
            if (_oz(z, 0, e, s, gg)) {
                cNN.wxVkey = 1
                var hON = _n('view')
                _rz(z, hON, 'class', 1, e, s, gg)
                var oPN = _mz(z, 'van-icon', ['color', 2, 'name', 1, 'size', 2], [], e, s, gg)
                _(hON, oPN)
                var cQN = _mz(z, 'van-count-down', ['useSlot', -1, 'bind:change', 5, 'bind:finish', 1, 'time', 2], [], e, s, gg)
                _(hON, cQN)
                _(cNN, hON)
            }
            cNN.wxXCkey = 1
            cNN.wxXCkey = 3
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
            var z = gz$gwx_XC_34_2()
            var lSN = _n('view')
            _rz(z, lSN, 'class', 0, e, s, gg)
            var aTN = _v()
            _(lSN, aTN)
            if (_oz(z, 1, e, s, gg)) {
                aTN.wxVkey = 1
                var tUN = _n('slot')
                _(aTN, tUN)
            } else {
                aTN.wxVkey = 2
            }
            aTN.wxXCkey = 1
            _(r, lSN)
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
                g = "$gwx_XC_34";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/count-down/index.wxml'] = [$gwx_XC_34, './components/count-down/index.wxml'];
else __wxAppCode__['components/count-down/index.wxml'] = $gwx_XC_34('./components/count-down/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = [$gwx_XC_34, './miniprogram_npm/@vant/weapp/count-down/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = $gwx_XC_34('./miniprogram_npm/@vant/weapp/count-down/index.wxml');;
__wxRoute = "components/count-down/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/count-down/index.js";
define("components/count-down/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../commons/config");
    Component({
        properties: {
            desc: {
                type: String,
                value: "优惠剩余时长："
            },
            duration: {
                type: Number,
                value: 0
            },
            endTime: {
                type: Number,
                value: 0
            }
        },
        data: {
            discountDuration: 0,
            timeData: {}
        },
        lifetimes: {
            attached: function() {
                this.initDiscountDuration(this.data.duration, this.data.endTime)
            }
        },
        methods: {
            finished: function(t) {
                this.setData({
                    discountDuration: 0
                }), this.triggerEvent("finished")
            },
            onChange: function(t) {
                this.setData({
                    timeData: t.detail
                }), this.triggerEvent("change")
            },
            initDiscountDuration: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = this,
                    n = 0;
                if (a < 0 || e < 0) i.setData({
                    discountDuration: n
                });
                else {
                    var o = 60 * e * 60 * 1e3,
                        s = t.IAP_FIRST_OPEN_TIME;
                    wx.getStorage({
                        key: s,
                        complete: function(t) {
                            var e = Date.now();
                            "number" == typeof(null == t ? void 0 : t.data) ? (e = t.data, a && a > e && (e = a, wx.setStorage({
                                key: s,
                                data: a
                            }))) : (e = Math.max(Date.now() + o, a), wx.setStorage({
                                key: s,
                                data: e
                            }));
                            var n = e - Date.now();
                            n > 0 && i.setData({
                                discountDuration: n
                            })
                        }
                    })
                }
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/count-down/index.js'
});
require("components/count-down/index.js");;
__wxRoute = "miniprogram_npm/@vant/weapp/count-down/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/count-down/index.js";
define("miniprogram_npm/@vant/weapp/count-down/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        i = require("./utils");

    function e(t) {
        return setTimeout(t, 30)
    }(0, t.VantComponent)({
        props: {
            useSlot: Boolean,
            millisecond: Boolean,
            time: {
                type: Number,
                observer: "reset"
            },
            format: {
                type: String,
                value: "HH:mm:ss"
            },
            autoStart: {
                type: Boolean,
                value: !0
            }
        },
        data: {
            timeData: (0, i.parseTimeData)(0),
            formattedTime: "0"
        },
        destroyed: function() {
            clearTimeout(this.tid), this.tid = null
        },
        methods: {
            start: function() {
                this.counting || (this.counting = !0, this.endTime = Date.now() + this.remain, this.tick())
            },
            pause: function() {
                this.counting = !1, clearTimeout(this.tid)
            },
            reset: function() {
                this.pause(), this.remain = this.data.time, this.setRemain(this.remain), this.data.autoStart && this.start()
            },
            tick: function() {
                this.data.millisecond ? this.microTick() : this.macroTick()
            },
            microTick: function() {
                var t = this;
                this.tid = e((function() {
                    t.setRemain(t.getRemain()), 0 !== t.remain && t.microTick()
                }))
            },
            macroTick: function() {
                var t = this;
                this.tid = e((function() {
                    var e = t.getRemain();
                    (0, i.isSameSecond)(e, t.remain) && 0 !== e || t.setRemain(e), 0 !== t.remain && t.macroTick()
                }))
            },
            getRemain: function() {
                return Math.max(this.endTime - Date.now(), 0)
            },
            setRemain: function(t) {
                this.remain = t;
                var e = (0, i.parseTimeData)(t);
                this.data.useSlot && this.$emit("change", e), this.setData({
                    formattedTime: (0, i.parseFormat)(this.data.format, e)
                }), 0 === t && (this.pause(), this.$emit("finish"))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/count-down/index.js'
});
require("miniprogram_npm/@vant/weapp/count-down/index.js");