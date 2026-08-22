var t = require("../../commons/utils");
    Component({
        properties: {
            count: {
                type: Number,
                value: 0
            },
            date: {
                type: String
            },
            nav: {
                type: Object
            },
            name: {
                type: String
            },
            icon: {
                type: String
            },
            path: {
                type: String,
                value: "/pages/checkin/index/index"
            },
            sound: {
                type: String
            }
        },
        data: {
            playing: !1
        },
        pageLifetimes: {
            hide: function() {
                this.stop()
            }
        },
        methods: {
            stop: function() {
                t.playAudio.stop(), t.playAudio.destroy(), this.setData({
                    playing: !1
                })
            },
            play: function() {
                var a = this;
                a.data.sound && (a.data.playing ? a.stop() : ((0, t.playAudio)(a.data.sound, (function() {
                    a.setData({
                        playing: !1
                    })
                }), (function() {
                    a.setData({
                        playing: !1
                    })
                })), a.setData({
                    playing: !0
                }), this.triggerEvent("play")))
            },
            navToCheckin: function() {
                var t = this,
                    a = t.data.nav;
                wx.navigateTo({
                    url: a.path,
                    success: function() {
                        t.triggerEvent("nav", a)
                    }
                })
            }
        }
    });