Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, e.requestWidthAuth)({
            method: "POST",
            url: r.USER_TRANSLATE_URL,
            apiName: "addUserTranslate",
            data: t
        })
    };
    var e = require("../utils/login"),
        r = require("../commons/config");