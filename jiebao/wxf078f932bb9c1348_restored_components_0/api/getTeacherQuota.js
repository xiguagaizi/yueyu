Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.TEACHER_RELATIONS_URL, "/quota"),
            method: "GET",
            apiName: "getTeacherQuota"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");