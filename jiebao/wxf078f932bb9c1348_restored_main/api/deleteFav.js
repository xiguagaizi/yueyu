Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.FAVORITE_URL, "/").concat(r),
            method: "DELETE",
            apiName: "deleteFav"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");