var i, t = require("./commons/utils"),
        o = (i = require("./utils/monitor")) && i.__esModule ? i : {
            default: i
        };
    App({
        onLaunch: function(i) {
            var t, o;
            this.options = i, wx.setInnerAudioOption && wx.setInnerAudioOption({
                obeyMuteSwitch: !1
            }), this.deviceInfo = wx.getDeviceInfo(), this.isOHOS = "ohos" === (null === (t = this.deviceInfo) || void 0 === t ? void 0 : t.platform), this.nativeLoginBridge = this.isNativeLoginLaunch(i), this.nativeLoginBridge || null != i && null !== (o = i.query) && void 0 !== o && o.ticket && (this.ohosCheckin = !0)
        },
        onShow: function() {
            this.isNativeLoginBridgeActive() || this.ohosCheckin || this.updateVipStatus()
        },
        onHide: function() {
            var i;
            this.isNativeLoginBridgeActive() || null !== (i = this.deviceInfo) && void 0 !== i && i.platform && o.default.sum("flatform_".concat(this.deviceInfo.platform))
        },
        isNativeLoginLaunch: function() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = String((null == i ? void 0 : i.path) || ""),
                o = (null == i ? void 0 : i.query) || {};
            return "1" === o.nativeLogin || "pages/app/native-login/index" === t
        },
        isNativeLoginBridgeActive: function() {
            return !0 === this.nativeLoginBridge
        },
        onError: function(i) {
            console.error(i)
        },
        isLegacy: function() {
            return "boolean" == typeof this.globalData.isLegacy || (this.globalData.isLegacy = (0, t.getLegacy)()), this.globalData.isLegacy
        },
        updateVipStatus: function() {
            (0, t.updateVipStatus)()
        },
        setSaaAUserId: function() {},
        globalData: {
            isVip: null,
            notAllowAudio: !1,
            notAllowVideo: !1
        }
    });