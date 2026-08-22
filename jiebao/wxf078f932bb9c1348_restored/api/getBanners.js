Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, u) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: e.BANNER_URL,
            data: {
                ids: r
            },
            apiName: "getBanners"
        }, u)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");