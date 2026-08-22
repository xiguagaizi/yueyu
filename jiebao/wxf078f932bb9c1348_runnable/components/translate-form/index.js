var t = require("../../@babel/runtime/helpers/defineProperty");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var a = require("../../commons/config");
    Component({
        properties: {
            translateNav: {
                type: Object
            },
            dictNav: {
                type: Object
            }
        },
        data: {
            activeTab: "TRANSLATE",
            translateText: "",
            pinyinText: "",
            TRANSLATE: "TRANSLATE",
            PINYIN: "PINYIN"
        },
        lifetimes: {
            attached: function() {
                try {
                    var t = wx.getStorageSync(a.CURRENT_FORM_TAB);
                    [this.data.PINYIN, this.data.TRANSLATE].includes(t) && this.setData({
                        activeTab: t
                    })
                } catch (t) {}
            }
        },
        methods: {
            switchTab: function(t) {
                var e = t.currentTarget.dataset.tab;
                this.setData({
                    activeTab: e
                }), wx.setStorage({
                    key: a.CURRENT_FORM_TAB,
                    data: e
                })
            },
            onInput: function(a) {
                var e = this.data,
                    n = e.activeTab === e.TRANSLATE ? "translateText" : "pinyinText";
                this.setData(t({}, n, a.detail.value))
            },
            nav: function() {
                var t = this.data,
                    a = t.activeTab,
                    e = t.TRANSLATE,
                    n = t.translateNav,
                    i = t.dictNav;
                a === e ? this.navToAndTranslate() : this.navToAndGetJyutping(), this.triggerEvent("nav", a === e ? n : i)
            },
            navToAndTranslate: function() {
                var t = this.data.translateText;
                wx.navigateTo({
                    url: "/pages/tools/translate/index",
                    success: function(a) {
                        a.eventChannel.emit("acceptDataFromOpenerPage", t)
                    }
                })
            },
            navToAndGetJyutping: function() {
                var t = this.data.pinyinText;
                wx.navigateTo({
                    url: "/pages/tools/jyutping/index",
                    success: function(a) {
                        a.eventChannel.emit("acceptDataFromOpenerPage", t.trim())
                    }
                })
            }
        }
    });