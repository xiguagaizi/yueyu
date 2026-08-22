Component({
        properties: {
            icon: {
                type: String
            },
            color: {
                type: String
            },
            ext: {
                type: String,
                value: ""
            },
            fixed: {
                type: Boolean,
                value: !1
            },
            round: {
                type: Boolean,
                value: !1
            },
            tid: {
                type: String
            },
            text: {
                type: String,
                value: "订阅"
            },
            size: {
                type: String,
                value: "normal"
            },
            type: {
                type: String
            }
        },
        data: {},
        methods: {
            addSubscribe: function(t) {
                this.triggerEvent("success")
            },
            subscribe: function() {
                var t = this,
                    e = this.data.tid;
                wx.showLoading({
                    title: "处理中..."
                }), wx.getSetting({
                    withSubscriptions: !0,
                    success: function(i) {
                        var n, o;
                        (console.log(i), !0 === (null == i || null === (n = i.subscriptionsSetting) || void 0 === n ? void 0 : n.mainSwitch)) ? "reject" === (null == i || null === (o = i.subscriptionsSetting) || void 0 === o ? void 0 : o[e]) ? wx.showModal({
                            title: "订阅失败",
                            content: "请先前往设置->通知管理->允许“粤语派”发送以下通知，选择“接收”，再重新订阅",
                            confirmText: "去设置",
                            complete: function(t) {
                                t.confirm && wx.openSetting()
                            }
                        }): (wx.showLoading({
                            title: "处理中...."
                        }), wx.requestSubscribeMessage({
                            tmplIds: [e],
                            success: function(i) {
                                "accept" === i[e] ? setTimeout((function() {
                                    t.addSubscribe(e)
                                })) : "reject" === i[e] && setTimeout((function() {
                                    wx.showToast({
                                        title: "取消订阅",
                                        icon: "error"
                                    })
                                }))
                            },
                            fail: function(t) {
                                wx.showToast({
                                    title: "系统异常",
                                    icon: "error"
                                })
                            },
                            complete: function() {
                                wx.hideLoading()
                            }
                        })): wx.showModal({
                            title: "订阅失败",
                            content: "请前往设置->通知管理，勾选“接收通知”",
                            confirmText: "去设置",
                            complete: function(t) {
                                t.confirm && wx.openSetting()
                            }
                        })
                    },
                    complete: function() {
                        wx.hideLoading()
                    }
                })
            }
        }
    });