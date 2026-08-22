Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: e.CORRECTION_SESSIONS_URL,
            method: "POST",
            apiName: "createCorrectionSession",
            data: t
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");