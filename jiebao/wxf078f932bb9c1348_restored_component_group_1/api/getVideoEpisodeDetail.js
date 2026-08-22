Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(c) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!c) return Promise.reject(new Error("缺少视频ID"));
        var n = i || {},
            s = n.accessToken,
            a = void 0 === s ? "" : s,
            u = e(n, t),
            d = a ? "?accessToken=".concat(encodeURIComponent(a)) : "";
        return (0, r.requestWidthAuth)({
            method: "GET",
            url: "".concat(o.MEDIA_EPISODE_DETAIL_URL, "/").concat(c).concat(d),
            apiName: "getVideoEpisodeDetail"
        }, u)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        o = require("../commons/config"),
        r = require("../utils/login"),
        t = ["accessToken"];