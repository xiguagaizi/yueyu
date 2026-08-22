var __wxAppData = __wxAppData || {};
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
if (this && this.__g === undefined) Object.defineProperty(this, "__g", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function() {
        function D(e, t) {
            if (typeof t != "undefined") e.children.push(t)
        }

        function S(e) {
            if (typeof e != "undefined") return {
                tag: "virtual",
                wxKey: e,
                children: []
            };
            return {
                tag: "virtual",
                children: []
            }
        }

        function v(e) {
            return {
                tag: "wx-" + e,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function e(e, t) {
            t && e.properities.push(t)
        }

        function t(e, t, r) {
            return typeof e[r] != "undefined" ? e[r] : t[r]
        }

        function u(e) {
            console.warn("WXMLRT_" + g + ":" + e)
        }

        function r(e, t) {
            u(t + ":-1:-1:-1: Template `" + e + "` is being called recursively, will be stop.")
        }
        var s = console.warn;
        var n = console.log;

        function o() {
            function e() {}
            e.prototype = {
                hn: function(e, t) {
                    if (typeof e == "object") {
                        var r = 0;
                        var n = false,
                            o = false;
                        for (var a in e) {
                            n = n | a === "__value__";
                            o = o | a === "__wxspec__";
                            r++;
                            if (r > 2) break
                        }
                        return r == 2 && n && o && (t || e.__wxspec__ !== "m" || this.hn(e.__value__) === "h") ? "h" : "n"
                    }
                    return "n"
                },
                nh: function(e, t) {
                    return {
                        __value__: e,
                        __wxspec__: t ? t : true
                    }
                },
                rv: function(e) {
                    return this.hn(e, true) === "n" ? e : this.rv(e.__value__)
                },
                hm: function(e) {
                    if (typeof e == "object") {
                        var t = 0;
                        var r = false,
                            n = false;
                        for (var o in e) {
                            r = r | o === "__value__";
                            n = n | o === "__wxspec__";
                            t++;
                            if (t > 2) break
                        }
                        return t == 2 && r && n && (e.__wxspec__ === "m" || this.hm(e.__value__))
                    }
                    return false
                }
            };
            return new e
        }
        var A = o();

        function T(e) {
            var t = e.split("\n " + " " + " " + " ");
            for (var r = 0; r < t.length; ++r) {
                if (0 == r) continue;
                if (")" === t[r][t[r].length - 1]) t[r] = t[r].replace(/\s\(.*\)$/, "");
                else t[r] = "at anonymous function"
            }
            return t.join("\n " + " " + " " + " ")
        }

        function a(M) {
            function m(e, t, r, n, o) {
                var a = false;
                var i = e[0][1];
                var p, u, l, f, v, c;
                switch (i) {
                    case "?:":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : x(e[3], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "&&":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : A.rv(p);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "||":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? A.rv(p) : x(e[2], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "+":
                    case "*":
                    case "/":
                    case "%":
                    case "|":
                    case "^":
                    case "&":
                    case "===":
                    case "==":
                    case "!=":
                    case "!==":
                    case ">=":
                    case "<=":
                    case ">":
                    case "<":
                    case "<<":
                    case ">>":
                        p = x(e[1], t, r, n, o, a);
                        u = x(e[2], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        switch (i) {
                            case "+":
                                f = A.rv(p) + A.rv(u);
                                break;
                            case "*":
                                f = A.rv(p) * A.rv(u);
                                break;
                            case "/":
                                f = A.rv(p) / A.rv(u);
                                break;
                            case "%":
                                f = A.rv(p) % A.rv(u);
                                break;
                            case "|":
                                f = A.rv(p) | A.rv(u);
                                break;
                            case "^":
                                f = A.rv(p) ^ A.rv(u);
                                break;
                            case "&":
                                f = A.rv(p) & A.rv(u);
                                break;
                            case "===":
                                f = A.rv(p) === A.rv(u);
                                break;
                            case "==":
                                f = A.rv(p) == A.rv(u);
                                break;
                            case "!=":
                                f = A.rv(p) != A.rv(u);
                                break;
                            case "!==":
                                f = A.rv(p) !== A.rv(u);
                                break;
                            case ">=":
                                f = A.rv(p) >= A.rv(u);
                                break;
                            case "<=":
                                f = A.rv(p) <= A.rv(u);
                                break;
                            case ">":
                                f = A.rv(p) > A.rv(u);
                                break;
                            case "<":
                                f = A.rv(p) < A.rv(u);
                                break;
                            case "<<":
                                f = A.rv(p) << A.rv(u);
                                break;
                            case ">>":
                                f = A.rv(p) >> A.rv(u);
                                break;
                            default:
                                break
                        }
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "-":
                        p = e.length === 3 ? x(e[1], t, r, n, o, a) : 0;
                        u = e.length === 3 ? x(e[2], t, r, n, o, a) : x(e[1], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        f = l ? A.rv(p) - A.rv(u) : p - u;
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "!":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = !A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    case "~":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = ~A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    default:
                        s("unrecognized op" + i)
                }
            }

            function x(e, t, r, n, o, a) {
                var i = e[0];
                var p = false;
                if (typeof a !== "undefined") o.ap = a;
                if (typeof i === "object") {
                    var u = i[0];
                    var l, f, v, c, s, y, b, d, h, _, g;
                    switch (u) {
                        case 2:
                            return m(e, t, r, n, o);
                            break;
                        case 4:
                            return x(e[1], t, r, n, o, p);
                            break;
                        case 5:
                            switch (e.length) {
                                case 2:
                                    l = x(e[1], t, r, n, o, p);
                                    return M ? [l] : [A.rv(l)];
                                    return [l];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    l = x(e[1], t, r, n, o, p);
                                    v = x(e[2], t, r, n, o, p);
                                    l.push(M ? v : A.rv(v));
                                    return l;
                                    break
                            }
                            break;
                        case 6:
                            l = x(e[1], t, r, n, o);
                            var w = o.ap;
                            h = A.hn(l) === "h";
                            f = h ? A.rv(l) : l;
                            o.is_affected |= h;
                            if (M) {
                                if (f === null || typeof f === "undefined") {
                                    return h ? A.nh(undefined, "e") : undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return h || _ ? A.nh(undefined, "e") : undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return h || _ ? g ? y : A.nh(y, "e") : y
                            } else {
                                if (f === null || typeof f === "undefined") {
                                    return undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return g ? A.rv(y) : y
                            }
                        case 7:
                            switch (e[1][0]) {
                                case 11:
                                    o.is_affected |= A.hn(n) === "h";
                                    return n;
                                case 3:
                                    b = A.rv(r);
                                    d = A.rv(t);
                                    v = e[1][1];
                                    if (n && n.f && n.f.hasOwnProperty(v)) {
                                        l = n.f;
                                        o.ap = true
                                    } else {
                                        l = b && b.hasOwnProperty(v) ? r : d && d.hasOwnProperty(v) ? t : undefined
                                    }
                                    if (M) {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            y = h && !g ? A.nh(y, "e") : y;
                                            return y
                                        }
                                    } else {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            return A.rv(y)
                                        }
                                    }
                                    return undefined
                            }
                            break;
                        case 8:
                            l = {};
                            l[e[1]] = x(e[2], t, r, n, o, p);
                            return l;
                            break;
                        case 9:
                            l = x(e[1], t, r, n, o, p);
                            v = x(e[2], t, r, n, o, p);

                            function O(e, t, r) {
                                var n, o;
                                h = A.hn(e) === "h";
                                _ = A.hn(t) === "h";
                                f = A.rv(e);
                                c = A.rv(t);
                                for (var a in c) {
                                    if (r || !f.hasOwnProperty(a)) {
                                        f[a] = M ? _ ? A.nh(c[a], "e") : c[a] : A.rv(c[a])
                                    }
                                }
                                return e
                            }
                            var s = l;
                            var j = true;
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                l = v;
                                v = s;
                                j = false
                            }
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                var P = {};
                                return O(O(P, l, j), v, j)
                            } else return O(l, v, j);
                            break;
                        case 10:
                            l = x(e[1], t, r, n, o, p);
                            l = M ? l : A.rv(l);
                            return l;
                            break;
                        case 12:
                            var P;
                            l = x(e[1], t, r, n, o);
                            if (!o.ap) {
                                return M && A.hn(l) === "h" ? A.nh(P, "f") : P
                            }
                            var w = o.ap;
                            v = x(e[2], t, r, n, o, p);
                            o.ap = w;
                            h = A.hn(l) === "h";
                            _ = N(v);
                            f = A.rv(l);
                            c = A.rv(v);
                            snap_bb = K(c, "nv_");
                            try {
                                P = typeof f === "function" ? K(f.apply(null, snap_bb)) : undefined
                            } catch (t) {
                                t.message = t.message.replace(/nv_/g, "");
                                t.stack = t.stack.substring(0, t.stack.indexOf("\n", t.stack.lastIndexOf("at nv_")));
                                t.stack = t.stack.replace(/\snv_/g, " ");
                                t.stack = T(t.stack);
                                if (n.debugInfo) {
                                    t.stack += "\n " + " " + " " + " at " + n.debugInfo[0] + ":" + n.debugInfo[1] + ":" + n.debugInfo[2];
                                    console.error(t)
                                }
                                P = undefined
                            }
                            return M && (_ || h) ? A.nh(P, "f") : P
                    }
                } else {
                    if (i === 3 || i === 1) return e[1];
                    else if (i === 11) {
                        var l = "";
                        for (var D = 1; D < e.length; D++) {
                            var S = A.rv(x(e[D], t, r, n, o, p));
                            l += typeof S === "undefined" ? "" : S
                        }
                        return l
                    }
                }
            }

            function e(e, t, r, n, o, a) {
                if (e[0] == "11182016") {
                    n.debugInfo = e[2];
                    return x(e[1], t, r, n, o, a)
                } else {
                    n.debugInfo = null;
                    return x(e, t, r, n, o, a)
                }
            }
            return e
        }
        var f = a(true);
        var c = a(false);

        function i(e, t, r, n, o, a, i, p) {
            {
                var u = {
                    is_affected: false
                };
                var l = f(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(a) || u.is_affected != p) {
                    console.warn("A. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(a) + ", " + p + " is expected")
                }
            } {
                var u = {
                    is_affected: false
                };
                var l = c(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(i) || u.is_affected != p) {
                    console.warn("B. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(i) + ", " + p + " is expected")
                }
            }
        }

        function y(e, t, r, n, o, a, i, p, u) {
            var l = A.hn(e) === "n";
            var f = A.rv(n);
            var v = f.hasOwnProperty(i);
            var c = f.hasOwnProperty(p);
            var s = f[i];
            var y = f[p];
            var b = Object.prototype.toString.call(A.rv(e));
            var d = b[8];
            if (d === "N" && b[10] === "l") d = "X";
            var h;
            if (l) {
                if (d === "A") {
                    var _;
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        _ = A.rv(e[g]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    var _;
                    for (var O in e) {
                        f[i] = e[O];
                        f[p] = l ? O : A.nh(O, "h");
                        _ = A.rv(e[O]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < e; g++) {
                        f[i] = g;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            } else {
                var j = A.rv(e);
                var _, P;
                if (d === "A") {
                    for (var g = 0; g < j.length; g++) {
                        P = j[g];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    for (var O in j) {
                        P = j[O];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? O : A.nh(O, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < j.length; g++) {
                        P = A.nh(j[g], "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < j; g++) {
                        P = A.nh(g, "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            }
            if (v) {
                f[i] = s
            } else {
                delete f[i]
            }
            if (c) {
                f[p] = y
            } else {
                delete f[p]
            }
        }

        function N(e) {
            if (A.hn(e) == "h") return true;
            if (typeof e !== "object") return false;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (N(e[t])) return true
                }
            }
            return false
        }

        function b(e, t, r, n, o) {
            var a = false;
            var i = K(n, "", 2);
            if (o.ap && i && i.constructor === Function) {
                t = "$wxs:" + t;
                e.attr["$gdc"] = K
            }
            if (o.is_affected || N(n)) {
                e.n.push(t);
                e.raw[t] = n
            }
            e.attr[t] = i
        }

        function d(e, t, r, n, o, a) {
            a.opindex = r;
            var i = {},
                p;
            var u = c(z[r], n, o, a, i);
            b(e, t, r, u, i)
        }

        function h(e, t, r, n, o, a, i) {
            i.opindex = n;
            var p = {},
                u;
            var l = c(e[n], o, a, i, p);
            b(t, r, n, l, p)
        }

        function p(e, t, r, n) {
            n.opindex = e;
            var o = {};
            var a = c(z[e], t, r, n, o);
            return a && a.constructor === Function ? undefined : a
        }

        function l(e, t, r, n, o) {
            o.opindex = t;
            var a = {};
            var i = c(e[t], r, n, o, a);
            return i && i.constructor === Function ? undefined : i
        }

        function _(e, t, r, n, o) {
            var o = o || {};
            n.opindex = e;
            return f(z[e], t, r, n, o)
        }

        function w(e, t, r, n, o, a) {
            var a = a || {};
            o.opindex = t;
            return f(e[t], r, n, o, a)
        }

        function O(e, t, r, n, o, a, i, p, u) {
            var l = {};
            var f = _(e, r, n, o);
            y(f, t, r, n, o, a, i, p, u)
        }

        function j(e, t, r, n, o, a, i, p, u, l) {
            var f = {};
            var v = w(e, t, n, o, a);
            y(v, r, n, o, a, i, p, u, l)
        }

        function P(e, t, r, n, o, a) {
            var i = v(e);
            var p = 0;
            for (var u = 0; u < t.length; u += 2) {
                if (p + t[u + 1] < 0) {
                    i.attr[t[u]] = true
                } else {
                    d(i, t[u], p + t[u + 1], n, o, a);
                    if (p === 0) p = t[u + 1]
                }
            }
            for (var u = 0; u < r.length; u += 2) {
                if (p + r[u + 1] < 0) {
                    i.generics[r[u]] = ""
                } else {
                    var l = c(z[p + r[u + 1]], n, o, a);
                    if (l != "") l = "wx-" + l;
                    i.generics[r[u]] = l;
                    if (p === 0) p = r[u + 1]
                }
            }
            return i
        }

        function M(e, t, r, n, o, a, i) {
            var p = v(t);
            var u = 0;
            for (var l = 0; l < r.length; l += 2) {
                if (u + r[l + 1] < 0) {
                    p.attr[r[l]] = true
                } else {
                    h(e, p, r[l], u + r[l + 1], o, a, i);
                    if (u === 0) u = r[l + 1]
                }
            }
            for (var l = 0; l < n.length; l += 2) {
                if (u + n[l + 1] < 0) {
                    p.generics[n[l]] = ""
                } else {
                    var f = c(e[u + n[l + 1]], o, a, i);
                    if (f != "") f = "wx-" + f;
                    p.generics[n[l]] = f;
                    if (u === 0) u = n[l + 1]
                }
            }
            return p
        }
        var m = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                x();
                C();
                k();
                U();
                I();
                L();
                E();
                R();
                F()
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true
        };
        var x = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            });
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        };
        var C = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            });
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        };
        var k = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join()
                }
            });
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(e) {
                    e = undefined == e ? "," : e;
                    var t = "";
                    for (var r = 0; r < this.length; ++r) {
                        if (0 != r) t += e;
                        if (null == this[r] || undefined == this[r]) t += "";
                        else if (typeof this[r] == "function") t += this[r].nv_toString();
                        else if (typeof this[r] == "object" && this[r].nv_constructor === "Array") t += this[r].nv_join();
                        else t += this[r].toString()
                    }
                    return t
                }
            });
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            });
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            });
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            });
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            });
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            });
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            });
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            });
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            });
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            });
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            });
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            });
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            });
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            });
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            });
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            });
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            });
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            });
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            });
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            });
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var U = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            });
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            });
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            });
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            });
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            });
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            });
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            });
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            });
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            });
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            });
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            });
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            });
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            });
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            });
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            });
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            });
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            });
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var I = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            });
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            });
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        };
        var L = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            });
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            });
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            });
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            });
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            });
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            });
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            });
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            });
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            });
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            });
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        };
        var E = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            });
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            });
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            });
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            });
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            });
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            });
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            });
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            });
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            });
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            });
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            });
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            });
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            });
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            });
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            });
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            });
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            });
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            });
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            });
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            });
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            });
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            });
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            });
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            });
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            });
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        };
        var R = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            });
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            });
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            });
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            });
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            });
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            });
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            });
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            });
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            });
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            });
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            });
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            });
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            });
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            });
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            });
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            });
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            });
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            });
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        };
        var F = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            });
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            });
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            });
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            });
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex
                },
                set: function(e) {
                    this.lastIndex = e
                }
            })
        };
        m();
        var J = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(Date);
            return new(Function.prototype.bind.apply(Date, e))
        };
        var B = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, e))
        };
        var Y = {};
        Y.nv_log = function() {
            var e = "WXSRT:";
            for (var t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
            console.log(e)
        };
        var G = parseInt,
            X = parseFloat,
            H = isNaN,
            V = isFinite,
            $ = decodeURI,
            W = decodeURIComponent,
            Q = encodeURI,
            q = encodeURIComponent;

        function K(e, t, r) {
            e = A.rv(e);
            if (e === null || e === undefined) return e;
            if (typeof e === "string" || typeof e === "boolean" || typeof e === "number") return e;
            if (e.constructor === Object) {
                var n = {};
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o))
                        if (undefined === t) n[o.substring(3)] = K(e[o], t, r);
                        else n[t + o] = K(e[o], t, r);
                return n
            }
            if (e.constructor === Array) {
                var n = [];
                for (var a = 0; a < e.length; a++) n.push(K(e[a], t, r));
                return n
            }
            if (e.constructor === Date) {
                var n = new Date;
                n.setTime(e.getTime());
                return n
            }
            if (e.constructor === RegExp) {
                var i = "";
                if (e.global) i += "g";
                if (e.ignoreCase) i += "i";
                if (e.multiline) i += "m";
                return new RegExp(e.source, i)
            }
            if (r && typeof e === "function") {
                if (r == 1) return K(e(), undefined, 2);
                if (r == 2) return e
            }
            return null
        }
        var Z = {};
        Z.nv_stringify = function(e) {
            JSON.stringify(e);
            return JSON.stringify(K(e))
        };
        Z.nv_parse = function(e) {
            if (e === undefined) return undefined;
            var t = JSON.parse(e);
            return K(t, "nv_")
        };

        function ee(e, t, r, n) {
            e.extraAttr = {
                t_action: t,
                t_rawid: r
            };
            if (typeof n != "undefined") e.extraAttr.t_cid = n
        }

        function te() {
            if (typeof __globalThis.__webview_engine_version__ == "undefined") return 0;
            return __globalThis.__webview_engine_version__
        }

        function re(e, t, r, n, o, a) {
            var i = ne(t, r, n);
            if (i) e.push(i);
            else {
                e.push("");
                u(n + ":import:" + o + ":" + a + ": Path `" + t + "` not found from `" + n + "`.")
            }
        }

        function ne(e, t, r) {
            if (e[0] != "/") {
                var n = r.split("/");
                n.pop();
                var o = e.split("/");
                for (var a = 0; a < o.length; a++) {
                    if (o[a] == "..") n.pop();
                    else if (!o[a] || o[a] == ".") continue;
                    else n.push(o[a])
                }
                e = n.join("/")
            }
            if (r[0] == "." && e[0] == "/") e = "." + e;
            if (t[e]) return e;
            if (t[e + ".wxml"]) return e + ".wxml"
        }

        function oe(e, t, r, n) {
            if (!t) return;
            if (n[e][t]) return n[e][t];
            for (var o = r[e].i.length - 1; o >= 0; o--) {
                if (r[e].i[o] && n[r[e].i[o]][t]) return n[r[e].i[o]][t]
            }
            for (var o = r[e].ti.length - 1; o >= 0; o--) {
                var a = ne(r[e].ti[o], r, e);
                if (a && n[a][t]) return n[a][t]
            }
            var i = ae(r, e);
            for (var o = 0; o < i.length; o++) {
                if (i[o] && n[i[o]][t]) return n[i[o]][t]
            }
            for (var p = r[e].j.length - 1; p >= 0; p--)
                if (r[e].j[p]) {
                    for (var a = r[r[e].j[p]].ti.length - 1; a >= 0; a--) {
                        var u = ne(r[r[e].j[p]].ti[a], r, e);
                        if (u && n[u][t]) {
                            return n[u][t]
                        }
                    }
                }
        }

        function ae(e, t) {
            if (!t) return [];
            if ($gaic[t]) {
                return $gaic[t]
            }
            var r = [],
                n = [],
                o = 0,
                a = 0,
                i = {},
                p = {};
            n.push(t);
            p[t] = true;
            a++;
            while (o < a) {
                var u = n[o++];
                for (var l = 0; l < e[u].ic.length; l++) {
                    var f = e[u].ic[l];
                    var v = ne(f, e, u);
                    if (v && !p[v]) {
                        p[v] = true;
                        n.push(v);
                        a++
                    }
                }
                for (var l = 0; u != t && l < e[u].ti.length; l++) {
                    var c = e[u].ti[l];
                    var s = ne(c, e, u);
                    if (s && !i[s]) {
                        i[s] = true;
                        r.push(s)
                    }
                }
            }
            $gaic[t] = r;
            return r
        }
        var ie = {};

        function pe(e, t, r, n, o, a, i) {
            var p = ne(e, t, r);
            t[r].j.push(p);
            if (p) {
                if (ie[p]) {
                    u("-1:include:-1:-1: `" + e + "` is being included in a loop, will be stop.");
                    return
                }
                ie[p] = true;
                try {
                    t[p].f(n, o, a, i)
                } catch (n) {}
                ie[p] = false
            } else {
                u(r + ":include:-1:-1: Included path `" + e + "` not found from `" + r + "`.")
            }
        }

        function ue(e, t, r, n) {
            u(t + ":template:" + r + ":" + n + ": Template `" + e + "` not found.")
        }

        function le(e) {
            var t = false;
            delete e.properities;
            delete e.n;
            if (e.children) {
                do {
                    t = false;
                    var r = [];
                    for (var n = 0; n < e.children.length; n++) {
                        var o = e.children[n];
                        if (o.tag == "virtual") {
                            t = true;
                            for (var a = 0; o.children && a < o.children.length; a++) {
                                r.push(o.children[a])
                            }
                        } else {
                            r.push(o)
                        }
                    }
                    e.children = r
                } while (t);
                for (var n = 0; n < e.children.length; n++) {
                    le(e.children[n])
                }
            }
            return e
        }

        function fe(e) {
            if (e.tag == "wx-wx-scope") {
                e.tag = "virtual";
                e.wxCkey = "11";
                e["wxScopeData"] = e.attr["wx:scope-data"];
                delete e.n;
                delete e.raw;
                delete e.generics;
                delete e.attr
            }
            for (var t = 0; e.children && t < e.children.length; t++) {
                fe(e.children[t])
            }
            return e
        }
        return {
            a: D,
            b: S,
            c: v,
            d: e,
            e: t,
            f: u,
            g: r,
            h: s,
            i: n,
            j: o,
            k: A,
            l: T,
            m: a,
            n: f,
            o: c,
            p: i,
            q: y,
            r: N,
            s: b,
            t: d,
            u: h,
            v: p,
            w: l,
            x: _,
            y: w,
            z: O,
            A: j,
            B: P,
            C: M,
            D: J,
            E: B,
            F: Y,
            G: G,
            H: X,
            I: H,
            J: V,
            K: $,
            L: W,
            M: Q,
            N: q,
            O: K,
            P: Z,
            Q: ee,
            R: te,
            S: re,
            T: ne,
            U: oe,
            V: ae,
            W: ie,
            X: pe,
            Y: ue,
            Z: le,
            aa: fe
        }
    }()
});
Object.freeze(__g);
g = "";
__wxAppCode__['pages/checkin/comment/components/player.json'] = {
    "component": true,
    "usingComponents": {
        "van-icon": "../../../../miniprogram_npm/@vant/weapp/icon/index"
    }
};
__wxAppCode__['pages/checkin/comment/components/text.json'] = {
    "component": true,
    "usingComponents": {
        "van-icon": "../../../../miniprogram_npm/@vant/weapp/icon/index"
    }
};
__wxAppCode__['pages/checkin/comment/index.json'] = {
    "usingComponents": {
        "van-nav-bar": "../../../miniprogram_npm/@vant/weapp/nav-bar/index",
        "van-sticky": "../../../miniprogram_npm/@vant/weapp/sticky/index",
        "van-button": "../../../miniprogram_npm/@vant/weapp/button/index",
        "van-popup": "../../../miniprogram_npm/@vant/weapp/popup/index",
        "player": "../../../components/player/index",
        "van-field": "../../../miniprogram_npm/@vant/weapp/field/index",
        "van-icon": "../../../miniprogram_npm/@vant/weapp/icon/index",
        "simple-player": "./components/player",
        "van-action-sheet": "../../../miniprogram_npm/@vant/weapp/action-sheet/index",
        "simple-text": "./components/text",
        "subscribe-button": "../../../components/subscribe-button/index"
    }
};
__wxAppCode__['pages/checkin/help/index.json'] = {
    "usingComponents": {
        "van-nav-bar": "../../../miniprogram_npm/@vant/weapp/nav-bar/index",
        "van-cell": "../../../miniprogram_npm/@vant/weapp/cell/index",
        "van-notice-bar": "../../../miniprogram_npm/@vant/weapp/notice-bar/index",
        "van-cell-group": "../../../miniprogram_npm/@vant/weapp/cell-group/index",
        "van-button": "../../../miniprogram_npm/@vant/weapp/button/index"
    }
};
__wxAppCode__['pages/checkin/history/index.json'] = {
    "usingComponents": {
        "van-nav-bar": "../../../miniprogram_npm/@vant/weapp/nav-bar/index",
        "van-button": "../../../miniprogram_npm/@vant/weapp/button/index",
        "van-row": "../../../miniprogram_npm/@vant/weapp/row/index",
        "van-col": "../../../miniprogram_npm/@vant/weapp/col/index",
        "van-dropdown-menu": "../../../miniprogram_npm/@vant/weapp/dropdown-menu/index",
        "van-dropdown-item": "../../../miniprogram_npm/@vant/weapp/dropdown-item/index",
        "van-sticky": "../../../miniprogram_npm/@vant/weapp/sticky/index",
        "van-icon": "../../../miniprogram_npm/@vant/weapp/icon/index"
    }
};
__wxAppCode__['pages/checkin/index/index.json'] = {
    "usingComponents": {
        "van-nav-bar": "../../../miniprogram_npm/@vant/weapp/nav-bar/index",
        "van-row": "../../../miniprogram_npm/@vant/weapp/row/index",
        "van-col": "../../../miniprogram_npm/@vant/weapp/col/index",
        "ruby-token": "../../../components/ruby-token/index",
        "player": "../../../components/player/index",
        "van-tag": "../../../miniprogram_npm/@vant/weapp/tag/index",
        "van-button": "../../../miniprogram_npm/@vant/weapp/button/index",
        "van-popup": "../../../miniprogram_npm/@vant/weapp/popup/index",
        "van-icon": "../../../miniprogram_npm/@vant/weapp/icon/index",
        "van-progress": "../../../miniprogram_npm/@vant/weapp/progress/index",
        "van-loading": "../../../miniprogram_npm/@vant/weapp/loading/index",
        "van-checkbox": "../../../miniprogram_npm/@vant/weapp/checkbox/index",
        "van-action-sheet": "../../../miniprogram_npm/@vant/weapp/action-sheet/index",
        "van-slider": "../../../miniprogram_npm/@vant/weapp/slider/index",
        "van-stepper": "../../../miniprogram_npm/@vant/weapp/stepper/index",
        "van-switch": "../../../miniprogram_npm/@vant/weapp/switch/index",
        "van-radio-group": "../../../miniprogram_npm/@vant/weapp/radio-group/index",
        "van-radio": "../../../miniprogram_npm/@vant/weapp/radio/index"
    }
};
__wxAppCode__['pages/checkin/my/index.json'] = {
    "usingComponents": {
        "van-nav-bar": "../../../miniprogram_npm/@vant/weapp/nav-bar/index",
        "van-cell": "../../../miniprogram_npm/@vant/weapp/cell/index",
        "van-cell-group": "../../../miniprogram_npm/@vant/weapp/cell-group/index",
        "van-row": "../../../miniprogram_npm/@vant/weapp/row/index",
        "van-col": "../../../miniprogram_npm/@vant/weapp/col/index",
        "van-empty": "../../../miniprogram_npm/@vant/weapp/empty/index",
        "van-button": "../../../miniprogram_npm/@vant/weapp/button/index",
        "van-tag": "../../../miniprogram_npm/@vant/weapp/tag/index"
    }
};;
var __WXML_DEP__ = __WXML_DEP__ || {};;
var __LAZY_CODE_LOADING_CHUNK_MAP__ = __LAZY_CODE_LOADING_CHUNK_MAP__ || {};
[
    ['pages/checkin/chunk_0', ['pages/checkin/comment/components/player', 'pages/checkin/comment/components/text', 'pages/checkin/comment/index', ]],
    ['pages/checkin/chunk_1', ['pages/checkin/help/index', ]],
    ['pages/checkin/chunk_2', ['pages/checkin/history/index', ]],
    ['pages/checkin/chunk_3', ['pages/checkin/index/index', ]],
    ['pages/checkin/chunk_4', ['pages/checkin/my/index', ]],
].forEach(function(a) {
    (a[1] || []).forEach(function(b) {
        __LAZY_CODE_LOADING_CHUNK_MAP__[b] = __LAZY_CODE_LOADING_CHUNK_MAP__[b] || a[0] || ''
    });
}); /*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        if (typeof $gwx === 'function') $gwx('init', global);
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0 || [];
        __WXML_GLOBAL__.ops_set.$gwx0 = z;
        __WXML_GLOBAL__.ops_init.$gwx0 = true;
        var nv_require = function() {
            var nnm = {
                "m_./pages/checkin/comment/components/player.wxml:tools": np_0,
                "m_./pages/checkin/comment/index.wxml:tools": np_1,
                "m_./pages/checkin/index/index.wxml:tools": np_2,
            };
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        f_['./pages/checkin/comment/components/player.wxml'] = {};
        f_['./pages/checkin/comment/components/player.wxml']['tools'] = nv_require("m_./pages/checkin/comment/components/player.wxml:tools");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            nv_module.nv_exports = ({
                nv_formatDuration: (function(nv_duration) {
                    return (Math.nv_ceil(nv_duration / 1000))
                }),
            });
            return nv_module.nv_exports;
        }

        f_['./pages/checkin/comment/index.wxml'] = {};
        f_['./pages/checkin/comment/index.wxml']['tools'] = nv_require("m_./pages/checkin/comment/index.wxml:tools");

        function np_1() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_formatDuration = (function(nv_duration) {
                return (Math.nv_floor(nv_duration / 1000))
            });
            var nv_formatYMD = (function(nv_ts) {
                return (nv_getDate(nv_ts).nv_toISOString().nv_substring(0, 10))
            });
            nv_module.nv_exports.nv_formatDuration = nv_formatDuration;
            nv_module.nv_exports.nv_formatYMD = nv_formatYMD;
            return nv_module.nv_exports;
        }

        f_['./pages/checkin/index/index.wxml'] = {};
        f_['./pages/checkin/index/index.wxml']['tools'] = nv_require("m_./pages/checkin/index/index.wxml:tools");

        function np_2() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_formatDuration = (function(nv_duration) {
                return (Math.nv_floor(nv_duration / 1000))
            });
            nv_module.nv_exports.nv_formatDuration = nv_formatDuration;
            return nv_module.nv_exports;
        }

        var x = [];
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || true) $gwx0();
$gwx0_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];

        function gz$gwx0_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'playAudio'])
                Z([3, 'audio'])
                Z([a, [3, 'background-color:'],
                    [
                        [7],
                        [3, 'backgroundColor']
                    ],
                    [3, ';']
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'playing']
                    ],
                    [1, 'stop-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z([3, '55rpx'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
        }

        function gz$gwx0_XC_0_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'words']
                ])
                Z([3, 'index'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isPin']
                ])
                Z([3, 'play'])
                Z([3, ''])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'v']
                ])
                Z([3, 'volume-o'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2
        }

        function gz$gwx0_XC_0_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_3) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_3
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'top'])
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '打卡纠音（体验版）'])
                Z([
                    [7],
                    [3, 'loaded']
                ])
                Z([3, 'container'])
                Z(z[7])
                Z([
                    [7],
                    [3, 'userCheckin']
                ])
                Z([3, 'content-container'])
                Z([3, 'display:flex;align-items:center;'])
                Z([3, 'navToCheckin'])
                Z([3, 'mini'])
                Z([3, 'info'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userCheckin']
                    ],
                    [3, 'duration']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userCheckin']
                    ],
                    [3, 'sound']
                ])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'index'])
                Z(z[10])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'type']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'MSG_TYPE']
                        ],
                        [3, 'TEXT']
                    ]
                ])
                Z([3, 'text'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'role']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ROLE']
                        ],
                        [3, 'TEACHER']
                    ]
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'content']
                    ],
                    [3, 'text']
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'type']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'MSG_TYPE']
                        ],
                        [3, 'AUDIO']
                    ]
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'content']
                    ],
                    [3, 'duration']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'content']
                    ],
                    [3, 'sound']
                ])
                Z(z[6])
                Z([3, 'btn'])
                Z([3, 'sendClickHandle'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'MSG_TYPE']
                    ],
                    [3, 'AUDIO']
                ])
                Z([3, 'normal'])
                Z([3, 'primary'])
                Z(z[29])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'MSG_TYPE']
                    ],
                    [3, 'TEXT']
                ])
                Z(z[31])
                Z(z[14])
                Z([
                    [7],
                    [3, 'isAdmin']
                ])
                Z([3, 'setStatus'])
                Z(z[13])
                Z(z[14])
                Z(z[37])
                Z([3, 'updateCheckin'])
                Z([3, 'slow'])
                Z(z[13])
                Z(z[14])
                Z(z[37])
                Z(z[42])
                Z([3, 'detail'])
                Z(z[13])
                Z(z[14])
                Z(z[37])
                Z(z[42])
                Z([3, 'delete'])
                Z(z[13])
                Z([3, 'danger'])
                Z([3, 'onClose'])
                Z([1, true])
                Z([3, 'height: 560rpx'])
                Z([3, 'bottom'])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([1, 9999])
                Z([3, 'form-panel'])
                Z([3, 'main'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'msgType']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'MSG_TYPE']
                        ],
                        [3, 'AUDIO']
                    ]
                ])
                Z([3, 'recordHandle'])
                Z([3, 'padding: 10px'])
                Z([3, 'https://s.cantonesepi.top/pi/images/mp/home/microphone.png'])
                Z([3, 'large'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'recording']
                    ],
                    [1, 'danger'],
                    [1, 'info']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tools']
                        ],
                        [3, 'formatDuration']
                    ],
                    [
                        [5],
                        [
                            [7],
                            [3, 'duration']
                        ]
                    ]
                ])
                Z([3, 'player'])
                Z([
                    [7],
                    [3, 'tempFilePath']
                ])
                Z(z[37])
                Z([3, 'addJyutping'])
                Z(z[13])
                Z(z[32])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'msgType']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'MSG_TYPE']
                        ],
                        [3, 'TEXT']
                    ]
                ])
                Z(z[57])
                Z([
                    [9],
                    [
                        [8], 'maxHeight', [1, 100]
                    ],
                    [
                        [8], 'minHeight', [1, 80]
                    ]
                ])
                Z([3, 'onChange'])
                Z([3, 'updateCursorPos'])
                Z(z[57])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isAdmin']
                    ],
                    [
                        [2, '-'],
                        [1, 1]
                    ],
                    [1, 50]
                ])
                Z([3, '请输入文字，限50字内。'])
                Z(z[57])
                Z([3, 'textarea'])
                Z([
                    [7],
                    [3, 'content']
                ])
                Z([3, 'send'])
                Z(z[32])
                Z([
                    [7],
                    [3, 'actions']
                ])
                Z(z[56])
                Z([3, 'onSelect'])
                Z([3, '取消'])
                Z(z[57])
                Z([
                    [7],
                    [3, 'showAction']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_3);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_3
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_0 = true;
        var x = ['./pages/checkin/comment/components/player.wxml', './pages/checkin/comment/components/text.wxml', './pages/checkin/comment/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_0_1()
            var oB = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var xC = _mz(z, 'van-icon', ['name', 3, 'size', 1], [], e, s, gg)
            _(oB, xC)
            _(r, oB)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_0_2()
            var fE = _v()
            _(r, fE)
            var cF = function(oH, hG, cI, gg) {
                var lK = _v()
                _(cI, lK)
                if (_oz(z, 2, oH, hG, gg)) {
                    lK.wxVkey = 1
                    var aL = _mz(z, 'van-icon', ['bind:tap', 3, 'color', 1, 'data-pin', 2, 'name', 3], [], oH, hG, gg)
                    _(lK, aL)
                } else {
                    lK.wxVkey = 2
                }
                lK.wxXCkey = 1
                lK.wxXCkey = 3
                return cI
            }
            fE.wxXCkey = 4
            _2z(z, 0, cF, e, s, gg, fE, 'item', 'index', 'index')
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[2]] = {}
        var m2 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_0_3()
            var oP = _n('van-sticky')
            _rz(z, oP, 'id', 0, e, s, gg)
            var xQ = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 1, 'border', 1, 'customClass', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(oP, xQ)
            _(r, oP)
            var eN = _v()
            _(r, eN)
            if (_oz(z, 6, e, s, gg)) {
                eN.wxVkey = 1
                var oR = _mz(z, 'view', ['class', 7, 'id', 1], [], e, s, gg)
                var fS = _v()
                _(oR, fS)
                if (_oz(z, 9, e, s, gg)) {
                    fS.wxVkey = 1
                    var cT = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
                    var hU = _mz(z, 'van-button', ['plain', -1, 'bind:tap', 12, 'size', 1, 'type', 2], [], e, s, gg)
                    _(cT, hU)
                    var oV = _mz(z, 'simple-player', ['duration', 15, 'sound', 1], [], e, s, gg)
                    _(cT, oV)
                    _(fS, cT)
                }
                var cW = _v()
                _(oR, cW)
                var oX = function(aZ, lY, t1, gg) {
                    var b3 = _n('view')
                    _rz(z, b3, 'class', 19, aZ, lY, gg)
                    var o4 = _v()
                    _(b3, o4)
                    if (_oz(z, 20, aZ, lY, gg)) {
                        o4.wxVkey = 1
                        var o6 = _n('view')
                        _rz(z, o6, 'class', 21, aZ, lY, gg)
                        var f7 = _v()
                        _(o6, f7)
                        if (_oz(z, 22, aZ, lY, gg)) {
                            f7.wxVkey = 1
                            var c8 = _n('simple-text')
                            _rz(z, c8, 'text', 23, aZ, lY, gg)
                            _(f7, c8)
                        } else {
                            f7.wxVkey = 2
                        }
                        f7.wxXCkey = 1
                        f7.wxXCkey = 3
                        _(o4, o6)
                    }
                    var x5 = _v()
                    _(b3, x5)
                    if (_oz(z, 24, aZ, lY, gg)) {
                        x5.wxVkey = 1
                        var h9 = _mz(z, 'simple-player', ['duration', 25, 'sound', 1], [], aZ, lY, gg)
                        _(x5, h9)
                    }
                    o4.wxXCkey = 1
                    o4.wxXCkey = 3
                    x5.wxXCkey = 1
                    x5.wxXCkey = 3
                    _(t1, b3)
                    return t1
                }
                cW.wxXCkey = 4
                _2z(z, 17, oX, e, s, gg, cW, 'item', 'index', 'index')
                fS.wxXCkey = 1
                fS.wxXCkey = 3
                _(eN, oR)
            }
            var bO = _v()
            _(r, bO)
            if (_oz(z, 27, e, s, gg)) {
                bO.wxVkey = 1
                var o0 = _n('view')
                _rz(z, o0, 'class', 28, e, s, gg)
                var tEB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 29, 'data-type', 1, 'size', 2, 'type', 3], [], e, s, gg)
                _(o0, tEB)
                var eFB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 33, 'data-type', 1, 'size', 2, 'type', 3], [], e, s, gg)
                _(o0, eFB)
                var cAB = _v()
                _(o0, cAB)
                if (_oz(z, 37, e, s, gg)) {
                    cAB.wxVkey = 1
                    var bGB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 38, 'size', 1, 'type', 2], [], e, s, gg)
                    _(cAB, bGB)
                }
                var oBB = _v()
                _(o0, oBB)
                if (_oz(z, 41, e, s, gg)) {
                    oBB.wxVkey = 1
                    var oHB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 42, 'data-type', 1, 'size', 2, 'type', 3], [], e, s, gg)
                    _(oBB, oHB)
                }
                var lCB = _v()
                _(o0, lCB)
                if (_oz(z, 46, e, s, gg)) {
                    lCB.wxVkey = 1
                    var xIB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 47, 'data-type', 1, 'size', 2, 'type', 3], [], e, s, gg)
                    _(lCB, xIB)
                }
                var aDB = _v()
                _(o0, aDB)
                if (_oz(z, 51, e, s, gg)) {
                    aDB.wxVkey = 1
                    var oJB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 52, 'data-type', 1, 'size', 2, 'type', 3], [], e, s, gg)
                    _(aDB, oJB)
                }
                cAB.wxXCkey = 1
                cAB.wxXCkey = 3
                oBB.wxXCkey = 1
                oBB.wxXCkey = 3
                lCB.wxXCkey = 1
                lCB.wxXCkey = 3
                aDB.wxXCkey = 1
                aDB.wxXCkey = 3
                _(bO, o0)
            }
            var fKB = _mz(z, 'van-popup', ['round', -1, 'bind:close', 56, 'closeable', 1, 'customStyle', 2, 'position', 3, 'show', 4, 'zIndex', 5], [], e, s, gg)
            var cLB = _n('view')
            _rz(z, cLB, 'class', 62, e, s, gg)
            var hMB = _n('view')
            _rz(z, hMB, 'class', 63, e, s, gg)
            var oNB = _v()
            _(hMB, oNB)
            if (_oz(z, 64, e, s, gg)) {
                oNB.wxVkey = 1
                var lQB = _mz(z, 'van-button', ['round', -1, 'bind:tap', 65, 'customStyle', 1, 'icon', 2, 'size', 3, 'type', 4], [], e, s, gg)
                _(oNB, lQB)
                var aRB = _mz(z, 'player', ['inactive', -1, 'duration', 70, 'id', 1, 'src', 2], [], e, s, gg)
                _(oNB, aRB)
            }
            var cOB = _v()
            _(hMB, cOB)
            if (_oz(z, 73, e, s, gg)) {
                cOB.wxVkey = 1
                var tSB = _mz(z, 'van-button', ['plain', -1, 'round', -1, 'bind:tap', 74, 'size', 1, 'type', 2], [], e, s, gg)
                _(cOB, tSB)
            }
            var oPB = _v()
            _(hMB, oPB)
            if (_oz(z, 77, e, s, gg)) {
                oPB.wxVkey = 1
                var eTB = _mz(z, 'van-field', ['autoFocus', 78, 'autosize', 1, 'bind:change', 2, 'bind:focus', 3, 'clearable', 4, 'maxlength', 5, 'placeholder', 6, 'showWordLimit', 7, 'type', 8, 'value', 9], [], e, s, gg)
                _(oPB, eTB)
            }
            oNB.wxXCkey = 1
            oNB.wxXCkey = 3
            cOB.wxXCkey = 1
            cOB.wxXCkey = 3
            oPB.wxXCkey = 1
            oPB.wxXCkey = 3
            _(cLB, hMB)
            var bUB = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 88, 'type', 1], [], e, s, gg)
            _(cLB, bUB)
            _(fKB, cLB)
            _(r, fKB)
            var oVB = _mz(z, 'van-action-sheet', ['actions', 90, 'bind:cancel', 1, 'bind:select', 2, 'cancelText', 3, 'closeOnClickOverlay', 4, 'show', 5], [], e, s, gg)
            _(r, oVB)
            eN.wxXCkey = 1
            eN.wxXCkey = 3
            bO.wxXCkey = 1
            bO.wxXCkey = 3
            return r
        }
        e_[x[2]] = {
            f: m2,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_0";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/comment/components/player.wxml'] = [$gwx0_XC_0, './pages/checkin/comment/components/player.wxml'];
else __wxAppCode__['pages/checkin/comment/components/player.wxml'] = $gwx0_XC_0('./pages/checkin/comment/components/player.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/comment/components/text.wxml'] = [$gwx0_XC_0, './pages/checkin/comment/components/text.wxml'];
else __wxAppCode__['pages/checkin/comment/components/text.wxml'] = $gwx0_XC_0('./pages/checkin/comment/components/text.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/comment/index.wxml'] = [$gwx0_XC_0, './pages/checkin/comment/index.wxml'];
else __wxAppCode__['pages/checkin/comment/index.wxml'] = $gwx0_XC_0('./pages/checkin/comment/index.wxml');;
__wxRoute = "pages/checkin/comment/components/player";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/comment/components/player.js";
define("pages/checkin/comment/components/player.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../commons/utils");
    Component({
        properties: {
            backgroundColor: {
                type: String,
                value: "#fff"
            },
            sound: {
                type: String
            },
            duration: {
                type: Number
            }
        },
        data: {
            playing: !1
        },
        methods: {
            playAudio: function() {
                var a = this;
                if (this.data.playing) return t.playAudio.destroy(), void this.setData({
                    playing: !1
                });
                this.setData({
                    playing: !0
                }), (0, t.playAudio)(this.data.sound, (function() {
                    a.setData({
                        playing: !1
                    })
                }), (function() {
                    a.setData({
                        playing: !1
                    })
                }))
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'pages/checkin/comment/components/player.js'
});
require("pages/checkin/comment/components/player.js");;
__wxRoute = "pages/checkin/comment/components/text";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/comment/components/text.js";
define("pages/checkin/comment/components/text.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../commons/utils"),
        a = require("../../../../commons/config"),
        i = "".concat(a.CLOUD_STORAGE_HTTP_BASE_URL, "/audios/words-hk/all-pronunciations");
    Component({
        properties: {
            text: {
                type: String
            }
        },
        data: {},
        lifetimes: {
            attached: function() {
                var t = String(this.data.text || "").split(/(.{1}\(\w+\d{1}\))/g).map((function(t) {
                    return {
                        v: t,
                        isPin: /^.{1}\(\w+\d{1}\)$/.test(t)
                    }
                }));
                this.setData({
                    words: t
                })
            }
        },
        methods: {
            play: function(a) {
                var n = a.currentTarget.dataset.pin,
                    r = String(n || "").match(/\(([^()]+)\)$/);
                if (r && r[1]) {
                    var e = "".concat(i, "/").concat(r[1], ".mp3");
                    (0, t.playAudio)(e)
                }
            }
        }
    });
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'pages/checkin/comment/components/text.js'
});
require("pages/checkin/comment/components/text.js");;
__wxRoute = "pages/checkin/comment/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/comment/index.js";
define("pages/checkin/comment/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../../@babel/runtime/helpers/Objectvalues");
    var e, t = require("../../../@babel/runtime/helpers/defineProperty"),
        n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        o = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        s = require("../../../commons/utils"),
        i = u(require("../../../api/getCheckinFeedbacks")),
        r = u(require("../../../api/addCheckinFeedback")),
        c = u(require("../../../api/adminUpdateUserCheckin")),
        d = u(require("../../../api/adminUpdateCheckin"));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = {
            AUDIO: "audio",
            TEXT: "text"
        },
        h = {
            STUDENT: "student",
            TEACHER: "teacher"
        },
        w = null;
    Page((t(e = {
        selectedEnd: -1,
        selectedStart: -1,
        checkSubscribe: function(e) {
            var t = this;
            wx.getSetting({
                withSubscriptions: !0,
                complete: function(n) {
                    var o, a;
                    console.log(n);
                    var s = !1;
                    !0 === (null == n || null === (o = n.subscriptionsSetting) || void 0 === o ? void 0 : o.mainSwitch) && null !== (a = n.subscriptionsSetting.itemSettings) && void 0 !== a && a[e] && (s = !0), t.setData({
                        rememberSubscribe: s
                    })
                }
            })
        },
        subscribe: function() {
            wx.getSetting({
                withSubscriptions: !0,
                complete: function(e) {
                    console.log(e)
                }
            }), wx.requestSubscribeMessage({
                tmplIds: ["GIa-hKht1YQalRNI5FIoJKS10H3-NCn0bvhQyW8p1n4"],
                complete: function(e) {
                    console.log(e)
                }
            })
        },
        navBack: s.navBack,
        navToCheckin: function() {
            var e = this.data.userCheckin.checkinId;
            wx.navigateTo({
                url: "../index/index?id=".concat(e, "&from=comment")
            })
        },
        data: {
            showAction: !1,
            actions: [{
                name: "通过",
                color: "green",
                status: "approved"
            }, {
                name: "隐藏",
                status: "hidden"
            }, {
                name: "置优",
                color: "green",
                status: "setgood"
            }, {
                name: "去优",
                color: "green",
                status: "setnormal"
            }],
            loaded: !1,
            show: !1,
            MSG_TYPE: l,
            ROLE: h,
            content: "",
            adLoaded: !1,
            tid: "Pa4uhoWH5Vl9oCQq8ASJUCEF2z0V0tw0qFwxNwCagK4"
        },
        onLoad: function(e) {
            var t = this;
            this.id = e.id, this.isNewAnswer = "1" == e.newAnswer, this.id ? (this.loadData(), wx.createRewardedVideoAd && ((w = wx.createRewardedVideoAd({
                adUnitId: "adunit-829bdea32f7bb5e2"
            })).onLoad((function() {
                t.setData({
                    adLoaded: !0
                })
            })), w.onError((function(e) {
                console.log("onError event emit", e)
            })), w.onClose((function(e) {
                console.log("onClose event emit", e)
            })))) : wx.showModal({
                content: "参数错误",
                complete: s.navBack
            })
        },
        showAd: function() {
            var e;
            null === (e = w) || void 0 === e || e.show()
        },
        formatTips: function() {
            var e = this.data,
                t = e.list;
            if (e.isAdmin) this.setData({
                tips: "耐心，撑粤语"
            });
            else {
                for (var n = a(t).slice(-2), o = 0; n.length < 2 || n[n.length - 1].role !== h.STUDENT || n[n.length - 2].role !== h.STUDENT;) n.push({
                    role: h.STUDENT
                }), o += 1;
                var s = "当前可提问".concat(o, "次");
                0 === o && (s = "当前可提问".concat(o, "次")), this.setData({
                    tips: s,
                    times: o
                })
            }
        },
        loadData: function() {
            var e = this;
            return o(n().mark((function t() {
                var o, a, r, c, d, u, l, h;
                return n().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.prev = 1, t.next = 4, (0, i.default)(e.id, e.isNewAnswer);
                        case 4:
                            o = t.sent, a = o.code, r = o.data, c = r.list, d = r.student, u = r.teacher, l = r.isAdmin, h = r.userCheckin, 0 === a ? e.setData({
                                list: c,
                                student: d,
                                teacher: u,
                                isAdmin: l,
                                userCheckin: h
                            }, (function() {
                                wx.pageScrollTo({
                                    scrollTop: 5e4
                                }), e.formatTips()
                            })) : wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: s.navBack
                            }), t.next = 18;
                            break;
                        case 15:
                            t.prev = 15, t.t0 = t.catch(1), wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: s.navBack
                            });
                        case 18:
                            e.setData({
                                loaded: !0
                            }), wx.hideLoading();
                        case 20:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [1, 15]
                ])
            })))()
        },
        playAudio: function(e) {
            var t = e.currentTarget.dataset.audio;
            (0, s.playAudio)(t)
        },
        play: function() {
            this.selectComponent("#player").play()
        },
        initRM: function() {
            var e = this,
                t = wx.getRecorderManager();
            t.onStart((function() {
                console.log("recorder start"), e.setData({
                    recTotalTime: 0
                }), e.countdown(), e.setRecordStatus(!0)
            })), t.onPause((function() {
                console.log("recorder pause"), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onInterruptionBegin((function() {
                wx.showModal({
                    content: "录音已中断，请重新录音",
                    showCancel: !1
                }), e.setData({
                    recTotalTime: 0
                }), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onError((function(t) {
                e.setRecordStatus(!1), null != t && t.errMsg.includes("auth deny") ? wx.showModal({
                    title: "温馨提示",
                    content: "打卡需要授权麦克风录音，前往授权？",
                    confirmText: "去授权",
                    complete: function(e) {
                        e.confirm && wx.openSetting()
                    }
                }) : wx.showModal({
                    title: "温馨提示",
                    content: "录音失败|".concat(null == t ? void 0 : t.errMsg),
                    showCancel: !1
                })
            })), t.onStop((function(t) {
                console.log("recorder stop", t), e.setRecordStatus(!1);
                var n = t.tempFilePath,
                    o = t.duration;
                e.setData({
                    recTotalTime: 0,
                    tempFilePath: n,
                    duration: o
                }), wx.showToast({
                    title: "录音完成"
                }), e.stopCountDown(), e.play()
            })), this.recorderManager = t
        },
        onReady: function() {
            this.initRM(), this.checkSubscribe(this.data.tid)
        },
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        addRewarded: function() {},
        isTeacher: function() {
            return this.data.role === h.TEACHER
        },
        sendClickHandle: function(e) {
            var t = e.currentTarget.dataset.type,
                n = this.data.isAdmin;
            if (this.formType = t, n) this.showForm();
            else {
                var o = this.data.times;
                0 !== (void 0 === o ? 0 : o) ? this.showForm() : wx.showModal({
                    content: "请耐心等待回复后再提问",
                    showCancel: !1
                })
            }
        },
        showForm: function() {
            this.setData({
                show: !0,
                msgType: this.formType
            })
        },
        onClose: function() {
            this.setData({
                show: !1
            })
        },
        recordHandle: function() {
            this.recording ? this.stopRecord() : (s.playAudio.destroy(), this.startRecord()), this.recording = !this.recording
        },
        startRecord: function() {
            this.recording && this.stopRecord();
            var e = {
                duration: 6e4,
                sampleRate: 16e3,
                numberOfChannels: 1,
                encodeBitRate: 32e3,
                format: "wav"
            };
            this.recorderManager.start(e)
        },
        stopRecord: function() {
            this.recorderManager.stop(), this.setRecordStatus(!1)
        },
        setRecordStatus: function(e) {
            this.setData({
                recording: e
            }), this.recording = e
        },
        stopCountDown: function() {
            this.t && clearInterval(this.t)
        },
        countdown: function() {
            var e = this,
                t = this,
                n = 0;
            this.t = setInterval((function() {
                (n += 1) > 60 ? clearInterval(e.t) : t.setData({
                    recTotalTime: n
                })
            }), 1e3)
        },
        send: function() {
            var e = this.data.msgType;
            Object.values(l).includes(e) && (e === l.AUDIO ? this.sendAudio() : e === l.TEXT && this.sendText())
        },
        addComment: function(e) {
            var t = this;
            return o(n().mark((function o() {
                var s, i, c, d, u;
                return n().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading({
                                title: "正在发送..."
                            }), n.prev = 1, n.next = 4, (0, r.default)(e);
                        case 4:
                            if (s = n.sent, 0 !== s.code) {
                                n.next = 13;
                                break
                            }
                            wx.showToast({
                                title: "已发送",
                                icon: "success"
                            }), i = t.data, c = i.list, d = i.isAdmin, u = e.type === l.TEXT ? {
                                text: e.text
                            } : {
                                sound: e.sound,
                                duration: e.duration
                            }, t.setData({
                                reward: !1,
                                show: !1,
                                content: "",
                                list: [].concat(a(c), [{
                                    role: d ? h.TEACHER : h.STUDENT,
                                    type: e.type,
                                    isMine: !0,
                                    uuid: Date.now(),
                                    content: u,
                                    time: "刚刚"
                                }])
                            }, (function() {
                                wx.pageScrollTo({
                                    scrollTop: 5e4
                                }), t.formatTips()
                            })), n.next = 14;
                            break;
                        case 13:
                            throw new Error("fail");
                        case 14:
                            n.next = 19;
                            break;
                        case 16:
                            n.prev = 16, n.t0 = n.catch(1), wx.showModal({
                                content: "系统异常，请稍后再试",
                                showCancel: !1
                            });
                        case 19:
                            wx.hideLoading();
                        case 20:
                        case "end":
                            return n.stop()
                    }
                }), o, null, [
                    [1, 16]
                ])
            })))()
        },
        sendText: function() {
            var e = this.data.content.trim();
            if (e) {
                var t = {
                    text: e,
                    type: l.TEXT,
                    userCheckinId: this.id
                };
                this.addComment(t)
            }
        },
        sendAudio: function() {
            var e = this.data,
                t = e.tempFilePath,
                n = e.duration;
            if (t)
                if (n < 2e3) wx.showToast({
                    title: "录音时长过短",
                    icon: "error"
                });
                else {
                    var o = wx.getFileSystemManager().readFileSync(t),
                        a = {
                            type: l.AUDIO,
                            userCheckinId: this.id,
                            duration: n,
                            base64Buffer: wx.arrayBufferToBase64(o)
                        };
                    this.addComment(a)
                } else wx.showToast({
                title: "请先录音",
                icon: "error"
            })
        },
        onChange: function(e) {
            var t = e.detail;
            this.setData({
                content: t
            }), this.updateCursorPos()
        },
        updateCursorPos: function() {
            var e = this;
            !0 === this.data.isAdmin && wx.getSelectedTextRange({
                success: function(t) {
                    var n = t.start,
                        o = t.end;
                    e.selectedEnd = o, e.selectedStart = n
                },
                fail: function(e) {
                    console.error(e)
                }
            })
        },
        addJyutping: function() {
            var e = this,
                t = e.selectedStart,
                n = e.selectedEnd,
                o = e.data.content;
            wx.navigateTo({
                url: "../../tools/comment-tools/index",
                events: {
                    getPingyin: function(a) {
                        a && t > -1 && n > -1 && e.setData({
                            content: o.slice(0, t) + a + o.slice(n)
                        })
                    }
                }
            })
        }
    }, "onClose", (function() {
        this.setData({
            showAction: !1
        })
    })), t(e, "onSelect", (function(e) {
        var t = this;
        t.onClose();
        var n = e.detail,
            o = n.name,
            a = n.status;
        wx.showModal({
            title: "审批确认",
            content: "确认".concat(o, "？"),
            complete: function(e) {
                if (e.confirm) {
                    var n = t.data.userCheckin.uuid;
                    ["hidden", "approved"].includes(a) ? t.approve(n, {
                        status: a
                    }) : "setgood" === a ? t.approve(n, {
                        isGood: !0
                    }) : "setnormal" === a && t.approve(n, {
                        isGood: !1
                    })
                }
            }
        })
    })), t(e, "approve", (function(e, t) {
        var a = this;
        return o(n().mark((function o() {
            var s, i, r;
            return n().wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (s = a, e) {
                            n.next = 3;
                            break
                        }
                        return n.abrupt("return");
                    case 3:
                        return wx.showLoading({
                            title: "加载中..."
                        }), n.prev = 4, n.next = 7, (0, c.default)(e, t);
                    case 7:
                        i = n.sent, 0 === i.code ? (wx.showToast({
                            title: "操作成功"
                        }), r = t.status, ["hidden", "approved"].includes(r) ? s.setData({
                            "userCheckin.status": r
                        }) : "isGood" in t && s.setData({
                            "userCheckin.isGood": !s.data.userCheckin.isGood
                        })) : wx.showToast({
                            title: "操作失败"
                        }), n.next = 15;
                        break;
                    case 12:
                        n.prev = 12, n.t0 = n.catch(4), wx.showToast({
                            title: "请求失败"
                        });
                    case 15:
                        wx.hideLoading();
                    case 16:
                    case "end":
                        return n.stop()
                }
            }), o, null, [
                [4, 12]
            ])
        })))()
    })), t(e, "setStatus", (function() {
        this.setData({
            showAction: !this.data.showAction
        })
    })), t(e, "updateCheckin", (function(e) {
        var t = this;
        return o(n().mark((function o() {
            var a, s, i, r, c;
            return n().wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (a = e.currentTarget.dataset.type, s = t.data.userCheckin, i = {
                                openid: s.openid,
                                audio: s.sound
                            }, r = null, "slow" === a ? r = {
                                slow: i
                            } : "detail" === a && (r = {
                                detail: i
                            }), r || "delete" === a) {
                            n.next = 7;
                            break
                        }
                        return n.abrupt("return");
                    case 7:
                        return wx.showLoading({
                            title: "处理中"
                        }), n.prev = 8, n.next = 11, (0, d.default)(s.checkinId, r);
                    case 11:
                        if (c = n.sent, 0 !== c.code) {
                            n.next = 17;
                            break
                        }
                        wx.showToast({
                            title: "操作成功"
                        }), n.next = 18;
                        break;
                    case 17:
                        throw new Error;
                    case 18:
                        n.next = 23;
                        break;
                    case 20:
                        n.prev = 20, n.t0 = n.catch(8), wx.showToast({
                            title: "操作失败",
                            icon: "error"
                        });
                    case 23:
                        wx.hideLoading();
                    case 24:
                    case "end":
                        return n.stop()
                }
            }), o, null, [
                [8, 20]
            ])
        })))()
    })), e));
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/comment/index.js'
});
require("pages/checkin/comment/index.js");
$gwx0_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_1 || [];

        function gz$gwx0_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '优先打卡专场'])
                Z([3, 'container'])
                Z([1, true])
                Z([3, 'large'])
                Z([3, '什么是优先打卡？'])
                Z(z[6])
                Z(z[6])
                Z(z[7])
                Z([3, '享受权益'])
                Z(z[6])
                Z([3, 'red'])
                Z(z[1])
                Z([3, '如不需要此权益，可点击下方按钮，发送数字“6“即可'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_1 = true;
        var x = ['./pages/checkin/help/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_1_1()
            var oXB = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, oXB)
            var fYB = _n('view')
            _rz(z, fYB, 'class', 5, e, s, gg)
            var cZB = _n('van-cell-group')
            var h1B = _mz(z, 'van-cell', ['border', 6, 'size', 1, 'title', 2, 'useLabelSlot', 3], [], e, s, gg)
            _(cZB, h1B)
            var o2B = _mz(z, 'van-cell', ['border', 10, 'size', 1, 'title', 2, 'useLabelSlot', 3], [], e, s, gg)
            _(cZB, o2B)
            _(fYB, cZB)
            var c3B = _mz(z, 'van-notice-bar', ['wrapable', -1, 'color', 14, 'scrollable', 1, 'text', 2], [], e, s, gg)
            _(fYB, c3B)
            _(r, fYB)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_1";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/help/index.wxml'] = [$gwx0_XC_1, './pages/checkin/help/index.wxml'];
else __wxAppCode__['pages/checkin/help/index.wxml'] = $gwx0_XC_1('./pages/checkin/help/index.wxml');;
__wxRoute = "pages/checkin/help/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/help/index.js";
define("pages/checkin/help/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var a = require("../../../commons/utils");
    Page({
        navBack: a.navBack,
        data: {},
        onLoad: function(a) {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/help/index.js'
});
require("pages/checkin/help/index.js");
$gwx0_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];

        function gz$gwx0_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([1, 10000])
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([3, '往期打卡'])
                Z([3, 'onSwitchChange'])
                Z([3, 'filter'])
                Z([
                    [7],
                    [3, 'filterOptions']
                ])
                Z([
                    [7],
                    [3, 'filter']
                ])
                Z(z[6])
                Z([3, 'sort'])
                Z([
                    [7],
                    [3, 'sortOptions']
                ])
                Z([
                    [7],
                    [3, 'sort']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([3, 'container'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'uuid'])
                Z([3, 'navToCheckin'])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'accessToken']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'uuid']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'needVip']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'showVipBadge']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'checked']
                        ]
                    ]
                ])
                Z([3, 'status'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'checked']
                ])
                Z([3, '#1f9d55'])
                Z([3, 'success'])
                Z([3, '14'])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'needVip']
                    ]
                ])
                Z([3, 'small'])
                Z([3, 'info'])
                Z([3, 'status-unlock-btn'])
                Z(z[30])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z([3, '8'])
                Z(z[35])
                Z([3, 'loadMore'])
                Z([3, 'normal'])
                Z(z[31])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_2 = true;
        var x = ['./pages/checkin/history/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_2_1()
            var a6B = _n('van-sticky')
            _rz(z, a6B, 'zIndex', 0, e, s, gg)
            var t7B = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 1, 'border', 1, 'customClass', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(a6B, t7B)
            var e8B = _n('van-dropdown-menu')
            var b9B = _mz(z, 'van-dropdown-item', ['bind:change', 6, 'data-type', 1, 'options', 2, 'value', 3], [], e, s, gg)
            _(e8B, b9B)
            var o0B = _mz(z, 'van-dropdown-item', ['bind:change', 10, 'data-type', 1, 'options', 2, 'value', 3], [], e, s, gg)
            _(e8B, o0B)
            _(a6B, e8B)
            _(r, a6B)
            var l5B = _v()
            _(r, l5B)
            if (_oz(z, 14, e, s, gg)) {
                l5B.wxVkey = 1
                var xAC = _n('view')
                _rz(z, xAC, 'class', 15, e, s, gg)
                var fCC = _v()
                _(xAC, fCC)
                var cDC = function(oFC, hEC, cGC, gg) {
                    var lIC = _mz(z, 'view', ['bind:tap', 18, 'class', 1, 'data-accesstoken', 2, 'data-id', 3, 'data-needvip', 4], [], oFC, hEC, gg)
                    var aJC = _v()
                    _(lIC, aJC)
                    if (_oz(z, 23, oFC, hEC, gg)) {
                        aJC.wxVkey = 1
                    }
                    var tKC = _n('view')
                    _rz(z, tKC, 'class', 24, oFC, hEC, gg)
                    var eLC = _v()
                    _(tKC, eLC)
                    if (_oz(z, 25, oFC, hEC, gg)) {
                        eLC.wxVkey = 1
                        var bMC = _mz(z, 'van-icon', ['color', 26, 'name', 1, 'size', 2], [], oFC, hEC, gg)
                        _(eLC, bMC)
                    } else if (_oz(z, 29, oFC, hEC, gg)) {
                        eLC.wxVkey = 2
                        var oNC = _mz(z, 'van-button', ['round', -1, 'size', 30, 'type', 1], [], oFC, hEC, gg)
                        _(eLC, oNC)
                    } else {
                        eLC.wxVkey = 3
                        var xOC = _mz(z, 'van-button', ['plain', -1, 'round', -1, 'customClass', 32, 'size', 1], [], oFC, hEC, gg)
                        _(eLC, xOC)
                    }
                    eLC.wxXCkey = 1
                    eLC.wxXCkey = 3
                    eLC.wxXCkey = 3
                    eLC.wxXCkey = 3
                    _(lIC, tKC)
                    aJC.wxXCkey = 1
                    _(cGC, lIC)
                    return cGC
                }
                fCC.wxXCkey = 4
                _2z(z, 16, cDC, e, s, gg, fCC, 'item', 'index', 'uuid')
                var oBC = _v()
                _(xAC, oBC)
                if (_oz(z, 34, e, s, gg)) {
                    oBC.wxVkey = 1
                    var oPC = _n('van-row')
                    var fQC = _mz(z, 'van-col', ['offset', 35, 'span', 1], [], e, s, gg)
                    var cRC = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 37, 'size', 1, 'type', 2], [], e, s, gg)
                    _(fQC, cRC)
                    _(oPC, fQC)
                    _(oBC, oPC)
                }
                oBC.wxXCkey = 1
                oBC.wxXCkey = 3
                _(l5B, xAC)
            }
            l5B.wxXCkey = 1
            l5B.wxXCkey = 3
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_2";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/history/index.wxml'] = [$gwx0_XC_2, './pages/checkin/history/index.wxml'];
else __wxAppCode__['pages/checkin/history/index.wxml'] = $gwx0_XC_2('./pages/checkin/history/index.wxml');;
__wxRoute = "pages/checkin/history/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/history/index.js";
define("pages/checkin/history/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t, e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        r = require("../../../commons/utils"),
        i = require("../../../commons/config"),
        o = (t = require("../../../api/getCheckinList")) && t.__esModule ? t : {
            default: t
        };
    Page({
        pageSize: 20,
        page: 1,
        navBack: r.navBack,
        data: {
            show: !1,
            list: [],
            filter: 0,
            sort: 0,
            filterOptions: [{
                text: "全部",
                value: 0
            }, {
                text: "未打卡",
                value: 1
            }],
            sortOptions: [{
                text: "最新",
                value: 0
            }, {
                text: "最早",
                value: 1
            }]
        },
        onLoad: function(t) {
            this.getFilterAndSort(), this.getData()
        },
        getData: function() {
            var t = this;
            return n(e().mark((function n() {
                var i, s, c, l, u, f, h, d, p, g;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return s = (i = t).page, c = i.pageSize, l = i.data, u = l.sort, f = l.filter, wx.showLoading({
                                title: "加载中..."
                            }), e.prev = 4, e.next = 7, (0, o.default)({
                                page: s,
                                pageSize: c,
                                filter: f,
                                sort: u
                            });
                        case 7:
                            h = e.sent, d = h.code, p = h.data, 0 === d ? (g = i.data.list, 1 === s && (g = []), i.setData({
                                list: [].concat(a(g), a(p.list)),
                                hasNext: p.hasNext
                            })) : wx.showModal({
                                title: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            }), e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e.catch(4), wx.showModal({
                                title: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: r.navBack
                            });
                        case 16:
                            i.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), n, null, [
                    [4, 13]
                ])
            })))()
        },
        loadMore: function() {
            this.page += 1, this.getData()
        },
        navToCheckin: function(t) {
            var e = this,
                a = t.currentTarget.dataset,
                n = a.id,
                i = a.needvip,
                o = void 0 !== i && i,
                s = a.accesstoken,
                c = void 0 === s ? "" : s;
            if (o)(0, r.navToOpenVip)();
            else {
                var l = c ? "&accessToken=".concat(encodeURIComponent(c)) : "";
                wx.navigateTo({
                    url: "../index/index?id=".concat(n).concat(l),
                    success: function(t) {
                        t.eventChannel.emit("acceptDataFromOpenerPage", {
                            from: "history"
                        })
                    },
                    events: {
                        checkedNotify: function(t) {
                            var a = e.data.list;
                            e.setData({
                                list: a.map((function(e) {
                                    return e.uuid === t && (e.checked = !0), e
                                }))
                            })
                        }
                    }
                })
            }
        },
        onSwitchChange: function(t) {
            var e = this,
                a = t.currentTarget.dataset.type,
                n = e.data,
                r = n.sort,
                i = n.filter;
            "sort" === a ? r = t.detail : "filter" === a && (i = t.detail), e.setData({
                sort: r,
                filter: i
            }, (function() {
                e.cacheFilterAndSort()
            })), e.sort = r, e.filter = i, e.page = 1, e.getData()
        },
        getFilterAndSort: function() {
            try {
                var t = wx.getStorageSync(i.HIS_CHECKIN_LIST_KEY);
                "sort" in t && "filter" in t && (this.setData({
                    sort: t.sort,
                    filter: t.filter
                }), this.sort = t.sort, this.filter = t.filter)
            } catch (t) {}
        },
        cacheFilterAndSort: function() {
            var t = this.data,
                e = t.sort,
                a = t.filter,
                n = {
                    sort: e,
                    filter: a
                };
            this.sort = e, this.filter = a, wx.setStorage({
                key: i.HIS_CHECKIN_LIST_KEY,
                data: n
            })
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/history/index.js'
});
require("pages/checkin/history/index.js");
$gwx0_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_3 || [];

        function gz$gwx0_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, false],
                    [1, true]
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, ''],
                    [1, '返回']
                ])
                Z([a, [3, '每日打卡'],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'date']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, '('],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'item']
                                    ],
                                    [3, 'date']
                                ]
                            ],
                            [1, ')']
                        ],
                        [1, '']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'show']
                    ],
                    [
                        [7],
                        [3, 'item']
                    ]
                ])
                Z([3, 'handlePageTap'])
                Z([3, 'container'])
                Z([3, 'row'])
                Z([3, 'line'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'sentenceArr']
                ])
                Z(z[9])
                Z([3, '24'])
                Z([3, 'sentence'])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'showReocordPanel']
                        ],
                        [1, true]
                    ],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'mode']
                        ],
                        [1, 'mandarin']
                    ]
                ])
                Z([
                    [7],
                    [3, 'line']
                ])
                Z([3, 'index'])
                Z([3, 'playWord'])
                Z([a, [3, 'checkin-ruby-token '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'row']
                                ],
                                [
                                    [7],
                                    [3, 'currentRow']
                                ]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'index']
                                ],
                                [
                                    [7],
                                    [3, 'currentCol']
                                ]
                            ]
                        ],
                        [1, 'current-word'],
                        [1, 'current-words']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'showReocordPanel']
                                ],
                                [1, true]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'mode']
                                ],
                                [1, 'jyutping']
                            ]
                        ],
                        [1, 'blur-zi'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'showReocordPanel']
                                ],
                                [1, true]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'mode']
                                ],
                                [1, 'cantonese']
                            ]
                        ],
                        [1, 'blur-pin'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'showReocordPanel']
                                ],
                                [1, true]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'mode']
                                ],
                                [1, 'mandarin']
                            ]
                        ],
                        [1, 'blur-zi blur-pin'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [1, 1]
                ])
                Z([
                    [7],
                    [3, 'row']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'alternativeTokens']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'showReocordPanel']
                        ],
                        [1, true]
                    ],
                    [
                        [2, '||'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'mode']
                            ],
                            [1, 'cantonese']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'mode']
                            ],
                            [1, 'mandarin']
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'displayPinyin']
                ])
                Z([
                    [7],
                    [3, 'rubyDisplayStyle']
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'row']
                            ],
                            [
                                [7],
                                [3, 'currentRow']
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentCol']
                            ]
                        ]
                    ],
                    [1, 'green'],
                    [1, '#666']
                ])
                Z([3, 'inherit'])
                Z([3, '32'])
                Z([3, '400'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'pinyinParts']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'text']
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'row']
                            ],
                            [
                                [7],
                                [3, 'currentRow']
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentCol']
                            ]
                        ]
                    ],
                    [1, 'green'],
                    [1, '#000']
                ])
                Z(z[28])
                Z([3, '44'])
                Z(z[30])
                Z([3, 'word-inline'])
                Z([
                    [7],
                    [3, 'notice']
                ])
                Z([3, 'service-o'])
                Z([3, 'contact'])
                Z([3, 'normal'])
                Z(z[13])
                Z([3, 'play-wrap'])
                Z([3, 'teaching-play'])
                Z([3, 'playSentenseHandler'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'original']
                        ]
                    ],
                    [1, 'playing-btn'],
                    [1, '']
                ])
                Z([3, 'original'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'original']
                        ]
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z([3, 'small'])
                Z([3, 'primary'])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'slowSound']
                    ],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'teaching']
                        ],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'teaching']
                            ],
                            [3, 'slow']
                        ]
                    ]
                ])
                Z(z[45])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'slow']
                        ]
                    ],
                    [1, 'playing-btn'],
                    [1, '']
                ])
                Z([3, 'slow'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'slow']
                        ]
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z(z[49])
                Z(z[50])
                Z([3, 'playByWord'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlayingByWord']
                    ],
                    [1, 'playing-btn'],
                    [1, '']
                ])
                Z([3, 'detail'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlayingByWord']
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z(z[49])
                Z(z[50])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'mediaEpisodeUuid']
                ])
                Z([3, 'navToVideo'])
                Z([3, '#333'])
                Z(z[64])
                Z([3, '/images/home/sp.png'])
                Z(z[49])
                Z([3, 'info'])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'feedId']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'mediaEpisodeUuid']
                        ]
                    ]
                ])
                Z([3, 'navToSph'])
                Z(z[66])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'feedId']
                ])
                Z([3, '/images/sph.png'])
                Z(z[49])
                Z(z[70])
                Z([3, 'green'])
                Z([3, '4rpx'])
                Z([3, 'onDragChange'])
                Z([3, 'onDrag'])
                Z([3, 'onDragEnd'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlayingByWord']
                    ],
                    [1, true],
                    [1, false]
                ])
                Z([3, '#d5d5d5'])
                Z([
                    [7],
                    [3, 'currentValue']
                ])
                Z([3, 'showSettingPanel'])
                Z(z[66])
                Z([3, 'setting-o'])
                Z([3, 'mini'])
                Z(z[13])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'vocabularies']
                    ],
                    [3, 'length']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'ext']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'feedId']
                        ]
                    ]
                ])
                Z(z[13])
                Z([3, 'smile-o'])
                Z([3, '18px'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'ext']
                    ],
                    [3, 'list']
                ])
                Z(z[17])
                Z([3, 'openSPH'])
                Z(z[74])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'finderUserName']
                ])
                Z(z[49])
                Z([3, 'margin-right:10rpx;'])
                Z(z[70])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showFilterPanel']
                    ],
                    [
                        [2, '||'],
                        [
                            [2, '||'],
                            [
                                [2, '>'],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'scopeOptions']
                                    ],
                                    [3, 'length']
                                ],
                                [1, 1]
                            ],
                            [
                                [2, '>'],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'vipFilterOptions']
                                    ],
                                    [3, 'length']
                                ],
                                [1, 1]
                            ]
                        ],
                        [
                            [2, '>'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'studentCategoryOptions']
                                ],
                                [3, 'length']
                            ],
                            [1, 1]
                        ]
                    ]
                ])
                Z([3, 'filter-panel'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'scopeOptions']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'vipFilterOptions']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'studentCategoryOptions']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'length']
                ])
                Z([3, 'mt10'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[17])
                Z(z[13])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isGood']
                ])
                Z([3, 'userinfo'])
                Z([3, 'navToAdminManage'])
                Z([3, 'navToComment'])
                Z([3, 'avatar-info'])
                Z(z[20])
                Z(z[70])
                Z([3, 'name'])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isVip']
                    ],
                    [
                        [2, '||'],
                        [
                            [7],
                            [3, 'isTeacher']
                        ],
                        [
                            [7],
                            [3, 'isAdmin']
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'studentCategoryLabel']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'otherTeacherBinding']
                    ],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'otherTeacherBinding']
                        ],
                        [3, 'hasOtherThirdPartyTeacher']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'checkinNum']
                ])
                Z([3, 'likeClickHandle'])
                Z([3, 'like'])
                Z(z[20])
                Z([
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'hasLiked']
                    ],
                    [1, '#ff7500'],
                    [1, 'gray']
                ])
                Z([3, 'good-job-o'])
                Z([3, '25px'])
                Z([3, 'playerPlayHandler'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tools']
                        ],
                        [3, 'formatDuration']
                    ],
                    [
                        [5],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'duration']
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'sound']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'checkined']
                        ],
                        [
                            [7],
                            [3, 'allowDelete']
                        ]
                    ],
                    [
                        [2, '!=='],
                        [
                            [7],
                            [3, 'isGood']
                        ],
                        [1, true]
                    ]
                ])
                Z([3, 'delete-tips'])
                Z([3, 'delete'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'uuid']
                ])
                Z(z[49])
                Z([3, 'danger'])
                Z([3, 'showDeleteRuleTips'])
                Z([3, 'gray'])
                Z([3, 'question-o'])
                Z([3, '28rpx'])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z(z[13])
                Z([3, 'loadMore'])
                Z(z[41])
                Z(z[70])
                Z([3, 'hideCheckin'])
                Z([3, 'shadow'])
                Z(z[1])
                Z([3, 'bottom'])
                Z([
                    [7],
                    [3, 'showReocordPanel']
                ])
                Z([3, 'record-panel'])
                Z([3, 'setMode'])
                Z([3, 'mode-bar'])
                Z([a, [3, 'color:'],
                    [
                        [2, '?:'],
                        [
                            [2, '!=='],
                            [
                                [7],
                                [3, 'mode']
                            ],
                            [1, 'normal']
                        ],
                        [1, '#45171d;'],
                        [1, '']
                    ]
                ])
                Z(z[88])
                Z([3, 'main'])
                Z(z[13])
                Z([3, 'recordHandle'])
                Z([3, 'padding: 10px'])
                Z([3, 'https://s.cantonesepi.top/pi/images/mp/home/microphone.png'])
                Z([3, 'large'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'recording']
                    ],
                    [1, 'danger'],
                    [1, 'info']
                ])
                Z(z[13])
                Z(z[134])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tools']
                        ],
                        [3, 'formatDuration']
                    ],
                    [
                        [5],
                        [
                            [7],
                            [3, 'duration']
                        ]
                    ]
                ])
                Z([3, 'player'])
                Z([
                    [7],
                    [3, 'tempFilePath']
                ])
                Z([3, 'btn-bar'])
                Z([
                    [7],
                    [3, 'openComment']
                ])
                Z([3, 'onCheckBoxChange'])
                Z([3, 'square'])
                Z([
                    [7],
                    [3, 'needFeedback']
                ])
                Z([3, 'checkinHandle'])
                Z(z[167])
                Z(z[50])
                Z([3, 'hideModePanel'])
                Z(z[182])
                Z([3, '取消'])
                Z([
                    [7],
                    [3, 'showModePanel']
                ])
                Z([3, '打卡模式'])
                Z([3, 'onChange'])
                Z([3, 'mode'])
                Z([
                    [7],
                    [3, 'mode']
                ])
                Z(z[41])
                Z([3, 'cantonese'])
                Z([3, 'jyutping'])
                Z([3, 'mandarin'])
                Z([3, 'onClose'])
                Z(z[194])
                Z(z[184])
                Z([
                    [7],
                    [3, 'showSettingPanel']
                ])
                Z([3, '播放设置'])
                Z(z[187])
                Z([3, '64rpx'])
                Z([3, 'sentenceRepeatCount'])
                Z([3, '80rpx'])
                Z([3, '10'])
                Z([3, '1'])
                Z([
                    [7],
                    [3, 'sentenceRepeatCount']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'show']
                        ],
                        [
                            [7],
                            [3, 'item']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'hideNav']
                        ]
                    ]
                ])
                Z([3, 'bottom-panel'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, true]
                ])
                Z([
                    [7],
                    [3, 'ohosCheckinResult']
                ])
                Z([3, 'arrow-left'])
                Z([3, 'launchApp'])
                Z(z[49])
                Z([3, 'showCheckin'])
                Z(z[70])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, true]
                ])
                Z(z[215])
                Z([3, 'favHandle'])
                Z([3, 'outline-btn fav-btn'])
                Z([3, 'fav-btn__icon'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'favId']
                    ],
                    [1, '#ee3f2b'],
                    [1, '#909399']
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'favId']
                    ],
                    [1, 'like'],
                    [1, 'like-o']
                ])
                Z(z[96])
                Z([
                    [7],
                    [3, 'feedbackCount']
                ])
                Z([3, 'navToFeedback'])
                Z([a, z[223],
                    [3, '条纠音']
                ])
                Z([3, 'comment-o'])
                Z([3, '30'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_3 = true;
        var x = ['./pages/checkin/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_3_1()
            var oVC = _mz(z, 'van-nav-bar', ['bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftArrow', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(r, oVC)
            var oTC = _v()
            _(r, oTC)
            if (_oz(z, 6, e, s, gg)) {
                oTC.wxVkey = 1
                var lWC = _mz(z, 'view', ['bind:tap', 7, 'class', 1], [], e, s, gg)
                var o2C = _v()
                _(lWC, o2C)
                var x3C = function(f5C, o4C, c6C, gg) {
                    var o8C = _n('van-row')
                    var c9C = _n('van-col')
                    _rz(z, c9C, 'span', 13, f5C, o4C, gg)
                    var o0C = _n('view')
                    _rz(z, o0C, 'class', 14, f5C, o4C, gg)
                    var lAD = _v()
                    _(o0C, lAD)
                    if (_oz(z, 15, f5C, o4C, gg)) {
                        lAD.wxVkey = 1
                    }
                    var aBD = _v()
                    _(o0C, aBD)
                    var tCD = function(bED, eDD, oFD, gg) {
                        var oHD = _mz(z, 'view', ['bind:tap', 18, 'class', 1, 'data-col', 2, 'data-p', 3, 'data-row', 4], [], bED, eDD, gg)
                        var fID = _mz(z, 'ruby-token', ['alternativeTokens', 23, 'blur', 1, 'displayPinyin', 2, 'displayStyle', 3, 'pinyinColor', 4, 'pinyinFontFamily', 5, 'pinyinFontSize', 6, 'pinyinFontWeight', 7, 'pinyinParts', 8, 'text', 9, 'textColor', 10, 'textFontFamily', 11, 'textFontSize', 12, 'textFontWeight', 13, 'variant', 14], [], bED, eDD, gg)
                        _(oHD, fID)
                        _(oFD, oHD)
                        return oFD
                    }
                    aBD.wxXCkey = 4
                    _2z(z, 16, tCD, f5C, o4C, gg, aBD, 'item', 'index', 'index')
                    lAD.wxXCkey = 1
                    _(c9C, o0C)
                    _(o8C, c9C)
                    _(c6C, o8C)
                    return c6C
                }
                o2C.wxXCkey = 4
                _2z(z, 11, x3C, e, s, gg, o2C, 'line', 'row', 'row')
                var aXC = _v()
                _(lWC, aXC)
                if (_oz(z, 38, e, s, gg)) {
                    aXC.wxVkey = 1
                    var cJD = _mz(z, 'van-button', ['block', -1, 'round', -1, 'icon', 39, 'openType', 1, 'size', 2], [], e, s, gg)
                    _(aXC, cJD)
                }
                var hKD = _n('van-row')
                var oLD = _n('van-col')
                _rz(z, oLD, 'span', 42, e, s, gg)
                var cMD = _n('view')
                _rz(z, cMD, 'class', 43, e, s, gg)
                var oND = _n('view')
                _rz(z, oND, 'class', 44, e, s, gg)
                var eRD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 45, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                _(oND, eRD)
                var lOD = _v()
                _(oND, lOD)
                if (_oz(z, 51, e, s, gg)) {
                    lOD.wxVkey = 1
                    var bSD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 52, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    _(lOD, bSD)
                }
                var oTD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 58, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                _(oND, oTD)
                var aPD = _v()
                _(oND, aPD)
                if (_oz(z, 64, e, s, gg)) {
                    aPD.wxVkey = 1
                    var xUD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 65, 'color', 1, 'data-uuid', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    _(aPD, xUD)
                }
                var tQD = _v()
                _(oND, tQD)
                if (_oz(z, 71, e, s, gg)) {
                    tQD.wxVkey = 1
                    var oVD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 72, 'color', 1, 'data-fid', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    _(tQD, oVD)
                }
                lOD.wxXCkey = 1
                lOD.wxXCkey = 3
                aPD.wxXCkey = 1
                aPD.wxXCkey = 3
                tQD.wxXCkey = 1
                tQD.wxXCkey = 3
                _(cMD, oND)
                var fWD = _mz(z, 'van-slider', ['activeColor', 78, 'barHeight', 1, 'bind:change', 2, 'bind:drag', 3, 'bind:drag-end', 4, 'disabled', 5, 'inactiveColor', 6, 'value', 7], [], e, s, gg)
                _(cMD, fWD)
                var cXD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 86, 'color', 1, 'icon', 2, 'size', 3], [], e, s, gg)
                _(cMD, cXD)
                _(oLD, cMD)
                _(hKD, oLD)
                _(lWC, hKD)
                var hYD = _n('van-row')
                var oZD = _n('van-col')
                _rz(z, oZD, 'span', 90, e, s, gg)
                var c1D = _v()
                _(oZD, c1D)
                if (_oz(z, 91, e, s, gg)) {
                    c1D.wxVkey = 1
                }
                var o2D = _v()
                _(oZD, o2D)
                if (_oz(z, 92, e, s, gg)) {
                    o2D.wxVkey = 1
                }
                c1D.wxXCkey = 1
                o2D.wxXCkey = 1
                _(hYD, oZD)
                _(lWC, hYD)
                var tYC = _v()
                _(lWC, tYC)
                if (_oz(z, 93, e, s, gg)) {
                    tYC.wxVkey = 1
                    var l3D = _n('van-row')
                    var a4D = _n('van-col')
                    _rz(z, a4D, 'span', 94, e, s, gg)
                    var t5D = _mz(z, 'van-icon', ['name', 95, 'size', 1], [], e, s, gg)
                    _(a4D, t5D)
                    var e6D = _v()
                    _(a4D, e6D)
                    var b7D = function(x9D, o8D, o0D, gg) {
                        var cBE = _mz(z, 'van-button', ['round', -1, 'bind:tap', 99, 'data-fid', 1, 'data-fname', 2, 'size', 3, 'style', 4, 'type', 5], [], x9D, o8D, gg)
                        _(o0D, cBE)
                        return o0D
                    }
                    e6D.wxXCkey = 4
                    _2z(z, 97, b7D, e, s, gg, e6D, 'item', 'index', 'index')
                    _(l3D, a4D)
                    _(tYC, l3D)
                }
                var eZC = _v()
                _(lWC, eZC)
                if (_oz(z, 105, e, s, gg)) {
                    eZC.wxVkey = 1
                    var hCE = _n('view')
                    _rz(z, hCE, 'class', 106, e, s, gg)
                    var oDE = _v()
                    _(hCE, oDE)
                    if (_oz(z, 107, e, s, gg)) {
                        oDE.wxVkey = 1
                    }
                    var cEE = _v()
                    _(hCE, cEE)
                    if (_oz(z, 108, e, s, gg)) {
                        cEE.wxVkey = 1
                    }
                    var oFE = _v()
                    _(hCE, oFE)
                    if (_oz(z, 109, e, s, gg)) {
                        oFE.wxVkey = 1
                    }
                    oDE.wxXCkey = 1
                    cEE.wxXCkey = 1
                    oFE.wxXCkey = 1
                    _(eZC, hCE)
                }
                var b1C = _v()
                _(lWC, b1C)
                if (_oz(z, 110, e, s, gg)) {
                    b1C.wxVkey = 1
                    var lGE = _n('van-row')
                    _rz(z, lGE, 'customClass', 111, e, s, gg)
                    var tIE = _v()
                    _(lGE, tIE)
                    var eJE = function(oLE, bKE, xME, gg) {
                        var fOE = _n('van-col')
                        _rz(z, fOE, 'span', 114, oLE, bKE, gg)
                        var cPE = _n('view')
                        _rz(z, cPE, 'class', 115, oLE, bKE, gg)
                        var hQE = _v()
                        _(cPE, hQE)
                        if (_oz(z, 116, oLE, bKE, gg)) {
                            hQE.wxVkey = 1
                        }
                        var cSE = _n('view')
                        _rz(z, cSE, 'class', 117, oLE, bKE, gg)
                        var oTE = _mz(z, 'view', ['bind:longpress', 118, 'bind:tap', 1, 'class', 2, 'data-index', 3], [], oLE, bKE, gg)
                        var lUE = _n('view')
                        _rz(z, lUE, 'class', 122, oLE, bKE, gg)
                        var tWE = _n('view')
                        _rz(z, tWE, 'class', 123, oLE, bKE, gg)
                        var eXE = _v()
                        _(tWE, eXE)
                        if (_oz(z, 124, oLE, bKE, gg)) {
                            eXE.wxVkey = 1
                        }
                        var bYE = _v()
                        _(tWE, bYE)
                        if (_oz(z, 125, oLE, bKE, gg)) {
                            bYE.wxVkey = 1
                        }
                        var oZE = _v()
                        _(tWE, oZE)
                        if (_oz(z, 126, oLE, bKE, gg)) {
                            oZE.wxVkey = 1
                        }
                        eXE.wxXCkey = 1
                        bYE.wxXCkey = 1
                        oZE.wxXCkey = 1
                        _(lUE, tWE)
                        var aVE = _v()
                        _(lUE, aVE)
                        if (_oz(z, 127, oLE, bKE, gg)) {
                            aVE.wxVkey = 1
                        }
                        aVE.wxXCkey = 1
                        _(oTE, lUE)
                        _(cSE, oTE)
                        var x1E = _mz(z, 'view', ['bind:tap', 128, 'class', 1, 'data-index', 2], [], oLE, bKE, gg)
                        var o2E = _mz(z, 'van-icon', ['color', 131, 'name', 1, 'size', 2], [], oLE, bKE, gg)
                        _(x1E, o2E)
                        _(cSE, x1E)
                        _(cPE, cSE)
                        var f3E = _mz(z, 'player', ['inactive', -1, 'bind:onPlay', 134, 'duration', 1, 'src', 2], [], oLE, bKE, gg)
                        _(cPE, f3E)
                        var oRE = _v()
                        _(cPE, oRE)
                        if (_oz(z, 137, oLE, bKE, gg)) {
                            oRE.wxVkey = 1
                            var c4E = _n('view')
                            _rz(z, c4E, 'class', 138, oLE, bKE, gg)
                            var h5E = _mz(z, 'van-button', ['round', -1, 'bind:tap', 139, 'data-uuid', 1, 'size', 2, 'type', 3], [], oLE, bKE, gg)
                            _(c4E, h5E)
                            var o6E = _mz(z, 'van-icon', ['bind:tap', 143, 'color', 1, 'name', 2, 'size', 3], [], oLE, bKE, gg)
                            _(c4E, o6E)
                            _(oRE, c4E)
                        }
                        hQE.wxXCkey = 1
                        oRE.wxXCkey = 1
                        oRE.wxXCkey = 3
                        _(fOE, cPE)
                        _(xME, fOE)
                        return xME
                    }
                    tIE.wxXCkey = 4
                    _2z(z, 112, eJE, e, s, gg, tIE, 'item', 'index', 'index')
                    var aHE = _v()
                    _(lGE, aHE)
                    if (_oz(z, 147, e, s, gg)) {
                        aHE.wxVkey = 1
                        var c7E = _n('van-col')
                        _rz(z, c7E, 'span', 148, e, s, gg)
                        var o8E = _mz(z, 'van-button', ['plain', -1, 'round', -1, 'bind:tap', 149, 'size', 1, 'type', 2], [], e, s, gg)
                        _(c7E, o8E)
                        _(aHE, c7E)
                    }
                    aHE.wxXCkey = 1
                    aHE.wxXCkey = 3
                    _(b1C, lGE)
                }
                aXC.wxXCkey = 1
                aXC.wxXCkey = 3
                tYC.wxXCkey = 1
                tYC.wxXCkey = 3
                eZC.wxXCkey = 1
                b1C.wxXCkey = 1
                b1C.wxXCkey = 3
                _(oTC, lWC)
            }
            var l9E = _mz(z, 'van-popup', ['closeable', -1, 'round', -1, 'bind:close', 152, 'customClass', 1, 'overlay', 2, 'position', 3, 'show', 4], [], e, s, gg)
            var a0E = _n('view')
            _rz(z, a0E, 'class', 157, e, s, gg)
            var tAF = _mz(z, 'view', ['bind:tap', 158, 'class', 1, 'style', 2], [], e, s, gg)
            var eBF = _n('van-icon')
            _rz(z, eBF, 'name', 161, e, s, gg)
            _(tAF, eBF)
            _(a0E, tAF)
            var bCF = _n('view')
            _rz(z, bCF, 'class', 162, e, s, gg)
            var oDF = _n('van-row')
            var xEF = _n('van-col')
            _rz(z, xEF, 'span', 163, e, s, gg)
            var oFF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 164, 'customStyle', 1, 'icon', 2, 'size', 3, 'type', 4], [], e, s, gg)
            _(xEF, oFF)
            _(oDF, xEF)
            _(bCF, oDF)
            var fGF = _n('van-row')
            var cHF = _n('van-col')
            _rz(z, cHF, 'span', 169, e, s, gg)
            var hIF = _mz(z, 'player', ['inactive', -1, 'bind:onPlay', 170, 'duration', 1, 'id', 2, 'src', 3], [], e, s, gg)
            _(cHF, hIF)
            _(fGF, cHF)
            _(bCF, fGF)
            _(a0E, bCF)
            var oJF = _n('view')
            _rz(z, oJF, 'class', 174, e, s, gg)
            var cKF = _v()
            _(oJF, cKF)
            if (_oz(z, 175, e, s, gg)) {
                cKF.wxVkey = 1
                var oLF = _mz(z, 'van-checkbox', ['bind:change', 176, 'shape', 1, 'value', 2], [], e, s, gg)
                _(cKF, oLF)
            }
            var lMF = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 179, 'size', 1, 'type', 2], [], e, s, gg)
            _(oJF, lMF)
            cKF.wxXCkey = 1
            cKF.wxXCkey = 3
            _(a0E, oJF)
            _(l9E, a0E)
            _(r, l9E)
            var aNF = _mz(z, 'van-action-sheet', ['bind:cancel', 182, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var tOF = _mz(z, 'van-radio-group', ['bind:change', 187, 'data-key', 1, 'value', 2], [], e, s, gg)
            var ePF = _n('van-radio')
            _rz(z, ePF, 'name', 190, e, s, gg)
            _(tOF, ePF)
            var bQF = _n('van-radio')
            _rz(z, bQF, 'name', 191, e, s, gg)
            _(tOF, bQF)
            var oRF = _n('van-radio')
            _rz(z, oRF, 'name', 192, e, s, gg)
            _(tOF, oRF)
            var xSF = _n('van-radio')
            _rz(z, xSF, 'name', 193, e, s, gg)
            _(tOF, xSF)
            _(aNF, tOF)
            _(r, aNF)
            var oTF = _mz(z, 'van-action-sheet', ['bind:cancel', 194, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var fUF = _mz(z, 'van-stepper', ['bind:change', 199, 'buttonSize', 1, 'data-key', 2, 'inputWidth', 3, 'max', 4, 'min', 5, 'value', 6], [], e, s, gg)
            _(oTF, fUF)
            _(r, oTF)
            var cUC = _v()
            _(r, cUC)
            if (_oz(z, 206, e, s, gg)) {
                cUC.wxVkey = 1
                var cVF = _n('view')
                _rz(z, cVF, 'class', 207, e, s, gg)
                var hWF = _v()
                _(cVF, hWF)
                if (_oz(z, 208, e, s, gg)) {
                    hWF.wxVkey = 1
                    var l1F = _mz(z, 'van-button', ['round', -1, 'appParameter', 209, 'icon', 1, 'openType', 2, 'size', 3], [], e, s, gg)
                    _(hWF, l1F)
                }
                var a2F = _mz(z, 'van-button', ['round', -1, 'bind:tap', 213, 'type', 1], [], e, s, gg)
                _(cVF, a2F)
                var oXF = _v()
                _(cVF, oXF)
                if (_oz(z, 215, e, s, gg)) {
                    oXF.wxVkey = 1
                }
                var cYF = _v()
                _(cVF, cYF)
                if (_oz(z, 216, e, s, gg)) {
                    cYF.wxVkey = 1
                    var t3F = _mz(z, 'view', ['bind:tap', 217, 'class', 1], [], e, s, gg)
                    var e4F = _mz(z, 'van-icon', ['class', 219, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
                    _(t3F, e4F)
                    _(cYF, t3F)
                }
                var oZF = _v()
                _(cVF, oZF)
                if (_oz(z, 223, e, s, gg)) {
                    oZF.wxVkey = 1
                    var b5F = _mz(z, 'van-icon', ['bind:tap', 224, 'info', 1, 'name', 2, 'size', 3], [], e, s, gg)
                    _(oZF, b5F)
                }
                hWF.wxXCkey = 1
                hWF.wxXCkey = 3
                oXF.wxXCkey = 1
                cYF.wxXCkey = 1
                cYF.wxXCkey = 3
                oZF.wxXCkey = 1
                oZF.wxXCkey = 3
                _(cUC, cVF)
            }
            oTC.wxXCkey = 1
            oTC.wxXCkey = 3
            cUC.wxXCkey = 1
            cUC.wxXCkey = 3
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_3";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/index/index.wxml'] = [$gwx0_XC_3, './pages/checkin/index/index.wxml'];
else __wxAppCode__['pages/checkin/index/index.wxml'] = $gwx0_XC_3('./pages/checkin/index/index.wxml');;
__wxRoute = "pages/checkin/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/index/index.js";
define("pages/checkin/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/defineProperty"),
        t = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/typeof"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../commons/utils"),
        s = (require("../../../utils/login"), C(require("../../../utils/monitor"))),
        c = require("../../../commons/config"),
        u = C(require("../../../api/getCheckin")),
        l = C(require("../../../api/addLike")),
        d = C(require("../../../api/delLike")),
        h = C(require("../../../api/getUserCheckinList")),
        p = C(require("../../../api/addUserCheckin")),
        f = C(require("../../../api/delUserCheckin")),
        v = C(require("../../../api/addFav")),
        g = C(require("../../../api/getFavState")),
        m = C(require("../../../api/deleteFav")),
        w = C(require("../../../api/getNewAnswerCount")),
        y = C(require("../../../api/getBanners")),
        k = C(require("../../../api/getOSSPostPolicy")),
        x = C(require("../../../api/exchangeMiniappTicket")),
        S = require("../../../components/ruby-token/shared");

    function C(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var P = function(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e % 60);
            return "".concat(t.toString().padStart(2, "0"), ":").concat(n.toString().padStart(2, "0"))
        },
        T = {
            all: "全部",
            bound_students: "我的学员"
        },
        D = {
            all: "全部",
            vip_only: "仅VIP",
            non_vip_only: "仅非VIP"
        },
        _ = {
            all: "全部",
            active_member: "活跃会员",
            general_member: "一般会员",
            inactive_member: "暂不跟进",
            unclassified: "未分类"
        },
        b = getApp().isOHOS,
        I = void 0 !== b && b;
    Page({
        isGuest: !1,
        maxCheckinLimit: 3,
        page: 1,
        pageSize: 10,
        lastPageTapAt: 0,
        filterPreference: null,
        navBack: o.navBack,
        data: {
            isPlayingSentence: !1,
            isPlayingByWord: !1,
            showSettingPanel: !1,
            showModePanel: !1,
            mode: "normal",
            sentenceRepeatCount: 1,
            PINYIN_SCHEME: c.PINYIN_SCHEME,
            maxDuration: 6e4,
            show: !1,
            showReocordPanel: !1,
            list: [],
            currSoundSource: "original",
            currentValue: 0,
            fmtCurrentTime: "",
            isTeacher: !1,
            identity: null,
            currentScope: "all",
            currentVipFilter: "all",
            currentStudentCategory: "all",
            scopeOptions: [],
            vipFilterOptions: [],
            studentCategoryOptions: [],
            showFilterPanel: !1,
            pinyinScheme: "",
            rubyDisplayStyle: "annotated"
        },
        canToggleFilterPanel: function() {
            var e = this.data,
                t = e.isAdmin,
                n = void 0 !== t && t,
                a = e.identity,
                i = void 0 === a ? null : a;
            return !!n || "official" === (null == i ? void 0 : i.teacherType)
        },
        toggleFilterPanel: function() {
            var e = this;
            if (this.canToggleFilterPanel()) {
                var t = !this.data.showFilterPanel;
                this.setData({
                    showFilterPanel: t
                }, (function() {
                    e.persistFilterPreference({
                        showFilterPanel: t
                    })
                })), wx.showToast({
                    title: t ? "筛选已显示" : "筛选已隐藏",
                    icon: "none"
                })
            }
        },
        handlePageTap: function() {
            if (this.canToggleFilterPanel()) {
                var e = Date.now();
                e - this.lastPageTapAt > 300 ? this.lastPageTapAt = e : (this.lastPageTapAt = 0, this.toggleFilterPanel())
            }
        },
        navToAdminManage: function(e) {
            var t = this.data,
                n = t.isAdmin,
                a = void 0 !== n && n,
                i = t.list,
                r = void 0 === i ? [] : i;
            if (a) {
                var o = (e.currentTarget.dataset || {}).index;
                if (void 0 !== o && r[o]) {
                    var s = decodeURIComponent(r[o].uuid);
                    wx.navigateTo({
                        url: "/pages/admin/checkin/manage/index?id=".concat(s)
                    })
                }
            }
        },
        navToComment: function(e) {
            var t = this.data,
                n = t.isAdmin,
                a = void 0 !== n && n,
                i = t.list,
                r = void 0 === i ? [] : i,
                o = t.isTeacher;
            if (a || void 0 !== o && o) {
                var s = e.currentTarget.dataset.index,
                    c = decodeURIComponent(r[s].uuid),
                    u = "/pages/correction/session/detail?checkinId=".concat(c);
                wx.navigateTo({
                    url: u
                })
            }
        },
        play: function() {
            this.selectComponent("#player").play()
        },
        initRM: function() {
            var e = this,
                t = wx.getRecorderManager();
            t.onStart((function() {
                console.log("recorder start"), e.setData({
                    recTotalTime: 0
                }), e.countdown(), e.setRecordStatus(!0)
            })), t.onPause((function() {
                console.log("recorder pause"), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onInterruptionBegin((function() {
                wx.showModal({
                    content: "录音已中断，请重新录音",
                    showCancel: !1
                }), e.setData({
                    recTotalTime: 0
                }), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onError((function(t) {
                if (e.setRecordStatus(!1), null != t && t.errMsg.includes("auth deny")) wx.showModal({
                    title: "温馨提示",
                    content: "打卡需要授权麦克风录音，前往授权？",
                    confirmText: "去授权",
                    complete: function(e) {
                        e.confirm && wx.openSetting()
                    }
                });
                else {
                    var n = "录音失败|".concat(null == t ? void 0 : t.errMsg);
                    I && (n = "鸿蒙系统暂时不支持录音功能"), wx.showModal({
                        title: "温馨提示",
                        content: n,
                        showCancel: !1
                    })
                }
            })), t.onStop((function(t) {
                console.log("recorder stop", t), e.setRecordStatus(!1);
                var n = t.tempFilePath,
                    a = t.duration;
                e.setData({
                    recTotalTime: 0,
                    tempFilePath: n,
                    duration: a
                }), wx.showToast({
                    title: "录音完成"
                }), e.stopCountDown(), e.play()
            })), this.recorderManager = t
        },
        navToMpCheckin: function() {
            var e = this,
                t = e.data.item;
            wx.miniapp.launchMiniProgram({
                userName: "gh_a68981c02e83",
                miniprogramType: 0,
                path: "pages/checkin/index/index?id=".concat(t.uuid, "&ticket=").concat(t.ticket),
                success: function(t) {
                    "succ" === (null == t ? void 0 : t.extMsg) && (wx.showToast({
                        title: "打卡成功！",
                        icon: "success"
                    }), e.setData({
                        list: []
                    }), e.page = 1, e.getUserCheckinList({
                        showLoading: !0
                    }), e.hideCheckin(), s.default.sum("checkin_ohos_checkin_succ")), s.default.sum("checkin_ohos_launch_mp")
                }
            })
        },
        guideToMp: function() {
            var e = this,
                t = "nav_to_mp_checkin_directly";
            try {
                var n = e.data.item;
                I && n.ticket && wx.miniapp.hasWechatInstall({
                    success: function(n) {
                        if (n.hasWechatInstall) {
                            try {
                                if (!0 === wx.getStorageSync(t)) return void e.navToMpCheckin()
                            } catch (e) {}
                            wx.showModal({
                                content: "鸿蒙系统录音适配中，请前往小程序打卡。",
                                confirmText: "去打卡",
                                complete: function(n) {
                                    n.confirm && (e.navToMpCheckin(), wx.setStorage({
                                        key: t,
                                        data: !0
                                    }))
                                }
                            }), s.default.sum("checkin_ohos_has_wx_install")
                        } else wx.showModal({
                            content: "鸿蒙系统录音适配中，请安装微信后前往小程序打卡。",
                            showCancel: !1
                        }), s.default.sum("checkin_ohos_has_not_wx_install")
                    }
                })
            } catch (e) {}
        },
        showCheckin: function() {
            var e = this.data,
                t = e.allowDelete;
            if (e.checkined) wx.showModal({
                content: t ? "已完成打卡，如需重新打卡，请先删除当前记录。删除成功后可重新打卡。" : "已完成打卡",
                showCancel: !1
            });
            else if (this.isMakeupCheckinLimit()) wx.showModal({
                title: "温馨提示",
                showCancel: !1,
                content: "为了保证打卡质量，每天限定最多补打卡次数为".concat(this.maxCheckinLimit, "次。")
            });
            else {
                var n = this.auth || (0, o.getLoginInfo)();
                this.getOSSPostPolicy(), n && n.nickname && n.avatar ? (this.userInfo = {
                    nickname: n.nickname,
                    avatar: n.avatar,
                    openid: null == n ? void 0 : n.openid
                }, this.setData({
                    showReocordPanel: !0
                })) : wx.showModal({
                    content: "获取用户信息失败",
                    showCancel: !1,
                    complete: o.navBack
                })
            }
        },
        hideCheckin: function() {
            this.setData({
                showReocordPanel: !1
            })
        },
        checkinHandle: function(e) {
            var t, n = this;
            n.data.tempFilePath ? (null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.x) > 80 ? n.checkin() : wx.showModal({
                title: "打卡确认",
                content: "请确认录音内容是否正确，提交后不可更改。",
                cancelText: "再看看",
                confirmText: "提交打卡",
                complete: function(e) {
                    e.confirm && n.checkin()
                }
            }) : wx.showModal({
                content: "请先完成录音",
                showCancel: !1
            })
        },
        checkin: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, o, s, c, u, l, d, h;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o = (a = e).data, s = o.tempFilePath, c = o.duration, u = a.data.item || {}, l = u.uuid) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return");
                        case 5:
                            if (d = "".concat(Date.now()).concat(Math.random()), null !== (n = a.userInfo) && void 0 !== n && n.openid && (d = a.userInfo.openid), a.postPolicy) {
                                t.next = 14;
                                break
                            }
                            return t.next = 10, a.getOSSPostPolicy(!0);
                        case 10:
                            if (a.postPolicy = t.sent, a.postPolicy) {
                                t.next = 14;
                                break
                            }
                            return wx.showModal({
                                content: "上传音频失败[10023]，请稍后重试",
                                showCancel: !1
                            }), t.abrupt("return");
                        case 14:
                            h = "".concat(a.postPolicy.dir).concat(d, ".m4a"), a.uploadFileToOSS({
                                filePath: s,
                                key: h,
                                success: function() {
                                    var e = r(i().mark((function e(t) {
                                        return i().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    a.doCheckin({
                                                        ossTempFile: h,
                                                        duration: c,
                                                        checkinId: l,
                                                        tempFilePath: s
                                                    });
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fail: function() {
                                    wx.showModal({
                                        content: "音频上传失败[100213]，请稍后重试。",
                                        showCancel: !1
                                    })
                                }
                            });
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        doCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var r, o, c, u, l, d, h, f, v, g, m, w, y, k, x, S;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return r = e.checkinId, o = e.duration, c = e.ossTempFile, u = e.tempFilePath, l = t, wx.showLoading({
                                title: "正在提交..."
                            }), n.prev = 3, n.next = 6, (0, p.default)({
                                checkinId: r,
                                duration: o,
                                tempFile: c
                            }, {
                                header: {
                                    openid: null === (d = l.auth) || void 0 === d ? void 0 : d.openid,
                                    token: null === (h = l.auth) || void 0 === h ? void 0 : h.token
                                }
                            });
                        case 6:
                            if (f = n.sent, v = f.code, g = f.data, 0 === v) {
                                wx.showToast({
                                    title: "打卡成功！",
                                    icon: "success"
                                }), k = l.data.list, x = void 0 === k ? [] : k, S = {
                                    avatar: (null === (m = l.userInfo) || void 0 === m ? void 0 : m.avatar) || "",
                                    nickname: (null === (w = l.userInfo) || void 0 === w ? void 0 : w.nickname) || "微信用户",
                                    openid: null === (y = l.userInfo) || void 0 === y ? void 0 : y.openid,
                                    sound: u,
                                    duration: o,
                                    like: 0,
                                    time: "刚刚",
                                    uuid: g.uuid,
                                    checkined: !0
                                }, l.setData({
                                    list: [S].concat(a(x)),
                                    showReocordPanel: !1,
                                    checkined: !0,
                                    allowDelete: !0,
                                    ohosCheckinResult: "succ"
                                });
                                try {
                                    l.getOpenerEventChannel().emit("checkedNotify", r)
                                } catch (e) {}
                                try {
                                    l.addCheckinLimit()
                                } catch (e) {}
                                s.default.sum("_ohos")
                            } else -2 === v ? wx.showToast({
                                title: "重复打卡",
                                icon: "error"
                            }) : wx.showToast({
                                title: "打卡失败",
                                icon: "error"
                            });
                            n.next = 16;
                            break;
                        case 12:
                            n.prev = 12, n.t0 = n.catch(3), console.error(n.t0), wx.showToast({
                                title: "打卡失败",
                                icon: "error"
                            });
                        case 16:
                            wx.hideLoading();
                        case 17:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [3, 12]
                ])
            })))()
        },
        report: function(e) {
            var t = e.id,
                n = e.msg,
                a = void 0 === n ? "" : n;
            wx.reportEvent("wxdata_perf_monitor", {
                wxdata_perf_monitor_id: t,
                wxdata_perf_monitor_level: 0,
                wxdata_perf_error_code: 0,
                wxdata_perf_error_msg: a,
                wxdata_perf_cost_time: 0,
                wxdata_perf_extra_info1: "",
                wxdata_perf_extra_info2: "",
                wxdata_perf_extra_info3: ""
            })
        },
        stopCountDown: function() {
            this.t && clearInterval(this.t)
        },
        countdown: function() {
            var e = this,
                t = this,
                n = t.data.maxDuration,
                a = 0;
            this.t = setInterval((function() {
                (a += 1) >= n ? clearInterval(e.t) : t.setData({
                    recTotalTime: a
                })
            }), 1e3)
        },
        setRecordStatus: function(e) {
            this.setData({
                recording: e
            }), this.recording = e
        },
        recordHandle: function() {
            this.recording ? this.stopRecord() : (this.stopSentensePlay(), this.startRecord()), this.recording = !this.recording
        },
        startRecord: function() {
            this.recording && this.stopRecord();
            var e = this.data.maxDuration,
                t = "aac";
            I && (t = "mp3");
            var n = {
                duration: e,
                sampleRate: 16e3,
                numberOfChannels: 1,
                encodeBitRate: 32e3,
                format: t
            };
            this.recorderManager.start(n)
        },
        stopRecord: function() {
            this.recorderManager.stop(), this.setRecordStatus(!1)
        },
        getData: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r, s, c, l;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, wx.showLoading({
                                title: "加载中..."
                            }), t.prev = 2, !1, t.next = 6, (0, u.default)(n.id, {
                                guest: !1,
                                accessToken: n.accessToken,
                                header: {
                                    openid: null === (a = n.auth) || void 0 === a ? void 0 : a.openid,
                                    token: null === (r = n.auth) || void 0 === r ? void 0 : r.token
                                }
                            });
                        case 6:
                            if (s = t.sent, c = s.code, l = s.data, 0 !== c) {
                                t.next = 20;
                                break
                            }
                            if (!0 !== (null == l ? void 0 : l.needVip)) {
                                t.next = 14;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.abrupt("return");
                        case 14:
                            n.formatData(l), l.maxCheckinLimit && (n.maxCheckinLimit = parseInt(l.maxCheckinLimit, 10)), l.maxRecordTime && n.setData({
                                maxDuration: l.maxRecordTime
                            }), !0 === n.isGuest || e.auth || (n.getFavState(), setTimeout((function() {
                                n.getNewAnswerCount(), n.getBanners()
                            }), 1e3)), t.next = 21;
                            break;
                        case 20:
                            throw new Error;
                        case 21:
                            t.next = 27;
                            break;
                        case 23:
                            t.prev = 23, t.t0 = t.catch(2), console.error(t.t0), wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: o.navBack,
                                showCancel: !1
                            });
                        case 27:
                            e.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 29:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 23]
                ])
            })))()
        },
        loadMore: function() {
            this.page += 1, this.getUserCheckinList({
                showLoading: !0
            })
        },
        getScopeOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedScopes;
            return Array.isArray(n) && n.length ? n.map((function(e) {
                return {
                    value: e,
                    label: T[e] || e
                }
            })) : this.data.isTeacher && !this.data.isAdmin ? [{
                value: "bound_students",
                label: T.bound_students
            }] : []
        },
        getVipFilterOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedVipFilters;
            return Array.isArray(n) && n.length ? n.map((function(e) {
                return {
                    value: e,
                    label: D[e] || e
                }
            })) : []
        },
        getStudentCategoryOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedStudentCategoryFilters;
            return Array.isArray(n) && n.length ? n.length <= 1 ? [] : n.map((function(e) {
                return {
                    value: e,
                    label: _[e] || e
                }
            })) : []
        },
        getRequestScope: function() {
            var e = this.getScopeOptions();
            if (!e.length) return this.data.currentScope || "";
            var t = this.data.currentScope;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        getRequestVipFilter: function() {
            var e = this.getVipFilterOptions();
            if (!e.length) return this.data.currentVipFilter || "";
            var t = this.data.currentVipFilter;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        getRequestStudentCategory: function() {
            var e = this.getStudentCategoryOptions();
            if (!e.length) return "";
            var t = this.data.currentStudentCategory;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        loadFilterPreference: function() {
            try {
                var e = wx.getStorageSync("checkin_filter_preference");
                if (e && "object" === n(e)) return void(this.filterPreference = {
                    showFilterPanel: !!e.showFilterPanel,
                    currentScope: e.currentScope || "",
                    currentVipFilter: e.currentVipFilter || "",
                    currentStudentCategory: e.currentStudentCategory || ""
                })
            } catch (e) {}
            this.filterPreference = {
                showFilterPanel: !1,
                currentScope: "",
                currentVipFilter: "",
                currentStudentCategory: ""
            }
        },
        persistFilterPreference: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = this.filterPreference || {},
                a = t(t({}, n), {}, {
                    showFilterPanel: !!this.data.showFilterPanel,
                    currentScope: this.data.currentScope || "",
                    currentVipFilter: this.data.currentVipFilter || "",
                    currentStudentCategory: this.data.currentStudentCategory || ""
                }, e);
            this.filterPreference = a, wx.setStorage({
                key: "checkin_filter_preference",
                data: a
            })
        },
        resetCheckinList: function() {
            this.page = 1, this.setData({
                list: [],
                hasNext: !1
            })
        },
        onScopeChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentScope && this.setData({
                currentScope: a
            }, (function() {
                t.persistFilterPreference({
                    currentScope: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        onVipFilterChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentVipFilter && this.setData({
                currentVipFilter: a
            }, (function() {
                t.persistFilterPreference({
                    currentVipFilter: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        onStudentCategoryChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentStudentCategory && this.setData({
                currentStudentCategory: a
            }, (function() {
                t.persistFilterPreference({
                    currentStudentCategory: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        getUserCheckinList: function() {
            var e = arguments,
                t = this;
            return r(i().mark((function n() {
                var r, o, s, c, u, l, d, p, f, v, g, m, w, y, k, x, S, C, P, T, D, _, b, I, F, A, L, R, M, E, O, q;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = r.showLoading, s = void 0 !== o && o, c = t.data.item || {}, u = c.uuid, l = t.page, d = t.pageSize, u) {
                                n.next = 5;
                                break
                            }
                            return n.abrupt("return");
                        case 5:
                            return s && wx.showLoading({
                                title: "加载中...",
                                mask: !0
                            }), n.prev = 6, p = t.getRequestScope(), f = t.getRequestVipFilter(), v = t.getRequestStudentCategory(), n.next = 12, (0, h.default)({
                                page: l,
                                pageSize: d,
                                checkinId: u,
                                teacherOnly: "bound_students" === p || !p && t.data.isTeacher,
                                scope: p,
                                vipFilter: f,
                                studentCategory: v
                            });
                        case 12:
                            g = n.sent, m = g.code, w = g.data, y = w.list, k = w.hasNext, x = w.checkined, S = void 0 !== x && x, C = w.allowDelete, P = void 0 !== C && C, T = w.identity, D = void 0 === T ? null : T, _ = w.filters, b = void 0 === _ ? {} : _, 0 === m && (I = t.data.list, F = D || t.data.identity, A = t.getScopeOptions(F), L = t.getVipFilterOptions(F), R = t.getStudentCategoryOptions(F), M = b.scope || p || A[0] && A[0].value || "all", E = b.vipFilter || f || L[0] && L[0].value || "all", O = b.studentCategory || v || R[0] && R[0].value || "all", q = !(null == F || !F.isAdmin) || "official" === (null == F ? void 0 : F.teacherType), t.setData({
                                list: [].concat(a(I), a(y)),
                                hasNext: k,
                                identity: F,
                                scopeOptions: A,
                                vipFilterOptions: L,
                                studentCategoryOptions: R,
                                currentScope: M,
                                currentVipFilter: E,
                                currentStudentCategory: O,
                                showFilterPanel: !!q && t.data.showFilterPanel
                            }, (function() {
                                t.persistFilterPreference({
                                    currentScope: M,
                                    currentVipFilter: E,
                                    currentStudentCategory: O,
                                    showFilterPanel: !!q && t.data.showFilterPanel
                                }), 1 === l && t.setData({
                                    checkined: S,
                                    allowDelete: P
                                })
                            }))), n.next = 31;
                            break;
                        case 28:
                            n.prev = 28, n.t0 = n.catch(6), console.error(n.t0);
                        case 31:
                            wx.hideLoading();
                        case 32:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [6, 28]
                ])
            })))()
        },
        formatData: function(e) {
            var i, r, o, s = t({}, e),
                c = /(.+?)\(([a-zA-Z]+\d?)\)/g,
                u = this.data.pinyinScheme || this.getCurrentPinyinScheme();
            if (s.sentenceArr = s.cantonese.split("\n").map((function(e) {
                    return a(e.matchAll(c)).map((function(e) {
                        return [e[1], e[2], (0, S.buildRubyToken)(e[1], e[2], u)]
                    }))
                })), s.ext) {
                var l = {},
                    d = s.ext.split("\n");
                l.desc = d.shift(), l.list = d.map((function(e) {
                    var t = e.split(" ");
                    return {
                        title: t[0],
                        feedId: t[2],
                        finderUserName: t[1]
                    }
                })), s.ext = l
            }
            s.feedId || null != s && null !== (i = s.ext) && void 0 !== i && null !== (r = i.list) && void 0 !== r && null !== (o = r[0]) && void 0 !== o && o.feedId && (s.feedId = s.ext.list[0].feedId);
            var h = !1;
            s.isAdmin && (h = !0, delete s.isAdmin);
            var p = !1;
            s.isTeacher && (p = !0, delete s.isTeacher);
            var f = null;
            s.identity && "object" === n(s.identity) && (f = s.identity);
            var v = !1;
            s.earlyCheckIn && (v = !0), delete s.earlyCheckIn;
            var g = this.filterPreference || {},
                m = f || this.data.identity,
                w = this.getScopeOptions(m),
                y = this.getVipFilterOptions(m),
                k = this.getStudentCategoryOptions(m),
                x = g.currentScope || "",
                C = g.currentVipFilter || "",
                P = g.currentStudentCategory || "",
                T = w.some((function(e) {
                    return e.value === x
                })),
                D = y.some((function(e) {
                    return e.value === C
                })),
                _ = k.some((function(e) {
                    return e.value === P
                })),
                b = (T ? x : "") || w[0] && w[0].value || (p && !h ? "bound_students" : "all"),
                I = (D ? C : "") || y[0] && y[0].value || "all",
                F = (_ ? P : "") || k[0] && k[0].value || "all",
                A = !(null == m || !m.isAdmin) || "official" === (null == m ? void 0 : m.teacherType);
            this.setData({
                item: s,
                isAdmin: h,
                isTeacher: p,
                identity: m,
                scopeOptions: w,
                vipFilterOptions: y,
                studentCategoryOptions: k,
                earlyCheckIn: v,
                currentScope: b,
                currentVipFilter: I,
                currentStudentCategory: F,
                showFilterPanel: !!A && !!g.showFilterPanel
            }), this.auth || this.getUserCheckinList()
        },
        openSPH: function(e) {
            var t = e.target.dataset,
                n = t.fid,
                a = t.fname;
            wx.openChannelsActivity({
                feedId: n,
                finderUserName: a
            })
        },
        navToVideo: function(e) {
            var t = e.target.dataset.uuid;
            t && wx.navigateTo({
                url: "/pages/video/detail/index?uuid=".concat(t),
                complete: function(e) {
                    s.default.sum("checkin_nav_to_video")
                }
            })
        },
        navToSph: function(e) {
            var t = e.target.dataset.fid;
            t && wx.navigateTo({
                url: "/pages/sph/index?feedId=".concat(t),
                complete: function(e) {
                    console.log(e)
                }
            })
        },
        playByWord: function() {
            var e = this,
                t = this.data,
                n = t.item,
                a = (void 0 === n ? {
                    item: {
                        sentenceArr: []
                    }
                } : n).sentenceArr,
                i = t.recording,
                r = t.isPlayingSentence,
                s = t.isPlayingByWord,
                c = a[0].length;
            if (s) return o.playAudio.destroy(), void this.resetCurrent();
            if (c)
                if (r && this.stopSentensePlay(), i) wx.showToast({
                    title: "正在录音",
                    icon: "error"
                });
                else {
                    ! function t(n, i) {
                        var r = "".concat(e.AUDIO_BASE, "/").concat(a[n][i][1], ".mp3"),
                            s = function() {
                                (i += 1) >= a[n].length && (i = 0, (n += 1) >= a.length) ? e.resetCurrent() : o.playAudio.t = setTimeout((function() {
                                    t(n, i)
                                }), 400)
                            };
                        (0, o.playAudio)(r, s, (function() {
                            s(), /\d\.mp3$/.test(r) && e.report({
                                id: "audioNotFound",
                                msg: "資源不存在" + r
                            })
                        })), e.setData({
                            currentRow: n,
                            currentCol: i,
                            isPlayingByWord: !0,
                            currSoundSource: "zi"
                        })
                    }(0, 0)
                }
        },
        resetCurrent: function() {
            this.setData({
                currentRow: -1,
                currentCol: -1,
                isPlayingByWord: !1
            })
        },
        playWord: function(e) {
            var t = e.currentTarget;
            if (this.data.recording) wx.showToast({
                title: "正在录音",
                icon: "error"
            });
            else {
                this.data.isPlayingSentence && this.stopSentensePlay();
                var n = t.dataset,
                    a = n.p,
                    i = n.row,
                    r = n.col,
                    s = "".concat(this.AUDIO_BASE, "/").concat(a, ".mp3");
                (0, o.playAudio)(s, this.resetCurrent, this.resetCurrent), this.setData({
                    currentRow: i,
                    currentCol: r
                })
            }
        },
        getCurrentPinyinScheme: function() {
            return (0, o.getPinyinScheme)() || ""
        },
        getCurrentRubyDisplayStyle: function() {
            return (0, o.getRubyDisplayStyle)() || "annotated"
        },
        refreshDisplayPreferences: function() {
            var e = this.getCurrentPinyinScheme(),
                t = this.getCurrentRubyDisplayStyle();
            if (e !== this.data.pinyinScheme || t !== this.data.rubyDisplayStyle) {
                var n, a = {};
                if (e !== this.data.pinyinScheme) a.pinyinScheme = e, null !== (n = this.data.item) && void 0 !== n && n.sentenceArr && (a["item.sentenceArr"] = this.data.item.sentenceArr.map((function(t) {
                    return (Array.isArray(t) ? t : []).map((function(t) {
                        return [t[0], t[1], (0, S.buildRubyToken)(t[0], t[1], e)]
                    }))
                })));
                t !== this.data.rubyDisplayStyle && (a.rubyDisplayStyle = t), this.setData(a)
            }
        },
        onLoad: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, s, c;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            (a = t).id = decodeURIComponent(e.id || "1"), a.accessToken = e.accessToken || "";
                            try {
                                a.accessToken = a.accessToken ? decodeURIComponent(a.accessToken) : ""
                            } catch (e) {}
                            if (a.loadFilterPreference(), null == e || !e.ticket) {
                                n.next = 9;
                                break
                            }
                            return n.next = 8, t.ohosCheckin(e.ticket);
                        case 8:
                            return n.abrupt("return");
                        case 9:
                            a.getData(), "comment" === e.from && a.setData({
                                hideNav: !0
                            }), t.AUDIO_BASE = (0, o.getAudioBasePath)(), r = t.getCurrentPinyinScheme(), s = t.getCurrentRubyDisplayStyle(), a.setData({
                                pinyinScheme: r,
                                rubyDisplayStyle: s
                            }), t.loadSetting(), (c = a.getOpenerEventChannel()) && c.on && c.on("acceptDataFromOpenerPage", (function(e) {
                                "history" === (null == e ? void 0 : e.from) && (a.fromHistory = !0)
                            }));
                        case 18:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        ohosCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading("加载中..."), n.next = 3, (0, x.default)(e);
                        case 3:
                            a = n.sent, r = a.data, wx.hideLoading(), null != r && r.openid && null != r && r.token ? (t.auth = {
                                openid: r.openid,
                                token: r.token,
                                avatar: r.avatar,
                                nickname: r.nickname
                            }, t.userInfo = t.auth, t.setData({
                                ohosHack: !0
                            }), t.getData()) : (s.default.sum("checkin_ohos_exchange_error"), wx.showModal({
                                content: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: function(e) {}
                            }));
                        case 7:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        onUnload: function() {
            this.destroyAudio()
        },
        onHide: function() {
            this.pauseAudio()
        },
        destroyAudio: function() {
            this.audioIns && (this.audioIns.stop(), this.audioIns.destroy()), this.stopPlayAudio()
        },
        pauseAudio: function() {
            this.stopPlayAudio(), this.stopSentensePlay(), this.resetCurrent()
        },
        onReady: function() {
            var e = this;
            e.initRM(), wx.getStorage({
                key: c.CHECKIN_NEED_FEEDBACK_KEY,
                success: function(t) {
                    e.setData({
                        needFeedback: t.data
                    })
                }
            })
        },
        navToHistory: function() {
            this.fromHistory ? wx.navigateBack() : wx.navigateTo({
                url: "../history/index"
            })
        },
        likeClickHandle: function(n) {
            var a = n.currentTarget.dataset.index,
                i = this.data.list[a],
                r = i.hasLiked,
                o = i.like,
                s = "list.[".concat(a, "]");
            this.setData(e({}, s, t(t({}, i), {}, {
                hasLiked: !r,
                like: o + (r ? -1 : 1)
            }))), r ? this.removeLike(i.uuid, i.like) : this.addLike(i.uuid, i.openid, i.like)
        },
        updateLikeStatus: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                i = this,
                r = i.data.list;
            i.setData({
                list: r.map((function(i) {
                    return i.uuid === e && (i.hasLiked = t, !1 === n && (i.like = a)), i
                }))
            })
        },
        removeLike: function(e) {
            var t = arguments,
                n = this;
            return r(i().mark((function a() {
                var r, o, s, c;
                return i().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            if (r = t.length > 1 && void 0 !== t[1] ? t[1] : 0, !(o = n).requesting) {
                                a.next = 4;
                                break
                            }
                            return a.abrupt("return");
                        case 4:
                            return o.requesting = !0, a.prev = 5, a.next = 8, (0, d.default)(e);
                        case 8:
                            s = a.sent, c = s.code, o.updateLikeStatus(e, 0 !== c, 0 === c, r), a.next = 16;
                            break;
                        case 13:
                            a.prev = 13, a.t0 = a.catch(5), o.updateLikeStatus(e, !0, !1, r);
                        case 16:
                            o.requesting = !1;
                        case 17:
                        case "end":
                            return a.stop()
                    }
                }), a, null, [
                    [5, 13]
                ])
            })))()
        },
        addLike: function(e, t) {
            var n = arguments,
                a = this;
            return r(i().mark((function r() {
                var o, s, c;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (o = n.length > 2 && void 0 !== n[2] ? n[2] : 0, !a.requesting) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return a.requesting = !0, i.prev = 4, i.next = 7, (0, l.default)({
                                userCheckinId: e,
                                toOpenid: t
                            });
                        case 7:
                            s = i.sent, c = s.code, a.updateLikeStatus(e, 0 === c, 0 === c, o), i.next = 15;
                            break;
                        case 12:
                            i.prev = 12, i.t0 = i.catch(4), a.updateLikeStatus(e, !1, !1, o);
                        case 15:
                            a.requesting = !1;
                        case 16:
                        case "end":
                            return i.stop()
                    }
                }), r, null, [
                    [4, 12]
                ])
            })))()
        },
        onShareAppMessage: function() {
            var e = "每日打卡，进步听得见",
                t = "/pages/checkin/index/index",
                n = this.data,
                a = n.isTeacher,
                i = void 0 !== a && a,
                r = n.isAdmin,
                o = void 0 !== r && r,
                s = n.item,
                u = void 0 === s ? {} : s;
            return (i || o) && (u.date && (e = "每日打卡-".concat(u.date)), t += "?id=".concat(u.uuid)), {
                title: e,
                path: t,
                imageUrl: c.SHARE_IMG_URLS.CHECKIN
            }
        },
        onShareTimeline: function() {
            var e = "每日打卡，进步听得见",
                t = "",
                n = this.data,
                a = n.isTeacher,
                i = void 0 !== a && a,
                r = n.isAdmin,
                o = void 0 !== r && r,
                s = n.item,
                u = void 0 === s ? {} : s;
            return (i || o) && u.date && (e = "每日打卡-".concat(u.date)), (i || o) && u.uuid && (t = "id=".concat(encodeURIComponent(u.uuid))), {
                title: e,
                query: t,
                imageUrl: c.SHARE_IMG_URLS.CHECKIN
            }
        },
        onCheckBoxChange: function(e) {
            var t = e.detail;
            this.setData({
                needFeedback: t
            }), wx.setStorage({
                key: c.CHECKIN_NEED_FEEDBACK_KEY,
                data: t
            })
        },
        getYMD: function() {
            return (new Date).toLocaleDateString("en-CA")
        },
        isMakeupCheckinLimit: function() {
            if (this.deleteFlag) return !1;
            var e = this.getCheckinCount();
            return !0 !== this.data.item.isToday && e >= this.maxCheckinLimit
        },
        addCheckinLimit: function() {
            if (!this.data.item.isToday && !this.deleteFlag) {
                var e = this.getCheckinCount(),
                    t = this.getYMD();
                e += 1, wx.setStorage({
                    key: c.HIS_CHECKIN_LIMIT,
                    data: "".concat(t, ":").concat(e)
                })
            }
        },
        getCheckinCount: function() {
            var e = 0,
                t = this.getYMD();
            try {
                var n = wx.getStorageSync(c.HIS_CHECKIN_LIMIT);
                if (n && n.includes(t)) {
                    var a = n.split("".concat(t, ":"));
                    2 === a.length && /^\d+$/.test(a[1]) && parseInt(a[1], 10) > 0 && (e = parseInt(a[1], 10))
                }
            } catch (e) {}
            return e
        },
        navToHelp: function() {
            wx.navigateTo({
                url: "../help/index"
            })
        },
        tipTapHandler: function() {
            var e = this.data,
                t = e.list;
            if (e.checkined)
                if (null != t && t.length) {
                    var n = decodeURIComponent(t[0].uuid);
                    wx.navigateTo({
                        url: "../comment/index?id=".concat(n)
                    })
                } else wx.showToast({
                    title: "参数错误",
                    icon: "error"
                });
            else this.navToHelp()
        },
        delUserCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, o, s, c, u;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading({
                                title: "正在处理..."
                            }), n.prev = 1, n.next = 4, (0, f.default)(e, {
                                header: {
                                    openid: null === (a = t.auth) || void 0 === a ? void 0 : a.openid,
                                    token: null === (r = t.auth) || void 0 === r ? void 0 : r.token
                                }
                            });
                        case 4:
                            if (o = n.sent, s = o.code, c = o.msg, 0 !== s) {
                                n.next = 14;
                                break
                            }
                            wx.showToast({
                                title: "删除成功",
                                icon: "success"
                            }), u = t.data.list, t.setData({
                                list: u.filter((function(t) {
                                    return t.uuid !== e
                                })),
                                checkined: !1
                            }), t.deleteFlag = !0, n.next = 27;
                            break;
                        case 14:
                            if ("CHECKIN_HAS_CORRECTION" !== c) {
                                n.next = 18;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "该打卡已有纠音记录，不允许删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 18:
                            if ("DELETE_WINDOW_EXPIRED" !== c) {
                                n.next = 22;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "当前仅允许打卡后24小时内删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 22:
                            if ("CHECKIN_IS_GOOD" !== c) {
                                n.next = 26;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "该打卡已评优，不允许删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 26:
                            throw new Error(c || "DELETE_FAILED");
                        case 27:
                            n.next = 32;
                            break;
                        case 29:
                            n.prev = 29, n.t0 = n.catch(1), wx.showToast({
                                title: "删除失败",
                                icon: "error"
                            });
                        case 32:
                            wx.hideLoading();
                        case 33:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [1, 29]
                ])
            })))()
        },
        delete: function(e) {
            var t, n = this,
                a = e.currentTarget.dataset.uuid;
            a ? wx.showModal({
                content: "是否删除打卡？",
                confirmText: "确认删除",
                cancelText: "再想想",
                complete: (t = r(i().mark((function e(t) {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t.confirm && n.delUserCheckin(a);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e) {
                    return t.apply(this, arguments)
                })
            }) : wx.showToast({
                title: "参数错误"
            })
        },
        showDeleteRuleTips: function() {
            wx.showModal({
                title: "删除说明",
                content: "1. 打卡后24小时内可删除。2. 已评优的打卡不允许删除。3. 已有纠音记录的打卡不允许删除。",
                showCancel: !1
            })
        },
        showSettingPanel: function() {
            this.setData({
                showSettingPanel: !0
            }, (function() {
                s.default.sum("checkin_showSettingPanel")
            }))
        },
        onClose: function() {
            this.setData({
                showSettingPanel: !1
            })
        },
        onChange: function(t) {
            var n = this,
                a = t.currentTarget.dataset.key,
                i = t.detail;
            this.setData(e({}, a, i), (function() {
                n.updateSetting(), s.default.sum("checkin_play_setting_".concat(a, "_").concat(i))
            }))
        },
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: c.CHECKIN_PLAY_SETTING_KEY,
                success: function(t) {
                    var n = t.data;
                    e.setData({
                        sentenceRepeatCount: n.sentenceRepeatCount || 1,
                        mode: n.mode || "normal"
                    })
                }
            }), e.useWebAudio = (0, o.isUseWebAudio)()
        },
        updateSetting: function() {
            var e = this.data,
                t = e.sentenceRepeatCount,
                n = void 0 === t ? 1 : t,
                a = e.mode,
                i = {
                    sentenceRepeatCount: n,
                    mode: void 0 === a ? "normal" : a
                };
            wx.setStorage({
                key: c.CHECKIN_PLAY_SETTING_KEY,
                data: i
            })
        },
        navToVocabulary: function(e) {
            var t = e.currentTarget.dataset.uuid;
            wx.navigateTo({
                url: "/pages/vocabulary/detail/index?id=".concat(t)
            })
        },
        getFavState: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, g.default)("checkin", e.id);
                        case 3:
                            if (n = t.sent, a = n.code, r = n.data.id, 0 !== a) {
                                t.next = 10;
                                break
                            }
                            e.setData({
                                favId: r
                            }), t.next = 11;
                            break;
                        case 10:
                            throw "error";
                        case 11:
                            t.next = 15;
                            break;
                        case 13:
                            t.prev = 13, t.t0 = t.catch(0);
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 13]
                ])
            })))()
        },
        favHandle: function() {
            var e = this.data.favId;
            e ? this.doDeleteFav(e) : this.doAddFav()
        },
        doDeleteFav: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, (0, m.default)(e);
                        case 3:
                            a = n.sent, 1 === (null == (r = a.data) ? void 0 : r.removed) && t.setData({
                                favId: 0
                            }), n.next = 10;
                            break;
                        case 8:
                            n.prev = 8, n.t0 = n.catch(0);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [0, 8]
                ])
            })))()
        },
        doAddFav: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, v.default)({
                                bid: e.data.item.uuid,
                                category: "checkin"
                            });
                        case 2:
                            n = t.sent, null != (a = n.data) && a.id && (e.setData({
                                favId: a.id
                            }), wx.showToast({
                                title: "收藏成功",
                                icon: "success"
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        stopPlayAudio: function() {
            o.playAudio.stop(), o.playAudio.destroy()
        },
        onDrag: function(e) {
            if (this.lastTimeStamp && e.timeStamp - this.lastTimeStamp < 10) console.log("频率限制");
            else {
                var t;
                if (this.isDraging = !0, this.lastDragTimeStamp && e.timeStamp - this.lastTimeStamp > 500)
                    if (null != this && null !== (t = this.audioIns) && void 0 !== t && t.duration) {
                        var n = this.audioIns.duration * e.detail.value / 100;
                        this.setData({
                            fmtCurrentTime: P(n)
                        })
                    }
                this.lastDragTimeStamp = e.timeStamp
            }
        },
        onDragChange: function(e) {
            this.isDraging = !1, this.currentTime = e.detail
        },
        onDragEnd: function(e) {
            var t;
            if (console.log("onDragEnd", e), this.lastTimeStamp = e.timeStamp, this.isDraging = !1, this.audioIns) {
                if (this.isDraging = !1, null != this && null !== (t = this.audioIns) && void 0 !== t && t.duration) {
                    var n = Number((this.audioIns.duration * this.currentTime / 100).toFixed(6));
                    this.audioIns.seek(n), !0 !== this.data.isPlayingSentence && this.audioIns.play(), this.stopPlayByWord()
                }
            } else this.setData({
                currentValue: 0
            })
        },
        stopPlayByWord: function() {
            this.data.isPlayingByWord && this.resetCurrent(), this.stopPlayAudio()
        },
        stopSentensePlay: function() {
            this.setData({
                isPlayingSentence: !1
            }), this.audioIns && this.audioIns.pause()
        },
        playSentenseHandler: function(e) {
            var t, n, a = e.currentTarget.dataset.source,
                i = this.data,
                r = i.isPlayingSentence,
                o = i.currSoundSource,
                c = i.item;
            i.isPlayingByWord;
            if (r && a === o && this.audioIns) return this.audioIns.pause(), void(this.isPause = !0);
            if (this.isPause && o === a && this.audioIns) return this.audioIns.play(), void(this.isPause = !1);
            (this.sentencePlayTimes = 0, this.sound = c.sound, "slow" === a) && (this.sound = c.slowSound || (null == c || null === (t = c.teaching) || void 0 === t || null === (n = t.slow) || void 0 === n ? void 0 : n.audio));
            this.setData({
                currSoundSource: a
            }, this.playSentense), s.default.sum("打卡音频播放_" + a)
        },
        playSentense: function() {
            var e = this,
                t = e.data,
                n = t.recording,
                a = t.isPlayingByWord;
            if (n) wx.showToast({
                title: "正在录音",
                icon: "error"
            });
            else {
                if (e.stopPlayAudio(), a && e.resetCurrent(), e.resetCurrent(), this.audioIns) e.audioIns.src = e.sound;
                else {
                    var i = wx.createInnerAudioContext({
                        useWebAudioImplement: !!e.useWebAudio
                    });
                    i.src = e.sound, i.onTimeUpdate((function() {
                        if (console.log("onTimeUpdate", e.isDraging), i.currentTime > -1 == !0 && i.duration > -1 == !0)
                            if (!0 !== e.isDraging) {
                                var t = Math.floor(i.currentTime / i.duration * 100),
                                    n = P(i.duration),
                                    a = P(i.currentTime);
                                e.setData({
                                    currentValue: t,
                                    fmtDuration: n,
                                    fmtCurrentTime: a
                                })
                            } else console.log("进度拖动中");
                        else console.log("currentTime:".concat(i.currentTime, ", duration:").concat(i.duration))
                    })), i.onStop((function() {
                        console.log("stop")
                    })), i.onEnded((function() {
                        console.log("播放结束"), e.setData({
                            isPlayingSentence: !1,
                            currentValue: 0
                        }), e.sentencePlayTimes += 1, e.sentencePlayTimes < e.data.sentenceRepeatCount ? e.playSentense() : e.setData({
                            isPlayingSentence: !1,
                            currentValue: 0
                        })
                    })), i.onPlay((function() {
                        console.log("play", i.duration), e.setData({
                            isPlayingSentence: !0
                        })
                    })), i.onError((function() {
                        console.log("播放失败"), e.setData({
                            isPlayingSentence: !1
                        })
                    })), i.onPause((function() {
                        console.log("暂停播放"), e.setData({
                            isPlayingSentence: !1
                        })
                    })), e.audioIns = i
                }
                e.audioIns.play()
            }
        },
        playerPlayHandler: function(e) {
            this.stopSentensePlay(), this.stopPlayByWord()
        },
        getNewAnswerCount: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, w.default)();
                        case 3:
                            n = t.sent, (a = n.data).count > 0 && e.setData({
                                feedbackCount: a.count
                            }), t.next = 10;
                            break;
                        case 8:
                            t.prev = 8, t.t0 = t.catch(0);
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 8]
                ])
            })))()
        },
        navToFeedback: function() {
            var e = this;
            wx.navigateTo({
                url: "/pages/checkin/my/index?type=2",
                success: function() {
                    e.setData({
                        feedbackCount: 0
                    })
                }
            })
        },
        getBanners: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r, o, s;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, a = "7b0aeebe-bbfd-492f-9795-d125197f27d9", t.prev = 2, t.next = 5, (0, y.default)(a);
                        case 5:
                            r = t.sent, o = r.data, 0 === r.code && null != o && null !== (s = o[a]) && void 0 !== s && s.length && n.setData({
                                notice: o[a][0].title
                            }), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(2);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 11]
                ])
            })))()
        },
        uploadFileToOSS: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, o, s, c;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            a = e.filePath, r = e.key, o = e.success, s = e.fail, c = t.postPolicy, wx.showLoading({
                                title: "正在上传..."
                            }), wx.uploadFile({
                                url: c.host,
                                filePath: a,
                                name: "file",
                                formData: {
                                    key: r,
                                    policy: c.policy,
                                    OSSAccessKeyId: c.OSSAccessKeyId,
                                    signature: c.signature,
                                    success_action_status: "200"
                                },
                                success: o,
                                fail: s,
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        getOSSPostPolicy: function() {
            var e = arguments,
                t = this;
            return r(i().mark((function n() {
                var a;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (a = e.length > 0 && void 0 !== e[0] && e[0], !t.postPolicy) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return", t.postPolicy);
                        case 3:
                            return a && wx.showLoading({
                                title: "加载中..."
                            }), n.prev = 4, n.next = 7, (0, k.default)();
                        case 7:
                            t.postPolicy = n.sent, n.next = 13;
                            break;
                        case 10:
                            n.prev = 10, n.t0 = n.catch(4), t.postPolicy = null;
                        case 13:
                            return a && wx.hideLoading(), n.abrupt("return", t.postPolicy);
                        case 15:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [4, 10]
                ])
            })))()
        },
        setMode: function() {
            this.setData({
                showModePanel: !0
            })
        },
        hideModePanel: function() {
            this.setData({
                showModePanel: !1
            })
        },
        onShow: function() {
            this.refreshDisplayPreferences()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/index/index.js'
});
require("pages/checkin/index/index.js");
$gwx0_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_4 || [];

        function gz$gwx0_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, '返回'])
                Z([a, [3, '我的打卡'],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'type']
                            ],
                            [1, 2]
                        ],
                        [1, '纠音'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([3, 'container'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'length']
                ])
                Z([3, 'cell-group'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, '_id'])
                Z([3, 'navToDetail'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([a, [3, '打卡时间：'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'date']
                    ]
                ])
                Z([3, 'title'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'newAnswer']
                ])
                Z([3, 'danger'])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z([3, 'loadMore'])
                Z([3, 'info'])
                Z([3, '暂无记录'])
                Z([3, 'navToCheckin'])
                Z([3, 'bottom-button'])
                Z(z[19])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
        var x = ['./pages/checkin/my/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_4_1()
            var o8F = _mz(z, 'van-nav-bar', ['leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftText', 2, 'title', 3], [], e, s, gg)
            _(r, o8F)
            var x7F = _v()
            _(r, x7F)
            if (_oz(z, 5, e, s, gg)) {
                x7F.wxVkey = 1
                var f9F = _n('view')
                _rz(z, f9F, 'class', 6, e, s, gg)
                var c0F = _v()
                _(f9F, c0F)
                if (_oz(z, 7, e, s, gg)) {
                    c0F.wxVkey = 1
                    var oBG = _mz(z, 'van-cell-group', ['inset', -1, 'customClass', 8], [], e, s, gg)
                    var cCG = _v()
                    _(oBG, cCG)
                    var oDG = function(aFG, lEG, tGG, gg) {
                        var bIG = _mz(z, 'van-cell', ['isLink', -1, 'bind:tap', 11, 'data-index', 1, 'label', 2], [], aFG, lEG, gg)
                        var oJG = _n('view')
                        _rz(z, oJG, 'slot', 14, aFG, lEG, gg)
                        var xKG = _v()
                        _(oJG, xKG)
                        if (_oz(z, 15, aFG, lEG, gg)) {
                            xKG.wxVkey = 1
                            var oLG = _n('van-tag')
                            _rz(z, oLG, 'type', 16, aFG, lEG, gg)
                            _(xKG, oLG)
                        }
                        xKG.wxXCkey = 1
                        xKG.wxXCkey = 3
                        _(bIG, oJG)
                        _(tGG, bIG)
                        return tGG
                    }
                    cCG.wxXCkey = 4
                    _2z(z, 9, oDG, e, s, gg, cCG, 'item', 'index', '_id')
                    _(c0F, oBG)
                    var hAG = _v()
                    _(c0F, hAG)
                    if (_oz(z, 17, e, s, gg)) {
                        hAG.wxVkey = 1
                        var fMG = _mz(z, 'van-button', ['round', -1, 'bind:tap', 18, 'type', 1], [], e, s, gg)
                        _(hAG, fMG)
                    }
                    hAG.wxXCkey = 1
                    hAG.wxXCkey = 3
                } else {
                    c0F.wxVkey = 2
                    var cNG = _n('van-empty')
                    _rz(z, cNG, 'description', 20, e, s, gg)
                    var hOG = _mz(z, 'van-button', ['round', -1, 'bind:tap', 21, 'class', 1, 'type', 2], [], e, s, gg)
                    _(cNG, hOG)
                    _(c0F, cNG)
                }
                c0F.wxXCkey = 1
                c0F.wxXCkey = 3
                c0F.wxXCkey = 3
                _(x7F, f9F)
            }
            x7F.wxXCkey = 1
            x7F.wxXCkey = 3
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_4";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/my/index.wxml'] = [$gwx0_XC_4, './pages/checkin/my/index.wxml'];
else __wxAppCode__['pages/checkin/my/index.wxml'] = $gwx0_XC_4('./pages/checkin/my/index.wxml');;
__wxRoute = "pages/checkin/my/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/my/index.js";
define("pages/checkin/my/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        t = require("../../../@babel/runtime/helpers/toConsumableArray"),
        a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        n = require("../../../@babel/runtime/helpers/defineProperty"),
        r = require("../../../commons/utils"),
        i = c(require("../../../api/getMyCheckins")),
        s = c(require("../../../api/getMyFeedbackCheckins"));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Page({
        page: 1,
        pageSize: 15,
        navBack: r.navBack,
        data: {
            show: !1,
            list: []
        },
        navToDetail: function(e) {
            var t = e.currentTarget.dataset.index,
                a = this.data.list[t],
                r = a.userCheckinId,
                i = a.uuid,
                s = a.newAnswer,
                c = "/pages/checkin/index/index?id=".concat(encodeURIComponent(i));
            2 === this.type && (c = "/pages/checkin/comment/index?id=".concat(encodeURIComponent(r)), s && (c += "&newAnswer=1"), this.setData(n({}, "list[".concat(t, "].newAnswer"), !1))), wx.navigateTo({
                url: c
            })
        },
        loadMore: function() {
            this.page += 1, this.getData()
        },
        getData: function() {
            var n = this;
            return a(e().mark((function a() {
                var c, o, u, l;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c = n, wx.showLoading({
                                    title: "加载中..."
                                }), e.prev = 2, 1 !== n.type) {
                                e.next = 9;
                                break
                            }
                            return e.next = 6, (0, i.default)(n.page, n.pageSize);
                        case 6:
                            e.t0 = e.sent, e.next = 12;
                            break;
                        case 9:
                            return e.next = 11, (0, s.default)(n.page, n.pageSize);
                        case 11:
                            e.t0 = e.sent;
                        case 12:
                            o = e.t0, u = o.code, l = o.data, 0 === u ? c.setData({
                                list: [].concat(t(c.data.list), t(l.list)),
                                hasNext: l.hasNext
                            }) : wx.showModal({
                                content: "系统出错，请稍后再试",
                                complete: r.navBack,
                                showCancel: !1
                            }), e.next = 21;
                            break;
                        case 17:
                            e.prev = 17, e.t1 = e.catch(2), console.error(e.t1), wx.showModal({
                                content: "系统出错，请稍后再试",
                                complete: r.navBack,
                                showCancel: !1
                            });
                        case 21:
                            c.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), a, null, [
                    [2, 17]
                ])
            })))()
        },
        onLoad: function(e) {
            this.type = parseInt(e.type || 1, 10), this.getData(), this.setData({
                type: this.type
            })
        },
        navToCheckin: function() {
            wx.navigateTo({
                url: "/pages/checkin/index/index"
            })
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/my/index.js'
});
require("pages/checkin/my/index.js");