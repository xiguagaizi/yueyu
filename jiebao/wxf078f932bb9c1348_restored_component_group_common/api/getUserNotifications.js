Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = o.page,
            r = void 0 === i ? 1 : i,
            a = o.pageSize,
            c = void 0 === a ? 20 : a,
            n = ["page=".concat(r), "pageSize=".concat(c)].join("&");
        return (0, t.requestWidthAuth)({
            url: "".concat(e.USER_NOTIFICATION_LIST_URL, "?").concat(n),
            method: "GET",
            apiName: "getUserNotifications"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");