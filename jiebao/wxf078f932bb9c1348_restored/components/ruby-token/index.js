var t = require("../../@babel/runtime/helpers/objectSpread2");
    require("../../@babel/runtime/helpers/Arrayincludes");

    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = String(t || "");
        return /[A-Za-z]/.test(e) ? e.replace(/([A-Za-z])(?=[A-Za-z])/g, "$1".concat("⁠")) : e
    }

    function n() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return n ? t(t({}, n), {}, {
            initial: e(n.initial || ""),
            final: e(n.final || "")
        }) : null
    }

    function i() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return Array.isArray(i) ? i.map((function(i) {
            return t(t({}, i), {}, {
                displayPinyin: e((null == i ? void 0 : i.displayPinyin) || ""),
                pinyinParts: n(null == i ? void 0 : i.pinyinParts)
            })
        })) : []
    }
    Component({
        observers: {
            "pinyinFontSize,toneFontSize,textFontSize,toneStyle,pinyinStyle,displayStyle,displayPinyin,pinyinParts,alternativeTokens,pinyinColor,textColor,pinyinFontWeight,textFontWeight,pinyinFontFamily,textFontFamily": function() {
                this.syncInlineStyles()
            }
        },
        options: {
            styleIsolation: "apply-shared"
        },
        properties: {
            text: {
                type: String,
                value: ""
            },
            displayPinyin: {
                type: String,
                value: ""
            },
            pinyinParts: {
                type: Object,
                value: null
            },
            alternativeTokens: {
                type: Array,
                value: []
            },
            variant: {
                type: String,
                value: "default"
            },
            blur: {
                type: Boolean,
                value: !1
            },
            active: {
                type: Boolean,
                value: !1
            },
            showText: {
                type: Boolean,
                value: !0
            },
            underlineText: {
                type: Boolean,
                value: !1
            },
            displayStyle: {
                type: String,
                value: "annotated"
            },
            toneStyle: {
                type: String,
                value: "annotated"
            },
            pinyinStyle: {
                type: String,
                value: "split"
            },
            pinyinFontSize: {
                type: Number,
                value: 0
            },
            toneFontSize: {
                type: Number,
                value: 0
            },
            textFontSize: {
                type: Number,
                value: 0
            },
            pinyinColor: {
                type: String,
                value: ""
            },
            textColor: {
                type: String,
                value: ""
            },
            pinyinFontWeight: {
                type: String,
                value: ""
            },
            textFontWeight: {
                type: String,
                value: ""
            },
            pinyinFontFamily: {
                type: String,
                value: ""
            },
            textFontFamily: {
                type: String,
                value: ""
            }
        },
        data: {
            pinyinInlineStyle: "",
            toneInlineStyle: "",
            toneNumberInlineStyle: "",
            textInlineStyle: "",
            resolvedDisplayStyle: "annotated",
            resolvedToneStyle: "annotated",
            showToneConnector: !0,
            safeDisplayPinyin: "",
            safePinyinParts: null,
            safeAlternativeTokens: []
        },
        lifetimes: {
            attached: function() {
                this.syncInlineStyles()
            }
        },
        methods: {
            syncInlineStyles: function() {
                var t = Number(this.properties.pinyinFontSize || 0),
                    o = Number(this.properties.toneFontSize || 0),
                    a = Number(this.properties.textFontSize || 0),
                    l = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            i = String(t || "").trim();
                        return ["annotated", "split-flat", "basic"].includes(i) ? i : "basic" === e ? "basic" : "plain" === n ? "split-flat" : "annotated"
                    }(this.properties.displayStyle, this.properties.pinyinStyle, this.properties.toneStyle),
                    r = "annotated" === l ? "annotated" : "plain",
                    p = "annotated" === l,
                    s = [];
                t > 0 && (s.push("font-size:".concat(t, "rpx")), s.push("min-height:".concat(Math.max(Math.round(1.1 * t), t), "rpx"))), this.properties.pinyinColor && s.push("color:".concat(this.properties.pinyinColor)), this.properties.pinyinFontWeight && s.push("font-weight:".concat(this.properties.pinyinFontWeight)), this.properties.pinyinFontFamily && s.push("font-family:".concat(this.properties.pinyinFontFamily));
                var y = s.length ? "".concat(s.join(";"), ";") : "",
                    u = o > 0 ? o : t > 0 ? Math.max(18, t - 4) : 0,
                    h = t > 0 && "plain" !== r ? "min-height:".concat(Math.max(Math.round(1.1 * t), t), "rpx;") : "",
                    c = u > 0 ? "font-size:".concat(u, "rpx;") : "",
                    v = [];
                a > 0 && v.push("font-size:".concat(a, "rpx")), this.properties.textColor && v.push("color:".concat(this.properties.textColor)), this.properties.textFontWeight && v.push("font-weight:".concat(this.properties.textFontWeight)), this.properties.textFontFamily && v.push("font-family:".concat(this.properties.textFontFamily));
                var S = v.length ? "".concat(v.join(";"), ";") : "";
                this.setData({
                    pinyinInlineStyle: y,
                    toneInlineStyle: h,
                    toneNumberInlineStyle: c,
                    textInlineStyle: S,
                    resolvedDisplayStyle: l,
                    resolvedToneStyle: r,
                    showToneConnector: p,
                    safeDisplayPinyin: e(this.properties.displayPinyin),
                    safePinyinParts: n(this.properties.pinyinParts),
                    safeAlternativeTokens: i(this.properties.alternativeTokens)
                })
            },
            onPinyinTap: function() {
                this.triggerEvent("pinyintap")
            }
        }
    });