Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.USER_COURSE_URL, "/").concat(r),
            apiName: "getUserCourseDetail"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");