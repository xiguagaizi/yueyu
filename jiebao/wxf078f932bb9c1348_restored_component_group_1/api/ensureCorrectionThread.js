Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: "".concat(e.CORRECTION_THREADS_URL, "/ensure"),
            method: "POST",
            data: t,
            apiName: "ensureCorrectionThread"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");