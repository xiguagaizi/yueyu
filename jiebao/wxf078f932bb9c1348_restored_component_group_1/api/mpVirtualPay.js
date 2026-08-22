Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: e.MP_VIRTUAL_PAY_URL,
            method: "POST",
            apiName: "mpVirtualPay",
            data: r
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");