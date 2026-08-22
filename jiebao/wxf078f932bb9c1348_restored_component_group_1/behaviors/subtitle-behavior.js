Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.subtitleBehaviorMixin = exports.default = void 0;
    var a = require("../@babel/runtime/helpers/slicedToArray"),
        t = require("../@babel/runtime/helpers/objectSpread2"),
        e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        r = require("../@babel/runtime/helpers/typeof"),
        i = ["renderArticle"];

    function l(a) {
        if (!a || "object" !== r(a)) return "";
        var t = Math.max(1, Math.floor(Number(a.totalLoops) || 0)),
            e = Math.max(0, Math.floor(Number(a.loopsRemaining) || 0)),
            i = Math.min(t, Math.max(1, t - e + 1));
        return "单句循环 ".concat(i, "/").concat(t)
    }
    var o = {
            data: {
                currentRow: -1,
                paragraphPlayback: null,
                paragraphPlaybackLabel: "",
                scrollTop: 0
            },
            methods: {
                initSubtitles: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 ? arguments[2] : void 0,
                        n = Array.isArray(a) ? a : [];
                    this.fullArticle = n;
                    var s = l && "object" === r(l) && !Array.isArray(l) ? l : {},
                        h = s.renderArticle,
                        p = e(s, i),
                        u = Array.isArray(h) ? h : n,
                        c = "function" == typeof l ? l : "function" == typeof o ? o : void 0;
                    this.setData(t({
                        article: u,
                        currentRow: -1,
                        paragraphPlayback: null,
                        paragraphPlaybackLabel: ""
                    }, p), c)
                },
                getSubtitleSourceArticle: function() {
                    return Array.isArray(this.fullArticle) ? this.fullArticle : Array.isArray(this.data.article) ? this.data.article : []
                },
                resetSubtitleState: function() {
                    this.paragraphPlaybackTimer && (clearTimeout(this.paragraphPlaybackTimer), this.paragraphPlaybackTimer = null), this.setData({
                        paragraphPlayback: null,
                        paragraphPlaybackLabel: "",
                        currentRow: -1
                    })
                },
                resolveParagraphTimes: function() {
                    var a, t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = function(a) {
                            var t = Number(a);
                            return Number.isFinite(t) ? t : void 0
                        },
                        i = r(null !== (a = e.beginTime) && void 0 !== a ? a : e.start),
                        l = r(null !== (t = e.endTime) && void 0 !== t ? t : e.end);
                    return {
                        start: i,
                        end: l
                    }
                },
                handleBindTimeUpdate: function(a) {
                    var t = this.data,
                        e = t.paragraphPlayback,
                        r = t.currentRow,
                        i = this.getSubtitleSourceArticle();
                    if (e && Number.isFinite(e.row) && Number.isFinite(e.start) && Number.isFinite(e.end)) {
                        var l = e.row,
                            o = e.start,
                            n = e.end;
                        if (o < n) {
                            var s = e.pausedUntil;
                            if (!("number" != typeof s || a >= s) || !(a >= n + 200 || a <= o - 200)) return void(this.data.autoScroll && r !== l && (this.setData({
                                currentRow: l
                            }), this.scrollSubtitleToCenter()));
                            this.stopParagraphPlayback(!1)
                        }
                        this.stopParagraphPlayback(!1)
                    }
                    if (i.length)
                        for (var h = 0; h < i.length; h++) {
                            var p = i[h] || {},
                                u = this.resolveParagraphTimes(p),
                                c = u.start,
                                b = u.end;
                            if ("number" == typeof c && "number" == typeof b && c <= a && a <= b && r !== h) {
                                this.setData({
                                    currentRow: h
                                }), this.data.autoScroll && this.scrollSubtitleToCenter();
                                break
                            }
                        }
                },
                scrollSubtitleToCenter: function() {
                    var t = this;
                    ("function" == typeof this.createSelectorQuery ? this.createSelectorQuery() : wx.createSelectorQuery()).select(".article").boundingClientRect().select(".active").boundingClientRect().exec((function(e) {
                        if (e && e[1]) {
                            var r = a(e, 2),
                                i = r[0],
                                l = r[1],
                                o = Math.max(0, Number(t.data.scrollTop) || 0),
                                n = "number" == typeof(null == i ? void 0 : i.top) ? i.top : 0,
                                s = ("number" == typeof(null == l ? void 0 : l.top) ? l.top : 0) - n - 24,
                                h = Math.max(0, o + s);
                            Number.isFinite(h) && t.setData({
                                scrollTop: h
                            })
                        }
                    }))
                },
                seekToParagraph: function(a) {
                    var t, e, r, i, l, o, n, s, h, p, u, c = "number" == typeof a ? a : Number(a);
                    if (Number.isFinite(c)) {
                        var b = this.getSubtitleSourceArticle(),
                            d = null == b ? void 0 : b[c];
                        if (d) {
                            var v = this.resolveParagraphTimes(d).start,
                                g = null !== (t = null !== (e = null == d || null === (r = d.segments) || void 0 === r || null === (i = r[0]) || void 0 === i ? void 0 : i.segmentStart) && void 0 !== e ? e : null == d || null === (l = d.segments) || void 0 === l || null === (o = l[0]) || void 0 === o || null === (n = o.words) || void 0 === n || null === (s = n[0]) || void 0 === s ? void 0 : s.begin_time) && void 0 !== t ? t : 0,
                                y = "number" == typeof v ? v : g;
                            Number.isFinite(y) && (this.stopParagraphPlayback(!1), null === (h = this.ensureVideoContext) || void 0 === h || h.call(this), null === (p = this.videoContext) || void 0 === p || p.seek(y / 1e3), null === (u = this.videoContext) || void 0 === u || u.play())
                        }
                    }
                },
                startParagraphPlayback: function(a) {
                    var t = this,
                        e = a.row,
                        r = a.start,
                        i = a.end,
                        o = a.loops,
                        n = void 0 === o ? 1 : o;
                    if (Number.isFinite(e) && Number.isFinite(r) && Number.isFinite(i) && !(i <= r)) {
                        var s = Math.max(1, Math.floor(Number(n) || 1));
                        this.stopParagraphPlayback(!1);
                        var h = {
                            row: e,
                            start: r,
                            end: i,
                            loopsRemaining: s,
                            totalLoops: s
                        };
                        this.setData({
                            paragraphPlayback: h,
                            paragraphPlaybackLabel: l(h),
                            currentRow: e
                        }, (function() {
                            t.playParagraphSegment()
                        }))
                    }
                },
                playParagraphSegment: function() {
                    var a, t, e, r = this.data.paragraphPlayback;
                    r && (null === (a = this.ensureVideoContext) || void 0 === a || a.call(this), null === (t = this.videoContext) || void 0 === t || t.seek(r.start / 1e3), null === (e = this.videoContext) || void 0 === e || e.play(), this.scheduleParagraphPlaybackEnd(r))
                },
                scheduleParagraphPlaybackEnd: function(a) {
                    var t = this;
                    this.paragraphPlaybackTimer && (clearTimeout(this.paragraphPlaybackTimer), this.paragraphPlaybackTimer = null);
                    var e = a || this.data.paragraphPlayback;
                    if (e) {
                        var r = Math.max(0, e.end - e.start);
                        Number.isFinite(r) && r > 0 && (this.paragraphPlaybackTimer = setTimeout((function() {
                            t.handleParagraphPlaybackEnd()
                        }), r + 30))
                    }
                },
                handleParagraphPlaybackEnd: function() {
                    var a = this;
                    this.paragraphPlaybackTimer && (clearTimeout(this.paragraphPlaybackTimer), this.paragraphPlaybackTimer = null);
                    var e = this.data.paragraphPlayback;
                    if (e)
                        if (e.loopsRemaining > 1) {
                            var r, i, o, n = t(t({}, e), {}, {
                                loopsRemaining: e.loopsRemaining - 1,
                                pausedUntil: void 0
                            });
                            this.setData({
                                paragraphPlayback: n,
                                paragraphPlaybackLabel: l(n)
                            });
                            var s = (null === (r = this.getLoopIntervalMs) || void 0 === r ? void 0 : r.call(this)) || 0;
                            if (null === (i = this.ensureVideoContext) || void 0 === i || i.call(this), null === (o = this.videoContext) || void 0 === o || o.pause(), s > 0) {
                                var h = Date.now() + s;
                                this.setData({
                                    paragraphPlayback: t(t({}, n), {}, {
                                        pausedUntil: h
                                    }),
                                    paragraphPlaybackLabel: l(n)
                                }), this.paragraphPlaybackTimer = setTimeout((function() {
                                    a.playParagraphSegment()
                                }), s)
                            } else this.playParagraphSegment()
                        } else this.stopParagraphPlayback(!0)
                },
                stopParagraphPlayback: function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.paragraphPlaybackTimer && (clearTimeout(this.paragraphPlaybackTimer), this.paragraphPlaybackTimer = null);
                    var t, e, r = !!this.data.paragraphPlayback;
                    a && (null === (t = this.ensureVideoContext) || void 0 === t || t.call(this), null === (e = this.videoContext) || void 0 === e || e.pause());
                    r && (console.log("[paragraph] stop playback pause?", a), this.setData({
                        paragraphPlayback: null,
                        paragraphPlaybackLabel: ""
                    }))
                }
            }
        },
        n = o;
    exports.subtitleBehaviorMixin = n;
    var s = Behavior(o);
    exports.default = s;