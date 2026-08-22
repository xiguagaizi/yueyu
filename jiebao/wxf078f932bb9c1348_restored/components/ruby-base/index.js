var t = require("../../commons/utils"),
        e = require("../../commons/config");
    Component({
        properties: {
            pinyin: "",
            target: ""
        },
        observers: {
            "pinyin,target": function(i, n) {
                i !== e.PINYIN_SCHEME.JYUTPING && Object.keys(e.PINYIN_SCHEME).includes(n) && this.setData({
                    targetPinyin: (0, t.jyutpingToGuangping)(i, n)
                })
            }
        },
        data: {},
        methods: {}
    });