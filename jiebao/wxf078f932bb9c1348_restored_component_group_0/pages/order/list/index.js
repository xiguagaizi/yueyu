var e, a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/toConsumableArray"),
        t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../commons/utils"),
        s = (e = require("../../../api/getOrderList")) && e.__esModule ? e : {
            default: e
        };
    Page({
        navBack: n.navBack,
        page: 1,
        pageSize: 15,
        data: {
            orders: [],
            loading: !1,
            hasMore: !0,
            loaded: !1
        },
        onLoad: function() {
            this.loadOrders()
        },
        loadOrders: function() {
            var e = this;
            return t(a().mark((function t() {
                var o, i, d, c;
                return a().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            if (!e.data.loading) {
                                a.next = 2;
                                break
                            }
                            return a.abrupt("return");
                        case 2:
                            return e.setData({
                                loading: !0
                            }), a.prev = 3, a.next = 6, (0, s.default)({
                                page: e.page,
                                pageSize: e.pageSize
                            });
                        case 6:
                            if (o = a.sent, i = o.code, d = o.data, 0 === i) {
                                a.next = 12;
                                break
                            }
                            return wx.showModal({
                                title: "提示",
                                content: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: n.navBack
                            }), a.abrupt("return");
                        case 12:
                            c = d.list || [], e.setData({
                                orders: [].concat(r(e.data.orders), r(c)),
                                hasMore: d.hasNext,
                                loaded: !0
                            }), a.next = 19;
                            break;
                        case 16:
                            a.prev = 16, a.t0 = a.catch(3), wx.showToast({
                                title: "加载失败",
                                icon: "none"
                            });
                        case 19:
                            return a.prev = 19, e.setData({
                                loading: !1
                            }), a.finish(19);
                        case 22:
                        case "end":
                            return a.stop()
                    }
                }), t, null, [
                    [3, 16, 19, 22]
                ])
            })))()
        },
        loadMore: function() {
            this.data.hasMore && !this.data.loading && (this.page++, this.loadOrders())
        },
        copyOrderId: function(e) {
            var a = e.currentTarget.dataset.id;
            wx.setClipboardData({
                data: a,
                success: function() {
                    wx.showToast({
                        title: "订单号已复制",
                        icon: "success"
                    })
                }
            })
        }
    });