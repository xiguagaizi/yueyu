Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "female",
            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "+0%";
        return (0, e.requestWidthAuth)({
            method: "POST",
            url: t.TEXT_TO_SPEECH_URL,
            apiName: "textToSpeechV2",
            data: {
                text: r,
                lang: o,
                voice: i,
                rate: u
            }
        })
    };
    var e = require("../utils/login"),
        t = require("../commons/config");