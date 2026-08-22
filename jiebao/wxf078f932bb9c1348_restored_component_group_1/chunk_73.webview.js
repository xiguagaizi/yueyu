$gwx_XC_71 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_71 || [];

        function gz$gwx_XC_71_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '我的订单'])
                Z([
                    [7],
                    [3, 'loaded']
                ])
                Z([3, 'container'])
                Z([3, 'order-list'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'orders']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([3, 'empty-state'])
                Z([3, '#999'])
                Z([3, 'orders-o'])
                Z([3, '64rpx'])
                Z([3, 'empty-text'])
                Z([3, '暂无订单'])
                Z([
                    [7],
                    [3, 'orders']
                ])
                Z([3, 'id'])
                Z([3, 'order-item'])
                Z([3, 'order-header'])
                Z([3, 'order-time'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'success_time']
                ]])
                Z([3, 'order-status success'])
                Z([3, '已完成'])
                Z([3, 'order-content'])
                Z([3, 'goods-info'])
                Z([3, 'goods-name'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'desc']
                ]])
                Z([3, 'goods-price'])
                Z([3, 'currency'])
                Z([3, '¥'])
                Z([3, 'amount'])
                Z([a, [
                    [2, '/'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'amount']
                    ],
                    [1, 100]
                ]])
                Z([3, 'order-footer'])
                Z([3, 'order-id'])
                Z([a, [3, '订单号：'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'transaction_id']
                    ]
                ])
                Z([3, 'copyOrderId'])
                Z([3, 'copy-icon'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'orderId']
                ])
                Z([3, 'description'])
                Z([3, '28rpx'])
                Z([3, 'loading-more'])
                Z([
                    [7],
                    [3, 'loading']
                ])
                Z([3, '24rpx'])
                Z([3, 'spinner'])
                Z([3, '加载中...'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'hasMore']
                    ]
                ])
                Z([3, 'no-more'])
                Z([3, '没有更多订单了'])
                Z([3, 'loadMore'])
                Z([3, 'load-more-btn'])
                Z([3, '点击加载更多'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_71_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_71_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_71 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_71 = true;
        var x = ['./pages/order/list/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_71_1()
            var c6IB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, c6IB)
            var f5IB = _v()
            _(r, f5IB)
            if (_oz(z, 5, e, s, gg)) {
                f5IB.wxVkey = 1
                var h7IB = _n('view')
                _rz(z, h7IB, 'class', 6, e, s, gg)
                var o8IB = _n('view')
                _rz(z, o8IB, 'class', 7, e, s, gg)
                var c9IB = _v()
                _(o8IB, c9IB)
                if (_oz(z, 8, e, s, gg)) {
                    c9IB.wxVkey = 1
                    var o0IB = _n('view')
                    _rz(z, o0IB, 'class', 9, e, s, gg)
                    var lAJB = _mz(z, 'van-icon', ['color', 10, 'name', 1, 'size', 2], [], e, s, gg)
                    _(o0IB, lAJB)
                    var aBJB = _n('view')
                    _rz(z, aBJB, 'class', 13, e, s, gg)
                    var tCJB = _oz(z, 14, e, s, gg)
                    _(aBJB, tCJB)
                    _(o0IB, aBJB)
                    _(c9IB, o0IB)
                } else {
                    c9IB.wxVkey = 2
                    var eDJB = _n('view')
                    var bEJB = _v()
                    _(eDJB, bEJB)
                    var oFJB = function(oHJB, xGJB, fIJB, gg) {
                        var hKJB = _n('view')
                        _rz(z, hKJB, 'class', 17, oHJB, xGJB, gg)
                        var oLJB = _n('view')
                        _rz(z, oLJB, 'class', 18, oHJB, xGJB, gg)
                        var cMJB = _n('text')
                        _rz(z, cMJB, 'class', 19, oHJB, xGJB, gg)
                        var oNJB = _oz(z, 20, oHJB, xGJB, gg)
                        _(cMJB, oNJB)
                        _(oLJB, cMJB)
                        var lOJB = _n('text')
                        _rz(z, lOJB, 'class', 21, oHJB, xGJB, gg)
                        var aPJB = _oz(z, 22, oHJB, xGJB, gg)
                        _(lOJB, aPJB)
                        _(oLJB, lOJB)
                        _(hKJB, oLJB)
                        var tQJB = _n('view')
                        _rz(z, tQJB, 'class', 23, oHJB, xGJB, gg)
                        var eRJB = _n('view')
                        _rz(z, eRJB, 'class', 24, oHJB, xGJB, gg)
                        var bSJB = _n('view')
                        _rz(z, bSJB, 'class', 25, oHJB, xGJB, gg)
                        var oTJB = _oz(z, 26, oHJB, xGJB, gg)
                        _(bSJB, oTJB)
                        _(eRJB, bSJB)
                        var xUJB = _n('view')
                        _rz(z, xUJB, 'class', 27, oHJB, xGJB, gg)
                        var oVJB = _n('text')
                        _rz(z, oVJB, 'class', 28, oHJB, xGJB, gg)
                        var fWJB = _oz(z, 29, oHJB, xGJB, gg)
                        _(oVJB, fWJB)
                        _(xUJB, oVJB)
                        var cXJB = _n('text')
                        _rz(z, cXJB, 'class', 30, oHJB, xGJB, gg)
                        var hYJB = _oz(z, 31, oHJB, xGJB, gg)
                        _(cXJB, hYJB)
                        _(xUJB, cXJB)
                        _(eRJB, xUJB)
                        _(tQJB, eRJB)
                        _(hKJB, tQJB)
                        var oZJB = _n('view')
                        _rz(z, oZJB, 'class', 32, oHJB, xGJB, gg)
                        var c1JB = _n('view')
                        _rz(z, c1JB, 'class', 33, oHJB, xGJB, gg)
                        var o2JB = _oz(z, 34, oHJB, xGJB, gg)
                        _(c1JB, o2JB)
                        var l3JB = _mz(z, 'van-icon', ['bindtap', 35, 'class', 1, 'data-id', 2, 'name', 3, 'size', 4], [], oHJB, xGJB, gg)
                        _(c1JB, l3JB)
                        _(oZJB, c1JB)
                        _(hKJB, oZJB)
                        _(fIJB, hKJB)
                        return fIJB
                    }
                    bEJB.wxXCkey = 4
                    _2z(z, 15, oFJB, e, s, gg, bEJB, 'item', 'index', 'id')
                    _(c9IB, eDJB)
                }
                var a4JB = _n('view')
                _rz(z, a4JB, 'class', 40, e, s, gg)
                var t5JB = _v()
                _(a4JB, t5JB)
                if (_oz(z, 41, e, s, gg)) {
                    t5JB.wxVkey = 1
                    var e6JB = _mz(z, 'van-loading', ['size', 42, 'type', 1], [], e, s, gg)
                    var b7JB = _oz(z, 44, e, s, gg)
                    _(e6JB, b7JB)
                    _(t5JB, e6JB)
                } else if (_oz(z, 45, e, s, gg)) {
                    t5JB.wxVkey = 2
                    var o8JB = _n('view')
                    _rz(z, o8JB, 'class', 46, e, s, gg)
                    var x9JB = _oz(z, 47, e, s, gg)
                    _(o8JB, x9JB)
                    _(t5JB, o8JB)
                } else {
                    t5JB.wxVkey = 3
                    var o0JB = _mz(z, 'view', ['bindtap', 48, 'class', 1], [], e, s, gg)
                    var fAKB = _oz(z, 50, e, s, gg)
                    _(o0JB, fAKB)
                    _(t5JB, o0JB)
                }
                t5JB.wxXCkey = 1
                t5JB.wxXCkey = 3
                _(o8IB, a4JB)
                c9IB.wxXCkey = 1
                c9IB.wxXCkey = 3
                c9IB.wxXCkey = 3
                _(h7IB, o8IB)
                _(f5IB, h7IB)
            }
            f5IB.wxXCkey = 1
            f5IB.wxXCkey = 3
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
                g = "$gwx_XC_71";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_71();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/list/index.wxml'] = [$gwx_XC_71, './pages/order/list/index.wxml'];
else __wxAppCode__['pages/order/list/index.wxml'] = $gwx_XC_71('./pages/order/list/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/order/list/index.wxss'] = setCssToHead([".", [1], "container{background:#f8f9fa;min-height:100vh;padding-bottom:", [0, 40], "}\n.", [1], "order-list{padding:", [0, 20], "}\n.", [1], "empty-state{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding:", [0, 120], " 0}\n.", [1], "empty-text{color:#999;font-size:", [0, 28], ";margin-top:", [0, 20], "}\n.", [1], "order-item{background:#fff;border-radius:", [0, 12], ";box-shadow:0 ", [0, 2], " ", [0, 8], " rgba(0,0,0,.04);margin-bottom:", [0, 20], ";padding:", [0, 30], "}\n.", [1], "order-header{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #f5f5f5;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], ";padding-bottom:", [0, 20], "}\n.", [1], "order-time{color:#666;font-size:", [0, 26], "}\n.", [1], "order-status{color:#ff6b6b;font-size:", [0, 26], "}\n.", [1], "order-status.", [1], "success{color:#51cf66}\n.", [1], "goods-info{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "goods-name{color:#333;font-size:", [0, 30], ";font-weight:500}\n.", [1], "goods-price{-webkit-align-items:baseline;align-items:baseline;display:-webkit-flex;display:flex}\n.", [1], "currency{color:#333;font-size:", [0, 24], ";margin-right:", [0, 4], "}\n.", [1], "amount{color:#333;font-size:", [0, 32], ";font-weight:700}\n.", [1], "order-footer{border-top:", [0, 1], " solid #f5f5f5;margin-top:", [0, 20], ";padding-top:", [0, 20], "}\n.", [1], "order-id{-webkit-align-items:center;align-items:center;color:#999;display:-webkit-flex;display:flex;font-size:", [0, 24], ";margin-bottom:", [0, 16], "}\n.", [1], "copy-icon{color:#666;margin-left:", [0, 10], "}\n.", [1], "action-buttons{display:-webkit-flex;display:flex;gap:", [0, 20], ";-webkit-justify-content:flex-end;justify-content:flex-end}\n.", [1], "action-btn{background:#fff;border-radius:", [0, 8], ";font-size:", [0, 26], ";padding:", [0, 12], " ", [0, 30], "}\n.", [1], "pay-btn{background:#1989fa;border:none;color:#fff}\n.", [1], "cancel-btn{border:", [0, 1], " solid #ddd;color:#666}\n.", [1], "custom-nav{--nav-bar-text-color:#333;--nav-bar-icon-color:#333;--nav-bar-background-color:#fff}\n.", [1], "loading-more{color:#999;font-size:", [0, 26], ";padding:", [0, 30], " 0;text-align:center}\n.", [1], "load-more-btn{color:#1989fa}\n.", [1], "no-more{color:#999}\n", ], undefined, {
        path: "./pages/order/list/index.wxss"
    });
}