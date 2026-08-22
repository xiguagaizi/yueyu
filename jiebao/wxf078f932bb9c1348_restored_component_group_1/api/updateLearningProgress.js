Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: e.USER_COURSE_UPDATE_PROGRESS_URL,
            method: "POST",
            apiName: "updateLearningProgress",
            data: t
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");