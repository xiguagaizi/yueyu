var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = i(require("../../../api/appPay")),
        a = require("../../../commons/utils"),
        o = i(require("../../../api/getCommonDataByKey"));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Page({
        navBack: a.navBack,
        data: {
            selectedIndex: 2,
            inPromoPeriod: !1
        },
        selectPlan: function(e) {
            var t = e.currentTarget.dataset.idx;
            this.setData({
                selectedIndex: t
            })
        },
        pay: function(o) {
            var i = this;
            return n(e().mark((function n() {
                var o, c, s, u, d, l, p, h, w, x;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = i.data, c = o.selectedIndex, s = o.products, u = o.inPromoPeriod, d = wx.getDeviceInfo(), l = d.brand, p = void 0 === l ? "" : l, e.prev = 2, wx.showLoading({
                                title: "处理中..."
                            }), e.next = 6, (0, r.default)({
                                goodsId: s[c].id,
                                inPromoPeriod: u,
                                brand: p
                            });
                        case 6:
                            if (h = e.sent, w = h.code, x = h.data, wx.hideLoading(), 0 === w) {
                                e.next = 13;
                                break
                            }
                            return wx.showModal({
                                title: "提示",
                                content: "系统错误，请重试。[".concat(w, "]"),
                                showCancel: !1
                            }), e.abrupt("return");
                        case 13:
                            wx.miniapp.requestPayment(t(t({}, x), {}, {
                                success: function() {
                                    wx.showModal({
                                        title: "开通成功",
                                        content: "已为您解锁会员功能",
                                        showCancel: !1,
                                        confirmText: "立即体验",
                                        complete: function(e) {
                                            wx.reLaunch({
                                                url: "/pages/index/index"
                                            })
                                        }
                                    }), (0, a.setVip)(!0)
                                },
                                fail: function(e) {
                                    console.error("err", e, x), wx.showToast({
                                        title: "支付取消",
                                        icon: "none"
                                    })
                                }
                            })), e.next = 21;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(2), console.log(e.t0), wx.hideLoading(), wx.showToast({
                                title: "支付异常，请重试",
                                icon: "none"
                            });
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [2, 16]
                ])
            })))()
        },
        onLoad: function(t) {
            var r = this;
            return n(e().mark((function t() {
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, r.getProducts();
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), t)
            })))()
        },
        getProducts: function() {
            var r = this;
            return n(e().mark((function n() {
                var i, c;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.prev = 1, e.next = 4, (0, o.default)("app_pay_products");
                        case 4:
                            i = e.sent, c = i.data, r.setData(t({}, c)), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(1), wx.showModal({
                                content: "获取数据失败，请稍后再试",
                                showCancel: !1,
                                complete: a.navBack
                            });
                        case 12:
                            wx.hideLoading();
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [1, 9]
                ])
            })))()
        },
        navTo: function(e) {
            var t = e.currentTarget.dataset.url;
            wx.navigateTo({
                url: t
            })
        },
        finished: function(e) {
            this.setData({
                inPromoPeriod: !1
            })
        },
        onChange: function(e) {
            this.setData({
                inPromoPeriod: !0
            })
        }
    });