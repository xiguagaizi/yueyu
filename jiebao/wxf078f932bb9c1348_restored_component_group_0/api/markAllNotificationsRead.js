Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, t.requestWidthAuth)({
            url: e.USER_NOTIFICATION_MARK_ALL_READ_URL,
            method: "POST",
            apiName: "markAllNotificationsRead"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");