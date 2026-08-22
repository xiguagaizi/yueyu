require("../../@babel/runtime/helpers/Arrayincludes");
    var t, e = (t = require("../../utils/monitor")) && t.__esModule ? t : {
        default: t
    };
    Component({
        properties: {
            notice: {
                type: Object,
                value: {}
            },
            list: {
                type: Array,
                value: []
            },
            marginBottom: {
                type: String
            },
            marginTop: {
                type: String
            }
        },
        data: {
            errorAds: []
        },
        lifetimes: {
            attached: function() {
                this.renderAd()
            }
        },
        methods: {
            renderAd: function() {
                var t = this.data,
                    e = t.list,
                    r = t.errorAds,
                    a = e.find((function(t) {
                        return !1 === r.includes(t.unitId)
                    }));
                a && this.setData({
                    unitId: a.unitId,
                    adType: a.adType,
                    adIntervals: a.adIntervals
                })
            },
            errorHandler: function(t) {
                var r = this;
                if (this.data.errorAds.push(this.data.unitId), this.data.errorAds.length === this.data.list.length) return this.setData({
                    loaded: !1
                }), this.triggerEvent("error"), void e.default.sum("ad_loaderror");
                this.setData({
                    unitId: ""
                }, (function() {
                    r.renderAd(), e.default.sum("ad_retry")
                }))
            },
            loadHandler: function() {
                this.setData({
                    loaded: !0
                }), this.triggerEvent("load"), e.default.sum("ad_load")
            },
            nav: function() {
                wx.navigateTo({
                    url: this.data.notice.path
                })
            }
        }
    });