Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.FEEDBACK_URL, "?page=").concat(r, "&pageSize=").concat(o),
            apiName: "getMyFeedbacks"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");