Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(e) {
        var n = e.k,
            a = e.page,
            r = e.pageSize,
            c = e.name,
            i = e.singer,
            u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = t({
                k: n,
                page: a,
                pageSize: r,
                name: c,
                singer: i
            });
        return (0, o.requestWidthAuth)({
            method: "GET",
            url: s,
            apiName: "searchSongs"
        }, u)
    };
    (e = require("../utils/request")) && e.__esModule;
    var e, n = require("../commons/config"),
        o = require("../utils/login");

    function t(e) {
        var o = e.k,
            t = e.page,
            a = e.pageSize,
            r = e.name,
            c = e.singer,
            i = ["page=".concat(t), "pageSize=".concat(a), "k=".concat(encodeURIComponent(o || ""))];
        return r && i.push("name=".concat(encodeURIComponent(r))), c && i.push("singer=".concat(encodeURIComponent(c))), "".concat(n.SEARCH_SONGS_URL, "?").concat(i.join("&"))
    }