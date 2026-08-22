$gwx_XC_26 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];

        function gz$gwx_XC_26_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'arrowDirection']
                ])
                Z([
                    [7],
                    [3, 'border']
                ])
                Z([
                    [7],
                    [3, 'center']
                ])
                Z([
                    [7],
                    [3, 'clickable']
                ])
                Z([3, 'custom-class van-field'])
                Z([
                    [7],
                    [3, 'customStyle']
                ])
                Z([
                    [7],
                    [3, 'leftIcon']
                ])
                Z([
                    [7],
                    [3, 'isLink']
                ])
                Z([
                    [7],
                    [3, 'required']
                ])
                Z([
                    [7],
                    [3, 'size']
                ])
                Z([3, 'margin-right: 12px;'])
                Z([
                    [7],
                    [3, 'titleWidth']
                ])
                Z([3, 'left-icon'])
                Z([3, 'icon'])
                Z([
                    [7],
                    [3, 'label']
                ])
                Z([3, 'label'])
                Z([3, 'title'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [1, 'field__body']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [7],
                                    [3, 'type']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'onClickInput'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [1, 'field__control']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'inputAlign']
                                    ]
                                ],
                                [1, 'custom']
                            ]
                        ]
                    ]
                ])
                Z([3, 'input'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'textarea']
                ])
                Z([
                    [7],
                    [3, 'showClear']
                ])
                Z([3, 'onClear'])
                Z([3, 'van-field__clear-root van-field__icon-root'])
                Z([
                    [7],
                    [3, 'clearIcon']
                ])
                Z([3, 'onClickIcon'])
                Z([3, 'van-field__icon-container'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'rightIcon']
                    ],
                    [
                        [7],
                        [3, 'icon']
                    ]
                ])
                Z([a, [3, 'van-field__icon-root '],
                    [
                        [7],
                        [3, 'iconClass']
                    ]
                ])
                Z([3, 'right-icon-class'])
                Z(z[28])
                Z([3, 'right-icon'])
                Z(z[13])
                Z([3, 'button'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showWordLimit']
                    ],
                    [
                        [7],
                        [3, 'maxlength']
                    ]
                ])
                Z([
                    [7],
                    [3, 'errorMessage']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_26 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_26 = true;
        var x = ['./miniprogram_npm/@vant/weapp/field/index.wxml', './textarea.wxml', './input.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_26_1()
            var oRL = _mz(z, 'van-cell', ['arrowDirection', 0, 'border', 1, 'center', 1, 'clickable', 2, 'customClass', 3, 'customStyle', 4, 'icon', 5, 'isLink', 6, 'required', 7, 'size', 8, 'titleStyle', 9, 'titleWidth', 10], [], e, s, gg)
            var aVL = _mz(z, 'slot', ['name', 12, 'slot', 1], [], e, s, gg)
            _(oRL, aVL)
            var cSL = _v()
            _(oRL, cSL)
            if (_oz(z, 14, e, s, gg)) {
                cSL.wxVkey = 1
            } else {
                cSL.wxVkey = 2
                var tWL = _mz(z, 'slot', ['name', 15, 'slot', 1], [], e, s, gg)
                _(cSL, tWL)
            }
            var eXL = _n('view')
            _rz(z, eXL, 'class', 17, e, s, gg)
            var x1L = _mz(z, 'view', ['bindtap', 18, 'class', 1], [], e, s, gg)
            var o2L = _n('slot')
            _rz(z, o2L, 'name', 20, e, s, gg)
            _(x1L, o2L)
            _(eXL, x1L)
            var bYL = _v()
            _(eXL, bYL)
            if (_oz(z, 21, e, s, gg)) {
                bYL.wxVkey = 1
                var f3L = e_[x[0]].j
                _ic(x[1], e_, x[0], e, s, bYL, gg);
                f3L.pop()
            } else {
                bYL.wxVkey = 2
                var c4L = e_[x[0]].j
                _ic(x[2], e_, x[0], e, s, bYL, gg);
                c4L.pop()
            }
            var oZL = _v()
            _(eXL, oZL)
            if (_oz(z, 22, e, s, gg)) {
                oZL.wxVkey = 1
                var h5L = _mz(z, 'van-icon', ['catch:touchstart', 23, 'class', 1, 'name', 2], [], e, s, gg)
                _(oZL, h5L)
            }
            var o6L = _mz(z, 'view', ['bind:tap', 26, 'class', 1], [], e, s, gg)
            var c7L = _v()
            _(o6L, c7L)
            if (_oz(z, 28, e, s, gg)) {
                c7L.wxVkey = 1
                var o8L = _mz(z, 'van-icon', ['class', 29, 'customClass', 1, 'name', 2], [], e, s, gg)
                _(c7L, o8L)
            }
            var l9L = _n('slot')
            _rz(z, l9L, 'name', 32, e, s, gg)
            _(o6L, l9L)
            var a0L = _n('slot')
            _rz(z, a0L, 'name', 33, e, s, gg)
            _(o6L, a0L)
            c7L.wxXCkey = 1
            c7L.wxXCkey = 3
            _(eXL, o6L)
            var tAM = _n('slot')
            _rz(z, tAM, 'name', 34, e, s, gg)
            _(eXL, tAM)
            bYL.wxXCkey = 1
            oZL.wxXCkey = 1
            oZL.wxXCkey = 3
            _(oRL, eXL)
            var oTL = _v()
            _(oRL, oTL)
            if (_oz(z, 35, e, s, gg)) {
                oTL.wxVkey = 1
            }
            var lUL = _v()
            _(oRL, lUL)
            if (_oz(z, 36, e, s, gg)) {
                lUL.wxVkey = 1
            }
            cSL.wxXCkey = 1
            oTL.wxXCkey = 1
            lUL.wxXCkey = 1
            _(r, oRL)
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
                g = "$gwx_XC_26";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_26();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/index.wxml'] = [$gwx_XC_26, './miniprogram_npm/@vant/weapp/field/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/field/index.wxml'] = $gwx_XC_26('./miniprogram_npm/@vant/weapp/field/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/field/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/field/index.js";
define("miniprogram_npm/@vant/weapp/field/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(e) {
            for (var t, i = 1, a = arguments.length; i < a; i++)
                for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/utils"),
        i = require("../common/component"),
        a = require("./props");
    (0, i.VantComponent)({
        field: !0,
        classes: ["input-class", "right-icon-class", "label-class"],
        props: e(e(e(e({}, a.commonProps), a.inputProps), a.textareaProps), {
            size: String,
            icon: String,
            label: String,
            error: Boolean,
            center: Boolean,
            isLink: Boolean,
            leftIcon: String,
            rightIcon: String,
            autosize: null,
            required: Boolean,
            iconClass: String,
            clickable: Boolean,
            inputAlign: String,
            customStyle: String,
            errorMessage: String,
            arrowDirection: String,
            showWordLimit: Boolean,
            errorMessageAlign: String,
            readonly: {
                type: Boolean,
                observer: "setShowClear"
            },
            clearable: {
                type: Boolean,
                observer: "setShowClear"
            },
            clearTrigger: {
                type: String,
                value: "focus"
            },
            border: {
                type: Boolean,
                value: !0
            },
            titleWidth: {
                type: String,
                value: "6.2em"
            },
            clearIcon: {
                type: String,
                value: "clear"
            },
            extraEventParams: {
                type: Boolean,
                value: !1
            }
        }),
        data: {
            focused: !1,
            innerValue: "",
            showClear: !1
        },
        created: function() {
            this.value = this.data.value, this.setData({
                innerValue: this.value
            })
        },
        methods: {
            formatValue: function(e) {
                var t = this.data.maxlength;
                return -1 !== t && e.length > t ? e.slice(0, t) : e
            },
            onInput: function(t) {
                var i = (t.detail || {}).value,
                    a = void 0 === i ? "" : i,
                    n = this.formatValue(a);
                return this.value = n, this.setShowClear(), this.emitChange(e(e({}, t.detail), {
                    value: n
                }))
            },
            onFocus: function(e) {
                this.focused = !0, this.setShowClear(), this.$emit("focus", e.detail)
            },
            onBlur: function(e) {
                this.focused = !1, this.setShowClear(), this.$emit("blur", e.detail)
            },
            onClickIcon: function() {
                this.$emit("click-icon")
            },
            onClickInput: function(e) {
                this.$emit("click-input", e.detail)
            },
            onClear: function() {
                var e = this;
                this.setData({
                    innerValue: ""
                }), this.value = "", this.setShowClear(), (0, t.nextTick)((function() {
                    e.emitChange({
                        value: ""
                    }), e.$emit("clear", "")
                }))
            },
            onConfirm: function(e) {
                var t = (e.detail || {}).value,
                    i = void 0 === t ? "" : t;
                this.value = i, this.setShowClear(), this.$emit("confirm", i)
            },
            setValue: function(e) {
                this.value = e, this.setShowClear(), "" === e && this.setData({
                    innerValue: ""
                }), this.emitChange({
                    value: e
                })
            },
            onLineChange: function(e) {
                this.$emit("linechange", e.detail)
            },
            onKeyboardHeightChange: function(e) {
                this.$emit("keyboardheightchange", e.detail)
            },
            emitChange: function(t) {
                var i, a = this.data.extraEventParams;
                this.setData({
                    value: t.value
                });
                var n = a ? e(e({}, t), {
                    callback: function(e) {
                        i = e
                    }
                }) : t.value;
                return this.$emit("input", n), this.$emit("change", n), i
            },
            setShowClear: function() {
                var e = this.data,
                    t = e.clearable,
                    i = e.readonly,
                    a = e.clearTrigger,
                    n = this.focused,
                    o = this.value,
                    r = !1;
                t && !i && (r = !!o && ("always" === a || "focus" === a && n));
                this.setData({
                    showClear: r
                })
            },
            noop: function() {}
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/field/index.js'
});
require("miniprogram_npm/@vant/weapp/field/index.js");