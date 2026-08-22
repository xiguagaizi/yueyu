Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
        return (0, t.requestWidthAuth)({
            url: "".concat(e.REDEEM_URL, "/claim"),
            method: "POST",
            apiName: "claimRedeemCode",
            data: {
                claimKey: r
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");