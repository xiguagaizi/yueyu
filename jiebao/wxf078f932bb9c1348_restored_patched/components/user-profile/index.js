var e = require("../../utils/login"),
        n = {
            mp: "小程序账号",
            weixinMiniProgram: "小程序账号",
            weixinApp: "微信账号",
            apple: "Apple 账号",
            huawei: "华为账号"
        };
    Component({
        properties: {
            msg: {
                type: Number,
                value: 0
            },
            profileBanner: {
                type: Object,
                value: null
            },
            needlogin: {
                type: Boolean,
                value: !1
            },
            nickname: {
                type: String,
                value: ""
            },
            avatar: {
                type: String,
                value: "../../images/mp-logo.png"
            },
            checkinDays: {
                type: Number,
                value: 0
            },
            loginType: {
                type: String,
                value: ""
            },
            days: {
                type: Number,
                value: 0
            }
        },
        data: {
            secondaryText: ""
        },
        observers: {
            "days, loginType, needlogin, profileBanner": function(e, n, i, t) {
                this.setSecondaryText({
                    days: e,
                    loginType: n,
                    needlogin: i,
                    profileBanner: t
                })
            }
        },
        lifetimes: {},
        methods: {
            navToAppLogin: e.navToAppLogin,
            buildStatusText: function(e) {
                var i = e.days,
                    t = e.loginType;
                if (e.needlogin) return "游客模式 · 登录后同步学习记录";
                var a = n[t] || "当前账号",
                    o = Number(i);
                return Number.isFinite(o) && o > 0 ? "".concat(a, " · 陪伴第").concat(Math.floor(o), "天") : a
            },
            buildSecondaryText: function() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = String((null == n || null === (e = n.profileBanner) || void 0 === e ? void 0 : e.title) || "").trim();
                return i || this.buildStatusText(n)
            },
            setSecondaryText: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.setData({
                    secondaryText: this.buildSecondaryText(e)
                })
            },
            onTapProfile: function() {
                this.triggerEvent("tap")
            },
            nvaToMy: function() {
                wx.navigateTo({
                    url: "/pages/my/index/index"
                })
            },
            navToSecondary: function() {
                var e, n, i = String((null === (e = this.data) || void 0 === e || null === (n = e.profileBanner) || void 0 === n ? void 0 : n.path) || "").trim();
                i && wx.navigateTo({
                    url: i
                })
            }
        }
    });