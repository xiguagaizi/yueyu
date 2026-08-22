Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = i || {},
            d = r.mediaType,
            a = void 0 === d ? "" : d,
            u = r.category,
            s = void 0 === u ? "" : u;
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: e.MEDIA_EPISODE_TAGS_URL,
            data: {
                mediaType: a,
                category: s
            },
            apiName: "getVideoEpisodeTags"
        }, o)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");