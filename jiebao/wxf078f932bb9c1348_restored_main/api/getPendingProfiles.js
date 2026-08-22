Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = o.page,
            r = void 0 === i ? 1 : i,
            n = o.pageSize,
            a = void 0 === n ? 20 : n,
            c = ["page=".concat(r), "pageSize=".concat(a)].join("&");
        return (0, t.requestWidthAuth)({
            url: "".concat(e.MPUSER_PENDING_PROFILES_URL, "?").concat(c),
            method: "GET",
            apiName: "getPendingProfiles"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");