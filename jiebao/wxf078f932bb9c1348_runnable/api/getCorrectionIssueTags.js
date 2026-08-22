Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        return (0, r.requestWidthAuth)({
            url: e.CORRECTION_ISSUE_TAGS_URL,
            method: "GET",
            apiName: "getCorrectionIssueTags"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");