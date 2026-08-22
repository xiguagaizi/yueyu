Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = n(e);
        return (0, r.requestWidthAuth)({
            url: "".concat(t.CORRECTION_MATERIALS_URL, "/suggestions").concat(o),
            method: "GET",
            apiName: "getCorrectionMaterialSuggestions"
        })
    };
    var e = require("../@babel/runtime/helpers/slicedToArray");
    require("../@babel/runtime/helpers/Objectentries");
    var t = require("../commons/config"),
        r = require("../utils/login");

    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = Object.entries(t).filter((function(t) {
                var r = e(t, 2)[1];
                return null != r && "" !== r
            }));
        return r.length ? "?".concat(r.map((function(t) {
            var r = e(t, 2),
                n = r[0],
                o = r[1];
            return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(o))
        })).join("&")) : ""
    }