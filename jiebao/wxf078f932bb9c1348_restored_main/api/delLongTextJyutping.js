Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.LONG_TEXT_JYUTPING_URL, "/").concat(r),
            method: "DELETE",
            apiName: "delLongTextJyutping"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");