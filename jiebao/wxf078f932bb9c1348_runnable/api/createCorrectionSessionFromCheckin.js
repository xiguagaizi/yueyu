Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: "".concat(e.CORRECTION_SESSIONS_URL, "/from-user-checkin"),
            method: "POST",
            apiName: "createCorrectionSessionFromCheckin",
            data: t
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");