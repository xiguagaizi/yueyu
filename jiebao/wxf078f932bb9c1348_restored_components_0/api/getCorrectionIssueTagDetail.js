Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(n, o) {
        if (!n) return Promise.reject(new Error("MISSING_TAG_KEY"));
        var c = function() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.entries(r).filter((function(r) {
                    var t = e(r, 2)[1];
                    return null != t && "" !== t
                }));
            if (!t.length) return "";
            var n = t.map((function(r) {
                var t = e(r, 2),
                    n = t[0],
                    o = t[1];
                return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(o))
            })).join("&");
            return "?".concat(n)
        }(o);
        return (0, t.requestWidthAuth)({
            url: "".concat(r.CORRECTION_ISSUE_TAG_DETAIL_URL, "/").concat(encodeURIComponent(n)).concat(c),
            method: "GET",
            apiName: "getCorrectionIssueTagDetail"
        })
    };
    var e = require("../@babel/runtime/helpers/slicedToArray");
    require("../@babel/runtime/helpers/Objectentries");
    var r = require("../commons/config"),
        t = require("../utils/login");