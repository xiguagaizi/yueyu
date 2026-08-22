var e, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../commons/utils"),
        a = (e = require("../../../api/getCommonDataByKey")) && e.__esModule ? e : {
            default: e
        };
    Page({
        navBack: o.navBack,
        data: {
            selectedIndex: 2,
            products: [],
            inPromoPeriod: !1
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
        },
        onLoad: function(e) {
            this.requestSKProducts()
        },
        selectPlan: function(e) {
            var t = e.currentTarget.dataset.idx;
            this.setData({
                selectedIndex: t
            })
        },
        requestSKProducts: function() {
            var e = this;
            return r(t().mark((function r() {
                var i, s, c, u, d, l, m, f, p;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), i = [], s = [], c = [], u = {
                                endTime: 0,
                                duration: 0
                            }, t.prev = 5, t.next = 8, (0, a.default)("ios_pay_products");
                        case 8:
                            d = t.sent, l = d.data, s = l.normalIdentifiers, c = l.timeLimitedIdentifiers, i = [].concat(n(s), n(c)), u.endTime = l.endTime || 0, u.duration = l.duration || 0, u.countDownDesc = l.countDownDesc || "限时优惠剩余时长：", e.setData({
                                rights: l.rights,
                                recomand: l.recomand,
                                selectedIndex: l.selectedIndex || e.data.selectedIndex
                            }), t.next = 23;
                            break;
                        case 18:
                            return t.prev = 18, t.t0 = t.catch(5), wx.showModal({
                                content: "获取数据失败，请稍后再试",
                                showCancel: !1,
                                complete: o.navBack
                            }), wx.hideLoading(), t.abrupt("return");
                        case 23:
                            return t.prev = 23, t.next = 26, new Promise((function(e, t) {
                                wx.miniapp.IAP.requestSKProducts({
                                    productIdentifiers: i,
                                    success: e,
                                    fail: t
                                })
                            }));
                        case 26:
                            m = t.sent, f = c.map((function(e) {
                                return m.products.find((function(t) {
                                    return t.productIdentifier === e
                                }))
                            })).filter(Boolean), p = s.map((function(e) {
                                return m.products.find((function(t) {
                                    return t.productIdentifier === e
                                }))
                            })).filter(Boolean), e.setData({
                                timeLimitedProducts: f,
                                normalProducts: p,
                                countDownConf: u
                            }), t.next = 36;
                            break;
                        case 32:
                            t.prev = 32, t.t1 = t.catch(23), console.error("requestSKProducts failed. ".concat(t.t1)), wx.showModal({
                                content: "获取数据失败，请稍后再试",
                                showCancel: !1,
                                complete: o.navBack
                            });
                        case 36:
                            return t.prev = 36, wx.hideLoading(), t.finish(36);
                        case 39:
                        case "end":
                            return t.stop()
                    }
                }), r, null, [
                    [5, 18],
                    [23, 32, 36, 39]
                ])
            })))()
        },
        subscribe: function() {
            var e = this;
            return r(t().mark((function n() {
                var r, o, a, i, s, c;
                return t().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (wx.miniapp.IAP.canMakePayments()) {
                                t.next = 4;
                                break
                            }
                            return wx.showToast({
                                title: "当前无法完成支付"
                            }), t.abrupt("return");
                        case 4:
                            r = e.data, o = r.timeLimitedProducts, a = r.normalProducts, i = r.inPromoPeriod, s = r.selectedIndex, c = (i ? o : a)[s], e.timer && clearTimeout(e.timer), wx.showLoading({
                                title: "加载中..."
                            }), wx.miniapp.IAP.addPaymentByProductIdentifiers({
                                productIdentifier: c.productIdentifier,
                                quantity: 1,
                                simulatesAskToBuyInSandbox: !1,
                                fail: function() {
                                    wx.showToast({
                                        title: "支付失败",
                                        icon: "error"
                                    }), wx.hideLoading()
                                }
                            }), e.timer = setTimeout((function() {
                                wx.hideLoading()
                            }), 15e3);
                        case 11:
                        case "end":
                            return t.stop()
                    }
                }), n)
            })))()
        },
        navTo: function(e) {
            var t = e.currentTarget.dataset.url;
            wx.navigateTo({
                url: t
            })
        },
        restore: function() {
            wx.miniapp.IAP.restoreCompletedTransactions({
                success: function(e) {
                    console.log("restoreCompletedTransactions", e)
                },
                fail: function(e) {
                    console.log("failed restoreCompletedTransactions", e)
                }
            })
        }
    });