var t = require("../../commons/utils"),
        e = getApp();
    Component({
        properties: {
            src: {
                type: String
            },
            duration: {
                type: Number,
                value: 0
            }
        },
        lifetimes: {
            attached: function() {
                var e = (0, t.isUseWebAudio)();
                this.useWebAudioImplement = e
            }
        },
        data: {
            playing: !1,
            percentage: 0
        },
        methods: {
            play: function() {
                var t = this,
                    i = this.data,
                    a = i.src,
                    o = i.playing;
                if (this.triggerEvent(o ? "onStop" : "onPlay"), o) this.stop();
                else if (a) {
                    if (e.audio) try {
                        e.audio.stop(), e.audio.destroy()
                    } catch (t) {}
                    var n = wx.createInnerAudioContext({
                        useWebAudioImplement: (null == e ? void 0 : e.isOHOS) || !!this.useWebAudioImplement
                    });
                    e.audio = n, n.src = this.data.src, n.onCanplay((function() {
                        n.play()
                    })), n.onTimeUpdate((function() {
                        var e = Math.ceil(n.currentTime / t.data.duration * 100);
                        console.log(n.currentTime), t.setData({
                            percentage: e
                        })
                    })), n.onEnded((function() {
                        t.setData({
                            playing: !1,
                            percentage: 100
                        })
                    })), this.setData({
                        playing: !0
                    })
                } else wx.showToast({
                    title: "请先录音",
                    icon: "error"
                })
            },
            stop: function() {
                console.log("au", e.audio), e.audio && (e.audio.stop(), e.audio.destroy(), this.setData({
                    percentage: 0,
                    playing: !1
                }))
            }
        }
    });