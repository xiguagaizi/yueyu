Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(e.CANTONESE_CHARACTER_URL, "/").concat(r),
            apiName: "getCantoneseCharacter"
        }, o)
    };
    var e = require("../commons/config"),
        t = require("../utils/login");