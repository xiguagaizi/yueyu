Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(i) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.TEACHER_RELATIONS_URL, "/invite/join"),
            method: "POST",
            apiName: "submitTeacherInviteCode",
            data: i
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");