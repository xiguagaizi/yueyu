Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        var n = t.page,
            r = t.pageSize,
            a = t.role,
            c = t.unreadOnly,
            u = [];
        n && u.push("page=".concat(n));
        r && u.push("pageSize=".concat(r));
        a && u.push("role=".concat(a));
        "boolean" == typeof c && u.push("unread_only=".concat(c ? "1" : "0"));
        var i = u.length ? "".concat(e.CORRECTION_SESSIONS_URL, "?").concat(u.join("&")) : e.CORRECTION_SESSIONS_URL;
        return (0, o.requestWidthAuth)({
            url: i,
            method: "GET",
            apiName: "getCorrectionSessions"
        })
    };
    var e = require("../commons/config"),
        o = require("../utils/login");