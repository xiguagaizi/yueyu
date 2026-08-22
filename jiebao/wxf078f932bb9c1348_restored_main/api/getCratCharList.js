Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = String(i.initial || "").trim().toLowerCase(),
            c = String(i.final || "").trim().toLowerCase(),
            l = "pdf" === String(i.sort || "common").trim().toLowerCase() ? "pdf" : "common",
            s = ["page=".concat(o), "pageSize=".concat(n), a ? "initial=".concat(encodeURIComponent(a)) : "", c ? "final=".concat(encodeURIComponent(c)) : "", "sort=".concat(l)].filter(Boolean).join("&");
        return (0, e.requestWidthAuth)({
            method: "GET",
            url: "".concat(t.CRAT_CHAR_LIST_URL, "?").concat(s),
            apiName: "getCratCharList"
        }, r)
    };
    var t = require("../commons/config"),
        e = require("../utils/login");