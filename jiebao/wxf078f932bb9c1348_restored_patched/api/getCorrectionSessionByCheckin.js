Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CORRECTION_SESSIONS_URL, "/by-checkin/").concat(r),
            method: "GET",
            apiName: "getCorrectionSessionByCheckin"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");