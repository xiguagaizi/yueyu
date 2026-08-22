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
try {
var __globalThis = (typeof __vd_version_info__ !== 'undefined' && typeof __vd_version_info__.globalThis !== 'undefined') ? __vd_version_info__.globalThis : window;
var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __mainPageFrameReady__ = __globalThis.__mainPageFrameReady__ || function() {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};; /*v0.5vv_20211229_syb_scopedata*/
__globalThis.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
__globalThis.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
var outerGlobal = typeof __globalThis === 'undefined' ? window : __globalThis;
$gwx = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx || [];

        function gz$gwx_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
            __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-calendar'])
                Z([3, 'onClickSubtitle'])
                Z([
                    [7],
                    [3, 'firstDayOfWeek']
                ])
                Z([
                    [7],
                    [3, 'showSubtitle']
                ])
                Z([
                    [7],
                    [3, 'showTitle']
                ])
                Z([
                    [7],
                    [3, 'subtitle']
                ])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'title'])
                Z(z[7])
                Z([3, 'van-calendar__body'])
                Z([
                    [7],
                    [3, 'scrollIntoView']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'getMonths']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [
                                [7],
                                [3, 'minDate']
                            ]
                        ],
                        [
                            [7],
                            [3, 'maxDate']
                        ]
                    ]
                ])
                Z([3, 'index'])
                Z([
                    [7],
                    [3, 'allowSameDay']
                ])
                Z([3, 'onClickDay'])
                Z([3, 'month'])
                Z([
                    [7],
                    [3, 'color']
                ])
                Z([
                    [7],
                    [3, 'currentDate']
                ])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z(z[18])
                Z(z[2])
                Z([
                    [7],
                    [3, 'formatter']
                ])
                Z([a, z[15],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z([
                    [7],
                    [3, 'maxDate']
                ])
                Z([
                    [7],
                    [3, 'minDate']
                ])
                Z([
                    [7],
                    [3, 'rowHeight']
                ])
                Z([
                    [7],
                    [3, 'showMark']
                ])
                Z([
                    [2, '||'],
                    [
                        [2, '!=='],
                        [
                            [7],
                            [3, 'index']
                        ],
                        [1, 0]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'showSubtitle']
                        ]
                    ]
                ])
                Z(z[3])
                Z([
                    [7],
                    [3, 'type']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [1, 'calendar__footer']
                        ],
                        [
                            [8], 'safeAreaInsetBottom', [
                                [7],
                                [3, 'safeAreaInsetBottom']
                            ]
                        ]
                    ]
                ])
                Z([3, 'footer'])
                Z(z[30])
                Z([
                    [7],
                    [3, 'showConfirm']
                ])
                Z([3, 'onConfirm'])
                Z(z[16])
                Z([3, 'van-calendar__confirm'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'getButtonDisabled']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [7],
                                    [3, 'type']
                                ]
                            ],
                            [
                                [7],
                                [3, 'currentDate']
                            ]
                        ],
                        [
                            [7],
                            [3, 'minRange']
                        ]
                    ]
                ])
                Z([3, 'text'])
                Z([3, 'danger'])
                Z([a, [
                    [2, '?:'],
                    [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'computed']
                            ],
                            [3, 'getButtonDisabled']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [7],
                                        [3, 'type']
                                    ]
                                ],
                                [
                                    [7],
                                    [3, 'currentDate']
                                ]
                            ],
                            [
                                [7],
                                [3, 'minRange']
                            ]
                        ]
                    ],
                    [
                        [7],
                        [3, 'confirmDisabledText']
                    ],
                    [
                        [7],
                        [3, 'confirmText']
                    ]
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_1
        }

        function gz$gwx_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_2) return __WXML_GLOBAL__.ops_cached.$gwx_2
            __WXML_GLOBAL__.ops_cached.$gwx_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'adjustPosition']
                ])
                Z([
                    [7],
                    [3, 'alwaysEmbed']
                ])
                Z([
                    [7],
                    [3, 'autoFocus']
                ])
                Z([3, 'onBlur'])
                Z([3, 'onConfirm'])
                Z([3, 'onFocus'])
                Z([3, 'onInput'])
                Z([3, 'onKeyboardHeightChange'])
                Z([3, 'onClickInput'])
                Z([a, [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'utils']
                            ],
                            [3, 'bem']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [1, 'field__control']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'inputAlign']
                                        ]
                                    ],
                                    [
                                        [9],
                                        [
                                            [8], 'disabled', [
                                                [7],
                                                [3, 'disabled']
                                            ]
                                        ],
                                        [
                                            [8], 'error', [
                                                [7],
                                                [3, 'error']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [3, ' input-class']
                ])
                Z([
                    [7],
                    [3, 'confirmHold']
                ])
                Z([
                    [7],
                    [3, 'confirmType']
                ])
                Z([
                    [7],
                    [3, 'cursor']
                ])
                Z([
                    [7],
                    [3, 'cursorSpacing']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'disabled']
                    ],
                    [
                        [7],
                        [3, 'readonly']
                    ]
                ])
                Z([
                    [7],
                    [3, 'focus']
                ])
                Z([
                    [7],
                    [3, 'holdKeyboard']
                ])
                Z([
                    [7],
                    [3, 'name']
                ])
                Z([
                    [7],
                    [3, 'maxlength']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'password']
                    ],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'type']
                        ],
                        [1, 'password']
                    ]
                ])
                Z([
                    [7],
                    [3, 'placeholder']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [1, 'field__placeholder']
                        ],
                        [
                            [8], 'error', [
                                [7],
                                [3, 'error']
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'placeholderStyle']
                ])
                Z([
                    [7],
                    [3, 'selectionEnd']
                ])
                Z([
                    [7],
                    [3, 'selectionStart']
                ])
                Z([
                    [7],
                    [3, 'type']
                ])
                Z([
                    [7],
                    [3, 'innerValue']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_2
        }

        function gz$gwx_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_3) return __WXML_GLOBAL__.ops_cached.$gwx_3
            __WXML_GLOBAL__.ops_cached.$gwx_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'adjustPosition']
                ])
                Z([
                    [7],
                    [3, 'autoFocus']
                ])
                Z([
                    [2, '!'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'autosize']
                        ]
                    ]
                ])
                Z([3, 'onBlur'])
                Z([3, 'onConfirm'])
                Z([3, 'onFocus'])
                Z([3, 'onInput'])
                Z([3, 'onKeyboardHeightChange'])
                Z([3, 'onLineChange'])
                Z([3, 'onClickInput'])
                Z([a, [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'utils']
                            ],
                            [3, 'bem']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [1, 'field__control']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [5],
                                            [
                                                [7],
                                                [3, 'inputAlign']
                                            ]
                                        ],
                                        [
                                            [7],
                                            [3, 'type']
                                        ]
                                    ],
                                    [
                                        [9],
                                        [
                                            [8], 'disabled', [
                                                [7],
                                                [3, 'disabled']
                                            ]
                                        ],
                                        [
                                            [8], 'error', [
                                                [7],
                                                [3, 'error']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [3, ' input-class']
                ])
                Z([
                    [7],
                    [3, 'cursor']
                ])
                Z([
                    [7],
                    [3, 'cursorSpacing']
                ])
                Z([
                    [7],
                    [3, 'disableDefaultPadding']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'disabled']
                    ],
                    [
                        [7],
                        [3, 'readonly']
                    ]
                ])
                Z([
                    [7],
                    [3, 'fixed']
                ])
                Z([
                    [7],
                    [3, 'focus']
                ])
                Z([
                    [7],
                    [3, 'holdKeyboard']
                ])
                Z([
                    [7],
                    [3, 'name']
                ])
                Z([
                    [7],
                    [3, 'maxlength']
                ])
                Z([
                    [7],
                    [3, 'placeholder']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [
                            [5],
                            [1, 'field__placeholder']
                        ],
                        [
                            [9],
                            [
                                [8], 'error', [
                                    [7],
                                    [3, 'error']
                                ]
                            ],
                            [
                                [8], 'disabled', [
                                    [7],
                                    [3, 'disabled']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'placeholderStyle']
                ])
                Z([
                    [7],
                    [3, 'selectionEnd']
                ])
                Z([
                    [7],
                    [3, 'selectionStart']
                ])
                Z([
                    [7],
                    [3, 'showConfirmBar']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'inputStyle']
                    ],
                    [
                        [5],
                        [
                            [7],
                            [3, 'autosize']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'innerValue']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_3
        }

        function gz$gwx_4() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_4) return __WXML_GLOBAL__.ops_cached.$gwx_4
            __WXML_GLOBAL__.ops_cached.$gwx_4 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClick'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'lockScroll']
                    ],
                    [1, 'noop'],
                    [1, '']
                ])
                Z([3, 'van-overlay custom-class'])
                Z([a, [3, 'z-index: '],
                    [
                        [7],
                        [3, 'zIndex']
                    ],
                    [3, '; '],
                    [
                        [7],
                        [3, 'customStyle']
                    ]
                ])
                Z([
                    [7],
                    [3, 'duration']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_4);
            return __WXML_GLOBAL__.ops_cached.$gwx_4
        }

        function gz$gwx_5() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_5) return __WXML_GLOBAL__.ops_cached.$gwx_5
            __WXML_GLOBAL__.ops_cached.$gwx_5 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'showToolbar']
                ])
                Z([3, 'van-picker__toolbar toolbar-class'])
                Z([3, 'emit'])
                Z([3, 'van-picker__cancel'])
                Z([3, 'cancel'])
                Z([3, 'van-picker__cancel--hover'])
                Z([3, '70'])
                Z([a, [
                    [7],
                    [3, 'cancelButtonText']
                ]])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([3, 'van-picker__title van-ellipsis'])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z(z[2])
                Z([3, 'van-picker__confirm'])
                Z([3, 'confirm'])
                Z([3, 'van-picker__confirm--hover'])
                Z(z[6])
                Z([a, [
                    [7],
                    [3, 'confirmButtonText']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_5);
            return __WXML_GLOBAL__.ops_cached.$gwx_5
        }

        function gz$gwx_6() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_6) return __WXML_GLOBAL__.ops_cached.$gwx_6
            __WXML_GLOBAL__.ops_cached.$gwx_6 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'inited']
                ])
                Z([3, 'onTransitionEnd'])
                Z([a, [3, 'custom-class '],
                    [
                        [7],
                        [3, 'classes']
                    ],
                    [3, ' '],
                    [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'utils']
                            ],
                            [3, 'bem']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [1, 'popup']
                            ],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [
                                            [7],
                                            [3, 'position']
                                        ]
                                    ],
                                    [
                                        [9],
                                        [
                                            [9],
                                            [
                                                [9],
                                                [
                                                    [8], 'round', [
                                                        [7],
                                                        [3, 'round']
                                                    ]
                                                ],
                                                [
                                                    [8], 'safe', [
                                                        [7],
                                                        [3, 'safeAreaInsetBottom']
                                                    ]
                                                ]
                                            ],
                                            [
                                                [8], 'safeTop', [
                                                    [7],
                                                    [3, 'safeAreaInsetTop']
                                                ]
                                            ]
                                        ],
                                        [
                                            [8], 'safeTabBar', [
                                                [7],
                                                [3, 'safeAreaTabBar']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'computed']
                        ],
                        [3, 'popupStyle']
                    ],
                    [
                        [5],
                        [
                            [9],
                            [
                                [9],
                                [
                                    [9],
                                    [
                                        [8], 'zIndex', [
                                            [7],
                                            [3, 'zIndex']
                                        ]
                                    ],
                                    [
                                        [8], 'currentDuration', [
                                            [7],
                                            [3, 'currentDuration']
                                        ]
                                    ]
                                ],
                                [
                                    [8], 'display', [
                                        [7],
                                        [3, 'display']
                                    ]
                                ]
                            ],
                            [
                                [8], 'customStyle', [
                                    [7],
                                    [3, 'customStyle']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'closeable']
                ])
                Z([3, 'onClickCloseIcon'])
                Z([a, [3, 'close-icon-class van-popup__close-icon van-popup__close-icon--'],
                    [
                        [7],
                        [3, 'closeIconPosition']
                    ]
                ])
                Z([
                    [7],
                    [3, 'closeIcon']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_6);
            return __WXML_GLOBAL__.ops_cached.$gwx_6
        }
        __WXML_GLOBAL__.ops_set.$gwx = z;
        __WXML_GLOBAL__.ops_init.$gwx = true;
        var nv_require = function() {
            var nnm = {
                "m_./components/annotated-text-voice/index.wxml:utils": np_0,
                "m_./components/player/index.wxml:tools": np_1,
                "m_./miniprogram_npm/@vant/weapp/steps/index.wxml:status": np_34,
                "p_./miniprogram_npm/@vant/weapp/area/index.wxs": np_2,
                "p_./miniprogram_npm/@vant/weapp/button/index.wxs": np_3,
                "p_./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxs": np_4,
                "p_./miniprogram_npm/@vant/weapp/calendar/index.wxs": np_5,
                "p_./miniprogram_npm/@vant/weapp/calendar/utils.wxs": np_6,
                "p_./miniprogram_npm/@vant/weapp/cascader/index.wxs": np_7,
                "p_./miniprogram_npm/@vant/weapp/cell/index.wxs": np_8,
                "p_./miniprogram_npm/@vant/weapp/checkbox/index.wxs": np_9,
                "p_./miniprogram_npm/@vant/weapp/col/index.wxs": np_10,
                "p_./miniprogram_npm/@vant/weapp/config-provider/index.wxs": np_11,
                "p_./miniprogram_npm/@vant/weapp/divider/index.wxs": np_12,
                "p_./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs": np_13,
                "p_./miniprogram_npm/@vant/weapp/empty/index.wxs": np_14,
                "p_./miniprogram_npm/@vant/weapp/field/index.wxs": np_15,
                "p_./miniprogram_npm/@vant/weapp/grid-item/index.wxs": np_16,
                "p_./miniprogram_npm/@vant/weapp/grid/index.wxs": np_17,
                "p_./miniprogram_npm/@vant/weapp/icon/index.wxs": np_18,
                "p_./miniprogram_npm/@vant/weapp/image/index.wxs": np_19,
                "p_./miniprogram_npm/@vant/weapp/loading/index.wxs": np_20,
                "p_./miniprogram_npm/@vant/weapp/nav-bar/index.wxs": np_21,
                "p_./miniprogram_npm/@vant/weapp/notice-bar/index.wxs": np_22,
                "p_./miniprogram_npm/@vant/weapp/notify/index.wxs": np_23,
                "p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs": np_24,
                "p_./miniprogram_npm/@vant/weapp/picker/index.wxs": np_25,
                "p_./miniprogram_npm/@vant/weapp/popup/index.wxs": np_26,
                "p_./miniprogram_npm/@vant/weapp/progress/index.wxs": np_27,
                "p_./miniprogram_npm/@vant/weapp/radio/index.wxs": np_28,
                "p_./miniprogram_npm/@vant/weapp/row/index.wxs": np_29,
                "p_./miniprogram_npm/@vant/weapp/share-sheet/index.wxs": np_30,
                "p_./miniprogram_npm/@vant/weapp/share-sheet/options.wxs": np_31,
                "p_./miniprogram_npm/@vant/weapp/slider/index.wxs": np_32,
                "p_./miniprogram_npm/@vant/weapp/stepper/index.wxs": np_33,
                "p_./miniprogram_npm/@vant/weapp/sticky/index.wxs": np_35,
                "p_./miniprogram_npm/@vant/weapp/switch/index.wxs": np_36,
                "p_./miniprogram_npm/@vant/weapp/tabs/index.wxs": np_37,
                "p_./miniprogram_npm/@vant/weapp/tag/index.wxs": np_38,
                "p_./miniprogram_npm/@vant/weapp/transition/index.wxs": np_39,
                "p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs": np_40,
                "p_./miniprogram_npm/@vant/weapp/uploader/index.wxs": np_41,
                "p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs": np_42,
                "p_./miniprogram_npm/@vant/weapp/wxs/array.wxs": np_43,
                "p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs": np_44,
                "p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs": np_45,
                "p_./miniprogram_npm/@vant/weapp/wxs/object.wxs": np_46,
                "p_./miniprogram_npm/@vant/weapp/wxs/style.wxs": np_47,
                "p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs": np_48,
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
        f_['./components/annotated-text-voice/index.wxml'] = {};
        f_['./components/annotated-text-voice/index.wxml']['utils'] = nv_require("m_./components/annotated-text-voice/index.wxml:utils");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            nv_module.nv_exports = ({
                nv_isArray: (function(nv_val) {
                    return (nv_Array.nv_isArray(nv_val))
                }),
            });
            return nv_module.nv_exports;
        }

        f_['./components/player/index.wxml'] = {};
        f_['./components/player/index.wxml']['tools'] = nv_require("m_./components/player/index.wxml:tools");

        function np_1() {
            var nv_module = {
                nv_exports: {}
            };
            nv_module.nv_exports = ({
                nv_formatDuration: (function(nv_duration) {
                    nv_duration = nv_duration + '';
                    var nv_s = nv_duration.nv_length > 1 ? nv_duration : '0' + nv_duration;
                    return ('00:' + nv_s)
                }),
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/area/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/area/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/area/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/area/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/area/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/area/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/area/index.wxs");

        function np_2() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_displayColumns(nv_columns, nv_columnsNum) {
                return (nv_columns.nv_slice(0, +nv_columnsNum))
            };
            nv_module.nv_exports = ({
                nv_displayColumns: nv_displayColumns,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/button/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/button/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/button/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/button/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/button/index.wxs");

        function np_3() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_rootStyle(nv_data) {
                if (!nv_data.nv_color) {
                    return (nv_data.nv_customStyle)
                };
                var nv_properties = ({
                    nv_color: nv_data.nv_plain ? nv_data.nv_color : '#fff',
                    nv_background: nv_data.nv_plain ? null : nv_data.nv_color,
                });
                if (nv_data.nv_color.nv_indexOf('gradient') !== -1) {
                    nv_properties.nv_border = 0
                } else {
                    nv_properties[("nv_" + 'border-color')] = nv_data.nv_color
                };
                return (nv_style([nv_properties, nv_data.nv_customStyle]))
            };

            function nv_loadingColor(nv_data) {
                if (nv_data.nv_plain) {
                    return (nv_data.nv_color ? nv_data.nv_color : '#c9c9c9')
                };
                if (nv_data.nv_type === 'default') {
                    return ('#c9c9c9')
                };
                return ('#fff')
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
                nv_loadingColor: nv_loadingColor,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxml']['computed']();
        f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/calendar/components/month/index.wxs");

        function np_4() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_utils = nv_require('p_./miniprogram_npm/@vant/weapp/calendar/utils.wxs')();

            function nv_getMark(nv_date) {
                return (nv_getDate(nv_date).nv_getMonth() + 1)
            };
            var nv_ROW_HEIGHT = 64;

            function nv_getDayStyle(nv_type, nv_index, nv_date, nv_rowHeight, nv_color, nv_firstDayOfWeek) {
                var nv_style = [];
                var nv_current = nv_getDate(nv_date).nv_getDay() || 7;
                var nv_offset = nv_current < nv_firstDayOfWeek ? (7 - nv_firstDayOfWeek + nv_current) : nv_current === 7 && nv_firstDayOfWeek === 0 ? 0 : (nv_current - nv_firstDayOfWeek);
                if (nv_index === 0) {
                    nv_style.nv_push(['margin-left', (100 * nv_offset) / 7 + '%'])
                };
                if (nv_rowHeight !== nv_ROW_HEIGHT) {
                    nv_style.nv_push(['height', nv_rowHeight + 'px'])
                };
                if (nv_color) {
                    if (nv_type === 'start' || nv_type === 'end' || nv_type === 'start-end' || nv_type === 'multiple-selected' || nv_type === 'multiple-middle') {
                        nv_style.nv_push(['background', nv_color])
                    } else if (nv_type === 'middle') {
                        nv_style.nv_push(['color', nv_color])
                    }
                };
                return (nv_style.nv_map((function(nv_item) {
                    return (nv_item.nv_join(':'))
                })).nv_join(';'))
            };

            function nv_formatMonthTitle(nv_date) {
                nv_date = nv_getDate(nv_date);
                return (nv_date.nv_getFullYear() + '年' + (nv_date.nv_getMonth() + 1) + '月')
            };

            function nv_getMonthStyle(nv_visible, nv_date, nv_rowHeight) {
                if (!nv_visible) {
                    nv_date = nv_getDate(nv_date);
                    var nv_totalDay = nv_utils.nv_getMonthEndDay(nv_date.nv_getFullYear(), nv_date.nv_getMonth() + 1);
                    var nv_offset = nv_getDate(nv_date).nv_getDay();
                    var nv_padding = Math.nv_ceil((nv_totalDay + nv_offset) / 7) * nv_rowHeight;
                    return ('padding-bottom:' + nv_padding + 'px')
                }
            };
            nv_module.nv_exports = ({
                nv_getMark: nv_getMark,
                nv_getDayStyle: nv_getDayStyle,
                nv_formatMonthTitle: nv_formatMonthTitle,
                nv_getMonthStyle: nv_getMonthStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/calendar/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/calendar/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/calendar/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/calendar/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/calendar/index.wxml']['computed']();
        f_['./miniprogram_npm/@vant/weapp/calendar/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/calendar/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/calendar/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/calendar/index.wxs");

        function np_5() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_utils = nv_require('p_./miniprogram_npm/@vant/weapp/calendar/utils.wxs')();

            function nv_getMonths(nv_minDate, nv_maxDate) {
                var nv_months = [];
                var nv_cursor = nv_getDate(nv_minDate);
                nv_cursor.nv_setDate(1);
                do {
                    nv_months.nv_push(nv_cursor.nv_getTime());
                    nv_cursor.nv_setMonth(nv_cursor.nv_getMonth() + 1)
                } while (nv_utils.nv_compareMonth(nv_cursor, nv_getDate(nv_maxDate)) !== 1);;
                return (nv_months)
            };

            function nv_getButtonDisabled(nv_type, nv_currentDate, nv_minRange) {
                if (nv_currentDate == null) {
                    return (true)
                };
                if (nv_type === 'range') {
                    return (!nv_currentDate[(0)] || !nv_currentDate[(1)])
                };
                if (nv_type === 'multiple') {
                    return (nv_currentDate.nv_length < nv_minRange)
                };
                return (!nv_currentDate)
            };
            nv_module.nv_exports = ({
                nv_getMonths: nv_getMonths,
                nv_getButtonDisabled: nv_getButtonDisabled,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/calendar/utils.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/calendar/utils.wxs");

        function np_6() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_getMonthEndDay(nv_year, nv_month) {
                return (32 - nv_getDate(nv_year, nv_month - 1, 32).nv_getDate())
            };

            function nv_compareMonth(nv_date1, nv_date2) {
                nv_date1 = nv_getDate(nv_date1);
                nv_date2 = nv_getDate(nv_date2);
                var nv_year1 = nv_date1.nv_getFullYear();
                var nv_year2 = nv_date2.nv_getFullYear();
                var nv_month1 = nv_date1.nv_getMonth();
                var nv_month2 = nv_date2.nv_getMonth();
                if (nv_year1 === nv_year2) {
                    return (nv_month1 === nv_month2 ? 0 : nv_month1 > nv_month2 ? 1 : -1)
                };
                return (nv_year1 > nv_year2 ? 1 : -1)
            };
            nv_module.nv_exports = ({
                nv_getMonthEndDay: nv_getMonthEndDay,
                nv_compareMonth: nv_compareMonth,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/card/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/card/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/card/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/cascader/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/cascader/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/cascader/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/cascader/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/cascader/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/cascader/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/cascader/index.wxs");

        function np_7() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_utils = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs')();
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_isSelected(nv_tab, nv_valueKey, nv_option) {
                return (nv_tab.nv_selected && nv_tab.nv_selected[((nt_0 = (nv_valueKey), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] === nv_option[((nt_1 = (nv_valueKey), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))])
            };

            function nv_optionClass(nv_tab, nv_valueKey, nv_option) {
                return (nv_utils.nv_bem('cascader__option', ({
                    nv_selected: nv_isSelected(nv_tab, nv_valueKey, nv_option),
                    nv_disabled: nv_option.nv_disabled,
                })))
            };

            function nv_optionStyle(nv_data) {
                var nv_color = nv_data.nv_option.nv_color || (nv_isSelected(nv_data.nv_tab, nv_data.nv_valueKey, nv_data.nv_option) ? nv_data.nv_activeColor : undefined);
                return (nv_style({
                    nv_color
                }))
            };
            nv_module.nv_exports = ({
                nv_isSelected: nv_isSelected,
                nv_optionClass: nv_optionClass,
                nv_optionStyle: nv_optionStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/cell-group/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/cell-group/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/cell-group/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/cell/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/cell/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/cell/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/cell/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/cell/index.wxs");

        function np_8() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_titleStyle(nv_data) {
                return (nv_style([({
                    'nv_max-width': nv_addUnit(nv_data.nv_titleWidth),
                    'nv_min-width': nv_addUnit(nv_data.nv_titleWidth),
                }), nv_data.nv_titleStyle]))
            };
            nv_module.nv_exports = ({
                nv_titleStyle: nv_titleStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/checkbox-group/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/checkbox-group/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/checkbox-group/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/checkbox/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/checkbox/index.wxs");

        function np_9() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_iconStyle(nv_checkedColor, nv_value, nv_disabled, nv_parentDisabled, nv_iconSize) {
                var nv_styles = ({
                    'nv_font-size': nv_addUnit(nv_iconSize),
                });
                if (nv_checkedColor && nv_value && !nv_disabled && !nv_parentDisabled) {
                    nv_styles[("nv_" + 'border-color')] = nv_checkedColor;
                    nv_styles[("nv_" + 'background-color')] = nv_checkedColor
                };
                return (nv_style(nv_styles))
            };
            nv_module.nv_exports = ({
                nv_iconStyle: nv_iconStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/circle/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/circle/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/circle/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/col/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/col/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/col/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/col/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/col/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/col/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/col/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/col/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/col/index.wxs");

        function np_10() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                if (!nv_data.nv_gutter) {
                    return ('')
                };
                return (nv_style(({
                    'nv_padding-right': nv_addUnit(nv_data.nv_gutter / 2),
                    'nv_padding-left': nv_addUnit(nv_data.nv_gutter / 2),
                })))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/collapse-item/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/collapse-item/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/collapse-item/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/config-provider/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/config-provider/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/config-provider/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/config-provider/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/config-provider/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/config-provider/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/config-provider/index.wxs");

        function np_11() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_kebabCase(nv_word) {
                var nv_newWord = nv_word.nv_replace(nv_getRegExp("[A-Z]", 'g'), (function(nv_i) {
                    return ('-' + nv_i)
                })).nv_toLowerCase().nv_replace(nv_getRegExp("^-"), '');
                return (nv_newWord)
            };

            function nv_mapThemeVarsToCSSVars(nv_themeVars) {
                var nv_cssVars = ({});
                nv_object.nv_keys(nv_themeVars).nv_forEach((function(nv_key) {
                    var nv_cssVarsKey = '--' + nv_kebabCase(nv_key);
                    nv_cssVars[((nt_0 = (nv_cssVarsKey), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] = nv_themeVars[((nt_1 = (nv_key), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))]
                }));
                return (nv_style(nv_cssVars))
            };
            nv_module.nv_exports = ({
                nv_kebabCase: nv_kebabCase,
                nv_mapThemeVarsToCSSVars: nv_mapThemeVarsToCSSVars,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/divider/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/divider/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/divider/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/divider/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/divider/index.wxs");

        function np_12() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style([({
                    'nv_border-color': nv_data.nv_borderColor,
                    nv_color: nv_data.nv_textColor,
                    'nv_font-size': nv_addUnit(nv_data.nv_fontSize),
                }), nv_data.nv_customStyle]))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs");

        function np_13() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_displayTitle(nv_item) {
                if (nv_item.nv_title) {
                    return (nv_item.nv_title)
                };
                var nv_match = nv_item.nv_options.nv_filter((function(nv_option) {
                    return (nv_option.nv_value === nv_item.nv_value)
                }));
                var nv_displayTitle = nv_match.nv_length ? nv_match[(0)].nv_text : '';
                return (nv_displayTitle)
            };
            nv_module.nv_exports = ({
                nv_displayTitle: nv_displayTitle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/empty/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/empty/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/empty/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/empty/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/empty/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/empty/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/empty/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/empty/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/empty/index.wxs");

        function np_14() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_PRESETS = ['error', 'search', 'default', 'network'];

            function nv_imageUrl(nv_image) {
                if (nv_PRESETS.nv_indexOf(nv_image) !== -1) {
                    return ('https://img.yzcdn.cn/vant/empty-image-' + nv_image + '.png')
                };
                return (nv_image)
            };
            nv_module.nv_exports = ({
                nv_imageUrl: nv_imageUrl,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/field/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/field/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/field/index.wxs");

        function np_15() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_inputStyle(nv_autosize) {
                if (nv_autosize && nv_autosize.nv_constructor === 'Object') {
                    return (nv_style(({
                        'nv_min-height': nv_addUnit(nv_autosize.nv_minHeight),
                        'nv_max-height': nv_addUnit(nv_autosize.nv_maxHeight),
                    })))
                };
                return ('')
            };
            nv_module.nv_exports = ({
                nv_inputStyle: nv_inputStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/grid-item/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/grid-item/index.wxs");

        function np_16() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_wrapperStyle(nv_data) {
                var nv_width = 100 / nv_data.nv_columnNum + '%';
                return (nv_style(({
                    nv_width: nv_width,
                    'nv_padding-top': nv_data.nv_square ? nv_width : null,
                    'nv_padding-right': nv_addUnit(nv_data.nv_gutter),
                    'nv_margin-top': nv_data.nv_index >= nv_data.nv_columnNum && !nv_data.nv_square ? nv_addUnit(nv_data.nv_gutter) : null,
                })))
            };

            function nv_contentStyle(nv_data) {
                return (nv_data.nv_square ? nv_style(({
                    nv_right: nv_addUnit(nv_data.nv_gutter),
                    nv_bottom: nv_addUnit(nv_data.nv_gutter),
                    nv_height: 'auto',
                })) : '')
            };
            nv_module.nv_exports = ({
                nv_wrapperStyle: nv_wrapperStyle,
                nv_contentStyle: nv_contentStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/grid/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/grid/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/grid/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/grid/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/grid/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/grid/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/grid/index.wxs");

        function np_17() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style(({
                    'nv_padding-left': nv_addUnit(nv_data.nv_gutter),
                })))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/icon/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");

        function np_18() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_isImage(nv_name) {
                return (nv_name.nv_indexOf('/') !== -1)
            };

            function nv_rootClass(nv_data) {
                var nv_classes = ['custom-class'];
                if (nv_data.nv_classPrefix !== 'van-icon') {
                    nv_classes.nv_push('van-icon--custom')
                };
                if (nv_data.nv_classPrefix != null) {
                    nv_classes.nv_push(nv_data.nv_classPrefix)
                };
                if (nv_isImage(nv_data.nv_name)) {
                    nv_classes.nv_push('van-icon--image')
                } else if (nv_data.nv_classPrefix != null) {
                    nv_classes.nv_push(nv_data.nv_classPrefix + '-' + nv_data.nv_name)
                };
                return (nv_classes.nv_join(' '))
            };

            function nv_rootStyle(nv_data) {
                return (nv_style([({
                    nv_color: nv_data.nv_color,
                    'nv_font-size': nv_addUnit(nv_data.nv_size),
                }), nv_data.nv_customStyle]))
            };
            nv_module.nv_exports = ({
                nv_isImage: nv_isImage,
                nv_rootClass: nv_rootClass,
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/image/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/image/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/image/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/image/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/image/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/image/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/image/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/image/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/image/index.wxs");

        function np_19() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style([({
                    nv_width: nv_addUnit(nv_data.nv_width),
                    nv_height: nv_addUnit(nv_data.nv_height),
                    'nv_border-radius': nv_addUnit(nv_data.nv_radius),
                }), nv_data.nv_radius ? 'overflow: hidden' : null]))
            };
            var nv_FIT_MODE_MAP = ({
                nv_none: 'center',
                nv_fill: 'scaleToFill',
                nv_cover: 'aspectFill',
                nv_contain: 'aspectFit',
                nv_widthFix: 'widthFix',
                nv_heightFix: 'heightFix',
            });

            function nv_mode(nv_fit) {
                return (nv_FIT_MODE_MAP[((nt_0 = (nv_fit), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))])
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
                nv_mode: nv_mode,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/info/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/loading/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/loading/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/loading/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/loading/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/loading/index.wxs");

        function np_20() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_spinnerStyle(nv_data) {
                return (nv_style(({
                    nv_color: nv_data.nv_color,
                    nv_width: nv_addUnit(nv_data.nv_size),
                    nv_height: nv_addUnit(nv_data.nv_size),
                })))
            };

            function nv_textStyle(nv_data) {
                return (nv_style(({
                    'nv_font-size': nv_addUnit(nv_data.nv_textSize),
                })))
            };
            nv_module.nv_exports = ({
                nv_spinnerStyle: nv_spinnerStyle,
                nv_textStyle: nv_textStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/nav-bar/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/nav-bar/index.wxs");

        function np_21() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_barStyle(nv_data) {
                return (nv_style(({
                    'nv_z-index': nv_data.nv_zIndex,
                    'nv_padding-top': nv_data.nv_safeAreaInsetTop ? nv_data.nv_statusBarHeight + 'px' : 0,
                })))
            };
            nv_module.nv_exports = ({
                nv_barStyle: nv_barStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/notice-bar/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/notice-bar/index.wxs");

        function np_22() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style(({
                    nv_color: nv_data.nv_color,
                    'nv_background-color': nv_data.nv_backgroundColor,
                    nv_background: nv_data.nv_background,
                })))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/notify/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/notify/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/notify/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/notify/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/notify/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/notify/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/notify/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/notify/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/notify/index.wxs");

        function np_23() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style(({
                    'nv_z-index': nv_data.nv_zIndex,
                    nv_top: nv_addUnit(nv_data.nv_top),
                })))
            };

            function nv_notifyStyle(nv_data) {
                return (nv_style(({
                    nv_background: nv_data.nv_background,
                    nv_color: nv_data.nv_color,
                })))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
                nv_notifyStyle: nv_notifyStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs");

        function np_24() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_isObj(nv_x) {
                var nv_type = typeof nv_x;
                return (nv_x !== null && (nv_type === 'object' || nv_type === 'function'))
            };

            function nv_optionText(nv_option, nv_valueKey) {
                return (nv_isObj(nv_option) && nv_option[((nt_0 = (nv_valueKey), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] != null ? nv_option[((nt_1 = (nv_valueKey), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))] : nv_option)
            };

            function nv_rootStyle(nv_data) {
                return (nv_style(({
                    nv_height: nv_addUnit(nv_data.nv_itemHeight * nv_data.nv_visibleItemCount),
                })))
            };

            function nv_wrapperStyle(nv_data) {
                var nv_offset = nv_addUnit(nv_data.nv_offset + (nv_data.nv_itemHeight * (nv_data.nv_visibleItemCount - 1)) / 2);
                return (nv_style(({
                    nv_transition: 'transform ' + nv_data.nv_duration + 'ms',
                    'nv_line-height': nv_addUnit(nv_data.nv_itemHeight),
                    nv_transform: 'translate3d(0, ' + nv_offset + ', 0)',
                })))
            };
            nv_module.nv_exports = ({
                nv_optionText: nv_optionText,
                nv_rootStyle: nv_rootStyle,
                nv_wrapperStyle: nv_wrapperStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/picker/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/picker/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/picker/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/picker/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/picker/index.wxs");

        function np_25() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();
            var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();

            function nv_columnsStyle(nv_data) {
                return (nv_style(({
                    nv_height: nv_addUnit(nv_data.nv_itemHeight * nv_data.nv_visibleItemCount),
                })))
            };

            function nv_maskStyle(nv_data) {
                return (nv_style(({
                    'nv_background-size': '100% ' + nv_addUnit((nv_data.nv_itemHeight * (nv_data.nv_visibleItemCount - 1)) / 2),
                })))
            };

            function nv_frameStyle(nv_data) {
                return (nv_style(({
                    nv_height: nv_addUnit(nv_data.nv_itemHeight),
                })))
            };

            function nv_columns(nv_columns) {
                if (!nv_array.nv_isArray(nv_columns)) {
                    return ([])
                };
                if (nv_columns.nv_length && !nv_columns[(0)].nv_values) {
                    return ([({
                        nv_values: nv_columns,
                    })])
                };
                return (nv_columns)
            };
            nv_module.nv_exports = ({
                nv_columnsStyle: nv_columnsStyle,
                nv_frameStyle: nv_frameStyle,
                nv_maskStyle: nv_maskStyle,
                nv_columns: nv_columns,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/popup/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");

        function np_26() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_popupStyle(nv_data) {
                return (nv_style([({
                    'nv_z-index': nv_data.nv_zIndex,
                    'nv_-webkit-transition-duration': nv_data.nv_currentDuration + 'ms',
                    'nv_transition-duration': nv_data.nv_currentDuration + 'ms',
                }), nv_data.nv_display ? null : 'display: none', nv_data.nv_customStyle]))
            };
            nv_module.nv_exports = ({
                nv_popupStyle: nv_popupStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/progress/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/progress/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/progress/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/progress/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/progress/index.wxs");

        function np_27() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_utils = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs')();
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_pivotText(nv_pivotText, nv_percentage) {
                return (nv_pivotText || nv_percentage + '%')
            };

            function nv_rootStyle(nv_data) {
                return (nv_style(({
                    'nv_height': nv_data.nv_strokeWidth ? nv_utils.nv_addUnit(nv_data.nv_strokeWidth) : '',
                    'nv_background': nv_data.nv_trackColor,
                })))
            };

            function nv_portionStyle(nv_data) {
                return (nv_style(({
                    nv_background: nv_data.nv_inactive ? '#cacaca' : nv_data.nv_color,
                    nv_width: nv_data.nv_percentage ? nv_data.nv_percentage + '%' : '',
                })))
            };

            function nv_pivotStyle(nv_data) {
                return (nv_style(({
                    nv_color: nv_data.nv_textColor,
                    nv_right: nv_data.nv_right + 'px',
                    nv_background: nv_data.nv_pivotColor ? nv_data.nv_pivotColor : nv_data.nv_inactive ? '#cacaca' : nv_data.nv_color,
                })))
            };
            nv_module.nv_exports = ({
                nv_pivotText: nv_pivotText,
                nv_rootStyle: nv_rootStyle,
                nv_portionStyle: nv_portionStyle,
                nv_pivotStyle: nv_pivotStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/radio-group/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/radio-group/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/radio-group/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/radio/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/radio/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/radio/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/radio/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/radio/index.wxs");

        function np_28() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_iconStyle(nv_data) {
                var nv_styles = ({
                    'nv_font-size': nv_addUnit(nv_data.nv_iconSize),
                });
                if (nv_data.nv_checkedColor && !(nv_data.nv_disabled || nv_data.nv_parentDisabled) && nv_data.nv_value === nv_data.nv_name) {
                    nv_styles[("nv_" + 'border-color')] = nv_data.nv_checkedColor;
                    nv_styles[("nv_" + 'background-color')] = nv_data.nv_checkedColor
                };
                return (nv_style(nv_styles))
            };

            function nv_iconCustomStyle(nv_data) {
                return (nv_style(({
                    'nv_line-height': nv_addUnit(nv_data.nv_iconSize),
                    'nv_font-size': '.8em',
                    nv_display: 'block',
                })))
            };
            nv_module.nv_exports = ({
                nv_iconStyle: nv_iconStyle,
                nv_iconCustomStyle: nv_iconCustomStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/rate/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']['style'] = f_['./miniprogram_npm/@vant/weapp/wxs/style.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/style.wxs");
        f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']['style']();

        f_['./miniprogram_npm/@vant/weapp/row/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/row/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/row/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/row/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/row/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/row/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/row/index.wxs");

        function np_29() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                if (!nv_data.nv_gutter) {
                    return ('')
                };
                return (nv_style(({
                    'nv_margin-right': nv_addUnit(-nv_data.nv_gutter / 2),
                    'nv_margin-left': nv_addUnit(-nv_data.nv_gutter / 2),
                })))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/search/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/share-sheet/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/share-sheet/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/share-sheet/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/share-sheet/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/share-sheet/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/share-sheet/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/share-sheet/index.wxs");

        function np_30() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_isMulti(nv_options) {
                if (nv_options == null || nv_options[(0)] == null) {
                    return (false)
                };
                return ("Array" === nv_options.nv_constructor && "Array" === nv_options[(0)].nv_constructor)
            };
            nv_module.nv_exports = ({
                nv_isMulti: nv_isMulti,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/share-sheet/options.wxs");
        f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/share-sheet/options.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/share-sheet/options.wxs");

        function np_31() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];

            function nv_getIconURL(nv_icon) {
                if (nv_PRESET_ICONS.nv_indexOf(nv_icon) !== -1) {
                    return ('https://img.yzcdn.cn/vant/share-sheet-' + nv_icon + '.png')
                };
                return (nv_icon)
            };
            nv_module.nv_exports = ({
                nv_getIconURL: nv_getIconURL,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/skeleton/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/skeleton/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/skeleton/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/slider/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']['style'] = f_['./miniprogram_npm/@vant/weapp/wxs/style.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/style.wxs");
        f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']['style']();

        f_['./miniprogram_npm/@vant/weapp/slider/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/slider/index.wxs");

        function np_32() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_barStyle(nv_barHeight, nv_activeColor) {
                return (nv_style(({
                    nv_height: nv_addUnit(nv_barHeight),
                    nv_background: nv_activeColor,
                })))
            };
            nv_module.nv_exports = ({
                nv_barStyle: nv_barStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/stepper/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/stepper/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/stepper/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/stepper/index.wxs");

        function np_33() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_buttonStyle(nv_data) {
                return (nv_style(({
                    nv_width: nv_addUnit(nv_data.nv_buttonSize),
                    nv_height: nv_addUnit(nv_data.nv_buttonSize),
                })))
            };

            function nv_inputStyle(nv_data) {
                return (nv_style(({
                    nv_width: nv_addUnit(nv_data.nv_inputWidth),
                    nv_height: nv_addUnit(nv_data.nv_buttonSize),
                })))
            };
            nv_module.nv_exports = ({
                nv_buttonStyle: nv_buttonStyle,
                nv_inputStyle: nv_inputStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/steps/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']['status'] = nv_require("m_./miniprogram_npm/@vant/weapp/steps/index.wxml:status");

        function np_34() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_get(nv_index, nv_active) {
                if (nv_index < nv_active) {
                    return ('finish')
                } else if (nv_index === nv_active) {
                    return ('process')
                };
                return ('inactive')
            };
            nv_module.nv_exports = nv_get;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/sticky/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/sticky/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/sticky/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/sticky/index.wxs");

        function np_35() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_wrapStyle(nv_data) {
                return (nv_style(({
                    nv_transform: nv_data.nv_transform ? 'translate3d(0, ' + nv_data.nv_transform + 'px, 0)' : '',
                    nv_top: nv_data.nv_fixed ? nv_addUnit(nv_data.nv_offsetTop) : '',
                    'nv_z-index': nv_data.nv_zIndex,
                })))
            };

            function nv_containerStyle(nv_data) {
                return (nv_style(({
                    nv_height: nv_data.nv_fixed ? nv_addUnit(nv_data.nv_height) : '',
                    'nv_z-index': nv_data.nv_zIndex,
                })))
            };
            nv_module.nv_exports = ({
                nv_wrapStyle: nv_wrapStyle,
                nv_containerStyle: nv_containerStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/switch/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/switch/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/switch/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/switch/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/switch/index.wxs");

        function np_36() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_rootStyle(nv_data) {
                var nv_currentColor = nv_data.nv_checked === nv_data.nv_activeValue ? nv_data.nv_activeColor : nv_data.nv_inactiveColor;
                return (nv_style(({
                    'nv_font-size': nv_addUnit(nv_data.nv_size),
                    'nv_background-color': nv_currentColor,
                })))
            };
            var nv_BLUE = '#1989fa';
            var nv_GRAY_DARK = '#969799';

            function nv_loadingColor(nv_data) {
                return (nv_data.nv_checked === nv_data.nv_activeValue ? nv_data.nv_activeColor || nv_BLUE : nv_data.nv_inactiveColor || nv_GRAY_DARK)
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
                nv_loadingColor: nv_loadingColor,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/tab/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/tab/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/tab/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/tabbar/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/tabbar/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/tabbar/index.wxml']['utils']();

        f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/tabs/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tabs/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/tabs/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tabs/index.wxs");

        function np_37() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_utils = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs')();
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_tabClass(nv_active, nv_ellipsis) {
                var nv_classes = ['tab-class'];
                if (nv_active) {
                    nv_classes.nv_push('tab-active-class')
                };
                if (nv_ellipsis) {
                    nv_classes.nv_push('van-ellipsis')
                };
                return (nv_classes.nv_join(' '))
            };

            function nv_tabStyle(nv_data) {
                var nv_titleColor = nv_data.nv_active ? nv_data.nv_titleActiveColor : nv_data.nv_titleInactiveColor;
                var nv_ellipsis = nv_data.nv_scrollable && nv_data.nv_ellipsis;
                if (nv_data.nv_type === 'card') {
                    return (nv_style(({
                        'nv_border-color': nv_data.nv_color,
                        'nv_background-color': !nv_data.nv_disabled && nv_data.nv_active ? nv_data.nv_color : null,
                        nv_color: nv_titleColor || (!nv_data.nv_disabled && !nv_data.nv_active ? nv_data.nv_color : null),
                        'nv_flex-basis': nv_ellipsis ? 88 / nv_data.nv_swipeThreshold + '%' : null,
                    })))
                };
                return (nv_style(({
                    nv_color: nv_titleColor,
                    'nv_flex-basis': nv_ellipsis ? 88 / nv_data.nv_swipeThreshold + '%' : null,
                })))
            };

            function nv_navStyle(nv_color, nv_type) {
                return (nv_style(({
                    'nv_border-color': nv_type === 'card' && nv_color ? nv_color : null,
                })))
            };

            function nv_trackStyle(nv_data) {
                if (!nv_data.nv_animated) {
                    return ('')
                };
                return (nv_style(({
                    nv_left: -100 * nv_data.nv_currentIndex + '%',
                    'nv_transition-duration': nv_data.nv_duration + 's',
                    'nv_-webkit-transition-duration': nv_data.nv_duration + 's',
                })))
            };

            function nv_lineStyle(nv_data) {
                return (nv_style(({
                    nv_width: nv_utils.nv_addUnit(nv_data.nv_lineWidth),
                    nv_opacity: nv_data.nv_inited ? 1 : 0,
                    nv_transform: 'translateX(' + nv_data.nv_lineOffsetLeft + 'px)',
                    'nv_-webkit-transform': 'translateX(' + nv_data.nv_lineOffsetLeft + 'px)',
                    'nv_background-color': nv_data.nv_color,
                    nv_height: nv_data.nv_lineHeight !== -1 ? nv_utils.nv_addUnit(nv_data.nv_lineHeight) : null,
                    'nv_border-radius': nv_data.nv_lineHeight !== -1 ? nv_utils.nv_addUnit(nv_data.nv_lineHeight) : null,
                    'nv_transition-duration': !nv_data.nv_skipTransition ? nv_data.nv_duration + 's' : null,
                    'nv_-webkit-transition-duration': !nv_data.nv_skipTransition ? nv_data.nv_duration + 's' : null,
                })))
            };
            nv_module.nv_exports = ({
                nv_tabClass: nv_tabClass,
                nv_tabStyle: nv_tabStyle,
                nv_trackStyle: nv_trackStyle,
                nv_lineStyle: nv_lineStyle,
                nv_navStyle: nv_navStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/tag/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/tag/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tag/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/tag/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tag/index.wxs");

        function np_38() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style(({
                    'nv_background-color': nv_data.nv_plain ? '' : nv_data.nv_color,
                    nv_color: nv_data.nv_textColor || nv_data.nv_plain ? nv_data.nv_textColor || nv_data.nv_color : '',
                })))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/transition/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");

        function np_39() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();

            function nv_rootStyle(nv_data) {
                return (nv_style([({
                    'nv_-webkit-transition-duration': nv_data.nv_currentDuration + 'ms',
                    'nv_transition-duration': nv_data.nv_currentDuration + 'ms',
                }), nv_data.nv_display ? null : 'display: none', nv_data.nv_customStyle]))
            };
            nv_module.nv_exports = ({
                nv_rootStyle: nv_rootStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs'] = f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs']();

        f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");

        function np_40() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();

            function nv_isActive(nv_activeList, nv_itemId) {
                if (nv_array.nv_isArray(nv_activeList)) {
                    return (nv_activeList.nv_indexOf(nv_itemId) > -1)
                };
                return (nv_activeList === nv_itemId)
            };
            nv_module.nv_exports.nv_isActive = nv_isActive;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml'] = {};
        f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']['utils'] = f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
        f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']['utils']();
        f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']['computed'] = f_['./miniprogram_npm/@vant/weapp/uploader/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/uploader/index.wxs");
        f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']['computed']();

        f_['./miniprogram_npm/@vant/weapp/uploader/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/uploader/index.wxs");

        function np_41() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();

            function nv_sizeStyle(nv_data) {
                return ("Array" === nv_data.nv_previewSize.nv_constructor ? nv_style(({
                    nv_width: nv_addUnit(nv_data.nv_previewSize[(0)]),
                    nv_height: nv_addUnit(nv_data.nv_previewSize[(1)]),
                })) : nv_style(({
                    nv_width: nv_addUnit(nv_data.nv_previewSize),
                    nv_height: nv_addUnit(nv_data.nv_previewSize),
                })))
            };
            nv_module.nv_exports = ({
                nv_sizeStyle: nv_sizeStyle,
            });
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs");

        function np_42() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_REGEXP = nv_getRegExp('^-?\x5cd+(\x5c.\x5cd+)?$');

            function nv_addUnit(nv_value) {
                if (nv_value == null) {
                    return (undefined)
                };
                return (nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px' : nv_value)
            };
            nv_module.nv_exports = nv_addUnit;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/array.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/array.wxs");

        function np_43() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_isArray(nv_array) {
                return (nv_array && nv_array.nv_constructor === 'Array')
            };
            nv_module.nv_exports.nv_isArray = nv_isArray;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/bem.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs");

        function np_44() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();
            var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();
            var nv_PREFIX = 'van-';

            function nv_join(nv_name, nv_mods) {
                nv_name = nv_PREFIX + nv_name;
                nv_mods = nv_mods.nv_map((function(nv_mod) {
                    return (nv_name + '--' + nv_mod)
                }));
                nv_mods.nv_unshift(nv_name);
                return (nv_mods.nv_join(' '))
            };

            function nv_traversing(nv_mods, nv_conf) {
                if (!nv_conf) {
                    return
                };
                if (typeof nv_conf === 'string' || typeof nv_conf === 'number') {
                    nv_mods.nv_push(nv_conf)
                } else if (nv_array.nv_isArray(nv_conf)) {
                    nv_conf.nv_forEach((function(nv_item) {
                        nv_traversing(nv_mods, nv_item)
                    }))
                } else if (typeof nv_conf === 'object') {
                    nv_object.nv_keys(nv_conf).nv_forEach((function(nv_key) {
                        nv_conf[((nt_0 = (nv_key), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] && nv_mods.nv_push(nv_key)
                    }))
                }
            };

            function nv_bem(nv_name, nv_conf) {
                var nv_mods = [];
                nv_traversing(nv_mods, nv_conf);
                return (nv_join(nv_name, nv_mods))
            };
            nv_module.nv_exports = nv_bem;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/memoize.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs");

        function np_45() {
            var nv_module = {
                nv_exports: {}
            };

            function nv_isPrimitive(nv_value) {
                var nv_type = typeof nv_value;
                return ((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))
            };

            function nv_call(nv_fn, nv_args) {
                if (nv_args.nv_length === 2) {
                    return (nv_fn(nv_args[(0)], nv_args[(1)]))
                };
                if (nv_args.nv_length === 1) {
                    return (nv_fn(nv_args[(0)]))
                };
                return (nv_fn())
            };

            function nv_serializer(nv_args) {
                if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])) {
                    return (nv_args[(0)])
                };
                var nv_obj = ({});
                for (var nv_i = 0; nv_i < nv_args.nv_length; nv_i++) {
                    nv_obj[((nt_5 = ('key' + nv_i), null == nt_5 ? undefined : 'number' === typeof nt_5 ? nt_5 : "nv_" + nt_5))] = nv_args[((nt_6 = (nv_i), null == nt_6 ? undefined : 'number' === typeof nt_6 ? nt_6 : "nv_" + nt_6))]
                };
                return (nv_JSON.nv_stringify(nv_obj))
            };

            function nv_memoize(nv_fn) {
                arguments.nv_length = arguments.length;
                var nv_cache = ({});
                return ((function() {
                    arguments.nv_length = arguments.length;
                    var nv_key = nv_serializer(arguments);
                    if (nv_cache[((nt_7 = (nv_key), null == nt_7 ? undefined : 'number' === typeof nt_7 ? nt_7 : "nv_" + nt_7))] === undefined) {
                        nv_cache[((nt_8 = (nv_key), null == nt_8 ? undefined : 'number' === typeof nt_8 ? nt_8 : "nv_" + nt_8))] = nv_call(nv_fn, arguments)
                    };
                    return (nv_cache[((nt_9 = (nv_key), null == nt_9 ? undefined : 'number' === typeof nt_9 ? nt_9 : "nv_" + nt_9))])
                }))
            };
            nv_module.nv_exports = nv_memoize;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/object.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/object.wxs");

        function np_46() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_REGEXP = nv_getRegExp('{|}|\x22', 'g');

            function nv_keys(nv_obj) {
                return (nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP, '').nv_split(',').nv_map((function(nv_item) {
                    return (nv_item.nv_split(':')[(0)])
                })))
            };
            nv_module.nv_exports.nv_keys = nv_keys;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/style.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/style.wxs");

        function np_47() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();
            var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();

            function nv_kebabCase(nv_word) {
                var nv_newWord = nv_word.nv_replace(nv_getRegExp("[A-Z]", 'g'), (function(nv_i) {
                    return ('-' + nv_i)
                })).nv_toLowerCase();
                return (nv_newWord)
            };

            function nv_style(nv_styles) {
                if (nv_array.nv_isArray(nv_styles)) {
                    return (nv_styles.nv_filter((function(nv_item) {
                        return (nv_item != null && nv_item !== '')
                    })).nv_map((function(nv_item) {
                        return (nv_style(nv_item))
                    })).nv_join(';'))
                };
                if ('Object' === nv_styles.nv_constructor) {
                    return (nv_object.nv_keys(nv_styles).nv_filter((function(nv_key) {
                        return (nv_styles[((nt_0 = (nv_key), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))] != null && nv_styles[((nt_1 = (nv_key), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))] !== '')
                    })).nv_map((function(nv_key) {
                        return ([nv_kebabCase(nv_key), [nv_styles[((nt_2 = (nv_key), null == nt_2 ? undefined : 'number' === typeof nt_2 ? nt_2 : "nv_" + nt_2))]]].nv_join(':'))
                    })).nv_join(';'))
                };
                return (nv_styles)
            };
            nv_module.nv_exports = nv_style;
            return nv_module.nv_exports;
        }

        f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");

        function np_48() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_bem = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs')();
            var nv_memoize = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs')();
            var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();
            nv_module.nv_exports = ({
                nv_bem: nv_memoize(nv_bem),
                nv_memoize: nv_memoize,
                nv_addUnit: nv_addUnit,
            });
            return nv_module.nv_exports;
        }

        var x = ['./miniprogram_npm/@vant/weapp/calendar/calendar.wxml', './miniprogram_npm/@vant/weapp/field/input.wxml', './miniprogram_npm/@vant/weapp/field/textarea.wxml', './miniprogram_npm/@vant/weapp/overlay/overlay.wxml', './miniprogram_npm/@vant/weapp/picker/toolbar.wxml', './miniprogram_npm/@vant/weapp/popup/popup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_1()
            var oB = _n('view')
            _rz(z, oB, 'class', 0, e, s, gg)
            var xC = _mz(z, 'header', ['bind:click-subtitle', 1, 'firstDayOfWeek', 1, 'showSubtitle', 2, 'showTitle', 3, 'subtitle', 4, 'title', 5], [], e, s, gg)
            var oD = _mz(z, 'slot', ['name', 7, 'slot', 1], [], e, s, gg)
            _(xC, oD)
            _(oB, xC)
            var fE = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 9, 'scrollIntoView', 1], [], e, s, gg)
            var cF = _v()
            _(fE, cF)
            var hG = function(cI, oH, oJ, gg) {
                var aL = _mz(z, 'month', ['allowSameDay', 13, 'bind:click', 1, 'class', 2, 'color', 3, 'currentDate', 4, 'data-date', 5, 'date', 6, 'firstDayOfWeek', 7, 'formatter', 8, 'id', 9, 'maxDate', 10, 'minDate', 11, 'rowHeight', 12, 'showMark', 13, 'showMonthTitle', 14, 'showSubtitle', 15, 'type', 16], [], cI, oH, gg)
                _(oJ, aL)
                return oJ
            }
            cF.wxXCkey = 4
            _2z(z, 11, hG, e, s, gg, cF, 'item', 'index', 'index')
            _(oB, fE)
            var tM = _n('view')
            _rz(z, tM, 'class', 30, e, s, gg)
            var eN = _n('slot')
            _rz(z, eN, 'name', 31, e, s, gg)
            _(tM, eN)
            _(oB, tM)
            var bO = _n('view')
            _rz(z, bO, 'class', 32, e, s, gg)
            var oP = _v()
            _(bO, oP)
            if (_oz(z, 33, e, s, gg)) {
                oP.wxVkey = 1
                var xQ = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:click', 34, 'color', 1, 'customClass', 2, 'disabled', 3, 'nativeType', 4, 'type', 5], [], e, s, gg)
                var oR = _oz(z, 40, e, s, gg)
                _(xQ, oR)
                _(oP, xQ)
            }
            oP.wxXCkey = 1
            oP.wxXCkey = 3
            _(oB, bO)
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
            var z = gz$gwx_2()
            var cT = _mz(z, 'input', ['adjustPosition', 0, 'alwaysEmbed', 1, 'autoFocus', 1, 'bindblur', 2, 'bindconfirm', 3, 'bindfocus', 4, 'bindinput', 5, 'bindkeyboardheightchange', 6, 'bindtap', 7, 'class', 8, 'confirmHold', 9, 'confirmType', 10, 'cursor', 11, 'cursorSpacing', 12, 'disabled', 13, 'focus', 14, 'holdKeyboard', 15, 'id', 16, 'maxlength', 17, 'password', 18, 'placeholder', 19, 'placeholderClass', 20, 'placeholderStyle', 21, 'selectionEnd', 22, 'selectionStart', 23, 'type', 24, 'value', 25], [], e, s, gg)
            _(r, cT)
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
            var z = gz$gwx_3()
            var oV = _mz(z, 'textarea', ['adjustPosition', 0, 'autoFocus', 1, 'autoHeight', 1, 'bindblur', 2, 'bindconfirm', 3, 'bindfocus', 4, 'bindinput', 5, 'bindkeyboardheightchange', 6, 'bindlinechange', 7, 'bindtap', 8, 'class', 9, 'cursor', 10, 'cursorSpacing', 11, 'disableDefaultPadding', 12, 'disabled', 13, 'fixed', 14, 'focus', 15, 'holdKeyboard', 16, 'id', 17, 'maxlength', 18, 'placeholder', 19, 'placeholderClass', 20, 'placeholderStyle', 21, 'selectionEnd', 22, 'selectionStart', 23, 'showConfirmBar', 24, 'style', 25, 'value', 26], [], e, s, gg)
            _(r, oV)
            return r
        }
        e_[x[2]] = {
            f: m2,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[3]] = {}
        var m3 = function(e, s, r, gg) {
            var z = gz$gwx_4()
            var oX = _mz(z, 'van-transition', ['bind:tap', 0, 'catch:touchmove', 1, 'customClass', 1, 'customStyle', 2, 'duration', 3, 'show', 4], [], e, s, gg)
            var lY = _n('slot')
            _(oX, lY)
            _(r, oX)
            return r
        }
        e_[x[3]] = {
            f: m3,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[4]] = {}
        var m4 = function(e, s, r, gg) {
            var z = gz$gwx_5()
            var t1 = _v()
            _(r, t1)
            if (_oz(z, 0, e, s, gg)) {
                t1.wxVkey = 1
                var e2 = _n('view')
                _rz(z, e2, 'class', 1, e, s, gg)
                var o4 = _mz(z, 'view', ['bindtap', 2, 'class', 1, 'data-type', 2, 'hoverClass', 3, 'hoverStayTime', 4], [], e, s, gg)
                var x5 = _oz(z, 7, e, s, gg)
                _(o4, x5)
                _(e2, o4)
                var b3 = _v()
                _(e2, b3)
                if (_oz(z, 8, e, s, gg)) {
                    b3.wxVkey = 1
                    var o6 = _n('view')
                    _rz(z, o6, 'class', 9, e, s, gg)
                    var f7 = _oz(z, 10, e, s, gg)
                    _(o6, f7)
                    _(b3, o6)
                }
                var c8 = _mz(z, 'view', ['bindtap', 11, 'class', 1, 'data-type', 2, 'hoverClass', 3, 'hoverStayTime', 4], [], e, s, gg)
                var h9 = _oz(z, 16, e, s, gg)
                _(c8, h9)
                _(e2, c8)
                b3.wxXCkey = 1
                _(t1, e2)
            }
            t1.wxXCkey = 1
            return r
        }
        e_[x[4]] = {
            f: m4,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[5]] = {}
        var m5 = function(e, s, r, gg) {
            var z = gz$gwx_6()
            var cAB = _v()
            _(r, cAB)
            if (_oz(z, 0, e, s, gg)) {
                cAB.wxVkey = 1
                var oBB = _mz(z, 'view', ['bind:transitionend', 1, 'class', 1, 'style', 2], [], e, s, gg)
                var aDB = _n('slot')
                _(oBB, aDB)
                var lCB = _v()
                _(oBB, lCB)
                if (_oz(z, 4, e, s, gg)) {
                    lCB.wxVkey = 1
                    var tEB = _mz(z, 'van-icon', ['bind:tap', 5, 'class', 1, 'name', 2], [], e, s, gg)
                    _(lCB, tEB)
                }
                lCB.wxXCkey = 1
                lCB.wxXCkey = 3
                _(cAB, oBB)
            }
            cAB.wxXCkey = 1
            cAB.wxXCkey = 3
            return r
        }
        e_[x[5]] = {
            f: m5,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || true) $gwx();
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/calendar/calendar.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/calendar/calendar.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/calendar/calendar.wxml'] = $gwx('./miniprogram_npm/@vant/weapp/calendar/calendar.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/input.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxml'] = $gwx('./miniprogram_npm/@vant/weapp/field/input.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/textarea.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxml'] = $gwx('./miniprogram_npm/@vant/weapp/field/textarea.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/overlay/overlay.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxml'] = $gwx('./miniprogram_npm/@vant/weapp/overlay/overlay.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/picker/toolbar.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/picker/toolbar.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/picker/toolbar.wxml'] = $gwx('./miniprogram_npm/@vant/weapp/picker/toolbar.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/popup/popup.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxml'] = $gwx('./miniprogram_npm/@vant/weapp/popup/popup.wxml');;
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = navigator.userAgent.match("iPhone");
    var deviceWidth = window.screen.width || 375;
    var deviceDPR = window.devicePixelRatio || 2;
    var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
        var newDeviceWidth = window.screen.width || 375
        var newDeviceDPR = window.devicePixelRatio || 2
        var newDeviceHeight = window.screen.height || 375
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth
            deviceDPR = newDeviceDPR
        }
    }
    checkDeviceWidth()
    var eps = 1e-4;
    var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
        if (number === 0) return 0;
        number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    }
    window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
    var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {}
    if (!__COMMON_STYLESHEETS__.hasOwnProperty('./miniprogram_npm/@vant/weapp/common/index.wxss')) __COMMON_STYLESHEETS__['./miniprogram_npm/@vant/weapp/common/index.wxss'] = [".", [1], "van-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "van-multi-ellipsis--l2{-webkit-line-clamp:2}\n.", [1], "van-multi-ellipsis--l2,.", [1], "van-multi-ellipsis--l3{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}\n.", [1], "van-multi-ellipsis--l3{-webkit-line-clamp:3}\n.", [1], "van-clearfix:after{clear:both;content:\x22\x22;display:table}\n.", [1], "van-hairline,.", [1], "van-hairline--bottom,.", [1], "van-hairline--left,.", [1], "van-hairline--right,.", [1], "van-hairline--surround,.", [1], "van-hairline--top,.", [1], "van-hairline--top-bottom{position:relative}\n.", [1], "van-hairline--bottom:after,.", [1], "van-hairline--left:after,.", [1], "van-hairline--right:after,.", [1], "van-hairline--surround:after,.", [1], "van-hairline--top-bottom:after,.", [1], "van-hairline--top:after,.", [1], "van-hairline:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:\x22 \x22;left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}\n.", [1], "van-hairline--top:after{border-top-width:1px}\n.", [1], "van-hairline--left:after{border-left-width:1px}\n.", [1], "van-hairline--right:after{border-right-width:1px}\n.", [1], "van-hairline--bottom:after{border-bottom-width:1px}\n.", [1], "van-hairline--top-bottom:after{border-width:1px 0}\n.", [1], "van-hairline--surround:after{border-width:1px}\n", ];
    var setCssToHead = function(file, _xcInvalid, info) {
        var Ca = {};
        var css_id;
        var info = info || {};
        var _C = __COMMON_STYLESHEETS__

        function makeup(file, opt) {
            var _n = typeof(file) === "string";
            if (_n && Ca.hasOwnProperty(file)) return "";
            if (_n) Ca[file] = 1;
            var ex = _n ? _C[file] : file;
            var res = "";
            for (var i = ex.length - 1; i >= 0; i--) {
                var content = ex[i];
                if (typeof(content) === "object") {
                    var op = content[0];
                    if (op == 0)
                        res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
                    else if (op == 1)
                        res = opt.suffix + res;
                    else if (op == 2)
                        res = makeup(content[1], opt) + res;
                } else
                    res = content + res
            }
            return res;
        }
        var styleSheetManager = window.__styleSheetManager2__
        var rewritor = function(suffix, opt, style) {
            opt = opt || {};
            suffix = suffix || "";
            opt.suffix = suffix;
            if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
                if (opt.allowIllegalSelector)
                    console.warn("For developer:" + _xcInvalid);
                else {
                    console.error(_xcInvalid);
                }
            }
            Ca = {};
            css = makeup(file, opt);
            if (styleSheetManager) {
                var key = (info.path || Math.random()) + ':' + suffix
                if (!style) {
                    styleSheetManager.addItem(key, info.path);
                    window.__rpxRecalculatingFuncs__.push(function(size) {
                        opt.deviceWidth = size.width;
                        rewritor(suffix, opt, true);
                    });
                }
                styleSheetManager.setCss(key, css);
                return;
            }
            if (!style) {
                var head = document.head || document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute("wxss:path", info.path);
                head.appendChild(style);
                window.__rpxRecalculatingFuncs__.push(function(size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, style);
                });
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                if (style.childNodes.length == 0)
                    style.appendChild(document.createTextNode(css));
                else
                    style.childNodes[0].nodeValue = css;
            }
        }
        return rewritor;
    }
    setCssToHead(["[is\x3d\x22miniprogram_npm/@vant/weapp/goods-action-button/index\x22]{-webkit-flex:1;flex:1}\n[is\x3d\x22miniprogram_npm/@vant/weapp/icon/index\x22]{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex;-webkit-justify-content:center;justify-content:center}\n[is\x3d\x22miniprogram_npm/@vant/weapp/loading/index\x22]{font-size:0;line-height:1}\n[is\x3d\x22miniprogram_npm/@vant/weapp/tab/index\x22]{box-sizing:border-box;-webkit-flex-shrink:0;flex-shrink:0;width:100%}\n[is\x3d\x22miniprogram_npm/@vant/weapp/tabbar-item/index\x22]{-webkit-flex:1;flex:1}\n", ])();
    setCssToHead(["body{height:100vh}\n.", [1], "container{box-sizing:border-box;height:100%;overflow:scroll}\nwx-button{background:initial}\nwx-button:focus{outline:0}\nwx-button::after{border:none}\nbody{background:#f6f6f6;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "custom-nav{--nav-bar-text-color:#7c6354;--nav-bar-icon-color:#7c6354;--nav-bar-background-color:transparent}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:155)", {
        path: "./app.wxss"
    })();;
    __wxAppCode__['miniprogram_npm/@vant/weapp/calendar/calendar.wxss'] = setCssToHead([], undefined, {
        path: "./miniprogram_npm/@vant/weapp/calendar/calendar.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/field/input.wxss'] = setCssToHead([], undefined, {
        path: "./miniprogram_npm/@vant/weapp/field/input.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/field/textarea.wxss'] = setCssToHead([], undefined, {
        path: "./miniprogram_npm/@vant/weapp/field/textarea.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/overlay.wxss'] = setCssToHead([], undefined, {
        path: "./miniprogram_npm/@vant/weapp/overlay/overlay.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/picker/toolbar.wxss'] = setCssToHead([], undefined, {
        path: "./miniprogram_npm/@vant/weapp/picker/toolbar.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/popup/popup.wxss'] = setCssToHead([], undefined, {
        path: "./miniprogram_npm/@vant/weapp/popup/popup.wxss"
    });;
}
var __pageFrameEndTime__ = Date.now();
__mainPageFrameReady__();
} catch (e) {}
try {
$gwx_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];

        function gz$gwx_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'container'])
                Z([a, [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'marginTop']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'margin-top:'],
                                [
                                    [7],
                                    [3, 'marginTop']
                                ]
                            ],
                            [1, ';']
                        ],
                        [1, '']
                    ],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'loaded']
                            ],
                            [
                                [7],
                                [3, 'marginBottom']
                            ]
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'margin-bottom:'],
                                [
                                    [7],
                                    [3, 'marginBottom']
                                ]
                            ],
                            [1, ';']
                        ],
                        [1, '']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'notice']
                        ],
                        [3, 'title']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'notice']
                        ],
                        [3, 'path']
                    ]
                ])
                Z([3, 'nav'])
                Z([3, 'vip-guide'])
                Z([3, 'text'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'title']
                ]])
                Z([3, 'guide-o'])
                Z([
                    [7],
                    [3, 'unitId']
                ])
                Z([
                    [7],
                    [3, 'adIntervals']
                ])
                Z([3, 'errorHandler'])
                Z([3, 'loadHandler'])
                Z(z[8])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
        }

        function gz$gwx_XC_0_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'container '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'groupName']
                        ],
                        [
                            [2, '+'],
                            [1, 'group-'],
                            [
                                [7],
                                [3, 'size']
                            ]
                        ],
                        [1, '']
                    ]
                ])
                Z([a, [3, 'background:'],
                    [
                        [7],
                        [3, 'background']
                    ],
                    [3, ';']
                ])
                Z([
                    [7],
                    [3, 'groupName']
                ])
                Z([a, [3, 'header-'],
                    [
                        [7],
                        [3, 'size']
                    ]
                ])
                Z([a, z[1][1],
                    [
                        [7],
                        [3, 'headerBackground']
                    ],
                    [3, ';color:'],
                    [
                        [7],
                        [3, 'headColor']
                    ], z[1][3]
                ])
                Z([a, [
                    [7],
                    [3, 'groupName']
                ]])
                Z([a, [3, 'main-'], z[3][2]])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z([3, 'path'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'background']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'backgroundImage']
                ])
                Z([3, 'nav'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'desc']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'descColor']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'icon']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'path']
                ])
                Z(z[3][2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'titleColor']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_2
        }

        function gz$gwx_XC_0_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_3) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_3
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'nav'])
                Z([a, [3, 'container '],
                    [
                        [7],
                        [3, 'size']
                    ]
                ])
                Z([a, [3, 'background:'],
                    [
                        [7],
                        [3, 'background']
                    ],
                    [3, ';border-radius:'],
                    [
                        [7],
                        [3, 'borderRadius']
                    ],
                    [3, ';']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'size']
                    ],
                    [1, 'small']
                ])
                Z([3, 'small-surface'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'size']
                    ],
                    [1, 'normal']
                ])
                Z([a, [3, 'content-'], z[1][2]])
                Z([a, z[6][1], z[1][2],
                    [3, '-title']
                ])
                Z([a, [3, 'color:'],
                    [
                        [7],
                        [3, 'titleColor']
                    ], z[2][5]
                ])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([a, z[6][1], z[1][2],
                    [3, '-desc']
                ])
                Z([a, z[8][1],
                    [
                        [7],
                        [3, 'descColor']
                    ], z[2][5]
                ])
                Z([a, [
                    [7],
                    [3, 'desc']
                ]])
                Z([3, 'bg'])
                Z([
                    [7],
                    [3, 'backgroundImage']
                ])
                Z(z[3])
                Z([a, z[6][1], z[1][2]])
                Z([a, z[6][1], z[1][2],
                    [3, '-icon']
                ])
                Z([
                    [7],
                    [3, 'icon']
                ])
                Z([a, z[6][1], z[1][2],
                    [3, '-text']
                ])
                Z([a, z[6][1], z[1][2], z[7][3]])
                Z([a, z[8][1], z[8][2], z[2][5]])
                Z([a, z[9][1]])
                Z([a, z[6][1], z[1][2], z[10][3]])
                Z([a, z[8][1], z[11][2], z[2][5]])
                Z([a, z[12][1]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'size']
                    ],
                    [1, 'large']
                ])
                Z([a, z[6][1], z[1][2], z[17][3]])
                Z(z[18])
                Z([a, z[6][1], z[1][2]])
                Z([a, z[6][1], z[1][2], z[7][3]])
                Z([a, z[9][1]])
                Z([a, z[6][1], z[1][2], z[10][3]])
                Z([a, z[12][1]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'size']
                    ],
                    [1, 'mini']
                ])
                Z([a, z[6][1], z[1][2]])
                Z([a, z[6][1], z[1][2], z[17][3]])
                Z(z[18])
                Z([a, z[6][1], z[1][2], z[7][3]])
                Z([a, z[9][1]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_3
        }

        function gz$gwx_XC_0_4() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_4) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_4
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_4 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'daka-bar'])
                Z([3, 'daka-bar-content'])
                Z([3, 'play'])
                Z([3, 'daka-bar-content-play'])
                Z([a, [3, '../../images/home/'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'playing']
                        ],
                        [1, 'stop'],
                        [1, 'play']
                    ],
                    [3, '-fill.png']
                ])
                Z([a, [3, 'opacity:'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'sound']
                        ],
                        [1, 1],
                        [1, 0.3]
                    ],
                    [3, ';']
                ])
                Z([a, [3, '每日打卡'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'date']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, '('],
                                [
                                    [7],
                                    [3, 'date']
                                ]
                            ],
                            [1, ')']
                        ],
                        [1, '']
                    ]
                ])
                Z([3, 'navToCheckin'])
                Z([3, 'daka-bar-nav'])
                Z([3, '去打卡'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_4);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_4
        }

        function gz$gwx_XC_0_5() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_5) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_5
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_5 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [6],
                    [
                        [7],
                        [3, 'decoratedList']
                    ],
                    [3, 'length']
                ])
                Z([3, 'campaign-banner'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'decoratedList']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([3, 'onChange'])
                Z(z[2])
                Z([3, 'campaign-swiper'])
                Z([3, '350'])
                Z([1, false])
                Z([3, '6500'])
                Z([
                    [7],
                    [3, 'decoratedList']
                ])
                Z([3, 'uuid'])
                Z([3, 'nav'])
                Z([3, 'campaign-card'])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([3, 'campaign-image'])
                Z([3, 'aspectFill'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'imageUrl']
                ])
                Z(z[2])
                Z([3, 'campaign-dots'])
                Z(z[9])
                Z(z[10])
                Z([a, [3, 'campaign-dot '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'current']
                            ],
                            [
                                [7],
                                [3, 'index']
                            ]
                        ],
                        [1, 'campaign-dot--active'],
                        [1, '']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_5);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_5
        }

        function gz$gwx_XC_0_6() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_6) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_6
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_6 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([3, 'notice-bar'])
                Z([3, 'nav'])
                Z([3, 'content'])
                Z([3, 'speaker'])
                Z([3, '../../images/home/speaker.png'])
                Z([3, 'content-text'])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([
                    [7],
                    [3, 'closeable']
                ])
                Z([3, 'closeHandle'])
                Z([3, 'close'])
                Z([3, '../../images/home/close.png'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_6);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_6
        }

        function gz$gwx_XC_0_7() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_7) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_7
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_7 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'trans-form'])
                Z([a, [3, 'trans-form-bg'],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activeTab']
                            ],
                            [
                                [7],
                                [3, 'PINYIN']
                            ]
                        ],
                        [1, ' trans-form-bg-transform'],
                        [1, '']
                    ]
                ])
                Z([3, '../../images/home/trans-bg.png'])
                Z([3, 'head'])
                Z([3, 'switchTab'])
                Z([3, 'tab-wrap'])
                Z([
                    [7],
                    [3, 'TRANSLATE']
                ])
                Z([a, [3, 'tab '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activeTab']
                            ],
                            [
                                [7],
                                [3, 'TRANSLATE']
                            ]
                        ],
                        [1, ' active'],
                        [1, '']
                    ]
                ])
                Z([3, '国语转粤语'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activeTab']
                    ],
                    [
                        [7],
                        [3, 'TRANSLATE']
                    ]
                ])
                Z([3, 'underline'])
                Z(z[4])
                Z(z[5])
                Z([
                    [7],
                    [3, 'PINYIN']
                ])
                Z([a, z[7][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activeTab']
                            ],
                            [
                                [7],
                                [3, 'PINYIN']
                            ]
                        ],
                        [1, ' active'],
                        [1, '']
                    ]
                ])
                Z([3, '拼音查询'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activeTab']
                    ],
                    [
                        [7],
                        [3, 'PINYIN']
                    ]
                ])
                Z(z[10])
                Z([3, 'from'])
                Z([3, 'onInput'])
                Z([3, 'input'])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activeTab']
                        ],
                        [
                            [7],
                            [3, 'TRANSLATE']
                        ]
                    ],
                    [1, 50],
                    [1, 10]
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activeTab']
                        ],
                        [
                            [7],
                            [3, 'TRANSLATE']
                        ]
                    ],
                    [1, '即时翻译 粤语发音'],
                    [1, '查拼音 学发音']
                ])
                Z([3, 'text'])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activeTab']
                        ],
                        [
                            [7],
                            [3, 'TRANSLATE']
                        ]
                    ],
                    [
                        [7],
                        [3, 'translateText']
                    ],
                    [
                        [7],
                        [3, 'pinyinText']
                    ]
                ])
                Z([3, 'nav'])
                Z([3, 'btn'])
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activeTab']
                        ],
                        [
                            [7],
                            [3, 'TRANSLATE']
                        ]
                    ],
                    [1, '翻译'],
                    [1, '查询']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_7);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_7
        }

        function gz$gwx_XC_0_8() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_8) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_8
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_8 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'user-profile'])
                Z([3, 'onTapProfile'])
                Z([3, 'profile'])
                Z([3, 'avatar'])
                Z([
                    [7],
                    [3, 'avatar']
                ])
                Z([3, 'info'])
                Z([3, 'user-info'])
                Z([3, 'nickname'])
                Z([a, [
                    [7],
                    [3, 'nickname']
                ]])
                Z([3, 'nvaToMy'])
                Z([3, 'nav'])
                Z([3, '个人中心'])
                Z([
                    [7],
                    [3, 'msg']
                ])
                Z([3, 'red'])
                Z([a, [
                    [7],
                    [3, 'msg']
                ]])
                Z([3, 'navToSecondary'])
                Z([3, 'greeting'])
                Z([a, [
                    [7],
                    [3, 'secondaryText']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_8);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_8
        }

        function gz$gwx_XC_0_9() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_9) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_9
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_9 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([1, 10000])
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, ''])
                Z([3, 'app-name'])
                Z([3, 'left'])
                Z([3, '粤语派'])
                Z([3, 'container'])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'loaded']
                    ],
                    [1, true]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userInfo']
                    ],
                    [3, 'avatar']
                ])
                Z([3, 'onTapUserProfile'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userInfo']
                    ],
                    [3, 'checkinDays']
                ])
                Z([
                    [7],
                    [3, 'signupTime']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userInfo']
                    ],
                    [3, 'loginType']
                ])
                Z([
                    [7],
                    [3, 'correctionBadge']
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'userInfo']
                        ],
                        [3, 'openid']
                    ],
                    [1, 'guest']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userInfo']
                    ],
                    [3, 'nickname']
                ])
                Z([
                    [7],
                    [3, 'profileBanner']
                ])
                Z([3, 'margin-bottom:-30rpx;'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'appId']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'closeable']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'navigateType']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'path']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'rememberRead']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'title']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'notice']
                    ],
                    [3, 'uuid']
                ])
                Z([3, 'updateRecentlyUsed'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'checkin']
                    ],
                    [3, 'date']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'NAV']
                    ],
                    [3, 'CHECKIN']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'checkin']
                    ],
                    [3, 'sound']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'spotlightBanners']
                    ],
                    [3, 'length']
                ])
                Z([
                    [7],
                    [3, 'spotlightBanners']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'recentlyUsed']
                    ],
                    [3, 'length']
                ])
                Z([3, 'linear-gradient(180deg, #ECF8FF 0%, #FFFFFF 100%);'])
                Z(z[27])
                Z([3, '最近使用'])
                Z([3, '#1D1E1E'])
                Z([
                    [7],
                    [3, 'recentlyUsed']
                ])
                Z([3, 'mini'])
                Z(z[27])
                Z([
                    [7],
                    [3, 'NEWBIE']
                ])
                Z([3, 'normal'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'adList']
                    ],
                    [3, 'length']
                ])
                Z([3, 'hideAd'])
                Z([
                    [7],
                    [3, 'adList']
                ])
                Z([3, '0'])
                Z([
                    [7],
                    [3, 'vipGuide']
                ])
                Z(z[27])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'NAV']
                    ],
                    [3, 'DICT']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'NAV']
                    ],
                    [3, 'TRANSLATE']
                ])
                Z(z[27])
                Z([
                    [7],
                    [3, 'TOOLS']
                ])
                Z([3, 'small'])
                Z(z[27])
                Z([3, '免费课程'])
                Z([3, '#ffffff'])
                Z([3, 'url(https://s.cantonesepi.top/pi/images/mp/home/tab-bg-1.png) top / 100%  auto no-repeat,linear-gradient( 90deg, #5FAAFB 0%, #D8F0FF 100%)'])
                Z([
                    [7],
                    [3, 'COURSES']
                ])
                Z([3, 'large'])
                Z(z[27])
                Z([3, '进阶跟读'])
                Z(z[56])
                Z([3, 'url(https://s.cantonesepi.top/pi/images/mp/home/tab-bg-2.png) top / 100%  auto no-repeat,linear-gradient( 90deg, #526CE3 0%, #C5D2FF 100%)'])
                Z([
                    [7],
                    [3, 'ADVANCED']
                ])
                Z(z[59])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'popupNotice']
                    ],
                    [3, 'popup']
                ])
                Z([3, 'hideNoticePanel'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'popupNotice']
                    ],
                    [3, 'closeable']
                ])
                Z(z[66])
                Z([3, 'popup-notice'])
                Z(z[68])
                Z(z[67])
                Z([3, 'popup-close'])
                Z([3, '#8a8f99'])
                Z([3, 'cross'])
                Z([3, '20'])
                Z([3, 'notice-title'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'popupNotice']
                    ],
                    [3, 'title']
                ]])
                Z([3, 'notice-detail'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'popupNotice']
                    ],
                    [3, 'detail']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_9);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_9
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_0 = true;
        var x = ['./components/ad-banner/index.wxml', './components/card-list/index.wxml', './components/card-new/index.wxml', './components/checkin-bar/index.wxml', './components/home-campaign-banner/index.wxml', './components/notice-bar/index.wxml', './components/translate-form/index.wxml', './components/user-profile/index.wxml', './pages/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_1()
            var bGB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var oHB = _v()
            _(bGB, oHB)
            if (_oz(z, 2, e, s, gg)) {
                oHB.wxVkey = 1
                var oJB = _mz(z, 'view', ['bind:tap', 3, 'class', 1], [], e, s, gg)
                var fKB = _n('view')
                _rz(z, fKB, 'class', 5, e, s, gg)
                var cLB = _n('text')
                var hMB = _oz(z, 6, e, s, gg)
                _(cLB, hMB)
                _(fKB, cLB)
                var oNB = _n('van-icon')
                _rz(z, oNB, 'name', 7, e, s, gg)
                _(fKB, oNB)
                _(oJB, fKB)
                _(oHB, oJB)
            }
            var xIB = _v()
            _(bGB, xIB)
            if (_oz(z, 8, e, s, gg)) {
                xIB.wxVkey = 1
                var cOB = _mz(z, 'ad-custom', ['adIntervals', 9, 'binderror', 1, 'bindload', 2, 'unitId', 3], [], e, s, gg)
                _(xIB, cOB)
            }
            oHB.wxXCkey = 1
            oHB.wxXCkey = 3
            xIB.wxXCkey = 1
            _(r, bGB)
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
            var z = gz$gwx_XC_0_2()
            var lQB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var aRB = _v()
            _(lQB, aRB)
            if (_oz(z, 2, e, s, gg)) {
                aRB.wxVkey = 1
                var tSB = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
                var eTB = _oz(z, 5, e, s, gg)
                _(tSB, eTB)
                _(aRB, tSB)
            }
            var bUB = _n('view')
            _rz(z, bUB, 'class', 6, e, s, gg)
            var oVB = _v()
            _(bUB, oVB)
            var xWB = function(fYB, oXB, cZB, gg) {
                var o2B = _mz(z, 'card', ['background', 9, 'backgroundImage', 1, 'bind:nav', 2, 'desc', 3, 'descColor', 4, 'icon', 5, 'path', 6, 'size', 7, 'title', 8, 'titleColor', 9], [], fYB, oXB, gg)
                _(cZB, o2B)
                return cZB
            }
            oVB.wxXCkey = 4
            _2z(z, 7, xWB, e, s, gg, oVB, 'item', 'index', 'path')
            _(lQB, bUB)
            aRB.wxXCkey = 1
            _(r, lQB)
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
            var z = gz$gwx_XC_0_3()
            var o4B = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var l5B = _v()
            _(o4B, l5B)
            if (_oz(z, 3, e, s, gg)) {
                l5B.wxVkey = 1
                var t7B = _n('view')
                _rz(z, t7B, 'class', 4, e, s, gg)
                _(l5B, t7B)
            }
            var a6B = _v()
            _(o4B, a6B)
            if (_oz(z, 5, e, s, gg)) {
                a6B.wxVkey = 1
                var e8B = _n('view')
                _rz(z, e8B, 'class', 6, e, s, gg)
                var b9B = _mz(z, 'view', ['class', 7, 'style', 1], [], e, s, gg)
                var o0B = _oz(z, 9, e, s, gg)
                _(b9B, o0B)
                _(e8B, b9B)
                var xAC = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
                var oBC = _oz(z, 12, e, s, gg)
                _(xAC, oBC)
                _(e8B, xAC)
                _(a6B, e8B)
                var fCC = _mz(z, 'image', ['class', 13, 'src', 1], [], e, s, gg)
                _(a6B, fCC)
            } else if (_oz(z, 15, e, s, gg)) {
                a6B.wxVkey = 2
                var cDC = _n('view')
                _rz(z, cDC, 'class', 16, e, s, gg)
                var hEC = _mz(z, 'image', ['class', 17, 'src', 1], [], e, s, gg)
                _(cDC, hEC)
                var oFC = _n('view')
                _rz(z, oFC, 'class', 19, e, s, gg)
                var cGC = _mz(z, 'view', ['class', 20, 'style', 1], [], e, s, gg)
                var oHC = _oz(z, 22, e, s, gg)
                _(cGC, oHC)
                _(oFC, cGC)
                var lIC = _mz(z, 'view', ['class', 23, 'style', 1], [], e, s, gg)
                var aJC = _oz(z, 25, e, s, gg)
                _(lIC, aJC)
                _(oFC, lIC)
                _(cDC, oFC)
                _(a6B, cDC)
            } else if (_oz(z, 26, e, s, gg)) {
                a6B.wxVkey = 3
                var tKC = _mz(z, 'image', ['class', 27, 'src', 1], [], e, s, gg)
                _(a6B, tKC)
                var eLC = _n('view')
                _rz(z, eLC, 'class', 29, e, s, gg)
                var bMC = _n('text')
                _rz(z, bMC, 'class', 30, e, s, gg)
                var oNC = _oz(z, 31, e, s, gg)
                _(bMC, oNC)
                _(eLC, bMC)
                var xOC = _n('text')
                _rz(z, xOC, 'class', 32, e, s, gg)
                var oPC = _oz(z, 33, e, s, gg)
                _(xOC, oPC)
                _(eLC, xOC)
                _(a6B, eLC)
            } else if (_oz(z, 34, e, s, gg)) {
                a6B.wxVkey = 4
                var fQC = _n('view')
                _rz(z, fQC, 'class', 35, e, s, gg)
                var cRC = _mz(z, 'image', ['class', 36, 'src', 1], [], e, s, gg)
                _(fQC, cRC)
                var hSC = _n('text')
                _rz(z, hSC, 'class', 38, e, s, gg)
                var oTC = _oz(z, 39, e, s, gg)
                _(hSC, oTC)
                _(fQC, hSC)
                _(a6B, fQC)
            }
            l5B.wxXCkey = 1
            a6B.wxXCkey = 1
            _(r, o4B)
            return r
        }
        e_[x[2]] = {
            f: m2,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[3]] = {}
        var m3 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_4()
            var oVC = _n('view')
            _rz(z, oVC, 'class', 0, e, s, gg)
            var lWC = _n('view')
            _rz(z, lWC, 'class', 1, e, s, gg)
            var aXC = _mz(z, 'image', ['bind:tap', 2, 'class', 1, 'src', 2, 'style', 3], [], e, s, gg)
            _(lWC, aXC)
            var tYC = _n('view')
            var eZC = _oz(z, 6, e, s, gg)
            _(tYC, eZC)
            _(lWC, tYC)
            _(oVC, lWC)
            var b1C = _mz(z, 'view', ['bind:tap', 7, 'class', 1], [], e, s, gg)
            var o2C = _oz(z, 9, e, s, gg)
            _(b1C, o2C)
            _(oVC, b1C)
            _(r, oVC)
            return r
        }
        e_[x[3]] = {
            f: m3,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[4]] = {}
        var m4 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_5()
            var o4C = _v()
            _(r, o4C)
            if (_oz(z, 0, e, s, gg)) {
                o4C.wxVkey = 1
                var f5C = _n('view')
                _rz(z, f5C, 'class', 1, e, s, gg)
                var h7C = _mz(z, 'swiper', ['autoplay', 2, 'bindchange', 1, 'circular', 2, 'class', 3, 'duration', 4, 'indicatorDots', 5, 'interval', 6], [], e, s, gg)
                var o8C = _v()
                _(h7C, o8C)
                var c9C = function(lAD, o0C, aBD, gg) {
                    var eDD = _n('swiper-item')
                    var bED = _mz(z, 'view', ['bind:tap', 11, 'class', 1, 'data-index', 2], [], lAD, o0C, gg)
                    var oFD = _mz(z, 'image', ['class', 14, 'mode', 1, 'src', 2], [], lAD, o0C, gg)
                    _(bED, oFD)
                    _(eDD, bED)
                    _(aBD, eDD)
                    return aBD
                }
                o8C.wxXCkey = 2
                _2z(z, 9, c9C, e, s, gg, o8C, 'item', 'index', 'uuid')
                _(f5C, h7C)
                var c6C = _v()
                _(f5C, c6C)
                if (_oz(z, 17, e, s, gg)) {
                    c6C.wxVkey = 1
                    var xGD = _n('view')
                    _rz(z, xGD, 'class', 18, e, s, gg)
                    var oHD = _v()
                    _(xGD, oHD)
                    var fID = function(hKD, cJD, oLD, gg) {
                        var oND = _n('view')
                        _rz(z, oND, 'class', 21, hKD, cJD, gg)
                        _(oLD, oND)
                        return oLD
                    }
                    oHD.wxXCkey = 2
                    _2z(z, 19, fID, e, s, gg, oHD, 'item', 'index', 'uuid')
                    _(c6C, xGD)
                }
                c6C.wxXCkey = 1
                _(o4C, f5C)
            }
            o4C.wxXCkey = 1
            return r
        }
        e_[x[4]] = {
            f: m4,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[5]] = {}
        var m5 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_6()
            var aPD = _v()
            _(r, aPD)
            if (_oz(z, 0, e, s, gg)) {
                aPD.wxVkey = 1
                var tQD = _n('view')
                _rz(z, tQD, 'class', 1, e, s, gg)
                var bSD = _mz(z, 'view', ['bind:tap', 2, 'class', 1], [], e, s, gg)
                var oTD = _mz(z, 'image', ['class', 4, 'src', 1], [], e, s, gg)
                _(bSD, oTD)
                var xUD = _n('text')
                _rz(z, xUD, 'class', 6, e, s, gg)
                var oVD = _oz(z, 7, e, s, gg)
                _(xUD, oVD)
                _(bSD, xUD)
                _(tQD, bSD)
                var eRD = _v()
                _(tQD, eRD)
                if (_oz(z, 8, e, s, gg)) {
                    eRD.wxVkey = 1
                    var fWD = _mz(z, 'image', ['bind:tap', 9, 'class', 1, 'src', 2], [], e, s, gg)
                    _(eRD, fWD)
                }
                eRD.wxXCkey = 1
                _(aPD, tQD)
            }
            aPD.wxXCkey = 1
            return r
        }
        e_[x[5]] = {
            f: m5,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[6]] = {}
        var m6 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_7()
            var hYD = _n('view')
            _rz(z, hYD, 'class', 0, e, s, gg)
            var oZD = _mz(z, 'image', ['class', 1, 'src', 1], [], e, s, gg)
            _(hYD, oZD)
            var c1D = _n('view')
            _rz(z, c1D, 'class', 3, e, s, gg)
            var o2D = _mz(z, 'view', ['bind:tap', 4, 'class', 1, 'data-tab', 2], [], e, s, gg)
            var l3D = _n('view')
            _rz(z, l3D, 'class', 7, e, s, gg)
            var t5D = _n('text')
            var e6D = _oz(z, 8, e, s, gg)
            _(t5D, e6D)
            _(l3D, t5D)
            var a4D = _v()
            _(l3D, a4D)
            if (_oz(z, 9, e, s, gg)) {
                a4D.wxVkey = 1
                var b7D = _n('view')
                _rz(z, b7D, 'class', 10, e, s, gg)
                _(a4D, b7D)
            }
            a4D.wxXCkey = 1
            _(o2D, l3D)
            _(c1D, o2D)
            var o8D = _mz(z, 'view', ['bind:tap', 11, 'class', 1, 'data-tab', 2], [], e, s, gg)
            var x9D = _n('view')
            _rz(z, x9D, 'class', 14, e, s, gg)
            var fAE = _n('text')
            var cBE = _oz(z, 15, e, s, gg)
            _(fAE, cBE)
            _(x9D, fAE)
            var o0D = _v()
            _(x9D, o0D)
            if (_oz(z, 16, e, s, gg)) {
                o0D.wxVkey = 1
                var hCE = _n('view')
                _rz(z, hCE, 'class', 17, e, s, gg)
                _(o0D, hCE)
            }
            o0D.wxXCkey = 1
            _(o8D, x9D)
            _(c1D, o8D)
            _(hYD, c1D)
            var oDE = _n('view')
            _rz(z, oDE, 'class', 18, e, s, gg)
            var cEE = _mz(z, 'input', ['bind:input', 19, 'class', 1, 'maxlength', 2, 'placeholder', 3, 'type', 4, 'value', 5], [], e, s, gg)
            _(oDE, cEE)
            var oFE = _mz(z, 'button', ['bind:tap', 25, 'class', 1], [], e, s, gg)
            var lGE = _oz(z, 27, e, s, gg)
            _(oFE, lGE)
            _(oDE, oFE)
            _(hYD, oDE)
            _(r, hYD)
            return r
        }
        e_[x[6]] = {
            f: m6,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[7]] = {}
        var m7 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_8()
            var tIE = _n('view')
            _rz(z, tIE, 'class', 0, e, s, gg)
            var eJE = _mz(z, 'view', ['bind:tap', 1, 'class', 1], [], e, s, gg)
            var bKE = _mz(z, 'image', ['class', 3, 'src', 1], [], e, s, gg)
            _(eJE, bKE)
            var oLE = _n('view')
            _rz(z, oLE, 'class', 5, e, s, gg)
            var xME = _n('view')
            _rz(z, xME, 'class', 6, e, s, gg)
            var oNE = _n('text')
            _rz(z, oNE, 'class', 7, e, s, gg)
            var fOE = _oz(z, 8, e, s, gg)
            _(oNE, fOE)
            _(xME, oNE)
            var cPE = _mz(z, 'view', ['bind:tap', 9, 'class', 1], [], e, s, gg)
            var oRE = _oz(z, 11, e, s, gg)
            _(cPE, oRE)
            var hQE = _v()
            _(cPE, hQE)
            if (_oz(z, 12, e, s, gg)) {
                hQE.wxVkey = 1
                var cSE = _n('text')
                _rz(z, cSE, 'class', 13, e, s, gg)
                var oTE = _oz(z, 14, e, s, gg)
                _(cSE, oTE)
                _(hQE, cSE)
            }
            hQE.wxXCkey = 1
            _(xME, cPE)
            _(oLE, xME)
            var lUE = _mz(z, 'view', ['catchtap', 15, 'class', 1], [], e, s, gg)
            var aVE = _oz(z, 17, e, s, gg)
            _(lUE, aVE)
            _(oLE, lUE)
            _(eJE, oLE)
            _(tIE, eJE)
            _(r, tIE)
            return r
        }
        e_[x[7]] = {
            f: m7,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[8]] = {}
        var m8 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_9()
            var bYE = _n('van-sticky')
            _rz(z, bYE, 'zIndex', 0, e, s, gg)
            var oZE = _mz(z, 'van-nav-bar', ['bind:click-left', 1, 'border', 1, 'customClass', 2, 'leftText', 3], [], e, s, gg)
            var x1E = _mz(z, 'view', ['class', 5, 'slot', 1], [], e, s, gg)
            var o2E = _oz(z, 7, e, s, gg)
            _(x1E, o2E)
            _(oZE, x1E)
            _(bYE, oZE)
            _(r, bYE)
            var f3E = _mz(z, 'view', ['class', 8, 'hidden', 1], [], e, s, gg)
            var c7E = _mz(z, 'user-profile', ['avatar', 10, 'bind:tap', 1, 'checkinDays', 2, 'days', 3, 'loginType', 4, 'msg', 5, 'needlogin', 6, 'nickname', 7, 'profileBanner', 8, 'style', 9], [], e, s, gg)
            _(f3E, c7E)
            var o8E = _mz(z, 'notice-bar', ['appId', 20, 'closeable', 1, 'navigateType', 2, 'path', 3, 'rememberRead', 4, 'title', 5, 'uuid', 6], [], e, s, gg)
            _(f3E, o8E)
            var l9E = _mz(z, 'checkin-bar', ['bind:nav', 27, 'date', 1, 'nav', 2, 'sound', 3], [], e, s, gg)
            _(f3E, l9E)
            var c4E = _v()
            _(f3E, c4E)
            if (_oz(z, 31, e, s, gg)) {
                c4E.wxVkey = 1
                var a0E = _n('home-campaign-banner')
                _rz(z, a0E, 'list', 32, e, s, gg)
                _(c4E, a0E)
            }
            var h5E = _v()
            _(f3E, h5E)
            if (_oz(z, 33, e, s, gg)) {
                h5E.wxVkey = 1
                var tAF = _mz(z, 'card-list', ['backgrounds', 34, 'bind:nav', 1, 'groupName', 2, 'headColor', 3, 'list', 4, 'size', 5], [], e, s, gg)
                _(h5E, tAF)
            }
            var eBF = _mz(z, 'card-list', ['bind:nav', 40, 'list', 1, 'size', 2], [], e, s, gg)
            _(f3E, eBF)
            var o6E = _v()
            _(f3E, o6E)
            if (_oz(z, 43, e, s, gg)) {
                o6E.wxVkey = 1
                var bCF = _mz(z, 'ad-banner', ['bind:error', 44, 'list', 1, 'marginTop', 2, 'notice', 3], [], e, s, gg)
                _(o6E, bCF)
            }
            var oDF = _mz(z, 'translate-form', ['bind:nav', 48, 'dictNav', 1, 'translateNav', 2], [], e, s, gg)
            _(f3E, oDF)
            var xEF = _mz(z, 'card-list', ['bind:nav', 51, 'list', 1, 'size', 2], [], e, s, gg)
            _(f3E, xEF)
            var oFF = _mz(z, 'card-list', ['bind:nav', 54, 'groupName', 1, 'headColor', 2, 'headerBackground', 3, 'list', 4, 'size', 5], [], e, s, gg)
            _(f3E, oFF)
            var fGF = _mz(z, 'card-list', ['bind:nav', 60, 'groupName', 1, 'headColor', 2, 'headerBackground', 3, 'list', 4, 'size', 5], [], e, s, gg)
            _(f3E, fGF)
            c4E.wxXCkey = 1
            c4E.wxXCkey = 3
            h5E.wxXCkey = 1
            h5E.wxXCkey = 3
            o6E.wxXCkey = 1
            o6E.wxXCkey = 3
            _(r, f3E)
            var eXE = _v()
            _(r, eXE)
            if (_oz(z, 66, e, s, gg)) {
                eXE.wxVkey = 1
                var cHF = _mz(z, 'van-action-sheet', ['bind:close', 67, 'closeOnClickOverlay', 1, 'show', 2], [], e, s, gg)
                var hIF = _n('view')
                _rz(z, hIF, 'class', 70, e, s, gg)
                var oJF = _v()
                _(hIF, oJF)
                if (_oz(z, 71, e, s, gg)) {
                    oJF.wxVkey = 1
                    var cKF = _mz(z, 'view', ['bind:tap', 72, 'class', 1], [], e, s, gg)
                    var oLF = _mz(z, 'van-icon', ['color', 74, 'name', 1, 'size', 2], [], e, s, gg)
                    _(cKF, oLF)
                    _(oJF, cKF)
                }
                var lMF = _n('view')
                _rz(z, lMF, 'class', 77, e, s, gg)
                var aNF = _oz(z, 78, e, s, gg)
                _(lMF, aNF)
                _(hIF, lMF)
                var tOF = _n('view')
                _rz(z, tOF, 'class', 79, e, s, gg)
                var ePF = _oz(z, 80, e, s, gg)
                _(tOF, ePF)
                _(hIF, tOF)
                oJF.wxXCkey = 1
                oJF.wxXCkey = 3
                _(cHF, hIF)
                _(eXE, cHF)
            }
            eXE.wxXCkey = 1
            eXE.wxXCkey = 3
            return r
        }
        e_[x[8]] = {
            f: m8,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_0";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ad-banner/index.wxml'] = [$gwx_XC_0, './components/ad-banner/index.wxml'];
else __wxAppCode__['components/ad-banner/index.wxml'] = $gwx_XC_0('./components/ad-banner/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/card-list/index.wxml'] = [$gwx_XC_0, './components/card-list/index.wxml'];
else __wxAppCode__['components/card-list/index.wxml'] = $gwx_XC_0('./components/card-list/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/card-new/index.wxml'] = [$gwx_XC_0, './components/card-new/index.wxml'];
else __wxAppCode__['components/card-new/index.wxml'] = $gwx_XC_0('./components/card-new/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/checkin-bar/index.wxml'] = [$gwx_XC_0, './components/checkin-bar/index.wxml'];
else __wxAppCode__['components/checkin-bar/index.wxml'] = $gwx_XC_0('./components/checkin-bar/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-campaign-banner/index.wxml'] = [$gwx_XC_0, './components/home-campaign-banner/index.wxml'];
else __wxAppCode__['components/home-campaign-banner/index.wxml'] = $gwx_XC_0('./components/home-campaign-banner/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/notice-bar/index.wxml'] = [$gwx_XC_0, './components/notice-bar/index.wxml'];
else __wxAppCode__['components/notice-bar/index.wxml'] = $gwx_XC_0('./components/notice-bar/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/translate-form/index.wxml'] = [$gwx_XC_0, './components/translate-form/index.wxml'];
else __wxAppCode__['components/translate-form/index.wxml'] = $gwx_XC_0('./components/translate-form/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/user-profile/index.wxml'] = [$gwx_XC_0, './components/user-profile/index.wxml'];
else __wxAppCode__['components/user-profile/index.wxml'] = $gwx_XC_0('./components/user-profile/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_0, './pages/index/index.wxml'];
else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_0('./pages/index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/ad-banner/index.wxss'] = setCssToHead([".", [1], "container{margin-top:", [0, 20], ";padding-top:", [0, 10], "}\n.", [1], "vip-guide{display:-webkit-flex;display:flex;height:", [0, 70], ";padding:", [0, 0], "}\n.", [1], "vip-guide .", [1], "text{background:linear-gradient(90deg,#ffe1a0,#ffe39b);border-top-right-radius:", [0, 30], ";color:#9d5c05;font-size:", [0, 28], ";font-weight:700;line-height:", [0, 70], ";padding-left:", [0, 20], ";padding-right:", [0, 20], "}\n", ], undefined, {
        path: "./components/ad-banner/index.wxss"
    });
    __wxAppCode__['components/card-list/index.wxss'] = setCssToHead([".", [1], "group-large{background:#fff;border-bottom-left-radius:", [0, 20], ";border-bottom-right-radius:", [0, 20], ";border-top-left-radius:", [0, 15], ";border-top-right-radius:", [0, 15], ";box-shadow:", [0, 0], " ", [0, 10], " ", [0, 24], " ", [0, 0], " rgba(152,193,205,.16);-webkit-justify-content:center;justify-content:center;overflow:hidden}\n.", [1], "group-mini{background:linear-gradient(180deg,#ecf8ff,#fff);border:", [0, 2], " solid #fff;border-radius:", [0, 20], ";box-sizing:border-box;height:", [0, 234], ";width:", [0, 702], "}\n.", [1], "header-mini{color:#1d1e1e;font-size:", [0, 30], ";height:", [0, 85], ";line-height:", [0, 36], ";text-align:right}\n.", [1], "header,.", [1], "header-mini{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;font-family:SourceHanSerifCN;font-style:normal;font-weight:800;padding-left:", [0, 20], ";width:100%}\n.", [1], "header,.", [1], "header-large{color:#fff;font-size:", [0, 34], ";height:", [0, 99], ";line-height:", [0, 49], ";text-align:left}\n.", [1], "header-large{box-sizing:border-box;font-family:SourceHanSerifCN;font-style:normal;font-weight:800;padding-left:", [0, 20], ";width:100%}\n.", [1], "header-large,.", [1], "main-large,.", [1], "main-mini,.", [1], "main-normal,.", [1], "main-small{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "main-large,.", [1], "main-mini,.", [1], "main-normal,.", [1], "main-small{-webkit-column-gap:", [0, 22], ";column-gap:", [0, 22], ";-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-between;justify-content:space-between;row-gap:", [0, 33], "}\n.", [1], "main-mini{box-sizing:border-box;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;gap:", [0, 0], ";-webkit-justify-content:flex-start;justify-content:flex-start;overflow:hidden}\n.", [1], "main-large{-webkit-column-gap:0;column-gap:0;row-gap:0}\n", ], undefined, {
        path: "./components/card-list/index.wxss"
    });
    __wxAppCode__['components/card-new/index.wxss'] = setCssToHead([".", [1], "container{box-sizing:border-box;display:-webkit-flex;display:flex}\n.", [1], "normal{border-radius:", [0, 20], ";height:", [0, 170], ";position:relative;width:", [0, 340], "}\n.", [1], "content-normal{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 20], ";margin-left:", [0, 20], ";margin-right:", [0, 20], ";margin-top:", [0, 40], "}\n.", [1], "content-normal-title{font-size:", [0, 36], ";font-weight:800;line-height:", [0, 36], "}\n.", [1], "content-normal-desc,.", [1], "content-normal-title{color:#fff;font-family:SourceHanSerifCN;font-style:normal}\n.", [1], "content-normal-desc{font-size:", [0, 24], ";font-weight:500;line-height:", [0, 24], "}\n.", [1], "small{border:", [0, 2], " solid hsla(0,0%,100%,.82);border-radius:", [0, 20], ";box-shadow:", [0, 0], " ", [0, 12], " ", [0, 28], " rgba(107,139,179,.14),", [0, 0], " ", [0, 4], " ", [0, 10], " rgba(107,139,179,.08);-webkit-flex-wrap:wrap;flex-wrap:wrap;height:", [0, 140], ";overflow:hidden;position:relative;width:", [0, 340], "}\n.", [1], "small-surface{background:linear-gradient(135deg,hsla(0,0%,100%,.26),hsla(0,0%,100%,.12) 28%,hsla(0,0%,100%,0) 60%);border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}\n.", [1], "content-small{display:-webkit-flex;display:flex;margin-left:", [0, 20], ";margin-top:", [0, 38], ";position:relative;z-index:1}\n.", [1], "content-small-icon{height:", [0, 64], ";width:", [0, 64], "}\n.", [1], "content-small-text{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 10], ";margin-left:", [0, 16], "}\n.", [1], "content-small-title{font-size:", [0, 30], ";font-weight:800;line-height:", [0, 30], "}\n.", [1], "content-small-desc,.", [1], "content-small-title{font-family:SourceHanSerifCN;font-style:normal;text-align:left}\n.", [1], "content-small-desc{font-size:", [0, 24], ";font-weight:500;line-height:", [0, 24], "}\n.", [1], "bg{bottom:", [0, 0], ";height:", [0, 110], ";position:absolute;right:", [0, -8], ";width:", [0, 148], "}\n.", [1], "large{box-sizing:border-box;-webkit-column-gap:", [0, 15], ";column-gap:", [0, 15], ";padding:", [0, 30], " ", [0, 30], " ", [0, 40], ";width:", [0, 702], "}\n.", [1], "large:not(wx-last-child){border-bottom:", [0, 2], " solid #f3f7f8}\n.", [1], "content-large-icon{height:", [0, 86], ";width:", [0, 86], "}\n.", [1], "content-large{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;row-gap:", [0, 14], "}\n.", [1], "content-large-title{color:#1d1e1e;font-size:", [0, 28], ";font-weight:800;line-height:", [0, 30], "}\n.", [1], "content-large-desc,.", [1], "content-large-title{font-family:SourceHanSerifCN;font-style:normal;text-align:left}\n.", [1], "content-large-desc{color:#626262;font-size:", [0, 24], ";font-weight:500;line-height:", [0, 34], "}\n.", [1], "mini{overflow:hidden;width:", [0, 140], "}\n.", [1], "content-mini{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "content-mini-icon{height:", [0, 80], ";width:", [0, 80], "}\n.", [1], "content-mini-title{color:#1d1e1e;font-family:SourceHanSerifCN;font-size:", [0, 24], ";font-style:normal;font-weight:500;line-height:", [0, 35], ";overflow:hidden;text-align:center;text-overflow:clip;white-space:nowrap;width:", [0, 140], "}\n", ], undefined, {
        path: "./components/card-new/index.wxss"
    });
    __wxAppCode__['components/checkin-bar/index.wxss'] = setCssToHead([".", [1], "daka-bar{background:#fff;border:", [0, 1], " solid #fff;border-radius:", [0, 35], ";box-sizing:border-box;height:", [0, 70], ";-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, -10], ";width:100%}\n.", [1], "daka-bar,.", [1], "daka-bar-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "daka-bar-content{-webkit-flex:1;flex:1;height:100%}\n.", [1], "daka-bar-content wx-view{color:#626262;font-family:SourceHanSerifCN;font-size:", [0, 24], ";font-style:normal;font-weight:500;line-height:", [0, 24], ";margin-left:", [0, 10], ";text-align:right}\n.", [1], "daka-bar-content wx-view wx-text{color:#2380f9;font-size:", [0, 24], ";font-weight:500}\n.", [1], "daka-bar-content-play{height:", [0, 40], ";margin-left:", [0, 15], ";width:", [0, 40], "}\n.", [1], "daka-bar-nav{-webkit-align-items:center;align-items:center;background:#2380f9;border-radius:", [0, 28], ";color:#fff;display:-webkit-flex;display:flex;font-family:SourceHanSerifCN;font-size:", [0, 24], ";font-style:normal;font-weight:800;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;line-height:", [0, 24], ";margin-right:", [0, 7], ";width:", [0, 118], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/checkin-bar/index.wxss:1:549)", {
        path: "./components/checkin-bar/index.wxss"
    });
    __wxAppCode__['components/home-campaign-banner/index.wxss'] = setCssToHead([".", [1], "campaign-banner{position:relative}\n.", [1], "campaign-swiper{height:", [0, 200], ";width:100%}\n.", [1], "campaign-card{border-radius:", [0, 28], ";box-shadow:", [0, 0], " ", [0, 10], " ", [0, 24], " rgba(106,138,181,.14);height:", [0, 200], ";overflow:hidden;position:relative}\n.", [1], "campaign-image{bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}\n.", [1], "campaign-dots{-webkit-align-items:center;align-items:center;bottom:", [0, 12], ";-webkit-column-gap:", [0, 8], ";column-gap:", [0, 8], ";display:-webkit-flex;display:flex;position:absolute;right:", [0, 24], "}\n.", [1], "campaign-dot{background:rgba(128,145,170,.26);border-radius:", [0, 999], ";height:", [0, 10], ";width:", [0, 10], "}\n.", [1], "campaign-dot--active{background:rgba(79,110,249,.9);width:", [0, 26], "}\n", ], undefined, {
        path: "./components/home-campaign-banner/index.wxss"
    });
    __wxAppCode__['components/notice-bar/index.wxss'] = setCssToHead([".", [1], "notice-bar{background:linear-gradient(90deg,#ffe1a0,#ffe39b);border:", [0, 1], " solid #fff;border-radius:", [0, 35], ";box-sizing:border-box;height:", [0, 70], ";padding-left:", [0, 15], ";padding-right:", [0, 15], ";width:100%}\n.", [1], "content,.", [1], "notice-bar{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "content{height:100%;overflow:hidden;width:", [0, 657], "}\n.", [1], "content-text{color:#9d5c05;font-family:SourceHanSerifCN;font-size:", [0, 24], ";font-weight:500;line-height:", [0, 24], ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "speaker{height:", [0, 40], ";margin-right:", [0, 10], ";width:", [0, 40], "}\n.", [1], "close{height:", [0, 14], ";margin-left:", [0, 15], ";margin-right:", [0, 15], ";width:", [0, 14], "}\n", ], undefined, {
        path: "./components/notice-bar/index.wxss"
    });
    __wxAppCode__['components/translate-form/index.wxss'] = setCssToHead([".", [1], "trans-form{-webkit-align-items:center;align-items:center;background:linear-gradient(180deg,#c8dcfc,#e1f4ff);border:", [0, 1], " solid #fff;border-radius:", [0, 22], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:", [0, 260], ";position:relative;width:100%}\n.", [1], "trans-form-bg{height:100%;left:", [0, 0], ";position:absolute;top:", [0, 0], ";width:100%}\n.", [1], "trans-form-bg-transform{-webkit-transform:scaleX(-1);transform:scaleX(-1)}\n.", [1], "head{color:#626262;font-family:SourceHanSerifCN;font-size:", [0, 30], ";font-style:normal;font-weight:500;height:", [0, 80], ";-webkit-justify-content:space-around;justify-content:space-around;line-height:", [0, 36], ";text-align:right;top:", [0, 0], ";width:100%}\n.", [1], "from,.", [1], "head{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;position:absolute}\n.", [1], "from{background:rgba(95,170,251,.09);border:", [0, 1], " solid #5faafb;border-radius:", [0, 20], ";height:", [0, 100], ";top:", [0, 120], ";width:95%}\n.", [1], "from,.", [1], "input{box-sizing:border-box}\n.", [1], "input{-webkit-flex:1;flex:1;height:100%;padding-left:", [0, 20], ";padding-right:", [0, 20], "}\n.", [1], "btn{-webkit-align-items:center;align-items:center;background:linear-gradient(108deg,#ff9627,#ffc849);border-radius:", [0, 32], ";color:#fff;display:-webkit-flex;display:flex;font-family:SourceHanSerifCN;font-size:", [0, 26], ";height:", [0, 64], ";line-height:", [0, 26], ";margin-right:", [0, 20], ";padding-left:", [0, 34], ";padding-right:", [0, 34], "}\n.", [1], "active,.", [1], "btn{font-style:normal;font-weight:800;text-align:right}\n.", [1], "active{color:#1d1e1e;font-size:", [0, 36], ";line-height:", [0, 36], "}\n.", [1], "tab-wrap{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "tab{position:relative}\n.", [1], "underline{background:linear-gradient(90deg,#3480f1,#fff);bottom:", [0, -7], ";height:", [0, 15], ";position:absolute;width:", [0, 88], ";z-index:-1}\n", ], undefined, {
        path: "./components/translate-form/index.wxss"
    });
    __wxAppCode__['components/user-profile/index.wxss'] = setCssToHead([".", [1], "user-profile{-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:", [0, 24], ";padding-top:", [0, 24], "}\n.", [1], "profile,.", [1], "user-profile{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "profile{gap:", [0, 16], "}\n.", [1], "avatar{border-radius:50%;height:", [0, 100], ";width:", [0, 100], "}\n.", [1], "info{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 4], ";height:", [0, 100], ";-webkit-justify-content:space-evenly;justify-content:space-evenly;overflow:hidden;width:", [0, 582], "}\n.", [1], "info,.", [1], "user-info{display:-webkit-flex;display:flex}\n.", [1], "user-info{-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between;width:100%}\n.", [1], "avartar{background-color:gray;border-radius:", [0, 50], ";height:", [0, 100], ";width:", [0, 100], "}\n.", [1], "nickname{color:#1d1e1e;font-family:SourceHanSerifCN-Heavy;font-size:", [0, 40], ";font-weight:900;line-height:", [0, 46], "}\n.", [1], "greeting,.", [1], "nickname{overflow:hidden;overflow-wrap:break-word;white-space:nowrap}\n.", [1], "greeting{color:#626262;font-family:SourceHanSerifCN-Medium;font-size:", [0, 25], ";font-weight:400;line-height:", [0, 32], ";text-overflow:ellipsis}\n.", [1], "nav{border:", [0, 1], " solid #2380f9;border-radius:", [0, 30], ";color:#1d1e1e;font-family:SourceHanSerifCN;font-size:", [0, 24], ";font-style:normal;font-weight:800;height:", [0, 60], ";line-height:", [0, 24], ";position:relative;text-align:right;width:", [0, 160], "}\n.", [1], "nav,.", [1], "red{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "red{background:red;border-radius:50%;color:#fff;font-size:", [0, 20], ";height:", [0, 20], ";min-width:", [0, 20], ";padding:", [0, 8], ";position:absolute;right:", [0, 0], ";top:", [0, 0], "}\n", ], undefined, {
        path: "./components/user-profile/index.wxss"
    });
    __wxAppCode__['pages/index/index.wxss'] = setCssToHead(["body{background-color:#dff1fc;background-image:url(https://s.cantonesepi.top/test/27@2x.png);background-position:0 0;background-repeat:no-repeat;background-size:100% 100%}\n.", [1], "container{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 30], ";padding-bottom:", [0, 80], ";padding-left:", [0, 24], ";padding-right:", [0, 24], "}\n.", [1], "app-name{color:#2d2e2f;font-family:SourceHanSerifCN-Heavy;font-size:", [0, 36], ";font-weight:900;line-height:", [0, 36], ";overflow-wrap:break-word;text-align:right;white-space:nowrap}\n.", [1], "popup-notice{padding:", [0, 44], " ", [0, 40], " ", [0, 48], ";position:relative}\n.", [1], "popup-close{-webkit-align-items:center;align-items:center;background:#f4f6fa;border-radius:", [0, 999], ";display:-webkit-flex;display:flex;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;position:absolute;right:", [0, 28], ";top:", [0, 28], ";width:", [0, 56], "}\n.", [1], "notice-title{color:red;font-size:", [0, 38], ";font-weight:700;line-height:1.35;padding:", [0, 6], " ", [0, 72], " ", [0, 22], ";text-align:center}\n.", [1], "notice-detail{font-size:", [0, 32], ";line-height:1.65;max-height:62vh;overflow-wrap:break-word;overflow-y:auto;white-space:pre-wrap;word-break:break-word}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/index.wxss:1:1)", {
        path: "./pages/index/index.wxss"
    });
}
} catch (e) {}
try {
$gwx_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];

        function gz$gwx_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'annotated-container'])
                Z([3, 'word-pinyin-container'])
                Z([3, 'word'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'cantonese']
                ])
                Z([3, 'word-container'])
                Z([3, 'pinyin'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'word']
                    ],
                    [3, 'pinyin']
                ]])
                Z([a, [3, 'annotated-word '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'cn']
                        ],
                        [1, 'annotated-word-underline'],
                        [1, '']
                    ]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'word']
                    ],
                    [3, 'text']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'cn']
                ])
                Z([3, 'annotation'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'cn']
                ]])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'punctuation']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
        }

        function gz$gwx_XC_1_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_1_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([3, 'background:#f8f9fa;'])
                Z([3, '返回'])
                Z([
                    [7],
                    [3, 'title']
                ])
                Z([
                    [7],
                    [3, 'loaded']
                ])
                Z([3, 'container'])
                Z([3, 'article'])
                Z([3, 'content'])
                Z([3, 'row'])
                Z([3, 'line'])
                Z([
                    [7],
                    [3, 'article']
                ])
                Z(z[10])
                Z([a, [3, 'paragraph '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentRow']
                            ],
                            [
                                [7],
                                [3, 'row']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'row']
                ])
                Z([3, 'col'])
                Z([
                    [7],
                    [3, 'line']
                ])
                Z(z[16])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z([3, 'jyut3'])
                Z(z[6])
                Z([3, 'bottom-player-bar'])
                Z([3, 'player-controls'])
                Z([3, 'togglePlay'])
                Z([3, 'play-btn'])
                Z([3, '#333'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlaying']
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z([3, '48rpx'])
                Z([3, 'play-info'])
                Z([3, 'duration'])
                Z([a, [
                        [7],
                        [3, 'currentTime']
                    ],
                    [3, ' / '],
                    [
                        [7],
                        [3, 'totalTime']
                    ]
                ])
                Z([3, 'action-buttons'])
                Z([3, 'toggleSettingPanel'])
                Z([3, 'action-btn'])
                Z([3, '#999'])
                Z([3, 'setting-o'])
                Z([3, '32rpx'])
                Z([3, 'action-text'])
                Z([3, '设置'])
                Z([3, 'favHandle'])
                Z(z[34])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isFavorite']
                    ],
                    [1, '#ff6b6b'],
                    [1, '#999']
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'favId']
                    ],
                    [1, 'star'],
                    [1, 'star-o']
                ])
                Z(z[37])
                Z(z[38])
                Z([3, '收藏'])
                Z([3, 'reset-btn'])
                Z([3, 'share'])
                Z(z[34])
                Z(z[35])
                Z([3, 'share-o'])
                Z(z[37])
                Z(z[38])
                Z([3, '分享'])
                Z(z[33])
                Z(z[33])
                Z([3, '取消'])
                Z([
                    [7],
                    [3, 'showSettingPanel']
                ])
                Z([3, '播放设置'])
                Z([3, 'setting-container'])
                Z([3, 'setting-item'])
                Z([3, 'desc'])
                Z([3, '循环播放'])
                Z([3, 'onChange'])
                Z([
                    [7],
                    [3, 'circlePlay']
                ])
                Z([3, 'circlePlay'])
                Z(z[28])
                Z(z[61])
                Z(z[62])
                Z([3, '自动播放'])
                Z([3, 'color:#aaa;'])
                Z([3, '进入页面即播放'])
                Z(z[64])
                Z([
                    [7],
                    [3, 'autoPlay']
                ])
                Z([3, 'autoPlay'])
                Z(z[28])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
        var x = ['./components/annotated-text-voice/index.wxml', './pages/voice/detail/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_1_1()
            var oRF = _n('view')
            _rz(z, oRF, 'class', 0, e, s, gg)
            var oTF = _n('view')
            _rz(z, oTF, 'class', 1, e, s, gg)
            var fUF = _v()
            _(oTF, fUF)
            var cVF = function(oXF, hWF, cYF, gg) {
                var l1F = _n('view')
                _rz(z, l1F, 'class', 4, oXF, hWF, gg)
                var a2F = _n('view')
                _rz(z, a2F, 'class', 5, oXF, hWF, gg)
                var t3F = _oz(z, 6, oXF, hWF, gg)
                _(a2F, t3F)
                _(l1F, a2F)
                var e4F = _n('view')
                _rz(z, e4F, 'class', 7, oXF, hWF, gg)
                var b5F = _oz(z, 8, oXF, hWF, gg)
                _(e4F, b5F)
                _(l1F, e4F)
                _(cYF, l1F)
                return cYF
            }
            fUF.wxXCkey = 2
            _2z(z, 3, cVF, e, s, gg, fUF, 'word', 'index', '')
            _(oRF, oTF)
            var xSF = _v()
            _(oRF, xSF)
            if (_oz(z, 9, e, s, gg)) {
                xSF.wxVkey = 1
                var o6F = _n('view')
                _rz(z, o6F, 'class', 10, e, s, gg)
                var x7F = _oz(z, 11, e, s, gg)
                _(o6F, x7F)
                _(xSF, o6F)
            }
            xSF.wxXCkey = 1
            _(r, oRF)
            var o8F = _oz(z, 12, e, s, gg)
            _(r, o8F)
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
            var z = gz$gwx_XC_1_2()
            var oBG = _n('van-sticky')
            var cCG = _mz(z, 'van-nav-bar', ['back', -1, 'leftArrow', -1, 'bind:click-left', 0, 'border', 1, 'customClass', 1, 'customStyle', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(oBG, cCG)
            _(r, oBG)
            var c0F = _v()
            _(r, c0F)
            if (_oz(z, 6, e, s, gg)) {
                c0F.wxVkey = 1
                var oDG = _n('view')
                _rz(z, oDG, 'class', 7, e, s, gg)
                var lEG = _n('view')
                _rz(z, lEG, 'class', 8, e, s, gg)
                var aFG = _n('view')
                _rz(z, aFG, 'class', 9, e, s, gg)
                var tGG = _v()
                _(aFG, tGG)
                var eHG = function(oJG, bIG, xKG, gg) {
                    var fMG = _mz(z, 'view', ['class', 14, 'data-row', 1], [], oJG, bIG, gg)
                    var cNG = _v()
                    _(fMG, cNG)
                    var hOG = function(cQG, oPG, oRG, gg) {
                        var aTG = _mz(z, 'annotated-text', ['item', 19, 'pinyin', 1], [], cQG, oPG, gg)
                        _(oRG, aTG)
                        return oRG
                    }
                    cNG.wxXCkey = 4
                    _2z(z, 17, hOG, oJG, bIG, gg, cNG, 'item', 'col', 'col')
                    _(xKG, fMG)
                    return xKG
                }
                tGG.wxXCkey = 4
                _2z(z, 12, eHG, e, s, gg, tGG, 'line', 'row', 'row')
                _(lEG, aFG)
                _(oDG, lEG)
                _(c0F, oDG)
            }
            var hAG = _v()
            _(r, hAG)
            if (_oz(z, 21, e, s, gg)) {
                hAG.wxVkey = 1
                var tUG = _n('view')
                _rz(z, tUG, 'class', 22, e, s, gg)
                var eVG = _n('view')
                _rz(z, eVG, 'class', 23, e, s, gg)
                var bWG = _mz(z, 'view', ['bind:tap', 24, 'class', 1], [], e, s, gg)
                var oXG = _mz(z, 'van-icon', ['color', 26, 'name', 1, 'size', 2], [], e, s, gg)
                _(bWG, oXG)
                _(eVG, bWG)
                var xYG = _n('view')
                _rz(z, xYG, 'class', 29, e, s, gg)
                var oZG = _n('view')
                _rz(z, oZG, 'class', 30, e, s, gg)
                var f1G = _oz(z, 31, e, s, gg)
                _(oZG, f1G)
                _(xYG, oZG)
                _(eVG, xYG)
                _(tUG, eVG)
                var c2G = _n('view')
                _rz(z, c2G, 'class', 32, e, s, gg)
                var h3G = _mz(z, 'view', ['bind:tap', 33, 'class', 1], [], e, s, gg)
                var o4G = _mz(z, 'van-icon', ['color', 35, 'name', 1, 'size', 2], [], e, s, gg)
                _(h3G, o4G)
                var c5G = _n('text')
                _rz(z, c5G, 'class', 38, e, s, gg)
                var o6G = _oz(z, 39, e, s, gg)
                _(c5G, o6G)
                _(h3G, c5G)
                _(c2G, h3G)
                var l7G = _mz(z, 'view', ['bind:tap', 40, 'class', 1], [], e, s, gg)
                var a8G = _mz(z, 'van-icon', ['color', 42, 'name', 1, 'size', 2], [], e, s, gg)
                _(l7G, a8G)
                var t9G = _n('text')
                _rz(z, t9G, 'class', 45, e, s, gg)
                var e0G = _oz(z, 46, e, s, gg)
                _(t9G, e0G)
                _(l7G, t9G)
                _(c2G, l7G)
                var bAH = _mz(z, 'button', ['class', 47, 'openType', 1], [], e, s, gg)
                var oBH = _n('view')
                _rz(z, oBH, 'class', 49, e, s, gg)
                var xCH = _mz(z, 'van-icon', ['color', 50, 'name', 1, 'size', 2], [], e, s, gg)
                _(oBH, xCH)
                var oDH = _n('text')
                _rz(z, oDH, 'class', 53, e, s, gg)
                var fEH = _oz(z, 54, e, s, gg)
                _(oDH, fEH)
                _(oBH, oDH)
                _(bAH, oBH)
                _(c2G, bAH)
                _(tUG, c2G)
                _(hAG, tUG)
            }
            var cFH = _mz(z, 'van-action-sheet', ['bind:cancel', 55, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var hGH = _n('view')
            _rz(z, hGH, 'class', 60, e, s, gg)
            var oHH = _n('view')
            _rz(z, oHH, 'class', 61, e, s, gg)
            var cIH = _n('view')
            _rz(z, cIH, 'class', 62, e, s, gg)
            var oJH = _n('text')
            var lKH = _oz(z, 63, e, s, gg)
            _(oJH, lKH)
            _(cIH, oJH)
            var aLH = _n('text')
            _(cIH, aLH)
            _(oHH, cIH)
            var tMH = _mz(z, 'van-switch', ['bind:change', 64, 'checked', 1, 'data-name', 2, 'size', 3], [], e, s, gg)
            _(oHH, tMH)
            _(hGH, oHH)
            var eNH = _n('view')
            _rz(z, eNH, 'class', 68, e, s, gg)
            var bOH = _n('view')
            _rz(z, bOH, 'class', 69, e, s, gg)
            var oPH = _n('text')
            var xQH = _oz(z, 70, e, s, gg)
            _(oPH, xQH)
            _(bOH, oPH)
            var oRH = _n('text')
            _rz(z, oRH, 'style', 71, e, s, gg)
            var fSH = _oz(z, 72, e, s, gg)
            _(oRH, fSH)
            _(bOH, oRH)
            _(eNH, bOH)
            var cTH = _mz(z, 'van-switch', ['bind:change', 73, 'checked', 1, 'data-name', 2, 'size', 3], [], e, s, gg)
            _(eNH, cTH)
            _(hGH, eNH)
            _(cFH, hGH)
            _(r, cFH)
            c0F.wxXCkey = 1
            c0F.wxXCkey = 3
            hAG.wxXCkey = 1
            hAG.wxXCkey = 3
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_1";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/annotated-text-voice/index.wxml'] = [$gwx_XC_1, './components/annotated-text-voice/index.wxml'];
else __wxAppCode__['components/annotated-text-voice/index.wxml'] = $gwx_XC_1('./components/annotated-text-voice/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/voice/detail/index.wxml'] = [$gwx_XC_1, './pages/voice/detail/index.wxml'];
else __wxAppCode__['pages/voice/detail/index.wxml'] = $gwx_XC_1('./pages/voice/detail/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/annotated-text-voice/index.wxss'] = setCssToHead([".", [1], "annotated-container{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-direction:column;flex-direction:column;vertical-align:top}\n.", [1], "annotated-word{font-weight:400;line-height:1.5;padding-bottom:", [0, 0], ";text-align:center;width:85%}\n.", [1], "annotated-word-underline{border-bottom:", [0, 1], " dashed #aaa}\n.", [1], "annotation{color:#40a798;font-size:", [0, 28], ";font-weight:350;line-height:1.6;margin-bottom:", [0, 20], "}\n.", [1], "word-pinyin-container{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.", [1], "border-bottom{border-bottom:1px solid #40a798}\n.", [1], "token{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;margin:0 ", [0, 5], "}\n.", [1], "word-container{-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "pinyin,.", [1], "word-container{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;line-height:1.2}\n.", [1], "pinyin{font-family:Inter,Roboto,Helvetica Neue,Arial,sans-serif;font-size:", [0, 25], ";font-weight:300;height:", [0, 44], ";opacity:.8;padding-left:", [0, 5], ";padding-right:", [0, 5], "}\n.", [1], "pinyin-initial{color:#b37a3c;-webkit-justify-content:center;justify-content:center}\n.", [1], "pinyin-final,.", [1], "pinyin-initial{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%}\n.", [1], "pinyin-final{color:#0089b6}\n.", [1], "pinyin-final--with-initial{margin-left:", [0, 0], "}\n.", [1], "tone-wrapper{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;position:relative}\n.", [1], "tone-connector,.", [1], "tone-wrapper--with-text{margin-left:", [0, 0], "}\n.", [1], "tone-connector{-webkit-align-self:flex-end;align-self:flex-end;background-color:#d8524e;border-radius:", [0, 999], ";height:", [0, 2], ";margin-right:", [0, 0], ";opacity:.8;-webkit-transform-origin:left center;transform-origin:left center;width:", [0, 10], "}\n.", [1], "tone-connector-1{-webkit-transform:translateY(", [0, -28], ") rotate(0deg);transform:translateY(", [0, -28], ") rotate(0deg)}\n.", [1], "tone-1{-webkit-transform:translateY(", [0, -8], ");transform:translateY(", [0, -8], ")}\n.", [1], "tone-connector-2{-webkit-transform:translateY(", [0, -20], ") rotate(-25deg);transform:translateY(", [0, -20], ") rotate(-25deg)}\n.", [1], "tone-2{-webkit-transform:translateY(", [0, -6], ");transform:translateY(", [0, -6], ")}\n.", [1], "tone-connector-3{-webkit-transform:translateY(", [0, -20], ") rotate(0deg);transform:translateY(", [0, -20], ") rotate(0deg)}\n.", [1], "tone-connector-4{-webkit-transform:translateY(", [0, -12], ") rotate(28deg);transform:translateY(", [0, -12], ") rotate(28deg)}\n.", [1], "tone-4{-webkit-transform:translateY(", [0, 8], ");transform:translateY(", [0, 8], ")}\n.", [1], "tone-connector-5{-webkit-transform:translateY(", [0, -8], ") rotate(-18deg);transform:translateY(", [0, -8], ") rotate(-18deg)}\n.", [1], "tone-connector-6{-webkit-transform:translateY(", [0, -12], ");transform:translateY(", [0, -12], ")}\n.", [1], "tone-6{-webkit-transform:translateY(", [0, 8], ");transform:translateY(", [0, 8], ")}\n.", [1], "tone{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;line-height:1;margin-left:", [0, 0], ";min-height:", [0, 44], "}\n.", [1], "tone-number{color:#d8524e;font-size:", [0, 24], ";line-height:1;-webkit-transform:translateY(", [0, -8], ");transform:translateY(", [0, -8], ")}\n.", [1], "pinyin-raw{color:#666;font-weight:300}\n.", [1], "punctuation{-webkit-align-items:flex-end;align-items:flex-end;color:#2c2c2c;display:-webkit-flex;display:flex;font-size:", [0, 32], ";line-height:1.2;padding-left:", [0, 4], ";padding-right:", [0, 4], "}\n.", [1], "punctuation-prefix{margin-right:", [0, 2], "}\n.", [1], "punctuation-prefix,.", [1], "punctuation-suffix{-webkit-transform:translateY(", [0, -20], ");transform:translateY(", [0, -20], ")}\n.", [1], "punctuation-suffix{margin-left:", [0, 2], "}\n", ], undefined, {
        path: "./components/annotated-text-voice/index.wxss"
    });
    __wxAppCode__['pages/voice/detail/index.wxss'] = setCssToHead(["body{background-color:#f8f9fa;height:auto}\n.", [1], "container{box-sizing:border-box;margin-bottom:50%;min-height:100vh;padding:", [0, 40], " ", [0, 0], "}\n.", [1], "article{margin-bottom:", [0, 40], ";padding:", [0, 48], " ", [0, 0], "}\n.", [1], "content{color:#1a1a1a;line-height:1.8}\n.", [1], "paragraph{border-left:", [0, 4], " solid transparent;color:#2c2c2c;font-family:\x22Source Han Serif CN\x22,serif;font-size:", [0, 44], ";font-weight:400;letter-spacing:", [0, 2], ";line-height:2.2;margin-bottom:", [0, 48], ";padding:", [0, 20], ";position:relative;text-align:left;transition:all .3s ease}\n.", [1], "paragraph:last-child{margin-bottom:0}\n.", [1], "paragraph:not(:last-child)::after{background:linear-gradient(90deg,transparent,#e0e0e0,transparent);bottom:", [0, -24], ";content:\x22\x22;height:", [0, 1], ";left:0;position:absolute;right:0}\n.", [1], "active{background:rgba(0,0,0,.05);border-left:", [0, 4], " solid #333;box-shadow:0 ", [0, 2], " ", [0, 8], " rgba(0,0,0,.06);color:#000;font-weight:500}\n.", [1], "bottom-player-bar{background:#fff;border-top:", [0, 1], " solid #f0f0f0;bottom:0;box-shadow:0 ", [0, -4], " ", [0, 16], " rgba(0,0,0,.08);-webkit-justify-content:space-between;justify-content:space-between;left:0;padding:", [0, 24], " ", [0, 32], ";position:fixed;right:0;z-index:100}\n.", [1], "bottom-player-bar,.", [1], "player-controls{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "player-controls{-webkit-flex:1;flex:1;gap:", [0, 24], "}\n.", [1], "play-btn{-webkit-align-items:center;align-items:center;background:#f8f9fa;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;transition:all .3s ease;width:", [0, 80], "}\n.", [1], "play-btn:active{background:#e9ecef;-webkit-transform:scale(.95);transform:scale(.95)}\n.", [1], "play-info{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "play-count,.", [1], "play-info{display:-webkit-flex;display:flex;gap:", [0, 8], "}\n.", [1], "play-count{-webkit-align-items:center;align-items:center}\n.", [1], "play-count,.", [1], "play-count wx-text{color:#999;font-size:", [0, 24], "}\n.", [1], "duration{color:#333;font-size:", [0, 28], ";font-weight:500}\n.", [1], "action-buttons{gap:", [0, 32], "}\n.", [1], "action-btn,.", [1], "action-buttons{display:-webkit-flex;display:flex}\n.", [1], "action-btn{-webkit-align-items:center;align-items:center;border-radius:", [0, 8], ";-webkit-flex-direction:column;flex-direction:column;gap:", [0, 10], ";padding:", [0, 8], ";transition:all .3s ease}\n.", [1], "action-btn:active{background:#f8f9fa;-webkit-transform:scale(.95);transform:scale(.95)}\n.", [1], "action-text{color:#666;font-size:", [0, 20], "}\n.", [1], "reset-btn{background-color:initial;border-radius:0;line-height:inherit;margin:0;padding:0}\n.", [1], "reset-btn::after{border:none}\n.", [1], "setting-container{padding:", [0, 20], "}\n.", [1], "setting-item{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #efefef;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:", [0, 20], ";padding-top:", [0, 20], "}\n.", [1], "setting-item .", [1], "desc{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "setting-item .", [1], "desc wx-text:first-child{font-size:", [0, 30], ";font-weight:700}\n.", [1], "setting-item .", [1], "desc wx-text:last-child{font-size:", [0, 24], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/voice/detail/index.wxss:1:2834)", {
        path: "./pages/voice/detail/index.wxss"
    });
}
} catch (e) {}
try {
$gwx_XC_12 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];

        function gz$gwx_XC_12_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([a, [3, 'player-bar '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'audioSrc']
                        ],
                        [1, ''],
                        [1, 'player-bar--disabled']
                    ]
                ])
                Z([3, 'player-bar__body'])
                Z([3, 'player-bar__top'])
                Z([3, 'player-bar__title'])
                Z([a, [
                    [2, '||'],
                    [
                        [7],
                        [3, 'title']
                    ],
                    [1, '音频素材']
                ]])
                Z([3, 'player-bar__actions'])
                Z([3, 'onFavoriteTap'])
                Z([3, 'player-bar__action'])
                Z([3, '#1f2937'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isFavorite']
                    ],
                    [1, 'like'],
                    [1, 'like-o']
                ])
                Z([3, '20px'])
                Z([3, 'onSettingTap'])
                Z(z[7])
                Z(z[8])
                Z([3, 'setting-o'])
                Z(z[10])
                Z([3, 'onPlayTap'])
                Z([a, [3, 'player-bar__button '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isPlaying']
                        ],
                        [1, 'player-bar__button--active'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'audioSrc']
                        ],
                        [1, ''],
                        [1, 'player-bar__button--disabled']
                    ]
                ])
                Z([3, '#ffffff'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlaying']
                    ],
                    [1, 'pause'],
                    [1, 'play']
                ])
                Z([3, '24px'])
                Z([
                    [7],
                    [3, 'audioSrc']
                ])
                Z([3, 'player-bar__progress-block'])
                Z([3, 'player-bar__slider-row'])
                Z([3, '#155eef'])
                Z([3, '6rpx'])
                Z([3, 'onProgressChange'])
                Z([3, 'onProgressDrag'])
                Z([3, 'onProgressDragEnd'])
                Z([3, 'onProgressDragStart'])
                Z([3, 'player-bar__slider'])
                Z([3, 'rgba(148, 163, 184, 0.26)'])
                Z([3, '100'])
                Z([3, '0'])
                Z([3, '0.1'])
                Z([
                    [7],
                    [3, 'progressValue']
                ])
                Z([3, 'player-bar__time-row'])
                Z([3, 'player-bar__time'])
                Z([a, [
                    [7],
                    [3, 'currentTimeLabel']
                ]])
                Z([3, 'player-bar__time-center'])
                Z([
                    [7],
                    [3, 'paragraphPlaybackLabel']
                ])
                Z([3, 'onStopLoopTap'])
                Z([3, 'player-bar__loop-progress'])
                Z([3, 'player-bar__loop-progress-text'])
                Z([a, [
                    [7],
                    [3, 'paragraphPlaybackLabel']
                ]])
                Z([3, 'player-bar__time player-bar__time--end'])
                Z([a, [
                    [7],
                    [3, 'durationLabel']
                ]])
                Z([
                    [7],
                    [3, 'episodeLoading']
                ])
                Z([3, 'player-bar__desc'])
                Z([3, '音频加载中...'])
                Z([
                    [7],
                    [3, 'loadError']
                ])
                Z(z[48])
                Z([a, [
                    [7],
                    [3, 'loadError']
                ]])
                Z(z[48])
                Z([3, '暂无可播放音频'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }

        function gz$gwx_XC_12_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClose'])
                Z([3, 'background: transparent;'])
                Z([3, 'right'])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([1, 10000])
                Z([3, 'episode-popup'])
                Z([3, 'episode-popup__header'])
                Z([3, 'episode-popup__title'])
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'courseInfo']
                        ],
                        [
                            [6],
                            [
                                [7],
                                [3, 'courseInfo']
                            ],
                            [3, 'title']
                        ]
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'courseInfo']
                        ],
                        [3, 'title']
                    ],
                    [1, '所属合集']
                ]])
                Z([3, 'episode-popup__subtitle'])
                Z([a, [
                    [2, '&&'],
                    [
                        [7],
                        [3, 'courseInfo']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'courseInfo']
                        ],
                        [3, 'subtitle']
                    ]
                ]])
                Z([3, 'episode-popup__count'])
                Z([a, [3, '共 '],
                    [
                        [6],
                        [
                            [7],
                            [3, 'episodes']
                        ],
                        [3, 'length']
                    ],
                    [3, ' 条']
                ])
                Z([3, 'episode-popup__list'])
                Z([3, 'index'])
                Z([3, 'episode'])
                Z([
                    [7],
                    [3, 'episodes']
                ])
                Z([3, 'id'])
                Z([3, 'onSelect'])
                Z([a, [3, 'episode-card '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'episode']
                                ],
                                [3, 'id']
                            ],
                            [
                                [7],
                                [3, 'activeEpisodeId']
                            ]
                        ],
                        [1, 'episode-card--active'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'id']
                ])
                Z([3, 'episode-card__title'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'episode']
                        ],
                        [3, 'title']
                    ],
                    [
                        [2, '+'],
                        [1, '记录'],
                        [
                            [2, '+'],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [1, 1]
                        ]
                    ]
                ]])
                Z([3, 'episode-card__meta'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'displayDuration']
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'displayDuration']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'episode']
                    ],
                    [3, 'isAccessFree']
                ])
                Z([3, 'episode-card__badge'])
                Z([3, '免费'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2
        }

        function gz$gwx_XC_12_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_3) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_3
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'onClick'])
                Z([a, [3, 'custom-class '],
                    [
                        [12],
                        [
                            [6],
                            [
                                [7],
                                [3, 'utils']
                            ],
                            [3, 'bem']
                        ],
                        [
                            [5],
                            [
                                [5],
                                [1, 'slider']
                            ],
                            [
                                [9],
                                [
                                    [8], 'disabled', [
                                        [7],
                                        [3, 'disabled']
                                    ]
                                ],
                                [
                                    [8], 'vertical', [
                                        [7],
                                        [3, 'vertical']
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'wrapperStyle']
                ])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [1, 'slider__bar']
                    ]
                ])
                Z([a, [
                        [7],
                        [3, 'barStyle']
                    ],
                    [3, ';'],
                    [
                        [12],
                        [
                            [7],
                            [3, 'style']
                        ],
                        [
                            [5],
                            [
                                [8], 'backgroundColor', [
                                    [7],
                                    [3, 'activeColor']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'range']
                ])
                Z([3, 'onTouchEnd'])
                Z(z[6])
                Z([3, 'onTouchStart'])
                Z([3, 'onTouchMove'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [1, 'slider__button-wrapper-left']
                    ]
                ])
                Z([1, 0])
                Z([
                    [7],
                    [3, 'useButtonSlot']
                ])
                Z([3, 'left-button'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [1, 'slider__button']
                    ]
                ])
                Z(z[5])
                Z(z[6])
                Z(z[6])
                Z(z[8])
                Z(z[9])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [1, 'slider__button-wrapper-right']
                    ]
                ])
                Z([1, 1])
                Z(z[12])
                Z([3, 'right-button'])
                Z(z[14])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'range']
                    ]
                ])
                Z(z[6])
                Z(z[6])
                Z(z[8])
                Z(z[9])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'utils']
                        ],
                        [3, 'bem']
                    ],
                    [
                        [5],
                        [1, 'slider__button-wrapper']
                    ]
                ])
                Z(z[12])
                Z([3, 'button'])
                Z(z[14])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_3
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./components/audio-player-bar/index.wxml', './components/episode-drawer/index.wxml', './miniprogram_npm/@vant/weapp/slider/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
            var cWO = _n('view')
            _rz(z, cWO, 'class', 0, e, s, gg)
            var oXO = _n('view')
            _rz(z, oXO, 'class', 1, e, s, gg)
            var aZO = _n('view')
            _rz(z, aZO, 'class', 2, e, s, gg)
            var t1O = _n('text')
            _rz(z, t1O, 'class', 3, e, s, gg)
            var e2O = _oz(z, 4, e, s, gg)
            _(t1O, e2O)
            _(aZO, t1O)
            var b3O = _n('view')
            _rz(z, b3O, 'class', 5, e, s, gg)
            var o4O = _mz(z, 'view', ['bindtap', 6, 'class', 1], [], e, s, gg)
            var x5O = _mz(z, 'van-icon', ['color', 8, 'name', 1, 'size', 2], [], e, s, gg)
            _(o4O, x5O)
            _(b3O, o4O)
            var o6O = _mz(z, 'view', ['bindtap', 11, 'class', 1], [], e, s, gg)
            var f7O = _mz(z, 'van-icon', ['color', 13, 'name', 1, 'size', 2], [], e, s, gg)
            _(o6O, f7O)
            _(b3O, o6O)
            var c8O = _mz(z, 'view', ['bindtap', 16, 'class', 1], [], e, s, gg)
            var h9O = _mz(z, 'van-icon', ['color', 18, 'name', 1, 'size', 2], [], e, s, gg)
            _(c8O, h9O)
            _(b3O, c8O)
            _(aZO, b3O)
            _(oXO, aZO)
            var lYO = _v()
            _(oXO, lYO)
            if (_oz(z, 21, e, s, gg)) {
                lYO.wxVkey = 1
                var o0O = _n('view')
                _rz(z, o0O, 'class', 22, e, s, gg)
                var cAP = _n('view')
                _rz(z, cAP, 'class', 23, e, s, gg)
                var oBP = _mz(z, 'van-slider', ['activeColor', 24, 'barHeight', 1, 'bind:change', 2, 'bind:drag', 3, 'bind:drag-end', 4, 'bind:drag-start', 5, 'customClass', 6, 'inactiveColor', 7, 'max', 8, 'min', 9, 'step', 10, 'value', 11], [], e, s, gg)
                _(cAP, oBP)
                _(o0O, cAP)
                var lCP = _n('view')
                _rz(z, lCP, 'class', 36, e, s, gg)
                var aDP = _n('text')
                _rz(z, aDP, 'class', 37, e, s, gg)
                var tEP = _oz(z, 38, e, s, gg)
                _(aDP, tEP)
                _(lCP, aDP)
                var eFP = _n('view')
                _rz(z, eFP, 'class', 39, e, s, gg)
                var bGP = _v()
                _(eFP, bGP)
                if (_oz(z, 40, e, s, gg)) {
                    bGP.wxVkey = 1
                    var oHP = _mz(z, 'view', ['bindtap', 41, 'class', 1], [], e, s, gg)
                    var xIP = _n('text')
                    _rz(z, xIP, 'class', 43, e, s, gg)
                    var oJP = _oz(z, 44, e, s, gg)
                    _(xIP, oJP)
                    _(oHP, xIP)
                    _(bGP, oHP)
                }
                bGP.wxXCkey = 1
                _(lCP, eFP)
                var fKP = _n('text')
                _rz(z, fKP, 'class', 45, e, s, gg)
                var cLP = _oz(z, 46, e, s, gg)
                _(fKP, cLP)
                _(lCP, fKP)
                _(o0O, lCP)
                _(lYO, o0O)
            } else if (_oz(z, 47, e, s, gg)) {
                lYO.wxVkey = 2
                var hMP = _n('text')
                _rz(z, hMP, 'class', 48, e, s, gg)
                var oNP = _oz(z, 49, e, s, gg)
                _(hMP, oNP)
                _(lYO, hMP)
            } else if (_oz(z, 50, e, s, gg)) {
                lYO.wxVkey = 3
                var cOP = _n('text')
                _rz(z, cOP, 'class', 51, e, s, gg)
                var oPP = _oz(z, 52, e, s, gg)
                _(cOP, oPP)
                _(lYO, cOP)
            } else {
                lYO.wxVkey = 4
                var lQP = _n('text')
                _rz(z, lQP, 'class', 53, e, s, gg)
                var aRP = _oz(z, 54, e, s, gg)
                _(lQP, aRP)
                _(lYO, lQP)
            }
            lYO.wxXCkey = 1
            lYO.wxXCkey = 3
            _(cWO, oXO)
            _(r, cWO)
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
            var z = gz$gwx_XC_12_2()
            var eTP = _mz(z, 'van-popup', ['safeAreaInsetRight', -1, 'bind:close', 0, 'customStyle', 1, 'position', 1, 'show', 2, 'zIndex', 3], [], e, s, gg)
            var bUP = _n('view')
            _rz(z, bUP, 'class', 5, e, s, gg)
            var oVP = _n('view')
            _rz(z, oVP, 'class', 6, e, s, gg)
            var xWP = _n('view')
            var oXP = _n('text')
            _rz(z, oXP, 'class', 7, e, s, gg)
            var fYP = _oz(z, 8, e, s, gg)
            _(oXP, fYP)
            _(xWP, oXP)
            var cZP = _n('text')
            _rz(z, cZP, 'class', 9, e, s, gg)
            var h1P = _oz(z, 10, e, s, gg)
            _(cZP, h1P)
            _(xWP, cZP)
            _(oVP, xWP)
            var o2P = _n('text')
            _rz(z, o2P, 'class', 11, e, s, gg)
            var c3P = _oz(z, 12, e, s, gg)
            _(o2P, c3P)
            _(oVP, o2P)
            _(bUP, oVP)
            var o4P = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 13], [], e, s, gg)
            var l5P = _v()
            _(o4P, l5P)
            var a6P = function(e8P, t7P, b9P, gg) {
                var xAQ = _mz(z, 'view', ['bindtap', 18, 'class', 1, 'data-uuid', 2], [], e8P, t7P, gg)
                var oBQ = _n('view')
                _rz(z, oBQ, 'class', 21, e8P, t7P, gg)
                var fCQ = _oz(z, 22, e8P, t7P, gg)
                _(oBQ, fCQ)
                _(xAQ, oBQ)
                var cDQ = _n('view')
                _rz(z, cDQ, 'class', 23, e8P, t7P, gg)
                var hEQ = _v()
                _(cDQ, hEQ)
                if (_oz(z, 24, e8P, t7P, gg)) {
                    hEQ.wxVkey = 1
                    var cGQ = _n('text')
                    var oHQ = _oz(z, 25, e8P, t7P, gg)
                    _(cGQ, oHQ)
                    _(hEQ, cGQ)
                }
                var oFQ = _v()
                _(cDQ, oFQ)
                if (_oz(z, 26, e8P, t7P, gg)) {
                    oFQ.wxVkey = 1
                    var lIQ = _n('text')
                    _rz(z, lIQ, 'class', 27, e8P, t7P, gg)
                    var aJQ = _oz(z, 28, e8P, t7P, gg)
                    _(lIQ, aJQ)
                    _(oFQ, lIQ)
                }
                hEQ.wxXCkey = 1
                oFQ.wxXCkey = 1
                _(xAQ, cDQ)
                _(b9P, xAQ)
                return b9P
            }
            l5P.wxXCkey = 2
            _2z(z, 16, a6P, e, s, gg, l5P, 'episode', 'index', 'id')
            _(bUP, o4P)
            _(eTP, bUP)
            _(r, eTP)
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
            var z = gz$gwx_XC_12_3()
            var eLQ = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var bMQ = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
            var oNQ = _v()
            _(bMQ, oNQ)
            if (_oz(z, 5, e, s, gg)) {
                oNQ.wxVkey = 1
                var fQQ = _mz(z, 'view', ['bind:touchcancel', 6, 'bind:touchend', 1, 'bind:touchstart', 2, 'catch:touchmove', 3, 'class', 4, 'data-index', 5], [], e, s, gg)
                var cRQ = _v()
                _(fQQ, cRQ)
                if (_oz(z, 12, e, s, gg)) {
                    cRQ.wxVkey = 1
                    var hSQ = _n('slot')
                    _rz(z, hSQ, 'name', 13, e, s, gg)
                    _(cRQ, hSQ)
                } else {
                    cRQ.wxVkey = 2
                    var oTQ = _n('view')
                    _rz(z, oTQ, 'class', 14, e, s, gg)
                    _(cRQ, oTQ)
                }
                cRQ.wxXCkey = 1
                _(oNQ, fQQ)
            }
            var xOQ = _v()
            _(bMQ, xOQ)
            if (_oz(z, 15, e, s, gg)) {
                xOQ.wxVkey = 1
                var cUQ = _mz(z, 'view', ['bind:touchcancel', 16, 'bind:touchend', 1, 'bind:touchstart', 2, 'catch:touchmove', 3, 'class', 4, 'data-index', 5], [], e, s, gg)
                var oVQ = _v()
                _(cUQ, oVQ)
                if (_oz(z, 22, e, s, gg)) {
                    oVQ.wxVkey = 1
                    var lWQ = _n('slot')
                    _rz(z, lWQ, 'name', 23, e, s, gg)
                    _(oVQ, lWQ)
                } else {
                    oVQ.wxVkey = 2
                    var aXQ = _n('view')
                    _rz(z, aXQ, 'class', 24, e, s, gg)
                    _(oVQ, aXQ)
                }
                oVQ.wxXCkey = 1
                _(xOQ, cUQ)
            }
            var oPQ = _v()
            _(bMQ, oPQ)
            if (_oz(z, 25, e, s, gg)) {
                oPQ.wxVkey = 1
                var tYQ = _mz(z, 'view', ['bind:touchcancel', 26, 'bind:touchend', 1, 'bind:touchstart', 2, 'catch:touchmove', 3, 'class', 4], [], e, s, gg)
                var eZQ = _v()
                _(tYQ, eZQ)
                if (_oz(z, 31, e, s, gg)) {
                    eZQ.wxVkey = 1
                    var b1Q = _n('slot')
                    _rz(z, b1Q, 'name', 32, e, s, gg)
                    _(eZQ, b1Q)
                } else {
                    eZQ.wxVkey = 2
                    var o2Q = _n('view')
                    _rz(z, o2Q, 'class', 33, e, s, gg)
                    _(eZQ, o2Q)
                }
                eZQ.wxXCkey = 1
                _(oPQ, tYQ)
            }
            oNQ.wxXCkey = 1
            xOQ.wxXCkey = 1
            oPQ.wxXCkey = 1
            _(eLQ, bMQ)
            _(r, eLQ)
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
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_12";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/audio-player-bar/index.wxml'] = [$gwx_XC_12, './components/audio-player-bar/index.wxml'];
else __wxAppCode__['components/audio-player-bar/index.wxml'] = $gwx_XC_12('./components/audio-player-bar/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/episode-drawer/index.wxml'] = [$gwx_XC_12, './components/episode-drawer/index.wxml'];
else __wxAppCode__['components/episode-drawer/index.wxml'] = $gwx_XC_12('./components/episode-drawer/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxml'] = [$gwx_XC_12, './miniprogram_npm/@vant/weapp/slider/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxml'] = $gwx_XC_12('./miniprogram_npm/@vant/weapp/slider/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/audio-player-bar/index.wxss'] = setCssToHead([".", [1], "player-bar{-webkit-backdrop-filter:blur(", [0, 18], ");backdrop-filter:blur(", [0, 18], ");background:hsla(0,0%,100%,.94);border-radius:", [0, 30], ";bottom:", [0, 36], ";bottom:calc(constant(safe-area-inset-bottom) + ", [0, 36], ");bottom:calc(env(safe-area-inset-bottom) + ", [0, 36], ");box-shadow:0 ", [0, 18], " ", [0, 44], " rgba(15,23,42,.18);display:block;left:", [0, 24], ";padding:", [0, 22], " ", [0, 18], " ", [0, 22], " ", [0, 20], ";position:fixed;right:", [0, 24], ";z-index:130}\n.", [1], "player-bar--disabled{opacity:.92}\n.", [1], "player-bar__body{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 14], ";min-width:0}\n.", [1], "player-bar__top{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 16], "}\n.", [1], "player-bar__title{color:#111827;-webkit-flex:1;flex:1;font-size:", [0, 30], ";font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "player-bar__actions{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;gap:", [0, 10], "}\n.", [1], "player-bar__action{background:rgba(226,232,240,.65);border-radius:", [0, 20], ";height:", [0, 68], ";width:", [0, 68], "}\n.", [1], "player-bar__action,.", [1], "player-bar__button{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "player-bar__button{background:linear-gradient(135deg,#0f766e,#155eef);border-radius:", [0, 28], ";box-shadow:0 ", [0, 12], " ", [0, 24], " rgba(21,94,239,.28);-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 92], ";width:", [0, 92], "}\n.", [1], "player-bar__button--active{background:linear-gradient(135deg,#0f766e,#0f9b8e)}\n.", [1], "player-bar__button--disabled{background:linear-gradient(135deg,#94a3b8,#cbd5e1);box-shadow:none}\n.", [1], "player-bar__progress-block{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:0;padding:0}\n.", [1], "player-bar__slider-row{padding:0 ", [0, 18], " ", [0, 24], "}\n.", [1], "player-bar__slider{box-sizing:border-box;width:100%}\n.", [1], "player-bar__time-row{-webkit-align-items:center;align-items:center;display:grid;gap:", [0, 16], ";grid-template-columns:1fr auto 1fr;min-height:", [0, 28], ";padding:0 ", [0, 18], "}\n.", [1], "player-bar__time{color:#7b8798;font-size:", [0, 20], ";line-height:", [0, 28], "}\n.", [1], "player-bar__time--end{justify-self:end}\n.", [1], "player-bar__time-center{display:-webkit-flex;display:flex;min-height:", [0, 38], ";min-width:0}\n.", [1], "player-bar__loop-progress,.", [1], "player-bar__time-center{-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}\n.", [1], "player-bar__loop-progress{background:hsla(48,97%,77%,.45);border-radius:", [0, 999], ";display:-webkit-inline-flex;display:inline-flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 38], ";padding:0 ", [0, 16], ";white-space:nowrap}\n.", [1], "player-bar__loop-progress-text{color:#b45309;font-size:", [0, 22], ";font-weight:600;line-height:1;white-space:nowrap}\n.", [1], "player-bar__desc{color:#667085;font-size:", [0, 23], ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n", ], undefined, {
        path: "./components/audio-player-bar/index.wxss"
    });
    __wxAppCode__['components/episode-drawer/index.wxss'] = setCssToHead([".", [1], "episode-popup{-webkit-backdrop-filter:blur(", [0, 12], ");backdrop-filter:blur(", [0, 12], ");background:hsla(0,0%,100%,.9);box-sizing:border-box;min-height:100vh;padding:", [0, 48], " ", [0, 32], ";width:70vw}\n.", [1], "episode-popup__header{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 24], "}\n.", [1], "episode-popup__title{color:#111827;font-size:", [0, 34], ";font-weight:600}\n.", [1], "episode-popup__subtitle{display:block;margin-top:", [0, 4], "}\n.", [1], "episode-popup__count,.", [1], "episode-popup__subtitle{color:#6b7280;font-size:", [0, 24], "}\n.", [1], "episode-popup__list{max-height:calc(100vh - ", [0, 180], ")}\n.", [1], "episode-card{background:hsla(0,0%,100%,.95);border:", [0, 1], " solid rgba(226,232,240,.9);border-radius:", [0, 18], ";box-shadow:0 ", [0, 4], " ", [0, 14], " rgba(15,23,42,.06);margin-bottom:", [0, 16], ";padding:", [0, 22], " ", [0, 28], ";transition:all .2s ease}\n.", [1], "episode-card--active{background:linear-gradient(135deg,rgba(89,126,247,.12),hsla(0,0%,100%,.9));border-color:rgba(89,126,247,.6);box-shadow:0 ", [0, 10], " ", [0, 20], " rgba(89,126,247,.25)}\n.", [1], "episode-card__title{color:#101828;font-size:", [0, 32], ";font-weight:600}\n.", [1], "episode-card__meta{color:#5b6472;display:-webkit-flex;display:flex;font-size:", [0, 24], ";gap:", [0, 16], ";margin-top:", [0, 12], "}\n.", [1], "episode-card__badge{background:rgba(72,201,145,.2);border-radius:", [0, 999], ";color:#118a4d;padding:", [0, 2], " ", [0, 10], "}\n", ], undefined, {
        path: "./components/episode-drawer/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-slider{background-color:var(--slider-inactive-background-color,#ebedf0);border-radius:999px;height:var(--slider-bar-height,2px);position:relative}\n.", [1], "van-slider:before{bottom:calc(var(--padding-xs, 8px)*-1);content:\x22\x22;left:0;position:absolute;right:0;top:calc(var(--padding-xs, 8px)*-1)}\n.", [1], "van-slider__bar{background-color:var(--slider-active-background-color,#1989fa);border-radius:inherit;height:100%;position:relative;transition:all .2s;width:100%}\n.", [1], "van-slider__button{background-color:var(--slider-button-background-color,#fff);border-radius:var(--slider-button-border-radius,50%);box-shadow:var(--slider-button-box-shadow,0 1px 2px rgba(0,0,0,.5));height:var(--slider-button-height,24px);width:var(--slider-button-width,24px)}\n.", [1], "van-slider__button-wrapper,.", [1], "van-slider__button-wrapper-right{position:absolute;right:0;top:50%;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}\n.", [1], "van-slider__button-wrapper-left{left:0;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}\n.", [1], "van-slider--disabled{opacity:var(--slider-disabled-opacity,.5)}\n.", [1], "van-slider--vertical{display:inline-block;height:100%;width:var(--slider-bar-height,2px)}\n.", [1], "van-slider--vertical .", [1], "van-slider__button-wrapper,.", [1], "van-slider--vertical .", [1], "van-slider__button-wrapper-right{bottom:0;right:50%;top:auto;-webkit-transform:translate3d(50%,50%,0);transform:translate3d(50%,50%,0)}\n.", [1], "van-slider--vertical .", [1], "van-slider__button-wrapper-left{left:auto;right:50%;top:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}\n.", [1], "van-slider--vertical:before{bottom:0;left:-8px;right:-8px;top:0}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/slider/index.wxss"
    });
}
} catch (e) {}
try {
$gwx_XC_23 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];

        function gz$gwx_XC_23_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'nav'])
                Z([3, 'container'])
                Z([a, [3, 'background:'],
                    [
                        [7],
                        [3, 'background']
                    ],
                    [3, ';']
                ])
                Z([3, 'title'])
                Z([a, [3, 'color:'],
                    [
                        [7],
                        [3, 'color']
                    ], z[2][3]
                ])
                Z([a, [
                    [7],
                    [3, 'title']
                ]])
                Z([3, 'logo'])
                Z([3, '../../images/logo.png'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_23 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_23 = true;
        var x = ['./components/card/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_23_1()
            var oTT = _mz(z, 'view', ['bind:tap', 0, 'class', 1, 'style', 1], [], e, s, gg)
            var fUT = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
            var cVT = _oz(z, 5, e, s, gg)
            _(fUT, cVT)
            _(oTT, fUT)
            var hWT = _mz(z, 'image', ['class', 6, 'src', 1], [], e, s, gg)
            _(oTT, hWT)
            _(r, oTT)
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
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_23";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_23();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/card/index.wxml'] = [$gwx_XC_23, './components/card/index.wxml'];
else __wxAppCode__['components/card/index.wxml'] = $gwx_XC_23('./components/card/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/card/index.wxss'] = setCssToHead([".", [1], "container{border-radius:10px;box-shadow:2px 2px 5px #dbdada;height:120px;position:relative;width:100%!important}\n.", [1], "title{color:#fff;font-size:20px;left:20px;top:20px}\n.", [1], "logo,.", [1], "title{position:absolute}\n.", [1], "logo{bottom:10px;height:50px;opacity:.7;right:10px;width:50px}\n", ], undefined, {
        path: "./components/card/index.wxss"
    });
}
} catch (e) {}
try {
$gwx_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];

        function gz$gwx_XC_34_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'discountDuration']
                ])
                Z([3, 'countdown'])
                Z([3, '#fff'])
                Z([3, 'underway'])
                Z([3, '24rpx'])
                Z([3, 'onChange'])
                Z([3, 'finished'])
                Z(z[0])
                Z([3, 'countdown-text'])
                Z([a, [
                        [7],
                        [3, 'desc']
                    ],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'timeData']
                            ],
                            [3, 'days']
                        ],
                        [
                            [2, '+'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'timeData']
                                ],
                                [3, 'days']
                            ],
                            [1, '天']
                        ],
                        [1, '']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'timeData']
                        ],
                        [3, 'hours']
                    ],
                    [3, '小时'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'timeData']
                        ],
                        [3, 'minutes']
                    ],
                    [3, '分'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'timeData']
                        ],
                        [3, 'seconds']
                    ],
                    [3, '秒']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
        }

        function gz$gwx_XC_34_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'van-count-down'])
                Z([
                    [7],
                    [3, 'useSlot']
                ])
                Z([a, [
                    [7],
                    [3, 'formattedTime']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_34 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_34 = true;
        var x = ['./components/count-down/index.wxml', './miniprogram_npm/@vant/weapp/count-down/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_34_1()
            var oFX = _v()
            _(r, oFX)
            if (_oz(z, 0, e, s, gg)) {
                oFX.wxVkey = 1
                var cGX = _n('view')
                _rz(z, cGX, 'class', 1, e, s, gg)
                var oHX = _mz(z, 'van-icon', ['color', 2, 'name', 1, 'size', 2], [], e, s, gg)
                _(cGX, oHX)
                var lIX = _mz(z, 'van-count-down', ['useSlot', -1, 'bind:change', 5, 'bind:finish', 1, 'time', 2], [], e, s, gg)
                var aJX = _n('text')
                _rz(z, aJX, 'class', 8, e, s, gg)
                var tKX = _oz(z, 9, e, s, gg)
                _(aJX, tKX)
                _(lIX, aJX)
                _(cGX, lIX)
                _(oFX, cGX)
            }
            oFX.wxXCkey = 1
            oFX.wxXCkey = 3
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
            var z = gz$gwx_XC_34_2()
            var bMX = _n('view')
            _rz(z, bMX, 'class', 0, e, s, gg)
            var oNX = _v()
            _(bMX, oNX)
            if (_oz(z, 1, e, s, gg)) {
                oNX.wxVkey = 1
                var xOX = _n('slot')
                _(oNX, xOX)
            } else {
                oNX.wxVkey = 2
                var oPX = _oz(z, 2, e, s, gg)
                _(oNX, oPX)
            }
            oNX.wxXCkey = 1
            _(r, bMX)
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_34";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/count-down/index.wxml'] = [$gwx_XC_34, './components/count-down/index.wxml'];
else __wxAppCode__['components/count-down/index.wxml'] = $gwx_XC_34('./components/count-down/index.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = [$gwx_XC_34, './miniprogram_npm/@vant/weapp/count-down/index.wxml'];
else __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = $gwx_XC_34('./miniprogram_npm/@vant/weapp/count-down/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['components/count-down/index.wxss'] = setCssToHead([".", [1], "countdown{-webkit-align-items:center;align-items:center;background:#ff6b6b;border-radius:", [0, 40], ";display:-webkit-flex;display:flex;gap:", [0, 8], ";margin-top:", [0, 20], ";padding:", [0, 8], " ", [0, 24], "}\n.", [1], "countdown-text{color:#fff;font-size:", [0, 24], "}\n", ], undefined, {
        path: "./components/count-down/index.wxss"
    });
    __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxss'] = setCssToHead([
        [2, "./miniprogram_npm/@vant/weapp/common/index.wxss"], ".", [1], "van-count-down{color:var(--count-down-text-color,#323233);font-size:var(--count-down-font-size,14px);line-height:var(--count-down-line-height,20px)}\n",
    ], undefined, {
        path: "./miniprogram_npm/@vant/weapp/count-down/index.wxss"
    });
}
} catch (e) {}
