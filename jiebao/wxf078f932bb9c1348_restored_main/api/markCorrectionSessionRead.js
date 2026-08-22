Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t, o) {
        return (0, r.requestWidthAuth)({
            url: "".concat(e.CORRECTION_SESSIONS_URL, "/").concat(t, "/read"),
            method: "POST",
            apiName: "markCorrectionSessionRead",
            data: {
                actor: o
            }
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");