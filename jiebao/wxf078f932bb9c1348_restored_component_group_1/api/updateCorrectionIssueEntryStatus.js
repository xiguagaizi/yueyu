Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        if (!r) return Promise.reject(new Error("INVALID_RECORD_ID"));
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CORRECTION_ISSUE_ENTRY_STATUS_URL, "/").concat(encodeURIComponent(r), "/status"),
            method: "POST",
            data: o,
            apiName: "updateCorrectionIssueEntryStatus"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");