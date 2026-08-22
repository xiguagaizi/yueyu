Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o, u) {
        var n = {
            title: o,
            contentV2: u
        };
        return (0, t.requestWidthAuth)({
            method: "PUT",
            data: n,
            url: "".concat(e.LONG_TEXT_JYUTPING_URL, "/").concat(r),
            apiName: "updateLongTextJyutping"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");