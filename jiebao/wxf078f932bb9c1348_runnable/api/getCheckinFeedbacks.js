Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CHECKIN_FEEDBACK_URL, "?id=").concat(r).concat(n ? "&newAnswer=1" : ""),
            method: "GET",
            apiName: "getCheckinFeedbacks"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");