Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, r.requestWidthAuth)({
            url: "".concat(e.DELUSER_URL),
            method: "POST",
            apiName: "delUser"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");