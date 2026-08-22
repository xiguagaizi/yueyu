Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = r || {},
            i = s.accessToken,
            a = void 0 === i ? "" : i,
            u = e(s, c),
            l = a ? "?accessToken=".concat(encodeURIComponent(a)) : "";
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(o.CANTONESE_BOOK_URL, "/").concat(n).concat(l),
            apiName: "getCantoneseBook"
        }, u)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        o = require("../commons/config"),
        t = require("../utils/login"),
        c = ["accessToken"];