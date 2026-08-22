var e = require("../../../commons/utils"),
        i = require("../../../commons/config"),
        t = [{
            id: "poetry",
            title: "古诗词",
            desc: "诗词赏析，单独详情风格",
            icon: "../../../images/home/text.png",
            background: "linear-gradient(180deg, #FFF1DE 0%, #FFF8EE 100%)",
            titleColor: "#A65B00",
            descColor: "#A65B00",
            path: "/pages/audio/list/index?category=poetry&detailType=poetry&title=古诗词"
        }, {
            id: "book",
            title: "粤文读本",
            desc: "精选有声读物，边听边读",
            icon: "../../../images/home/audio-book.png",
            background: "linear-gradient(180deg, #E7F4FF 0%, #F6FBFF 100%)",
            titleColor: "#225C9C",
            descColor: "#225C9C",
            path: "/pages/audio/list/index?category=book&detailType=audio&title=粤文读本"
        }, {
            id: "daily_voice",
            title: "粤语鸡汤",
            desc: "短篇音频图文，轻松跟读",
            icon: "../../../images/home/daily-voice.png",
            background: "linear-gradient(180deg, #E6FBF3 0%, #F5FFFB 100%)",
            titleColor: "#17725E",
            descColor: "#17725E",
            path: "/pages/audio/list/index?category=daily_voice&detailType=audio&title=粤语鸡汤"
        }];

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            i = "string" == typeof e ? e.trim().toLowerCase() : "";
        return i && t.some((function(e) {
            return e.id === i
        })) ? i : ""
    }

    function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!e) return t.slice();
        var i = t.find((function(i) {
                return i.id === e
            })),
            o = t.filter((function(i) {
                return i.id !== e
            }));
        return i ? [i].concat(o) : t.slice()
    }

    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        switch (e) {
            case "book":
                return "原“粤文读本”入口已迁移到这里。";
            case "daily_voice":
                return "原“每日粤听”入口已迁移到这里。";
            default:
                return ""
        }
    }
    Page({
        navBack: e.navBack,
        data: {
            items: t,
            focusId: "",
            noticeText: ""
        },
        onLoad: function() {
            var e, i, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            null === (e = (i = wx).showShareMenu) || void 0 === e || e.call(i, {
                menus: ["shareAppMessage", "shareTimeline"]
            });
            var r = o(t.focus);
            this.setData({
                focusId: r,
                noticeText: a(r),
                items: n(r)
            })
        },
        navToList: function(e) {
            var i, t = ((null == e || null === (i = e.currentTarget) || void 0 === i ? void 0 : i.dataset) || {}).path,
                o = void 0 === t ? "" : t;
            o && wx.navigateTo({
                url: o
            })
        },
        onShareAppMessage: function() {
            return {
                title: "粤语派有声内容",
                path: "/pages/audio/index/index",
                imageUrl: i.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        },
        onShareTimeline: function() {
            return {
                title: "粤语派有声内容",
                query: "",
                imageUrl: i.DEFAULT_AUDIO_CONTENT_COVER_URL
            }
        }
    });