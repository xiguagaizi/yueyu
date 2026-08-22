Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, c) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.GET_MY_FEEDBACK_CHECKINS_URL, "?page=").concat(r, "&pageSize=").concat(c),
            method: "GET",
            apiName: "getMyFeedbackCheckins"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");