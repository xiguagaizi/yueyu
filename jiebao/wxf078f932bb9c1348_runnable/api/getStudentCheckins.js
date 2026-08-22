Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = n.page,
            a = n.pageSize,
            r = n.from,
            u = n.to,
            i = [];
        c && i.push("page=".concat(c));
        a && i.push("pageSize=".concat(a));
        r && i.push("from=".concat(encodeURIComponent(r)));
        u && i.push("to=".concat(encodeURIComponent(u)));
        var p = i.length ? "?".concat(i.join("&")) : "";
        return (0, t.requestWidthAuth)({
            url: "".concat(e.STUDENT_CHECKINS_URL, "/").concat(o, "/checkins").concat(p),
            method: "GET",
            apiName: "getStudentCheckins"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");