Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "student";
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CORRECTION_BADGE_URL, "?role=").concat(r),
            method: "GET",
            apiName: "getCorrectionBadge"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");