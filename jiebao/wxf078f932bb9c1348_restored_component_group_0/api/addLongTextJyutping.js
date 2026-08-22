Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, u) {
        var i = {
            title: r,
            contentV2: u
        };
        return (0, t.requestWidthAuth)({
            url: e.LONG_TEXT_JYUTPING_URL,
            method: "POST",
            apiName: "addLongTextJyutping",
            data: i
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");