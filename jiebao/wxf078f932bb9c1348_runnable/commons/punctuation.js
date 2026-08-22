Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.normalizeWordsWithPunctuation = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!Array.isArray(n)) return [];
        return n.map((function(n) {
            var e = n || {},
                i = "string" == typeof e.punctuation ? e.punctuation : "",
                u = "string" == typeof e.leadingPunctuation && e.leadingPunctuation ? e.leadingPunctuation : "string" == typeof e.punctuationBefore && e.punctuationBefore ? e.punctuationBefore : "string" == typeof e.beforePunctuation ? e.beforePunctuation : "",
                a = "string" == typeof e.trailingPunctuation && e.trailingPunctuation ? e.trailingPunctuation : "string" == typeof e.punctuationAfter && e.punctuationAfter ? e.punctuationAfter : "string" == typeof e.afterPunctuation ? e.afterPunctuation : "",
                o = e.punctuationPosition,
                c = u,
                f = a;
            if (c || f || ("before" === o ? c = i : "after" === o && (f = i)), !c || !f) {
                var l = r(i);
                c || (c = l.leading), f || (f = l.trailing)
            }
            return t(t({}, e), {}, {
                punctuation: i,
                leadingPunctuation: c,
                trailingPunctuation: f
            })
        }))
    }, exports.splitPunctuation = r;
    var t = require("../@babel/runtime/helpers/objectSpread2"),
        n = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
        e = new Set(["“", "‘", "『", "「", "﹁", "﹃", "《", "〈", "（", "〔", "【", "(", "[", "{", "<"]),
        i = new Set(["。", "，", "！", "？", "：", "；", "”", "’", "』", "」", "﹂", "﹀", "》", "〉", "）", "〕", "】", ")", "]", "}", "、", "·", "—", "-", "…", "～", "!", "?", ":", ";", ".", ","]);

    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!t) return {
            leading: "",
            trailing: ""
        };
        var r, u = "",
            a = "",
            o = n(t);
        try {
            for (o.s(); !(r = o.n()).done;) {
                var c = r.value;
                e.has(c) ? u += c : (i.has(c), a += c)
            }
        } catch (t) {
            o.e(t)
        } finally {
            o.f()
        }
        return {
            leading: u,
            trailing: a
        }
    }