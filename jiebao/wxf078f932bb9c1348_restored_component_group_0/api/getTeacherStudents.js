Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(n) {
        var o = function() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.entries(r).filter((function(r) {
                    var t = e(r, 2)[1];
                    return null != t
                }));
            if (!t.length) return "";
            var n = t.map((function(r) {
                var t = e(r, 2),
                    n = t[0],
                    o = t[1];
                return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(o))
            })).join("&");
            return "?".concat(n)
        }(n);
        return (0, t.requestWidthAuth)({
            url: "".concat(r.TEACHER_RELATIONS_URL).concat(o),
            method: "GET",
            apiName: "getTeacherStudents"
        })
    };
    var e = require("../@babel/runtime/helpers/slicedToArray");
    require("../@babel/runtime/helpers/Objectentries");
    var r = require("../commons/config"),
        t = require("../utils/login");