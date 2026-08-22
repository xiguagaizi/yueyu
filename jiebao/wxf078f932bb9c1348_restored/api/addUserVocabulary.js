Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o, s) {
        var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return (0, t.requestWidthAuth)({
            url: e.USER_VOCABULARY_URL,
            method: "POST",
            apiName: "addUserVocabulary",
            data: {
                word: r,
                segments: o,
                status: s,
                categories: u
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");