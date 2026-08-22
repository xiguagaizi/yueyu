Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o, r) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.LONG_TEXT_JYUTPING_URL, "?page=").concat(o, "&pageSize=").concat(r),
            apiName: "getLongTextJyutpingList"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");