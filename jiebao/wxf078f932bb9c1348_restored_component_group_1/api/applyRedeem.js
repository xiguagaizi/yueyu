Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: e.REDEEM_URL,
            method: "POST",
            apiName: "applyRedeem",
            data: {
                code: r
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");