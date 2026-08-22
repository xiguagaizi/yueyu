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
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isVideo']
                ])
                Z([3, 'onPreviewFile'])
                Z([3, 'van-uploader__file'])
                Z(z[6])
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
                Z([3, 'van-uploader__file-icon'])
                Z([3, 'description'])
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
                Z(z[6])
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
                Z(z[29])
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
                Z(z[12])
                Z([3, 'van-uploader__upload-icon'])
                Z([
                    [7],
                    [3, 'uploadIcon']
                ])
                Z([
                    [7],
                    [3, 'uploadText']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_61_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_61_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_61 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_61 = true;
        var x = ['./miniprogram_npm/@vant/weapp/uploader/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_61_1()
            var xYU = _n('view')
            _rz(z, xYU, 'class', 0, e, s, gg)
            var f1U = _v()
            _(xYU, f1U)
            var c2U = function(o4U, h3U, c5U, gg) {
                var l7U = _v()
                _(c5U, l7U)
                if (_oz(z, 3, o4U, h3U, gg)) {
                    l7U.wxVkey = 1
                    var a8U = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-index', 2], [], o4U, h3U, gg)
                    var t9U = _v()
                    _(a8U, t9U)
                    if (_oz(z, 7, o4U, h3U, gg)) {
                        t9U.wxVkey = 1
                    } else if (_oz(z, 8, o4U, h3U, gg)) {
                        t9U.wxVkey = 2
                    } else {
                        t9U.wxVkey = 3
                        var oBV = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-index', 2, 'style', 3], [], o4U, h3U, gg)
                        var xCV = _mz(z, 'van-icon', ['class', 13, 'name', 1], [], o4U, h3U, gg)
                        _(oBV, xCV)
                        _(t9U, oBV)
                    }
                    var e0U = _v()
                    _(a8U, e0U)
                    if (_oz(z, 15, o4U, h3U, gg)) {
                        e0U.wxVkey = 1
                        var oDV = _n('view')
                        _rz(z, oDV, 'class', 16, o4U, h3U, gg)
                        var fEV = _v()
                        _(oDV, fEV)
                        if (_oz(z, 17, o4U, h3U, gg)) {
                            fEV.wxVkey = 1
                            var hGV = _mz(z, 'van-icon', ['class', 18, 'name', 1], [], o4U, h3U, gg)
                            _(fEV, hGV)
                        } else {
                            fEV.wxVkey = 2
                            var oHV = _n('van-loading')
                            _rz(z, oHV, 'customClass', 20, o4U, h3U, gg)
                            _(fEV, oHV)
                        }
                        var cFV = _v()
                        _(oDV, cFV)
                        if (_oz(z, 21, o4U, h3U, gg)) {
                            cFV.wxVkey = 1
                        }
                        fEV.wxXCkey = 1
                        fEV.wxXCkey = 3
                        fEV.wxXCkey = 3
                        cFV.wxXCkey = 1
                        _(e0U, oDV)
                    }
                    var bAV = _v()
                    _(a8U, bAV)
                    if (_oz(z, 22, o4U, h3U, gg)) {
                        bAV.wxVkey = 1
                        var cIV = _mz(z, 'view', ['catch:tap', 23, 'class', 1, 'data-index', 2], [], o4U, h3U, gg)
                        var oJV = _mz(z, 'van-icon', ['class', 26, 'name', 1], [], o4U, h3U, gg)
                        _(cIV, oJV)
                        _(bAV, cIV)
                    }
                    t9U.wxXCkey = 1
                    t9U.wxXCkey = 3
                    e0U.wxXCkey = 1
                    e0U.wxXCkey = 3
                    bAV.wxXCkey = 1
                    bAV.wxXCkey = 3
                    _(l7U, a8U)
                }
                l7U.wxXCkey = 1
                l7U.wxXCkey = 3
                return c5U
            }
            f1U.wxXCkey = 4
            _2z(z, 1, c2U, e, s, gg, f1U, 'item', 'index', 'index')
            var oZU = _v()
            _(xYU, oZU)
            if (_oz(z, 28, e, s, gg)) {
                oZU.wxVkey = 1
                var aLV = _mz(z, 'view', ['bindtap', 29, 'class', 1], [], e, s, gg)
                var tMV = _n('slot')
                _(aLV, tMV)
                _(oZU, aLV)
                var lKV = _v()
                _(oZU, lKV)
                if (_oz(z, 31, e, s, gg)) {
                    lKV.wxVkey = 1
                    var eNV = _mz(z, 'view', ['bindtap', 32, 'class', 1, 'style', 2], [], e, s, gg)
                    var oPV = _mz(z, 'van-icon', ['class', 35, 'name', 1], [], e, s, gg)
                    _(eNV, oPV)
                    var bOV = _v()
                    _(eNV, bOV)
                    if (_oz(z, 37, e, s, gg)) {
                        bOV.wxVkey = 1
                    }
                    bOV.wxXCkey = 1
                    _(lKV, eNV)
                }
                lKV.wxXCkey = 1
                lKV.wxXCkey = 3
            }
            oZU.wxXCkey = 1
            oZU.wxXCkey = 3
            _(r, xYU)
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
                g = "$gwx_XC_61";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_61();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxml'] = [$gwx_XC_61, './miniprogram_npm/@vant/weapp/uploader/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxml'] = $gwx_XC_61('./miniprogram_npm/@vant/weapp/uploader/index.wxml');;
__wxRoute = "miniprogram_npm/@vant/weapp/uploader/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "miniprogram_npm/@vant/weapp/uploader/index.js";
define("miniprogram_npm/@vant/weapp/uploader/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(e) {
            for (var t, i = 1, a = arguments.length; i < a; i++)
                for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        i = require("./utils"),
        a = require("./shared"),
        n = require("../common/validator");
    (0, t.VantComponent)({
        props: e(e(e(e({
            disabled: Boolean,
            multiple: Boolean,
            uploadText: String,
            useBeforeRead: Boolean,
            afterRead: null,
            beforeRead: null,
            previewSize: {
                type: null,
                value: 80
            },
            name: {
                type: null,
                value: ""
            },
            accept: {
                type: String,
                value: "image"
            },
            fileList: {
                type: Array,
                value: [],
                observer: "formatFileList"
            },
            maxSize: {
                type: Number,
                value: Number.MAX_VALUE
            },
            maxCount: {
                type: Number,
                value: 100
            },
            deletable: {
                type: Boolean,
                value: !0
            },
            showUpload: {
                type: Boolean,
                value: !0
            },
            previewImage: {
                type: Boolean,
                value: !0
            },
            previewFullImage: {
                type: Boolean,
                value: !0
            },
            videoFit: {
                type: String,
                value: "contain"
            },
            imageFit: {
                type: String,
                value: "scaleToFill"
            },
            uploadIcon: {
                type: String,
                value: "photograph"
            }
        }, a.imageProps), a.videoProps), a.mediaProps), a.messageFileProps),
        data: {
            lists: [],
            isInCount: !0
        },
        methods: {
            formatFileList: function() {
                var t = this.data,
                    a = t.fileList,
                    r = void 0 === a ? [] : a,
                    o = t.maxCount,
                    l = r.map((function(t) {
                        return e(e({}, t), {
                            isImage: (0, i.isImageFile)(t),
                            isVideo: (0, i.isVideoFile)(t),
                            deletable: !(0, n.isBoolean)(t.deletable) || t.deletable
                        })
                    }));
                this.setData({
                    lists: l,
                    isInCount: l.length < o
                })
            },
            getDetail: function(e) {
                return {
                    name: this.data.name,
                    index: null == e ? this.data.fileList.length : e
                }
            },
            startUpload: function() {
                var t = this,
                    a = this.data,
                    n = a.maxCount,
                    r = a.multiple,
                    o = a.lists;
                a.disabled || (0, i.chooseFile)(e(e({}, this.data), {
                    maxCount: n - o.length
                })).then((function(e) {
                    t.onBeforeRead(r ? e : e[0])
                })).catch((function(e) {
                    t.$emit("error", e)
                }))
            },
            onBeforeRead: function(t) {
                var i = this,
                    a = this.data,
                    r = a.beforeRead,
                    o = a.useBeforeRead,
                    l = !0;
                "function" == typeof r && (l = r(t, this.getDetail())), o && (l = new Promise((function(a, n) {
                    i.$emit("before-read", e(e({
                        file: t
                    }, i.getDetail()), {
                        callback: function(e) {
                            e ? a() : n()
                        }
                    }))
                }))), l && ((0, n.isPromise)(l) ? l.then((function(e) {
                    return i.onAfterRead(e || t)
                })) : this.onAfterRead(t))
            },
            onAfterRead: function(t) {
                var i = this.data,
                    a = i.maxSize,
                    n = i.afterRead;
                (Array.isArray(t) ? t.some((function(e) {
                    return e.size > a
                })) : t.size > a) ? this.$emit("oversize", e({
                    file: t
                }, this.getDetail())): ("function" == typeof n && n(t, this.getDetail()), this.$emit("after-read", e({
                    file: t
                }, this.getDetail())))
            },
            deleteItem: function(t) {
                var i = t.currentTarget.dataset.index;
                this.$emit("delete", e(e({}, this.getDetail(i)), {
                    file: this.data.fileList[i]
                }))
            },
            onPreviewImage: function(e) {
                if (this.data.previewFullImage) {
                    var t = e.currentTarget.dataset.index,
                        a = this.data,
                        n = a.lists,
                        r = a.showmenu,
                        o = n[t];
                    wx.previewImage({
                        urls: n.filter((function(e) {
                            return (0, i.isImageFile)(e)
                        })).map((function(e) {
                            return e.url
                        })),
                        current: o.url,
                        showmenu: r,
                        fail: function() {
                            wx.showToast({
                                title: "预览图片失败",
                                icon: "none"
                            })
                        }
                    })
                }
            },
            onPreviewVideo: function(t) {
                if (this.data.previewFullImage) {
                    var a = t.currentTarget.dataset.index,
                        n = this.data.lists,
                        r = [],
                        o = n.reduce((function(t, n, o) {
                            return (0, i.isVideoFile)(n) ? (r.push(e(e({}, n), {
                                type: "video"
                            })), o < a && t++, t) : t
                        }), 0);
                    wx.previewMedia({
                        sources: r,
                        current: o,
                        fail: function() {
                            wx.showToast({
                                title: "预览视频失败",
                                icon: "none"
                            })
                        }
                    })
                }
            },
            onPreviewFile: function(e) {
                var t = e.currentTarget.dataset.index;
                wx.openDocument({
                    filePath: this.data.lists[t].url,
                    showMenu: !0
                })
            },
            onClickPreview: function(t) {
                var i = t.currentTarget.dataset.index,
                    a = this.data.lists[i];
                this.$emit("click-preview", e(e({}, a), this.getDetail(i)))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'miniprogram_npm/@vant/weapp/uploader/index.js'
});
require("miniprogram_npm/@vant/weapp/uploader/index.js");