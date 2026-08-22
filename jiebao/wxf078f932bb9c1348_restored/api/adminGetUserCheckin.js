Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var a = r.type,
            i = r.page,
            c = r.pageSize;
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.ADMIN_USER_CHECKIN_URL, "?page=").concat(i, "&pageSize=").concat(c, "&type=").concat(a),
            apiName: "adminGetUserCheckinList"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");