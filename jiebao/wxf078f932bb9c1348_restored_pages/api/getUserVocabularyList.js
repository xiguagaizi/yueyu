Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, a, u, i) {
        var o = {
            page: r,
            pageSize: a
        };
        u && (o.status = u);
        i && (o.category = i);
        return (0, t.requestWidthAuth)({
            url: e.USER_VOCABULARY_URL,
            method: "GET",
            apiName: "getUserVocabularyList",
            data: o
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");