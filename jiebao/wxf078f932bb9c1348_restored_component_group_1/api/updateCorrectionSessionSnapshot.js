Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o, r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CORRECTION_SESSIONS_URL, "/").concat(o, "/snapshot"),
            method: "POST",
            apiName: "updateCorrectionSessionSnapshot",
            data: r
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");