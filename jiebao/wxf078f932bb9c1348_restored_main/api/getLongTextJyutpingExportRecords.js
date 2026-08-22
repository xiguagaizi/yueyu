Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r, o) {
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: e.LONG_TEXT_JYUTPING_EXPORT_RECORDS_URL,
            data: {
                page: r,
                pageSize: o
            },
            apiName: "getLongTextJyutpingExportRecords"
        })
    };
    var e = require("../commons/config"),
        t = require("../utils/login");