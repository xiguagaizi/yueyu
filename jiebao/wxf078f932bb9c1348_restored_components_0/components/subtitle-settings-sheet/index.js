var e = require("../../@babel/runtime/helpers/typeof");
    Component({
        options: {
            styleIsolation: "isolated"
        },
        properties: {
            show: {
                type: Boolean,
                value: !1
            },
            showPinyin: {
                type: Boolean,
                value: !0
            },
            enablePinyinOption: {
                type: Boolean,
                value: !0
            },
            enableWordTranslationOption: {
                type: Boolean,
                value: !0
            },
            showWordTranslation: {
                type: Boolean,
                value: !0
            },
            enableSentenceTranslationOption: {
                type: Boolean,
                value: !0
            },
            showSentenceTranslation: {
                type: Boolean,
                value: !0
            },
            enableDirectReadPoetryOption: {
                type: Boolean,
                value: !1
            },
            directReadPoetry: {
                type: Boolean,
                value: !1
            },
            singleLoopCount: {
                type: Number,
                value: 1
            },
            loopIntervalSeconds: {
                type: Number,
                value: .5
            },
            enableAutoScrollOption: {
                type: Boolean,
                value: !0
            },
            autoScroll: {
                type: Boolean,
                value: !0
            }
        },
        methods: {
            onClose: function() {
                this.triggerEvent("close")
            },
            onSettingChange: function(o) {
                var n, t = (null == o || null === (n = o.currentTarget) || void 0 === n ? void 0 : n.dataset) || {},
                    l = null == o ? void 0 : o.detail,
                    a = "object" === e(l) && null !== l && "value" in l ? l.value : l;
                this.triggerEvent("settingchange", {
                    setting: t.setting,
                    value: a
                })
            },
            onLoopCountChange: function(e) {
                this.triggerEvent("loopcountchange", {
                    value: null == e ? void 0 : e.detail
                })
            },
            onLoopIntervalChange: function(e) {
                this.triggerEvent("loopintervalchange", {
                    value: null == e ? void 0 : e.detail
                })
            }
        }
    });