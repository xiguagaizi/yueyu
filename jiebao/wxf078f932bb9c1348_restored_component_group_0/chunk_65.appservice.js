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
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'bar']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'card']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'custom']
                ])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_62_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_62_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_62 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_62 = true;
        var x = ['./miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_62_1()
            var oRV = _v()
            _(r, oRV)
            if (_oz(z, 0, e, s, gg)) {
                oRV.wxVkey = 1
                var cTV = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
                var hUV = _v()
                _(cTV, hUV)
                if (_oz(z, 3, e, s, gg)) {
                    hUV.wxVkey = 1
                }
                var oVV = _v()
                _(cTV, oVV)
                if (_oz(z, 4, e, s, gg)) {
                    oVV.wxVkey = 1
                }
                var cWV = _v()
                _(cTV, cWV)
                if (_oz(z, 5, e, s, gg)) {
                    cWV.wxVkey = 1
                    var oXV = _n('slot')
                    _(cWV, oXV)
                }
                hUV.wxXCkey = 1
                oVV.wxXCkey = 1
                cWV.wxXCkey = 1
                _(oRV, cTV)
            }
            var fSV = _v()
            _(r, fSV)
            if (_oz(z, 6, e, s, gg)) {
                fSV.wxVkey = 1
            }
            oRV.wxXCkey = 1
            fSV.wxXCkey = 1
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
                g = "$gwx_XC_62";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_62();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'] = [$gwx_XC_62, './miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'];
else __wxAppCode__['miniprogram_npm/wx-pin-prompt/pin-prompt.wxml'] = $gwx_XC_62('./miniprogram_npm/wx-pin-prompt/pin-prompt.wxml');;
__wxRoute = "miniprogram_npm/wx-pin-prompt/pin-prompt";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/wx-pin-prompt/pin-prompt.js";
define("miniprogram_npm/wx-pin-prompt/pin-prompt.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        properties: {
            text: {
                type: String,
                value: "点击「添加小程序」，方便下次访问"
            },
            type: {
                type: String,
                value: "bar"
            },
            show: {
                type: Boolean,
                value: !1,
                observer: function(t) {
                    t && this.show(), !t && this.close()
                }
            },
            showDetail: {
                type: Boolean,
                value: !1,
                observer: function(t) {
                    t && this.showDetail()
                }
            },
            auto: {
                type: Boolean,
                value: !1
            },
            background: {
                type: String,
                value: "#fff"
            },
            color: {
                type: String,
                value: "#000"
            },
            customNavbar: {
                type: Boolean,
                value: !1
            },
            logo: {
                type: String
            },
            name: {
                type: String
            },
            delay: {
                type: Number,
                value: 0
            },
            duration: {
                type: Number,
                value: 5
            },
            backdrop: {
                type: Boolean,
                value: !1
            }
        },
        data: {
            showHint: !1,
            showBackdrop: !1,
            position: {
                top: 0,
                right: 0
            },
            timer: null
        },
        lifetimes: {
            attached: function() {
                this._attached()
            }
        },
        pageLifetimes: {
            resize: function(t) {
                this._updatePosition()
            }
        },
        attached: function() {
            this._attached()
        },
        methods: {
            onTapBackdrop: function() {
                this.close()
            },
            onTapClose: function() {
                this.close()
            },
            show: function() {
                var t = this;
                this.setData({
                    show: !0,
                    showHint: !0,
                    showBackdrop: this.data.backdrop || "card" === this.data.type
                }), "bar" === this.data.type && this.data.duration > 0 && (this.data.timer = setTimeout((function() {
                    "bar" === t.data.type && t.close()
                }), 1e3 * this.data.duration)), this.triggerEvent("show")
            },
            close: function() {
                this.setData({
                    show: !1,
                    showHint: !1,
                    showBackdrop: !1
                }), wx.setStorageSync("PIN_PROMPT_DATE", Date.now()), this.triggerEvent("close")
            },
            showDetail: function() {
                this.data.timer && clearTimeout(this.data.timer), this.setData({
                    show: !0,
                    showHint: !0,
                    showBackdrop: !0,
                    type: "card"
                }), this.triggerEvent("showDetail")
            },
            shouldShow: function() {
                return this.data.auto ? !wx.getStorageSync("PIN_PROMPT_DATE") : this.data.show
            },
            _attached: function() {
                var t = this;
                this._updatePosition(), this.shouldShow() && setTimeout((function() {
                    t.show()
                }), 1e3 * this.data.delay)
            },
            _updatePosition: function() {
                var t = this,
                    e = !!wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : {};
                wx.getSystemInfo({
                    success: function(o) {
                        t.setData({
                            position: {
                                top: t.data.customNavbar ? e.bottom : 0,
                                right: o.screenWidth - e.left - 3 * e.width / 4
                            }
                        })
                    }
                })
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/wx-pin-prompt/pin-prompt.js'
});
require("miniprogram_npm/wx-pin-prompt/pin-prompt.js");