Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, r.requestWidthAuth)({
            url: e.USER_VOCABULARY_CATEGORY_URL,
            method: "GET",
            apiName: "getUserVocabularyCategories"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");