Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, t.requestWidthAuth)({
            url: e.TEACHER_STATUS_URL,
            method: "GET",
            apiName: "getTeacherStatus"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");