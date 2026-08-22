Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: e.CRAT_WORD_BUCKETS_URL,
            apiName: "getCratWordBuckets"
        }, r)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");