Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            c = i(e({
                courseId: r,
                section: o
            }, u));
        return (0, n.requestWidthAuth)({
            method: "GET",
            url: "".concat(t.GET_WORD_LIST_URL, "?").concat(c),
            apiName: "getWordList"
        })
    };
    var e = require("../@babel/runtime/helpers/objectSpread2"),
        r = require("../@babel/runtime/helpers/slicedToArray");
    require("../@babel/runtime/helpers/Objectentries");
    var t = require("../commons/config"),
        n = require("../utils/login");

    function i(e) {
        return Object.entries(e).filter((function(e) {
            var t = r(e, 2)[1];
            return null != t && "" !== t
        })).map((function(e) {
            var t = r(e, 2),
                n = t[0],
                i = t[1];
            return "".concat(n, "=").concat(encodeURIComponent(i))
        })).join("&")
    }