var t = {
        "": {
            pinyinFontSize: 25,
            toneFontSize: 24,
            textFontSize: 40
        },
        subtitle: {
            pinyinFontSize: 25,
            toneFontSize: 24,
            textFontSize: 40
        },
        "subtitle-compact": {
            pinyinFontSize: 22,
            toneFontSize: 20,
            textFontSize: 36
        },
        "hero-title": {
            pinyinFontSize: 23,
            toneFontSize: 21,
            textFontSize: 46
        },
        "hero-meta": {
            pinyinFontSize: 20,
            toneFontSize: 18,
            textFontSize: 28
        }
    };
    Component({
        options: {
            styleIsolation: "apply-shared"
        },
        properties: {
            item: {
                type: Object,
                value: null
            },
            variant: {
                type: String,
                value: ""
            },
            showPinyin: {
                type: Boolean,
                value: !0
            },
            showWordTranslation: {
                type: Boolean,
                value: !0
            },
            underlineWords: {
                type: Boolean,
                value: !1
            },
            displayStyle: {
                type: String,
                value: "annotated"
            }
        },
        data: {
            pinyinFontSize: 25,
            toneFontSize: 24,
            textFontSize: 40
        },
        observers: {
            variant: function(t) {
                this.syncVariantStyle(t)
            }
        },
        lifetimes: {
            attached: function() {
                this.syncVariantStyle(this.properties.variant)
            }
        },
        methods: {
            syncVariantStyle: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = t[String(e || "").trim()] || t[""];
                this.setData({
                    pinyinFontSize: n.pinyinFontSize,
                    toneFontSize: n.toneFontSize,
                    textFontSize: n.textFontSize
                })
            }
        }
    });