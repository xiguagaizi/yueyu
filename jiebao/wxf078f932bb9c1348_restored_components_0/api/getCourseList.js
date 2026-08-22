Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.COURSE_URL),
            apiName: "getCourseList"
        }, r)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");