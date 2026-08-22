var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        t = require("../../../commons/utils"),
        i = require("../../../utils/login"),
        o = require("../../../commons/config");
    Page({
        navBack: t.navBack,
        data: {
            hasWechatInstall: !1,
            appIcon: "../../../images/mp-logo.png",
            appName: "",
            checkedAgree: !1,
            loginSuccess: !1
        },
        onHandleLogin: function(e) {
            var n = e.detail;
            console.log("sendphonesms errCode", n.errCode)
        },
        onLoad: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = this;
            wx.miniapp.hasWechatInstall({
                success: function(e) {
                    n.setData({
                        hasWechatInstall: e.hasWechatInstall || !1
                    })
                }
            }), null != e && e.payload && this.handleExternalLogin(e.payload)
        },
        onUnload: function() {
            var e = this.getOpenerEventChannel();
            e && e.emit("__donutLogin__", {
                success: this.data.loginSuccess
            })
        },
        onCheckboxChange: function() {
            this.setData({
                checkedAgree: !this.data.checkedAgree
            })
        },
        onShowAgreement: function(e) {
            var n = e.target.dataset.url;
            wx.navigateTo({
                url: n
            })
        },
        loginFailTips: function() {
            wx.showModal({
                content: "登录失败",
                showCancel: !1,
                complete: function(e) {}
            })
        },
        loginWidhCode: function(o) {
            var a = this;
            return n(e().mark((function n() {
                var r, s, c, u, l, d, h, p, g, f;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return wx.showLoading({
                                title: "登录中..."
                            }), e.prev = 1, e.next = 4, (0, i.requestLogin)(o);
                        case 4:
                            if (r = e.sent, s = r.openid, c = r.token, u = r.nickname, l = r.avatar, d = r.isDelete, h = void 0 !== d && d, p = r.loginType, g = r.unionidReady, f = r.identityRefreshAt, !h) {
                                e.next = 10;
                                break
                            }
                            return wx.showModal({
                                title: "登录失败",
                                content: "此账号已注销，无法再次注册或登录。",
                                showCancel: !1
                            }), wx.hideLoading(), e.abrupt("return");
                        case 10:
                            (0, t.setLoginInfo)({
                                openid: s,
                                token: c,
                                nickname: u,
                                avatar: l,
                                loginType: p,
                                unionidReady: g,
                                identityRefreshAt: f
                            }), wx.showToast({
                                title: "登录成功"
                            }), (0, t.navToHome)({
                                from: "login"
                            }), e.next = 18;
                            break;
                        case 15:
                            e.prev = 15, e.t0 = e.catch(1), a.loginFailTips();
                        case 18:
                            return e.prev = 18, wx.hideLoading(), e.finish(18);
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [1, 15, 18, 21]
                ])
            })))()
        },
        handleExternalLogin: function(e) {
            try {
                var n = JSON.parse(decodeURIComponent(e)),
                    i = n.openid,
                    o = n.token,
                    a = n.nickname,
                    r = n.avatar,
                    s = n.isDelete,
                    c = void 0 !== s && s,
                    u = n.loginType,
                    l = n.unionidReady,
                    d = n.identityRefreshAt;
                if (!i || !o) throw new Error("empty login payload");
                if (c) return void wx.showModal({
                    title: "登录失败",
                    content: "此账号已注销，无法再次注册或登录。",
                    showCancel: !1
                });
                (0, t.setLoginInfo)({
                    openid: i,
                    token: o,
                    nickname: a,
                    avatar: r,
                    loginType: u,
                    unionidReady: l,
                    identityRefreshAt: d
                }), this.setData({
                    loginSuccess: !0
                }), wx.showToast({
                    title: "登录成功"
                }), (0, t.navToHome)({
                    from: "login"
                })
            } catch (e) {
                this.loginFailTips()
            }
        },
        isAgree: function() {
            var e = this;
            return !!this.data.checkedAgree || (this.setData({
                checkboxShake: !0
            }), setTimeout((function() {
                e.setData({
                    checkboxShake: !1
                })
            }), 600), !1)
        },
        weixinLogin: function() {
            var t = this;
            return n(e().mark((function i() {
                var o;
                return e().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (!0 === (o = t).isAgree()) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            wx.showLoading({
                                title: "登录中..."
                            }), wx.weixinAppLogin({
                                success: function(t) {
                                    return n(e().mark((function n() {
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    t.code ? o.loginWidhCode(t.code) : o.loginFailTips();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), n)
                                    })))()
                                },
                                fail: function(e) {
                                    o.loginFailTips()
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return i.stop()
                    }
                }), i)
            })))()
        },
        appleLogin: function() {
            var t = this;
            return n(e().mark((function i() {
                var o;
                return e().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (!0 === (o = t).isAgree()) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            wx.showLoading({
                                title: "登录中..."
                            }), wx.appleLogin({
                                success: function(t) {
                                    return n(e().mark((function n() {
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    t.code ? o.loginWidhCode(t.code) : o.loginFailTips();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), n)
                                    })))()
                                },
                                fail: function() {
                                    o.loginFailTips()
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return i.stop()
                    }
                }), i)
            })))()
        },
        huaweiLogin: function() {
            if (!0 === this.isAgree()) {
                var e = "https://oauth-login.cloud.huawei.com/oauth2/v3/authorize?response_type=code&access_type=offline&state=state_parameter_passthrough_value&client_id=115861443&redirect_uri=".concat(o.HUAWEI_REDIRECT_URI, "&scope=openid+profile");
                wx.navigateTo({
                    url: "/pages/webview/index?url=".concat(encodeURIComponent(e))
                })
            }
        },
        mpLogin: function() {
            var t = this;
            return n(e().mark((function n() {
                var i;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!0 === (i = t).isAgree()) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            wx.showLoading({
                                title: "登录中..."
                            }), wx.weixinMiniProgramLogin({
                                redirectPath: o.HOME_PATH,
                                success: function(e) {
                                    e.code ? i.loginWidhCode(e.code) : i.loginFailTips()
                                },
                                fail: function() {
                                    i.loginFailTips()
                                },
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), n)
            })))()
        }
    });