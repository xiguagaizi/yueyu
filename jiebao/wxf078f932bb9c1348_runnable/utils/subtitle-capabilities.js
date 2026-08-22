Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.DEFAULT_SUBTITLE_VISIBILITY_PREFERENCES = exports.DEFAULT_SUBTITLE_CAPABILITIES = void 0, exports.applySubtitleCapabilitiesToVisibility = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = s(n),
            i = e(o);
        return {
            subtitleCapabilities: i,
            showPinyin: !!i.supportsPinyin && t.showPinyin,
            showWordTranslation: !!i.supportsWordTranslation && t.showWordTranslation,
            showSentenceTranslation: !!i.supportsSentenceTranslation && t.showSentenceTranslation
        }
    }, exports.createSubtitleVisibilityPreferences = function() {
        return n({}, t)
    }, exports.isSubtitleVisibilitySetting = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "showPinyin" === n || "showWordTranslation" === n || "showSentenceTranslation" === n
    }, exports.normalizeSubtitleCapabilities = e, exports.normalizeSubtitleVisibilityPreferences = s;
    var n = require("../@babel/runtime/helpers/objectSpread2"),
        o = Object.freeze({
            supportsPinyin: !0,
            supportsWordTranslation: !0,
            supportsSentenceTranslation: !0
        });
    exports.DEFAULT_SUBTITLE_CAPABILITIES = o;
    var t = Object.freeze({
        showPinyin: !0,
        showWordTranslation: !0,
        showSentenceTranslation: !0
    });

    function e() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            supportsPinyin: "boolean" == typeof(null == n ? void 0 : n.supportsPinyin) ? n.supportsPinyin : o.supportsPinyin,
            supportsWordTranslation: "boolean" == typeof(null == n ? void 0 : n.supportsWordTranslation) ? n.supportsWordTranslation : o.supportsWordTranslation,
            supportsSentenceTranslation: "boolean" == typeof(null == n ? void 0 : n.supportsSentenceTranslation) ? n.supportsSentenceTranslation : o.supportsSentenceTranslation
        }
    }

    function s() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
            showPinyin: "boolean" == typeof(null == n ? void 0 : n.showPinyin) ? n.showPinyin : t.showPinyin,
            showWordTranslation: "boolean" == typeof(null == n ? void 0 : n.showWordTranslation) ? n.showWordTranslation : t.showWordTranslation,
            showSentenceTranslation: "boolean" == typeof(null == n ? void 0 : n.showSentenceTranslation) ? n.showSentenceTranslation : t.showSentenceTranslation
        }
    }
    exports.DEFAULT_SUBTITLE_VISIBILITY_PREFERENCES = t;