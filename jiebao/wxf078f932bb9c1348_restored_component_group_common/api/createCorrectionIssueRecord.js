Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: e.CORRECTION_ISSUE_ENTRY_STATUS_URL,
            method: "POST",
            data: t,
            apiName: "createCorrectionIssueRecord"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");