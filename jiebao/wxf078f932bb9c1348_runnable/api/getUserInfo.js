Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, r.requestWidthAuth)({
            method: "GET",
            url: e.USER_INFO_URL,
            apiName: "getUserInfo"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");