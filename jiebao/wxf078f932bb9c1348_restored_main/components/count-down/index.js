var t = require("../../commons/config");
    Component({
        properties: {
            desc: {
                type: String,
                value: "优惠剩余时长："
            },
            duration: {
                type: Number,
                value: 0
            },
            endTime: {
                type: Number,
                value: 0
            }
        },
        data: {
            discountDuration: 0,
            timeData: {}
        },
        lifetimes: {
            attached: function() {
                this.initDiscountDuration(this.data.duration, this.data.endTime)
            }
        },
        methods: {
            finished: function(t) {
                this.setData({
                    discountDuration: 0
                }), this.triggerEvent("finished")
            },
            onChange: function(t) {
                this.setData({
                    timeData: t.detail
                }), this.triggerEvent("change")
            },
            initDiscountDuration: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = this,
                    n = 0;
                if (a < 0 || e < 0) i.setData({
                    discountDuration: n
                });
                else {
                    var o = 60 * e * 60 * 1e3,
                        s = t.IAP_FIRST_OPEN_TIME;
                    wx.getStorage({
                        key: s,
                        complete: function(t) {
                            var e = Date.now();
                            "number" == typeof(null == t ? void 0 : t.data) ? (e = t.data, a && a > e && (e = a, wx.setStorage({
                                key: s,
                                data: a
                            }))) : (e = Math.max(Date.now() + o, a), wx.setStorage({
                                key: s,
                                data: e
                            }));
                            var n = e - Date.now();
                            n > 0 && i.setData({
                                discountDuration: n
                            })
                        }
                    })
                }
            }
        }
    });