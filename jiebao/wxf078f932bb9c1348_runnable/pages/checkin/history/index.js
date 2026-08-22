    "use strict";
    var t, e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../commons/utils"),
        i = require("../../../commons/config"),
        o = (t = require("../../../api/getCheckinList")) && t.__esModule ? t : {
            default: t
        };
    Page({
        pageSize: 20,
        page: 1,
        navBack: r.navBack,
        data: {
            show: !1,
            list: [],
            filter: 0,
            sort: 0,
            filterOptions: [{
                text: "全部",
                value: 0
            }, {
                text: "未打卡",
                value: 1
            }],
            sortOptions: [{
                text: "最新",
                value: 0
            }, {
                text: "最早",
                value: 1
            }]
        },
        onLoad: function(t) {
            this.getFilterAndSort(), this.getData()
        },
        getData: function() {
            var t = this;
            return n(e().mark((function n() {
                var i, s, c, l, u, f, h, d, p, g;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return s = (i = t).page, c = i.pageSize, l = i.data, u = l.sort, f = l.filter, wx.showLoading({
                                title: "加载中..."
                            }), e.prev = 4, e.next = 7, (0, o.default)({
                                page: s,
                                pageSize: c,
                                filter: f,
                                sort: u
                            });
                        case 7:
                            h = e.sent, d = h.code, p = h.data, 0 === d ? (g = i.data.list, 1 === s && (g = []), i.setData({
                                list: [].concat(a(g), a(p.list)),
                                hasNext: p.hasNext
                            })) : wx.showModal({
                                title: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            }), e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e.catch(4), wx.showModal({
                                title: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            });
                        case 16:
                            i.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [4, 13]
                ])
            })))()
        },
        loadMore: function() {
            this.page += 1, this.getData()
        },
        navToCheckin: function(t) {
            var e = this,
                a = t.currentTarget.dataset,
                n = a.id,
                i = a.needvip,
                o = void 0 !== i && i,
                s = a.accesstoken,
                c = void 0 === s ? "" : s;
            if (o)(0, r.navToOpenVip)();
            else {
                var l = c ? "&accessToken=".concat(encodeURIComponent(c)) : "";
                wx.navigateTo({
                    url: "../index/index?id=".concat(n).concat(l),
                    success: function(t) {
                        t.eventChannel.emit("acceptDataFromOpenerPage", {
                            from: "history"
                        })
                    },
                    events: {
                        checkedNotify: function(t) {
                            var a = e.data.list;
                            e.setData({
                                list: a.map((function(e) {
                                    return e.uuid === t && (e.checked = !0), e
                                }))
                            })
                        }
                    }
                })
            }
        },
        onSwitchChange: function(t) {
            var e = this,
                a = t.currentTarget.dataset.type,
                n = e.data,
                r = n.sort,
                i = n.filter;
            "sort" === a ? r = t.detail : "filter" === a && (i = t.detail), e.setData({
                sort: r,
                filter: i
            }, (function() {
                e.cacheFilterAndSort()
            })), e.sort = r, e.filter = i, e.page = 1, e.getData()
        },
        getFilterAndSort: function() {
            try {
                var t = wx.getStorageSync(i.HIS_CHECKIN_LIST_KEY);
                "sort" in t && "filter" in t && (this.setData({
                    sort: t.sort,
                    filter: t.filter
                }), this.sort = t.sort, this.filter = t.filter)
            } catch (t) {}
        },
        cacheFilterAndSort: function() {
            var t = this.data,
                e = t.sort,
                a = t.filter,
                n = {
                    sort: e,
                    filter: a
                };
            this.sort = e, this.filter = a, wx.setStorage({
                key: i.HIS_CHECKIN_LIST_KEY,
                data: n
            })
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
