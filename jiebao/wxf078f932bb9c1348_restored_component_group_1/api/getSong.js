Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.requestWidthAuth)({
            url: "".concat(e.SONG_URL, "/uuid/").concat(r),
            method: "GET",
            apiName: "getSong"
        }, o)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");