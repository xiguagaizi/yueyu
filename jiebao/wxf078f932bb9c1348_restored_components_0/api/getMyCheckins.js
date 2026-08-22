Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        return (0, t.requestWidthAuth)({
            url: "".concat(e.GET_MY_CHECKINS_URL, "?page=").concat(r, "&pageSize=").concat(o),
            method: "GET",
            apiName: "getMyCheckins"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");