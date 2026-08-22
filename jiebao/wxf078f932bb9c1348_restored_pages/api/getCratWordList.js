Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            c = "common" === String(n.sort || "pdf").trim().toLowerCase() ? "common" : "pdf",
            a = ["page=".concat(o), "pageSize=".concat(r), "sort=".concat(c)].filter(Boolean).join("&");
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CRAT_WORD_LIST_URL, "?").concat(a),
            apiName: "getCratWordList"
        }, i)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");