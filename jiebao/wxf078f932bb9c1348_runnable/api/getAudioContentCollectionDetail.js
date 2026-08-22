Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(r) {
        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!r) return Promise.reject(new Error("缺少合集ID"));
        var i = c || {},
            a = i.item,
            s = void 0 === a ? "" : a,
            u = i.accessToken,
            l = void 0 === u ? "" : u,
            d = e(i, n),
            m = [];
        s && m.push("item=".concat(encodeURIComponent(s)));
        l && m.push("accessToken=".concat(encodeURIComponent(l)));
        var p = m.length ? "?".concat(m.join("&")) : "";
        return (0, o.requestWidthAuth)({
            method: "GET",
            url: "".concat(t.AUDIO_CONTENT_COLLECTION_DETAIL_URL, "/").concat(r).concat(p),
            apiName: "getAudioContentCollectionDetail"
        }, d)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        t = require("../commons/config"),
        o = require("../utils/login"),
        n = ["item", "accessToken"];