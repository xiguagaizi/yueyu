var i = require("../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../@babel/runtime/helpers/slicedToArray"),
        r = /^(b|p|m|f|d|t|n|l|g|k|h|z|c|s|j|gw|kw|ng|w)?(aa|aai|aau|aam|aan|aang|aap|aat|aak|ai|au|am|an|ang|ap|at|ak|e|ei|eu|em|eng|ep|ek|i|iu|im|in|ing|ip|it|ik|o|oi|ou|on|ong|ot|ok|oe|oeng|oek|eoi|eon|eot|u|ui|un|ung|ut|uk|yu|yun|yut|m|ng)(\d)$/i;

    function a() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = i && "string" == typeof i.pinyin && i.pinyin.trim();
        if (n) return i.pinyin.trim();
        var r = i && Array.isArray(i.pinyinArr) && i.pinyinArr[0];
        return r ? i.pinyinArr[0] : ""
    }

    function e() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = "string" == typeof i ? i.trim() : "";
        if (!a) return null;
        var e = a.match(r);
        if (!e) return null;
        var t = n(e, 4),
            o = t[1],
            u = void 0 === o ? "" : o,
            s = t[2],
            l = void 0 === s ? "" : s,
            p = t[3],
            d = void 0 === p ? "" : p;
        return {
            initial: u,
            final: l,
            tone: d
        }
    }
    Component({
        properties: {
            item: {
                type: Object
            },
            showPinyin: {
                type: Boolean,
                value: !0
            },
            showWordTranslation: {
                type: Boolean,
                value: !0
            }
        },
        data: {
            displayWords: [],
            annotationText: "",
            showWordDivider: !1
        },
        observers: {
            item: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = Array.isArray(n.words) ? n.words : [],
                    t = r.map((function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return i(i({}, n), {}, {
                            pinyinParts: e(a(n))
                        })
                    })),
                    o = t[0] || {},
                    u = o.translation || "",
                    s = n.translation || n.text || u || "",
                    l = t.length > 1 || !!u;
                this.setData({
                    displayWords: t,
                    annotationText: s,
                    showWordDivider: l
                })
            }
        }
    });