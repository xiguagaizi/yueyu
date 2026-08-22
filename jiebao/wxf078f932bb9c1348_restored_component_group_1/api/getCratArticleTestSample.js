Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = r || {},
            c = i.writtenCategory,
            l = void 0 === c ? "" : c,
            a = i.spokenCategory,
            p = void 0 === a ? "" : a,
            s = i.writtenCollection,
            u = void 0 === s ? "" : s,
            C = i.spokenCollection,
            d = void 0 === C ? "" : C,
            g = e(i, n),
            h = [];
        l ? h.push("writtenCategory=".concat(encodeURIComponent(l))) : u && h.push("writtenCollection=".concat(encodeURIComponent(u)));
        p ? h.push("spokenCategory=".concat(encodeURIComponent(p))) : d && h.push("spokenCollection=".concat(encodeURIComponent(d)));
        var m = h.length ? "?".concat(h.join("&")) : "";
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(o.CRAT_ARTICLE_TEST_SAMPLE_URL).concat(m),
            apiName: "getCratArticleTestSample"
        }, g)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        o = require("../commons/config"),
        t = require("../utils/login"),
        n = ["writtenCategory", "spokenCategory", "writtenCollection", "spokenCollection"];