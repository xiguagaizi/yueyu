Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n || {},
            s = i.accessToken,
            a = void 0 === s ? "" : s,
            u = e(i, c),
            l = a ? "?accessToken=".concat(encodeURIComponent(a)) : "";
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(o.DAILY_VOICE_URL, "/").concat(r).concat(l),
            apiName: "getDailyVoice"
        }, u)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        o = require("../commons/config"),
        t = require("../utils/login"),
        c = ["accessToken"];