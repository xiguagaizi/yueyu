$gwx_XC_39 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];

        function gz$gwx_XC_39_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'rootPortal']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
        }

        function gz$gwx_XC_39_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_39_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_39_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'overlay']
                ])
                Z([3, 'onClickOverlay'])
                Z([
                    [7],
                    [3, 'overlayStyle']
                ])
                Z([
                    [7],
                    [3, 'duration']
                ])
                Z([
                    [7],
                    [3, 'lockScroll']
                ])
                Z([
                    [7],
                    [3, 'rootPortal']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [7],
                    [3, 'zIndex']
                ])
                Z(z[5])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_39 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_39 = true;
        var x = ['./miniprogram_npm/@vant/weapp/overlay/index.wxml', './overlay.wxml', './miniprogram_npm/@vant/weapp/popup/index.wxml', './popup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_39_1()
            var oDZ = e_[x[0]].i
            _ai(oDZ, x[1], e_, x[0], 1, 1)
            var cEZ = _v()
            _(r, cEZ)
            if (_oz(z, 0, e, s, gg)) {
                cEZ.wxVkey = 1
                var oFZ = _n('root-portal')
                var lGZ = e_[x[0]].j
                _ic(x[1], e_, x[0], e, s, oFZ, gg);
                lGZ.pop()
                _(cEZ, oFZ)
            } else {
                cEZ.wxVkey = 2
                var aHZ = e_[x[0]].j
                _ic(x[1], e_, x[0], e, s, cEZ, gg);
                aHZ.pop()
            }
            cEZ.wxXCkey = 1
            oDZ.pop()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [x[1]],
            ic: []
        }
        d_[x[2]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_XC_39_2()
            var eJZ = e_[x[2]].i
            _ai(eJZ, x[3], e_, x[2], 1, 87)
            var bKZ = _v()
            _(r, bKZ)
            if (_oz(z, 0, e, s, gg)) {
                bKZ.wxVkey = 1
                var xMZ = _mz(z, 'van-overlay', ['bind:click', 1, 'customStyle', 1, 'duration', 2, 'lockScroll', 3, 'rootPortal', 4, 'show', 5, 'zIndex', 6], [], e, s, gg)
                _(bKZ, xMZ)
            }
            var oLZ = _v()
            _(r, oLZ)
            if (_oz(z, 8, e, s, gg)) {
                oLZ.wxVkey = 1
                var oNZ = _n('root-portal')
                var fOZ = e_[x[2]].j
                _ic(x[3], e_, x[2], e, s, oNZ, gg);
                fOZ.pop()
                _(oLZ, oNZ)
            } else {
                oLZ.wxVkey = 2
                var cPZ = e_[x[2]].j
                _ic(x[3], e_, x[2], e, s, oLZ, gg);
                cPZ.pop()
            }
            bKZ.wxXCkey = 1
            bKZ.wxXCkey = 3
            oLZ.wxXCkey = 1
            eJZ.pop()
            return r
        }
        e_[x[2]] = {
            f: m1,
            j: [],
            i: [],
            ti: [x[3]],
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
                g = "$gwx_XC_39";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_39();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = [$gwx_XC_39, './miniprogram_npm/@vant/weapp/overlay/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = $gwx_XC_39('./miniprogram_npm/@vant/weapp/overlay/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = [$gwx_XC_39, './miniprogram_npm/@vant/weapp/popup/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = $gwx_XC_39('./miniprogram_npm/@vant/weapp/popup/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-overlay{background-color:var(--overlay-background-color,rgba(0,0,0,.7));height:100%;left:0;position:fixed;top:0;width:100%}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/overlay/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-popup{-webkit-overflow-scrolling:touch;-webkit-animation:ease both;animation:ease both;background-color:var(--popup-background-color,#fff);box-sizing:border-box;max-height:100%;overflow-y:auto;position:fixed;transition-timing-function:ease}\n.", [1], "van-popup--center{left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}\n.", [1], "van-popup--center.", [1], "van-popup--round{border-radius:var(--popup-round-border-radius,16px)}\n.", [1], "van-popup--top{left:0;top:0;width:100%}\n.", [1], "van-popup--top.", [1], "van-popup--round{border-radius:0 0 var(--popup-round-border-radius,var(--popup-round-border-radius,16px)) var(--popup-round-border-radius,var(--popup-round-border-radius,16px))}\n.", [1], "van-popup--right{right:0;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.", [1], "van-popup--right.", [1], "van-popup--round{border-radius:var(--popup-round-border-radius,var(--popup-round-border-radius,16px)) 0 0 var(--popup-round-border-radius,var(--popup-round-border-radius,16px))}\n.", [1], "van-popup--bottom{bottom:0;left:0;width:100%}\n.", [1], "van-popup--bottom.", [1], "van-popup--round{border-radius:var(--popup-round-border-radius,var(--popup-round-border-radius,16px)) var(--popup-round-border-radius,var(--popup-round-border-radius,16px)) 0 0}\n.", [1], "van-popup--left{left:0;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.", [1], "van-popup--left.", [1], "van-popup--round{border-radius:0 var(--popup-round-border-radius,var(--popup-round-border-radius,16px)) var(--popup-round-border-radius,var(--popup-round-border-radius,16px)) 0}\n.", [1], "van-popup--bottom.", [1], "van-popup--safe{padding-bottom:env(safe-area-inset-bottom)}\n.", [1], "van-popup--bottom.", [1], "van-popup--safeTabBar,.", [1], "van-popup--top.", [1], "van-popup--safeTabBar{bottom:var(--tabbar-height,50px)}\n.", [1], "van-popup--safeTop{padding-top:env(safe-area-inset-top)}\n.", [1], "van-popup__close-icon{color:var(--popup-close-icon-color,#969799);font-size:var(--popup-close-icon-size,18px);position:absolute;z-index:var(--popup-close-icon-z-index,1)}\n.", [1], "van-popup__close-icon--top-left{left:var(--popup-close-icon-margin,16px);top:var(--popup-close-icon-margin,16px)}\n.", [1], "van-popup__close-icon--top-right{right:var(--popup-close-icon-margin,16px);top:var(--popup-close-icon-margin,16px)}\n.", [1], "van-popup__close-icon--bottom-left{bottom:var(--popup-close-icon-margin,16px);left:var(--popup-close-icon-margin,16px)}\n.", [1], "van-popup__close-icon--bottom-right{bottom:var(--popup-close-icon-margin,16px);right:var(--popup-close-icon-margin,16px)}\n.", [1], "van-popup__close-icon:active{opacity:.6}\n.", [1], "van-scale-enter-active,.", [1], "van-scale-leave-active{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}\n.", [1], "van-scale-enter,.", [1], "van-scale-leave-to{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}\n.", [1], "van-fade-enter-active,.", [1], "van-fade-leave-active{transition-property:opacity}\n.", [1], "van-fade-enter,.", [1], "van-fade-leave-to{opacity:0}\n.", [1], "van-center-enter-active,.", [1], "van-center-leave-active{transition-property:opacity}\n.", [1], "van-center-enter,.", [1], "van-center-leave-to{opacity:0}\n.", [1], "van-bottom-enter-active,.", [1], "van-bottom-leave-active,.", [1], "van-left-enter-active,.", [1], "van-left-leave-active,.", [1], "van-right-enter-active,.", [1], "van-right-leave-active,.", [1], "van-top-enter-active,.", [1], "van-top-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}\n.", [1], "van-bottom-enter,.", [1], "van-bottom-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}\n.", [1], "van-top-enter,.", [1], "van-top-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}\n.", [1], "van-left-enter,.", [1], "van-left-leave-to{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}\n.", [1], "van-right-enter,.", [1], "van-right-leave-to{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/popup/index.wxss"
    });
}