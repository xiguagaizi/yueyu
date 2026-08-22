Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(i, r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.ADMIN_CHECKIN),
            method: "PUT",
            apiName: "adminUpdateCheckin",
            data: {
                uuid: i,
                fields: r
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");