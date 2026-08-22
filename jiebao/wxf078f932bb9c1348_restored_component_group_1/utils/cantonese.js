Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.flattenCantoneseSnapshot = function(t) {
        if (!Array.isArray(t)) return "";
        return t.map((function(t) {
            return (t && Array.isArray(t.tokens) ? t.tokens : []).map((function(t) {
                return t ? "word" === t.type ? "string" == typeof t.text && t.text ? t.jyutping ? "".concat(t.text, "(").concat(t.jyutping, ")") : t.text : "" : "punctuation" === t.type && t.punctuation ? t.punctuation : "string" == typeof t.text && t.text ? "".concat(t.text, "(").concat(t.jyutping, ")") : t.punctuation || "" : ""
            })).join("")
        })).filter(Boolean).join("\n")
    }, exports.parseCantoneseSnapshot = function(n) {
        if (!n) return [];
        if (Array.isArray(n)) return n;
        if ("string" != typeof n) return [];
        var r = n.trim();
        if (!r) return [];
        var u = function(t) {
            var n = t;
            n = n.replace(/([\u2E80-\u9FFF\u3007\u3021-\u3029])([，。！？、；：「」『』（）—…《》〈〉·])\(([a-zA-Z]+\d?)\)/g, "$1($3)$2");
            return n = n.replace(/([，。！？、；：「」『』（）—…《》〈〉·])\(([a-zA-Z]+\d?)\)/g, "$1")
        }(r);
        if (u.startsWith("[")) try {
            var i = JSON.parse(u);
            if (Array.isArray(i)) return i
        } catch (t) {}
        return u.split(/\n+/).map((function(t) {
            return t.trim()
        })).filter(Boolean).map((function(n, r) {
            var u = [],
                i = 0;
            (n.replace(t, (function(t, a, o, p) {
                var s = "number" == typeof p ? p : n.indexOf(t, i);
                s > i && e(n.slice(i, s), u, r);
                return u.push({
                    type: "word",
                    text: a,
                    jyutping: o,
                    punctuation: "",
                    sentenceIndex: r
                }), i = s + t.length, t
            })), i < n.length) && e(n.slice(i), u, r);
            return {
                index: r,
                rawText: n,
                tokens: u.filter((function(t) {
                    return t && t.text
                }))
            }
        }))
    }, exports.parseCantoneseTextSimple = function(t) {
        return t.split("\n").filter((function(t) {
            return "" !== t.trim()
        })).map((function(t) {
            for (var n, e = [], r = /([\u4e00-\u9fa5])([，。、！？])?\(([^)]+)\)|([\u4e00-\u9fa5])([，。、！？])?/g; null !== (n = r.exec(t));)
                if (n[1]) {
                    var u = {
                        type: "word",
                        value: n[1],
                        pinyin: n[3]
                    };
                    n[2] && (u.punctuation = n[2]), e.push(u)
                } else if (n[4]) {
                var i = {
                    type: "word",
                    value: n[4]
                };
                n[5] && (i.punctuation = n[5]), e.push(i)
            }
            return e
        }))
    }, exports.stripPinyin = function(t) {
        if (!t) return "";
        if ("string" == typeof t) return t.replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
        if (!Array.isArray(t)) return "";
        return t.map((function(t) {
            return (t && Array.isArray(t.tokens) ? t.tokens : []).map((function(t) {
                return "string" == typeof t.text ? t.text : ""
            })).join("")
        })).filter(Boolean).join("\n")
    };
    var t = /([\u2E80-\u9FFF\u3007\u3021-\u3029]+)\(([a-zA-Z]+\d?)\)/g,
        n = new Set("，。！？、；：「」『』（）—…《》〈〉·".split(""));

    function e(t, e, r) {
        if (t)
            for (var u = t.split(""), i = 0; i < u.length; i += 1) {
                var a = u[i];
                if (a && a.trim())
                    if (n.has(a)) e.push({
                        type: "punctuation",
                        text: "",
                        jyutping: "",
                        punctuation: a,
                        sentenceIndex: r
                    });
                    else {
                        for (var o = "", p = i + 1; p < u.length;) {
                            var s = u[p];
                            if (s && s.trim()) {
                                n.has(s) && (o = s, i = p);
                                break
                            }
                            p += 1
                        }
                        e.push({
                            type: "word",
                            text: a,
                            jyutping: "",
                            punctuation: o,
                            sentenceIndex: r
                        })
                    }
            }
    }