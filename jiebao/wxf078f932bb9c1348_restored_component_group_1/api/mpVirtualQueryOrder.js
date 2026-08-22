Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(t) {
        return (0, r.requestWidthAuth)({
            url: e.MP_VIRTUAL_QUERY_ORDER_URL,
            method: "POST",
            apiName: "mpVirtualQueryOrder",
            data: t
        })
    };
    var e = require("../commons/config"),
        r = require("../utils/login");