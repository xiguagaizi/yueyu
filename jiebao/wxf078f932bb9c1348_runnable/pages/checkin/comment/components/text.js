    "use strict";
    var t = require("../../../../commons/utils"),
        a = require("../../../../commons/config"),
        i = "".concat(a.CLOUD_STORAGE_HTTP_BASE_URL, "/audios/words-hk/all-pronunciations");
    Component({
        properties: {
            text: {
                type: String
            }
        },
        data: {},
        lifetimes: {
            attached: function() {
                var t = String(this.data.text || "").split(/(.{1}\(\w+\d{1}\))/g).map((function(t) {
                    return {
                        v: t,
                        isPin: /^.{1}\(\w+\d{1}\)$/.test(t)
                    }
                }));
                this.setData({
                    words: t
                })
            }
        },
        methods: {
            play: function(a) {
                var n = a.currentTarget.dataset.pin,
                    r = String(n || "").match(/\(([^()]+)\)$/);
                if (r && r[1]) {
                    var e = "".concat(i, "/").concat(r[1], ".mp3");
                    (0, t.playAudio)(e)
                }
            }
        }
    });
