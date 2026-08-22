Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.buildAudioContentShareAppMessage = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = t.pagePath,
            n = void 0 === i ? "" : i,
            r = t.uuid,
            u = void 0 === r ? "" : r,
            a = t.title,
            d = void 0 === a ? "" : a,
            l = t.coverUrl,
            c = void 0 === l ? "" : l,
            v = t.fallbackTitle,
            s = void 0 === v ? "粤语派" : v,
            p = o(n),
            h = encodeURIComponent(o(u));
        return {
            title: o(d) || s,
            path: p && h ? "".concat(p, "?uuid=").concat(h) : p,
            imageUrl: o(c) || e.DEFAULT_AUDIO_CONTENT_COVER_URL
        }
    }, exports.buildAudioContentShareTimeline = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = t.uuid,
            n = void 0 === i ? "" : i,
            r = t.title,
            u = void 0 === r ? "" : r,
            a = t.coverUrl,
            d = void 0 === a ? "" : a,
            l = t.fallbackTitle,
            c = void 0 === l ? "粤语派" : l,
            v = encodeURIComponent(o(n));
        return {
            title: o(u) || c,
            query: v ? "uuid=".concat(v) : "",
            imageUrl: o(d) || e.DEFAULT_AUDIO_CONTENT_COVER_URL
        }
    }, exports.openAudioContentShareMenu = function() {
        if ("function" != typeof wx.showShareMenu) return;
        wx.showShareMenu({
            menus: ["shareAppMessage", "shareTimeline"]
        })
    };
    var e = require("../commons/config");

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "string" == typeof e ? e.trim() : ""
    }