Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zh",
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "yue",
            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = t.TRANSLATE_URL,
            d = "translate";
        "baidu" === u.mode && (a = t.BAIDU_TRANSLATE_URL, d = "baiduTranslate");
        return (0, e.requestWidthAuth)({
            method: "POST",
            url: a,
            apiName: d,
            data: {
                text: r,
                from: o,
                to: i
            }
        }, u)
    };
    var e = require("../utils/login"),
        t = require("../commons/config");