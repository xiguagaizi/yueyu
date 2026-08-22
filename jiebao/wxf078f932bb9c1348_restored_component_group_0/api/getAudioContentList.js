Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = n || {},
            i = a.page,
            r = void 0 === i ? 1 : i,
            d = a.pageSize,
            u = void 0 === d ? 10 : d,
            p = a.category,
            l = void 0 === p ? "" : p,
            g = a.collection,
            s = void 0 === g ? "" : g,
            m = a.collectionId,
            h = void 0 === m ? "" : m,
            I = a.tag,
            v = void 0 === I ? "" : I,
            C = a.tagId,
            U = void 0 === C ? "" : C,
            b = e(a, c),
            R = ["page=".concat(Math.max(1, Number(r) || 1)), "pageSize=".concat(Math.max(1, Math.min(30, Number(u) || 10)))];
        l && R.push("category=".concat(encodeURIComponent(l)));
        s && R.push("collection=".concat(encodeURIComponent(s)));
        h && R.push("collectionId=".concat(encodeURIComponent(h)));
        v && R.push("tag=".concat(encodeURIComponent(v)));
        U && R.push("tagId=".concat(encodeURIComponent(U)));
        return (0, t.requestWidthAuth)({
            method: "GET",
            url: "".concat(o.AUDIO_CONTENT_LIST_URL, "?").concat(R.join("&")),
            apiName: "getAudioContentList"
        }, b)
    };
    var e = require("../@babel/runtime/helpers/objectWithoutProperties"),
        o = require("../commons/config"),
        t = require("../utils/login"),
        c = ["page", "pageSize", "category", "collection", "collectionId", "tag", "tagId"];