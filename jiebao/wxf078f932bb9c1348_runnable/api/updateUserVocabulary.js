Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, u) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.USER_VOCABULARY_URL, "/").concat(r),
            method: "PUT",
            apiName: "updateUserVocabulary",
            data: u
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");