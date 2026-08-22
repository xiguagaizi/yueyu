$gwx_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'subscribe'])
                Z([
                    [7],
                    [3, 'color']
                ])
                Z([3, 'custom-cls'])
                Z([
                    [7],
                    [3, 'icon']
                ])
                Z([
                    [7],
                    [3, 'round']
                ])
                Z([
                    [7],
                    [3, 'size']
                ])
                Z([
                    [7],
                    [3, 'type']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./components/subscribe-button/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var oND = _mz(z, 'van-button', ['bind:tap', 0, 'color', 1, 'customClass', 1, 'icon', 2, 'round', 3, 'size', 4, 'type', 5], [], e, s, gg)
            _(r, oND)
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/subscribe-button/index.wxml'] = [$gwx_XC_2, './components/subscribe-button/index.wxml'];
else __wxAppCode__['components/subscribe-button/index.wxml'] = $gwx_XC_2('./components/subscribe-button/index.wxml');;
__wxRoute = "components/subscribe-button/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/subscribe-button/index.js";
define("components/subscribe-button/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        properties: {
            icon: {
                type: String
            },
            color: {
                type: String
            },
            ext: {
                type: String,
                value: ""
            },
            fixed: {
                type: Boolean,
                value: !1
            },
            round: {
                type: Boolean,
                value: !1
            },
            tid: {
                type: String
            },
            text: {
                type: String,
                value: "订阅"
            },
            size: {
                type: String,
                value: "normal"
            },
            type: {
                type: String
            }
        },
        data: {},
        methods: {
            addSubscribe: function(t) {
                this.triggerEvent("success")
            },
            subscribe: function() {
                var t = this,
                    e = this.data.tid;
                wx.showLoading({
                    title: "处理中..."
                }), wx.getSetting({
                    withSubscriptions: !0,
                    success: function(i) {
                        var n, o;
                        (console.log(i), !0 === (null == i || null === (n = i.subscriptionsSetting) || void 0 === n ? void 0 : n.mainSwitch)) ? "reject" === (null == i || null === (o = i.subscriptionsSetting) || void 0 === o ? void 0 : o[e]) ? wx.showModal({
                            title: "订阅失败",
                            content: "请先前往设置->通知管理->允许“粤语派”发送以下通知，选择“接收”，再重新订阅",
                            confirmText: "去设置",
                            complete: function(t) {
                                t.confirm && wx.openSetting()
                            }
                        }): (wx.showLoading({
                            title: "处理中...."
                        }), wx.requestSubscribeMessage({
                            tmplIds: [e],
                            success: function(i) {
                                "accept" === i[e] ? setTimeout((function() {
                                    t.addSubscribe(e)
                                })) : "reject" === i[e] && setTimeout((function() {
                                    wx.showToast({
                                        title: "取消订阅",
                                        icon: "error"
                                    })
                                }))
                            },
                            fail: function(t) {
                                wx.showToast({
                                    title: "系统异常",
                                    icon: "error"
                                })
                            },
                            complete: function() {
                                wx.hideLoading()
                            }
                        })): wx.showModal({
                            title: "订阅失败",
                            content: "请前往设置->通知管理，勾选“接收通知”",
                            confirmText: "去设置",
                            complete: function(t) {
                                t.confirm && wx.openSetting()
                            }
                        })
                    },
                    complete: function() {
                        wx.hideLoading()
                    }
                })
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/subscribe-button/index.js'
});
require("components/subscribe-button/index.js");