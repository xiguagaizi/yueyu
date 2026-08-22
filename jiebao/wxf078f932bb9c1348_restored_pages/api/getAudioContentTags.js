Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = o || {},
            u = i.category,
            a = void 0 === u ? "" : u;
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: e.AUDIO_CONTENT_TAGS_URL,
            data: {
                category: a
            },
            apiName: "getAudioContentTags"
        }, r)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");