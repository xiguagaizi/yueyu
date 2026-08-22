Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.MPUSER_PENDING_PROFILES_URL, "/reject"),
            method: "POST",
            data: {
                openid: r
            },
            apiName: "rejectPendingProfile"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");