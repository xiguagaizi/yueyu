Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.requestWidthAuth)({
            url: e.ADD_USER_CHECKIN_URL,
            method: "POST",
            apiName: "addUserCheckin",
            data: t
        }, i)
    };
    var e = require("../commons/config"),
        r = require("../utils/login");