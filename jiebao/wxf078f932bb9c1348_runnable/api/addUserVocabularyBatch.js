Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, t.requestWidthAuth)({
            url: "".concat(e.USER_VOCABULARY_URL, "/batch"),
            method: "POST",
            apiName: "addUserVocabularyBatch",
            data: {
                entries: r
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");