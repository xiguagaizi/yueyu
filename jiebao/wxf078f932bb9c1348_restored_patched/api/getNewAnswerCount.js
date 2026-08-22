Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.GET_NEW_ANSWER_COUNT_URL),
            method: "GET",
            apiName: "getNewAnswerCount"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");