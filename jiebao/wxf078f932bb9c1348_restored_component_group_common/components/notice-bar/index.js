var e = require("../../@babel/runtime/helpers/toConsumableArray");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../commons/config");
    Component({
        properties: {
            navigateType: {
                type: String
            },
            path: {
                type: String
            },
            appId: {
                type: String
            },
            uuid: {
                type: String
            },
            title: {
                type: String
            },
            closeable: {
                type: Boolean,
                value: !1
            },
            rememberRead: {
                type: Boolean,
                value: !0
            }
        },
        data: {
            show: !1
        },
        observers: {
            uuid: function(e) {
                e && this.getStatus()
            }
        },
        methods: {
            nav: function() {
                var e = this.data,
                    t = e.navigateType,
                    a = e.path,
                    r = e.appId;
                "mppath" === t && a ? wx.navigateTo({
                    url: a
                }) : "thirdmp" === t && a && r && wx.navigateToMiniProgram({
                    appId: r,
                    path: a
                })
            },
            getStatus: function() {
                if (!1 !== this.data.rememberRead) {
                    var e = this.getCacheIds();
                    this.setData({
                        show: !1 === e.includes(this.data.uuid)
                    })
                } else this.setData({
                    show: !0
                })
            },
            getCacheIds: function() {
                var a = [];
                try {
                    var r = wx.getStorageSync(t.NOTICE_READ_KEY);
                    r && Array.isArray(r) && (a = e(r))
                } catch (e) {}
                return a
            },
            closeHandle: function() {
                if (this.setData({
                        show: !1
                    }), !1 !== this.data.rememberRead) {
                    var e = this.getCacheIds();
                    e.unshift(this.data.uuid), wx.setStorage({
                        key: t.NOTICE_READ_KEY,
                        data: e.splice(0, 5)
                    })
                }
            }
        }
    });