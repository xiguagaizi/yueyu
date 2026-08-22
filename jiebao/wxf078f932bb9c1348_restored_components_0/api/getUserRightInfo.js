Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: e.USER_RIGHT_INFO_URL,
            apiName: "getUserRightInfo"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");