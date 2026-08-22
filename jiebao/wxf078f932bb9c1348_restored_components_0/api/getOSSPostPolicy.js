Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = r.ALI_OSS_URL,
            i = Object.entries(n || {}).filter((function(r) {
                var t = e(r, 2)[1];
                return null != t && "" !== t
            }));
        if (i.length) {
            var c = i.map((function(r) {
                var t = e(r, 2),
                    n = t[0],
                    o = t[1];
                return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(o))
            })).join("&");
            o = "".concat(r.ALI_OSS_URL, "?").concat(c)
        }
        return (0, t.requestWidthAuth)({
            url: o,
            method: "GET",
            apiName: "getOSSPostPolicy"
        })
    };
    var e = require("../@babel/runtime/helpers/slicedToArray");
    require("../@babel/runtime/helpers/Objectentries");
    var r = require("../commons/config"),
        t = require("../utils/login");