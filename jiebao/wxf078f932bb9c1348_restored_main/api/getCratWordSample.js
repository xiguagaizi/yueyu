Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = Math.max(1, Math.min(200, Number(r) || 30));
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CRAT_WORD_SAMPLE_URL, "?count=").concat(u),
            apiName: "getCratWordSample"
        }, o)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");