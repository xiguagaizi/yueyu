Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = Number.isFinite(Number(t.page)) ? Number(t.page) : 1,
            u = Number.isFinite(Number(t.pageSize)) ? Number(t.pageSize) : 10;
        return (0, i.requestWidthAuth)({
            method: "GET",
            url: e.MEDIA_EPISODE_LIST_URL,
            data: {
                page: a,
                pageSize: u,
                tag: t.tag || "",
                tagId: t.tagId || "",
                mediaType: t.mediaType || ""
            },
            apiName: "getVideoEpisodeList"
        }, r)
    };
    var e = require("../commons/config"),
        i = require("../utils/login");