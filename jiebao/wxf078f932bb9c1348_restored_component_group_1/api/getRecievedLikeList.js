Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(i) {
        var r = i.page,
            a = i.pageSize;
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.LIKE_URL, "?page=").concat(r, "&pageSize=").concat(a),
            apiName: "getRecievedLikeList"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");