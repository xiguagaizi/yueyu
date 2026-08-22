Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            method: "DELETE",
            url: "".concat(e.ADMIN_USER_CHECKIN_URL, "/").concat(r),
            apiName: "adminRemoveUserCheckin"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");