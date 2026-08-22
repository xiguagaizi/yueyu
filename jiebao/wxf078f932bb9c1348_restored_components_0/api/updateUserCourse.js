Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: e.USER_COURSE_SETTING_URL,
            method: "POST",
            apiName: "updateUserCourseSetting",
            data: r
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");