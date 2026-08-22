/* [OBFUSCATED] status=partial techniques=hex-literal */
$gwx_XC_64 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_64 || [];

        function gz$gwx_XC_64_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '登录'])
                Z([3, 'donutLogin__app-info'])
                Z([3, 'donutLogin__app-icon'])
                Z([
                    [7],
                    [3, 'appIcon']
                ])
                Z([3, 'donutLogin__login-action'])
                Z([3, 'weixinLogin'])
                Z([3, 'donutLogin__login-button wechat'])
                Z([3, 'primary'])
                Z([3, '/images/icon/wx.png'])
                Z([3, '微信登录'])
                Z([3, 'mpLogin'])
                Z([3, 'donutLogin__login-button miniprogram'])
                Z([3, '/images/icon/mp.png'])
                Z([3, '粤语派小程序登录'])
                Z([3, 'onCheckboxChange'])
                Z([a, [3, 'donutLogin__checkbox-container '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'checkboxShake']
                        ],
                        [1, 'shake'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'checkedAgree']
                ])
                Z([3, 'donutLogin__checkbox'])
                Z([3, 'donutLogin__checkbox-text'])
                Z([3, '阅读并同意'])
                Z([3, 'onShowAgreement'])
                Z([3, '/pages/webview/index?url=https%3A%2F%2Fs.cantonesepi.top%2Fhtml%2FappWeb%2Fyyp%2Fuser_agreement.html'])
                Z([3, 'color:#576b95;'])
                Z([3, '《用户协议》'])
                Z([3, '和'])
                Z(z[24])
                Z([3, '/pages/webview/index?url=https%3A%2F%2Fs.cantonesepi.top%2Fhtml%2FappWeb%2Fyyp%2Fprivacy_policy.html'])
                Z(z[26])
                Z([3, '《隐私政策》'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_64_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_64_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_64 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_64 = true;
        var x = ['./pages/app/login/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_64_1()
            var tYBB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, tYBB)
            var eZBB = _n('view')
            _rz(z, eZBB, 'class', 5, e, s, gg)
            var b1BB = _mz(z, 'image', ['class', 6, 'src', 1], [], e, s, gg)
            _(eZBB, b1BB)
            _(r, eZBB)
            var o2BB = _n('view')
            _rz(z, o2BB, 'class', 8, e, s, gg)
            var x3BB = _mz(z, 'button', ['bindtap', 9, 'class', 1, 'type', 2], [], e, s, gg)
            var o4BB = _n('image')
            _rz(z, o4BB, 'src', 12, e, s, gg)
            _(x3BB, o4BB)
            var f5BB = _n('text')
            var c6BB = _oz(z, 13, e, s, gg)
            _(f5BB, c6BB)
            _(x3BB, f5BB)
            _(o2BB, x3BB)
            var h7BB = _mz(z, 'button', ['bindtap', 14, 'class', 1], [], e, s, gg)
            var o8BB = _n('image')
            _rz(z, o8BB, 'src', 16, e, s, gg)
            _(h7BB, o8BB)
            var c9BB = _n('text')
            var o0BB = _oz(z, 17, e, s, gg)
            _(c9BB, o0BB)
            _(h7BB, c9BB)
            _(o2BB, h7BB)
            var lACB = _n('checkbox-group')
            _rz(z, lACB, 'bindchange', 18, e, s, gg)
            var aBCB = _n('label')
            _rz(z, aBCB, 'class', 19, e, s, gg)
            var tCCB = _mz(z, 'checkbox', ['checked', 20, 'class', 1], [], e, s, gg)
            _(aBCB, tCCB)
            var eDCB = _n('span')
            _rz(z, eDCB, 'class', 22, e, s, gg)
            var bECB = _oz(z, 23, e, s, gg)
            _(eDCB, bECB)
            var oFCB = _mz(z, 'span', ['catchtap', 24, 'data-url', 1, 'style', 2], [], e, s, gg)
            var xGCB = _oz(z, 27, e, s, gg)
            _(oFCB, xGCB)
            _(eDCB, oFCB)
            var oHCB = _oz(z, 28, e, s, gg)
            _(eDCB, oHCB)
            var fICB = _mz(z, 'span', ['catchtap', 29, 'data-url', 1, 'style', 2], [], e, s, gg)
            var cJCB = _oz(z, 32, e, s, gg)
            _(fICB, cJCB)
            _(eDCB, fICB)
            _(aBCB, eDCB)
            _(lACB, aBCB)
            _(o2BB, lACB)
            _(r, o2BB)
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
                g = "$gwx_XC_64";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_64();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/login/index.wxml'] = [$gwx_XC_64, './pages/app/login/index.wxml'];
else __wxAppCode__['pages/app/login/index.wxml'] = $gwx_XC_64('./pages/app/login/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/app/login/index.wxss'] = setCssToHead([".", [1], "donutLogin__app-info{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 150], " 0}\n.", [1], "donutLogin__app-icon{border-radius:", [0, 40], ";height:", [0, 160], ";margin-bottom:", [0, 30], ";width:", [0, 160], "}\n.", [1], "donutLogin__app-name{color:#333;font-size:", [0, 56], ";font-weight:500}\n.", [1], "donutLogin__login-action{padding:0 ", [0, 40], "}\n.", [1], "donutLogin__login-button{-webkit-align-items:center;align-items:center;border-radius:", [0, 44], ";-webkit-column-gap:", [0, 8], ";column-gap:", [0, 8], ";display:-webkit-flex;display:flex;font-size:", [0, 32], ";font-weight:700;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 50], ";padding:0;position:relative}\n.", [1], "donutLogin__login-button wx-image{height:", [0, 32], ";width:", [0, 32], "}\n.", [1], "donutLogin__login-button wx-image.", [1], "apple-icon{height:", [0, 35], ";width:", [0, 35], "}\n.", [1], "donutLogin__login-button.", [1], "wechat{background:#07c160;color:#fff}\n.", [1], "donutLogin__login-button.", [1], "miniprogram{background:#3875f6;color:#fff}\n.", [1], "donutLogin__login-button.", [1], "phone,.", [1], "donutLogin__login-button.", [1], "quick{background:#fff;border:", [0, 2], " solid #e5e5e5;color:#333}\n.", [1], "donutLogin__login-button.", [1], "apple{background:#000;color:#fff}\n.", [1], "donutLogin__checkbox-container{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin-top:", [0, 20], "}\n@-webkit-keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}\n10%,30%,50%,70%,90%{-webkit-transform:translateX(", [0, -5], ");transform:translateX(", [0, -5], ")}\n20%,40%,60%,80%{-webkit-transform:translateX(", [0, 5], ");transform:translateX(", [0, 5], ")}\n}@keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}\n10%,30%,50%,70%,90%{-webkit-transform:translateX(", [0, -5], ");transform:translateX(", [0, -5], ")}\n20%,40%,60%,80%{-webkit-transform:translateX(", [0, 5], ");transform:translateX(", [0, 5], ")}\n}.", [1], "donutLogin__checkbox-container.", [1], "shake{-webkit-animation:shake .6s ease-in-out;animation:shake .6s ease-in-out}\n.", [1], "donutLogin__checkbox{-webkit-transform:scale(.8);transform:scale(.8)}\n.", [1], "donutLogin__checkbox-text{color:#999;font-size:", [0, 26], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/app/login/index.wxss:1:764)", {
        path: "./pages/app/login/index.wxss"
    });
}