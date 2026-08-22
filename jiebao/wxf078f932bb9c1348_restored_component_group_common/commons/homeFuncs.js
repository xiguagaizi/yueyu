Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.NAV = exports.HOME_FUNCTIONS = void 0;
    var e = {
            title: "查拼音",
            desc: "查拼音，听发音",
            titleColor: "#5B63D6",
            descColor: "#5B63D6",
            background: "linear-gradient(180deg, #ECEFFF 0%, #F7F7FF 100%)",
            icon: "../../images/home/pinyin-s.png",
            path: "/pages/tools/jyutping/index"
        },
        o = {
            title: "翻译发音",
            desc: "国粤互转，粤语发音",
            titleColor: "#B06A0A",
            descColor: "#B06A0A",
            background: "linear-gradient(180deg, #FFF2DB 0%, #FFF9EE 100%)",
            icon: "../../images/home/trans-s.png",
            path: "/pages/tools/translate/index"
        },
        i = {
            title: "长文注音",
            desc: "标粤拼，听标准发音",
            titleColor: "#0B7869",
            descColor: "#0B7869",
            background: "linear-gradient(180deg, #E4FBF4 0%, #F2FFFC 100%)",
            icon: "../../images/home/longtext-s.png",
            path: "/pages/tools/text-to-jyutping/index/index"
        },
        n = {
            title: "粤拼歌词",
            desc: "哪字不会点哪里",
            titleColor: "#2C67D4",
            descColor: "#2C67D4",
            background: "linear-gradient(180deg, #E4EEFF 0%, #F4F9FF 100%)",
            icon: "../../images/home/song-s.png",
            path: "/pages/songs/search/index"
        },
        a = {
            title: "口语常用字",
            desc: '"噉”、"咁"看着眼熟但分不清，快来学习',
            titleColor: "#1D1E1E",
            descColor: "#626262",
            background: "#ffffff",
            icon: "../../images/home/cantonese-zi.png",
            path: "/pages/learning/lessons/top/zi/index/index"
        },
        t = {
            title: "3000常用字",
            desc: "由浅及深，掌握常用字发音，加强拼音学习",
            titleColor: "#1D1E1E",
            descColor: "#626262",
            background: "#ffffff",
            icon: "../../images/home/abc-blocks.png",
            path: "/pages/learning/lessons/zi/index/index"
        },
        g = {
            title: "入门必学",
            desc: "称呼、问候常用语",
            background: "#526CE3",
            backgroundImage: "../../images/home/changyongzici.png",
            icon: "../../images/home/text.png",
            path: "/pages/learning/base/beginner/list/index"
        },
        s = {
            title: "粤语拼音",
            desc: "粤语九声六调",
            background: "#5FAAFB",
            icon: "../../images/home/board.png",
            backgroundImage: "../../images/home/jyutping.png",
            path: "/pages/learning/base/jyutping/index"
        },
        d = {
            TOOLS: [{
                title: "CRAT专项",
                desc: "粤音朗读测试练习",
                titleColor: "#3559A8",
                descColor: "#3559A8",
                background: "linear-gradient(180deg, #E2F0FF 0%, #EEF9FF 100%)",
                icon: "../../images/home/crat.png",
                path: "/pages/learning/crat/index"
            }, {
                title: "生词本",
                desc: "重点字词学习",
                titleColor: "#2C7879",
                descColor: "#2C7879",
                background: "linear-gradient(180deg, #D9F8EC 0%, #EFFCF8 100%)",
                icon: "../../images/home/scb.png",
                path: "/pages/tools/vocab-notebook/index"
            }, e, o, i, n],
            COURSES: [a, t],
            NEWBIE: [g, s],
            ADVANCED: [{
                title: "粤文读本",
                desc: "精选有声读物，粤字+拼音，学地道粤语",
                icon: "../../images/home/audio-book.png",
                path: "/pages/learning/books/hambaanglaang/index/index"
            }, {
                title: "每日粤听",
                desc: "粤语鸡汤短文",
                icon: "../../images/home/daily-voice.png",
                path: "/pages/voice/index/index"
            }, {
                title: "看视频学粤语",
                desc: "双语字幕+拼音",
                icon: "../../images/home/video.png",
                path: "/pages/video/list/index"
            }]
        };
    exports.HOME_FUNCTIONS = d;
    var l = {
        DICT: e,
        TRANSLATE: o,
        LONG_TEXT_JYUTPING: i,
        JYUTPING_SONG: n,
        CANTONESE_ZI: a,
        ZI3000: t,
        BASE_ZI: g,
        JYUTPING: s,
        CHECKIN: {
            title: "每日打卡",
            icon: "../../images/home/microphone.png",
            path: "/pages/checkin/index/index"
        }
    };
    exports.NAV = l;