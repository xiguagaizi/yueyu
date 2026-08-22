Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            method: "POST",
            data: r,
            url: "".concat(e.UPDATE_USER_URL),
            apiName: "updateUserInfo"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");