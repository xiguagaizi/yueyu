Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var i = r.page,
            o = r.pageSize;
        r.filter, r.sort;
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.ORDER_LIST_URL, "?page=").concat(i, "&pageSize=").concat(o),
            apiName: "getOrderList"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");