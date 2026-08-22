Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.AUDIO_CONTENT_FAVORITE_TARGET_UID = void 0, exports.buildAudioContentFavoriteTarget = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = o || {},
            n = i.targetUuid,
            r = void 0 === n ? "" : n,
            a = i.category,
            d = void 0 === a ? "" : a,
            u = i.categoryInfo,
            v = void 0 === u ? null : u,
            l = i.fallbackBizType,
            c = void 0 === l ? "audio-content" : l,
            T = e((null == v ? void 0 : v.slug) || d, c);
        return {
            targetUid: "api::audio-content.audio-content",
            targetUuid: t(r),
            targetBizType: T
        }
    }, exports.normalizeFavoriteBizType = e;

    function t() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "string" == typeof t ? t.trim() : ""
    }

    function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "audio-content",
            i = t(e).toLowerCase();
        return i || o
    }
    exports.AUDIO_CONTENT_FAVORITE_TARGET_UID = "api::audio-content.audio-content";