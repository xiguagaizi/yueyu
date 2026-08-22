Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.COMMON_DATA_URL, "/key/").concat(o),
            apiName: "getCommonDataByKey"
        }, r)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");