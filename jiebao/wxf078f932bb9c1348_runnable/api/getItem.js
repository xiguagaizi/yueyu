Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.COMMON_CONFIG_URL, "/uuid/").concat(r),
            method: "GET",
            apiName: "getItem"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");