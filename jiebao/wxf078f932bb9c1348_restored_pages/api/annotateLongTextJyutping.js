Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        return (0, t.requestWidthAuth)({
            url: e.LONG_TEXT_JYUTPING_ANNOTATE_URL,
            method: "POST",
            apiName: "annotateLongTextJyutping",
            data: {
                text: r
            }
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");