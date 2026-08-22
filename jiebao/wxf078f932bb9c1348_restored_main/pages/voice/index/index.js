var e, a = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/toConsumableArray"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../commons/utils"),
        i = (e = require("../../../api/getDailyVoiceList")) && e.__esModule ? e : {
            default: e
        };
    Page({
        pageSize: 20,
        page: 1,
        data: {
            title: "每日粤听",
            searchValue: "",
            loaded: !1,
            list: []
        },
        onLoad: function(e) {
            this.getData()
        },
        navBack: n.navBack,
        getData: function() {
            var e = this;
            return r(a().mark((function r() {
                var n, s, o, c, u;
                return a().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return (n = e).setData({
                                loading: !0,
                                error: !1
                            }), wx.showLoading({
                                title: "加载中..."
                            }), s = n.page, o = n.pageSize, a.prev = 4, !1, a.next = 8, (0, i.default)({
                                page: s,
                                pageSize: o
                            }, {
                                guest: !1
                            });
                        case 8:
                            c = a.sent, u = c.data, e.setData({
                                list: [].concat(t(n.data.list), t(u.list)),
                                hasNext: u.hasNext,
                                isGuest: u.isGuest || !1
                            }), a.next = 16;
                            break;
                        case 13:
                            a.prev = 13, a.t0 = a.catch(4), console.error(a.t0);
                        case 16:
                            wx.hideLoading(), n.setData({
                                loaded: !0
                            });
                        case 18:
                        case "end":
                            return a.stop()
                    }
                }), r, null, [
                    [4, 13]
                ])
            })))()
        },
        loadmore: function() {
            this.page += 1, this.getData()
        },
        navToDetail: function(e) {
            var a = e.currentTarget.dataset,
                t = a.uuid,
                r = a.needvip,
                i = void 0 !== r && r,
                s = a.accesstoken,
                o = void 0 === s ? "" : s;
            if (i)(0, n.navToOpenVip)();
            else {
                var c = o ? "&accessToken=".concat(encodeURIComponent(o)) : "";
                wx.navigateTo({
                    url: "../detail/index?id=".concat(t).concat(c)
                })
            }
        }
    });