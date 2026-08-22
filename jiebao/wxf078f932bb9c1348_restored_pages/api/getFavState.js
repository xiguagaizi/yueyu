Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(a, r) {
        if ("object" === e(a) && null !== a) {
            var n = a.targetUid,
                c = void 0 === n ? "" : n,
                i = a.targetUuid,
                u = void 0 === i ? "" : i,
                d = a.targetBizType,
                p = void 0 === d ? "" : d,
                s = [];
            c && s.push("targetUid=".concat(encodeURIComponent(c))), u && s.push("targetUuid=".concat(encodeURIComponent(u))), p && s.push("targetBizType=".concat(encodeURIComponent(p)));
            var l = s.length ? "?".concat(s.join("&")) : "";
            return (0, o.requestWidthAuth)({
                url: "".concat(t.FAVORITE_URL, "/state/items").concat(l),
                method: "GET",
                apiName: "getFavState"
            })
        }
        var g = a;
        return (0, o.requestWidthAuth)({
            url: "".concat(t.FAVORITE_URL, "/").concat(g, "/").concat(r),
            method: "GET",
            apiName: "getFavState"
        })
    };
    var e = require("../@babel/runtime/helpers/typeof"),
        t = require("../commons/config"),
        o = require("../utils/login");