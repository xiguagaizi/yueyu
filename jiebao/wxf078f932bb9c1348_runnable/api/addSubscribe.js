Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, u) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.FEEDBACK_URL, "/subscribe"),
            method: "PUT",
            apiName: "addSubscribe",
            data: {
                uuid: r,
                tid: u
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");