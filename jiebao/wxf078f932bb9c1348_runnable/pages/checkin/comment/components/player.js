    "use strict";
    var t = require("../../../../commons/utils");
    Component({
        properties: {
            backgroundColor: {
                type: String,
                value: "#fff"
            },
            sound: {
                type: String
            },
            duration: {
                type: Number
            }
        },
        data: {
            playing: !1
        },
        methods: {
            playAudio: function() {
                var a = this;
                if (this.data.playing) return t.playAudio.destroy(), void this.setData({
                    playing: !1
                });
                this.setData({
                    playing: !0
                }), (0, t.playAudio)(this.data.sound, (function() {
                    a.setData({
                        playing: !1
                    })
                }), (function() {
                    a.setData({
                        playing: !1
                    })
                }))
            }
        }
    });
