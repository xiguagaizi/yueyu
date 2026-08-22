Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.CORRECTION_SESSIONS_URL, "/").concat(r, "/messages/").concat(o),
            method: "DELETE",
            apiName: "deleteCorrectionMessage"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");