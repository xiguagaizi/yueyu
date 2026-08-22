$gwx0_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_1 || [];

        function gz$gwx0_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '优先打卡专场'])
                Z([3, 'container'])
                Z([1, true])
                Z([3, 'large'])
                Z([3, '什么是优先打卡？'])
                Z(z[6])
                Z(z[6])
                Z(z[7])
                Z([3, '享受权益'])
                Z(z[6])
                Z([3, 'red'])
                Z(z[1])
                Z([3, '如不需要此权益，可点击下方按钮，发送数字“6“即可'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_1 = true;
        var x = ['./pages/checkin/help/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_1_1()
            var oXB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, oXB)
            var fYB = _n('view')
            _rz(z, fYB, 'class', 5, e, s, gg)
            var cZB = _n('van-cell-group')
            var h1B = _mz(z, 'van-cell', ['border', 6, 'size', 1, 'title', 2, 'useLabelSlot', 3], [], e, s, gg)
            _(cZB, h1B)
            var o2B = _mz(z, 'van-cell', ['border', 10, 'size', 1, 'title', 2, 'useLabelSlot', 3], [], e, s, gg)
            _(cZB, o2B)
            _(fYB, cZB)
            var c3B = _mz(z, 'van-notice-bar', ['wrapable', -1, 'color', 14, 'scrollable', 1, 'text', 2], [], e, s, gg)
            _(fYB, c3B)
            _(r, fYB)
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
                g = "$gwx0_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/help/index.wxml'] = [$gwx0_XC_1, './pages/checkin/help/index.wxml'];
else __wxAppCode__['pages/checkin/help/index.wxml'] = $gwx0_XC_1('./pages/checkin/help/index.wxml');;
__wxRoute = "pages/checkin/help/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/help/index.js";
define("pages/checkin/help/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var a = require("../../../commons/utils");
    Page({
        navBack: a.navBack,
        data: {},
        onLoad: function(a) {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/help/index.js'
});
require("pages/checkin/help/index.js");