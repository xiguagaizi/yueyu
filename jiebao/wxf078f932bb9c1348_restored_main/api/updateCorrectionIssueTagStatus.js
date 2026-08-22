Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        if (!r) return Promise.reject(new Error("MISSING_TAG_KEY"));
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CORRECTION_ISSUE_ENTRY_STATUS_URL, "/tag/").concat(encodeURIComponent(r), "/status"),
            method: "POST",
            data: o,
            apiName: "updateCorrectionIssueTagStatus"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");