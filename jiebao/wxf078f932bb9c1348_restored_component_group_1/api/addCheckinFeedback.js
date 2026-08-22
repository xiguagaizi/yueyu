Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: e.CHECKIN_FEEDBACK_URL,
            method: "POST",
            apiName: "addCheckinFeedback",
            data: r
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");