Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(u) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CHECK_TTS_TASK_URL, "?uuid=").concat(u),
            apiName: "checkIfAudioExists"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");