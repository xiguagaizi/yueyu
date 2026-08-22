Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(e) {
        return (0, r.default)({
            apiName: "exchangeMiniappTicket",
            method: "POST",
            url: t.LOGIN_EXCHANGE_URL,
            data: {
                ticket: e
            }
        })
    };
    var e, t = require("../commons/config"),
        r = (e = require("../utils/request")) && e.__esModule ? e : {
            default: e
        };