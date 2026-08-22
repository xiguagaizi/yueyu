require("../../@babel/runtime/helpers/Arrayincludes");
    var e, t, n = require("../../@babel/runtime/helpers/typeof");
    module.exports = (e = {}, t = function(t, r) {
        if (!e[t]) return require(r);
        if (!e[t].status) {
            var o = e[t].m;
            o._exports = o._tempexports;
            var i = Object.getOwnPropertyDescriptor(o, "exports");
            i && i.configurable && Object.defineProperty(o, "exports", {set: function(e) {
                    "object" === n(e) && e !== o._exports && (o._exports.__proto__ = e.__proto__, Object.keys(e).forEach((function(t) {
                        o._exports[t] = e[t]
                    }))), o._tempexports = e
                },
                get: function() {
                    return o._tempexports
                }
            }), e[t].status = 1, e[t].func(e[t].req, o, o.exports)
        }
        return e[t].m.exports
    }, function(t, n, r) {
        e[t] = {
            status: 0,
            func: n,
            req: r,
            m: {
                exports: {},
                _tempexports: {}
            }
        }
    }(1744818819529, (function(e, t, r) {
        ! function(e, o) {
            "object" == n(r) && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Aegis = o()
        }(this, (function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array ? function(e, t) {
                        e.__proto__ = t
                    } : function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }))(t, n)
            };

            function t(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function o() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                return r
            }
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function(e) {
                    if (null == e) throw new TypeError("Cannot convert first argument to object");
                    for (var t = Object(e), n = 1; n < arguments.length; n++)
                        if (null != (r = arguments[n]))
                            for (var r = Object(r), o = Object.keys(Object(r)), i = 0, a = o.length; i < a; i++) {
                                var s = o[i],
                                    c = Object.getOwnPropertyDescriptor(r, s);
                                null != c && c.enumerable && (t[s] = r[s])
                            }
                    return t
                }
            });
            var i = /_?t(\d)?(imestamp)?=\d+&?/g,
                a = ["aegis.qq.com", "tamaegis.com", "/aegis-sdk", "rumt-", "/flog.core.min.js", "pingfore.qq.com", "pingfore.tencent.com", "zhiyan.tencent-cloud.net", "h.trace.qq.com", "btrace.qq.com", "beacon.qq.com", "dmplog.qq.com", "qq.com/report", "svibeacon.onezapp.com", "cube.weixinbridge.com", "doubleclick.net", "pcmgrmonitor.3g.qq.com", "tdm.qq.com", "report.qqweb.qq.com", "tpstelemetry.tencent.com", "insight.cloud.tencent.com", "facebook.com", "facebook.net", "google", "yahoo.com", "twitter.com", "ga-audiences", "report.idqqimg.com", "arms-retcode.aliyuncs.com", "px.effirst.com", "sentry", "baidu.com", "hot-update.json", "u.c.b.r.o.w.s.e.r", "report.url.cn", "sockjs-node", "m3u8"],
                s = ["ext1", "ext2", "ext3", "level", "trace", "tag", "seq", "code"],
                c = (f.prototype.indexOf = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].callback === t) return n;
                    return -1
                }, f.prototype.on = function(e, t, n) {
                    var r;
                    if (void 0 === n && (n = 0), this) return (r = this.eventsList[e]) || (this.eventsList[e] = [], r = this.eventsList[e]), -1 === this.indexOf(r, t) && r.push({
                        name: e,
                        type: n || 0,
                        callback: t
                    }), this
                }, f.prototype.one = function(e, t) {
                    this.on(e, t, 1)
                }, f.prototype.remove = function(e, t) {
                    if (this) {
                        var n = this.eventsList[e];
                        if (n) {
                            if (t) return n.length && (t = this.indexOf(n, t), n.splice(t, 1)), this;
                            try {
                                delete this.eventsList[e]
                            } catch (e) {}
                        }
                        return null
                    }
                }, f.prototype.clear = function() {
                    this.eventsList = {}
                }, f),
                l = {
                    generateTraceId: p(16),
                    generateSpanId: p(8)
                },
                u = Array(32);

            function f() {
                var e = this;
                this.emit = function(t, n) {
                    if (e) {
                        var r;
                        if (null != (o = e.eventsList[t]) && o.length)
                            for (var o = o.slice(), i = 0; i < o.length; i++) {
                                r = o[i];
                                try {
                                    var a = r.callback.apply(e, [n]);
                                    if (1 === r.type && e.remove(t, r.callback), !1 === a) break
                                } catch (t) {
                                    throw t
                                }
                            }
                        return e
                    }
                }, this.eventsList = {}
            }

            function p(e) {
                return function() {
                    for (var t = 0; t < 2 * e; t++) u[t] = Math.floor(16 * Math.random()) + 48, 58 <= u[t] && (u[t] += 39);
                    return String.fromCharCode.apply(null, u.slice(0, 2 * e))
                }
            }

            function d() {
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (function(e) {
                    return (e ^ (16 * Math.random() & 15) >> e / 4).toString(16)
                }))
            }

            function h() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function g(e) {
                for (var t, n, r, o = "", i = 0, a = (e = String(e)).length % 3; i < e.length;) {
                    if (255 < (t = e.charCodeAt(i++)) || 255 < (n = e.charCodeAt(i++)) || 255 < (r = e.charCodeAt(i++))) throw new TypeError("Failed to execute 'btoa': The string to be encoded contains characters outside of the Latin1 range.");
                    o += v.charAt((t = t << 16 | n << 8 | r) >> 18 & 63) + v.charAt(t >> 12 & 63) + v.charAt(t >> 6 & 63) + v.charAt(63 & t)
                }
                return a ? o.slice(0, a - 3) + "===".substring(a) : o
            }

            function m(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !b.test(e)) throw new TypeError("Failed to execute 'atob': The string to be decoded is not correctly encoded.");
                var t;
                e += "==".slice(2 - (3 & e.length));
                for (var n, r, o = "", i = 0; i < e.length;) t = v.indexOf(e.charAt(i++)) << 18 | v.indexOf(e.charAt(i++)) << 12 | (n = v.indexOf(e.charAt(i++))) << 6 | (r = v.indexOf(e.charAt(i++))), o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                return o
            }

            function y(e) {
                var t, r = "";
                return "object" == n(e) && (t = (e = function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            o = e[r] || "function" == typeof e.get && e.get(r);
                        if (o) return [r, o]
                    }
                    return ["", ""]
                }(e, Object.keys(O)))[0], e = e[1], t) ? O[t](e) : r
            }
            var v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                b = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                E = (x.prototype.generate = function(e, t, n) {
                    if (void 0 === t && (t = {}), this.url = e, !this.isUrlIgnored() && this.isUrlInTraceUrls() && this.traceType) {
                        switch (this.traceType) {
                            case "traceparent":
                                this.traceId = this.createTraceparent();
                                break;
                            case "b3":
                                this.traceId = this.createB3();
                                break;
                            case "sw8":
                                this.traceId = this.createSw8(n);
                                break;
                            case "sentry-trace":
                                this.traceId = this.createSentryTrace();
                                break;
                            default:
                                return console.warn("this trace key " + this.traceType + " is not supported"), void(this.traceId = "")
                        }
                        return t[this.traceType] && (this.traceId = t[this.traceType]), {
                            name: this.traceType,
                            value: this.traceId
                        }
                    }
                }, x.prototype.createTraceparent = function() {
                    var e = l.generateSpanId();
                    return "00-" + l.generateTraceId() + "-" + e + "-0" + Number(1).toString(16)
                }, x.prototype.createB3 = function() {
                    var e = l.generateSpanId();
                    return l.generateTraceId() + "-" + e + "-1"
                }, x.prototype.createSw8 = function(e) {
                    var t = "function" == typeof btoa ? btoa : g,
                        n = void 0 === (n = (e = e || {}).host) ? "" : n,
                        r = (e = void 0 === (e = e.pathname) ? "" : e, h()),
                        o = h();
                    return "1-" + String(t(o)) + "-" + String(t(r)) + "-1-" + String(t("aegis")) + "-" + String(t("1.39.1")) + "-" + String(t(encodeURI(e))) + "-" + String(t(n))
                }, x.prototype.createSentryTrace = function() {
                    var e = d().substring(16);
                    return d() + "-" + e + "-1"
                }, x.prototype.isUrlIgnored = function() {
                    if (Array.isArray(this.ignoreUrls) && 0 !== this.ignoreUrls.length)
                        for (var e = 0, t = this.ignoreUrls; e < t.length; e++) {
                            var n = t[e];
                            if (this.urlMatches(this.url, n)) return !0
                        }
                    return !1
                }, x.prototype.isUrlInTraceUrls = function() {
                    if (!this.urls) return !0;
                    if (Array.isArray(this.urls)) {
                        if (0 === this.urls.length) return !1;
                        for (var e = 0, t = this.urls; e < t.length; e++) {
                            var n = t[e];
                            if (this.urlMatches(this.url, n)) return !0
                        }
                    }
                    return !1
                }, x.prototype.urlMatches = function(e, t) {
                    return "string" == typeof t ? e === t : !!e.match(t)
                }, x),
                O = {
                    sw8: function(e) {
                        var t = "function" == typeof atob ? atob : m;
                        return (e = e.split("-")[1]) ? t(e) : ""
                    },
                    traceparent: function(e) {
                        return e.split("-")[1]
                    },
                    b3: function(e) {
                        return e.split("-")[0]
                    },
                    "sentry-trace": function(e) {
                        return e.split("-")[0]
                    }
                },
                R = function(e) {
                    if (!e || 0 === e.length) return "{}";
                    e = Array.isArray(e) ? e : [e];
                    var t = Object.keys(e[0]),
                        n = {},
                        r = (t.forEach((function(t) {
                            n[t] = e.map((function(e) {
                                return e[t]
                            }))
                        })), n.count = e.length, n);
                    if ("string" == typeof r) return r;
                    try {
                        return JSON.stringify(r, X()) || "undefined"
                    } catch (r) {
                        return "error happen when aegis stringify: \n " + r.message + " \n " + r.stack
                    }
                };

            function x(e, t, n) {
                void 0 === n && (n = null), this.traceType = e, this.ignoreUrls = t, this.urls = n
            }

            function w(e, t) {
                return "string" == typeof e ? e.split("?")[t ? 1 : 0] || "" : e
            }

            function S(e) {
                return "string" == typeof e && /^\//.test(e) ? "https:" === (null === location || void 0 === location ? void 0 : location.protocol) : /^https/.test(e)
            }

            function P(e, t, n) {
                var r, o;
                try {
                    if ("function" == typeof(null == t ? void 0 : t.retCodeHandler)) return {
                        code: void 0 === (i = (o = t.retCodeHandler(e, null == n ? void 0 : n.url, null == n ? void 0 : n.ctx, null == n ? void 0 : n.payload) || {}).code) ? "unknown" : i,
                        isErr: o.isErr
                    };
                    if (!(e = "string" == typeof e ? JSON.parse(e) : e)) return {
                        code: "unknown",
                        isErr: !1
                    };
                    "function" == typeof(null == (r = null == t ? void 0 : t.ret) ? void 0 : r.join) && (Q = [].concat(t.ret.map((function(e) {
                        return e.toLowerCase()
                    }))));
                    var i, a = Object.getOwnPropertyNames(e).filter((function(e) {
                        return -1 !== Q.indexOf(e.toLowerCase())
                    }));
                    return a.length ? {
                        code: "" + (i = "未知" !== (i = e[a[0]]) && "" !== i ? i : "unknown"),
                        isErr: 0 !== i && "0" !== i && "unknown" !== i
                    } : {
                        code: "unknown",
                        isErr: !1
                    }
                } catch (e) {
                    return {
                        code: "unknown",
                        isErr: !1
                    }
                }
            }

            function T(e, t, n) {
                try {
                    var r = "function" == typeof t ? t(e, null == n ? void 0 : n.url) || "" : e;
                    return te(r).slice(0, 102400)
                } catch (e) {
                    return ""
                }
            }

            function k(e, t) {
                return "string" != typeof e || !e || t && -1 < e.indexOf(t) || oe.test(e) || a.some((function(t) {
                    return -1 < e.indexOf(t)
                }))
            }

            function C(e, t) {
                var n, r = [],
                    o = e.config;
                return e.lifeCycle.on("destroy", (function() {
                        r.length = 0
                    })),
                    function(i, a) {
                        Array.isArray(i) ? r = r.concat(i) : r.push(i), t && r.length >= t || e.sendNow && 0 < r.length ? (r = ie(r), a(r.splice(0, r.length)), n && clearTimeout(n)) : (n && clearTimeout(n), n = setTimeout((function() {
                            n = null, 0 < (r = ie(r)).length && a(r.splice(0, r.length))
                        }), o.delay))
                    }
            }

            function N(e, t) {
                return Array.isArray(e) ? t(e.map((function(e) {
                    return t = r(r({}, e), {
                        msg: "string" == typeof e.msg ? e.msg : [].concat(e.msg).map(ee).join(" ")
                    }), s.forEach((function(e) {
                        t[e] || delete t[e]
                    })), t;
                    var t
                }))) : t([r(r({}, e), {
                    msg: "string" == typeof e.msg ? e.msg : ee(e.msg)
                })])
            }

            function A(e, t) {
                return function(n, o) {
                    var i, a, c, l = Array.isArray(n),
                        u = l ? n : [n],
                        f = (e.lifeCycle.emit("beforeRequest", n), e.config.beforeRequest);
                    (u = "function" == typeof f ? u.map((function(e) {
                        try {
                            var n = f({
                                logs: e,
                                logType: t
                            });
                            return (null == n ? void 0 : n.logType) === t && null != n && n.logs ? n.logs : !1 !== n && e
                        } catch (n) {
                            return e
                        }
                    })).filter((function(e) {
                        return !1 !== e
                    })) : u).length && (i = u, n = s, !Array.isArray(i) || i.length <= 1 || (a = [], c = [], !(c = "string" == typeof n ? [n] : n)) || c.length <= 0 || (c.forEach((function(e) {
                        i.forEach((function(t) {
                            null != t && t[e] && a.push(e)
                        }))
                    })), 0 < a.length && (i = i.map((function(e) {
                        var t = {};
                        return a.forEach((function(e) {
                            t[e] = ""
                        })), r(r({}, t), e)
                    })))), u = i, o(l ? u : u[0]))
                }
            }

            function q(e) {
                return function(t, r) {
                    e.lifeCycle.emit("modifyRequest", t);
                    var o = e.config.modifyRequest;
                    if ("function" == typeof o) try {
                        var i = o(t);
                        "object" == n(i) && "url" in i && (t = i)
                    } catch (t) {
                        console.error(t)
                    }
                    r(t)
                }
            }

            function L(e) {
                return function(t, n) {
                    null != (r = e.lifeCycle) && r.emit("afterRequest", t);
                    var r = (e.config || {}).afterRequest;
                    "function" == typeof r && !1 === r(t) || n(t)
                }
            }

            function U(e) {
                if (e && e.reduce && e.length) return 1 === e.length ? function(t, n) {
                    e[0](t, n || pe)
                } : e.reduce((function(e, t) {
                    return function(n, r) {
                        return void 0 === r && (r = pe), e(n, (function(e) {
                            return null == t ? void 0 : t(e, r)
                        }))
                    }
                }));
                throw new TypeError("createPipeline need at least one function param")
            }

            function _(e, t) {
                Object.getOwnPropertyNames(e).forEach((function(n) {
                    "function" == typeof e[n] && "constructor" !== n && (t ? t[n] = "sendPipeline" === n ? function() {
                        return function() {}
                    } : function() {} : e[n] = function() {})
                }))
            }

            function I(e) {
                try {
                    var t, n, r, o = "";
                    return o = e.pageUrl || (n = (t = getCurrentPages())[t.length - 1] || {}, i = n.options, r = Object.keys(i).length ? "?" + Object.keys(i).map((function(e) {
                        return e + "=" + i[e]
                    })).join("&") : "", n.route ? n.route + r : ""), (o = "function" == typeof e.urlHandler ? e.urlHandler() : o).slice(0, 2048)
                } catch (e) {
                    return ""
                }
                var i
            }

            function j(e, t) {
                if ("string" == typeof e && "string" == typeof t) {
                    if (e === t) return 1;
                    for (var n = e.split("."), r = t.split("."), o = Math.max(n.length, r.length), i = 0; i < o; i++) {
                        var a = ~~n[i],
                            s = ~~r[i];
                        if (a < s) return;
                        if (s < a) return 1
                    }
                }
            }

            function H(e, t) {
                var n = this;
                this.taskQueue = [], this.count = 1, this.maxCount = 2, this.addTask = function(e) {
                    n.taskQueue.push(e)
                }, this.fireTask = function() {
                    var e = n.taskQueue.length;
                    n.count > n.maxCount || 0 === e || (n.count = n.count + 1, (e = n.taskQueue.shift()) && n.sendRequest(e.options, null == e ? void 0 : e.success, null == e ? void 0 : e.fail))
                }, this.complete = function() {
                    1 < n.count && (n.count = n.count - 1), n.fireTask()
                }, t && (this.maxCount = t), this.sendRequest = e
            }

            function M(e) {
                return j(me = me || ge.getSystemInfoSync().SDKVersion, "1.1.1") && ge.canIUse ? ge.canIUse(e) : !!ge[e]
            }

            function D(e) {
                for (var t, n = {
                        unknown: /unknown|none/i,
                        wifi: /wifi/i,
                        net2g: /2g/i,
                        net3g: /3g/i,
                        net4g: /4g/i,
                        net5g: /5g/i,
                        net6g: /6g/i
                    }, r = G.unknown, o = 0; o < Object.keys(n).length; o++) {
                    var i = Object.keys(n)[o];
                    if (null != (t = n[i]) && t.test(e)) {
                        r = G[i];
                        break
                    }
                }
                return r
            }

            function F(e) {
                var t = e.apiName,
                    n = Re[t];
                n ? n.hackCloudReq.addCallback(e) : (n = Oe.cloud[t], Re[t] = {
                    hackCloudReq: new xe(e),
                    originApi: n
                }), Re[t]
            }

            function B(e) {
                var t = e.apiName,
                    n = Se[t];
                n ? n.hackReq.addCallback(e) : (n = wx[t], Se[t] = {
                    hackReq: new Pe(e),
                    originApi: n
                }), Se[t]
            }
            var W, V, G, J, z, K, $, Z, Y, Q = ["ret", "retcode", "code", "errcode"],
                X = function() {
                    var e = new WeakSet;
                    return function(t, r) {
                        if (r instanceof Error) return "Error.message: " + r.message + " \n  Error.stack: " + r.stack;
                        if ("object" == n(r) && null !== r) {
                            if (e.has(r)) return "[Circular " + (t || "root") + "]";
                            e.add(r)
                        }
                        return r
                    }
                },
                ee = function(e) {
                    if ("string" == typeof e) return e;
                    try {
                        return e instanceof Error ? (JSON.stringify(e, X(), 4) || "undefined").replace(/"/gim, "") : JSON.stringify(e, X(), 4) || "undefined"
                    } catch (e) {
                        return "error happen when aegis stringify: \n " + e.message + " \n " + e.stack
                    }
                },
                te = function e(t, r) {
                    void 0 === r && (r = 3);
                    var o, i, a, s = "";
                    return Array.isArray(t) ? (s += "[", o = t.length, t.forEach((function(t, i) {
                        s = (s += "object" == n(t) && 1 < r ? e(t, r - 1) : re(t)) + (i === o - 1 ? "" : ",")
                    })), s += "]") : t instanceof Object ? (s = "{", i = Object.keys(t), a = i.length, i.forEach((function(o, c) {
                        "object" == n(t[o]) && 1 < r ? s += '"' + o + '":' + e(t[o], r - 1) : s += ne(o, t[o]), s += c === a - 1 || c < a - 1 && void 0 === t[i[c + 1]] ? "" : ","
                    })), s += "}") : s += t, s
                },
                ne = function(e, t) {
                    var r = n(t),
                        o = "";
                    return "string" == r || "object" == r ? o += '"' + e + '":"' + t + '"' : "function" == typeof t ? o += '"' + e + '":"function ' + t.name + '"' : "symbol" == n(t) ? o += '"' + e + '":"symbol"' : "number" != typeof t && "boolean" != r || (o += '"' + e + '": ' + t), o
                },
                re = function(e) {
                    var t = n(e);
                    return "" + ("undefined" == t || "symbol" == t || "function" == t ? "null" : "string" == t || "object" == t ? '"' + e + '"' : e)
                },
                oe = /data:(image|text|application|font)\/.*;base64/,
                ie = ((de = W = W || {}).INFO_ALL = "-1", de.API_RESPONSE = "1", de.INFO = "2", de.ERROR = "4", de.PROMISE_ERROR = "8", de.AJAX_ERROR = "16", de.SCRIPT_ERROR = "32", de.IMAGE_ERROR = "64", de.CSS_ERROR = "128", de.CONSOLE_ERROR = "256", de.MEDIA_ERROR = "512", de.RET_ERROR = "1024", de.REPORT = "2048", de.PV = "4096", de.EVENT = "8192", de.PAGE_NOT_FOUND_ERROR = "16384", de.WEBSOCKET_ERROR = "32768", de.BRIDGE_ERROR = "65536", de.LAZY_LOAD_ERROR = "131072", (de = V = V || {})[de.android = 1] = "android", de[de.ios = 2] = "ios", de[de.windows = 3] = "windows", de[de.macos = 4] = "macos", de[de.linux = 5] = "linux", de[de.devtools = 6] = "devtools", de[de.other = 100] = "other", (de = G = G || {})[de.unknown = 100] = "unknown", de[de.wifi = 1] = "wifi", de[de.net2g = 2] = "net2g", de[de.net3g = 3] = "net3g", de[de.net4g = 4] = "net4g", de[de.net5g = 5] = "net5g", de[de.net6g = 6] = "net6g", (de = J = J || {}).LOG = "log", de.SPEED = "speed", de.PERFORMANCE = "performance", de.OFFLINE = "offline", de.WHITE_LIST = "whiteList", de.VITALS = "vitals", de.PV = "pv", de.CUSTOM_PV = "customPV", de.EVENT = "event", de.CUSTOM = "custom", de.SDK_ERROR = "sdkError", de.SET_DATA = "setData", de.LOAD_PACKAGE = "loadPackage", (de = z = z || {}).production = "production", de.development = "development", de.gray = "gray", de.pre = "pre", de.daily = "daily", de.local = "local", de.test = "test", de.others = "others", function(e) {
                    return e.filter((function(t, n) {
                        return "static" !== t.type || !e.find((function(e, r) {
                            return t.url === e.url && 200 === t.status && n < r
                        }))
                    }))
                }),
                ae = function(e) {
                    e.level === W.INFO_ALL && (e.level = W.INFO)
                },
                se = {},
                ce = {},
                le = function(e) {
                    return se[e] || (se[e] = setTimeout((function() {
                        ce[e] = {}, se[e] = null
                    }), 6e4)), se[e]
                },
                ue = function(e) {
                    return (Array.isArray(e) ? e : [e]).map((function(e) {
                        return Object.getOwnPropertyNames(e).reduce((function(t, n) {
                            return "ctx" !== n && (t[n] = e[n]), t
                        }), {
                            level: W.INFO,
                            msg: ""
                        })
                    }))
                },
                fe = function(e) {
                    return function(t) {
                        return e.sendPipeline([function(t, n) {
                            return n({
                                url: e.config.url || "",
                                data: R(ue(t)),
                                method: "post",
                                contentType: "application/json",
                                type: J.LOG,
                                log: t,
                                requestConfig: {
                                    timeout: 5e3
                                },
                                success: function() {
                                    var r = e.config.onReport;
                                    "function" == typeof r && t.forEach((function(e) {
                                        r(e)
                                    })), "function" == typeof n && n([])
                                }
                            })
                        }], J.LOG)(t)
                    }
                },
                pe = function() {},
                de = (Ue.use = function(e) {
                    -1 === Ue.installedPlugins.indexOf(e) && e.aegisPlugin && Ue.installedPlugins.push(e)
                }, Ue.unuse = function(e) {
                    -1 !== (e = Ue.installedPlugins.indexOf(e)) && Ue.installedPlugins.splice(e, 1)
                }, Ue.prototype.init = function(e) {
                    this.setConfig(e);
                    for (var t = 0; t < Ue.installedPlugins.length; t++) try {
                        Ue.installedPlugins[t].patch(this)
                    } catch (e) {
                        this.sendSDKError(e)
                    }
                    this.lifeCycle.emit("onInited")
                }, Ue.prototype.destroy = function(e) {
                    void 0 === e && (e = !1);
                    var t, n, r = Ue.instances.indexOf(this); - 1 !== r && Ue.instances.splice(r, 1);
                    for (var o = Ue.installedPlugins.length - 1; 0 <= o; o--) try {
                        Ue.installedPlugins[o].unpatch(this)
                    } catch (e) {
                        this.sendSDKError(e)
                    }
                    if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e) t = this, n = Object.getOwnPropertyDescriptors(t), Object.keys(n).forEach((function(e) {
                        n[e].writable && (t[e] = null)
                    })), Object.setPrototypeOf(this, null);
                    else {
                        for (var i = this; i.constructor !== Object && _(i, this), i = Object.getPrototypeOf(i););
                        0 === Ue.instances.length && (_(r = Object.getPrototypeOf(this).constructor), _(Ue))
                    }
                }, Ue.prototype.setConfig = function(e) {
                    Object.assign(this.config, e);
                    var t = (e = this.config).id,
                        n = e.uin,
                        r = e.version,
                        o = e.ext1,
                        i = e.ext2,
                        a = e.ext3,
                        s = e.aid,
                        c = void 0 === (l = e.env) ? "production" : l,
                        l = e.pageUrl;
                    return e = this.bean.id !== t || this.bean.uin !== n || this.bean.aid !== s, this.bean.id = t || "", this.bean.uin = n || "", this.bean.version = r || "1.39.1", this.bean.aid = s || "", this.bean.env = function() {
                        switch (c) {
                            case z.production:
                            case z.development:
                            case z.gray:
                            case z.pre:
                            case z.daily:
                            case z.local:
                            case z.test:
                            case z.others:
                                return 1;
                            default:
                                return
                        }
                    }() ? c : z.others, l && this.extendBean("from", encodeURIComponent(l.slice(0, 2048))), o && this.extendBean("ext1", encodeURIComponent(o)), i && this.extendBean("ext2", encodeURIComponent(i)), a && this.extendBean("ext3", encodeURIComponent(a)), e && this.lifeCycle.emit("onConfigChange", this.config), this.config
                }, Ue.prototype.extendBean = function(e, t) {
                    this.bean[e] = t
                }, Ue.prototype.send = function(e, t, n) {
                    var r = this;
                    return U([q(this), function(e, o) {
                        r.request(e, (function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            o({
                                isErr: !1,
                                result: n,
                                logType: e.type,
                                logs: e.log
                            }), null != t && t.apply(void 0, n)
                        }), (function() {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            o({
                                isErr: !0,
                                result: t,
                                logType: e.type,
                                logs: e.log
                            }), null != n && n.apply(void 0, t)
                        }))
                    }, L(this)])(e)
                }, Ue.prototype.sendSDKError = function(e) {
                    var t = this;
                    this.sendPipeline([function(e, n) {
                        n({
                            url: t.config.url + "?id=1085&msg[0]=" + encodeURIComponent(ee(e)) + "&level[0]=2&from=" + t.config.id + "&count=1&version=" + t.config.id + "(1.39.1)",
                            addBean: !1,
                            method: "get",
                            type: J.SDK_ERROR,
                            log: e
                        })
                    }], J.SDK_ERROR)(e)
                }, Ue.prototype.sendPipeline = function(e, t) {
                    var n, r = this;
                    return U(o([function(e, t) {
                        if ("number" != typeof n.config.random && (console.warn("random must in [0, 1], default is 1."), n.config.random = 1), !n.isHidden || !n.isGetSample)
                            if (n.isGetSample) n.isHidden || t(e);
                            else {
                                if (n.isGetSample = !0, Math.random() < n.config.random) return n.isHidden = !1, t(e);
                                n.isHidden = !0
                            }
                    }, A(n = this, t)], e, [q(this), function(e, t) {
                        r.request(e, (function() {
                            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                            var a = !1; - 1 < ("" + n[r.failRequestCount = 0]).indexOf("403 forbidden") && (a = !0, r.destroy()), t({
                                isErr: a,
                                result: n,
                                logType: null == e ? void 0 : e.type,
                                logs: null == e ? void 0 : e.log
                            }), null != (a = null == e ? void 0 : e.success) && a.call.apply(a, o([e], n))
                        }), (function() {
                            for (var n, i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                            60 <= ++r.failRequestCount && r.destroy(), -1 < ("" + i[0]).indexOf("403 forbidden") && r.destroy(), t({
                                isErr: !0,
                                result: i,
                                logType: null == e ? void 0 : e.type,
                                logs: null == e ? void 0 : e.log
                            }), null != (n = null == e ? void 0 : e.fail) && n.call.apply(n, o([e], i))
                        }))
                    }, L(this)]))
                }, Ue.prototype.info = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        level: W.INFO,
                        msg: e
                    };
                    1 === e.length && e[0].msg && Object.assign(n, r({}, e[0]), {
                        level: W.INFO
                    }), this.normalLogPipeline(n)
                }, Ue.prototype.infoAll = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        level: W.INFO_ALL,
                        msg: e
                    };
                    1 === e.length && e[0].msg && Object.assign(n, r({}, e[0]), {
                        level: W.INFO_ALL
                    }), this.normalLogPipeline(n)
                }, Ue.prototype.report = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        level: W.REPORT,
                        msg: e
                    };
                    1 === e.length && e[0].msg && Object.assign(n, r({}, e[0])), this.normalLogPipeline(n)
                }, Ue.prototype.error = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        level: W.ERROR,
                        msg: e
                    };
                    1 === e.length && e[0].msg && Object.assign(n, r({}, e[0]), {
                        level: W.ERROR
                    }), this.normalLogPipeline(n)
                }, Ue.prototype.reportEvent = function(e) {
                    e && ((e = "string" == typeof e ? {
                        name: e,
                        ext1: this.config.ext1 || "",
                        ext2: this.config.ext2 || "",
                        ext3: this.config.ext3 || ""
                    } : e).name ? ("string" != typeof e.name && (console.warn("reportEvent params name must be string"), e.name = String(e.name)), this.eventPipeline(e)) : console.warn("reportEvent params error"))
                }, Ue.prototype.reportT = function(e) {
                    var t = e.name,
                        n = e.duration,
                        r = void 0 === (r = e.ext1) ? "" : r,
                        o = void 0 === (o = e.ext2) ? "" : o,
                        i = void 0 === (i = e.ext3) ? "" : i;
                    if (e = e.from, "string" == typeof t && "number" == typeof n && "string" == typeof r && "string" == typeof o && "string" == typeof i) {
                        if (!(n < 0 || 6e4 < n)) return this.submitCustomTime(t, n, r, o, i, void 0 === e ? "" : e);
                        console.warn("reportTime: duration must between 0 and 60000")
                    } else console.warn("reportTime: params error")
                }, Ue.prototype.reportTime = function(e, t) {
                    if ("object" == n(e)) return this.reportT(e);
                    "string" == typeof e ? "number" == typeof t ? t < 0 || 6e4 < t ? console.warn("reportTime: duration must between 0 and 60000") : this.submitCustomTime(e, t) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string")
                }, Ue.prototype.time = function(e) {
                    "string" == typeof e ? this.timeMap[e] ? console.warn("Timer " + e + " already exists") : this.timeMap[e] = Date.now() : console.warn("time: first param must be a string")
                }, Ue.prototype.timeEnd = function(e) {
                    "string" == typeof e ? this.timeMap[e] ? (this.submitCustomTime(e, Date.now() - this.timeMap[e]), delete this.timeMap[e]) : console.warn("Timer " + e + " does not exist") : console.warn("timeEnd: first param must be a string")
                }, Ue.prototype.ready = function(e, t, n) {
                    throw new Error('You need to override "ready" method')
                }, Ue.prototype.request = function(e, t, n) {
                    throw new Error('You need to override "request" method')
                }, Ue.prototype.speedLogPipeline = function(e) {
                    throw new Error('You need to override "speedLogPipeline" method')
                }, Object.defineProperty(Ue.prototype, "__version__", {get: function() {
                        return "1.39.1"
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Ue.prototype, "LogType", {get: function() {
                        return W
                    },
                    enumerable: !1,
                    configurable: !0
                }), Ue.prototype.reportPv = function(e) {
                    e && console.warn("reportPv is deprecated, please use reportEvent")
                }, Ue.prototype.submitCustomTime = function(e, t, n, r, o, i) {
                    this.customTimePipeline({
                        name: e,
                        duration: t,
                        ext1: n || this.config.ext1,
                        ext2: r || this.config.ext2,
                        ext3: o || this.config.ext3,
                        from: i || void 0
                    })
                }, Ue.version = "1.39.1", Ue.instances = [], Ue.logType = W, Ue.environment = z, Ue.installedPlugins = [], Ue),
                he = (Le.prototype.patch = function(e) {
                    this.canUse(e) && this.exist(e) && (this.instances.push(e), this.triggerInit(e), this.triggerOnNewAegis(e))
                }, Le.prototype.unpatch = function(e) {
                    var t = this.instances.indexOf(e); - 1 !== t && (this.instances.splice(t, 1), 0 === this.instances.length) && this.uninstall(e)
                }, Le.prototype.countInstance = function() {
                    return this.instances.length
                }, Le.prototype.uninstall = function(e) {
                    var t;
                    null != (t = null == (t = this.option) ? void 0 : t.destroy) && t.apply(this, [e])
                }, Le.prototype.walk = function(e) {
                    var t = this;
                    this.instances.forEach((function(n) {
                        var r = t.canUse(n);
                        r && e(n, r)
                    }))
                }, Le.prototype.canUse = function(e) {
                    return !(!(e = this.getConfig(e)) || "object" != n(e)) || !!e
                }, Le.prototype.getConfig = function(e) {
                    return null == (e = e.config) ? void 0 : e[this.name]
                }, Le.prototype.exist = function(e) {
                    return -1 === this.instances.indexOf(e)
                }, Le.prototype.triggerInit = function(e) {
                    var t;
                    this.inited || (this.inited = !0, null == (t = null == (t = this.option) ? void 0 : t.init)) || t.call(this.option, this.getConfig(e))
                }, Le.prototype.triggerOnNewAegis = function(e) {
                    var t;
                    null != (t = null == (t = this.option) ? void 0 : t.onNewAegis) && t.call(this.option, e, this.getConfig(e))
                }, Le),
                ge = wx || qq,
                me = "",
                ye = new he({
                    name: "device",
                    onNewAegis: function(e) {
                        return t = this, o = function() {
                            return function(e, t) {
                                var n, r, o, i = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    },
                                    a = {
                                        next: s(0),
                                        throw: s(1),
                                        return: s(2)
                                    };
                                return "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function s(a) {
                                    return function(s) {
                                        var c = [a, s];
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, (c = o ? [2 & c[0], o.value] : c)[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = 0 < (o = i.trys).length && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) i.label = c[1];
                                                    else if (6 === c[0] && i.label < o[1]) i.label = o[1], o = c;
                                                    else {
                                                        if (!(o && i.label < o[2])) {
                                                            o[2] && i.ops.pop(), i.trys.pop();
                                                            continue
                                                        }
                                                        i.label = o[2], i.ops.push(c)
                                                    }
                                            }
                                            c = t.call(e, i)
                                        } catch (s) {
                                            c = [6, s], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }
                                }
                            }(this, (function(t) {
                                return this.setSystemInfo(e), this.setNetworkType(e), this.setNetworkChange(e), [2]
                            }))
                        }, new(r = (r = n = void 0) || Promise)((function(e, i) {
                            function a(e) {
                                try {
                                    c(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(t) {
                                var n;
                                t.done ? e(t.value) : ((n = t.value) instanceof r ? n : new r((function(e) {
                                    e(n)
                                }))).then(a, s)
                            }
                            c((o = o.apply(t, n || [])).next())
                        }));
                        var t, n, r, o
                    },
                    setSystemInfo: function(e) {
                        var t = this;
                        try {
                            M("getSystemInfo") && ge.getSystemInfo({
                                success: function(n) {
                                    var r = n.platform,
                                        o = n.model,
                                        i = n.windowHeight,
                                        a = n.windowWidth,
                                        s = void 0 === (s = n.screenWidth) ? 0 : s;
                                    n = void 0 === (n = n.screenHeight) ? 0 : n, e.extendBean("platform", t.getPlatFormType(r)), e.extendBean("model", o), e.extendBean("vp", Math.round(a) + " * " + Math.round(i)), e.extendBean("sr", Math.round(s) + " * " + Math.round(n))
                                }
                            })
                        } catch (e) {}
                    },
                    getPlatFormType: function(e) {
                        for (var t, n = {
                                android: /android/i,
                                ios: /ios/i,
                                windows: /windows/i,
                                macos: /mac/i,
                                devtools: /devtools/i
                            }, r = V.other, o = 0; o < Object.keys(n).length; o++) {
                            var i = Object.keys(n)[o];
                            if (null != (t = n[i]) && t.test(e)) {
                                r = V[i];
                                break
                            }
                        }
                        return r
                    },
                    setNetworkChange: function(e) {
                        M("onNetworkStatusChange") && ge.onNetworkStatusChange((function(t) {
                            t = D(t.networkType), e.extendBean("netType", t)
                        }))
                    },
                    setNetworkType: function(e) {
                        M("getNetworkType") && ge.getNetworkType({
                            success: function(t) {
                                t = D(t.networkType), e.extendBean("netType", t)
                            }
                        })
                    }
                }),
                ve = ge.request,
                be = (t(qe, Z = de), Object.defineProperty(qe.prototype, "getBean", {get: function() {
                        var e = this;
                        return this.bean ? Object.getOwnPropertyNames(this.bean).map((function(t) {
                            return t + "=" + e.bean[t]
                        })).join("&") + "&from=" + encodeURIComponent(I(this.config)) : "from=" + encodeURIComponent(I(this.config))
                    },
                    enumerable: !1,
                    configurable: !0
                }), qe.prototype.initRequestSchedule = function() {
                    this.requestSchedule = new H(this.sendRequest)
                }, qe.prototype.uploadLogs = function(e, t) {
                    this.lifeCycle.emit("uploadLogs", e = void 0 === e ? {} : e, t = void 0 === t ? {} : t)
                }, qe.prototype.reportPv = function(e) {
                    var t, n = this;
                    e && (t = Object.getOwnPropertyNames(this.bean).filter((function(e) {
                        return "id" !== e
                    })).map((function(e) {
                        return e + "=" + n.bean[e]
                    })).join("&") + "&from=" + encodeURIComponent(I(this.config)), this.send({
                        url: this.config.url + "/" + e + "?" + t,
                        addBean: !1,
                        type: J.CUSTOM_PV,
                        log: J.CUSTOM_PV
                    }, (function() {}), (function() {})))
                }, qe.sessionID = "session-" + Date.now(), qe.asyncPluginIndex = 0, de = qe, new he({
                    name: "aid",
                    onNewAegis: function(e) {
                        this.initAid((function(t) {
                            e.bean.aid = t, e.config.aid = t
                        }))
                    },
                    initAid: function(e) {
                        ge.getStorage({
                            key: "AEGIS_ID",
                            success: function(t) {
                                e(t.data)
                            },
                            fail: function() {
                                var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                    var t = 16 * Math.random() | 0;
                                    return ("x" === e ? t : 3 & t | 8).toString(16)
                                }));
                                ge.setStorage({
                                    key: "AEGIS_ID",
                                    data: t,
                                    success: function() {
                                        e(t)
                                    }
                                })
                            }
                        })
                    }
                })),
                Ee = (Ae.prototype.addCallback = function(e) {
                    e && this.callbacks.push(e)
                }, Ae.prototype.prefixHandler = function(e) {
                    return r(r({}, e), {
                        aegisRequestStartTime: +new Date
                    })
                }, Ae.prototype.onStartHandler = function(e) {
                    var t;
                    this.callbacks.forEach((function(t) {
                        var n;
                        try {
                            null != (n = t.onStart) && n.call(t, e)
                        } catch (t) {}
                    })), null != (t = e.onStart) && t.call(e, e)
                }, Ae.prototype.successHandler = function(e, t) {
                    var n;
                    this.callbacks.forEach((function(n) {
                        var r;
                        try {
                            null != (r = n.success) && r.call(n, e, t)
                        } catch (n) {}
                    })), null != (n = t.success) && n.call(t, e, t)
                }, Ae.prototype.failHandler = function(e, t) {
                    var n;
                    this.callbacks.forEach((function(n) {
                        var r;
                        try {
                            null != (r = n.fail) && r.call(n, e, t)
                        } catch (n) {}
                    })), null != (n = t.fail) && n.call(t, e, t)
                }, Ae.prototype.completeHandler = function(e, t) {
                    var n;
                    this.callbacks.forEach((function(n) {
                        var r;
                        try {
                            null != (r = n.complete) && r.call(n, e, t)
                        } catch (n) {}
                    })), null != (n = t.complete) && n.call(t, e, t)
                }, Ae.prototype.override = function() {
                    try {
                        this.defineApiProperty()
                    } catch (e) {
                        console.warn("cannot override `" + this.apiName + "`, error is: " + e)
                    } finally {
                        this.isOverride = !0
                    }
                }, Ae),
                Oe = wx || qq,
                Re = {},
                xe = (t(Ne, $ = Ee), Ne.prototype.defineApiProperty = function() {
                    var e = this;
                    Oe.cloud && Oe.cloud[this.apiName] && Object.defineProperty(Oe.cloud, this.apiName, {get: function() {
                            return e.hackHandler.bind(e)
                        }
                    })
                }, Ne.prototype.hackHandler = function(e) {
                    var t = this,
                        n = this.prefixHandler(e);
                    return new Promise((function(e, o) {
                        var i = null == (i = Re[t.apiName]) ? void 0 : i.originApi;
                        null != i && i(r(r({}, n), {
                            success: function(r) {
                                t.successHandler(r, n), e(r)
                            },
                            fail: function(e) {
                                t.failHandler(e, n), o(e)
                            },
                            complete: function(e) {
                                t.completeHandler(e, n)
                            }
                        }))
                    }))
                }, Ne),
                we = wx || qq,
                Se = {},
                Pe = (t(Ce, K = Ee), Ce.prototype.defineApiProperty = function() {
                    var e = this;
                    Object.defineProperty(we, this.apiName, {get: function() {
                            return e.hackHandler.bind(e)
                        }
                    })
                }, Ce.prototype.hackHandler = function(e) {
                    var t = this,
                        n = this.prefixHandler(e);
                    return null == (this.onStartHandler(n), e = null == (e = Se[this.apiName]) ? void 0 : e.originApi) ? void 0 : e(r(r({}, n), {
                        success: function(e) {
                            t.successHandler(e, n)
                        },
                        fail: function(e) {
                            t.failHandler(e, n)
                        },
                        complete: function(e) {
                            t.completeHandler(e, n)
                        }
                    }))
                }, Ce),
                Te = wx || qq,
                ke = Te.request;

            function Ce() {
                return null !== K && K.apply(this, arguments) || this
            }

            function Ne() {
                return null !== $ && $.apply(this, arguments) || this
            }

            function Ae(e) {
                this.callbacks = [], this.isOverride = !1;
                var t = e.apiName;
                this.apiName = t, this.isOverride || this.override(), this.callbacks.push(e)
            }

            function qe(e) {
                var t, o, i = Z.call(this, e) || this;
                i.originRequest = ve, i.speedLogPipeline = U([(o = i.config, function(e, t) {
                    var n, r, i, a = "number" == typeof o.repeat ? o.repeat : 60;
                    !o.speedSample || a <= 0 ? t(e) : (n = (null == o ? void 0 : o.id) || "0", r = ce[n] || {}, Array.isArray(e) ? (i = e.filter((function(e) {
                        var t = !r[e.url] || r[e.url] < a;
                        return t ? (r[e.url] = 1 + ~~r[e.url], ce[n] = r) : se[n] || le(n), t
                    }))).length && t(i) : !r[e.url] || r[e.url] < a ? (r[e.url] = 1 + ~~r[e.url], ce[n] = r, t(e)) : se[n] || le(n))
                }), C(i), function(e, n) {
                    M("getNetworkType") ? ge.getNetworkType({
                        success: function(r) {
                            r = D(r.networkType), t.extendBean("netType", r), n(e)
                        }
                    }) : n(e)
                }, function(e, t) {
                    i.lifeCycle.emit("beforeReportSpeed", e);
                    var n = i.config.beforeReportSpeed;
                    if ((e = "function" == typeof n ? e.filter((function(e) {
                            return !1 !== n(e)
                        })) : e).length) return t(e)
                }, A(t = i, J.SPEED), function(e, t) {
                    t(e.map((function(e) {
                        return void 0 !== e.payload && delete e.payload, e
                    })))
                }, function(e) {
                    var t, n, o, a;
                    i.send({
                        url: "" + i.config.speedUrl,
                        method: "post",
                        data: (e = e, t = i.bean, o = {
                            fetch: [],
                            static: [],
                            bridge: []
                        }, a = {}, Array.isArray(e) ? e.forEach((function(e) {
                            var t;
                            null != (t = o[e.type]) && t.push(e)
                        })) : null != (n = o[e.type]) && n.push(e), a.payload = JSON.stringify(r({
                            duration: o
                        }, t)), a)
                    })
                }]), i.request = function(e, t, n) {
                    e.url && i.bean.id && (!/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(String(i.bean.aid)) || M("getNetworkType") && void 0 === i.bean.netType ? i.requestSchedule.addTask({
                        options: e,
                        success: t,
                        fail: n
                    }) : (i.requestSchedule.addTask({
                        options: e,
                        success: t,
                        fail: n
                    }), i.requestSchedule.fireTask()))
                }, i.sendRequest = function(e, t, o) {
                    var a, s, c, l = e.url,
                        u = void 0 === (i.config.whiteListUrl === l && (a = t, t = function(e) {
                            null != a && a(JSON.stringify(e.data))
                        }), u = e.method) ? "get" : u,
                        f = (!1 !== e.addBean && (l = l + (-1 === (null == l ? void 0 : l.indexOf("?")) ? "?" : "&") + i.getBean), e),
                        p = i.config.onBeforeRequest;
                    return (f = p ? p(e, i) : f) && f.url ? (p = i.config.enableHttp2 || !1, "get" === u ? (u = l, s = f.data, l = "string" != typeof u ? "" : "object" == n(s) && s ? (c = Object.getOwnPropertyNames(s).map((function(e) {
                        var t = s[e];
                        return e + "=" + ("string" == typeof t ? encodeURIComponent(t) : encodeURIComponent(JSON.stringify(t)))
                    })).join("&").replace(/eval/gi, "evaI"), u + (-1 === u.indexOf("?") ? "?" : "&") + c) : u, i.originRequest(r({
                        url: l,
                        enableHttp2: p,
                        success: t,
                        fail: o,
                        complete: i.requestSchedule.complete
                    }, e.requestConfig))) : ("string" == typeof f.data && (f.data = f.data.replace(/eval/gi, "evaI")), i.originRequest(r({
                        url: l,
                        enableHttp2: p,
                        header: f.contentType ? {
                            "content-type": f.contentType
                        } : void 0,
                        method: "POST",
                        data: f.data,
                        success: t,
                        fail: o,
                        complete: i.requestSchedule.complete
                    }, e.requestConfig))), !0) : (c = "", f && f.url || (c = "Sending request blocked. Please handle the parameters reasonably, options.url is necessary", console.log(c)), null != o && o(c), i.requestSchedule.complete(), !1)
                };
                try {
                    i.initRequestSchedule(), i.init(e), i.extendBean("sessionId", qe.sessionID), i.extendBean("referer", (M("getLaunchOptionsSync") ? ge.getLaunchOptionsSync() : {
                        scene: ""
                    }).scene || "")
                } catch (e) {
                    console.warn(e), console.log("%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.\nIt is recommended that you contact us for feedback and thank you for your support.", "color: red"), i.sendSDKError(e)
                }
                return i
            }

            function Le(e) {
                this.aegisPlugin = !0, this.name = "", this.instances = [], this.inited = !1, e.$walk = this.walk.bind(this), e.$getConfig = this.getConfig.bind(this), this.option = e, this.name = e.name
            }

            function Ue(e) {
                var t, n, r, o, i, a, s, l, u, f, p, d, h, g, m = this;
                this.isGetSample = !1, this.isHidden = !1, this.config = {
                    version: 0,
                    delay: 1e3,
                    onError: !0,
                    repeat: 60,
                    random: 1,
                    aid: !0,
                    device: !0,
                    pagePerformance: !0,
                    webVitals: !0,
                    speedSample: !0,
                    onClose: !0,
                    reportLoadPackageSpeed: !0,
                    hostUrl: "https://aegis.qq.com",
                    env: "production",
                    url: "",
                    offlineUrl: "",
                    whiteListUrl: "",
                    pvUrl: "",
                    speedUrl: "",
                    customTimeUrl: "",
                    performanceUrl: "",
                    performanceUrlForHippy: "",
                    webVitalsUrl: "",
                    eventUrl: "",
                    setDataReportUrl: "",
                    reportImmediately: !0
                }, this.isWhiteList = !1, this.lifeCycle = new c, this.bean = {}, this.normalLogPipeline = U([C(this, 5), N, function(e, n) {
                    var r = t.config;
                    n(e = e.map((function(e) {
                        var t, n = r.maxLength || 102400;
                        try {
                            if (!e.msg || e.msg.length <= n) return e;
                            e.msg = null == (t = e.msg) ? void 0 : t.substring(0, n)
                        } catch (t) {
                            e.msg = ee(e.msg).substring(0, r.maxLength)
                        }
                        return e
                    })))
                }, (g = (t = this).config, function(e, t) {
                    var n = "number" == typeof g.repeat ? g.repeat : 60;
                    if (n <= 0) return t(e);
                    var r = (null == g ? void 0 : g.id) + "_error",
                        o = ce[r] || {};
                    t(e.filter((function(e) {
                        if (e.level === W.ERROR || e.level === W.PROMISE_ERROR || e.level === W.AJAX_ERROR || e.level === W.SCRIPT_ERROR || e.level === W.IMAGE_ERROR || e.level === W.CSS_ERROR || e.level === W.MEDIA_ERROR || e.level === W.RET_ERROR || e.level === W.BRIDGE_ERROR || e.level === W.PAGE_NOT_FOUND_ERROR || e.level === W.WEBSOCKET_ERROR || e.level === W.LAZY_LOAD_ERROR) {
                            if (e = e.msg.slice(0, 200), o[e] > n) return se[r] || le(r), !1;
                            o[e] = 1 + ~~o[e], ce[r] = o
                        }
                        return !0
                    })))
                }), (d = this.lifeCycle.emit, h = this.config, function(e, t) {
                    var n, r = h.logCreated;
                    return "function" == typeof r ? (n = e.filter((function(e) {
                        return !1 !== r(e)
                    })), d("beforeWrite", n), t(n)) : (d("beforeWrite", e), t(e))
                }), (p = this, setTimeout((function() {
                    var e = void 0 === (t = (n = p.config).pvUrl) ? "" : t,
                        t = n.spa,
                        n = -1 < ["web-sdk", "mp-sdk"].indexOf("mp-sdk");
                    e && (n && !t || !n) && p.sendPipeline([function(t, n) {
                        n({
                            url: e,
                            type: J.PV
                        })
                    }], J.PV)(null)
                }), 100), function(e, t) {
                    t(e)
                }), (u = l = s = !1, f = [], (i = this).lifeCycle.on("onConfigChange", (function() {
                    a && clearTimeout(a), a = setTimeout((function() {
                        var e, t;
                        !u && i.config && (u = !0, e = i.config.whiteListUrl, (t = void 0 === e ? "" : e) && i.sendPipeline([function(e, n) {
                            n({
                                url: t,
                                type: J.WHITE_LIST,
                                success: function(e) {
                                    l = !0;
                                    try {
                                        var t = e.data || JSON.parse(e),
                                            n = t.retcode,
                                            r = t.result,
                                            o = void 0 === r ? {} : r,
                                            a = (0 === n && (s = o.is_in_white_list, i.isWhiteList = s, 0 <= o.rate) && o.rate <= 1 && (i.config.random = o.rate, i.isGetSample = !1), i.isWhiteList && f.length ? fe(i)(f.splice(0), (function() {})) : !i.isWhiteList && f.length && (f.length = 0), i.config.onWhitelist);
                                        "function" == typeof a && a(s)
                                    } catch (e) {}
                                },
                                fail: function() {
                                    l = !0
                                }
                            })
                        }], J.WHITE_LIST)(null), u = !1)
                    }), i.config.uin ? 50 : 500)
                })), i.lifeCycle.on("destroy", (function() {
                    f.length = 0
                })), function(e, t) {
                    var n;
                    s || null != (n = null == (n = i.config) ? void 0 : n.api) && n.reportRequest ? t(e.concat(f.splice(0)).map((function(e) {
                        return ae(e), e
                    }))) : (n = e.filter((function(e) {
                        return e.level !== W.INFO && e.level !== W.API_RESPONSE ? (ae(e), !0) : (l || (f.push(e), 200 <= f.length && (f.length = 200)), !1)
                    }))).length && t(n)
                }), function(e, t) {
                    try {
                        var n = JSON.parse(JSON.stringify(e)),
                            r = (m.lifeCycle.emit("beforeReport", n), m.config.beforeReport);
                        (e = "function" == typeof r ? e.filter((function(e) {
                            return !1 !== r(e)
                        })) : e).length && t(e)
                    } catch (e) {}
                }, fe(this)]), this.eventPipeline = U([C(this, 10), (o = this, function(e) {
                    o.sendPipeline([function(e, t) {
                        var n = e.map((function(e) {
                            return {
                                name: e.name,
                                ext1: e.ext1 || o.config.ext1 || "",
                                ext2: e.ext2 || o.config.ext2 || "",
                                ext3: e.ext3 || o.config.ext3 || ""
                            }
                        }));
                        t({
                            url: o.config.eventUrl + "?payload=" + encodeURIComponent(JSON.stringify(n)),
                            type: J.EVENT,
                            log: e
                        })
                    }], J.EVENT)(e)
                })]), this.customTimePipeline = U([C(this, 10), (r = this, function(e) {
                    return r.sendPipeline([function(e, t) {
                        t({
                            url: r.config.customTimeUrl + "?payload=" + encodeURIComponent(JSON.stringify({
                                custom: e
                            })),
                            type: J.CUSTOM,
                            log: e
                        })
                    }], J.CUSTOM)(e)
                })]), this.timeMap = {}, this.failRequestCount = 0, this.config = (n = this.config, void 0 === (e = e.hostUrl) && (e = "https://aegis.qq.com"), n.url = n.url || e + "/collect", n.offlineUrl = n.offlineUrl || e + "/offline", n.whiteListUrl = n.whiteListUrl || e + "/collect/whitelist", n.pvUrl = n.pvUrl || e + "/collect/pv", n.eventUrl = n.eventUrl || e + "/collect/events", n.speedUrl = n.speedUrl || e + "/speed", n.customTimeUrl = n.customTimeUrl || e + "/speed/custom", n.performanceUrl = n.performanceUrl || e + "/speed/performance", n.performanceUrlForHippy = n.performanceUrlForHippy || e + "/speed/hippyPerformance", n.webVitalsUrl = n.webVitalsUrl || e + "/speed/webvitals", n.setDataReportUrl = n.SetDataReportUrl || e + "/speed/miniProgramData", n), Ue.instances.push(this)
            }

            function _e() {
                return null !== Y && Y.apply(this, arguments) || this
            }

            function Ie(e, t, r) {
                return null != t && t.length && "object" == n(e) ? t.reduce((function(t, n) {
                    var o = e[n];
                    return o ? t + ("" === t ? "\n" : "\n\n") + r + " header " + n + ": " + o : t
                }), "") : ""
            }
            t(_e, Y = Ee), _e.prototype.defineApiProperty = function() {
                var e = this;
                Object.defineProperty(Te, "request", {get: function() {
                        return e.hackHandler.bind(e)
                    }
                })
            };
            var je, He, Me = new he({
                    name: "reportApiSpeed",
                    override: !(_e.prototype.hackHandler = function(e) {
                        var t = this,
                            n = this.prefixHandler(e);
                        return this.onStartHandler(n), ke(r(r({}, n), {
                            success: function(e) {
                                t.successHandler(e, n)
                            },
                            fail: function(e) {
                                t.failHandler(e, n)
                            },
                            complete: function(e) {
                                t.completeHandler(e, n)
                            }
                        }))
                    }),
                    onNewAegis: function(e) {
                        var t, n;
                        this.override || (null != (n = (e.config || {}).api) && n.injectTraceHeader && (this.traceRequestHeader = new E(n.injectTraceHeader, null != (t = null == n ? void 0 : n.injectTraceIgnoreUrls) ? t : [], null == n ? void 0 : n.injectTraceUrls)), this.override = !0, this.hackRequest(e.config), this.overrideCallFunction(e.config), this.overrideCallContainer(e.config))
                    },
                    hackRequest: function(e) {
                        var t = this;
                        B({
                            apiName: "request",
                            onStart: function(n) {
                                var o = ((null == e ? void 0 : e.api) || {}).injectTraceHeader,
                                    i = (n || {}).url;
                                o && (o = {
                                    host: ((o = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(o = i) || [])[1], o[2], [o[3], o[4], o[5]][0]),
                                    pathname: (o = getCurrentPages()).length ? o[o.length - 1].route : ""
                                }, o = (i = t.traceRequestHeader.generate(i, {}, {
                                    host: o.host,
                                    pathname: o.pathname
                                }) || {}).name, i = i.value, o) && i && n && (n.header = r(r({}, n.header), ((n = {})[o] = i, n)))
                            },
                            success: function(n, r) {
                                var o, i, a, s, c, l, u, f;
                                k(r.url, e.hostUrl) || (o = {
                                    method: r.method || "get",
                                    url: w(r.url),
                                    duration: Date.now() - r.aegisRequestStartTime,
                                    status: n.statusCode || 0,
                                    nextHopProtocol: "",
                                    isHttps: S(r.url),
                                    type: "fetch"
                                }, s = null == (s = e.api) ? void 0 : s.apiDetail, i = (a = P(n.data, e.api, {
                                    url: r.url,
                                    ctx: n,
                                    payload: r.data
                                }) || {}).code, a = a.isErr, f = s ? T(r.data, null == (f = e.api) ? void 0 : f.reqParamHandler, {
                                    url: r.url
                                }) : "", s = s ? T(n.data, null == (s = e.api) ? void 0 : s.resBodyHandler, {
                                    url: r.url
                                }) : "", c = (null == (c = e.api) ? void 0 : c.reqHeaders) || [], c = Ie(null == r ? void 0 : r.header, c, "req"), l = (null == (l = e.api) ? void 0 : l.resHeaders) || [], l = Ie(null == n ? void 0 : n.header, l, "res"), u = y(null == r ? void 0 : r.header), f = "req url: " + o.url + " \n                        \nres status: " + (n.statusCode || 0) + " \n                        \nres duration: " + o.duration + "ms \n                        \nreq method: " + o.method + " \n                        \nreq param: " + f + "  \n                        \nres retcode: " + i + " \n                        \nres data: " + s + "\n                        " + c + "\n                        " + l, o.ret = i, o.isErr = +a, o.payload = r.data, t.publishNormalLog({
                                    msg: f,
                                    level: a ? W.RET_ERROR : W.API_RESPONSE,
                                    ctx: n,
                                    trace: u
                                }), t.publishSpeedLog(o))
                            },
                            fail: function(n, r) {
                                k(r.url, e.hostUrl) || (r = {
                                    method: r.method || "get",
                                    url: w(r.url),
                                    duration: Date.now() - r.aegisRequestStartTime,
                                    status: 0,
                                    nextHopProtocol: "",
                                    isHttps: S(r.url),
                                    type: "fetch"
                                }, t.publishSpeedLog(r))
                            }
                        })
                    },
                    overrideCallFunction: function(e) {
                        var t = this;
                        F({
                            apiName: "callFunction",
                            success: function(n, r) {
                                t.cloudSuccessCallback(e, r, n, "callFunction")
                            },
                            fail: function(e, n) {
                                n = {
                                    method: "call",
                                    url: "wx.cloud.callFunction." + n.name,
                                    duration: Date.now() - n.aegisRequestStartTime,
                                    status: 0,
                                    nextHopProtocol: "",
                                    type: "fetch",
                                    errMsg: e.errMsg,
                                    isHttps: !0
                                }, t.publishSpeedLog(n)
                            }
                        })
                    },
                    overrideCallContainer: function(e) {
                        var t = this;
                        F({
                            apiName: "callContainer",
                            success: function(n, r) {
                                t.cloudSuccessCallback(e, r, n, "callContainer")
                            },
                            fail: function(e, n) {
                                n = {
                                    method: "call",
                                    url: "wx.cloud.callContainer." + n.path,
                                    duration: Date.now() - n.aegisRequestStartTime,
                                    status: 0,
                                    nextHopProtocol: "",
                                    type: "fetch",
                                    errMsg: e.errMsg,
                                    isHttps: !0
                                }, t.publishSpeedLog(n)
                            }
                        })
                    },
                    cloudSuccessCallback: function(e, t, n, r) {
                        var o = "callFunction" === r ? t.name : t.path,
                            i = "callFunction" === r ? n.result : n.data,
                            a = (o = {
                                method: "call",
                                url: "wx.cloud." + r + "." + o,
                                duration: Date.now() - t.aegisRequestStartTime,
                                status: 200,
                                nextHopProtocol: "",
                                type: "fetch",
                                isHttps: !0
                            }, ["apiName", "aegisRequestStartTime", "config", "success", "fail", "complete"]),
                            s = Object.keys(t).reduce((function(e, n) {
                                return a.includes(n) || (e[n] = t[n]), e
                            }), {}),
                            c = (r = "callFunction" === r ? (null == (r = n.data) ? void 0 : r.code) || 0 : n.statusCode, (l = P(i, e.api, {
                                url: o.url,
                                ctx: n,
                                payload: s
                            }) || {}).code),
                            l = void 0 !== (l = l.isErr) && l,
                            u = (o.ret = c, o.isErr = +l, o.payload = s, s = (c = null == (c = e.api) ? void 0 : c.apiDetail) ? T(s, null == (s = e.api) ? void 0 : s.reqParamHandler, {
                                url: o.url
                            }) : "", i = c ? T(i, null == (c = e.api) ? void 0 : c.resBodyHandler, {
                                url: o.url
                            }) : "", c = (null == (c = e.api) ? void 0 : c.reqHeaders) || [], c = Ie(null == t ? void 0 : t.header, c, "req"), e = (null == (e = e.api) ? void 0 : e.resHeaders) || [], e = Ie(null == n ? void 0 : n.header, e, "res"), y(null == t ? void 0 : t.header));
                        r = "req url: " + o.url + "\n                    \nres status: " + r + "\n                    \nres duration: " + o.duration + "ms \n                    \nreq type: " + o.type + "\n                    \nreq params: " + s + "\n                    \nres retcode: " + o.ret + "\n                    \nres data: " + i + "\n                    " + c + "\n                    " + e, this.publishNormalLog({
                            msg: r,
                            level: l ? W.RET_ERROR : W.API_RESPONSE,
                            ctx: n,
                            trace: u
                        }), this.publishSpeedLog(o)
                    },
                    publishSpeedLog: function(e) {
                        this.$walk((function(t) {
                            t.speedLogPipeline(e)
                        }))
                    },
                    publishNormalLog: function(e) {
                        this.$walk((function(t) {
                            t.normalLogPipeline(e)
                        }))
                    }
                }),
                De = wx || qq,
                Fe = De.connectSocket,
                Be = (Ke.prototype.addConfig = function(e) {
                    var t = e.send;
                    e = e.onError, t && this.sends.push(t), e && this.onErrors.push(e)
                }, Ke.prototype.toHack = function(e) {
                    var t = this,
                        n = (this.onErrors.forEach((function(t) {
                            e.onError(t)
                        })), e.send);
                    return Object.defineProperty(e, "send", {get: function() {
                            return function(o) {
                                return new Promise((function(i) {
                                    n.call(e, r(r({}, o), {
                                        fail: function(e) {
                                            t.sends.forEach((function(t) {
                                                var n;
                                                null != (n = t.fail) && n.call(t, e, o)
                                            })), i(e)
                                        }
                                    }))
                                }))
                            }
                        }
                    }), e
                }, Ke),
                We = (t(ze, He = Ee), ze.prototype.addTaskConf = function(e) {
                    this.taskHack.addConfig(e)
                }, ze.prototype.defineApiProperty = function() {
                    var e = this;
                    Object.defineProperty(De, "connectSocket", {get: function() {
                            return e.hackHandler.bind(e)
                        }
                    })
                }, ze.prototype.hackHandler = function(e) {
                    var t = this,
                        n = this.prefixHandler(e);
                    return e = Fe(r(r({}, n), {
                        success: function(e) {
                            t.successHandler(e, n)
                        },
                        fail: function(e) {
                            t.failHandler(e, n)
                        },
                        complete: function(e) {
                            t.completeHandler(e, n)
                        }
                    })), this.taskHack.toHack(e), e
                }, ze),
                Ve = (Ee = new he({
                    name: "onError",
                    onNewAegis: function(e) {
                        var t = ge.getSystemInfoSync().SDKVersion;
                        this.listenError(), this.hackNetWork(e), this.hackCloud(e), e.config.websocketHack && j(t, "1.7.0") && this.hackWsConnect()
                    },
                    listenError: function() {
                        var e = this;
                        "function" == typeof ge.onError && ge.onError((function(t) {
                            t && e.publishErrorLog({
                                msg: t,
                                level: W.ERROR
                            })
                        })), M("onUnhandledRejection") && ge.onUnhandledRejection((function(t) {
                            var n;
                            !(t = t.reason) || -1 < JSON.stringify(t).indexOf("request:fail") || e.publishErrorLog({
                                msg: t,
                                errorMsg: null == (n = null == (t = (null == t ? void 0 : t.message) || (null == t ? void 0 : t.errMsg) || ee(t)) ? void 0 : t.slice) ? void 0 : n.call(t, 0, 150),
                                level: W.PROMISE_ERROR
                            })
                        })), M("onPageNotFound") && ge.onPageNotFound((function(t) {
                            t && e.publishErrorLog({
                                msg: t,
                                level: W.PAGE_NOT_FOUND_ERROR
                            })
                        })), M("onLazyLoadError") && ge.onLazyLoadError((function(t) {
                            t && e.publishErrorLog({
                                msg: t,
                                level: W.LAZY_LOAD_ERROR
                            })
                        }))
                    },
                    publishErrorLog: function(e) {
                        this.$walk((function(t) {
                            t.normalLogPipeline(e)
                        }))
                    },
                    hackNetWork: function(e) {
                        for (var t = this, n = e.config, r = 0, o = [{
                                apiName: "request",
                                complete: function(e, r) {
                                    return t.requestCompleteError(e, r, n)
                                }
                            }, {
                                apiName: "uploadFile",
                                complete: function(e, r) {
                                    return t.uploadFileCompleteError(e, r, n)
                                }
                            }, {
                                apiName: "downloadFile",
                                complete: function(e, r) {
                                    return t.downloadFileCompleteError(e, r, n)
                                }
                            }]; r < o.length; r++) {
                            var i;
                            B({
                                apiName: (i = o[r]).apiName,
                                complete: i = i.complete
                            })
                        }
                    },
                    requestCompleteError: function(e, t, n) {
                        var r = e.errMsg,
                            o = e.statusCode;
                        k(t.url, n.hostUrl) || (r = this.getErrorType({
                            errMsg: r,
                            statusCode: o
                        })) && this.publishNetWorkError({
                            apiName: "request",
                            opts: t,
                            res: e,
                            config: n,
                            type: r
                        })
                    },
                    downloadFileCompleteError: function(e, t, n) {
                        var r = e.errMsg,
                            o = e.statusCode,
                            i = e.filePath,
                            a = e.tempFilePath;
                        (r = this.getErrorType({
                            errMsg: r,
                            statusCode: o
                        })) && this.publishNetWorkError({
                            apiName: "downloadFile",
                            opts: t,
                            res: e,
                            config: n,
                            type: r
                        }, {
                            extraInfo: "\nres filePath: " + i + "\nres tempFilePath: " + a
                        })
                    },
                    uploadFileCompleteError: function(e, t, n) {
                        var r = e.errMsg,
                            o = e.statusCode;
                        (r = this.getErrorType({
                            errMsg: r,
                            statusCode: o
                        })) && this.publishNetWorkError({
                            apiName: "uploadFile",
                            opts: t,
                            res: e,
                            config: n,
                            type: r
                        })
                    },
                    hackCloud: function(e) {
                        for (var t = this, n = e.config, r = 0, o = [{
                                apiName: "callFunction",
                                complete: function(e, r) {
                                    return t.callFunctionCompleteError(e, r, n)
                                }
                            }, {
                                apiName: "callContainer",
                                complete: function(e, r) {
                                    return t.callContainerCompleteError(e, r, n)
                                }
                            }]; r < o.length; r++) {
                            var i;
                            F({
                                apiName: (i = o[r]).apiName,
                                complete: i = i.complete
                            })
                        }
                    },
                    callFunctionCompleteError: function(e, t, n) {
                        var r = e.errMsg;
                        (r = this.getErrorType({
                            errMsg: r
                        })) && this.publishNetWorkError({
                            apiName: "cloud.callFunction",
                            opts: t,
                            res: e,
                            config: n,
                            type: r
                        })
                    },
                    callContainerCompleteError: function(e, t, n) {
                        var r = e.errMsg,
                            o = e.statusCode;
                        (r = this.getErrorType({
                            errMsg: r,
                            statusCode: o
                        })) && this.publishNetWorkError({
                            apiName: "cloud.callContainer",
                            opts: t,
                            res: e,
                            config: n,
                            type: r
                        })
                    },
                    publishNetWorkError: function(e, t) {
                        t = (null == t ? void 0 : t.extraInfo) || "";
                        var n = e.apiName,
                            r = e.opts,
                            o = e.res,
                            i = e.config,
                            a = (e = e.type, o.errMsg),
                            s = o.statusCode,
                            c = o.data,
                            l = r.url,
                            u = P(c, i.api, {
                                url: l,
                                ctx: o,
                                payload: r.data
                            }).code,
                            f = (p = null == (p = i.api) ? void 0 : p.apiDetail) ? T(r.data, null == (f = i.api) ? void 0 : f.reqParamHandler, {
                                url: l
                            }) : "",
                            p = (c = p ? T(c, null == (p = i.api) ? void 0 : p.resBodyHandler, {
                                url: l
                            }) : "", l = (null == (p = i.api) ? void 0 : p.reqHeaders) || [], Ie(null == r ? void 0 : r.header, l, "req"));
                        i = (null == (l = i.api) ? void 0 : l.resHeaders) || [], l = Ie(null == o ? void 0 : o.header, i, "res"), o = y(null == r ? void 0 : r.header), this.publishErrorLog({
                            msg: "AJAX_ERROR: " + n + " " + e + "\n                  \nreq url: " + r.url + "\n                  \nres status: " + (s || 0) + "\n                  \nres duration: " + (Date.now() - r.aegisRequestStartTime) + "ms\n                  \nreq method: " + (r.method || "get") + "\n                  \nreq param: " + f + "\n                  \nres retcode: " + u + "\n                  \nres data: " + c + "\n                  \nerrMsg: " + a.slice(0, 1e3) + "\n                  " + t + "\n                  " + p + "\n                  " + l,
                            level: W.AJAX_ERROR,
                            trace: o
                        })
                    },
                    getErrorType: function(e) {
                        var t = e.errMsg,
                            n = (e = e.statusCode, ""),
                            r = t;
                        return ["timeout", "time out", "ERR_CONNECTION_TIMED_OUT", "ERR_TIMED_OUT", "超时"].some((function(e) {
                            return String(r || "").includes(e)
                        })) ? n = "timeout" : 400 <= e ? n = "error" : (-1 < t.indexOf("fail") || !e || e < 0) && (n = "failed"), n
                    },
                    hackWsConnect: function() {
                        var e, t, n = this;
                        B({
                            apiName: "sendSocketMessage",
                            fail: function(e) {
                                n.publishSocketError(e)
                            }
                        }), e = (t = {
                            connectCallback: {
                                fail: function(e) {
                                    n.publishSocketError(e)
                                }
                            },
                            taskOpt: {
                                onError: function(e) {
                                    n.publishSocketError(e)
                                },
                                send: {
                                    fail: function(e) {
                                        n.publishSocketError(e)
                                    }
                                }
                            }
                        }).connectCallback, t = t.taskOpt, je ? je.addCallback(e) : je = new We(e), t && je.addTaskConf(t)
                    },
                    publishSocketError: function(e) {
                        e && this.publishErrorLog({
                            msg: e.errMsg,
                            level: W.WEBSOCKET_ERROR
                        })
                    }
                }), new he({
                    name: "reportAssetSpeed",
                    isStart: !1,
                    onNewAegis: function(e) {
                        this.isStart || (this.isStart = !0, this.start(e))
                    },
                    start: function(e) {
                        var t, n = this;
                        ge.getPerformance && "function" == typeof(t = ge.getPerformance()).createObserver && t.createObserver((function(t) {
                            null != (t = t.getEntries()) && t.forEach((function(t) {
                                k(t.uri, e.config.hostUrl) || "number" != typeof t.duration || t.duration <= 0 || n.publishAssetLog(t)
                            }))
                        })).observe({
                            entryTypes: ["resource"]
                        })
                    },
                    generateLog: function(e) {
                        var t, n, r = e.transferSize;
                        return {
                            url: (t = e.uri, void 0 === n && (n = 2048), String(t).replace(i, "").slice(0, n)),
                            method: "get",
                            duration: Math.round(100 * e.duration) / 100,
                            status: 200,
                            type: "static",
                            isHttps: !0,
                            urlQuery: w(e.uri, !0),
                            nextHopProtocol: "",
                            domainLookup: 0,
                            connectTime: 0,
                            transferSize: 0 < r ? r : -1
                        }
                    },
                    publishAssetLog: function(e) {
                        var t = this;
                        this.$walk((function(n) {
                            n.speedLogPipeline(t.generateLog(e))
                        }))
                    }
                })),
                Ge = ["onLaunch", "onHide", "onError", "onLoad", "onReady", "onShow", "onUnload"],
                Je = new he({
                    name: "pagePerformance",
                    pageNavigationStartTime: {},
                    onNewAegis: function(e) {
                        try {
                            M("getPerformance") && this.reportPerformance(e), this.setPagePV(e), this.reportSetDataTiming(e)
                        } catch (e) {}
                    },
                    reportPerformance: function(e) {
                        var t = this,
                            n = ge.getPerformance();
                        "function" == typeof n.createObserver && null != (n = null == n ? void 0 : n.createObserver((function(n) {
                            var r = {},
                                o = null == (o = n.getEntriesByName("appLaunch")) ? void 0 : o[0],
                                i = null == (i = n.getEntriesByName("firstRender")) ? void 0 : i[0],
                                a = null == (a = n.getEntriesByName("evaluateScript")) ? void 0 : a[0],
                                s = null == (s = n.getEntriesByName("route")) ? void 0 : s[0],
                                c = null == (c = null == (c = n.getEntriesByName("firstPaint")) ? void 0 : c[0]) ? void 0 : c.startTime,
                                l = null == (l = null == (l = n.getEntriesByName("largestContentfulPaint")) ? void 0 : l[0]) ? void 0 : l.startTime,
                                u = null == (u = null == (u = n.getEntriesByName("firstContentfulPaint")) ? void 0 : u[0]) ? void 0 : u.startTime,
                                f = null == (f = (null == (f = n.getEntriesByName("firstPaint")) ? void 0 : f[0]) || (null == (f = n.getEntriesByName("route")) ? void 0 : f[0]) || (null == (f = n.getEntriesByName("appLaunch")) ? void 0 : f[0])) ? void 0 : f.pageId,
                                p = null == (n = (null == (p = n.getEntriesByName("route")) ? void 0 : p[0]) || (null == (p = n.getEntriesByName("appLaunch")) ? void 0 : p[0])) ? void 0 : n.startTime;
                            f && (t.pageNavigationStartTime[f] = null, p) && (t.pageNavigationStartTime[f] = p), o && (r.appLaunch = o.duration || -1), i && (r.firstScreenTiming = i.duration || -1), a && (r.scriptEvaluateTiming = a.duration || -1), s && (r.pageRouteTiming = s.duration || -1), c && p ? r.firstPaintTiming = Math.max(c - p, -1) : c && t.pageNavigationStartTime[f] && (r.firstPaintTiming = Math.max(c - t.pageNavigationStartTime[f], -1)), l && p ? r.LCP = Math.max(l - p, -1) : l && t.pageNavigationStartTime[f] && (r.LCP = Math.max(l - t.pageNavigationStartTime[f], -1)), u && p ? r.FCP = Math.max(u - p, -1) : u && t.pageNavigationStartTime[f] && (r.FCP = Math.max(u - t.pageNavigationStartTime[f], -1)), 0 < Object.keys(r).length && t.publish(r, e)
                        }))) && n.observe({
                            entryTypes: ["navigation", "render", "script"]
                        })
                    },
                    publish: function(e, t) {
                        var n, r, o, i = [],
                            a = t.config,
                            s = -1 === (null == (n = t.config.performanceUrl) ? void 0 : n.indexOf("?")) ? "?" : "&";
                        for (r in e) i.push(r + "=" + e[r]);
                        "function" == typeof a.urlHandler ? (o = a.urlHandler() || window.location.href, this.$walk((function(n) {
                            n.send({
                                url: t.config.performanceUrl + s + i.join("&") + "&from=" + encodeURIComponent(o),
                                beanFilter: ["from"],
                                type: J.PERFORMANCE,
                                log: e
                            })
                        }))) : this.$walk((function(n) {
                            n.send({
                                url: t.config.performanceUrl + s + i.join("&"),
                                type: J.PERFORMANCE,
                                log: e
                            })
                        }))
                    },
                    setPagePV: function(e) {
                        var t = this;
                        ge.onAppRoute && ge.onAppRoute((function(n) {
                            "appLaunch" === n.openType && !e.config.spa || (t.$walk((function(e) {
                                e.send({
                                    url: "" + e.config.pvUrl,
                                    type: J.PV
                                })
                            })), t.reportPageLoaded(n))
                        }))
                    },
                    reportPageLoaded: function(e) {
                        e = "infoType: behaviorBacktracking\ndataType: pageLoadAndRoute\npageLoadedPath: " + e.path + "\nopenType: " + e.openType, this.publishNormalLog({
                            msg: e,
                            level: W.INFO
                        })
                    },
                    publishNormalLog: function(e) {
                        this.$walk((function(t) {
                            t.normalLogPipeline(e)
                        }))
                    },
                    reportSetDataTiming: function(e) {
                        var t, n, r, o, i, a, s, c, l, u = this;
                        !0 !== (l = void 0 === (l = e.config.setDataReportConfig) ? {} : l).disabled && (t = l.timeThreshold, n = !1 !== l.withDataPaths, r = t && 0 < +t ? +t : 30, o = U([C(e, 10), function(t) {
                            t = t.map((function(e) {
                                return {
                                    type: J.SET_DATA,
                                    component: e.from,
                                    duration: e.duration,
                                    fields: e.dataPaths && e.dataPaths.length ? e.dataPaths.sort().join(";") : void 0,
                                    size: e.size
                                }
                            })), e.send({
                                url: e.config.setDataReportUrl + "?payload=" + encodeURIComponent(JSON.stringify({
                                    miniProgramData: t
                                })),
                                type: J.SET_DATA,
                                log: t
                            })
                        }]), i = Page, a = Component, s = function(e, t) {
                            var i, a, s = t.updateStartTimestamp,
                                c = t.updateEndTimestamp;
                            t = void 0 === (t = t.dataPaths) ? [] : t, c -= s, isNaN(c) || c < r || (s = {
                                from: e.is,
                                duration: c
                            }, n && 0 < t.length && Object.assign(s, {
                                dataPaths: t.slice(0, 30),
                                size: (c = t, a = 0, null != (i = e) && i.data ? (c.forEach((function(e) {
                                    for (var t = i.data[e[0]], n = 1, r = e.length; n < r; n++) t[e[n]] && (t = t[e[n]]);
                                    var o = "";
                                    try {
                                        o = JSON.stringify(t)
                                    } catch (e) {
                                        o = ""
                                    }
                                    a += 2 * (void 0 === o ? "" : o).replace(/[\u4e00-\u9fa5]/g, "aa").length
                                })), a = Math.min(a, 10485760)) : a)
                            }), o(s))
                        }, c = function(e) {
                            var t = "infoType: behaviorBacktracking\ndataType: tapEvent" + Object.keys(e[0]).reduce((function(t, n) {
                                var r = "";
                                try {
                                    r = n + ": " + JSON.stringify(e[0][n])
                                } catch (t) {
                                    r = ""
                                }
                                return t + "\n" + r
                            }), "");
                            u.publishNormalLog({
                                msg: t,
                                level: W.INFO
                            })
                        }, Page = function(e) {
                            var t = e.onReady;
                            return e.onReady = function() {
                                var e = this;
                                return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({
                                    withDataPaths: n
                                }, (function(t) {
                                    s(e, t)
                                })), null == t ? void 0 : t.call(this)
                            }, Object.keys(e).forEach((function(t) {
                                var n;
                                "function" != typeof e[t] || Ge.includes(t) || (n = e[t], e[t] = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return null != e && e[0] && "tap" === e[0].type && c(e), null == n ? void 0 : n.apply(this, e)
                                })
                            })), i(e)
                        }, Component = function(e) {
                            e.lifetimes && e.lifetimes.attached ? (t = e.lifetimes.attached, e.lifetimes.attached = function() {
                                var e = this;
                                return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({
                                    withDataPaths: n
                                }, (function(t) {
                                    s(e, t)
                                })), null == t ? void 0 : t.call(this)
                            }) : (r = e.attached, e.attached = function() {
                                var e = this;
                                return "function" == typeof this.setUpdatePerformanceListener && this.setUpdatePerformanceListener({
                                    withDataPaths: n
                                }, (function(t) {
                                    s(e, t)
                                })), null == r ? void 0 : r.call(this)
                            });
                            var t, r, o = e.methods;
                            return o && "[object Object]" === Object.prototype.toString.call(o) && Object.keys(o).forEach((function(e) {
                                var t;
                                "function" == typeof o[e] && (t = o[e], o[e] = function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    return null != e && e[0] && "tap" === e[0].type && c(e), null == t ? void 0 : t.apply(this, e)
                                })
                            })), a(e)
                        })
                    }
                });

            function ze(e) {
                return (e = He.call(this, e) || this).taskHack = new Be, e
            }

            function Ke() {
                this.onErrors = [], this.sends = []
            }
            return he = new he({
                name: "reportLoadPackageSpeed",
                isLoaded: !1,
                onNewAegis: function(e) {
                    this.isLoaded || (this.isLoaded = !0, this.start(e))
                },
                start: function() {
                    var e, t = this;
                    ge.getPerformance && "function" == typeof(e = ge.getPerformance()).createObserver && e.createObserver((function(e) {
                        null != (e = e.getEntries()) && e.forEach((function(e) {
                            "number" != typeof e.duration || e.duration <= 0 || t.publishPackageLog(e)
                        }))
                    })).observe({
                        entryTypes: ["loadPackage"]
                    })
                },
                generateLog: function(e) {
                    return [{
                        type: J.LOAD_PACKAGE,
                        packageName: e.packageName,
                        size: Math.round(100 * e.packageSize) / 100,
                        duration: Math.round(100 * e.duration) / 100
                    }]
                },
                publishPackageLog: function(e) {
                    var t = this;
                    this.$walk((function(n) {
                        var r = t.generateLog(e);
                        n.send({
                            url: n.config.setDataReportUrl + "?payload=" + encodeURIComponent(JSON.stringify({
                                miniProgramData: r
                            })),
                            type: J.LOAD_PACKAGE,
                            log: r
                        })
                    }))
                }
            }), de.use(Ee), de.use(Me), de.use(be), de.use(Ve), de.use(Je), de.use(he), de.use(ye), de
        }))
    }), (function(e) {
        return t({}[e], e)
    })), t(1744818819529));