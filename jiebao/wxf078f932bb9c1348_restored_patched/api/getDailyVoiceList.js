Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(i) {
        var o = i.page,
            r = i.pageSize,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.DAILY_VOICE_URL, "?page=").concat(o, "&pageSize=").concat(r),
            apiName: "getDailiVoiceList"
        }, a)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");