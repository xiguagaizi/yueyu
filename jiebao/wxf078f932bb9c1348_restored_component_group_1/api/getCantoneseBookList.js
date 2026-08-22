Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o, r) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CANTONESE_BOOK_URL, "?page=").concat(o, "&pageSize=").concat(r),
            apiName: "getCantoneseBookList"
        }, i)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");