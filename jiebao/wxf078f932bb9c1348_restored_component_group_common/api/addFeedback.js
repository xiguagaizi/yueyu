Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t, u) {
        return (0, r.requestWidthAuth)({
            url: e.FEEDBACK_URL,
            method: "POST",
            apiName: "addFeedback",
            data: {
                songName: t,
                singer: u
            }
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");