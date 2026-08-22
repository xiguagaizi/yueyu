Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = n();
        return new Promise((function(n, u) {
            wx.request({
                url: t.LONG_TEXT_JYUTPING_EXPORT_URL,
                method: "POST",
                data: e(e({}, o), {}, {
                    version: t.PI_VERSION,
                    channel: t.APP_STORE_CHANNEL,
                    brand: (null == a ? void 0 : a.brand) || "",
                    platform: (null == a ? void 0 : a.platform) || ""
                }),
                header: e({
                    "content-type": "application/json"
                }, r()),
                success: function(e) {
                    e.statusCode >= 200 && e.statusCode < 300 && e.data ? n(e.data) : u(e)
                },
                fail: u
            })
        }))
    };
    var e = require("../@babel/runtime/helpers/objectSpread2"),
        t = require("../commons/config");

    function n() {
        var e = getApp() || {},
            t = e.deviceInfo || {};
        if (null != t && t.platform || null != t && t.brand) return t;
        try {
            var n = wx.getDeviceInfo() || {};
            return e.deviceInfo = n, n
        } catch (e) {
            return t
        }
    }

    function r() {
        try {
            var n = wx.getStorageSync(t.LOGIN_LS_KEY) || {};
            return e(e({}, n.openid ? {
                openid: n.openid
            } : {}), n.token ? {
                token: n.token
            } : {})
        } catch (e) {
            return {}
        }
    }