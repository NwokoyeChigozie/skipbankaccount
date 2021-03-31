(function (a) {
    var i = {};

    function d(k, j) {
        return j * Math.floor(k / j)
    }

    function h(q, l, o, k) {
        if (typeof q.strftime == "function") {
            return q.strftime(l)
        }
        var u = function (w, r) {
            w = "" + w;
            r = "" + (r == null ? "0" : r);
            return w.length == 1 ? r + w : w
        };
        var j = [];
        var v = false;
        var t = q.getHours();
        var p = t < 12;
        if (o == null) {
            o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
        if (k == null) {
            k = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }
        var m;
        if (t > 12) {
            m = t - 12
        } else {
            if (t == 0) {
                m = 12
            } else {
                m = t
            }
        }
        for (var n = 0; n < l.length; ++n) {
            var s = l.charAt(n);
            if (v) {
                switch (s) {
                    case "a":
                        s = "" + k[q.getDay()];
                        break;
                    case "b":
                        s = "" + o[q.getMonth()];
                        break;
                    case "d":
                        s = u(q.getDate());
                        break;
                    case "e":
                        s = u(q.getDate(), " ");
                        break;
                    case "H":
                        s = u(t);
                        break;
                    case "I":
                        s = u(m);
                        break;
                    case "l":
                        s = u(m, " ");
                        break;
                    case "m":
                        s = u(q.getMonth() + 1);
                        break;
                    case "M":
                        s = u(q.getMinutes());
                        break;
                    case "S":
                        s = u(q.getSeconds());
                        break;
                    case "y":
                        s = u(q.getFullYear() % 100);
                        break;
                    case "Y":
                        s = "" + q.getFullYear();
                        break;
                    case "p":
                        s = (p) ? ("am") : ("pm");
                        break;
                    case "P":
                        s = (p) ? ("AM") : ("PM");
                        break;
                    case "w":
                        s = "" + q.getDay();
                        break
                }
                j.push(s);
                v = false
            } else {
                if (s == "%") {
                    v = true
                } else {
                    j.push(s)
                }
            }
        }
        return j.join("")
    }

    function g(n) {
        function j(q, p, o, r) {
            q[p] = function () {
                return o[r].apply(o, arguments)
            }
        }
        var l = {
            date: n
        };
        if (n.strftime != undefined) {
            j(l, "strftime", n, "strftime")
        }
        j(l, "getTime", n, "getTime");
        j(l, "setTime", n, "setTime");
        var k = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];
        for (var m = 0; m < k.length; m++) {
            j(l, "get" + k[m], n, "getUTC" + k[m]);
            j(l, "set" + k[m], n, "setUTC" + k[m])
        }
        return l
    }

    function c(k, j) {
        if (j.timezone == "browser") {
            return new Date(k)
        } else {
            if (!j.timezone || j.timezone == "utc") {
                return g(new Date(k))
            } else {
                if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
                    var l = new timezoneJS.Date();
                    l.setTimezone(j.timezone);
                    l.setTime(k);
                    return l
                } else {
                    return g(new Date(k))
                }
            }
        }
    }
    var b = {
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        year: 365.2425 * 24 * 60 * 60 * 1000
    };
    var e = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [0.25, "month"], [0.5, "month"], [1, "month"], [2, "month"], [3, "month"], [6, "month"], [1, "year"]];

    function f(j) {
        j.hooks.processDatapoints.push(function (m, k, l) {
            a.each(m.getAxes(), function (p, n) {
                var o = n.options;
                if (o.mode == "time") {
                    n.tickGenerator = function (w) {
                        var C = [],
                            B = c(w.min, o),
                            t = 0;
                        if (o.minTickSize != null) {
                            if (typeof o.tickSize == "number") {
                                t = o.tickSize
                            } else {
                                t = o.minTickSize[0] * b[o.minTickSize[1]]
                            }
                        }
                        for (var A = 0; A < e.length - 1; ++A) {
                            if (w.delta < (e[A][0] * b[e[A][1]] + e[A + 1][0] * b[e[A + 1][1]]) / 2 && e[A][0] * b[e[A][1]] >= t) {
                                break
                            }
                        }
                        var G = e[A][0];
                        var D = e[A][1];
                        if (D == "year") {
                            if (o.minTickSize != null && o.minTickSize[1] == "year") {
                                G = Math.floor(o.minTickSize[0])
                            } else {
                                var r = Math.pow(10, Math.floor(Math.log(w.delta / b.year) / Math.LN10));
                                var q = (w.delta / b.year) / r;
                                if (q < 1.5) {
                                    G = 1
                                } else {
                                    if (q < 3) {
                                        G = 2
                                    } else {
                                        if (q < 7.5) {
                                            G = 5
                                        } else {
                                            G = 10
                                        }
                                    }
                                }
                                G *= r
                            }
                            if (G < 1) {
                                G = 1
                            }
                        }
                        w.tickSize = o.tickSize || [G, D];
                        var z = w.tickSize[0];
                        D = w.tickSize[1];
                        var u = z * b[D];
                        if (D == "second") {
                            B.setSeconds(d(B.getSeconds(), z))
                        }
                        if (D == "minute") {
                            B.setMinutes(d(B.getMinutes(), z))
                        }
                        if (D == "hour") {
                            B.setHours(d(B.getHours(), z))
                        }
                        if (D == "month") {
                            B.setMonth(d(B.getMonth(), z))
                        }
                        if (D == "year") {
                            B.setFullYear(d(B.getFullYear(), z))
                        }
                        B.setMilliseconds(0);
                        if (u >= b.minute) {
                            B.setSeconds(0)
                        }
                        if (u >= b.hour) {
                            B.setMinutes(0)
                        }
                        if (u >= b.day) {
                            B.setHours(0)
                        }
                        if (u >= b.day * 4) {
                            B.setDate(1)
                        }
                        if (u >= b.year) {
                            B.setMonth(0)
                        }
                        var F = 0,
                            E = Number.NaN,
                            x;
                        do {
                            x = E;
                            E = B.getTime();
                            C.push(E);
                            if (D == "month") {
                                if (z < 1) {
                                    B.setDate(1);
                                    var s = B.getTime();
                                    B.setMonth(B.getMonth() + 1);
                                    var y = B.getTime();
                                    B.setTime(E + F * b.hour + (y - s) * z);
                                    F = B.getHours();
                                    B.setHours(0)
                                } else {
                                    B.setMonth(B.getMonth() + z)
                                }
                            } else {
                                if (D == "year") {
                                    B.setFullYear(B.getFullYear() + z)
                                } else {
                                    B.setTime(E + u)
                                }
                            }
                        } while (E < w.max && E != x);
                        return C
                    };
                    n.tickFormatter = function (r, w) {
                        var y = c(r, w.options);
                        if (o.timeformat != null) {
                            return h(y, o.timeformat, o.monthNames, o.dayNames)
                        }
                        var s = w.tickSize[0] * b[w.tickSize[1]];
                        var u = w.max - w.min;
                        var x = (o.twelveHourClock) ? " %p" : "";
                        var z = (o.twelveHourClock) ? "%I" : "%H";
                        if (s < b.minute) {
                            fmt = z + ":%M:%S" + x
                        } else {
                            if (s < b.day) {
                                if (u < 2 * b.day) {
                                    fmt = z + ":%M" + x
                                } else {
                                    fmt = "%b %d " + z + ":%M" + x
                                }
                            } else {
                                if (s < b.month) {
                                    fmt = "%b %d"
                                } else {
                                    if (s < b.year) {
                                        if (u < b.year) {
                                            fmt = "%b"
                                        } else {
                                            fmt = "%b %Y"
                                        }
                                    } else {
                                        fmt = "%Y"
                                    }
                                }
                            }
                        }
                        var q = h(y, fmt, o.monthNames, o.dayNames);
                        return q
                    }
                }
            })
        })
    }
    a.plot.plugins.push({
        init: f,
        options: i,
        name: "time",
        version: "1.0"
    })
})(jQuery);
