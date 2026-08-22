Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.COMMON_DATA_URL, "/").concat(o),
            apiName: "getCommonData"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");