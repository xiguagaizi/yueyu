Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.requestWidthAuth)({
            url: "".concat(e.USER_CHECKIN_URL, "/").concat(r),
            method: "DELETE",
            apiName: "delUserCheckin"
        }, o)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");