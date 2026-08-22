Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, o = (e = require("aegis-mp-sdk")) && e.__esModule ? e : {
            default: e
        },
        r = require("../commons/config"),
        t = require("../commons/utils");
    var i = new o.default({
        id: "16OGVFlL80wP7Vedxk",
        reportApiSpeed: !0,
        hostUrl: "https://rumt-zh.com",
        spa: !0,
        version: r.PI_VERSION,
        beforeRequest: function(e) {
            var o;
            if (null == i || null === (o = i.config) || void 0 === o || !o.uin) {
                var r = (0, t.getLoginInfo)();
                null != r && r.openid && i.setConfig({
                    uin: r.openid
                })
            }
        }
    });
    i.sum = function(e) {
        i.reportEvent(e)
    };
    var n = i;
    exports.default = n;