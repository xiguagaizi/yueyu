Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(o, r, c) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.FAVORITE_URL, "/?page=").concat(o, "&pageSize=").concat(r, "&category=").concat(c),
            method: "GET",
            apiName: "getMyFavorites"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");