$gwx_XC_65 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_65 || [];

        function gz$gwx_XC_65_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([1, true])
                Z([3, '粤语派'])
                Z([
                    [7],
                    [3, 'denyParameter']
                ])
                Z([3, 'launchAppError'])
                Z([3, 'nav-back-button'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'denyParameter']
                    ]
                ])
                Z([3, 'launchApp'])
                Z([3, 'left'])
                Z([3, '‹ 返回'])
                Z([3, 'page'])
                Z([3, 'content'])
                Z([3, 'app-row'])
                Z([3, 'logo'])
                Z([3, 'aspectFit'])
                Z([3, '../../../images/mp-logo.png'])
                Z([3, 'app-name'])
                Z([3, '粤语派'])
                Z([3, 'action'])
                Z([3, '申请'])
                Z([3, 'scope-row'])
                Z([3, 'scope-icon'])
                Z([3, '✓'])
                Z([3, 'scope-text'])
                Z([3, '获取你在当前小程序的登录状态信息'])
                Z([3, 'actions'])
                Z([
                    [7],
                    [3, 'allowParameter']
                ])
                Z(z[5])
                Z([3, 'allow'])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'loading']
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'allowParameter']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'loading']
                ])
                Z(z[8])
                Z([3, '允许'])
                Z(z[4])
                Z(z[5])
                Z([3, 'deny'])
                Z(z[7])
                Z(z[8])
                Z([3, '拒绝'])
                Z([
                    [7],
                    [3, 'failedMessage']
                ])
                Z([3, 'error'])
                Z([a, [
                    [7],
                    [3, 'failedMessage']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_65_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_65_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_65 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_65 = true;
        var x = ['./pages/app/native-login/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_65_1()
            var oLCB = _mz(z, 'van-nav-bar', ['border', 0, 'customClass', 1, 'safeAreaInsetTop', 1, 'title', 2], [], e, s, gg)
            var cMCB = _mz(z, 'button', ['appParameter', 4, 'binderror', 1, 'class', 2, 'disabled', 3, 'openType', 4, 'slot', 5], [], e, s, gg)
            var oNCB = _oz(z, 10, e, s, gg)
            _(cMCB, oNCB)
            _(oLCB, cMCB)
            _(r, oLCB)
            var lOCB = _n('view')
            _rz(z, lOCB, 'class', 11, e, s, gg)
            var aPCB = _n('view')
            _rz(z, aPCB, 'class', 12, e, s, gg)
            var tQCB = _n('view')
            _rz(z, tQCB, 'class', 13, e, s, gg)
            var eRCB = _mz(z, 'image', ['class', 14, 'mode', 1, 'src', 2], [], e, s, gg)
            _(tQCB, eRCB)
            var bSCB = _n('text')
            _rz(z, bSCB, 'class', 17, e, s, gg)
            var oTCB = _oz(z, 18, e, s, gg)
            _(bSCB, oTCB)
            _(tQCB, bSCB)
            var xUCB = _n('text')
            _rz(z, xUCB, 'class', 19, e, s, gg)
            var oVCB = _oz(z, 20, e, s, gg)
            _(xUCB, oVCB)
            _(tQCB, xUCB)
            _(aPCB, tQCB)
            var fWCB = _n('view')
            _rz(z, fWCB, 'class', 21, e, s, gg)
            var cXCB = _n('text')
            _rz(z, cXCB, 'class', 22, e, s, gg)
            var hYCB = _oz(z, 23, e, s, gg)
            _(cXCB, hYCB)
            _(fWCB, cXCB)
            var oZCB = _n('text')
            _rz(z, oZCB, 'class', 24, e, s, gg)
            var c1CB = _oz(z, 25, e, s, gg)
            _(oZCB, c1CB)
            _(fWCB, oZCB)
            _(aPCB, fWCB)
            _(lOCB, aPCB)
            var o2CB = _n('view')
            _rz(z, o2CB, 'class', 26, e, s, gg)
            var a4CB = _mz(z, 'button', ['appParameter', 27, 'binderror', 1, 'class', 2, 'disabled', 3, 'loading', 4, 'openType', 5], [], e, s, gg)
            var t5CB = _oz(z, 33, e, s, gg)
            _(a4CB, t5CB)
            _(o2CB, a4CB)
            var e6CB = _mz(z, 'button', ['appParameter', 34, 'binderror', 1, 'class', 2, 'disabled', 3, 'openType', 4], [], e, s, gg)
            var b7CB = _oz(z, 39, e, s, gg)
            _(e6CB, b7CB)
            _(o2CB, e6CB)
            var l3CB = _v()
            _(o2CB, l3CB)
            if (_oz(z, 40, e, s, gg)) {
                l3CB.wxVkey = 1
                var o8CB = _n('text')
                _rz(z, o8CB, 'class', 41, e, s, gg)
                var x9CB = _oz(z, 42, e, s, gg)
                _(o8CB, x9CB)
                _(l3CB, o8CB)
            }
            l3CB.wxXCkey = 1
            _(lOCB, o2CB)
            _(r, lOCB)
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
                g = "$gwx_XC_65";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_65();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/native-login/index.wxml'] = [$gwx_XC_65, './pages/app/native-login/index.wxml'];
else __wxAppCode__['pages/app/native-login/index.wxml'] = $gwx_XC_65('./pages/app/native-login/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/app/native-login/index.wxss'] = setCssToHead([".", [1], "page{background:#fff;box-sizing:border-box;color:#1f2430;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;min-height:calc(100vh - 46px);padding:0 ", [0, 32], " ", [0, 56], "}\n.", [1], "custom-nav{--nav-bar-background-color:#fff;--nav-bar-text-color:#111827;--nav-bar-title-text-color:#111827;--nav-bar-icon-color:#111827}\n.", [1], "nav-back-button{background:transparent;color:#111827;font-size:", [0, 28], ";font-weight:500;height:46px;line-height:46px;margin:0;padding:0}\n.", [1], "nav-back-button::after{border:0}\n.", [1], "content{padding:", [0, 44], " ", [0, 28], " 0}\n.", [1], "app-row,.", [1], "scope-row{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "logo{border-radius:", [0, 10], ";height:", [0, 44], ";margin-right:", [0, 20], ";width:", [0, 44], "}\n.", [1], "app-name{font-size:", [0, 34], ";font-weight:700;margin-right:", [0, 22], "}\n.", [1], "action{color:#1f2430;font-size:", [0, 28], ";font-weight:600}\n.", [1], "scope-row{margin-top:", [0, 34], "}\n.", [1], "scope-icon{border:", [0, 3], " solid #9ca3af;border-radius:", [0, 18], ";box-sizing:border-box;color:#6b7280;font-size:", [0, 24], ";height:", [0, 36], ";line-height:", [0, 31], ";margin-right:", [0, 20], ";text-align:center;width:", [0, 36], "}\n.", [1], "scope-text{font-size:", [0, 32], ";font-weight:700}\n.", [1], "actions{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin-top:auto;padding-bottom:", [0, 64], "}\n.", [1], "allow,.", [1], "deny{border-radius:", [0, 12], ";font-size:", [0, 34], ";font-weight:700;height:", [0, 82], ";line-height:", [0, 82], ";padding:0;width:", [0, 360], "}\n.", [1], "allow{background:#42c35d;color:#fff}\n.", [1], "allow::after,.", [1], "deny::after{border:0}\n.", [1], "deny{background:#f1f3f5;color:#42c35d;margin-top:", [0, 24], "}\n.", [1], "error{color:#dc2626;font-size:", [0, 26], ";line-height:1.45;margin-top:", [0, 28], ";text-align:center;width:", [0, 520], "}\n", ], undefined, {
        path: "./pages/app/native-login/index.wxss"
    });
}