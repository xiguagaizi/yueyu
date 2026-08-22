    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../../@babel/runtime/helpers/Objectvalues");
    var e, t = require("../../../@babel/runtime/helpers/defineProperty"),
        n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        o = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        s = require("../../../commons/utils"),
        i = u(require("../../../api/getCheckinFeedbacks")),
        r = u(require("../../../api/addCheckinFeedback")),
        c = u(require("../../../api/adminUpdateUserCheckin")),
        d = u(require("../../../api/adminUpdateCheckin"));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
            AUDIO: "audio",
            TEXT: "text"
        },
        h = {
            STUDENT: "student",
            TEACHER: "teacher"
        },
        w = null;
    Page((t(e = {
        selectedEnd: -1,
        selectedStart: -1,
        checkSubscribe: function(e) {
            var t = this;
            wx.getSetting({
                withSubscriptions: !0,
                complete: function(n) {
                    var o, a;
                    console.log(n);
                    var s = !1;
                    !0 === (null == n || null === (o = n.subscriptionsSetting) || void 0 === o ? void 0 : o.mainSwitch) && null !== (a = n.subscriptionsSetting.itemSettings) && void 0 !== a && a[e] && (s = !0), t.setData({
                        rememberSubscribe: s
                    })
                }
            })
        },
        subscribe: function() {
            wx.getSetting({
                withSubscriptions: !0,
                complete: function(e) {
                    console.log(e)
                }
            }), wx.requestSubscribeMessage({
                tmplIds: ["GIa-hKht1YQalRNI5FIoJKS10H3-NCn0bvhQyW8p1n4"],
                complete: function(e) {
                    console.log(e)
                }
            })
        },
        navBack: s.navBack,
        navToCheckin: function() {
            var e = this.data.userCheckin.checkinId;
            wx.navigateTo({
                url: "../index/index?id=".concat(e, "&from=comment")
            })
        },
        data: {
            showAction: !1,
            actions: [{
                name: "通过",
                color: "green",
                status: "approved"
            }, {
                name: "隐藏",
                status: "hidden"
            }, {
                name: "置优",
                color: "green",
                status: "setgood"
            }, {
                name: "去优",
                color: "green",
                status: "setnormal"
            }],
            loaded: !1,
            show: !1,
            MSG_TYPE: l,
            ROLE: h,
            content: "",
            adLoaded: !1,
            tid: "Pa4uhoWH5Vl9oCQq8ASJUCEF2z0V0tw0qFwxNwCagK4"
        },
        onLoad: function(e) {
            var t = this;
            this.id = e.id, this.isNewAnswer = "1" == e.newAnswer, this.id ? (this.loadData(), wx.createRewardedVideoAd && ((w = wx.createRewardedVideoAd({
                adUnitId: "adunit-829bdea32f7bb5e2"
            })).onLoad((function() {
                t.setData({
                    adLoaded: !0
                })
            })), w.onError((function(e) {
                console.log("onError event emit", e)
            })), w.onClose((function(e) {
                console.log("onClose event emit", e)
            })))) : wx.showModal({
                content: "参数错误",
                complete: s.navBack
            })
        },
        showAd: function() {
            var e;
            null === (e = w) || void 0 === e || e.show()
        },
        formatTips: function() {
            var e = this.data,
                t = e.list;
            if (e.isAdmin) this.setData({
                tips: "耐心，撑粤语"
            });
            else {
                for (var n = a(t).slice(-2), o = 0; n.length < 2 || n[n.length - 1].role !== h.STUDENT || n[n.length - 2].role !== h.STUDENT;) n.push({
                    role: h.STUDENT
                }), o += 1;
                var s = "当前可提问".concat(o, "次");
                0 === o && (s = "当前可提问".concat(o, "次")), this.setData({
                    tips: s,
                    times: o
                })
            }
        },
        loadData: function() {
            var e = this;
            return o(n().mark((function t() {
                var o, a, r, c, d, u, l, h;
                return n().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.prev = 1, t.next = 4, (0, i.default)(e.id, e.isNewAnswer);
                        case 4:
                            o = t.sent, a = o.code, r = o.data, c = r.list, d = r.student, u = r.teacher, l = r.isAdmin, h = r.userCheckin, 0 === a ? e.setData({
                                list: c,
                                student: d,
                                teacher: u,
                                isAdmin: l,
                                userCheckin: h
                            }, (function() {
                                wx.pageScrollTo({
                                    scrollTop: 5e4
                                }), e.formatTips()
                            })) : wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: s.navBack
                            }), t.next = 18;
                            break;
                        case 15:
                            t.prev = 15, t.t0 = t.catch(1), wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: s.navBack
                            });
                        case 18:
                            e.setData({
                                loaded: !0
                            }), wx.hideLoading();
                        case 20:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [1, 15]
                ])
            })))()
        },
        playAudio: function(e) {
            var t = e.currentTarget.dataset.audio;
            (0, s.playAudio)(t)
        },
        play: function() {
            this.selectComponent("#player").play()
        },
        initRM: function() {
            var e = this,
                t = wx.getRecorderManager();
            t.onStart((function() {
                console.log("recorder start"), e.setData({
                    recTotalTime: 0
                }), e.countdown(), e.setRecordStatus(!0)
            })), t.onPause((function() {
                console.log("recorder pause"), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onInterruptionBegin((function() {
                wx.showModal({
                    content: "录音已中断，请重新录音",
                    showCancel: !1
                }), e.setData({
                    recTotalTime: 0
                }), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onError((function(t) {
                e.setRecordStatus(!1), null != t && t.errMsg.includes("auth deny") ? wx.showModal({
                    title: "温馨提示",
                    content: "打卡需要授权麦克风录音，前往授权？",
                    confirmText: "去授权",
                    complete: function(e) {
                        e.confirm && wx.openSetting()
                    }
                }) : wx.showModal({
                    title: "温馨提示",
                    content: "录音失败|".concat(null == t ? void 0 : t.errMsg),
                    showCancel: !1
                })
            })), t.onStop((function(t) {
                console.log("recorder stop", t), e.setRecordStatus(!1);
                var n = t.tempFilePath,
                    o = t.duration;
                e.setData({
                    recTotalTime: 0,
                    tempFilePath: n,
                    duration: o
                }), wx.showToast({
                    title: "录音完成"
                }), e.stopCountDown(), e.play()
            })), this.recorderManager = t
        },
        onReady: function() {
            this.initRM(), this.checkSubscribe(this.data.tid)
        },
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        addRewarded: function() {},
        isTeacher: function() {
            return this.data.role === h.TEACHER
        },
        sendClickHandle: function(e) {
            var t = e.currentTarget.dataset.type,
                n = this.data.isAdmin;
            if (this.formType = t, n) this.showForm();
            else {
                var o = this.data.times;
                0 !== (void 0 === o ? 0 : o) ? this.showForm() : wx.showModal({
                    content: "请耐心等待回复后再提问",
                    showCancel: !1
                })
            }
        },
        showForm: function() {
            this.setData({
                show: !0,
                msgType: this.formType
            })
        },
        onClose: function() {
            this.setData({
                show: !1
            })
        },
        recordHandle: function() {
            this.recording ? this.stopRecord() : (s.playAudio.destroy(), this.startRecord()), this.recording = !this.recording
        },
        startRecord: function() {
            this.recording && this.stopRecord();
            var e = {
                duration: 6e4,
                sampleRate: 16e3,
                numberOfChannels: 1,
                encodeBitRate: 32e3,
                format: "wav"
            };
            this.recorderManager.start(e)
        },
        stopRecord: function() {
            this.recorderManager.stop(), this.setRecordStatus(!1)
        },
        setRecordStatus: function(e) {
            this.setData({
                recording: e
            }), this.recording = e
        },
        stopCountDown: function() {
            this.t && clearInterval(this.t)
        },
        countdown: function() {
            var e = this,
                t = this,
                n = 0;
            this.t = setInterval((function() {
                (n += 1) > 60 ? clearInterval(e.t) : t.setData({
                    recTotalTime: n
                })
            }), 1e3)
        },
        send: function() {
            var e = this.data.msgType;
            Object.values(l).includes(e) && (e === l.AUDIO ? this.sendAudio() : e === l.TEXT && this.sendText())
        },
        addComment: function(e) {
            var t = this;
            return o(n().mark((function o() {
                var s, i, c, d, u;
                return n().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading({
                                title: "正在发送..."
                            }), n.prev = 1, n.next = 4, (0, r.default)(e);
                        case 4:
                            if (s = n.sent, 0 !== s.code) {
                                n.next = 13;
                                break
                            }
                            wx.showToast({
                                title: "已发送",
                                icon: "success"
                            }), i = t.data, c = i.list, d = i.isAdmin, u = e.type === l.TEXT ? {
                                text: e.text
                            } : {
                                sound: e.sound,
                                duration: e.duration
                            }, t.setData({
                                reward: !1,
                                show: !1,
                                content: "",
                                list: [].concat(a(c), [{
                                    role: d ? h.TEACHER : h.STUDENT,
                                    type: e.type,
                                    isMine: !0,
                                    uuid: Date.now(),
                                    content: u,
                                    time: "刚刚"
                                }])
                            }, (function() {
                                wx.pageScrollTo({
                                    scrollTop: 5e4
                                }), t.formatTips()
                            })), n.next = 14;
                            break;
                        case 13:
                            throw new Error("fail");
                        case 14:
                            n.next = 19;
                            break;
                        case 16:
                            n.prev = 16, n.t0 = n.catch(1), wx.showModal({
                                content: "系统异常，请稍后再试",
                                showCancel: !1
                            });
                        case 19:
                            wx.hideLoading();
                        case 20:
                        case "end":
                            return n.stop()
                    }
                }), o, null, [
                    [1, 16]
                ])
            })))()
        },
        sendText: function() {
            var e = this.data.content.trim();
            if (e) {
                var t = {
                    text: e,
                    type: l.TEXT,
                    userCheckinId: this.id
                };
                this.addComment(t)
            }
        },
        sendAudio: function() {
            var e = this.data,
                t = e.tempFilePath,
                n = e.duration;
            if (t)
                if (n < 2e3) wx.showToast({
                    title: "录音时长过短",
                    icon: "error"
                });
                else {
                    var o = wx.getFileSystemManager().readFileSync(t),
                        a = {
                            type: l.AUDIO,
                            userCheckinId: this.id,
                            duration: n,
                            base64Buffer: wx.arrayBufferToBase64(o)
                        };
                    this.addComment(a)
                } else wx.showToast({
                title: "请先录音",
                icon: "error"
            })
        },
        onChange: function(e) {
            var t = e.detail;
            this.setData({
                content: t
            }), this.updateCursorPos()
        },
        updateCursorPos: function() {
            var e = this;
            !0 === this.data.isAdmin && wx.getSelectedTextRange({
                success: function(t) {
                    var n = t.start,
                        o = t.end;
                    e.selectedEnd = o, e.selectedStart = n
                },
                fail: function(e) {
                    console.error(e)
                }
            })
        },
        addJyutping: function() {
            var e = this,
                t = e.selectedStart,
                n = e.selectedEnd,
                o = e.data.content;
            wx.navigateTo({
                url: "../../tools/comment-tools/index",
                events: {
                    getPingyin: function(a) {
                        a && t > -1 && n > -1 && e.setData({
                            content: o.slice(0, t) + a + o.slice(n)
                        })
                    }
                }
            })
        }
    }, "onClose", (function() {
        this.setData({
            showAction: !1
        })
    })), t(e, "onSelect", (function(e) {
        var t = this;
        t.onClose();
        var n = e.detail,
            o = n.name,
            a = n.status;
        wx.showModal({
            title: "审批确认",
            content: "确认".concat(o, "？"),
            complete: function(e) {
                if (e.confirm) {
                    var n = t.data.userCheckin.uuid;
                    ["hidden", "approved"].includes(a) ? t.approve(n, {
                        status: a
                    }) : "setgood" === a ? t.approve(n, {
                        isGood: !0
                    }) : "setnormal" === a && t.approve(n, {
                        isGood: !1
                    })
                }
            }
        })
    })), t(e, "approve", (function(e, t) {
        var a = this;
        return o(n().mark((function o() {
            var s, i, r;
            return n().wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (s = a, e) {
                            n.next = 3;
                            break
                        }
                        return n.abrupt("return");
                    case 3:
                        return wx.showLoading({
                            title: "加载中..."
                        }), n.prev = 4, n.next = 7, (0, c.default)(e, t);
                    case 7:
                        i = n.sent, 0 === i.code ? (wx.showToast({
                            title: "操作成功"
                        }), r = t.status, ["hidden", "approved"].includes(r) ? s.setData({
                            "userCheckin.status": r
                        }) : "isGood" in t && s.setData({
                            "userCheckin.isGood": !s.data.userCheckin.isGood
                        })) : wx.showToast({
                            title: "操作失败"
                        }), n.next = 15;
                        break;
                    case 12:
                        n.prev = 12, n.t0 = n.catch(4), wx.showToast({
                            title: "请求失败"
                        });
                    case 15:
                        wx.hideLoading();
                    case 16:
                    case "end":
                        return n.stop()
                }
            }), o, null, [
                [4, 12]
            ])
        })))()
    })), t(e, "setStatus", (function() {
        this.setData({
            showAction: !this.data.showAction
        })
    })), t(e, "updateCheckin", (function(e) {
        var t = this;
        return o(n().mark((function o() {
            var a, s, i, r, c;
            return n().wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (a = e.currentTarget.dataset.type, s = t.data.userCheckin, i = {
                                openid: s.openid,
                                audio: s.sound
                            }, r = null, "slow" === a ? r = {
                                slow: i
                            } : "detail" === a && (r = {
                                detail: i
                            }), r || "delete" === a) {
                            n.next = 7;
                            break
                        }
                        return n.abrupt("return");
                    case 7:
                        return wx.showLoading({
                            title: "处理中"
                        }), n.prev = 8, n.next = 11, (0, d.default)(s.checkinId, r);
                    case 11:
                        if (c = n.sent, 0 !== c.code) {
                            n.next = 17;
                            break
                        }
                        wx.showToast({
                            title: "操作成功"
                        }), n.next = 18;
                        break;
                    case 17:
                        throw new Error;
                    case 18:
                        n.next = 23;
                        break;
                    case 20:
                        n.prev = 20, n.t0 = n.catch(8), wx.showToast({
                            title: "操作失败",
                            icon: "error"
                        });
                    case 23:
                        wx.hideLoading();
                    case 24:
                    case "end":
                        return n.stop()
                }
            }), o, null, [
                [8, 20]
            ])
        })))()
    })), e));
