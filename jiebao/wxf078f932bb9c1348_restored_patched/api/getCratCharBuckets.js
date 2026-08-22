Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = String(o.initial || "").trim().toLowerCase(),
            r = String(o.final || "").trim().toLowerCase(),
            a = [i ? "initial=".concat(encodeURIComponent(i)) : "", r ? "final=".concat(encodeURIComponent(r)) : ""].filter(Boolean).join("&");
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: a ? "".concat(e.CRAT_CHAR_BUCKETS_URL, "?").concat(a) : e.CRAT_CHAR_BUCKETS_URL,
            apiName: "getCratCharBuckets"
        }, n)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");