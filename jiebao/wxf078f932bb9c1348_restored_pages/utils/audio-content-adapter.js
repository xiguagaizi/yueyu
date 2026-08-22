Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.formatEpisodeDuration = i, exports.getEpisodeUuidFromOptions = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!e || "object" !== r(e)) return "";
        return e.uuid || e.episodeUuid || e.episode || e.id || ""
    }, exports.normalizeAssetUrl = o, exports.normalizeAudioContentCategory = a, exports.normalizeAudioContentCollectionPayload = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = n(e.collection),
            o = Array.isArray(e.items) ? e.items.map((function(e) {
                return u(e)
            })) : [];
        return {
            source: "audio-content",
            courseInfo: t,
            episodes: o,
            currentEpisode: l(e.currentItem || {}, t, r)
        }
    }, exports.normalizeAudioContentCourse = n, exports.normalizeAudioContentDetailPayload = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = n(e.collection);
        return {
            source: "audio-content",
            courseInfo: t,
            episodes: [],
            currentEpisode: l(e, t, r)
        }
    }, exports.normalizeAudioContentEpisode = l, exports.normalizeAudioContentEpisodeSummary = u;
    var e = require("../@babel/runtime/helpers/objectSpread2"),
        r = require("../@babel/runtime/helpers/typeof"),
        t = require("../commons/config");

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!e || "string" != typeof e) return "";
        if (/^(https?:)?\/\//.test(e)) return e.startsWith("//") ? "https:".concat(e) : e;
        var r = "string" == typeof t.BASE_URL ? t.BASE_URL : "";
        if (!r) return e;
        var o = r.replace(/\/$/, ""),
            i = e.startsWith("/") ? e : "/".concat(e);
        return "".concat(o).concat(i)
    }

    function i(e) {
        var r = Number(e);
        if (!Number.isFinite(r) || r <= 0) return "";
        if (r >= 6e4) {
            var t = Math.round(r / 6e4 * 10) / 10;
            return "".concat(t, "分钟")
        }
        var o = Math.max(1, Math.round(r / 1e3));
        return "".concat(o, "秒")
    }

    function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!e || "object" !== r(e)) return null;
        var t = a(e.categoryInfo);
        return {
            id: e.id || "",
            title: e.title || "",
            subtitle: e.subtitle || "",
            description: e.description || "",
            coverUrl: o(e.coverUrl || e.shareCoverUrl || ""),
            shareCoverUrl: o(e.shareCoverUrl || e.coverUrl || ""),
            category: e.category || "",
            categoryInfo: t,
            totalDurationMs: e.totalDurationMs || 0
        }
    }

    function a() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return t && "object" === r(t) ? e(e({}, t), {}, {
            coverUrl: o(t.coverUrl || "")
        }) : null
    }

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            id: e.id || "",
            title: e.title || "",
            summary: e.summary || "",
            duration: e.duration || 0,
            displayDuration: i(e.duration),
            isAccessFree: !!e.isAccessFree,
            needVip: !!e.needVip,
            accessToken: e.accessToken || ""
        }
    }

    function l() {
        var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            l = r.audio || {},
            s = a(r.categoryInfo);
        return {
            id: r.id || u,
            title: r.title || (null == n ? void 0 : n.title) || "",
            summary: r.summary || "",
            subtitle: r.summary || (null == n ? void 0 : n.subtitle) || "",
            category: r.category || "",
            categoryInfo: s,
            duration: r.duration || 0,
            tags: Array.isArray(r.tags) ? r.tags : [],
            article: Array.isArray(r.article) ? r.article : [],
            audioSrc: o(l.src || r.audioSrc || ""),
            coverUrl: o(r.coverUrl || (null == n ? void 0 : n.coverUrl) || (null == s ? void 0 : s.coverUrl) || (null == n || null === (e = n.categoryInfo) || void 0 === e ? void 0 : e.coverUrl) || t.DEFAULT_AUDIO_CONTENT_COVER_URL),
            displayDuration: i(r.duration),
            speechRate: r.speechRate || "normal",
            needVip: !!r.needVip,
            subtitleCapabilities: r.subtitleCapabilities || null
        }
    }