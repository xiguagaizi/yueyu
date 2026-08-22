$gwx_XC_61 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_61 || [];

        function gz$gwx_XC_61_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-uploader'])
                Z([3, 'van-uploader__wrapper'])
                Z([
                    [7],
                    [3, 'lists']
                ])
                Z([3, 'index'])
                Z([
                    [7],
                    [3, 'previewImage']
                ])
                Z([3, 'onClickPreview'])
                Z([3, 'van-uploader__preview'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isImage']
                ])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'name']
                    ],
                    [
                        [2, '+'],
                        [1, '图片'],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ]
                ])
                Z([3, 'onPreviewImage'])
                Z([3, 'van-uploader__preview-image'])
                Z(z[7])
                Z([
                    [7],
                    [3, 'imageFit']
                ])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'thumb']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'url']
                    ]
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'sizeStyle']
                    ],
                    [
                        [5],
                        [
                            [8], 'previewSize', [
                                [7],
                                [3, 'previewSize']
                            ]
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isVideo']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'autoplay']
                ])
                Z([3, 'onPreviewVideo'])
                Z(z[11])
                Z(z[7])
                Z([
                    [7],
                    [3, 'videoFit']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'thumb']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'url']
                ])
                Z(z[15])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'name']
                    ],
                    [
                        [2, '+'],
                        [1, '视频'],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ]
                ])
                Z([3, 'onPreviewFile'])
                Z([3, 'van-uploader__file'])
                Z(z[7])
                Z(z[15])
                Z([3, 'van-uploader__file-icon'])
                Z([3, 'description'])
                Z([3, 'van-uploader__file-name van-ellipsis'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'name']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'url']
                    ]
                ]])
                Z([
                    [2, '||'],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'status']
                        ],
                        [1, 'uploading']
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'status']
                        ],
                        [1, 'failed']
                    ]
                ])
                Z([3, 'van-uploader__mask'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'status']
                    ],
                    [1, 'failed']
                ])
                Z([3, 'van-uploader__mask-icon'])
                Z([3, 'close'])
                Z([3, 'van-uploader__loading'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'message']
                ])
                Z([3, 'van-uploader__mask-message'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'message']
                ]])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'deletable']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'deletable']
                    ]
                ])
                Z([3, 'deleteItem'])
                Z([3, 'van-uploader__preview-delete'])
                Z(z[7])
                Z([3, 'van-uploader__preview-delete-icon'])
                Z([3, 'cross'])
                Z([
                    [7],
                    [3, 'isInCount']
                ])
                Z([3, 'startUpload'])
                Z([3, 'van-uploader__slot'])
                Z([
                    [7],
                    [3, 'showUpload']
                ])
                Z(z[50])
                Z([a, [3, 'van-uploader__upload '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'disabled']
                        ],
                        [1, 'van-uploader__upload--disabled'],
                        [1, '']
                    ]
                ])
                Z(z[15])
                Z([3, 'van-uploader__upload-icon'])
                Z([
                    [7],
                    [3, 'uploadIcon']
                ])
                Z([
                    [7],
                    [3, 'uploadText']
                ])
                Z([3, 'van-uploader__upload-text'])
                Z([a, [
                    [7],
                    [3, 'uploadText']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_61 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_61 = true;
        var x = ['./miniprogram_npm/@vant/weapp/uploader/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_61_1()
            var t38 = _n('view')
            _rz(z, t38, 'class', 0, e, s, gg)
            var e48 = _n('view')
            _rz(z, e48, 'class', 1, e, s, gg)
            var o68 = _v()
            _(e48, o68)
            var x78 = function(f98, o88, c08, gg) {
                var oB9 = _v()
                _(c08, oB9)
                if (_oz(z, 4, f98, o88, gg)) {
                    oB9.wxVkey = 1
                    var cC9 = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-index', 2], [], f98, o88, gg)
                    var oD9 = _v()
                    _(cC9, oD9)
                    if (_oz(z, 8, f98, o88, gg)) {
                        oD9.wxVkey = 1
                        var tG9 = _mz(z, 'image', ['alt', 9, 'bindtap', 1, 'class', 2, 'data-index', 3, 'mode', 4, 'src', 5, 'style', 6], [], f98, o88, gg)
                        _(oD9, tG9)
                    } else if (_oz(z, 16, f98, o88, gg)) {
                        oD9.wxVkey = 2
                        var eH9 = _mz(z, 'video', ['autoplay', 17, 'bindtap', 1, 'class', 2, 'data-index', 3, 'objectFit', 4, 'poster', 5, 'src', 6, 'style', 7, 'title', 8], [], f98, o88, gg)
                        _(oD9, eH9)
                    } else {
                        oD9.wxVkey = 3
                        var bI9 = _mz(z, 'view', ['bindtap', 26, 'class', 1, 'data-index', 2, 'style', 3], [], f98, o88, gg)
                        var oJ9 = _mz(z, 'van-icon', ['class', 30, 'name', 1], [], f98, o88, gg)
                        _(bI9, oJ9)
                        var xK9 = _n('view')
                        _rz(z, xK9, 'class', 32, f98, o88, gg)
                        var oL9 = _oz(z, 33, f98, o88, gg)
                        _(xK9, oL9)
                        _(bI9, xK9)
                        _(oD9, bI9)
                    }
                    var lE9 = _v()
                    _(cC9, lE9)
                    if (_oz(z, 34, f98, o88, gg)) {
                        lE9.wxVkey = 1
                        var fM9 = _n('view')
                        _rz(z, fM9, 'class', 35, f98, o88, gg)
                        var cN9 = _v()
                        _(fM9, cN9)
                        if (_oz(z, 36, f98, o88, gg)) {
                            cN9.wxVkey = 1
                            var oP9 = _mz(z, 'van-icon', ['class', 37, 'name', 1], [], f98, o88, gg)
                            _(cN9, oP9)
                        } else {
                            cN9.wxVkey = 2
                            var cQ9 = _n('van-loading')
                            _rz(z, cQ9, 'customClass', 39, f98, o88, gg)
                            _(cN9, cQ9)
                        }
                        var hO9 = _v()
                        _(fM9, hO9)
                        if (_oz(z, 40, f98, o88, gg)) {
                            hO9.wxVkey = 1
                            var oR9 = _n('text')
                            _rz(z, oR9, 'class', 41, f98, o88, gg)
                            var lS9 = _oz(z, 42, f98, o88, gg)
                            _(oR9, lS9)
                            _(hO9, oR9)
                        }
                        cN9.wxXCkey = 1
                        cN9.wxXCkey = 3
                        cN9.wxXCkey = 3
                        hO9.wxXCkey = 1
                        _(lE9, fM9)
                    }
                    var aF9 = _v()
                    _(cC9, aF9)
                    if (_oz(z, 43, f98, o88, gg)) {
                        aF9.wxVkey = 1
                        var aT9 = _mz(z, 'view', ['catch:tap', 44, 'class', 1, 'data-index', 2], [], f98, o88, gg)
                        var tU9 = _mz(z, 'van-icon', ['class', 47, 'name', 1], [], f98, o88, gg)
                        _(aT9, tU9)
                        _(aF9, aT9)
                    }
                    oD9.wxXCkey = 1
                    oD9.wxXCkey = 3
                    lE9.wxXCkey = 1
                    lE9.wxXCkey = 3
                    aF9.wxXCkey = 1
                    aF9.wxXCkey = 3
                    _(oB9, cC9)
                }
                oB9.wxXCkey = 1
                oB9.wxXCkey = 3
                return c08
            }
            o68.wxXCkey = 4
            _2z(z, 2, x78, e, s, gg, o68, 'item', 'index', 'index')
            var b58 = _v()
            _(e48, b58)
            if (_oz(z, 49, e, s, gg)) {
                b58.wxVkey = 1
                var bW9 = _mz(z, 'view', ['bindtap', 50, 'class', 1], [], e, s, gg)
                var oX9 = _n('slot')
                _(bW9, oX9)
                _(b58, bW9)
                var eV9 = _v()
                _(b58, eV9)
                if (_oz(z, 52, e, s, gg)) {
                    eV9.wxVkey = 1
                    var xY9 = _mz(z, 'view', ['bindtap', 53, 'class', 1, 'style', 2], [], e, s, gg)
                    var f19 = _mz(z, 'van-icon', ['class', 56, 'name', 1], [], e, s, gg)
                    _(xY9, f19)
                    var oZ9 = _v()
                    _(xY9, oZ9)
                    if (_oz(z, 58, e, s, gg)) {
                        oZ9.wxVkey = 1
                        var c29 = _n('text')
                        _rz(z, c29, 'class', 59, e, s, gg)
                        var h39 = _oz(z, 60, e, s, gg)
                        _(c29, h39)
                        _(oZ9, c29)
                    }
                    oZ9.wxXCkey = 1
                    _(eV9, xY9)
                }
                eV9.wxXCkey = 1
                eV9.wxXCkey = 3
            }
            b58.wxXCkey = 1
            b58.wxXCkey = 3
            _(t38, e48)
            _(r, t38)
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
                g = "$gwx_XC_61";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_61();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxml'] = [$gwx_XC_61, './miniprogram_npm/@vant/weapp/uploader/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxml'] = $gwx_XC_61('./miniprogram_npm/@vant/weapp/uploader/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-uploader{display:inline-block;position:relative}\n.", [1], "van-uploader__wrapper{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.", [1], "van-uploader__slot:empty{display:none}\n.", [1], "van-uploader__slot:not(:empty)+.", [1], "van-uploader__upload{display:none!important}\n.", [1], "van-uploader__upload{-webkit-align-items:center;align-items:center;background-color:var(--uploader-upload-background-color,#f7f8fa);box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:var(--uploader-size,80px);-webkit-justify-content:center;justify-content:center;margin:0 8px 8px 0;position:relative;width:var(--uploader-size,80px)}\n.", [1], "van-uploader__upload:active{background-color:var(--uploader-upload-active-color,#f2f3f5)}\n.", [1], "van-uploader__upload-icon{color:var(--uploader-icon-color,#dcdee0);font-size:var(--uploader-icon-size,24px)}\n.", [1], "van-uploader__upload-text{color:var(--uploader-text-color,#969799);font-size:var(--uploader-text-font-size,12px);margin-top:var(--padding-xs,8px)}\n.", [1], "van-uploader__upload--disabled{opacity:var(--uploader-disabled-opacity,.5)}\n.", [1], "van-uploader__preview{cursor:pointer;margin:0 8px 8px 0;position:relative}\n.", [1], "van-uploader__preview-image{display:block;height:var(--uploader-size,80px);overflow:hidden;width:var(--uploader-size,80px)}\n.", [1], "van-uploader__preview-delete,.", [1], "van-uploader__preview-delete:after{height:var(--uploader-delete-icon-size,14px);position:absolute;right:0;top:0;width:var(--uploader-delete-icon-size,14px)}\n.", [1], "van-uploader__preview-delete:after{background-color:var(--uploader-delete-background-color,rgba(0,0,0,.7));border-radius:0 0 0 12px;content:\x22\x22}\n.", [1], "van-uploader__preview-delete-icon{color:var(--uploader-delete-color,#fff);font-size:var(--uploader-delete-icon-size,14px);position:absolute;right:0;top:0;-webkit-transform:scale(.7) translate(10%,-10%);transform:scale(.7) translate(10%,-10%);z-index:1}\n.", [1], "van-uploader__file{-webkit-align-items:center;align-items:center;background-color:var(--uploader-file-background-color,#f7f8fa);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:var(--uploader-size,80px);-webkit-justify-content:center;justify-content:center;width:var(--uploader-size,80px)}\n.", [1], "van-uploader__file-icon{color:var(--uploader-file-icon-color,#646566);font-size:var(--uploader-file-icon-size,20px)}\n.", [1], "van-uploader__file-name{box-sizing:border-box;color:var(--uploader-file-name-text-color,#646566);font-size:var(--uploader-file-name-font-size,12px);margin-top:var(--uploader-file-name-margin-top,8px);padding:var(--uploader-file-name-padding,0 4px);text-align:center;width:100%}\n.", [1], "van-uploader__mask{-webkit-align-items:center;align-items:center;background-color:var(--uploader-mask-background-color,rgba(50,50,51,.88));bottom:0;color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;left:0;position:absolute;right:0;top:0}\n.", [1], "van-uploader__mask-icon{font-size:var(--uploader-mask-icon-size,22px)}\n.", [1], "van-uploader__mask-message{font-size:var(--uploader-mask-message-font-size,12px);line-height:var(--uploader-mask-message-line-height,14px);margin-top:6px;padding:0 var(--padding-base,4px)}\n.", [1], "van-uploader__loading{color:var(--uploader-loading-icon-color,#fff)!important;height:var(--uploader-loading-icon-size,22px);width:var(--uploader-loading-icon-size,22px)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/uploader/index.wxss"
    });
}