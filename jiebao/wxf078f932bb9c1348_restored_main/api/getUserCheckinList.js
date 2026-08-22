Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(c) {
        var n = c.checkinId,
            o = c.page,
            a = c.pageSize,
            r = c.teacherOnly,
            i = c.scope,
            p = c.vipFilter,
            s = c.studentCategory,
            u = ["page=".concat(o), "pageSize=".concat(a), "checkinId=".concat(n)];
        r && u.push("teacherOnly=1");
        i && u.push("scope=".concat(encodeURIComponent(i)));
        p && u.push("vipFilter=".concat(encodeURIComponent(p)));
        s && u.push("studentCategory=".concat(encodeURIComponent(s)));
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.USER_CHECKIN_URL, "?").concat(u.join("&")),
            apiName: "getUserCheckinList"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");