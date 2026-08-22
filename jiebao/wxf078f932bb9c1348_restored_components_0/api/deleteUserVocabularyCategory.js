Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.USER_VOCABULARY_CATEGORY_URL, "/").concat(r),
            method: "DELETE",
            apiName: "deleteUserVocabularyCategory"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");