Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = exports.audioPlaybackMixin = void 0;
    var a = require("../@babel/runtime/helpers/objectSpread2"),
        t = require("../@babel/runtime/helpers/typeof");

    function e(a) {
        var t = Math.max(0, Math.floor(Number(a) || 0)),
            e = Math.floor(t / 1e3),
            i = Math.floor(e / 3600),
            r = Math.floor(e % 3600 / 60),
            n = e % 60,
            o = function(a) {
                return String(a).padStart(2, "0")
            };
        return i > 0 ? "".concat(o(i), ":").concat(o(r), ":").concat(o(n)) : "".concat(o(r), ":").concat(o(n))
    }
    var i = {
            data: {
                isPlaying: !1,
                currentTimeMs: 0,
                audioDurationMs: 0,
                currentTimeLabel: "00:00",
                durationLabel: "00:00",
                progressValue: 0,
                isProgressDragging: !1
            },
            methods: {
                buildAudioPlaybackState: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = Math.max(0, Number(a) || 0);
                    return {
                        isPlaying: !1,
                        currentTimeMs: 0,
                        audioDurationMs: t,
                        currentTimeLabel: "00:00",
                        durationLabel: e(t),
                        progressValue: 0,
                        isProgressDragging: !1
                    }
                },
                handleAudioError: function(a) {
                    var t;
                    console.error("audio playback error", a), this.playbackEnded = !1, this.setData({
                        isPlaying: !1
                    }), null === (t = this.stopParagraphPlayback) || void 0 === t || t.call(this, !1), wx.showToast({
                        title: "音频播放失败",
                        icon: "none"
                    })
                },
                handleAudioEnded: function() {
                    var a, t = Math.max(0, Number(this.data.audioDurationMs) || 0);
                    this.playbackEnded = !0, this.setData({
                        isPlaying: !1,
                        currentTimeMs: t,
                        currentTimeLabel: e(t),
                        progressValue: t > 0 ? 100 : 0
                    }), null === (a = this.stopParagraphPlayback) || void 0 === a || a.call(this, !1)
                },
                getAudioManager: function() {
                    return this.ensureAudioManager(), this.audioManager || null
                },
                updatePlaybackProgress: function(a, t) {
                    if (!this.data.isProgressDragging) {
                        var i = Math.max(0, Number.isFinite(Number(t)) && Number(t) > 0 ? Number(t) : Number(this.data.audioDurationMs) || 0),
                            r = Math.max(0, Math.min(Number(a) || 0, i || Number(a) || 0));
                        (i <= 0 || r < i) && (this.playbackEnded = !1);
                        var n = i > 0 ? Math.max(0, Math.min(100, r / i * 100)) : 0;
                        this.setData({
                            currentTimeMs: r,
                            audioDurationMs: i,
                            currentTimeLabel: e(r),
                            durationLabel: e(i),
                            progressValue: n
                        })
                    }
                },
                getProgressValueFromEvent: function(a) {
                    var e = null == a ? void 0 : a.detail,
                        i = "object" === t(e) && null !== e && "value" in e ? e.value : e,
                        r = Number(i);
                    return Number.isFinite(r) ? Math.max(0, Math.min(100, r)) : null
                },
                updateProgressPreview: function(a) {
                    var t = Math.max(0, Math.min(100, Number(a) || 0)),
                        i = Math.max(0, Number(this.data.audioDurationMs) || 0),
                        r = i > 0 ? Math.round(t / 100 * i) : 0;
                    return (i <= 0 || r < i) && (this.playbackEnded = !1), this.setData({
                        progressValue: t,
                        currentTimeMs: r,
                        currentTimeLabel: e(r),
                        durationLabel: e(i)
                    }), r
                },
                handleProgressDragStart: function() {
                    this.data.audioSrc && this.data.audioDurationMs && this.setData({
                        isProgressDragging: !0
                    })
                },
                handleProgressDrag: function(a) {
                    if (this.data.audioSrc && this.data.audioDurationMs) {
                        var t = this.getProgressValueFromEvent(a);
                        null !== t && this.updateProgressPreview(t)
                    }
                },
                handleProgressDragEnd: function() {
                    this.data.isProgressDragging && this.setData({
                        isProgressDragging: !1
                    })
                },
                handleProgressChange: function(a) {
                    if (this.data.audioSrc) {
                        var t = this.getProgressValueFromEvent(a);
                        if (null !== t) {
                            var e = this.updateProgressPreview(t);
                            this.setData({
                                isProgressDragging: !1
                            }), this.ensureAudioManager();
                            var i = this.audioManager;
                            i && "function" == typeof i.seek && i.seek(e / 1e3)
                        }
                    }
                },
                handlePlayToggle: function() {
                    if (this.data.audioSrc) {
                        this.ensureAudioManager();
                        var a = this.audioManager;
                        if (a) {
                            var t, e, i, r, n;
                            if (this.currentAudioSrc !== this.data.audioSrc) this.setupBackgroundAudio(this.data.audioSrc, {
                                title: this.data.title,
                                subtitle: this.data.subtitle,
                                coverUrl: this.data.coverUrl,
                                singer: (null === (t = this.data.courseInfo) || void 0 === t ? void 0 : t.title) || "粤语派"
                            });
                            this.data.isPlaying ? a.pause() : this.playbackEnded ? this.restartBackgroundAudio() : (e = this.data.currentTimeMs, i = this.data.audioDurationMs, r = Number(e) || 0, n = Number(i) || 0, Number.isFinite(n) && !(n <= 0) && r >= Math.max(0, n - 400) ? this.restartBackgroundAudio() : a.play())
                        }
                    } else wx.showToast({
                        title: "暂无音频",
                        icon: "none"
                    })
                },
                restartBackgroundAudio: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.ensureAudioManager();
                    var i = this.audioManager;
                    if (i && this.data.audioSrc) {
                        var r = Math.max(0, Number(t) || 0),
                            n = r / 1e3;
                        this.shouldAutoPause = !1, this.playbackEnded = !1, this.setData(a(a({}, this.buildAudioPlaybackState(this.data.audioDurationMs)), {}, {
                            currentTimeMs: r,
                            currentTimeLabel: e(r),
                            progressValue: this.data.audioDurationMs > 0 ? Math.max(0, Math.min(100, r / this.data.audioDurationMs * 100)) : 0
                        }));
                        var o = this.data.audioSrc;
                        this.currentAudioSrc === o && i.src === o || (i.src = o, this.currentAudioSrc = o), this.pendingAudioStartTime = n > 0 ? n : null, n > 0 && "function" == typeof i.seek && i.seek(n), "function" == typeof i.play && i.play()
                    }
                },
                setupBackgroundAudio: function(a) {
                    this.ensureAudioManager();
                    var t = this.audioManager;
                    if (t) {
                        var e, i;
                        if (!a) return this.playbackEnded = !1, this.currentAudioSrc = "", null === (e = t.stop) || void 0 === e || e.call(t), void this.setData({
                            isPlaying: !1,
                            currentTimeMs: 0,
                            currentTimeLabel: "00:00",
                            progressValue: 0
                        });
                        if (this.currentAudioSrc !== a) this.playbackEnded = !1, this.currentAudioSrc = a, this.shouldAutoPause = !1, this.pendingAudioStartTime = null, null === (i = t.pause) || void 0 === i || i.call(t), t.src = a
                    }
                },
                ensureAudioManager: function() {
                    var a, t = this;
                    if (this.audioManager || "function" != typeof wx.createInnerAudioContext) !this.videoContext && this.audioManager && (this.videoContext = this.audioManager);
                    else {
                        var e = "function" == typeof getApp ? getApp() : null,
                            i = wx.createInnerAudioContext({
                                useWebAudioImplement: !(null == e || !e.isOHOS)
                            });
                        this.audioManager = i, this.videoContext = i, this.audioManagerDestroyed = !1, null === (a = i.onCanplay) || void 0 === a || a.call(i, (function() {
                            if (!t.audioManagerDestroyed) {
                                var a = Number(t.pendingAudioStartTime);
                                a > 0 && "function" == typeof i.seek && (t.pendingAudioStartTime = null, i.seek(a))
                            }
                        })), i.onPlay((function() {
                            t.audioManagerDestroyed || (t.playbackEnded = !1, t.setData({
                                isPlaying: !0
                            }))
                        })), i.onPause((function() {
                            t.audioManagerDestroyed || t.setData({
                                isPlaying: !1
                            })
                        })), i.onStop((function() {
                            var a;
                            if (!t.audioManagerDestroyed) {
                                var e;
                                if (t.playbackEnded) return t.setData({
                                    isPlaying: !1
                                }), void(null === (e = t.stopParagraphPlayback) || void 0 === e || e.call(t, !1));
                                t.setData({
                                    isPlaying: !1,
                                    currentTimeMs: 0,
                                    currentTimeLabel: "00:00",
                                    progressValue: 0
                                }), null === (a = t.stopParagraphPlayback) || void 0 === a || a.call(t, !1)
                            }
                        })), i.onEnded((function() {
                            t.audioManagerDestroyed || t.handleAudioEnded()
                        })), i.onTimeUpdate((function() {
                            if (!t.audioManagerDestroyed) {
                                var a = Number(i.currentTime),
                                    e = Number(i.duration),
                                    r = Number.isFinite(e) && e > 0 ? 1e3 * e : t.data.audioDurationMs;
                                if (Number.isFinite(a)) {
                                    var n, o = 1e3 * a;
                                    t.updatePlaybackProgress(o, r), null === (n = t.handleBindTimeUpdate) || void 0 === n || n.call(t, o)
                                }
                            }
                        })), i.onError((function(a) {
                            t.audioManagerDestroyed || t.handleAudioError(a)
                        }))
                    }
                },
                ensureVideoContext: function() {
                    this.ensureAudioManager()
                },
                destroyAudioManager: function() {
                    var a = this.audioManager;
                    if (a) {
                        this.audioManagerDestroyed = !0;
                        try {
                            var t;
                            null === (t = a.stop) || void 0 === t || t.call(a)
                        } catch (a) {}
                        try {
                            var e;
                            null === (e = a.destroy) || void 0 === e || e.call(a)
                        } catch (a) {}
                        this.audioManager = null, this.videoContext = null, this.currentAudioSrc = "", this.playbackEnded = !1, this.shouldAutoPause = !1, this.pendingAudioStartTime = null
                    }
                }
            }
        },
        r = i;
    exports.audioPlaybackMixin = r;
    var n = Behavior(i);
    exports.default = n;