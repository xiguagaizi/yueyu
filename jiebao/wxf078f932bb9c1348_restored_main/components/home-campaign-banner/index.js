var t = require("../../@babel/runtime/helpers/objectSpread2");
    Component({
        options: {
            virtualHost: !0
        },
        properties: {
            list: {
                type: Array,
                value: []
            }
        },
        data: {
            current: 0,
            decoratedList: []
        },
        observers: {
            list: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    a = (Array.isArray(e) ? e : []).map((function(e) {
                        return t(t({}, e), {}, {
                            path: String((null == e ? void 0 : e.path) || "").trim(),
                            navigateType: String((null == e ? void 0 : e.navigateType) || "").trim(),
                            appId: String((null == e ? void 0 : e.appId) || "").trim(),
                            imageUrl: String((null == e ? void 0 : e.imageUrl) || "").trim()
                        })
                    })).filter((function(t) {
                        return t.imageUrl
                    })).map((function(e) {
                        return t({}, e)
                    }));
                this.setData({
                    current: 0,
                    decoratedList: a
                })
            }
        },
        methods: {
            onChange: function(t) {
                var e;
                this.setData({
                    current: Number(null == t || null === (e = t.detail) || void 0 === e ? void 0 : e.current) || 0
                })
            },
            nav: function(t) {
                var e, a, r = Number(null == t || null === (e = t.currentTarget) || void 0 === e || null === (a = e.dataset) || void 0 === a ? void 0 : a.index),
                    i = this.data.decoratedList[r];
                null != i && i.path && ("thirdmp" === i.navigateType && i.appId ? wx.navigateToMiniProgram({
                    appId: i.appId,
                    path: i.path
                }) : "h5" !== i.navigateType ? wx.navigateTo({
                    url: i.path
                }) : wx.navigateTo({
                    url: "/pages/webview/index?url=".concat(encodeURIComponent(i.path))
                }))
            }
        }
    });