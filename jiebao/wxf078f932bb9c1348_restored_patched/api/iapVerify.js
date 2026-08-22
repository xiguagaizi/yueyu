Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: e.IAP_VERIFY,
            method: "POST",
            apiName: "iapVerify",
            data: {
                receipt: t
            }
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");