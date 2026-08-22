Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(n) {
        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n) return Promise.reject(new Error("缺少内容ID"));
        var i = c || {},
            s = i.accessToken,
            u = void 0 === s ? "" : s,
            a = e(i, r),
            l = u ? "?accessToken=".concat(encodeURIComponent(u)) : "";
        return (0, o.requestWidthAuth)({
            method: "GET",
            url: "".concat(t.AUDIO_CONTENT_DETAIL_URL, "/").concat(n).concat(l),
            apiName: "getAudioContentDetail"
        }, a)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        t = require("../commons/config"),
        o = require("../utils/login"),
        r = ["accessToken"];