Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: e.USER_VOCABULARY_CATEGORY_URL,
            method: "POST",
            apiName: "addUserVocabularyCategory",
            data: {
                name: t
            }
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");