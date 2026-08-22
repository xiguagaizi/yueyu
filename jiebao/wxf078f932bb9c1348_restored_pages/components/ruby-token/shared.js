Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.buildAlignedRubyTokens = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            a = Array.from(String(e || "").trim()),
            r = y(i);
        if (1 !== r.length) return [];
        var o = f(r[0]);
        if (!a.length || a.length !== o.length) return [];
        return a.map((function(e, i) {
            return n({
                key: "".concat(e, "_").concat(o[i] || i, "_").concat(i)
            }, m(e, o[i] || "", t))
        }))
    }, exports.buildRubyToken = m, exports.convertPinyinParts = v, exports.formatDisplayPinyin = p, exports.formatPinyinParts = d, exports.normalizePinyinScheme = c, exports.parseJyutpingToken = s;
    var n = require("../../@babel/runtime/helpers/objectSpread2");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/slicedToArray"),
        i = require("../../@babel/runtime/helpers/defineProperty");
    require("../../@babel/runtime/helpers/Objectvalues");
    var t, a, r = require("../../commons/config"),
        o = Object.values(r.PINYIN_SCHEME),
        u = /^(b|p|m|f|d|t|n|l|g|k|h|z|c|s|j|gw|kw|ng|w)?(aa|aai|aau|aam|aan|aang|aap|aat|aak|ai|au|am|an|ang|ap|at|ak|e|ei|eu|em|eng|ep|ek|i|iu|im|in|ing|ip|it|ik|o|oi|ou|on|ong|ot|ok|oe|oeng|oek|eoi|eon|eot|u|ui|un|ung|ut|uk|yu|yun|yut|m|ng)(\d)$/i,
        l = (i(t = {}, r.PINYIN_SCHEME.GUANGPIN, {
            gw: "gu",
            kw: "ku",
            j: "y"
        }), i(t, r.PINYIN_SCHEME.JIAOYUAN, {
            z: "dz",
            c: "ts"
        }), i(t, r.PINYIN_SCHEME.YELU, {
            z: "j",
            c: "ch",
            j: "y"
        }), i(t, r.PINYIN_SCHEME.LXX, {
            z: "j",
            c: "ch",
            j: "y"
        }), t),
        g = (i(a = {}, r.PINYIN_SCHEME.GUANGPIN, {
            aa: "a",
            aai: "ai",
            aau: "ao",
            aam: "am",
            aan: "an",
            aang: "ang",
            aap: "ab",
            aat: "ad",
            aak: "ag",
            ai: "ei",
            au: "eo",
            am: "em",
            an: "en",
            ang: "eng",
            ap: "eb",
            at: "ed",
            ak: "eg",
            e: "é",
            ei: "éi",
            eu: "éo",
            em: "ém",
            en: "én",
            eng: "éng",
            ep: "éb",
            ek: "ég",
            ip: "ib",
            it: "id",
            ik: "ig",
            ok: "og",
            ut: "ud",
            uk: "ug",
            oe: "ê",
            oeng: "êng",
            oek: "êg",
            oet: "-",
            eoi: "êu",
            eon: "ên",
            eot: "êd",
            yu: "ü",
            yun: "ün",
            yut: "üd"
        }), i(a, r.PINYIN_SCHEME.JIAOYUAN, {
            oek: "oek",
            oet: "-",
            eoi: "oey",
            eon: "oen",
            yu: "y",
            yun: "yn",
            yut: "yt"
        }), i(a, r.PINYIN_SCHEME.YELU, {
            aa: "a",
            oe: "eu",
            oeng: "eung",
            oek: "euk",
            oet: "-",
            eoi: "eui",
            un: "eun",
            eot: "eut"
        }), i(a, r.PINYIN_SCHEME.LXX, {
            aa: "a",
            o: "oh",
            ou: "o",
            u: "oo",
            ui: "ooi",
            un: "oon",
            ut: "oot",
            oe: "euh",
            oeng: "eung",
            oek: "euk",
            oet: "eut",
            eoi: "ui",
            eon: "un",
            eot: "ut",
            yu: "ue",
            yun: "uen",
            yut: "uet"
        }), a);

    function c() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return o.includes(n) ? n : r.PINYIN_SCHEME.JYUTPING
    }

    function s() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            i = String(n || "").trim().toLowerCase();
        if (!i) return null;
        var t = i.match(u);
        if (!t) return null;
        var a = e(t, 4),
            r = a[1],
            o = void 0 === r ? "" : r,
            l = a[2],
            g = void 0 === l ? "" : l,
            c = a[3],
            s = void 0 === c ? "" : c;
        return {
            initial: o,
            final: g,
            tone: s
        }
    }

    function v() {
        var n, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (!i) return null;
        var a = c(t);
        if (a === r.PINYIN_SCHEME.JYUTPING) return {
            initial: i.initial || "",
            final: i.final || "",
            tone: i.tone || ""
        };
        var o = (null === (n = l[a]) || void 0 === n ? void 0 : n[i.initial]) || i.initial || "",
            u = (null === (e = g[a]) || void 0 === e ? void 0 : e[i.final]) || i.final || "";
        if (a === r.PINYIN_SCHEME.GUANGPIN) {
            if (u.startsWith("ü") || u.startsWith("i")) switch (o) {
                case "z":
                    o = "j";
                    break;
                case "c":
                    o = "q";
                    break;
                case "s":
                    o = "x"
            }["j", "q", "x", "y"].includes(o) && (u = u.replace("ü", "u"))
        }
        return {
            initial: o,
            final: u,
            tone: i.tone || ""
        }
    }

    function d() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return n ? "".concat(n.initial || "").concat(n.final || "").concat(n.tone || "") : ""
    }

    function y() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return String(n || "").trim().split(/\s*\/\s*/).map((function(n) {
            return String(n || "").trim()
        })).filter(Boolean)
    }

    function f() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return String(n || "").trim().split(/\s+/).map((function(n) {
            return String(n || "").trim()
        })).filter(Boolean)
    }

    function p() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = c(e);
        return y(n).map((function(n) {
            return f(n).map((function(n) {
                var e = s(n);
                return e ? d(v(e, i)) : n
            })).join(" ")
        })).join(" / ")
    }

    function m() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            t = s(e),
            a = t ? v(t, i) : null,
            r = y(e).map((function(n, e) {
                var t = f(n);
                if (1 !== t.length) return null;
                var a = t[0],
                    r = s(a);
                if (!r) return null;
                var o = v(r, i);
                return {
                    key: "".concat(a, "_").concat(e),
                    rawPinyin: a,
                    displayPinyin: d(o),
                    pinyinParts: o
                }
            })).filter(Boolean);
        return {
            text: String(n || ""),
            rawPinyin: String(e || "").trim(),
            displayPinyin: a ? d(a) : p(e, i),
            pinyinParts: a,
            alternativeTokens: r.length > 1 ? r : []
        }
    }