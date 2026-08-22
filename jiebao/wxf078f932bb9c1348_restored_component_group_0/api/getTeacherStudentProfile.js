Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.TEACHER_RELATIONS_URL, "/profile?id=").concat(encodeURIComponent(o)),
            method: "GET",
            apiName: "getTeacherStudentProfile"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");