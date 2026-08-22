$gwx_XC_69 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_69 || [];

        function gz$gwx_XC_69_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_69_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_69_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_69_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '有声内容'])
                Z([
                    [7],
                    [3, 'noticeText']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_69_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_69_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_69 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_69 = true;
        var x = ['./pages/audio/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_69_1()
            var tCY = _n('van-sticky')
            var eDY = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(tCY, eDY)
            _(r, tCY)
            var aBY = _v()
            _(r, aBY)
            if (_oz(z, 5, e, s, gg)) {
                aBY.wxVkey = 1
            }
            aBY.wxXCkey = 1
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
                g = "$gwx_XC_69";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_69();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/audio/index/index.wxml'] = [$gwx_XC_69, './pages/audio/index/index.wxml'];
else __wxAppCode__['pages/audio/index/index.wxml'] = $gwx_XC_69('./pages/audio/index/index.wxml');;
__wxRoute = "pages/audio/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/audio/index/index.js";
define("pages/audio/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../commons/utils"),
        i = require("../../../commons/config"),
        t = [{
            id: "poetry",
            title: "古诗词",
            desc: "诗词赏析，单独详情风格",
            icon: "../../../images/home/text.png",
            background: "linear-gradient(180deg, #FFF1DE 0%, #FFF8EE 100%)",
            titleColor: "#A65B00",
            descColor: "#A65B00",
            path: "/pages/audio/list/index?category=poetry&detailType=poetry&title=古诗词"
        }, {
            id: "book",
            title: "粤文读本",
            desc: "精选有声读物，边听边读",
            icon: "../../../images/home/audio-book.png",
            background: "linear-gradient(180deg, #E7F4FF 0%, #F6FBFF 100%)",
            titleColor: "#225C9C",
            descColor: "#225C9C",
            path: "/pages/audio/list/index?category=book&detailType=audio&title=粤文读本"
        }, {
            id: "daily_voice",
            title: "粤语鸡汤",
            desc: "短篇音频图文，轻松跟读",
            icon: "../../../images/home/daily-voice.png",
            background: "linear-gradient(180deg, #E6FBF3 0%, #F5FFFB 100%)",
            titleColor: "#17725E",
            descColor: "#17725E",
            path: "/pages/audio/list/index?category=daily_voice&detailType=audio&title=粤语鸡汤"
        }];

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            i = "string" == typeof e ? e.trim().toLowerCase() : "";
        return i && t.some((function(e) {
            return e.id === i
        })) ? i : ""
    }

    function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!e) return t.slice();
        var i = t.find((function(i) {
                return i.id === e
            })),
            o = t.filter((function(i) {
                return i.id !== e
            }));
        return i ? [i].concat(o) : t.slice()
    }

    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        switch (e) {
            case "book":
                return "原“粤文读本”入口已迁移到这里。";
            case "daily_voice":
                return "原“每日粤听”入口已迁移到这里。";
            default:
                return ""
        }
    }
    Page({
        navBack: e.navBack,
        data: {
            items: t,
            focusId: "",
            noticeText: ""
        },
        onLoad: function() {
            var e, i, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null === (e = (i = wx).showShareMenu) || void 0 === e || e.call(i, {
                menus: ["shareAppMessage", "shareTimeline"]
            });
            var r = o(t.focus);
            this.setData({
                focusId: r,
                noticeText: a(r),
                items: n(r)
            })
        },
        navToList: function(e) {
            var i, t = ((null == e || null === (i = e.currentTarget) || void 0 === i ? void 0 : i.dataset) || {}).path,
                o = void 0 === t ? "" : t;
            o && wx.navigateTo({
                url: o
            })
        },
        onShareAppMessage: function() {
            return {
                title: "粤语派有声内容",
                path: "/pages/audio/index/index",
                imageUrl: i.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        },
        onShareTimeline: function() {
            return {
                title: "粤语派有声内容",
                query: "",
                imageUrl: i.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/audio/index/index.js'
});
require("pages/audio/index/index.js");