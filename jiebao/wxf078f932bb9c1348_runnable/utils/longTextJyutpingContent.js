Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.contentV2ToSentences = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = v(r, null);
        return t.examples.map((function(r) {
            return r.tokens.map((function(r) {
                return "word" === r.type ? {
                    word: r.hanzi,
                    pin: l([r.roman].concat(n(Array.isArray(r.candidates) ? r.candidates : [])))
                } : {
                    word: r.text,
                    pin: [r.text]
                }
            }))
        }))
    }, exports.normalizeLongTextContent = v, exports.sentencesToContentV2 = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return {
            version: 2,
            title: String(r || ""),
            examples: (Array.isArray(n) ? n : []).map((function(n) {
                return {
                    title: "",
                    tokens: (Array.isArray(n) ? n : []).map(u).filter(Boolean)
                }
            })).filter((function(n) {
                return n.tokens.length
            }))
        }
    };
    var n = require("../@babel/runtime/helpers/toConsumableArray"),
        r = require("../@babel/runtime/helpers/typeof");
    require("../@babel/runtime/helpers/Arrayincludes");
    var t = /^[a-z]+\d$/i;

    function e() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return String(null == n ? "" : n).trim()
    }

    function i(n) {
        if ("string" != typeof n) return n;
        var r = n.trim();
        if (!r) return null;
        try {
            return JSON.parse(r)
        } catch (n) {
            return null
        }
    }

    function a() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t.test(e(n))
    }

    function l() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = [];
        return (Array.isArray(n) ? n : [n]).forEach((function(n) {
            var t = e(n);
            t && !r.includes(t) && r.push(t)
        })), r
    }

    function o() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            r = String(null == n ? "" : n);
        return {
            type: "punct",
            text: r,
            bind: "([{（【《「『“‘〈".includes(r) ? "next" : "prev"
        }
    }

    function u() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = String(n.word || n.hanzi || ""),
            t = l(n.pin || n.candidates || n.roman),
            e = t[0] || "";
        return r ? a(e) ? {
            type: "word",
            roman: e,
            hanzi: r,
            candidates: t
        } : o(r) : null
    }

    function s() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = Array.isArray(null == n ? void 0 : n.tokens) ? n.tokens : [];
        return {
            title: String((null == n ? void 0 : n.title) || r || ""),
            tokens: t.map(c).filter(Boolean)
        }
    }

    function c() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!t || "object" !== r(t)) return null;
        if ("punct" === t.type) {
            var i = String(null == t.text ? "" : t.text);
            return i ? {
                type: "punct",
                text: i,
                bind: "next" === t.bind ? "next" : "prev"
            } : null
        }
        var u = String(null == t.hanzi ? "" : t.hanzi),
            s = e(t.roman);
        if (!u) return null;
        if (!a(s)) return o(u);
        var c = l([s].concat(n(Array.isArray(t.candidates) ? t.candidates : [])));
        return {
            type: "word",
            roman: s,
            hanzi: u,
            candidates: c
        }
    }

    function d() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = Array.isArray(n) ? n : [],
            t = r.length > 0 ? String(null == r[0] ? "" : r[0]) : "",
            i = r.length > 1 ? e(r[1]) : "";
        return t ? a(i) ? {
            type: "word",
            roman: i,
            hanzi: t,
            candidates: [i]
        } : o(t) : null
    }

    function p(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = i(n);
        return Array.isArray(t) ? {
            version: 2,
            title: String(r || ""),
            examples: t.map((function(n) {
                return {
                    title: "",
                    tokens: (Array.isArray(n) ? n : []).map(d).filter(Boolean)
                }
            })).filter((function(n) {
                return n.tokens.length
            }))
        } : {
            version: 2,
            title: String(r || ""),
            examples: []
        }
    }

    function v(n, t) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            a = i(n);
        if (a && "object" === r(a)) {
            if (Array.isArray(a.examples)) {
                var l = {
                    version: 2,
                    title: String(a.title || e || ""),
                    examples: a.examples.map((function(n) {
                        return s(n)
                    })).filter((function(n) {
                        return n.tokens.length
                    }))
                };
                return l.examples.length ? l : p(t, e)
            }
            if (Array.isArray(a.tokens)) {
                var o = {
                    version: 2,
                    title: String(a.title || e || ""),
                    examples: [s(a, e)].filter((function(n) {
                        return n.tokens.length
                    }))
                };
                return o.examples.length ? o : p(t, e)
            }
            if (Array.isArray(a)) return p(a, e)
        }
        return p(t, e)
    }