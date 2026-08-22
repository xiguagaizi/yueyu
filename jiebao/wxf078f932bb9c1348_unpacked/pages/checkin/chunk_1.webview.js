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
                Z([3, 'label'])
                Z([3, '优先打卡，是从以往打卡记录中，挑选打卡表现优越的同学，作为标杆，可以提前打卡，打卡记录将排于最前面，方便其他同学参考学习。'])
                Z(z[6])
                Z(z[7])
                Z([3, '享受权益'])
                Z(z[6])
                Z([3, 'list'])
                Z(z[10])
                Z([3, '1、提前打卡最新内容。'])
                Z([3, '2、优先免费打卡纠音。'])
                Z([3, 'red'])
                Z(z[1])
                Z([3, '如不需要此权益，可点击下方按钮，发送数字“6“即可'])
                Z([3, 'margin-top:60rpx;padding:10rpx;'])
                Z([3, 'contact'])
                Z([3, 'margin-top:20rpx'])
                Z([3, 'warn'])
                Z([3, '我不需要此权益'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_1 = true;
        var x = ['./pages/checkin/help/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_1_1()
            var tYC = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, tYC)
            var eZC = _n('view')
            _rz(z, eZC, 'class', 5, e, s, gg)
            var b1C = _n('van-cell-group')
            var o2C = _mz(z, 'van-cell', ['border', 6, 'size', 1, 'title', 2, 'useLabelSlot', 3], [], e, s, gg)
            var x3C = _n('view')
            _rz(z, x3C, 'slot', 10, e, s, gg)
            var o4C = _oz(z, 11, e, s, gg)
            _(x3C, o4C)
            _(o2C, x3C)
            _(b1C, o2C)
            var f5C = _mz(z, 'van-cell', ['border', 12, 'size', 1, 'title', 2, 'useLabelSlot', 3], [], e, s, gg)
            var c6C = _mz(z, 'view', ['class', 16, 'slot', 1], [], e, s, gg)
            var h7C = _n('view')
            var o8C = _oz(z, 18, e, s, gg)
            _(h7C, o8C)
            _(c6C, h7C)
            var c9C = _n('view')
            var o0C = _oz(z, 19, e, s, gg)
            _(c9C, o0C)
            _(c6C, c9C)
            _(f5C, c6C)
            _(b1C, f5C)
            _(eZC, b1C)
            var lAD = _mz(z, 'van-notice-bar', ['wrapable', -1, 'color', 20, 'scrollable', 1, 'text', 2], [], e, s, gg)
            _(eZC, lAD)
            var aBD = _n('view')
            _rz(z, aBD, 'style', 23, e, s, gg)
            var tCD = _mz(z, 'button', ['openType', 24, 'style', 1, 'type', 2], [], e, s, gg)
            var eDD = _oz(z, 27, e, s, gg)
            _(tCD, eDD)
            _(aBD, tCD)
            _(eZC, aBD)
            _(r, eZC)
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
            outerGlobal.__wxml_comp_version__ = 0.02
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
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
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
else __wxAppCode__['pages/checkin/help/index.wxml'] = $gwx0_XC_1('./pages/checkin/help/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/checkin/help/index.wxss'] = setCssToHead([".", [1], "list{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "list wx-view{padding:", [0, 10], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/checkin/help/index.wxss:1:99)", {
        path: "./pages/checkin/help/index.wxss"
    });
}