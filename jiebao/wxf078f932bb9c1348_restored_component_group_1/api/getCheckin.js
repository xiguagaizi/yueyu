Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n || {},
            s = i.accessToken,
            u = void 0 === s ? "" : s,
            a = e(i, c),
            l = u ? "?accessToken=".concat(encodeURIComponent(u)) : "";
        return (0, o.requestWidthAuth)({
            method: "GET",
            url: "".concat(t.CHECKIN_URL, "/").concat(r).concat(l),
            apiName: "getCheckin"
        }, a)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        t = require("../commons/config"),
        o = require("../utils/login"),
        c = ["accessToken"];