Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.requestWidthAuth)({
            method: "PUT",
            url: "".concat(e.ADMIN_USER_CHECKIN_URL),
            apiName: "adminUpdateUserCheckin",
            data: {
                uuid: r,
                fields: i
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");