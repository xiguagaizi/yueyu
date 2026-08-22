Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var o = r.page,
            c = r.pageSize,
            i = r.filter,
            a = r.sort;
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CHECKIN_URL, "?page=").concat(o, "&pageSize=").concat(c, "&filter=").concat(i, "&sort=").concat(a),
            apiName: "getCheckinList"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");