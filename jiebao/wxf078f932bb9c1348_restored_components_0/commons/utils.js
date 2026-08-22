Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.clearLoginInfo = function() {
        wx.removeStorage({
            key: r.LOGIN_LS_KEY
        })
    }, exports.getAudioBasePath = function() {
        var e = s() || r.VOICE_SCHEME.FEMALE;
        return "".concat(r.CLOUD_STORAGE_HTTP_BASE_URL, "/audios/").concat(e === r.VOICE_SCHEME.FEMALE ? "neoi" : "jyutnet")
    }, exports.getLegacy = function() {
        try {
            var e = wx.getStorageSync(r.IS_LEGACY);
            return "boolean" == typeof e && e
        } catch (e) {
            return !1
        }
    }, exports.getLoginInfo = function() {
        var e = null;
        try {
            e = wx.getStorageSync(r.LOGIN_LS_KEY)
        } catch (e) {}
        return e
    }, exports.getPinyinScheme = function() {
        var e = r.PINYIN_SCHEME.JYUTPING;
        try {
            var t = wx.getStorageSync(r.PINYIN_SCHEME_KEY);
            Object.keys(r.PINYIN_SCHEME).includes(t) && (e = t)
        } catch (e) {}
        return e
    }, exports.getRubyDisplayStyle = function() {
        var e = r.RUBY_DISPLAY_STYLE.ANNOTATED;
        try {
            var t = wx.getStorageSync(r.RUBY_DISPLAY_STYLE_KEY);
            Object.values(r.RUBY_DISPLAY_STYLE).includes(t) && (e = t)
        } catch (e) {}
        return e
    }, exports.getVip = function() {
        try {
            var e = wx.getStorageSync(r.IS_VIP);
            return "boolean" == typeof e && e
        } catch (e) {
            return !1
        }
    }, exports.getVoiceScheme = s, exports.isUseWebAudio = function() {
        var e = getApp();
        if (e.hasOwnProperty("useWebAudio")) return e.useWebAudio;
        var t = !1;
        try {
            var n = wx.getStorageSync(r.USE_WEB_AUDIO);
            n && (t = n)
        } catch (e) {}
        return e.useWebAudio = t, e.useWebAudio
    }, exports.jyutpingToGuangping = function(e) {
        var t, n, u, i, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            s = (o(t = {}, r.PINYIN_SCHEME.GUANGPIN, {
                gw: "gu",
                kw: "ku",
                j: "y"
            }), o(t, r.PINYIN_SCHEME.JIAOYUAN, {
                z: "dz",
                c: "ts"
            }), o(t, r.PINYIN_SCHEME.YELU, {
                z: "j",
                c: "ch",
                j: "y"
            }), o(t, r.PINYIN_SCHEME.LXX, {
                z: "j",
                c: "ch",
                j: "y"
            }), t),
            g = (o(n = {}, r.PINYIN_SCHEME.GUANGPIN, {
                aa: "a",
                aai: "ai",
                aau: "ao",
                aam: "am",
                aan: "an",
                aang: "ang",
                aap: "ab",
                aat: "ad",
                aak: "ag",
                ai: "ei",
                au: "eo",
                am: "em",
                an: "en",
                ang: "eng",
                ap: "eb",
                at: "ed",
                ak: "eg",
                e: "é",
                ei: "éi",
                eu: "éo",
                em: "ém",
                en: "én",
                eng: "éng",
                ep: "éb",
                et: "éd",
                ek: "ég",
                ip: "ib",
                it: "id",
                ik: "ig",
                ok: "og",
                ut: "ud",
                uk: "ug",
                oe: "ê",
                oeng: "êng",
                oek: "êg",
                oet: "-",
                eoi: "êu",
                eon: "ên",
                eot: "êd",
                yu: "ü",
                yun: "ün",
                yut: "üd"
            }), o(n, r.PINYIN_SCHEME.JIAOYUAN, {
                oek: "oek",
                oet: "-",
                eoi: "oey",
                eon: "oen",
                yu: "y",
                yun: "yn",
                yut: "yt"
            }), o(n, r.PINYIN_SCHEME.YELU, {
                aa: "a",
                oe: "eu",
                oeng: "eung",
                oek: "euk",
                oet: "-",
                eoi: "eui",
                un: "eun",
                eot: "eut"
            }), o(n, r.PINYIN_SCHEME.LXX, {
                aa: "a",
                o: "oh",
                ou: "o",
                u: "oo",
                ui: "ooi",
                un: "oon",
                ut: "oot",
                oe: "euh",
                oeng: "eung",
                oek: "euk",
                oet: "eut",
                eoi: "ui",
                eon: "un",
                eot: "ut",
                yu: "ue",
                yun: "uen",
                yut: "uet"
            }), n),
            p = /^(b|p|m|f|d|t|n|l|g|k|h|z|c|s|j|gw|kw|ng|w)?(aa|aai|aau|aam|aan|aang|aap|aat|aak|ai|au|am|an|ang|ap|at|ak|e|ei|eu|em|eng|ep|ek|i|iu|im|in|ing|ip|it|ik|o|oi|ou|on|ong|ot|ok|oe|oeng|oek|eoi|eon|eot|u|ui|un|ung|ut|uk|yu|yun|yut|m|ng)(\d{1})$/,
            y = e.match(p);
        if (!y) return e;
        var E = a(y, 4),
            S = E[1],
            l = void 0 === S ? "" : S,
            I = E[2],
            d = E[3],
            _ = (null === (u = s[c]) || void 0 === u ? void 0 : u[l]) || l,
            v = (null === (i = g[c]) || void 0 === i ? void 0 : i[I]) || I;
        if (c === r.PINYIN_SCHEME.GUANGPIN) {
            if (v.startsWith("ü") || v.startsWith("i")) switch (_) {
                case "z":
                    _ = "j";
                    break;
                case "c":
                    _ = "q";
                    break;
                case "s":
                    _ = "x"
            }["j", "q", "x", "y"].includes(_) && (v = v.replace("ü", "u"))
        }
        return "".concat(_).concat(v).concat(d)
    }, exports.navBack = function() {
        getCurrentPages().length > 1 ? wx.navigateBack() : i()
    }, exports.navToHome = i, exports.navToIAP = function() {
        wx.navigateTo({
            url: r.IAP_PATH
        })
    }, exports.navToOpenVip = function() {
        wx.navigateTo({
            url: "/pages/pay/vip/index"
        })
    }, exports.playAudio = c, exports.setLegacy = p, exports.setLoginInfo = function(e) {
        wx.setStorage({
            data: e,
            key: r.LOGIN_LS_KEY
        })
    }, exports.setPinyinScheme = function(e) {
        var t = !1;
        try {
            Object.keys(r.PINYIN_SCHEME).includes(e) && (wx.setStorageSync(r.PINYIN_SCHEME_KEY, e), t = !0)
        } catch (e) {}
        return t
    }, exports.setRubyDisplayStyle = function(e) {
        var t = !1;
        try {
            Object.values(r.RUBY_DISPLAY_STYLE).includes(e) && (wx.setStorageSync(r.RUBY_DISPLAY_STYLE_KEY, e), t = !0)
        } catch (e) {}
        return t
    }, exports.setUseWebAudio = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        try {
            wx.setStorageSync(r.USE_WEB_AUDIO, e);
            var t = getApp();
            t.useWebAudio = e
        } catch (e) {
            return !1
        }
        return !0
    }, exports.setVip = g, exports.setVoiceScheme = function(e) {
        var t = !1;
        try {
            if (Object.keys(r.VOICE_SCHEME).includes(e)) wx.setStorageSync(r.VOICE_SCHEME_KEY, e), t = !0, getApp().VOICE_SCHEME = e
        } catch (e) {}
        return t
    }, exports.timestampToYyyyMmDd = function(e) {
        return new Date(e).toLocaleDateString("sv-SE")
    }, exports.updateVipStatus = function() {
        return y.apply(this, arguments)
    };
    var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../@babel/runtime/helpers/asyncToGenerator");
    require("../@babel/runtime/helpers/Objectvalues"), require("../@babel/runtime/helpers/Arrayincludes");
    var n, a = require("../@babel/runtime/helpers/slicedToArray"),
        o = require("../@babel/runtime/helpers/defineProperty"),
        r = require("./config"),
        u = (n = require("../api/getUserRightInfo")) && n.__esModule ? n : {
            default: n
        };

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.reLaunch({
            url: "".concat(r.HOME_PATH, "?from=").concat(e.from || "")
        })
    }

    function c(e, t, n) {
        var a = t || function() {},
            o = n || function() {},
            r = getApp(),
            u = r.audio;
        if (u) try {
            var i, s;
            null === (i = u) || void 0 === i || i.stop(), null === (s = u) || void 0 === s || s.destroy()
        } catch (e) {}
        c.t && clearTimeout(c.t), (u = wx.createInnerAudioContext({
            useWebAudioImplement: null == r ? void 0 : r.isOHOS
        })).src = e, u.onCanplay((function() {
            u.play()
        })), u.onEnded(a), u.onError(o), r.audio = u
    }

    function s() {
        var e = r.VOICE_SCHEME.FEMALE;
        try {
            var t = wx.getStorageSync(r.VOICE_SCHEME_KEY);
            Object.keys(r.VOICE_SCHEME).includes(t) && (e = t)
        } catch (e) {}
        return e
    }

    function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wx.setStorageSync(r.IS_VIP, e), getApp().globalData.isVip = e
    }

    function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wx.setStorageSync(r.IS_LEGACY, e), getApp().globalData.isLegacy = e
    }

    function y() {
        return (y = t(e().mark((function t() {
            var n, a;
            return e().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, (0, u.default)();
                    case 3:
                        n = e.sent, "boolean" == typeof(a = n.data).status && g(a.status), "boolean" == typeof a.isLegacyUser && p(a.isLegacyUser), e.next = 12;
                        break;
                    case 9:
                        e.prev = 9, e.t0 = e.catch(0), console.error(e.t0);
                    case 12:
                    case "end":
                        return e.stop()
                }
            }), t, null, [
                [0, 9]
            ])
        })))).apply(this, arguments)
    }
    c.destroy = function() {
        var e = getApp().audio;
        c.t && clearTimeout(c.t), null == e || e.destroy()
    }, c.stop = function() {
        var e = getApp().audio;
        e && e.stop()
    };