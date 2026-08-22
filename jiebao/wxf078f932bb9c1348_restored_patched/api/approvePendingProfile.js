Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: "".concat(e.MPUSER_PENDING_PROFILES_URL, "/approve"),
            method: "POST",
            data: {
                openid: t
            },
            apiName: "approvePendingProfile"
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");