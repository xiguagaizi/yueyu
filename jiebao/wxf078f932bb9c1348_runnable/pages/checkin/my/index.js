    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/toConsumableArray"),
        a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/defineProperty"),
        r = require("../../../commons/utils"),
        i = c(require("../../../api/getMyCheckins")),
        s = c(require("../../../api/getMyFeedbackCheckins"));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Page({
        page: 1,
        pageSize: 15,
        navBack: r.navBack,
        data: {
            show: !1,
            list: []
        },
        navToDetail: function(e) {
            var t = e.currentTarget.dataset.index,
                a = this.data.list[t],
                r = a.userCheckinId,
                i = a.uuid,
                s = a.newAnswer,
                c = "/pages/checkin/index/index?id=".concat(encodeURIComponent(i));
            2 === this.type && (c = "/pages/checkin/comment/index?id=".concat(encodeURIComponent(r)), s && (c += "&newAnswer=1"), this.setData(n({}, "list[".concat(t, "].newAnswer"), !1))), wx.navigateTo({
                url: c
            })
        },
        loadMore: function() {
            this.page += 1, this.getData()
        },
        getData: function() {
            var n = this;
            return a(e().mark((function a() {
                var c, o, u, l;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c = n, wx.showLoading({
                                    title: "加载中..."
                                }), e.prev = 2, 1 !== n.type) {
                                e.next = 9;
                                break
                            }
                            return e.next = 6, (0, i.default)(n.page, n.pageSize);
                        case 6:
                            e.t0 = e.sent, e.next = 12;
                            break;
                        case 9:
                            return e.next = 11, (0, s.default)(n.page, n.pageSize);
                        case 11:
                            e.t0 = e.sent;
                        case 12:
                            o = e.t0, u = o.code, l = o.data, 0 === u ? c.setData({
                                list: [].concat(t(c.data.list), t(l.list)),
                                hasNext: l.hasNext
                            }) : wx.showModal({
                                content: "系统出错，请稍后再试",
                                complete: r.navBack,
                                showCancel: !1
                            }), e.next = 21;
                            break;
                        case 17:
                            e.prev = 17, e.t1 = e.catch(2), console.error(e.t1), wx.showModal({
                                content: "系统出错，请稍后再试",
                                complete: r.navBack,
                                showCancel: !1
                            });
                        case 21:
                            c.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [2, 17]
                ])
            })))()
        },
        onLoad: function(e) {
            this.type = parseInt(e.type || 1, 10), this.getData(), this.setData({
                type: this.type
            })
        },
        navToCheckin: function() {
            wx.navigateTo({
                url: "/pages/checkin/index/index"
            })
        }
    });
