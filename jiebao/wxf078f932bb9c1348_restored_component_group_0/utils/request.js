Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(n) {
        return new Promise((function(o, a) {
            var c = Date.now(),
                i = (n.method || "GET").toUpperCase(),
                u = n.data || {},
                s = n.url,
                l = function() {
                    var e = getApp() || {},
                        t = e.deviceInfo || {};
                    if (null != t && t.platform || null != t && t.brand) return t;
                    try {
                        var r = wx.getDeviceInfo() || {};
                        return e.deviceInfo = r, r
                    } catch (e) {
                        return t
                    }
                }(),
                d = (null == l ? void 0 : l.brand) || "",
                p = (null == l ? void 0 : l.platform) || "";
            if ("GET" === i) {
                var m = Object.entries(t(t({}, u), {}, {
                    version: r.PI_VERSION,
                    channel: r.APP_STORE_CHANNEL,
                    brand: d,
                    platform: p
                })).map((function(t) {
                    var r = e(t, 2),
                        n = r[0],
                        o = r[1];
                    return "".concat(n, "=").concat(encodeURIComponent(o))
                })).join("&");
                s = "".concat(s).concat(s.includes("?") ? "&" : "?").concat(m), u = void 0
            } else u = t(t({}, u), {}, {
                version: r.PI_VERSION,
                channel: r.APP_STORE_CHANNEL,
                brand: d,
                platform: p
            });
            wx.request({
                url: s,
                method: i,
                data: u,
                enableHttp2: !0,
                header: t({
                    "content-type": "GET" === i ? "application/x-www-form-urlencoded" : "application/json"
                }, n.header),
                timeout: n.timeout,
                success: function(e) {
                    var t = Date.now() - c;
                    try {
                        setTimeout((function() {
                            ! function(e, t, r) {
                                var n = getApp().Monitor;
                                if (!n) return;
                                var o = !1,
                                    a = 0,
                                    c = "ok",
                                    i = e.url,
                                    u = e.apiName,
                                    s = t.statusCode,
                                    l = t.data;
                                200 === s ? (0 === l.code && (o = !0), l.code && (a = l.code), l.msg && (c = l.msg)) : (a = s, c = "statusCode:".concat(s));
                                var d = {
                                    time: r,
                                    success: o,
                                    code: "".concat(a),
                                    msg: c
                                };
                                d.api = u || i.split("?")[0];
                                n.api(d)
                            }(n, e, t)
                        }), 500)
                    } catch (e) {}
                    e.statusCode >= 200 && e.statusCode < 300 && e.data ? o(e.data) : (console.error(e), a(e))
                },
                fail: function(e) {
                    console.error(e), a(e)
                }
            })
        }))
    }, require("../@babel/runtime/helpers/Arrayincludes");
    var e = require("../@babel/runtime/helpers/slicedToArray"),
        t = require("../@babel/runtime/helpers/objectSpread2");
    require("../@babel/runtime/helpers/Objectentries");
    var r = require("../commons/config");