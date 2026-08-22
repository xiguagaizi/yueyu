$gwx_XC_25 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];

        function gz$gwx_XC_25_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'custom-class van-empty'])
                Z([3, 'van-empty__image'])
                Z([3, 'image'])
                Z(z[1])
                Z([
                    [7],
                    [3, 'image']
                ])
                Z([3, 'van-empty__image__img'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'imageUrl']
                    ],
                    [
                        [5],
                        [
                            [7],
                            [3, 'image']
                        ]
                    ]
                ])
                Z([3, 'van-empty__description'])
                Z([3, 'description'])
                Z(z[7])
                Z([a, [
                    [7],
                    [3, 'description']
                ]])
                Z([3, 'van-empty__bottom'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_25 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_25 = true;
        var x = ['./miniprogram_npm/@vant/weapp/empty/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_25_1()
            var oBU = _n('view')
            _rz(z, oBU, 'class', 0, e, s, gg)
            var cCU = _n('view')
            _rz(z, cCU, 'class', 1, e, s, gg)
            var oDU = _n('slot')
            _rz(z, oDU, 'name', 2, e, s, gg)
            _(cCU, oDU)
            _(oBU, cCU)
            var lEU = _n('view')
            _rz(z, lEU, 'class', 3, e, s, gg)
            var aFU = _v()
            _(lEU, aFU)
            if (_oz(z, 4, e, s, gg)) {
                aFU.wxVkey = 1
                var tGU = _mz(z, 'image', ['class', 5, 'src', 1], [], e, s, gg)
                _(aFU, tGU)
            }
            aFU.wxXCkey = 1
            _(oBU, lEU)
            var eHU = _n('view')
            _rz(z, eHU, 'class', 7, e, s, gg)
            var bIU = _n('slot')
            _rz(z, bIU, 'name', 8, e, s, gg)
            _(eHU, bIU)
            _(oBU, eHU)
            var oJU = _n('view')
            _rz(z, oJU, 'class', 9, e, s, gg)
            var xKU = _oz(z, 10, e, s, gg)
            _(oJU, xKU)
            _(oBU, oJU)
            var oLU = _n('view')
            _rz(z, oLU, 'class', 11, e, s, gg)
            var fMU = _n('slot')
            _(oLU, fMU)
            _(oBU, oLU)
            _(r, oBU)
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
                g = "$gwx_XC_25";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_25();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/empty/index.wxml'] = [$gwx_XC_25, './miniprogram_npm/@vant/weapp/empty/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/empty/index.wxml'] = $gwx_XC_25('./miniprogram_npm/@vant/weapp/empty/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/empty/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-empty{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding:32px 0}\n.", [1], "van-empty__image{height:160px;width:160px}\n.", [1], "van-empty__image:empty{display:none}\n.", [1], "van-empty__image__img{height:100%;width:100%}\n.", [1], "van-empty__image:not(:empty)+.", [1], "van-empty__image{display:none}\n.", [1], "van-empty__description{color:#969799;font-size:14px;line-height:20px;margin-top:16px;padding:0 60px}\n.", [1], "van-empty__description:empty,.", [1], "van-empty__description:not(:empty)+.", [1], "van-empty__description{display:none}\n.", [1], "van-empty__bottom{margin-top:24px}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/empty/index.wxss"
    });
}