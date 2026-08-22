Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.TEACHER_RELATIONS_URL, "/unbind"),
            method: "POST",
            apiName: "unbindTeacherStudent",
            data: r
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");