Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = Math.max(1, Math.min(200, Number(r) || 40));
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CRAT_CHAR_SAMPLE_URL, "?count=").concat(a),
            apiName: "getCratCharSample"
        }, o)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");