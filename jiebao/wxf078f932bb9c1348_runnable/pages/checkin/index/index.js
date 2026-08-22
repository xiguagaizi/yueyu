    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/defineProperty"),
        t = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/typeof"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../commons/utils"),
        s = (require("../../../utils/login"), C(require("../../../utils/monitor"))),
        c = require("../../../commons/config"),
        u = C(require("../../../api/getCheckin")),
        l = C(require("../../../api/addLike")),
        d = C(require("../../../api/delLike")),
        h = C(require("../../../api/getUserCheckinList")),
        p = C(require("../../../api/addUserCheckin")),
        f = C(require("../../../api/delUserCheckin")),
        v = C(require("../../../api/addFav")),
        g = C(require("../../../api/getFavState")),
        m = C(require("../../../api/deleteFav")),
        w = C(require("../../../api/getNewAnswerCount")),
        y = C(require("../../../api/getBanners")),
        k = C(require("../../../api/getOSSPostPolicy")),
        x = C(require("../../../api/exchangeMiniappTicket")),
        S = require("../../../components/ruby-token/shared");

    function C(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var P = function(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e % 60);
            return "".concat(t.toString().padStart(2, "0"), ":").concat(n.toString().padStart(2, "0"))
        },
        T = {
            all: "全部",
            bound_students: "我的学员"
        },
        D = {
            all: "全部",
            vip_only: "仅VIP",
            non_vip_only: "仅非VIP"
        },
        _ = {
            all: "全部",
            active_member: "活跃会员",
            general_member: "一般会员",
            inactive_member: "暂不跟进",
            unclassified: "未分类"
        },
        b = getApp().isOHOS,
        I = void 0 !== b && b;
    Page({
        isGuest: !1,
        maxCheckinLimit: 3,
        page: 1,
        pageSize: 10,
        lastPageTapAt: 0,
        filterPreference: null,
        navBack: o.navBack,
        data: {
            isPlayingSentence: !1,
            isPlayingByWord: !1,
            showSettingPanel: !1,
            showModePanel: !1,
            mode: "normal",
            sentenceRepeatCount: 1,
            PINYIN_SCHEME: c.PINYIN_SCHEME,
            maxDuration: 6e4,
            show: !1,
            showReocordPanel: !1,
            list: [],
            currSoundSource: "original",
            currentValue: 0,
            fmtCurrentTime: "",
            isTeacher: !1,
            identity: null,
            currentScope: "all",
            currentVipFilter: "all",
            currentStudentCategory: "all",
            scopeOptions: [],
            vipFilterOptions: [],
            studentCategoryOptions: [],
            showFilterPanel: !1,
            pinyinScheme: "",
            rubyDisplayStyle: "annotated"
        },
        canToggleFilterPanel: function() {
            var e = this.data,
                t = e.isAdmin,
                n = void 0 !== t && t,
                a = e.identity,
                i = void 0 === a ? null : a;
            return !!n || "official" === (null == i ? void 0 : i.teacherType)
        },
        toggleFilterPanel: function() {
            var e = this;
            if (this.canToggleFilterPanel()) {
                var t = !this.data.showFilterPanel;
                this.setData({
                    showFilterPanel: t
                }, (function() {
                    e.persistFilterPreference({
                        showFilterPanel: t
                    })
                })), wx.showToast({
                    title: t ? "筛选已显示" : "筛选已隐藏",
                    icon: "none"
                })
            }
        },
        handlePageTap: function() {
            if (this.canToggleFilterPanel()) {
                var e = Date.now();
                e - this.lastPageTapAt > 300 ? this.lastPageTapAt = e : (this.lastPageTapAt = 0, this.toggleFilterPanel())
            }
        },
        navToAdminManage: function(e) {
            var t = this.data,
                n = t.isAdmin,
                a = void 0 !== n && n,
                i = t.list,
                r = void 0 === i ? [] : i;
            if (a) {
                var o = (e.currentTarget.dataset || {}).index;
                if (void 0 !== o && r[o]) {
                    var s = decodeURIComponent(r[o].uuid);
                    wx.navigateTo({
                        url: "/pages/admin/checkin/manage/index?id=".concat(s)
                    })
                }
            }
        },
        navToComment: function(e) {
            var t = this.data,
                n = t.isAdmin,
                a = void 0 !== n && n,
                i = t.list,
                r = void 0 === i ? [] : i,
                o = t.isTeacher;
            if (a || void 0 !== o && o) {
                var s = e.currentTarget.dataset.index,
                    c = decodeURIComponent(r[s].uuid),
                    u = "/pages/correction/session/detail?checkinId=".concat(c);
                wx.navigateTo({
                    url: u
                })
            }
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
                if (e.setRecordStatus(!1), null != t && t.errMsg.includes("auth deny")) wx.showModal({
                    title: "温馨提示",
                    content: "打卡需要授权麦克风录音，前往授权？",
                    confirmText: "去授权",
                    complete: function(e) {
                        e.confirm && wx.openSetting()
                    }
                });
                else {
                    var n = "录音失败|".concat(null == t ? void 0 : t.errMsg);
                    I && (n = "鸿蒙系统暂时不支持录音功能"), wx.showModal({
                        title: "温馨提示",
                        content: n,
                        showCancel: !1
                    })
                }
            })), t.onStop((function(t) {
                console.log("recorder stop", t), e.setRecordStatus(!1);
                var n = t.tempFilePath,
                    a = t.duration;
                e.setData({
                    recTotalTime: 0,
                    tempFilePath: n,
                    duration: a
                }), wx.showToast({
                    title: "录音完成"
                }), e.stopCountDown(), e.play()
            })), this.recorderManager = t
        },
        navToMpCheckin: function() {
            var e = this,
                t = e.data.item;
            wx.miniapp.launchMiniProgram({
                userName: "gh_a68981c02e83",
                miniprogramType: 0,
                path: "pages/checkin/index/index?id=".concat(t.uuid, "&ticket=").concat(t.ticket),
                success: function(t) {
                    "succ" === (null == t ? void 0 : t.extMsg) && (wx.showToast({
                        title: "打卡成功！",
                        icon: "success"
                    }), e.setData({
                        list: []
                    }), e.page = 1, e.getUserCheckinList({
                        showLoading: !0
                    }), e.hideCheckin(), s.default.sum("checkin_ohos_checkin_succ")), s.default.sum("checkin_ohos_launch_mp")
                }
            })
        },
        guideToMp: function() {
            var e = this,
                t = "nav_to_mp_checkin_directly";
            try {
                var n = e.data.item;
                I && n.ticket && wx.miniapp.hasWechatInstall({
                    success: function(n) {
                        if (n.hasWechatInstall) {
                            try {
                                if (!0 === wx.getStorageSync(t)) return void e.navToMpCheckin()
                            } catch (e) {}
                            wx.showModal({
                                content: "鸿蒙系统录音适配中，请前往小程序打卡。",
                                confirmText: "去打卡",
                                complete: function(n) {
                                    n.confirm && (e.navToMpCheckin(), wx.setStorage({
                                        key: t,
                                        data: !0
                                    }))
                                }
                            }), s.default.sum("checkin_ohos_has_wx_install")
                        } else wx.showModal({
                            content: "鸿蒙系统录音适配中，请安装微信后前往小程序打卡。",
                            showCancel: !1
                        }), s.default.sum("checkin_ohos_has_not_wx_install")
                    }
                })
            } catch (e) {}
        },
        showCheckin: function() {
            var e = this.data,
                t = e.allowDelete;
            if (e.checkined) wx.showModal({
                content: t ? "已完成打卡，如需重新打卡，请先删除当前记录。删除成功后可重新打卡。" : "已完成打卡",
                showCancel: !1
            });
            else if (this.isMakeupCheckinLimit()) wx.showModal({
                title: "温馨提示",
                showCancel: !1,
                content: "为了保证打卡质量，每天限定最多补打卡次数为".concat(this.maxCheckinLimit, "次。")
            });
            else {
                var n = this.auth || (0, o.getLoginInfo)();
                this.getOSSPostPolicy(), n && n.nickname && n.avatar ? (this.userInfo = {
                    nickname: n.nickname,
                    avatar: n.avatar,
                    openid: null == n ? void 0 : n.openid
                }, this.setData({
                    showReocordPanel: !0
                })) : wx.showModal({
                    content: "获取用户信息失败",
                    showCancel: !1,
                    complete: o.navBack
                })
            }
        },
        hideCheckin: function() {
            this.setData({
                showReocordPanel: !1
            })
        },
        checkinHandle: function(e) {
            var t, n = this;
            n.data.tempFilePath ? (null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.x) > 80 ? n.checkin() : wx.showModal({
                title: "打卡确认",
                content: "请确认录音内容是否正确，提交后不可更改。",
                cancelText: "再看看",
                confirmText: "提交打卡",
                complete: function(e) {
                    e.confirm && n.checkin()
                }
            }) : wx.showModal({
                content: "请先完成录音",
                showCancel: !1
            })
        },
        checkin: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, o, s, c, u, l, d, h;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o = (a = e).data, s = o.tempFilePath, c = o.duration, u = a.data.item || {}, l = u.uuid) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return");
                        case 5:
                            if (d = "".concat(Date.now()).concat(Math.random()), null !== (n = a.userInfo) && void 0 !== n && n.openid && (d = a.userInfo.openid), a.postPolicy) {
                                t.next = 14;
                                break
                            }
                            return t.next = 10, a.getOSSPostPolicy(!0);
                        case 10:
                            if (a.postPolicy = t.sent, a.postPolicy) {
                                t.next = 14;
                                break
                            }
                            return wx.showModal({
                                content: "上传音频失败[10023]，请稍后重试",
                                showCancel: !1
                            }), t.abrupt("return");
                        case 14:
                            h = "".concat(a.postPolicy.dir).concat(d, ".m4a"), a.uploadFileToOSS({
                                filePath: s,
                                key: h,
                                success: function() {
                                    var e = r(i().mark((function e(t) {
                                        return i().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    a.doCheckin({
                                                        ossTempFile: h,
                                                        duration: c,
                                                        checkinId: l,
                                                        tempFilePath: s
                                                    });
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fail: function() {
                                    wx.showModal({
                                        content: "音频上传失败[100213]，请稍后重试。",
                                        showCancel: !1
                                    })
                                }
                            });
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        doCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var r, o, c, u, l, d, h, f, v, g, m, w, y, k, x, S;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return r = e.checkinId, o = e.duration, c = e.ossTempFile, u = e.tempFilePath, l = t, wx.showLoading({
                                title: "正在提交..."
                            }), n.prev = 3, n.next = 6, (0, p.default)({
                                checkinId: r,
                                duration: o,
                                tempFile: c
                            }, {
                                header: {
                                    openid: null === (d = l.auth) || void 0 === d ? void 0 : d.openid,
                                    token: null === (h = l.auth) || void 0 === h ? void 0 : h.token
                                }
                            });
                        case 6:
                            if (f = n.sent, v = f.code, g = f.data, 0 === v) {
                                wx.showToast({
                                    title: "打卡成功！",
                                    icon: "success"
                                }), k = l.data.list, x = void 0 === k ? [] : k, S = {
                                    avatar: (null === (m = l.userInfo) || void 0 === m ? void 0 : m.avatar) || "",
                                    nickname: (null === (w = l.userInfo) || void 0 === w ? void 0 : w.nickname) || "微信用户",
                                    openid: null === (y = l.userInfo) || void 0 === y ? void 0 : y.openid,
                                    sound: u,
                                    duration: o,
                                    like: 0,
                                    time: "刚刚",
                                    uuid: g.uuid,
                                    checkined: !0
                                }, l.setData({
                                    list: [S].concat(a(x)),
                                    showReocordPanel: !1,
                                    checkined: !0,
                                    allowDelete: !0,
                                    ohosCheckinResult: "succ"
                                });
                                try {
                                    l.getOpenerEventChannel().emit("checkedNotify", r)
                                } catch (e) {}
                                try {
                                    l.addCheckinLimit()
                                } catch (e) {}
                                s.default.sum("_ohos")
                            } else -2 === v ? wx.showToast({
                                title: "重复打卡",
                                icon: "error"
                            }) : wx.showToast({
                                title: "打卡失败",
                                icon: "error"
                            });
                            n.next = 16;
                            break;
                        case 12:
                            n.prev = 12, n.t0 = n.catch(3), console.error(n.t0), wx.showToast({
                                title: "打卡失败",
                                icon: "error"
                            });
                        case 16:
                            wx.hideLoading();
                        case 17:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [3, 12]
                ])
            })))()
        },
        report: function(e) {
            var t = e.id,
                n = e.msg,
                a = void 0 === n ? "" : n;
            wx.reportEvent("wxdata_perf_monitor", {
                wxdata_perf_monitor_id: t,
                wxdata_perf_monitor_level: 0,
                wxdata_perf_error_code: 0,
                wxdata_perf_error_msg: a,
                wxdata_perf_cost_time: 0,
                wxdata_perf_extra_info1: "",
                wxdata_perf_extra_info2: "",
                wxdata_perf_extra_info3: ""
            })
        },
        stopCountDown: function() {
            this.t && clearInterval(this.t)
        },
        countdown: function() {
            var e = this,
                t = this,
                n = t.data.maxDuration,
                a = 0;
            this.t = setInterval((function() {
                (a += 1) >= n ? clearInterval(e.t) : t.setData({
                    recTotalTime: a
                })
            }), 1e3)
        },
        setRecordStatus: function(e) {
            this.setData({
                recording: e
            }), this.recording = e
        },
        recordHandle: function() {
            this.recording ? this.stopRecord() : (this.stopSentensePlay(), this.startRecord()), this.recording = !this.recording
        },
        startRecord: function() {
            this.recording && this.stopRecord();
            var e = this.data.maxDuration,
                t = "aac";
            I && (t = "mp3");
            var n = {
                duration: e,
                sampleRate: 16e3,
                numberOfChannels: 1,
                encodeBitRate: 32e3,
                format: t
            };
            this.recorderManager.start(n)
        },
        stopRecord: function() {
            this.recorderManager.stop(), this.setRecordStatus(!1)
        },
        getData: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r, s, c, l;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, wx.showLoading({
                                title: "加载中..."
                            }), t.prev = 2, !1, t.next = 6, (0, u.default)(n.id, {
                                guest: !1,
                                accessToken: n.accessToken,
                                header: {
                                    openid: null === (a = n.auth) || void 0 === a ? void 0 : a.openid,
                                    token: null === (r = n.auth) || void 0 === r ? void 0 : r.token
                                }
                            });
                        case 6:
                            if (s = t.sent, c = s.code, l = s.data, 0 !== c) {
                                t.next = 20;
                                break
                            }
                            if (!0 !== (null == l ? void 0 : l.needVip)) {
                                t.next = 14;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.abrupt("return");
                        case 14:
                            n.formatData(l), l.maxCheckinLimit && (n.maxCheckinLimit = parseInt(l.maxCheckinLimit, 10)), l.maxRecordTime && n.setData({
                                maxDuration: l.maxRecordTime
                            }), !0 === n.isGuest || e.auth || (n.getFavState(), setTimeout((function() {
                                n.getNewAnswerCount(), n.getBanners()
                            }), 1e3)), t.next = 21;
                            break;
                        case 20:
                            throw new Error;
                        case 21:
                            t.next = 27;
                            break;
                        case 23:
                            t.prev = 23, t.t0 = t.catch(2), console.error(t.t0), wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: o.navBack,
                                showCancel: !1
                            });
                        case 27:
                            e.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 29:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 23]
                ])
            })))()
        },
        loadMore: function() {
            this.page += 1, this.getUserCheckinList({
                showLoading: !0
            })
        },
        getScopeOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedScopes;
            return Array.isArray(n) && n.length ? n.map((function(e) {
                return {
                    value: e,
                    label: T[e] || e
                }
            })) : this.data.isTeacher && !this.data.isAdmin ? [{
                value: "bound_students",
                label: T.bound_students
            }] : []
        },
        getVipFilterOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedVipFilters;
            return Array.isArray(n) && n.length ? n.map((function(e) {
                return {
                    value: e,
                    label: D[e] || e
                }
            })) : []
        },
        getStudentCategoryOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedStudentCategoryFilters;
            return Array.isArray(n) && n.length ? n.length <= 1 ? [] : n.map((function(e) {
                return {
                    value: e,
                    label: _[e] || e
                }
            })) : []
        },
        getRequestScope: function() {
            var e = this.getScopeOptions();
            if (!e.length) return this.data.currentScope || "";
            var t = this.data.currentScope;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        getRequestVipFilter: function() {
            var e = this.getVipFilterOptions();
            if (!e.length) return this.data.currentVipFilter || "";
            var t = this.data.currentVipFilter;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        getRequestStudentCategory: function() {
            var e = this.getStudentCategoryOptions();
            if (!e.length) return "";
            var t = this.data.currentStudentCategory;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        loadFilterPreference: function() {
            try {
                var e = wx.getStorageSync("checkin_filter_preference");
                if (e && "object" === n(e)) return void(this.filterPreference = {
                    showFilterPanel: !!e.showFilterPanel,
                    currentScope: e.currentScope || "",
                    currentVipFilter: e.currentVipFilter || "",
                    currentStudentCategory: e.currentStudentCategory || ""
                })
            } catch (e) {}
            this.filterPreference = {
                showFilterPanel: !1,
                currentScope: "",
                currentVipFilter: "",
                currentStudentCategory: ""
            }
        },
        persistFilterPreference: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = this.filterPreference || {},
                a = t(t({}, n), {}, {
                    showFilterPanel: !!this.data.showFilterPanel,
                    currentScope: this.data.currentScope || "",
                    currentVipFilter: this.data.currentVipFilter || "",
                    currentStudentCategory: this.data.currentStudentCategory || ""
                }, e);
            this.filterPreference = a, wx.setStorage({
                key: "checkin_filter_preference",
                data: a
            })
        },
        resetCheckinList: function() {
            this.page = 1, this.setData({
                list: [],
                hasNext: !1
            })
        },
        onScopeChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentScope && this.setData({
                currentScope: a
            }, (function() {
                t.persistFilterPreference({
                    currentScope: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        onVipFilterChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentVipFilter && this.setData({
                currentVipFilter: a
            }, (function() {
                t.persistFilterPreference({
                    currentVipFilter: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        onStudentCategoryChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentStudentCategory && this.setData({
                currentStudentCategory: a
            }, (function() {
                t.persistFilterPreference({
                    currentStudentCategory: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        getUserCheckinList: function() {
            var e = arguments,
                t = this;
            return r(i().mark((function n() {
                var r, o, s, c, u, l, d, p, f, v, g, m, w, y, k, x, S, C, P, T, D, _, b, I, F, A, L, R, M, E, O, q;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = r.showLoading, s = void 0 !== o && o, c = t.data.item || {}, u = c.uuid, l = t.page, d = t.pageSize, u) {
                                n.next = 5;
                                break
                            }
                            return n.abrupt("return");
                        case 5:
                            return s && wx.showLoading({
                                title: "加载中...",
                                mask: !0
                            }), n.prev = 6, p = t.getRequestScope(), f = t.getRequestVipFilter(), v = t.getRequestStudentCategory(), n.next = 12, (0, h.default)({
                                page: l,
                                pageSize: d,
                                checkinId: u,
                                teacherOnly: "bound_students" === p || !p && t.data.isTeacher,
                                scope: p,
                                vipFilter: f,
                                studentCategory: v
                            });
                        case 12:
                            g = n.sent, m = g.code, w = g.data, y = w.list, k = w.hasNext, x = w.checkined, S = void 0 !== x && x, C = w.allowDelete, P = void 0 !== C && C, T = w.identity, D = void 0 === T ? null : T, _ = w.filters, b = void 0 === _ ? {} : _, 0 === m && (I = t.data.list, F = D || t.data.identity, A = t.getScopeOptions(F), L = t.getVipFilterOptions(F), R = t.getStudentCategoryOptions(F), M = b.scope || p || A[0] && A[0].value || "all", E = b.vipFilter || f || L[0] && L[0].value || "all", O = b.studentCategory || v || R[0] && R[0].value || "all", q = !(null == F || !F.isAdmin) || "official" === (null == F ? void 0 : F.teacherType), t.setData({
                                list: [].concat(a(I), a(y)),
                                hasNext: k,
                                identity: F,
                                scopeOptions: A,
                                vipFilterOptions: L,
                                studentCategoryOptions: R,
                                currentScope: M,
                                currentVipFilter: E,
                                currentStudentCategory: O,
                                showFilterPanel: !!q && t.data.showFilterPanel
                            }, (function() {
                                t.persistFilterPreference({
                                    currentScope: M,
                                    currentVipFilter: E,
                                    currentStudentCategory: O,
                                    showFilterPanel: !!q && t.data.showFilterPanel
                                }), 1 === l && t.setData({
                                    checkined: S,
                                    allowDelete: P
                                })
                            }))), n.next = 31;
                            break;
                        case 28:
                            n.prev = 28, n.t0 = n.catch(6), console.error(n.t0);
                        case 31:
                            wx.hideLoading();
                        case 32:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [6, 28]
                ])
            })))()
        },
        formatData: function(e) {
            var i, r, o, s = t({}, e),
                c = /(.+?)\(([a-zA-Z]+\d?)\)/g,
                u = this.data.pinyinScheme || this.getCurrentPinyinScheme();
            if (s.sentenceArr = s.cantonese.split("\n").map((function(e) {
                    return a(e.matchAll(c)).map((function(e) {
                        return [e[1], e[2], (0, S.buildRubyToken)(e[1], e[2], u)]
                    }))
                })), s.ext) {
                var l = {},
                    d = s.ext.split("\n");
                l.desc = d.shift(), l.list = d.map((function(e) {
                    var t = e.split(" ");
                    return {
                        title: t[0],
                        feedId: t[2],
                        finderUserName: t[1]
                    }
                })), s.ext = l
            }
            s.feedId || null != s && null !== (i = s.ext) && void 0 !== i && null !== (r = i.list) && void 0 !== r && null !== (o = r[0]) && void 0 !== o && o.feedId && (s.feedId = s.ext.list[0].feedId);
            var h = !1;
            s.isAdmin && (h = !0, delete s.isAdmin);
            var p = !1;
            s.isTeacher && (p = !0, delete s.isTeacher);
            var f = null;
            s.identity && "object" === n(s.identity) && (f = s.identity);
            var v = !1;
            s.earlyCheckIn && (v = !0), delete s.earlyCheckIn;
            var g = this.filterPreference || {},
                m = f || this.data.identity,
                w = this.getScopeOptions(m),
                y = this.getVipFilterOptions(m),
                k = this.getStudentCategoryOptions(m),
                x = g.currentScope || "",
                C = g.currentVipFilter || "",
                P = g.currentStudentCategory || "",
                T = w.some((function(e) {
                    return e.value === x
                })),
                D = y.some((function(e) {
                    return e.value === C
                })),
                _ = k.some((function(e) {
                    return e.value === P
                })),
                b = (T ? x : "") || w[0] && w[0].value || (p && !h ? "bound_students" : "all"),
                I = (D ? C : "") || y[0] && y[0].value || "all",
                F = (_ ? P : "") || k[0] && k[0].value || "all",
                A = !(null == m || !m.isAdmin) || "official" === (null == m ? void 0 : m.teacherType);
            this.setData({
                item: s,
                isAdmin: h,
                isTeacher: p,
                identity: m,
                scopeOptions: w,
                vipFilterOptions: y,
                studentCategoryOptions: k,
                earlyCheckIn: v,
                currentScope: b,
                currentVipFilter: I,
                currentStudentCategory: F,
                showFilterPanel: !!A && !!g.showFilterPanel
            }), this.auth || this.getUserCheckinList()
        },
        openSPH: function(e) {
            var t = e.target.dataset,
                n = t.fid,
                a = t.fname;
            wx.openChannelsActivity({
                feedId: n,
                finderUserName: a
            })
        },
        navToVideo: function(e) {
            var t = e.target.dataset.uuid;
            t && wx.navigateTo({
                url: "/pages/video/detail/index?uuid=".concat(t),
                complete: function(e) {
                    s.default.sum("checkin_nav_to_video")
                }
            })
        },
        navToSph: function(e) {
            var t = e.target.dataset.fid;
            t && wx.navigateTo({
                url: "/pages/sph/index?feedId=".concat(t),
                complete: function(e) {
                    console.log(e)
                }
            })
        },
        playByWord: function() {
            var e = this,
                t = this.data,
                n = t.item,
                a = (void 0 === n ? {
                    item: {
                        sentenceArr: []
                    }
                } : n).sentenceArr,
                i = t.recording,
                r = t.isPlayingSentence,
                s = t.isPlayingByWord,
                c = a[0].length;
            if (s) return o.playAudio.destroy(), void this.resetCurrent();
            if (c)
                if (r && this.stopSentensePlay(), i) wx.showToast({
                    title: "正在录音",
                    icon: "error"
                });
                else {
                    ! function t(n, i) {
                        var r = "".concat(e.AUDIO_BASE, "/").concat(a[n][i][1], ".mp3"),
                            s = function() {
                                (i += 1) >= a[n].length && (i = 0, (n += 1) >= a.length) ? e.resetCurrent() : o.playAudio.t = setTimeout((function() {
                                    t(n, i)
                                }), 400)
                            };
                        (0, o.playAudio)(r, s, (function() {
                            s(), /\d\.mp3$/.test(r) && e.report({
                                id: "audioNotFound",
                                msg: "資源不存在" + r
                            })
                        })), e.setData({
                            currentRow: n,
                            currentCol: i,
                            isPlayingByWord: !0,
                            currSoundSource: "zi"
                        })
                    }(0, 0)
                }
        },
        resetCurrent: function() {
            this.setData({
                currentRow: -1,
                currentCol: -1,
                isPlayingByWord: !1
            })
        },
        playWord: function(e) {
            var t = e.currentTarget;
            if (this.data.recording) wx.showToast({
                title: "正在录音",
                icon: "error"
            });
            else {
                this.data.isPlayingSentence && this.stopSentensePlay();
                var n = t.dataset,
                    a = n.p,
                    i = n.row,
                    r = n.col,
                    s = "".concat(this.AUDIO_BASE, "/").concat(a, ".mp3");
                (0, o.playAudio)(s, this.resetCurrent, this.resetCurrent), this.setData({
                    currentRow: i,
                    currentCol: r
                })
            }
        },
        getCurrentPinyinScheme: function() {
            return (0, o.getPinyinScheme)() || ""
        },
        getCurrentRubyDisplayStyle: function() {
            return (0, o.getRubyDisplayStyle)() || "annotated"
        },
        refreshDisplayPreferences: function() {
            var e = this.getCurrentPinyinScheme(),
                t = this.getCurrentRubyDisplayStyle();
            if (e !== this.data.pinyinScheme || t !== this.data.rubyDisplayStyle) {
                var n, a = {};
                if (e !== this.data.pinyinScheme) a.pinyinScheme = e, null !== (n = this.data.item) && void 0 !== n && n.sentenceArr && (a["item.sentenceArr"] = this.data.item.sentenceArr.map((function(t) {
                    return (Array.isArray(t) ? t : []).map((function(t) {
                        return [t[0], t[1], (0, S.buildRubyToken)(t[0], t[1], e)]
                    }))
                })));
                t !== this.data.rubyDisplayStyle && (a.rubyDisplayStyle = t), this.setData(a)
            }
        },
        onLoad: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, s, c;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            (a = t).id = decodeURIComponent(e.id || "1"), a.accessToken = e.accessToken || "";
                            try {
                                a.accessToken = a.accessToken ? decodeURIComponent(a.accessToken) : ""
                            } catch (e) {}
                            if (a.loadFilterPreference(), null == e || !e.ticket) {
                                n.next = 9;
                                break
                            }
                            return n.next = 8, t.ohosCheckin(e.ticket);
                        case 8:
                            return n.abrupt("return");
                        case 9:
                            a.getData(), "comment" === e.from && a.setData({
                                hideNav: !0
                            }), t.AUDIO_BASE = (0, o.getAudioBasePath)(), r = t.getCurrentPinyinScheme(), s = t.getCurrentRubyDisplayStyle(), a.setData({
                                pinyinScheme: r,
                                rubyDisplayStyle: s
                            }), t.loadSetting(), (c = a.getOpenerEventChannel()) && c.on && c.on("acceptDataFromOpenerPage", (function(e) {
                                "history" === (null == e ? void 0 : e.from) && (a.fromHistory = !0)
                            }));
                        case 18:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        ohosCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading("加载中..."), n.next = 3, (0, x.default)(e);
                        case 3:
                            a = n.sent, r = a.data, wx.hideLoading(), null != r && r.openid && null != r && r.token ? (t.auth = {
                                openid: r.openid,
                                token: r.token,
                                avatar: r.avatar,
                                nickname: r.nickname
                            }, t.userInfo = t.auth, t.setData({
                                ohosHack: !0
                            }), t.getData()) : (s.default.sum("checkin_ohos_exchange_error"), wx.showModal({
                                content: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: function(e) {}
                            }));
                        case 7:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        onUnload: function() {
            this.destroyAudio()
        },
        onHide: function() {
            this.pauseAudio()
        },
        destroyAudio: function() {
            this.audioIns && (this.audioIns.stop(), this.audioIns.destroy()), this.stopPlayAudio()
        },
        pauseAudio: function() {
            this.stopPlayAudio(), this.stopSentensePlay(), this.resetCurrent()
        },
        onReady: function() {
            var e = this;
            e.initRM(), wx.getStorage({
                key: c.CHECKIN_NEED_FEEDBACK_KEY,
                success: function(t) {
                    e.setData({
                        needFeedback: t.data
                    })
                }
            })
        },
        navToHistory: function() {
            this.fromHistory ? wx.navigateBack() : wx.navigateTo({
                url: "../history/index"
            })
        },
        likeClickHandle: function(n) {
            var a = n.currentTarget.dataset.index,
                i = this.data.list[a],
                r = i.hasLiked,
                o = i.like,
                s = "list.[".concat(a, "]");
            this.setData(e({}, s, t(t({}, i), {}, {
                hasLiked: !r,
                like: o + (r ? -1 : 1)
            }))), r ? this.removeLike(i.uuid, i.like) : this.addLike(i.uuid, i.openid, i.like)
        },
        updateLikeStatus: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                i = this,
                r = i.data.list;
            i.setData({
                list: r.map((function(i) {
                    return i.uuid === e && (i.hasLiked = t, !1 === n && (i.like = a)), i
                }))
            })
        },
        removeLike: function(e) {
            var t = arguments,
                n = this;
            return r(i().mark((function a() {
                var r, o, s, c;
                return i().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            if (r = t.length > 1 && void 0 !== t[1] ? t[1] : 0, !(o = n).requesting) {
                                a.next = 4;
                                break
                            }
                            return a.abrupt("return");
                        case 4:
                            return o.requesting = !0, a.prev = 5, a.next = 8, (0, d.default)(e);
                        case 8:
                            s = a.sent, c = s.code, o.updateLikeStatus(e, 0 !== c, 0 === c, r), a.next = 16;
                            break;
                        case 13:
                            a.prev = 13, a.t0 = a.catch(5), o.updateLikeStatus(e, !0, !1, r);
                        case 16:
                            o.requesting = !1;
                        case 17:
                        case "end":
                            return a.stop()
                    }
                }), a, null, [
                    [5, 13]
                ])
            })))()
        },
        addLike: function(e, t) {
            var n = arguments,
                a = this;
            return r(i().mark((function r() {
                var o, s, c;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (o = n.length > 2 && void 0 !== n[2] ? n[2] : 0, !a.requesting) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return a.requesting = !0, i.prev = 4, i.next = 7, (0, l.default)({
                                userCheckinId: e,
                                toOpenid: t
                            });
                        case 7:
                            s = i.sent, c = s.code, a.updateLikeStatus(e, 0 === c, 0 === c, o), i.next = 15;
                            break;
                        case 12:
                            i.prev = 12, i.t0 = i.catch(4), a.updateLikeStatus(e, !1, !1, o);
                        case 15:
                            a.requesting = !1;
                        case 16:
                        case "end":
                            return i.stop()
                    }
                }), r, null, [
                    [4, 12]
                ])
            })))()
        },
        onShareAppMessage: function() {
            var e = "每日打卡，进步听得见",
                t = "/pages/checkin/index/index",
                n = this.data,
                a = n.isTeacher,
                i = void 0 !== a && a,
                r = n.isAdmin,
                o = void 0 !== r && r,
                s = n.item,
                u = void 0 === s ? {} : s;
            return (i || o) && (u.date && (e = "每日打卡-".concat(u.date)), t += "?id=".concat(u.uuid)), {
                title: e,
                path: t,
                imageUrl: c.SHARE_IMG_URLS.CHECKIN
            }
        },
        onShareTimeline: function() {
            var e = "每日打卡，进步听得见",
                t = "",
                n = this.data,
                a = n.isTeacher,
                i = void 0 !== a && a,
                r = n.isAdmin,
                o = void 0 !== r && r,
                s = n.item,
                u = void 0 === s ? {} : s;
            return (i || o) && u.date && (e = "每日打卡-".concat(u.date)), (i || o) && u.uuid && (t = "id=".concat(encodeURIComponent(u.uuid))), {
                title: e,
                query: t,
                imageUrl: c.SHARE_IMG_URLS.CHECKIN
            }
        },
        onCheckBoxChange: function(e) {
            var t = e.detail;
            this.setData({
                needFeedback: t
            }), wx.setStorage({
                key: c.CHECKIN_NEED_FEEDBACK_KEY,
                data: t
            })
        },
        getYMD: function() {
            return (new Date).toLocaleDateString("en-CA")
        },
        isMakeupCheckinLimit: function() {
            if (this.deleteFlag) return !1;
            var e = this.getCheckinCount();
            return !0 !== this.data.item.isToday && e >= this.maxCheckinLimit
        },
        addCheckinLimit: function() {
            if (!this.data.item.isToday && !this.deleteFlag) {
                var e = this.getCheckinCount(),
                    t = this.getYMD();
                e += 1, wx.setStorage({
                    key: c.HIS_CHECKIN_LIMIT,
                    data: "".concat(t, ":").concat(e)
                })
            }
        },
        getCheckinCount: function() {
            var e = 0,
                t = this.getYMD();
            try {
                var n = wx.getStorageSync(c.HIS_CHECKIN_LIMIT);
                if (n && n.includes(t)) {
                    var a = n.split("".concat(t, ":"));
                    2 === a.length && /^\d+$/.test(a[1]) && parseInt(a[1], 10) > 0 && (e = parseInt(a[1], 10))
                }
            } catch (e) {}
            return e
        },
        navToHelp: function() {
            wx.navigateTo({
                url: "../help/index"
            })
        },
        tipTapHandler: function() {
            var e = this.data,
                t = e.list;
            if (e.checkined)
                if (null != t && t.length) {
                    var n = decodeURIComponent(t[0].uuid);
                    wx.navigateTo({
                        url: "../comment/index?id=".concat(n)
                    })
                } else wx.showToast({
                    title: "参数错误",
                    icon: "error"
                });
            else this.navToHelp()
        },
        delUserCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, o, s, c, u;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading({
                                title: "正在处理..."
                            }), n.prev = 1, n.next = 4, (0, f.default)(e, {
                                header: {
                                    openid: null === (a = t.auth) || void 0 === a ? void 0 : a.openid,
                                    token: null === (r = t.auth) || void 0 === r ? void 0 : r.token
                                }
                            });
                        case 4:
                            if (o = n.sent, s = o.code, c = o.msg, 0 !== s) {
                                n.next = 14;
                                break
                            }
                            wx.showToast({
                                title: "删除成功",
                                icon: "success"
                            }), u = t.data.list, t.setData({
                                list: u.filter((function(t) {
                                    return t.uuid !== e
                                })),
                                checkined: !1
                            }), t.deleteFlag = !0, n.next = 27;
                            break;
                        case 14:
                            if ("CHECKIN_HAS_CORRECTION" !== c) {
                                n.next = 18;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "该打卡已有纠音记录，不允许删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 18:
                            if ("DELETE_WINDOW_EXPIRED" !== c) {
                                n.next = 22;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "当前仅允许打卡后24小时内删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 22:
                            if ("CHECKIN_IS_GOOD" !== c) {
                                n.next = 26;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "该打卡已评优，不允许删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 26:
                            throw new Error(c || "DELETE_FAILED");
                        case 27:
                            n.next = 32;
                            break;
                        case 29:
                            n.prev = 29, n.t0 = n.catch(1), wx.showToast({
                                title: "删除失败",
                                icon: "error"
                            });
                        case 32:
                            wx.hideLoading();
                        case 33:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [1, 29]
                ])
            })))()
        },
        delete: function(e) {
            var t, n = this,
                a = e.currentTarget.dataset.uuid;
            a ? wx.showModal({
                content: "是否删除打卡？",
                confirmText: "确认删除",
                cancelText: "再想想",
                complete: (t = r(i().mark((function e(t) {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t.confirm && n.delUserCheckin(a);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e) {
                    return t.apply(this, arguments)
                })
            }) : wx.showToast({
                title: "参数错误"
            })
        },
        showDeleteRuleTips: function() {
            wx.showModal({
                title: "删除说明",
                content: "1. 打卡后24小时内可删除。2. 已评优的打卡不允许删除。3. 已有纠音记录的打卡不允许删除。",
                showCancel: !1
            })
        },
        showSettingPanel: function() {
            this.setData({
                showSettingPanel: !0
            }, (function() {
                s.default.sum("checkin_showSettingPanel")
            }))
        },
        onClose: function() {
            this.setData({
                showSettingPanel: !1
            })
        },
        onChange: function(t) {
            var n = this,
                a = t.currentTarget.dataset.key,
                i = t.detail;
            this.setData(e({}, a, i), (function() {
                n.updateSetting(), s.default.sum("checkin_play_setting_".concat(a, "_").concat(i))
            }))
        },
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: c.CHECKIN_PLAY_SETTING_KEY,
                success: function(t) {
                    var n = t.data;
                    e.setData({
                        sentenceRepeatCount: n.sentenceRepeatCount || 1,
                        mode: n.mode || "normal"
                    })
                }
            }), e.useWebAudio = (0, o.isUseWebAudio)()
        },
        updateSetting: function() {
            var e = this.data,
                t = e.sentenceRepeatCount,
                n = void 0 === t ? 1 : t,
                a = e.mode,
                i = {
                    sentenceRepeatCount: n,
                    mode: void 0 === a ? "normal" : a
                };
            wx.setStorage({
                key: c.CHECKIN_PLAY_SETTING_KEY,
                data: i
            })
        },
        navToVocabulary: function(e) {
            var t = e.currentTarget.dataset.uuid;
            wx.navigateTo({
                url: "/pages/vocabulary/detail/index?id=".concat(t)
            })
        },
        getFavState: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, g.default)("checkin", e.id);
                        case 3:
                            if (n = t.sent, a = n.code, r = n.data.id, 0 !== a) {
                                t.next = 10;
                                break
                            }
                            e.setData({
                                favId: r
                            }), t.next = 11;
                            break;
                        case 10:
                            throw "error";
                        case 11:
                            t.next = 15;
                            break;
                        case 13:
                            t.prev = 13, t.t0 = t.catch(0);
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 13]
                ])
            })))()
        },
        favHandle: function() {
            var e = this.data.favId;
            e ? this.doDeleteFav(e) : this.doAddFav()
        },
        doDeleteFav: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, (0, m.default)(e);
                        case 3:
                            a = n.sent, 1 === (null == (r = a.data) ? void 0 : r.removed) && t.setData({
                                favId: 0
                            }), n.next = 10;
                            break;
                        case 8:
                            n.prev = 8, n.t0 = n.catch(0);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [0, 8]
                ])
            })))()
        },
        doAddFav: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, v.default)({
                                bid: e.data.item.uuid,
                                category: "checkin"
                            });
                        case 2:
                            n = t.sent, null != (a = n.data) && a.id && (e.setData({
                                favId: a.id
                            }), wx.showToast({
                                title: "收藏成功",
                                icon: "success"
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        stopPlayAudio: function() {
            o.playAudio.stop(), o.playAudio.destroy()
        },
        onDrag: function(e) {
            if (this.lastTimeStamp && e.timeStamp - this.lastTimeStamp < 10) console.log("频率限制");
            else {
                var t;
                if (this.isDraging = !0, this.lastDragTimeStamp && e.timeStamp - this.lastTimeStamp > 500)
                    if (null != this && null !== (t = this.audioIns) && void 0 !== t && t.duration) {
                        var n = this.audioIns.duration * e.detail.value / 100;
                        this.setData({
                            fmtCurrentTime: P(n)
                        })
                    }
                this.lastDragTimeStamp = e.timeStamp
            }
        },
        onDragChange: function(e) {
            this.isDraging = !1, this.currentTime = e.detail
        },
        onDragEnd: function(e) {
            var t;
            if (console.log("onDragEnd", e), this.lastTimeStamp = e.timeStamp, this.isDraging = !1, this.audioIns) {
                if (this.isDraging = !1, null != this && null !== (t = this.audioIns) && void 0 !== t && t.duration) {
                    var n = Number((this.audioIns.duration * this.currentTime / 100).toFixed(6));
                    this.audioIns.seek(n), !0 !== this.data.isPlayingSentence && this.audioIns.play(), this.stopPlayByWord()
                }
            } else this.setData({
                currentValue: 0
            })
        },
        stopPlayByWord: function() {
            this.data.isPlayingByWord && this.resetCurrent(), this.stopPlayAudio()
        },
        stopSentensePlay: function() {
            this.setData({
                isPlayingSentence: !1
            }), this.audioIns && this.audioIns.pause()
        },
        playSentenseHandler: function(e) {
            var t, n, a = e.currentTarget.dataset.source,
                i = this.data,
                r = i.isPlayingSentence,
                o = i.currSoundSource,
                c = i.item;
            i.isPlayingByWord;
            if (r && a === o && this.audioIns) return this.audioIns.pause(), void(this.isPause = !0);
            if (this.isPause && o === a && this.audioIns) return this.audioIns.play(), void(this.isPause = !1);
            (this.sentencePlayTimes = 0, this.sound = c.sound, "slow" === a) && (this.sound = c.slowSound || (null == c || null === (t = c.teaching) || void 0 === t || null === (n = t.slow) || void 0 === n ? void 0 : n.audio));
            this.setData({
                currSoundSource: a
            }, this.playSentense), s.default.sum("打卡音频播放_" + a)
        },
        playSentense: function() {
            var e = this,
                t = e.data,
                n = t.recording,
                a = t.isPlayingByWord;
            if (n) wx.showToast({
                title: "正在录音",
                icon: "error"
            });
            else {
                if (e.stopPlayAudio(), a && e.resetCurrent(), e.resetCurrent(), this.audioIns) e.audioIns.src = e.sound;
                else {
                    var i = wx.createInnerAudioContext({
                        useWebAudioImplement: !!e.useWebAudio
                    });
                    i.src = e.sound, i.onTimeUpdate((function() {
                        if (console.log("onTimeUpdate", e.isDraging), i.currentTime > -1 == !0 && i.duration > -1 == !0)
                            if (!0 !== e.isDraging) {
                                var t = Math.floor(i.currentTime / i.duration * 100),
                                    n = P(i.duration),
                                    a = P(i.currentTime);
                                e.setData({
                                    currentValue: t,
                                    fmtDuration: n,
                                    fmtCurrentTime: a
                                })
                            } else console.log("进度拖动中");
                        else console.log("currentTime:".concat(i.currentTime, ", duration:").concat(i.duration))
                    })), i.onStop((function() {
                        console.log("stop")
                    })), i.onEnded((function() {
                        console.log("播放结束"), e.setData({
                            isPlayingSentence: !1,
                            currentValue: 0
                        }), e.sentencePlayTimes += 1, e.sentencePlayTimes < e.data.sentenceRepeatCount ? e.playSentense() : e.setData({
                            isPlayingSentence: !1,
                            currentValue: 0
                        })
                    })), i.onPlay((function() {
                        console.log("play", i.duration), e.setData({
                            isPlayingSentence: !0
                        })
                    })), i.onError((function() {
                        console.log("播放失败"), e.setData({
                            isPlayingSentence: !1
                        })
                    })), i.onPause((function() {
                        console.log("暂停播放"), e.setData({
                            isPlayingSentence: !1
                        })
                    })), e.audioIns = i
                }
                e.audioIns.play()
            }
        },
        playerPlayHandler: function(e) {
            this.stopSentensePlay(), this.stopPlayByWord()
        },
        getNewAnswerCount: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, w.default)();
                        case 3:
                            n = t.sent, (a = n.data).count > 0 && e.setData({
                                feedbackCount: a.count
                            }), t.next = 10;
                            break;
                        case 8:
                            t.prev = 8, t.t0 = t.catch(0);
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 8]
                ])
            })))()
        },
        navToFeedback: function() {
            var e = this;
            wx.navigateTo({
                url: "/pages/checkin/my/index?type=2",
                success: function() {
                    e.setData({
                        feedbackCount: 0
                    })
                }
            })
        },
        getBanners: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r, o, s;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, a = "7b0aeebe-bbfd-492f-9795-d125197f27d9", t.prev = 2, t.next = 5, (0, y.default)(a);
                        case 5:
                            r = t.sent, o = r.data, 0 === r.code && null != o && null !== (s = o[a]) && void 0 !== s && s.length && n.setData({
                                notice: o[a][0].title
                            }), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(2);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 11]
                ])
            })))()
        },
        uploadFileToOSS: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, o, s, c;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            a = e.filePath, r = e.key, o = e.success, s = e.fail, c = t.postPolicy, wx.showLoading({
                                title: "正在上传..."
                            }), wx.uploadFile({
                                url: c.host,
                                filePath: a,
                                name: "file",
                                formData: {
                                    key: r,
                                    policy: c.policy,
                                    OSSAccessKeyId: c.OSSAccessKeyId,
                                    signature: c.signature,
                                    success_action_status: "200"
                                },
                                success: o,
                                fail: s,
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        getOSSPostPolicy: function() {
            var e = arguments,
                t = this;
            return r(i().mark((function n() {
                var a;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (a = e.length > 0 && void 0 !== e[0] && e[0], !t.postPolicy) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return", t.postPolicy);
                        case 3:
                            return a && wx.showLoading({
                                title: "加载中..."
                            }), n.prev = 4, n.next = 7, (0, k.default)();
                        case 7:
                            t.postPolicy = n.sent, n.next = 13;
                            break;
                        case 10:
                            n.prev = 10, n.t0 = n.catch(4), t.postPolicy = null;
                        case 13:
                            return a && wx.hideLoading(), n.abrupt("return", t.postPolicy);
                        case 15:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [4, 10]
                ])
            })))()
        },
        setMode: function() {
            this.setData({
                showModePanel: !0
            })
        },
        hideModePanel: function() {
            this.setData({
                showModePanel: !1
            })
        },
        onShow: function() {
            this.refreshDisplayPreferences()
        }
    });
