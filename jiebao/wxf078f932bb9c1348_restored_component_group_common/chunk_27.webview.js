$gwx_XC_20 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];

        function gz$gwx_XC_20_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClickOverlay'])
                Z([
                    [7],
                    [3, 'closeOnClickOverlay']
                ])
                Z([a, [3, 'van-dialog van-dialog--'],
                    [
                        [7],
                        [3, 'theme']
                    ],
                    [
                        [7],
                        [3, 'className']
                    ],
                    [3, ' custom-class']
                ])
                Z([a, [3, 'width: '],
                    [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'utils']
                            ],
                            [3, 'addUnit']
                        ],
                        [
                            [5],
                            [
                                [7],
                                [3, 'width']
                            ]
                        ]
                    ],
                    [3, ';'],
                    [
                        [7],
                        [3, 'customStyle']
                    ]
                ])
                Z([
                    [7],
                    [3, 'overlay']
                ])
                Z([
                    [7],
                    [3, 'overlayStyle']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [7],
                    [3, 'transition']
                ])
                Z([
                    [7],
                    [3, 'zIndex']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'title']
                    ],
                    [
                        [7],
                        [3, 'useTitleSlot']
                    ]
                ])
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
                            [1, 'dialog__header']
                        ],
                        [
                            [8], 'isolated', [
                                [2, '!'],
                                [
                                    [2, '||'],
                                    [
                                        [7],
                                        [3, 'message']
                                    ],
                                    [
                                        [7],
                                        [3, 'useSlot']
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'useTitleSlot']
                ])
                Z([3, 'title'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([
                    [7],
                    [3, 'useSlot']
                ])
                Z([
                    [7],
                    [3, 'message']
                ])
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
                            [1, 'dialog__message']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'theme']
                                        ]
                                    ],
                                    [
                                        [7],
                                        [3, 'messageAlign']
                                    ]
                                ],
                                [
                                    [8], 'hasTitle', [
                                        [7],
                                        [3, 'title']
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'van-dialog__message-text'])
                Z([a, [
                    [7],
                    [3, 'message']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'theme']
                    ],
                    [1, 'round-button']
                ])
                Z([3, 'van-dialog__footer--round-button'])
                Z([
                    [7],
                    [3, 'showCancelButton']
                ])
                Z([3, 'onCancel'])
                Z([3, 'van-dialog__button van-hairline--right'])
                Z([3, 'van-dialog__cancel cancle-button-class'])
                Z([a, [3, 'color: '],
                    [
                        [7],
                        [3, 'cancelButtonColor']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'loading']
                    ],
                    [3, 'cancel']
                ])
                Z([3, 'large'])
                Z([a, [
                    [7],
                    [3, 'cancelButtonText']
                ]])
                Z([
                    [7],
                    [3, 'showConfirmButton']
                ])
                Z([
                    [7],
                    [3, 'appParameter']
                ])
                Z([3, 'onConfirm'])
                Z([3, 'onAgreePrivacyAuthorization'])
                Z([3, 'onContact'])
                Z([3, 'onError'])
                Z([3, 'onGetPhoneNumber'])
                Z([3, 'onGetUserInfo'])
                Z([3, 'onLaunchApp'])
                Z([3, 'onOpenSetting'])
                Z([
                    [7],
                    [3, 'businessId']
                ])
                Z([
                    [7],
                    [3, 'confirmButtonId']
                ])
                Z([3, 'van-dialog__button'])
                Z([3, 'van-dialog__confirm confirm-button-class'])
                Z([a, z[26][1],
                    [
                        [7],
                        [3, 'confirmButtonColor']
                    ]
                ])
                Z([
                    [7],
                    [3, 'lang']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'loading']
                    ],
                    [3, 'confirm']
                ])
                Z([
                    [7],
                    [3, 'confirmButtonOpenType']
                ])
                Z([
                    [7],
                    [3, 'sendMessageImg']
                ])
                Z([
                    [7],
                    [3, 'sendMessagePath']
                ])
                Z([
                    [7],
                    [3, 'sendMessageTitle']
                ])
                Z([
                    [7],
                    [3, 'sessionFrom']
                ])
                Z([
                    [7],
                    [3, 'showMessageCard']
                ])
                Z(z[28])
                Z([a, [
                    [7],
                    [3, 'confirmButtonText']
                ]])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'showCancelButton']
                    ],
                    [
                        [7],
                        [3, 'showConfirmButton']
                    ]
                ])
                Z([3, 'van-hairline--top van-dialog__footer'])
                Z(z[22])
                Z([
                    [7],
                    [3, 'useCancelButtonSlot']
                ])
                Z([3, 'cancel-button'])
                Z(z[23])
                Z(z[24])
                Z(z[25])
                Z([a, z[26][1], z[26][2]])
                Z(z[27])
                Z(z[28])
                Z([a, z[29][1]])
                Z(z[30])
                Z([
                    [7],
                    [3, 'useConfirmButtonSlot']
                ])
                Z([3, 'confirm-button'])
                Z(z[31])
                Z(z[32])
                Z(z[33])
                Z(z[34])
                Z(z[35])
                Z(z[36])
                Z(z[37])
                Z(z[38])
                Z(z[39])
                Z(z[40])
                Z(z[41])
                Z(z[42])
                Z(z[43])
                Z([a, z[26][1], z[44][2]])
                Z(z[45])
                Z(z[46])
                Z(z[47])
                Z(z[48])
                Z(z[49])
                Z(z[50])
                Z(z[51])
                Z(z[52])
                Z(z[28])
                Z([a, z[54][1]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
        }

        function gz$gwx_XC_20_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_20_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_20_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'appParameter']
                ])
                Z([3, 'onClick'])
                Z([3, 'onAgreePrivacyAuthorization'])
                Z([3, 'onContact'])
                Z([3, 'onError'])
                Z([3, 'onGetPhoneNumber'])
                Z([3, 'onGetUserInfo'])
                Z([3, 'onLaunchApp'])
                Z([3, 'onOpenSetting'])
                Z([
                    [7],
                    [3, 'businessId']
                ])
                Z([
                    [7],
                    [3, 'buttonId']
                ])
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
                            [1, 'goods-action-button']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'type']
                                    ]
                                ],
                                [
                                    [9],
                                    [
                                        [9],
                                        [
                                            [8], 'first', [
                                                [7],
                                                [3, 'isFirst']
                                            ]
                                        ],
                                        [
                                            [8], 'last', [
                                                [7],
                                                [3, 'isLast']
                                            ]
                                        ]
                                    ],
                                    [
                                        [8], 'plain', [
                                            [7],
                                            [3, 'plain']
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'color']
                ])
                Z([3, 'van-goods-action-button__inner custom-class'])
                Z([
                    [7],
                    [3, 'disabled']
                ])
                Z([
                    [7],
                    [3, 'id']
                ])
                Z([
                    [7],
                    [3, 'lang']
                ])
                Z([
                    [7],
                    [3, 'loading']
                ])
                Z([
                    [7],
                    [3, 'openType']
                ])
                Z([
                    [7],
                    [3, 'plain']
                ])
                Z([
                    [7],
                    [3, 'sendMessageImg']
                ])
                Z([
                    [7],
                    [3, 'sendMessagePath']
                ])
                Z([
                    [7],
                    [3, 'sendMessageTitle']
                ])
                Z([
                    [7],
                    [3, 'sessionFrom']
                ])
                Z([
                    [7],
                    [3, 'showMessageCard']
                ])
                Z([
                    [7],
                    [3, 'size']
                ])
                Z([
                    [7],
                    [3, 'type']
                ])
                Z([a, [
                    [7],
                    [3, 'text']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_2
        }

        function gz$gwx_XC_20_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_20_3) return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_3
            __WXML_GLOBAL__.ops_cached.$gwx_XC_20_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'custom-class '],
                    [
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
                                [1, 'goods-action']
                            ],
                            [
                                [8], 'safe', [
                                    [7],
                                    [3, 'safeAreaInsetBottom']
                                ]
                            ]
                        ]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_3
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_20 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_20 = true;
        var x = ['./miniprogram_npm/@vant/weapp/dialog/index.wxml', './miniprogram_npm/@vant/weapp/goods-action-button/index.wxml', './miniprogram_npm/@vant/weapp/goods-action/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_20_1()
            var x9R = _mz(z, 'van-popup', ['bind:close', 0, 'closeOnClickOverlay', 1, 'customClass', 1, 'customStyle', 2, 'overlay', 3, 'overlayStyle', 4, 'show', 5, 'transition', 6, 'zIndex', 7], [], e, s, gg)
            var o0R = _v()
            _(x9R, o0R)
            if (_oz(z, 9, e, s, gg)) {
                o0R.wxVkey = 1
                var hCS = _n('view')
                _rz(z, hCS, 'class', 10, e, s, gg)
                var oDS = _v()
                _(hCS, oDS)
                if (_oz(z, 11, e, s, gg)) {
                    oDS.wxVkey = 1
                    var cES = _n('slot')
                    _rz(z, cES, 'name', 12, e, s, gg)
                    _(oDS, cES)
                } else if (_oz(z, 13, e, s, gg)) {
                    oDS.wxVkey = 2
                    var oFS = _oz(z, 14, e, s, gg)
                    _(oDS, oFS)
                }
                oDS.wxXCkey = 1
                _(o0R, hCS)
            }
            var fAS = _v()
            _(x9R, fAS)
            if (_oz(z, 15, e, s, gg)) {
                fAS.wxVkey = 1
                var lGS = _n('slot')
                _(fAS, lGS)
            } else if (_oz(z, 16, e, s, gg)) {
                fAS.wxVkey = 2
                var aHS = _n('view')
                _rz(z, aHS, 'class', 17, e, s, gg)
                var tIS = _n('text')
                _rz(z, tIS, 'class', 18, e, s, gg)
                var eJS = _oz(z, 19, e, s, gg)
                _(tIS, eJS)
                _(aHS, tIS)
                _(fAS, aHS)
            }
            var cBS = _v()
            _(x9R, cBS)
            if (_oz(z, 20, e, s, gg)) {
                cBS.wxVkey = 1
                var bKS = _n('van-goods-action')
                _rz(z, bKS, 'customClass', 21, e, s, gg)
                var oLS = _v()
                _(bKS, oLS)
                if (_oz(z, 22, e, s, gg)) {
                    oLS.wxVkey = 1
                    var oNS = _mz(z, 'van-goods-action-button', ['bind:click', 23, 'class', 1, 'customClass', 2, 'customStyle', 3, 'loading', 4, 'size', 5], [], e, s, gg)
                    var fOS = _oz(z, 29, e, s, gg)
                    _(oNS, fOS)
                    _(oLS, oNS)
                }
                var xMS = _v()
                _(bKS, xMS)
                if (_oz(z, 30, e, s, gg)) {
                    xMS.wxVkey = 1
                    var cPS = _mz(z, 'van-goods-action-button', ['appParameter', 31, 'bind:click', 1, 'bindagreeprivacyauthorization', 2, 'bindcontact', 3, 'binderror', 4, 'bindgetphonenumber', 5, 'bindgetuserinfo', 6, 'bindlaunchapp', 7, 'bindopensetting', 8, 'businessId', 9, 'buttonId', 10, 'class', 11, 'customClass', 12, 'customStyle', 13, 'lang', 14, 'loading', 15, 'openType', 16, 'sendMessageImg', 17, 'sendMessagePath', 18, 'sendMessageTitle', 19, 'sessionFrom', 20, 'showMessageCard', 21, 'size', 22], [], e, s, gg)
                    var hQS = _oz(z, 54, e, s, gg)
                    _(cPS, hQS)
                    _(xMS, cPS)
                }
                oLS.wxXCkey = 1
                oLS.wxXCkey = 3
                xMS.wxXCkey = 1
                xMS.wxXCkey = 3
                _(cBS, bKS)
            } else if (_oz(z, 55, e, s, gg)) {
                cBS.wxVkey = 2
                var oRS = _n('view')
                _rz(z, oRS, 'class', 56, e, s, gg)
                var cSS = _v()
                _(oRS, cSS)
                if (_oz(z, 57, e, s, gg)) {
                    cSS.wxVkey = 1
                    var lUS = _v()
                    _(cSS, lUS)
                    if (_oz(z, 58, e, s, gg)) {
                        lUS.wxVkey = 1
                        var aVS = _n('slot')
                        _rz(z, aVS, 'name', 59, e, s, gg)
                        _(lUS, aVS)
                    } else {
                        lUS.wxVkey = 2
                        var tWS = _mz(z, 'van-button', ['bind:click', 60, 'class', 1, 'customClass', 2, 'customStyle', 3, 'loading', 4, 'size', 5], [], e, s, gg)
                        var eXS = _oz(z, 66, e, s, gg)
                        _(tWS, eXS)
                        _(lUS, tWS)
                    }
                    lUS.wxXCkey = 1
                    lUS.wxXCkey = 3
                }
                var oTS = _v()
                _(oRS, oTS)
                if (_oz(z, 67, e, s, gg)) {
                    oTS.wxVkey = 1
                    var bYS = _v()
                    _(oTS, bYS)
                    if (_oz(z, 68, e, s, gg)) {
                        bYS.wxVkey = 1
                        var oZS = _n('slot')
                        _rz(z, oZS, 'name', 69, e, s, gg)
                        _(bYS, oZS)
                    } else {
                        bYS.wxVkey = 2
                        var x1S = _mz(z, 'van-button', ['appParameter', 70, 'bind:click', 1, 'bindagreeprivacyauthorization', 2, 'bindcontact', 3, 'binderror', 4, 'bindgetphonenumber', 5, 'bindgetuserinfo', 6, 'bindlaunchapp', 7, 'bindopensetting', 8, 'businessId', 9, 'buttonId', 10, 'class', 11, 'customClass', 12, 'customStyle', 13, 'lang', 14, 'loading', 15, 'openType', 16, 'sendMessageImg', 17, 'sendMessagePath', 18, 'sendMessageTitle', 19, 'sessionFrom', 20, 'showMessageCard', 21, 'size', 22], [], e, s, gg)
                        var o2S = _oz(z, 93, e, s, gg)
                        _(x1S, o2S)
                        _(bYS, x1S)
                    }
                    bYS.wxXCkey = 1
                    bYS.wxXCkey = 3
                }
                cSS.wxXCkey = 1
                cSS.wxXCkey = 3
                oTS.wxXCkey = 1
                oTS.wxXCkey = 3
                _(cBS, oRS)
            }
            o0R.wxXCkey = 1
            fAS.wxXCkey = 1
            cBS.wxXCkey = 1
            cBS.wxXCkey = 3
            cBS.wxXCkey = 3
            _(r, x9R)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_XC_20_2()
            var c4S = _mz(z, 'van-button', ['appParameter', 0, 'bind:click', 1, 'bindagreeprivacyauthorization', 1, 'bindcontact', 2, 'binderror', 3, 'bindgetphonenumber', 4, 'bindgetuserinfo', 5, 'bindlaunchapp', 6, 'bindopensetting', 7, 'businessId', 8, 'buttonId', 9, 'class', 10, 'color', 11, 'customClass', 12, 'disabled', 13, 'id', 14, 'lang', 15, 'loading', 16, 'openType', 17, 'plain', 18, 'sendMessageImg', 19, 'sendMessagePath', 20, 'sendMessageTitle', 21, 'sessionFrom', 22, 'showMessageCard', 23, 'size', 24, 'type', 25], [], e, s, gg)
            var h5S = _oz(z, 27, e, s, gg)
            _(c4S, h5S)
            var o6S = _n('slot')
            _(c4S, o6S)
            _(r, c4S)
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[2]] = {}
        var m2 = function(e, s, r, gg) {
            var z = gz$gwx_XC_20_3()
            var o8S = _n('view')
            _rz(z, o8S, 'class', 0, e, s, gg)
            var l9S = _n('slot')
            _(o8S, l9S)
            _(r, o8S)
            return r
        }
        e_[x[2]] = {
            f: m2,
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
                g = "$gwx_XC_20";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_20();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxml'] = [$gwx_XC_20, './miniprogram_npm/@vant/weapp/dialog/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxml'] = $gwx_XC_20('./miniprogram_npm/@vant/weapp/dialog/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = [$gwx_XC_20, './miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = $gwx_XC_20('./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = [$gwx_XC_20, './miniprogram_npm/@vant/weapp/goods-action/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = $gwx_XC_20('./miniprogram_npm/@vant/weapp/goods-action/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-dialog{background-color:var(--dialog-background-color,#fff);border-radius:var(--dialog-border-radius,16px);font-size:var(--dialog-font-size,16px);overflow:hidden;top:45%!important;width:var(--dialog-width,320px)}\n@media (max-width:321px){.", [1], "van-dialog{width:var(--dialog-small-screen-width,90%)}\n}.", [1], "van-dialog__header{font-weight:var(--dialog-header-font-weight,500);line-height:var(--dialog-header-line-height,24px);padding-top:var(--dialog-header-padding-top,24px);text-align:center}\n.", [1], "van-dialog__header--isolated{padding:var(--dialog-header-isolated-padding,24px 0)}\n.", [1], "van-dialog__message{-webkit-overflow-scrolling:touch;font-size:var(--dialog-message-font-size,14px);line-height:var(--dialog-message-line-height,20px);max-height:var(--dialog-message-max-height,60vh);overflow-y:auto;padding:var(--dialog-message-padding,24px);text-align:center}\n.", [1], "van-dialog__message-text{word-wrap:break-word}\n.", [1], "van-dialog__message--hasTitle{color:var(--dialog-has-title-message-text-color,#646566);padding-top:var(--dialog-has-title-message-padding-top,8px)}\n.", [1], "van-dialog__message--round-button{color:#323233;padding-bottom:16px}\n.", [1], "van-dialog__message--left{text-align:left}\n.", [1], "van-dialog__message--right{text-align:right}\n.", [1], "van-dialog__message--justify{text-align:justify}\n.", [1], "van-dialog__footer{display:-webkit-flex;display:flex}\n.", [1], "van-dialog__footer--round-button{padding:8px 24px 16px!important;position:relative!important}\n.", [1], "van-dialog__button{-webkit-flex:1;flex:1}\n.", [1], "van-dialog__cancel,.", [1], "van-dialog__confirm{border:0!important}\n.", [1], "van-dialog-bounce-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}\n.", [1], "van-dialog-bounce-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/dialog/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-goods-action-button{--button-warning-background-color:var(--goods-action-button-warning-color,linear-gradient(to right,#ffd01e,#ff8917));--button-danger-background-color:var(--goods-action-button-danger-color,linear-gradient(to right,#ff6034,#ee0a24));--button-default-height:var(--goods-action-button-height,40px);--button-line-height:var(--goods-action-button-line-height,20px);--button-plain-background-color:var(--goods-action-button-plain-color,#fff);--button-border-width:0;display:block}\n.", [1], "van-goods-action-button--first{--button-border-radius:999px 0 0 var(--goods-action-button-border-radius,999px);margin-left:5px}\n.", [1], "van-goods-action-button--last{--button-border-radius:0 999px var(--goods-action-button-border-radius,999px) 0;margin-right:5px}\n.", [1], "van-goods-action-button--first.", [1], "van-goods-action-button--last{--button-border-radius:var(--goods-action-button-border-radius,999px)}\n.", [1], "van-goods-action-button--plain{--button-border-width:1px}\n.", [1], "van-goods-action-button__inner{font-weight:var(--font-weight-bold,500)!important;width:100%}\n@media (max-width:321px){.", [1], "van-goods-action-button{font-size:13px}\n}",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/goods-action-button/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-goods-action{-webkit-align-items:center;align-items:center;background-color:var(--goods-action-background-color,#fff);bottom:0;box-sizing:initial;display:-webkit-flex;display:flex;height:var(--goods-action-height,50px);left:0;position:fixed;right:0}\n.", [1], "van-goods-action--safe{padding-bottom:env(safe-area-inset-bottom)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/goods-action/index.wxss"
    });
}