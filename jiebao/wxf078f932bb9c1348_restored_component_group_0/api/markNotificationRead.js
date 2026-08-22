Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: e.USER_NOTIFICATION_MARK_READ_URL,
            method: "POST",
            data: {
                id: r
            },
            apiName: "markNotificationRead"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");