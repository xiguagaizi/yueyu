Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, a) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.USER_VOCABULARY_CATEGORY_URL, "/").concat(r, "/migrate"),
            method: "POST",
            apiName: "migrateUserVocabularyCategory",
            data: {
                targetUuid: a
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");