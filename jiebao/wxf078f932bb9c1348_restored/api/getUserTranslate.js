Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        return (0, e.requestWidthAuth)({
            method: "GET",
            url: "".concat(t.USER_TRANSLATE_URL, "?page=").concat(r, "&pageSize=").concat(o),
            apiName: "getUserTranslate"
        })
    };
    var e = require("../utils/login"),
        t = require("../commons/config");