var e = require("../../../@babel/runtime/helpers/objectSpread2");
    Page({
        data: {
            loading: !0,
            failedMessage: "",
            state: "",
            allowParameter: "",
            denyParameter: ""
        },
        onLoad: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = String(e.state || "");
            this.setData({
                state: a,
                denyParameter: this.buildAppParameter({
                    state: a,
                    error: "user_denied"
                })
            }), this.prepareLoginCode()
        },
        prepareLoginCode: function() {
            var e = this;
            wx.login({
                success: function(a) {
                    var t = String((null == a ? void 0 : a.code) || "");
                    t ? e.setData({
                        loading: !1,
                        failedMessage: "",
                        allowParameter: e.buildAppParameter({
                            state: e.data.state,
                            code: t
                        })
                    }) : e.setData({
                        loading: !1,
                        failedMessage: "未能取得小程序登录状态，请返回 App 后重试。"
                    })
                },
                fail: function() {
                    e.setData({
                        loading: !1,
                        failedMessage: "未能取得小程序登录状态，请返回 App 后重试。"
                    })
                }
            })
        },
        buildAppParameter: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return JSON.stringify(e({
                type: "iosMiniProgramLogin",
                state: ""
            }, a))
        },
        launchAppError: function() {
            this.setData({
                loading: !1,
                failedMessage: "请手动返回粤语派 App 后重试。"
            })
        }
    });