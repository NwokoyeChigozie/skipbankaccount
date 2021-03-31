/*! Copyright (c) 2021 Payoneer Inc. All Rights Reserved.
Licenses for open-source libraries can be found here: [../3rd-party-licenses.txt] */
(window.webpackJsonp = window.webpackJsonp || []).push([[282], [, , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return u
    }));
    var r = n(191);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {};
    ! function e(t) {
        if (t) {
            c[t.name] = i(i({}, t), {}, {
                path: t.pathname,
                childRoutes: void 0
            });
            var n = t.childRoutes;
            if (n)
                for (var r = 0; r < n.length; r++) e(n[r])
        }
    }(r.a);
    var u = i({}, c)
}, , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    })), n.d(t, "c", (function () {
        return c
    })), n.d(t, "d", (function () {
        return a
    })), n.d(t, "e", (function () {
        return u
    }));
    var r = "undefined" != typeof window && (0 === window.location.hash.indexOf("#/") || /MainPage\/[^.]+\.aspx/i.test(window.location.href)),
        o = {
            1: "en",
            2: "he",
            3: "ru",
            4: "zh-CN",
            5: "tr",
            6: "pt",
            7: "es",
            8: "hu",
            9: "fr",
            10: "fi",
            11: "el",
            12: "ms",
            13: "de",
            14: "ja",
            15: "ko",
            16: "pl",
            17: "zh-TW",
            18: "da",
            19: "ar",
            20: "it",
            21: "vi",
            22: "uk",
            23: "sv",
            24: "th",
            25: "id-ID",
            26: "nl",
            27: "no"
        },
        i = window.ClientLocalization ? window.ClientLocalization.GetCurrentLanguage().toString() : "",
        a = function () {
            return o[i] || "en"
        },
        c = function () {
            return i ? parseInt(i) : 1
        },
        u = function () {
            return "function" == typeof $ && $.payoneerDialog && $.payoneerDialog({
                type: "ajaxError",
                redirect: "/"
            }), {
                type: "LEGACY_SESSION_TIMEOUT"
            }
        };
    t.b = r
}, function (e, t, n) {
    "use strict";
    t.a = {}
}, function (e, t, n) {
    "use strict";
    var r = n(8),
        o = n(557),
        i = n.n(o),
        a = n(32),
        c = n(55),
        u = n(26),
        l = n(59),
        s = n(52);

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d() {
        return "/payer" === window["__base-href"]
    }
    var p = new(function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.onSuccess = this.onSuccess.bind(this), this.isReady = this.isReady.bind(this), this.isFirstLogin = !1, this.validateEmail = this.validateEmail.bind(this), this.IS_PAYER = this.IS_PAYER.bind(this), this.isPayer = d(), r.b && this.onSuccess("", window.customer || {})
        }
        var t, n, o;
        return t = e, (n = [{
            key: "isReady",
            value: function () {
                return !!this.customerId
            }
        }, {
            key: "validateEmail",
            value: function (e) {
                return t = e, (n = new i.a("SHA-256", "TEXT")).update(t), n.getHash("HEX") === this.emailHash;
                var t, n
            }
        }, {
            key: "IS_PAYER",
            value: function () {
                return this.isPayer && d()
            }
        }, {
            key: "rolledOutToNewMyAccount_via_ma",
            value: function () {
                var e, t;
                return "/ma" === window["__base-href"] && !0 === (null === (e = this.eligibility) || void 0 === e || null === (t = e.MerchantServices) || void 0 === t ? void 0 : t.IsEligible)
            }
        }, {
            key: "onSuccess",
            value: function (e, t) {
                this.isPayer = t.isPayer, this.customerId = t.customerId, this.chType = t.chType, this.firstName = t.firstName, this.lastName = t.lastName, this.companyName = t.companyName, this.country = t.country, this.emailHash = t.emailHash, this.email = t.email, this.isEmailNotVerified = t.isEmailNotVerified, this.MaskedEmail = t.MaskedEmail, this.eligibility = t.eligibility || {}, this.isVIP = t.isVIP, this.activeCategories = t.activeCategories, this.lastLogin = t.lastLogin, this.deeplinks = t.deeplinks, this.isFirstLogin = t.isFirstLogin, this.supportLink = t.supportLink, d() || r.b || u.a || l.a || s.a || this.rolledOutToNewMyAccount_via_ma() || a.b !== a.a.production && "/ma" !== window["__base-href"] || (location.href = Object(c.a)("www"))
            }
        }]) && f(t.prototype, n), o && f(t, o), e
    }());
    t.a = p
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "e", (function () {
        return d
    })), n.d(t, "f", (function () {
        return b
    })), n.d(t, "d", (function () {
        return h
    })), n.d(t, "c", (function () {
        return g
    })), n.d(t, "a", (function () {
        return O
    })), n.d(t, "b", (function () {
        return w
    }));
    var r = n(10),
        o = n(26),
        i = n(8);

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function (t) {
                u(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return function (e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var f = function (e) {
            return !!o.a || (i.b ? !!window.customer.eligibility[e] && window.customer.eligibility[e].IsEligible : !!r.a.eligibility[e] && r.a.eligibility[e].IsEligible)
        },
        d = function (e) {
            if (!e) return !1;
            if ("string" == typeof e) return f(e);
            var t = e.key,
                n = e.payer,
                o = e.static || f(t);
            return r.a.IS_PAYER() ? !!n && o : o
        },
        p = function (e, t) {
            if (e) {
                var n = function (e, t) {
                        if (e) {
                            var n = {
                                pathname: e.pathname,
                                title: e.title
                            };
                            return t ? [].concat(l(t.breadcrumbs), [n]) : [n]
                        }
                    }(e, t),
                    r = function (e) {
                        return e ? 1 + e.height : 0
                    }(t),
                    o = function (e) {
                        if (e && !e.redirect) return e.pathname
                    }(t),
                    i = c(c({}, e), {}, {
                        breadcrumbs: n,
                        height: r,
                        backPathname: o
                    }),
                    a = function (e, t) {
                        return !!e && (!(e.height > 2) && (!!e.firstLevel || (!t || (!!t.redirect || 1 === t.childRoutes.length))))
                    }(i, t),
                    u = function (e) {
                        if (!e) return !1;
                        var t = e.redirect,
                            n = e.height,
                            r = e.childRoutes;
                        return !!t || !!r && (n < 2 && 1 === r.length)
                    }(i),
                    s = function (e, t) {
                        if (e) {
                            var n = e.pathname,
                                r = e.childRoutes;
                            return r && r[0] && t ? r[0].pathname : n
                        }
                    }(i, u);
                return c(c({}, i), {}, {
                    redirect: u,
                    redirectTo: s,
                    firstLevel: a
                })
            }
        },
        y = void 0,
        m = function (e) {
            if (e) {
                var t = e.childRoutes;
                return t ? c(c({}, e), {}, {
                    childRoutes: t.filter(d)
                }) : e
            }
        },
        v = function (e) {
            if (!e) return !1;
            if (d(e)) return !0;
            var t = e.childRoutes;
            return !!t && (t.length > 0 || d(e))
        },
        b = function (e) {
            if (e) {
                var t = e.childRoutes,
                    n = t ? c(c({}, e), {}, {
                        childRoutes: t.map(m).filter(v)
                    }) : e;
                return y = function e(t, n) {
                    if (t) {
                        var r = c(c({}, t), p(t, n)),
                            o = r.childRoutes;
                        return o ? c(c({}, r), {}, {
                            childRoutes: o.map((function (t) {
                                return e(t, r)
                            }))
                        }) : r
                    }
                }(n)
            }
        },
        h = function () {
            return y
        },
        g = function (e) {
            if (y) return O(y, "string" == typeof e ? {
                key: "key",
                value: e
            } : e)
        },
        O = function e(t, n) {
            if (t && n) {
                var r = n.key,
                    o = n.value;
                if (t[r] === o) return t;
                var i = t.childRoutes;
                if (i) {
                    for (var a, c = 0; !a && c < i.length; c++) a = e(i[c], n);
                    return a
                }
            }
        },
        w = function e(t, n) {
            var r = O(t, {
                key: "pathname",
                value: n
            });
            if (r) return r;
            var o = n.split("/");
            return 1 !== o.length ? e(t, o.slice(0, o.length - 1).join("/")) : void 0
        }
}, , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "systemName", (function () {
        return u
    })), n.d(t, "translate", (function () {
        return l
    })), n.d(t, "t", (function () {
        return s
    })), n.d(t, "callApiRoot", (function () {
        return f
    })), n.d(t, "apiFetchTransactionsData", (function () {
        return d
    })), n.d(t, "assetsApiRoot", (function () {
        return p
    })), n.d(t, "getTemplateUrl", (function () {
        return y
    })), n.d(t, "getTemplateApi", (function () {
        return m
    })), n.d(t, "numOfTransactionsToShow", (function () {
        return v
    })), n.d(t, "toastErrorTimeout", (function () {
        return b
    })), n.d(t, "fetchTransactionsDataUrl", (function () {
        return h
    })), n.d(t, "formatDate", (function () {
        return g
    }));
    var r = n(51),
        o = n.n(r),
        i = n(33),
        a = n(2),
        c = n(68),
        u = "TransactionsWidget",
        l = a.i.translateFrom(u),
        s = a.i.translateFrom(c.systemName),
        f = "gw-activity",
        d = "/api/activity/getMainTransactions",
        p = f + "/api/v1/assets",
        y = "/api/activity/getItemDetails",
        m = f + y,
        v = i.a.isMobile ? 3 : 10,
        b = 3e3,
        h = o()(f, d),
        g = function (e) {
            return e && e.format("YYYY-MM-DD")
        }
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, c = n(0),
        u = n.n(c),
        l = n(7),
        s = n(26);

    function f(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var d = Object(l.g)(r || (r = f(["\n    0% { background-position: -490px 0; }\n    100% { background-position: 490px 0; }\n"]))),
        p = Object(l.g)(o || (o = f(["\n    0% { width: 0; }\n    100% { width: 100%; }\n"]))),
        y = l.f.div(i || (i = f(["\n    width: ", ";\n    height: ", ";\n\n    margin: ", ";\n\n    position: relative;\n    animation: ", " 1s linear infinite forwards;\n    background: ", ";\n    border-radius: 4px;\n    background-image: -webkit-gradient(\n        linear,\n        left center,\n        right center,\n        from(", "),\n        color-stop(0.2, ", "),\n        color-stop(0.4, ", "),\n        to(", ")\n    );\n    background-image: -webkit-linear-gradient(\n        left,\n        ", " 0%,\n        ", " 20%,\n        ", " 40%,\n        ", " 100%\n    );\n    background-size: 980px 898px;    \n\n    /* circle condition */\n    ", "\n\n    /* timeline condition */\n    ", "\n"])), (function (e) {
            return e.width || "auto"
        }), (function (e) {
            return e.height || "14px"
        }), (function (e) {
            return "\n        ".concat(e.marginTop || 0, " \n        ").concat(e.marginRight || "12px", "\n        ").concat(e.marginBottom || "14px", "\n        ").concat(e.marginLeft || "14px", "\n    ")
        }), d, (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-500"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-500"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.circle && "border-radius: 100%"
        }), (function (e) {
            return !s.a && e.timeline && Object(l.e)(a || (a = f(["\n            width: 0;\n            animation: ", " 1.5s linear infinite;\n            background: ", ";\n        "])), p, e.theme["brand-color-orange-500"])
        }));
    t.a = function (e) {
        return u.a.createElement(y, e)
    }
}, , function (e, t, n) {
    "use strict";
    var r = n(102);
    n.d(t, "c", (function () {
        return r.e
    })), n.d(t, "d", (function () {
        return r.f
    })), n.d(t, "b", (function () {
        return r.d
    })), n.d(t, "a", (function () {
        return r.b
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "l", (function () {
        return i
    })), n.d(t, "i", (function () {
        return a
    })), n.d(t, "k", (function () {
        return c
    })), n.d(t, "h", (function () {
        return u
    })), n.d(t, "e", (function () {
        return l
    })), n.d(t, "d", (function () {
        return s
    })), n.d(t, "j", (function () {
        return f
    })), n.d(t, "a", (function () {
        return d
    })), n.d(t, "c", (function () {
        return p
    })), n.d(t, "b", (function () {
        return y
    }));
    var r = n(28),
        o = n(100);
    n.d(t, "f", (function () {
        return o.d
    })), n.d(t, "g", (function () {
        return o.e
    }));
    var i = function (e) {
            return {
                type: r.p,
                payload: e
            }
        },
        a = function (e) {
            return {
                type: r.m,
                payload: e
            }
        },
        c = function (e) {
            return {
                type: r.o,
                payload: e
            }
        },
        u = function (e) {
            return {
                type: r.l,
                payload: e
            }
        },
        l = function (e) {
            return {
                type: r.g,
                payload: e
            }
        },
        s = function (e) {
            return {
                type: r.b,
                payload: e
            }
        },
        f = function (e) {
            return {
                type: r.n,
                payload: e
            }
        },
        d = function (e) {
            return "function" == typeof e && setTimeout(e, 350), f(!1)
        },
        p = function (e) {
            return {
                type: r.f,
                payload: e
            }
        },
        y = function () {
            return {
                type: r.a
            }
        }
}, function (e, t, n) {
    "use strict";
    var r, o = n(21),
        i = n(0),
        a = n.n(i),
        c = n(1),
        u = n.n(c),
        l = n(7);
    var s, f, d = l.f.div(r || (s = ["\n    width: 100%;\n    display: flex;\n    align-items: center;\n\n    ", "\n    ", "\n    ", "\n"], f || (f = s.slice(0)), r = Object.freeze(Object.defineProperties(s, {
        raw: {
            value: Object.freeze(f)
        }
    }))), (function (e) {
        return e.marginTop && "margin-top: ".concat(e.marginTop)
    }), (function (e) {
        return e.justifyContent && "justify-content: ".concat(e.justifyContent)
    }), (function (e) {
        return e.alignItems && "align-items: ".concat(e.alignItems)
    }));

    function p() {
        return (p = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function y(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var m = function (e) {
        var t = e.children,
            n = e.className,
            r = y(e, ["children", "className"]);
        return a.a.createElement(d, p({
            className: n
        }, r), t)
    };
    m.proptTypes = {
        children: u.a.node.isRequired,
        className: u.a.string
    };
    var v, b, h, g, O = m,
        w = n(163),
        j = n(8),
        S = n(26),
        x = n(279);

    function N(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var T, A = l.f.div(v || (v = N(["\n    width: 100%;\n\n    .title {\n        display: flex;\n        align-items: center;\n        height: ", ";\n        color: ", ";\n        border-bottom: 1px solid ", ";\n        background: ", ";\n        padding: 0 2px;\n    }\n\n    .breadcrumb {\n        display: none;\n    }\n\n    .content {\n        ", "\n    }\n\n    @media (min-width: ", ") {\n        .title {\n            margin-top: -6px;\n            height: ", ";\n            background: transparent;\n        }\n        .breadcrumb {\n            display: block;\n        }\n    }\n\n    ", ";\n\n    ", "\n"])), (function (e) {
        return e.theme["ma-page-title-height-moblet"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-300"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-900"]
    }), (function (e) {
        return e.padding && Object(l.e)(b || (b = N(["\n                padding: ", ";\n\n                @media (min-width: ", ") {\n                    padding: ", ";\n                }\n            "])), e.theme["ma-main-padding-mobile"], e.theme["screen-sm-min"], (function (e) {
            return e.theme["ma-main-padding-desktop"]
        }))
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["ma-page-title-height-desktop"]
    }), (function (e) {
        return e.hasTitle && j.b && Object(l.e)(h || (h = N(["\n            margin-top: -50px;\n\n            @media (min-width: ", ") {\n                margin-top: 0;\n            }\n        "])), e.theme["screen-sm-min"])
    }), (function (e) {
        return "wizard" === e.type && Object(l.e)(g || (g = N(["\n            .title {\n                @media (min-width: ", ") {\n                    margin: -6px auto 0;\n                    max-width: 550px;\n                    justify-content: center;\n                }\n            }\n            .breadcrumb {\n                display: none;\n            }\n            .content {\n                padding-top: 16px;\n            }\n        "])), e.theme["screen-sm-min"])
    }));

    function _(e, t, n, r) {
        T || (T = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: T,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var k, P = _(w.a, {}, void 0, _(o.a, {
            width: "40%",
            marginTop: "10px"
        }), _(o.a, {
            width: "50%"
        }), _(o.a, {
            width: "35%",
            marginBottom: "16px"
        })),
        L = _(w.a, {}, void 0, _(o.a, {
            width: "40%",
            marginTop: "10px"
        }), _(o.a, {
            width: "50%"
        }), _(o.a, {
            width: "35%",
            marginBottom: "16px"
        })),
        M = function () {
            return a.a.createElement(a.a.Fragment, null, P, L)
        },
        E = n(223);

    function C(e, t, n, r) {
        k || (k = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: k,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var I, D, R = C(E.a, {}),
        B = C(E.a, {}),
        z = C(E.a, {}),
        $ = function () {
            return a.a.createElement(a.a.Fragment, null, R, B, z)
        },
        U = n(61);

    function F(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var Y, G = l.f.div(I || (I = F(["\n    width: 100%;\n    display: flex;\n    flex-flow: wrap;\n"]))),
        q = Object(l.f)(U.a)(D || (D = F(["\n    &.card {\n        width: calc(32% - 10px);\n        min-height: 145px;\n        flex-direction: column;\n        margin-right: 19px;\n        margin-bottom: 19px;\n        border-radius: 2px;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);\n\n        .card__content {\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n            align-items: flex-end;\n            flex-flow: column;\n            min-height: inherit;\n        }\n\n        @media (max-width: 1476px) {\n            width: calc(48% - 10px);\n        }\n\n        @media (max-width: ", ") {\n            width: 100%;\n            margin-right: 0;\n            margin-left: 0;\n        }\n    }\n"])), (function (e) {
            return e.theme["screen-sm"]
        }));

    function V(e, t, n, r) {
        Y || (Y = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Y,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Q, H = V(o.a, {
            width: "60px",
            height: "60px",
            marginBottom: "0",
            circle: !0
        }),
        W = V(o.a, {
            width: "46%",
            marginTop: "4px"
        }),
        J = V(o.a, {
            width: "38%",
            height: "10px",
            marginTop: "20px",
            marginBottom: "10px"
        }),
        Z = V(o.a, {
            width: "66%",
            height: "10px"
        }),
        K = V(o.a, {
            width: "42%",
            height: "24px",
            marginBottom: "0",
            marginRight: "0"
        }),
        X = function () {
            return V(q, {}, void 0, V(O, {
                alignItems: "flex-start"
            }, void 0, H, V("div", {
                style: {
                    flex: 1
                }
            }, void 0, W, J, Z)), K)
        };

    function ee(e, t, n, r) {
        Q || (Q = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Q,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var te, ne, re = ee(G, {}, void 0, ee(X, {}), ee(X, {}), ee(X, {})),
        oe = function () {
            return re
        };

    function ie(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var ae, ce = Object(l.f)(O)(te || (te = ie(["\n    .circles {\n        width: auto;\n    }\n"]))),
        ue = l.f.div(ne || (ne = ie(["\n    width: 100%;\n    position: relative;\n\n    ", ":not(:first-child) {\n        margin-top: 24px;\n    }\n"])), ce);

    function le(e, t, n, r) {
        ae || (ae = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ae,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var se, fe = le(o.a, {
            width: "35px",
            height: "35px",
            marginBottom: "0",
            circle: !0
        }),
        de = le(o.a, {
            width: "18%",
            height: "10px"
        }),
        pe = le(o.a, {
            width: "54%",
            height: "10px"
        }),
        ye = le(O, {
            className: "circles"
        }, void 0, le(o.a, {
            width: "20px",
            height: "20px",
            marginBottom: "0",
            marginRight: "0",
            circle: !0
        }), le(o.a, {
            width: "20px",
            height: "20px",
            marginBottom: "0",
            marginRight: "0",
            circle: !0
        }), le(o.a, {
            width: "20px",
            height: "20px",
            marginBottom: "0",
            marginRight: "0",
            circle: !0
        })),
        me = function (e) {
            var t = e.circles;
            return le(ce, {
                alignItems: "flex-start"
            }, void 0, fe, le("div", {
                style: {
                    flex: 1
                }
            }, void 0, de, pe), t && ye)
        };

    function ve(e, t, n, r) {
        se || (se = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: se,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var be, he, ge = ve(ue, {}, void 0, ve(U.a, {
            shadow: !0
        }, void 0, ve(me, {
            circles: !0
        }), ve(me, {}), ve(me, {}), ve(me, {}))),
        Oe = function () {
            return ge
        };

    function we(e, t, n, r) {
        he || (he = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: he,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var je, Se = we(l.f.div(be || (be = function (e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n    max-width: 550px;\n    margin: 0 auto;\n    padding-bottom: 12px;\n\n    .card-margin {\n        margin-top: 25px;\n    }\n"]))), {}, void 0, we(U.a, {
            shadow: !0
        }, void 0, we(o.a, {
            width: "20%",
            height: "12px",
            marginBottom: "32px"
        }), we(o.a, {
            width: "18%",
            height: "10px"
        }), we(o.a, {
            width: "60%",
            height: "10px",
            marginBottom: "32px"
        }), we(o.a, {
            width: "18%",
            height: "10px"
        }), we(o.a, {
            width: "60%",
            height: "10px"
        })), we(U.a, {
            className: "card-margin",
            shadow: !0
        }, void 0, we(o.a, {
            width: "20%",
            height: "12px",
            marginBottom: "32px"
        }), we(o.a, {
            width: "18%",
            height: "10px"
        }), we(o.a, {
            width: "90%",
            height: "10px",
            marginBottom: "32px"
        }), we(o.a, {
            width: "18%",
            height: "10px"
        }), we(o.a, {
            width: "90%",
            height: "10px",
            marginBottom: "32px"
        }), we(o.a, {
            width: "18%",
            height: "10px"
        }), we(o.a, {
            width: "90%",
            height: "10px",
            marginBottom: "32px"
        })), we(U.a, {
            className: "card-margin",
            shadow: !0
        }, void 0, we(O, {}, void 0, we(o.a, {
            width: "20px",
            height: "20px",
            marginBottom: "0",
            circle: !0
        }), we(o.a, {
            width: "20%",
            height: "12px",
            marginBottom: "0"
        })))),
        xe = function () {
            return Se
        };

    function Ne(e, t, n, r) {
        je || (je = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: je,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function Te(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var Ae = Ne(x.a, {}),
        _e = Ne(M, {}),
        ke = Ne($, {}),
        Pe = Ne(oe, {}),
        Le = Ne(Oe, {}),
        Me = Ne(xe, {}),
        Ee = Ne(M, {}),
        Ce = Ne("div", {
            className: "title"
        }, void 0, Ne(o.a, {
            width: "40%",
            height: "16px",
            marginBottom: "0"
        })),
        Ie = Ne("div", {
            className: "breadcrumb"
        }, void 0, Ne(o.a, {
            width: "28%",
            height: "12px",
            marginTop: "20px",
            marginBottom: "15px"
        })),
        De = function (e) {
            var t = e.children,
                n = Te(e, ["children"]),
                r = n.type,
                o = n.hasTitle;
            if (S.a) return Ae;
            return a.a.createElement(A, n, o && Ce, !j.b && o && Ie, Ne("div", {
                className: "content"
            }, void 0, t || function () {
                switch (!0) {
                    case "lines" === r:
                        return _e;
                    case "sections" === r:
                        return ke;
                    case "cards" === r:
                        return Pe;
                    case "table" === r:
                        return Le;
                    case "wizard" === r:
                        return Me;
                    default:
                        return Ee
                }
            }()))
        };
    De.defaultProps = {
        hasTitle: !0,
        type: "lines",
        padding: !0
    };
    var Re = De;
    n.d(t, "b", (function () {
        return o.a
    })), n.d(t, "a", (function () {
        return O
    })), n.d(t, "c", (function () {
        return Re
    }))
}, function (e, t, n) {
    "use strict";
    var r = "undefined" != typeof window && window.location.search.includes("outlet=webview");
    t.a = r
}, , function (e, t, n) {
    "use strict";
    n.d(t, "j", (function () {
        return i
    })), n.d(t, "d", (function () {
        return a
    })), n.d(t, "e", (function () {
        return c
    })), n.d(t, "p", (function () {
        return u
    })), n.d(t, "m", (function () {
        return l
    })), n.d(t, "o", (function () {
        return s
    })), n.d(t, "l", (function () {
        return f
    })), n.d(t, "g", (function () {
        return d
    })), n.d(t, "h", (function () {
        return p
    })), n.d(t, "n", (function () {
        return y
    })), n.d(t, "b", (function () {
        return m
    })), n.d(t, "a", (function () {
        return v
    })), n.d(t, "f", (function () {
        return b
    })), n.d(t, "c", (function () {
        return h
    })), n.d(t, "i", (function () {
        return g
    }));
    var r = n(12),
        o = n(100);
    n.d(t, "k", (function () {
        return o.a
    }));
    var i = "@@table/SET_SELECTED",
        a = Object(r.k)("@payoneer/NOTIFICATIONS_HIDE_INITIATE_MESSAGE"),
        c = "@payoneer/NOTIFICATIONS_HIDE_INITIATE_MESSAGE_HARD",
        u = "@@layout/TOGGLE_TITLE",
        l = "@@layout/TOGGLE_NAVBAR",
        s = "@@layout/TOGGLE_RIGHT_PANE",
        f = "@@layout/TOGGLE_FULL_SCREEN_MODAL",
        d = "@@layout/RESET_FULL_SCREEN_MODAL",
        p = "@@layout/RESET_RESPONSIVE_SIDEBAR",
        y = "@@layout/TOGGLE_RESPONSIVE_SIDEBAR_LIST",
        m = "@@layout/DELETE_RESPONSIVE_SIDEBAR_LIST",
        v = "@@eligibility/CURRENT_ROUTE_CHANGE",
        b = "@@layout/ORIENTATION",
        h = Object(r.k)("@payoneer/GET_NOTIFICATIONS"),
        g = "@payoneer/SET_NOTIFICATIONS_COUNTS"
}, , , , , function (e, t, n) {
    "use strict";
    var r = n(109),
        o = n(24);

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function (t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = {
            isMobile: null,
            isLandsacape: null,
            isTablet: null,
            isDesktop: null
        },
        l = function (e) {
            return function (t) {
                return r.a && r.a.dispatch(Object(o.c)(a(a({}, u), c({}, e, t.matches)))), u[e] = t.matches
            }
        },
        s = "691px",
        f = "992px",
        d = "1260px",
        p = "1921px",
        y = window.matchMedia("(min-width: 320px)") && window.matchMedia("(max-width: ".concat(s, ")"));
    l("isMobile")(y), y.addListener(l("isMobile"));
    var m = window.matchMedia("(max-width: ".concat(f, ")"));
    l("isLandsacape")(m), m.addListener(l("isLandsacape"));
    var v = window.matchMedia("(max-width: ".concat(d, ")"));
    l("isTablet")(v), v.addListener(l("isTablet"));
    var b = window.matchMedia("(max-width: ".concat(p, ")"));
    l("isDesktop")(b), b.addListener(l("isDesktop")), t.a = u
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return c
    })), n.d(t, "a", (function () {
        return s
    })), n.d(t, "c", (function () {
        return d
    }));
    var r, o = n(32),
        i = n(55),
        a = n(43),
        c = Object(i.a)("myaccount"),
        u = Object(i.a)("myaccount", "brand.domain"),
        l = [[o.a.localhost, "22291ffd-6b56-4566-911d-091796c22619"], [o.a.dev, "22291ffd-6b56-4566-911d-091796c22619"], [o.a.qa, "9b3111a9-fc9b-467c-8f9d-3dd50a42b723"], [o.a.sandbox, "df4ad4da-6dff-4865-9bd5-e44f80365b72"], [o.a.staging, "df4ad4da-6dff-4865-9bd5-e44f80365b72"], [o.a.production, "d5ebbf65-d4b3-49ab-b1d1-31708f8ed9db"]],
        s = {
            client_id: (r = l.find((function (e) {
                return e[0] === o.b
            }))) ? r[1] : "<UNKNOWN>",
            redirect_uri: u + "gw-myaccount/auth/code",
            response_type: "code",
            state: null,
            scope: "myaccount",
            token: a.a.ott
        },
        f = Object(i.a)("login"),
        d = Object(i.a)("myaccount");
    t.d = {
        debug: !1,
        mockExpiration: 9e3,
        AUTHORIZE: f + "api/v2/internal/authorize",
        LOGOUT: f + "api/v2/internal/logout",
        LOGOUT_AUTHORIZE: f + "api/v2/internal/logout/authorize",
        TOKEN: c + "gw-myaccount/auth/token",
        TOKEN_REVOKE: c + "gw-myaccount/auth/token/revoke",
        TOKEN_VALIDATE: c + "gw-myaccount/auth/token/validate",
        LEGACY_MA_LOGOUT: d + "Logout/Logout.aspx?abandon=1"
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        o = n.n(r),
        i = (n(1), n(63)),
        a = n(49),
        c = n(4),
        u = n.n(c),
        l = n(134),
        s = n(13),
        f = (n(973), n(10));

    function d() {
        return (d = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function p(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    t.a = function (e) {
        var t = e.children,
            n = e.href,
            r = e.className,
            c = e.target,
            y = e.onClick,
            m = e.eligibleKey,
            v = e.gtmEvent,
            b = p(e, ["children", "href", "className", "target", "onClick", "eligibleKey", "gtmEvent"]),
            h = u()("myaccount-link", r, {
                "myaccount-link--hidden": m && !Object(s.e)({
                    key: m,
                    payer: f.a.IS_PAYER()
                })
            }),
            g = n ? Object(l.a)(n) : {
                type: a.b.external
            },
            O = function (e) {
                v && v(), y && y(e)
            };
        switch (g.type) {
            case a.b.external:
                return o.a.createElement("a", d({
                    className: h,
                    href: g.href,
                    target: c,
                    onClick: O
                }, b), t);
            default:
                return o.a.createElement(i.a, d({
                    className: h,
                    to: g.href,
                    onClick: O
                }, b), t)
        }
    }
}, , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return d
    }));
    var r = n(2),
        o = n(10),
        i = n(8),
        a = n(43);

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var u = function (e, t, n) {
            console.log("%cGoogle Tag Manager Log:\n%c ".concat(JSON.stringify(e), " %c ").concat(JSON.stringify(t), " %c ").concat(JSON.stringify(n), " "), "background-color: #fbbc05; font-weight: 600", "background-color: #4285f4; color: #fff", "background-color: #ea4335; color: #fff", "background-color: #34a853; color: #fff")
        },
        l = function (e) {
            return e || void 0
        };
    window.dataLayer = window.dataLayer || [];
    var s = function (e) {
            return dataLayer.push(e)
        },
        f = function (e, t, n) {
            var a, c, u, f = n.step,
                d = n.flowData,
                p = n.virtualPage,
                y = n.eventCategory,
                m = n.eventAction,
                v = n.eventLabel,
                b = n.eventValue,
                h = n.eventNonInteraction;
            return s({
                event: e,
                user: {
                    locale: r.i.getLocale(),
                    accountHolderId: o.a.customerId
                },
                route: l(i.b ? (a = location.hash.substring(1), c = a.indexOf("?"), u = c < 0 ? a : a.substring(0, c), "/" === u[0] ? u : "/" + u) : location.pathname),
                systemName: t,
                step: l(f),
                flowData: l(d),
                virtualPage: l(p),
                eventCategory: l(y),
                eventAction: l(m),
                eventLabel: l(v),
                eventValue: l(b),
                eventNonInteraction: l(h)
            })
        },
        d = new(function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, r;
            return t = e, (n = [{
                key: "virtualPage",
                value: function (e, t) {
                    t.virtualPage && 0 !== t.virtualPage.indexOf("/") && (t.virtualPage = "/" + t.virtualPage), t.step && 0 === t.step.indexOf("/") && (t.step = t.step.substring(1)), t.virtualPage || (t.virtualPage = "/" + t.step), f("VP " + t.virtualPage, e, t), a.a.logGtm && u("VP " + t.virtualPage, e, t)
                }
            }, {
                key: "pushEvent",
                value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    r || (f(0 === t.indexOf("CE ") ? t : "CE " + t, e, n), a.a.logGtm && u(0 === t.indexOf("CE ") ? t : "CE " + t, e, n)), r && (f(0 === t.indexOf("VP ") ? t : "VP " + t, e, n), a.a.logGtm && u(0 === t.indexOf("VP ") ? t : "VP " + t, e, n))
                }
            }, {
                key: "error",
                value: function (e) {
                    var t = e.code,
                        n = e.message;
                    s({
                        event: "Error ".concat(t),
                        error: {
                            code: t,
                            message: n
                        }
                    })
                }
            }, {
                key: "push",
                value: function (e) {
                    s(e)
                }
            }]) && c(t.prototype, n), r && c(t, r), e
        }())
}, , function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return a
    })), n.d(t, "c", (function () {
        return c
    }));
    var r = n(47),
        o = n.n(r),
        i = o.a.parse(location.search, {
            ignoreQueryPrefix: !0
        });
    t.a = i;
    var a = function (e) {
        return o.a.parse(e.router.location.search, {
            ignoreQueryPrefix: !0
        })
    };

    function c(e, t) {
        var n = e.split("?");
        if (n.length >= 2) {
            for (var r = encodeURIComponent(t) + "=", o = n[1].split(/[&;]/g), i = o.length; i-- > 0;) - 1 !== o[i].lastIndexOf(r, 0) && o.splice(i, 1);
            return n[0] + (o.length > 0 ? "?" + o.join("&") : "")
        }
        return e
    }
}, , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ACTION_CATEGORY", (function () {
        return r
    })), n.d(t, "MAX_ACTIONS", (function () {
        return o
    })), n.d(t, "MAX_MOBILE_ACTIONS", (function () {
        return i
    }));
    var r = {
            high: 1,
            low: 2,
            promotion: 3
        },
        o = 4,
        i = 3
}, , , , function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return o
    }));
    var r = {
            external: 0,
            deepLink: 1,
            internal: 2
        },
        o = {
            modules: "modules",
            widgets: "widgets"
        }
}, function (e, t, n) {
    "use strict";
    var r = n(120),
        o = n(47),
        i = n.n(o),
        a = n(36);

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var u = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            c(this, e), this.accessToken = t, this.expiresAt = Date.now() + 1e3 * n, this.isExternal = r
        },
        l = n(8),
        s = n(52),
        f = n(59),
        d = n(43),
        p = n(26);

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? y(Object(n), !0).forEach((function (t) {
                h(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function v(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var g = {
            myinfo: 1
        },
        O = new r.a("sessionStorage"),
        w = function () {
            return O.get("auth")
        },
        j = function (e) {
            O.put("auth", e)
        },
        S = function (e, t) {
            return O.put("auth-state-" + e, t)
        },
        x = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, r;
            return t = e, r = [{
                key: "getIsTokenManagedExternally",
                value: function () {
                    var e = w();
                    return e && e.isExternal
                }
            }, {
                key: "getAccessToken",
                value: function () {
                    var e = w();
                    return e ? e.accessToken : null
                }
            }, {
                key: "getExpiration",
                value: function () {
                    var e = w();
                    return e && e.expiresAt
                }
            }, {
                key: "getAuthInitFromHashQuery",
                value: function () {
                    var e = location.hash.indexOf("?");
                    if (-1 === e) return null;
                    var t = i.a.parse(location.hash.substring(e), {
                            ignoreQueryPrefix: !0
                        }),
                        n = t.access_token,
                        r = t.expires_in,
                        o = t.state,
                        a = t.ott,
                        c = v(t, ["access_token", "expires_in", "state", "ott"]);
                    if (window.history && window.history.replaceState) {
                        var u, l = window.location.toString(),
                            s = l.indexOf("#"),
                            f = l.indexOf("?", s),
                            d = i.a.stringify(c);
                        u = d ? l.substring(0, f + 1) + d : f - s > 1 ? l.substring(0, f) : l.substring(0, s), window.history.replaceState({}, document.title, u)
                    }
                    return {
                        access_token: n,
                        expires_in: r,
                        state: o,
                        ott: a
                    }
                }
            }, {
                key: "extractAuth",
                value: function (t) {
                    var n = (null == t ? void 0 : t.is_external) || "webview" === d.a.outlet && navigator.userAgent.split(" ").includes("PayoneerAppWebView") && !!(null == t ? void 0 : t.access_token) && !(null == t ? void 0 : t.expires_in);
                    n && (t.expires_in = 1200, window.setExternalAccessToken = function (t) {
                        return e.extractAuth({
                            access_token: t,
                            is_external: !0
                        })
                    });
                    var r, o = !n && i.a.parse(decodeURIComponent(t.state)),
                        a = !n && (r = o.ref, O.get("auth-state-" + r));
                    t && t.access_token && t.expires_in && (t.state === a || n) ? (j(new u(t.access_token, parseInt(t.expires_in), n)), function (e) {
                        O.remove("auth-state-" + e)
                    }(o.ref), e.state = o) : t && t.ott ? e.authorize({
                        href: window["__base-href"] || "/"
                    }, !1, !1, t.ott) : e.authorize({
                        href: window["__base-href"] || "/"
                    })
                }
            }, {
                key: "updateAuth",
                value: function (e) {
                    j(new u(e.access_token, e.expires_in))
                }
            }, {
                key: "refreshSso",
                value: function () {
                    var e = i.a.stringify(m(m({}, a.a), {}, {
                            state: Date.now().toString(),
                            prompt: "none"
                        })),
                        t = new XMLHttpRequest;
                    t.open("GET", "".concat(a.d.AUTHORIZE, "?").concat(e)), t.withCredentials = !0, t.send(null)
                }
            }, {
                key: "logout",
                value: function () {
                    if (O.remove("auth"), !window.redirecting) {
                        window.redirecting = !0;
                        var e = "?" + i.a.stringify({
                            client_id: a.a.client_id,
                            logout_redirect_uri: a.c.slice(0, -1)
                        });
                        window.location.replace(a.d.LOGOUT + e)
                    }
                }
            }, {
                key: "validateFailCount",
                value: function () {
                    var e = Date.now(),
                        t = O.get("auth-fail") || {
                            lastFail: e,
                            count: 0
                        };
                    if (t && t.count > 5) throw new Error("Reached failed validation count threshold.");
                    e - t.lastFail < 1e4 && t.count++, O.put("auth-fail", t)
                }
            }, {
                key: "authorize",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                    if (!window.redirecting) {
                        window.redirecting = !0, e.validateFailCount();
                        var c = Math.floor(65536 * (1 + Math.random())).toString(16).substring(1),
                            u = m({
                                ref: c,
                                href: Object(d.c)(window.location.href, "ott")
                            }, t);
                        0 === u.href.indexOf("/") && (u.href = "".concat(location.protocol, "//").concat(location.host).concat(u.href));
                        var l = i.a.stringify(u);
                        S(c, l);
                        var s = "?" + i.a.stringify(m(m({}, a.a), {}, {
                                state: l,
                                ott: o
                            })),
                            f = n ? a.d.LOGOUT_AUTHORIZE : a.d.AUTHORIZE;
                        if (window.location.replace(f + s), !r) throw new Error("Redirecting");
                        document.body.style.visibility = "hidden"
                    }
                }
            }, {
                key: "needsAuthorization",
                value: function () {
                    if (l.b || s.a || f.a) return !1;
                    var e = window.location.hostname.split(".")[0];
                    return !g[e]
                }
            }, {
                key: "validateAuth",
                value: function () {
                    var t = w();
                    return Date.now(), !(!t || !t.accessToken || t.expiresAt < Date.now()) || (e.authorize(), !1)
                }
            }, {
                key: "setValidateTokenOnWindowFocus",
                value: function (e) {
                    var t, n;
                    void 0 !== document.hidden ? (t = "hidden", n = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", n = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", n = "webkitvisibilitychange"), document.addEventListener(n, (function () {
                        document[t] || e()
                    }), !1)
                }
            }], (n = null) && b(t.prototype, n), r && b(t, r), e
        }();
    h(x, "state", null), h(x, "reauthorizeOnFailure", (function (e) {
        var t = {};
        (e.warningTimeout || e.aboutToOrExpired) && (t.expired = 1, p.a) ? window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({
            type: "SessionTimeoutError",
            code: 2
        })): (e.unauthorized && (t.href = window["__base-href"] || "/"), p.a || x.authorize(t, e.warningTimeout, !0))
    }));
    t.a = x
}, , function (e, t, n) {
    "use strict";
    var r = "undefined" != typeof window && window.location.pathname.startsWith("/".concat("internal"));
    t.a = r
}, function (e, t, n) {
    "use strict";
    n.d(t, "d", (function () {
        return r
    })), n.d(t, "c", (function () {
        return o
    })), n.d(t, "b", (function () {
        return i
    })), n.d(t, "a", (function () {
        return a
    })), n.d(t, "e", (function () {
        return c
    })), n.d(t, "f", (function () {
        return u
    }));
    var r = function (e) {
            return e.layout.fullScreenModal && e.layout.fullScreenModal.isOpen
        },
        o = function (e) {
            return e.layout.fullScreenModal && !e.layout.fullScreenModal.isOpen
        },
        i = function (e) {
            return e.layout.main.hasTitle
        },
        a = function (e) {
            return e.layout.responsiveSidebar
        },
        c = function (e) {
            return e.layout.navbar.isOpen
        },
        u = function (e) {
            return e.layout.rightPane.isOpen
        }
}, , function (e, t, n) {
    "use strict";
    var r = n(95),
        o = n(80),
        i = r.a.EnvUrlPrefix,
        a = r.a.EnvUrlProtocol;
    t.a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return "".concat(a, "://").concat(e).concat(i, ".").concat(t || o.a + "." + r.b, "/")
    }
}, , , , function (e, t, n) {
    "use strict";
    var r = "undefined" != typeof window && window.location.pathname.startsWith("/secure");
    t.a = r
}, , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "resourcesSelector", (function () {
        return r
    })), n.d(t, "paymentsSelector", (function () {
        return o
    })), n.d(t, "isJumbotronVisible", (function () {
        return i
    }));
    var r = function (e, t) {
            var n = {
                Key: "",
                Value: "",
                Type: "",
                Name: "",
                Url: ""
            };
            return e && e.widgets && e.widgets.paymentRequest && e.widgets.paymentRequest.resources && Array.isArray(e.widgets.paymentRequest.resources) && e.widgets.paymentRequest.resources.find((function (e) {
                return e.Key === t
            })) || n
        },
        o = function (e) {
            return e && e.widgets && e.widgets.paymentRequest && Array.isArray(e.widgets.paymentRequest.payments) && e.widgets.paymentRequest.payments.length > 0 ? e.widgets.paymentRequest.payments : []
        },
        i = function (e) {
            return !!(e && e.widgets && e.widgets.jumbotron && e.widgets.jumbotron.actions && e.widgets.jumbotron.actions.length > 0)
        }
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "systemName", (function () {
        return o
    })), n.d(t, "callApiRoot", (function () {
        return i
    })), n.d(t, "getAssets", (function () {
        return a
    }));
    var r = n(51),
        o = "HomepageApi",
        i = "gw-homepage",
        a = n.n(r)()(i, "api/v1/assets?locale=")
}, , , , function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(41)),
        c = n(131);
    var u, l = function (e) {
        var t = e.title,
            n = e.desktopActions,
            o = e.noSeparators,
            i = n || [];
        return function (e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps,
                a = arguments.length - 3;
            if (t || 0 === a || (t = {
                    children: void 0
                }), 1 === a) t.children = o;
            else if (a > 1) {
                for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
                t.children = c
            }
            if (t && i)
                for (var l in i) void 0 === t[l] && (t[l] = i[l]);
            else t || (t = i || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }(c.a, {
            title: t,
            desktopActionButtons: i,
            noSeparators: o
        })
    };

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function f(e, t, n, r) {
        u || (u = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var l in o) void 0 === t[l] && (t[l] = o[l]);
        else t || (t = o || {});
        return {
            $$typeof: u,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = b(e);
            if (t) {
                var o = b(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return v(this, n)
        }
    }

    function v(e, t) {
        return !t || "object" !== s(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var h = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(c, e);
        var t, n, r, o = m(c);

        function c() {
            return d(this, c), o.apply(this, arguments)
        }
        return t = c, (n = [{
            key: "componentDidMount",
            value: function () {
                a.a && a.a.virtualPage("MyAccount", {
                    virtualPage: "/"
                })
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.className,
                    n = e.header,
                    r = e.children;
                return f("div", {
                    className: "layout-template-index ".concat(t)
                }, void 0, n && i.a.createElement(l, n), f("main", {
                    className: "layout-template-index__main"
                }, void 0, r))
            }
        }]) && p(t.prototype, n), r && p(t, r), c
    }(o.Component);
    t.a = h
}, , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ActionContainer", (function () {
        return d
    })), n.d(t, "Icon", (function () {
        return p
    })), n.d(t, "HorizontalLine", (function () {
        return y
    })), n.d(t, "DeatilsContainer", (function () {
        return m
    })), n.d(t, "Title", (function () {
        return v
    })), n.d(t, "Paragraph", (function () {
        return b
    }));
    var r, o, i, a, c, u, l = n(7),
        s = n(45);

    function f(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var d = l.f.div(r || (r = f(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 2px;\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom: 1px solid ", ";  \n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px;\n  cursor: ", ";\n  font-size: 18px;\n\n  @media (max-width: ", ")  {\n    background-color: ", ";\n    padding: 12px;\n  }\n"])), (function (e) {
            return e.category == s.ACTION_CATEGORY.high ? e.theme["brand-color-cold-gray-800"] : e.theme["white-color"]
        }), (function (e) {
            return e.category == s.ACTION_CATEGORY.high ? e.theme["white-color"] : e.theme["brand-color-cold-gray-700"]
        }), (function (e) {
            return e.isOpen ? "0" : "inherit"
        }), (function (e) {
            return e.isOpen ? "0" : "inherit"
        }), (function (e) {
            var t = e.category,
                n = e.theme;
            return t === s.ACTION_CATEGORY.high ? n["brand-color-cold-gray-600"] : n["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.clickable ? "pointer" : "initial"
        }), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-800"]
        })),
        p = l.f.i(o || (o = f(["\n    font-size: 30px; \n    align-self: center;\n\n    @media (max-width: ", ")  {\n        font-size: 25px; \n        color: ", ";\n        margin-inline-end: 10px;\n    }\n"])), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["white-color"]
        })),
        y = l.f.div(i || (i = f(["\n    margin: 0 16px;\n    width: 1px;\n    height: 30px;\n    background-color: ", ";\n    align-self: center;\n\n    @media (max-width: ", ")  {\n        display: none;\n    }\n"])), (function (e) {
            return e.theme["brand-color-cold-gray-600"]
        }), (function (e) {
            return e.theme["screen-sm"]
        })),
        m = l.f.div(a || (a = f(["\n    display: flex;\n    flex-direction: row;\n\n    div {\n        align-self: center;\n    }\n"]))),
        v = l.f.b(c || (c = f(["\n    line-height: 1.38;\n\n    @media (max-width: ", ")  {\n        color: ", ";\n        font-weight: 400;\n        font-size: 21px;\n    }\n"])), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-700"]
        })),
        b = l.f.p(u || (u = f(["\n  @media (max-width: ", ")  {\n    font-size: 16px;\n    line-height: 1.2;  \n    color: ", ";\n    }\n"])), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-700"]
        }))
}, , , function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(4)),
        c = n.n(a),
        u = n(2),
        l = n(5),
        s = n(37),
        f = n(44),
        d = n(23),
        p = n(13);
    n(984);

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w(e);
            if (t) {
                var o = w(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return g(this, n)
        }
    }

    function g(e, t) {
        return !t || "object" !== y(t) && "function" != typeof t ? O(e) : t
    }

    function O(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function w(e) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var S = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }(i, e);
        var t, n, r, o = h(i);

        function i(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), j(O(t = o.call(this, e)), "stopPropagation", (function (e) {
                e.stopPropagation(), e.cancelBubble = !0
            })), j(O(t), "toggleFlip", (function (e) {
                t.stopPropagation(e), t.setState((function (e) {
                    return {
                        flip: !e.flip
                    }
                })), t.setHeight(e, t.state.flip)
            })), j(O(t), "setHeight", (function (e) {
                for (var n = !1, r = e.target; !n;) r.classList.contains("flipper") ? n = r : r = r.parentElement;
                if (n.scrollWidth > 240) {
                    var o = n.querySelector(".back");
                    n.style.minHeight = t.state.flip ? "70px" : o.scrollHeight + 32 + "px"
                }
            })), j(O(t), "handleClick", (function (e) {
                var n = t.props,
                    r = n.path,
                    o = n.blank,
                    i = n.push;
                t.stopPropagation(e), o ? window.open(r) : i(r)
            })), j(O(t), "onAddionalDetailsClicked", (function (e) {
                var n = t.props.onFlip;
                n && n(e), t.toggleFlip(e)
            })), j(O(t), "getFooter", (function (e) {
                return e && (e.link || e.text) ? e.link && !Object(p.e)(e.link.key) ? null : m("footer", {
                    className: e.text && "no-border"
                }, void 0, e.link && m(s.a, {
                    href: e.link.href,
                    onClick: function (e) {
                        t.stopPropagation(e)
                    }
                }, void 0, e.link.title), e.text && m("span", {
                    className: "footer-text"
                }, void 0, e.text)) : null
            })), t.state = {
                flip: !1
            }, t
        }
        return t = i, (n = [{
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.name,
                    n = e.title,
                    r = e.svg,
                    o = e.description,
                    i = e.flip,
                    a = e.footer,
                    l = e.onClick;
                return m("div", {
                    className: c()("myaccount-link-card flip-container", {
                        "myaccount-link-card--with-footer": a && a.link && Object(p.e)(a.link.key),
                        "myaccount-link-card--rtl": u.i.isRtl(),
                        flip: this.state.flip
                    }),
                    onClick: l || this.handleClick,
                    "data-testid": "myaccount-link-card-".concat(t)
                }, void 0, m("div", {
                    className: "flipper"
                }, void 0, m("div", {
                    className: "front"
                }, void 0, m("main", {}, void 0, m("div", {
                    className: "whats-this--desktop"
                }, void 0, m("i", {
                    className: "icon-info__new",
                    onClick: this.onAddionalDetailsClicked,
                    style: {
                        visibility: i ? "visible" : "hidden"
                    }
                })), r && m("div", {
                    className: "icon"
                }, void 0, m(f.a, {
                    icon: r
                })), n && "string" == typeof n ? m("div", {
                    className: "title"
                }, void 0, n) : n, m("div", {
                    className: "whats-this--mobile"
                }, void 0, m("i", {
                    className: "icon-info__new",
                    onClick: this.onAddionalDetailsClicked,
                    style: {
                        visibility: i ? "visible" : "hidden"
                    }
                }))), this.getFooter(a)), m("div", {
                    className: "back"
                }, void 0, m("main", {}, void 0, m("div", {
                    className: "title"
                }, void 0, n), m("div", {
                    className: "description"
                }, void 0, o)), m("i", {
                    className: "icon-close",
                    onClick: this.toggleFlip
                }))))
            }
        }]) && v(t.prototype, n), r && v(t, r), i
    }(o.Component);
    S.defaultProps = {
        blank: !1,
        flip: !0
    };
    var x, N = Object(l.c)(null, {
            push: d.c
        })(S),
        T = n(453);
    n(986);

    function A(e, t, n, r) {
        x || (x = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: x,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var _, k = function (e, t) {
            return c()(e, "".concat(e, "__").concat(t.key))
        },
        P = function (e) {
            var t = e.modules,
                n = e.children;
            return A("div", {
                className: c()("myaccount-dashboard-list", {
                    "myaccount-dashboard-list--rtl": u.i.isRtl()
                })
            }, void 0, t && t.map((function (e, t) {
                switch (e.type) {
                    case "linkcard":
                        return A("div", {
                            className: k(e.footer ? "myaccount-dashboard-item myaccount-dashboard-item-with-footer" : "myaccount-dashboard-item", e)
                        }, t, i.a.createElement(N, e));
                    case "longcard":
                        return A("div", {
                            className: k("myaccount-dashboard-long-card", e)
                        }, t, i.a.createElement(T.a, e))
                }
            })), n)
        };
    n(987);

    function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function M(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? L(Object(n), !0).forEach((function (t) {
                E(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e, t, n, r) {
        _ || (_ = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: _,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var I = u.i.translate;
    t.a = function (e) {
        var t = e.groups,
            n = e.modules,
            r = e.children;
        return C("div", {
            className: c()("myaccount-dashboard-groups", {
                "myaccount-dashboard-groups--rtl": u.i.isRtl()
            })
        }, void 0, t && n && t.map((function (e, t) {
            var r = n.filter((function (t) {
                return t.groupId === e.id
            }));
            return 0 === r.length ? null : C("section", {}, t, e.title && C("header", {}, void 0, I(e.title)), C(P, {
                modules: r.map((function (e) {
                    return M(M({}, e), {}, {
                        title: "string" == typeof e.title ? I(e.title, e.title) : e.title,
                        content: I(e.content, e.content),
                        description: I(e.description, e.description),
                        button: e.button && M(M({}, e.button), {}, {
                            text: I(e.button.text)
                        }),
                        footer: e.footer && M(M({}, e.footer), {}, {
                            text: I(e.footer.text),
                            link: e.footer.link && M(M({}, e.footer.link), {}, {
                                title: I(e.footer.link.title)
                            })
                        })
                    })
                }))
            }))
        })), r)
    }
}, , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "gtmEvent", (function () {
        return c
    })), n.d(t, "actionsGtmImpressionMapper", (function () {
        return u
    })), n.d(t, "actionsGtmMapper", (function () {
        return l
    }));
    var r = n(41);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var c = function (e) {
            var t = e.name,
                n = e.eventLabel,
                c = e.eventCategory,
                u = e.data,
                l = e.systemName,
                s = a(e, ["name", "eventLabel", "eventCategory", "data", "systemName"]);
            r.a.pushEvent(l, t, function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function (t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                eventLabel: n,
                eventCategory: c,
                flowData: u
            }, s))
        },
        u = function (e) {
            var t = e.data,
                n = e.name,
                r = e.eventCategory,
                o = e.systemName;
            return c({
                name: n,
                eventCategory: r,
                systemName: o,
                data: {
                    MA: i({}, "".concat(o), {
                        impressions: s(t)
                    })
                }
            })
        },
        l = function (e) {
            var t = e.data,
                n = e.name,
                r = e.eventCategory,
                o = e.systemName;
            return c({
                name: n,
                eventCategory: r,
                systemName: o,
                data: {
                    MA: i({}, "".concat(o), s(t))
                }
            })
        },
        s = function (e) {
            return Array.isArray(e) ? e.map((function (e) {
                return f(e)
            })) : f(e)
        },
        f = function (e) {
            var t = e.id,
                n = e.resources,
                r = (n = void 0 === n ? {} : n).title,
                o = void 0 === r ? {} : r,
                i = n.description,
                a = void 0 === i ? {} : i,
                c = n.button,
                u = void 0 === c ? {} : c,
                l = e.priority,
                s = e.category;
            return {
                id: t,
                position: e.position,
                title: o.key || "",
                description: a.key || "",
                cta: u.key || "",
                priority: l,
                category: s
            }
        }
}, , , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return f
    }));
    var r = n(12),
        o = n(50),
        i = n(36),
        a = n(10),
        c = Object(r.k)("@myaccount/REVOKE_TOKEN"),
        u = Object(r.k)("@myaccount/VALIDATE_TOKEN"),
        l = Object(r.k)("@myaccount/LEGACY_MA_LOGOUT"),
        s = function () {
            var e = function () {
                return o.a.logout()
            };
            return Object(r.f)({
                endpoint: i.d.LEGACY_MA_LOGOUT,
                method: "GET",
                nextType: l,
                onFailureAction: e,
                onSuccessAction: e
            })
        },
        f = Object(r.f)({
            endpoint: i.d.TOKEN_VALIDATE,
            nextType: u
        });
    t.a = function () {
        var e = function () {
            return o.a.logout()
        };
        return Object(r.f)({
            endpoint: i.d.TOKEN_REVOKE,
            method: "POST",
            nextType: c,
            data: {
                accessToken: o.a.getAccessToken()
            },
            onFailureAction: a.a.IS_PAYER() ? s : e,
            onSuccessAction: a.a.IS_PAYER() ? s : e
        })
    }
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_BALANCES_DATA", (function () {
        return o
    })), n.d(t, "SET_ERROR", (function () {
        return i
    })), n.d(t, "SET_BALANCES_ORDER", (function () {
        return a
    })), n.d(t, "REORDER", (function () {
        return c
    }));
    var r = n(12),
        o = Object(r.k)("FETCH_BALANCES_DATA"),
        i = "SET_ERROR",
        a = Object(r.k)("SET_BALANCES_ORDER"),
        c = "REORDER"
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_TRANSACTIONS_DATA", (function () {
        return o
    })), n.d(t, "GET_WIDGET_TEMPLATE", (function () {
        return i
    }));
    var r = n(12),
        o = Object(r.k)("homepage/FETCH_TRANSACTIONS_DATA"),
        i = Object(r.k)("homepage/GET_WIDGET_TEMPLATE")
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return u
    }));
    var r = n(2),
        o = n(32),
        i = n(8),
        a = n(43),
        c = n(36),
        u = r.i.translate;
    (o.b === o.a.dev || o.b === o.a.qa) && a.a.traceResource && JSON.parse(a.a.traceResource) && r.i.setEchoResourceKey(!0);
    var l = new r.a,
        s = {
            locale: i.b ? Object(i.d)() : l.get("locale") || "en",
            apiUrl: c.b,
            myaccountApiRoot: "gw-myaccount/",
            getUserUrl: "gw-myaccount/api/v1/InitUI",
            fbAppId: 0x5c265d00bbf6a
        };
    t.a = s
}, , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "LocalBalanceStatus", (function () {
        return r
    })), n.d(t, "ItemTypes", (function () {
        return o
    }));
    var r = {
            NotIssued: 0,
            IssuesdNotActivatd: 1,
            Activated: 2,
            Hold: 11,
            Blocked: 99,
            Cancelled: 100,
            LostOrStolen: 101
        },
        o = {
            BALANCE: "balance"
        }
}, , , , function (e, t, n) {
    "use strict";
    n(0), n(1);
    var r, o = n(5),
        i = n(23),
        a = n(60),
        c = n(134),
        u = n(49),
        l = n(4),
        s = n.n(l),
        f = n(13);
    n(972);
    t.a = Object(o.c)(null, {
        push: i.c
    })((function (e) {
        var t = e.className,
            n = e.text,
            o = e.theme,
            i = e.link,
            l = e.push,
            d = e.target,
            p = e.eligibleKey,
            y = e.disabled,
            m = e.onClick,
            v = e.testid,
            b = e.gtmEvent,
            h = s()("myaccount-link-button", t, {
                "myaccount-link-button--hidden": p && !Object(f.e)({
                    key: p
                })
            });
        return function (e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps,
                a = arguments.length - 3;
            if (t || 0 === a || (t = {
                    children: void 0
                }), 1 === a) t.children = o;
            else if (a > 1) {
                for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
                t.children = c
            }
            if (t && i)
                for (var l in i) void 0 === t[l] && (t[l] = i[l]);
            else t || (t = i || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }(a.b, {
            disabled: y,
            className: h,
            text: n,
            theme: o,
            onClick: function () {
                if (b && b(), m) m();
                else {
                    var e = Object(c.a)(i);
                    switch (e.type) {
                        case u.b.external:
                            window.open(e.href, d || "_self");
                            break;
                        case u.b.deeplink:
                        case u.b.internal:
                            l(e.href)
                    }
                }
            },
            "data-testid": v
        })
    }))
}, , function (e, t, n) {
    "use strict";
    var r = n(8),
        o = n(77),
        i = n(0),
        a = n.n(i),
        c = n(96),
        u = n(25),
        l = n(54),
        s = n(102),
        f = n(542),
        d = n(12),
        p = n(224),
        y = n(219),
        m = n(100),
        v = n(162),
        b = n(23),
        h = n(28);

    function g(e) {
        return function (e) {
            if (Array.isArray(e)) return O(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function j(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? w(Object(n), !0).forEach((function (t) {
                S(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var x = {
            main: {
                hasTitle: !1
            },
            navbar: {
                isOpen: !1
            },
            rightPane: {
                isOpen: !1
            },
            fullScreenModal: null,
            responsiveSidebar: {
                list: [],
                currentPointer: -1
            },
            unreadNotificationsCount: 0
        },
        N = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = t.type,
                r = t.payload;
            switch (n) {
                case h.p:
                    return j(j({}, e), {}, {
                        main: j(j({}, e.main), {}, {
                            hasTitle: r
                        })
                    });
                case h.m:
                    return j(j({}, e), {}, {
                        navbar: j(j({}, e.navbar), {}, {
                            isOpen: r
                        })
                    });
                case h.o:
                    return j(j({}, e), {}, {
                        rightPane: j(j({}, e.rightPane), {}, {
                            isOpen: r
                        })
                    });
                case h.l:
                    return j(j({}, e), {}, {
                        fullScreenModal: j(j({}, e.fullScreenModal), {}, {
                            isOpen: r
                        })
                    });
                case h.g:
                    return j(j({}, e), {}, {
                        fullScreenModal: null
                    });
                case b.a:
                    return j(j({}, e), {}, {
                        navbar: j(j({}, e.navbar), {}, {
                            isOpen: !1
                        })
                    });
                case h.j:
                    return j(j({}, e), {}, {
                        responsiveSidebar: j(j({}, e.responsiveSidebar), {}, {
                            list: 0 === e.responsiveSidebar.list.length ? e.responsiveSidebar.list : [{
                                isOpen: !0
                            }],
                            currentPointer: 0 === e.responsiveSidebar.list.length ? e.responsiveSidebar.currentPointer : 0,
                            selectedRow: r.key
                        })
                    });
                case h.n:
                    var o = r ? e.responsiveSidebar.currentPointer + 1 : e.responsiveSidebar.currentPointer;
                    return j(j({}, e), {}, {
                        responsiveSidebar: j(j({}, e.responsiveSidebar), {}, {
                            list: [].concat(g(e.responsiveSidebar.list.slice(0, o)), [{
                                isOpen: r
                            }]),
                            currentPointer: o
                        })
                    });
                case h.b:
                    return j(j({}, e), {}, {
                        responsiveSidebar: j(j({}, e.responsiveSidebar), {}, {
                            list: e.responsiveSidebar.list.slice(0, -1),
                            currentPointer: e.responsiveSidebar.currentPointer - 1
                        })
                    });
                case h.f:
                    return j(j({}, e), {}, {
                        userScreen: r
                    })
            }
            return e
        },
        T = n(15),
        A = n.n(T),
        _ = n(10);

    function k(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }

    function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? P(Object(n), !0).forEach((function (t) {
                M(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var E = A()({
            notificationsReady: !1,
            notifications: {},
            unreadNotificationsCount: 0
        }),
        C = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = t.type,
                r = t.payload;
            switch (n) {
                case h.c.FAILURE:
                case h.c.SUCCESS:
                    return _.a.IS_PAYER() ? L(L({}, e), {}, {
                        notifications: r || e.notifications,
                        notificationsReady: !0
                    }) : L(L({}, e), {}, {
                        unreadNotificationsCount: r && r.unreadCount
                    });
                case h.i:
                    return L(L({}, e), {}, {
                        unreadNotificationsCount: r.change && e.unreadNotificationsCount + r.change
                    });
                case h.e:
                case h.d.FAILURE:
                case h.d.SUCCESS:
                    var o = e.notifications,
                        i = o.InitiatePayment,
                        a = k(o, ["InitiatePayment"]);
                    return L(L({}, e), {}, {
                        notifications: L(L({}, a), {
                            InitiatePayment: L(L({}, i), {}, {
                                Hidden: !0
                            })
                        })
                    })
            }
            return e
        },
        I = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return 0 == Object.keys(e) ? null : Object(l.c)(e)
        },
        D = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return 0 == Object.keys(e) ? null : Object(l.c)(e)
        },
        R = n(13);

    function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function z(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? B(Object(n), !0).forEach((function (t) {
                $(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function $(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var U = {
            currentRoute: null
        },
        F = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case h.a:
                case b.a:
                    return z(z({}, e), {}, {
                        currentRoute: Object(R.b)(Object(R.d)(), window.location.pathname)
                    })
            }
            return e
        },
        Y = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = I(e.modules),
                r = D(e.widgets);
            return Object(l.c)({
                router: Object(s.c)(t),
                form: f.a,
                appStatus: d.d,
                captcha: p.c,
                toasts: m.f,
                challenge: v.c,
                tables: y.J,
                notifications: C,
                layout: N,
                modules: n,
                widgets: r,
                eligibility: F
            })
        },
        G = n(533),
        q = n(2),
        V = n(355),
        Q = n(99),
        H = n(26),
        W = n(130),
        J = n(24),
        Z = 0,
        K = function (e) {
            return function (t) {
                return function (n) {
                    t(n);
                    var r = e.dispatch;
                    switch (n.type) {
                        case h.l:
                            window.clearTimeout(Z), n.payload || (Z = window.setTimeout((function () {
                                r(Object(J.e)())
                            }), 550))
                    }
                }
            }
        },
        X = n(50),
        ee = n(36),
        te = n(9);

    function ne(e) {
        return function (e) {
            if (Array.isArray(e)) return re(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return re(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return re(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var oe, ie = (oe = [], {
            enhancer: function (e) {
                return function (t) {
                    return function (n) {
                        if (!oe.length) return t(n);
                        var r = oe.map((function (t) {
                            return t(e)
                        }));
                        return l.d.apply(void 0, ne(r))(t)(n)
                    }
                }
            },
            injectMiddleware: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                oe = [].concat(ne(oe), t)
            }
        }),
        ae = ie.enhancer;
    te.a.injectMiddleware = ie.injectMiddleware;
    var ce = n(167),
        ue = n(3);

    function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function se(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? le(Object(n), !0).forEach((function (t) {
                fe(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function fe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var de = ue.a.paymentrequestreceived,
        pe = ue.a.reports,
        ye = ue.a.paymentmethod,
        me = ue.a.transactions,
        ve = ue.a.notifications,
        be = ue.a.fees,
        he = function (e) {
            return function (t) {
                return function (n) {
                    t(n);
                    var r = e.dispatch;
                    switch (n.type) {
                        case b.a:
                            if (!H.a && ce.a.urlChanged(), _.a.IS_PAYER()) {
                                var o = n.payload.location,
                                    i = ge(o.pathname);
                                i && r(Object(b.d)(se(se({}, o), {}, {
                                    pathname: i
                                })))
                            }
                    }
                }
            }
        },
        ge = function (e) {
            var t = [me, de, pe, ye, ve, be];
            for (var n in t)
                if (e.includes(t[n].oldPathname)) return t[n].pathname
        };

    function Oe(e) {
        return function (e) {
            if (Array.isArray(e)) return we(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return we(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return we(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function we(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var je, Se = X.a.needsAuthorization(),
        xe = r.b ? r.e : X.a.reauthorizeOnFailure,
        Ne = function (e) {
            return 0 !== e.indexOf(Q.a.apiUrl) ? null : Se ? X.a.getAccessToken(e) : r.b && window.getMyAccountAccessToken ? window.getMyAccountAccessToken(e) : void 0
        },
        Te = n(49);

    function Ae(e) {
        return function (e) {
            if (Array.isArray(e)) return Pe(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || ke(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _e(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || ke(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ke(e, t) {
        if (e) {
            if ("string" == typeof e) return Pe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : void 0
        }
    }

    function Pe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Le(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }

    function Me(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise((function (r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    Le(i, r, o, a, c, "next", e)
                }

                function c(e) {
                    Le(i, r, o, a, c, "throw", e)
                }
                a(void 0)
            }))
        }
    }

    function Ee(e, t, n, r) {
        je || (je = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: je,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    n.d(t, "b", (function () {
        return Ie
    }));
    var Ce, Ie = r.b ? Object(o.b)() : Object(o.a)(),
        De = (Ce = Ie, Object(l.e)(Y({}, Ce), function (e) {
            var t = [Object(G.a)(e), Object(v.b)({
                isApiResponse: d.l.isAPICallResponse,
                onLocked: function (e, t, n) {
                    return n && n.preferredUrl && (window.location.href = n.preferredUrl)
                },
                cancelledResponse: {
                    status: 400,
                    body: {},
                    cancelledChallenge: !0
                }
            }), Object(V.d)({
                isAPICallResponse: d.l.isAPICallResponse
            }), Object(p.b)({
                apiRequestActionType: d.a
            }), Se && !X.a.getIsTokenManagedExternally() && Object(d.b)({
                reauthorize: xe,
                refreshTokenUrl: ee.d.TOKEN,
                getExpiration: X.a.getExpiration,
                onRefreshToken: function (e) {
                    r.b || X.a.refreshSso(), X.a.updateAuth(e)
                }
            }), Object(d.c)({
                apiUrl: Q.a.apiUrl,
                alwaysUseQaz: !0,
                getAccessToken: Ne,
                unauthorizedStatusCodes: r.b ? [401, 403] : Se ? [401] : [],
                reauthorize: xe
            }, [], [v.d]), Object(d.i)(W.e), !r.b && K, ae, !H.a && he];
            void 0 !== window.ssoTokenManager && "function" == typeof window.ssoTokenManager.setLastActionDate && t.push((function () {
                return function (e) {
                    return function (t) {
                        e(t), window.ssoTokenManager.setLastActionDate(new Date)
                    }
                }
            }));
            var n = [l.a.apply(void 0, Oe(t.filter((function (e) {
                return !!e
            }))))];
            return Object(q.b)(n), l.d.apply(void 0, n)
        }(Ce)));
    De.asyncReducers = {
        modules: {},
        widgets: {}
    };
    var Re = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Te.a.modules;
            De.asyncReducers[n].hasOwnProperty(e) || (De.asyncReducers[n][e] = t, De.replaceReducer(Y(De.asyncReducers, Ie)))
        },
        Be = Ee(u.b, {
            width: "0",
            height: "2px",
            timeline: !0
        }),
        ze = function (e, t, n, r) {
            return Object(i.lazy)(Me(regeneratorRuntime.mark((function o() {
                var i, a, c, u, l, s;
                return regeneratorRuntime.wrap((function (o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return o.next = 2, Promise.all([e && e.promise ? "function" == typeof e.promise ? e.promise() : e.promise : Promise.resolve(null), t && t.promise ? "function" == typeof t.promise ? t.promise() : t.promise : Promise.resolve(null), n && n.promise ? "function" == typeof n.promise ? n.promise() : n.promise : Promise.resolve(null)]);
                        case 2:
                            return i = o.sent, a = _e(i, 3), c = a[0], u = a[1], l = a[2], u && Re(t.name, u.default, r), (s = l && l.default) && te.a.injectMiddleware.apply(te.a, Ae(Array.isArray(s) ? s : [s])), o.abrupt("return", c || {
                                default: function () {
                                    return !1
                                }
                            });
                        case 11:
                        case "end":
                            return o.stop()
                    }
                }), o)
            }))))
        };
    te.a.injectReducer = Re, te.a.injectRoute = function (e) {
        var t = e.path,
            n = e.component,
            r = e.reducer,
            o = e.middleware,
            a = ze(n, r, o, Te.a.modules),
            u = Ee(i.Suspense, {
                fallback: Be
            }, void 0, Ee(a, {}));
        return [Ee(c.b, {
            path: t,
            component: function () {
                return u
            }
        }, t)]
    }, te.a.injectWidget = function (e) {
        var t = e.component,
            n = e.reducer,
            r = e.middleware,
            o = ze(t, n, r, Te.a.widgets);
        return {
            outlet: function (e) {
                return Ee(i.Suspense, {
                    fallback: null
                }, void 0, a.a.createElement(o, e))
            }
        }
    };
    t.a = De
}, , , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    })), n.d(t, "b", (function () {
        return o
    })), n.d(t, "c", (function () {
        return i
    }));
    var r = function (e) {
            return e.eligibility && e.eligibility.currentRoute
        },
        o = function (e) {
            var t = r(e);
            if (t) {
                var n = t.firstLevel,
                    o = t.breadcrumbs;
                if (!n && o) return t.breadcrumbs.slice(1)
            }
        },
        i = function (e, t) {
            var n = r(e);
            if (n) return t === n.pathname || t !== (window["__base-href"] || "/") && new RegExp("^".concat(t, "($|W)*")).test(n.pathname)
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_DATA", (function () {
        return o
    })), n.d(t, "SEND_JUMBOTRON_CLICKED", (function () {
        return i
    })), n.d(t, "SEND_JUMBOTRON_CLOSED", (function () {
        return a
    })), n.d(t, "RESET_DATA", (function () {
        return c
    }));
    var r = n(12),
        o = Object(r.k)("jumbotronTemplates/FETCH_DATA"),
        i = Object(r.k)("SEND_JUMBOTRON_CLICKED"),
        a = Object(r.k)("SEND_JUMBOTRON_CLOSED"),
        c = "jumbotronTemplates/RESET_DATA"
}, , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "useMock", (function () {
        return a
    })), n.d(t, "systemName", (function () {
        return c
    })), n.d(t, "callApiRoot", (function () {
        return u
    })), n.d(t, "apiFetchData", (function () {
        return l
    })), n.d(t, "fetchDataUrl", (function () {
        return s
    })), n.d(t, "jumbotronClickedUrl", (function () {
        return f
    })), n.d(t, "jumbotronClosedUrl", (function () {
        return d
    }));
    var r = n(51),
        o = n.n(r),
        i = n(55),
        a = !0,
        c = "Jumbotron",
        u = o()(Object(i.a)("myaccount"), "gw-promotion"),
        l = "api/promotions/v1",
        s = function (e, t, n) {
            return o()(u, l, function (e, t, n) {
                return "?portalTypeId=".concat(n, "&locationId=4&locale=").concat(t, "&channelLocationId=").concat(e)
            }(e, t, n))
        },
        f = o()(u, l, "Clicked"),
        d = o()(u, l, "CloseClicked")
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "JUMBOTRON_TEMPLATES", (function () {
        return r
    })), n.d(t, "JUMBOTRON_LOCATION", (function () {
        return o
    })), n.d(t, "JUMBOTRON_PORTAL_TYPES", (function () {
        return i
    }));
    var r = {
            default: 1,
            promotional: 2
        },
        o = {
            homepage: 1
        },
        i = {
            payer: 1,
            receiver: 2
        }
}, , , function (e, t, n) {
    "use strict";
    var r, o = n(12),
        i = n(2),
        a = n(10),
        c = n(99),
        u = n(18),
        l = n.n(u),
        s = n(8),
        f = n(59),
        d = n(41),
        p = function (e) {
            var t = e.customerId,
                n = e.isFirstLogin,
                r = e.medallia,
                o = "isGtmFirstLoginSent-".concat(t);
            n && !localStorage.getItem(o) && (d.a.push({
                event: "CE Myaccount First Login",
                route: "/",
                systemName: "MyAccountB2B",
                user: {
                    accountHolderId: t,
                    locale: r ? r.userLanguage : void 0
                },
                eventAction: void 0,
                eventCategory: void 0,
                eventLabel: void 0,
                eventNonInteraction: void 0,
                eventValue: void 0,
                flowData: void 0,
                step: void 0,
                virtualPage: void 0
            }), localStorage.setItem(o, !0))
        },
        y = function (e) {
            var t = e.medallia;
            window.medallia = window.medallia || t
        },
        m = {};

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.d(t, "b", (function () {
        return b
    })), n.d(t, "d", (function () {
        return h
    })), n.d(t, "a", (function () {
        return g
    })), n.d(t, "c", (function () {
        return O
    }));
    var b = "@payoneer/GET_BEHAVIORS",
        h = "@payoneer/GET_RESOURCES",
        g = "@payoneer/GET_ASSETS",
        O = "@myaccount/GET_USER",
        w = (v(r = {}, b, Object(o.g)({
            type: b,
            isReady: i.c.isReady.bind(i.c),
            onSuccess: function (e, t) {
                return i.c.initialize(t, e)
            }
        })), v(r, h, Object(o.g)({
            type: h,
            isReady: i.i.isReady.bind(i.i),
            onSuccess: function (e, t) {
                var n = i.i.isReady() ? i.i.getLocale() : t.locale || a.a.locale,
                    r = t.resources || t;
                i.i.initialize(n, r, e, l.a), s.b && (i.i.initialize(n, r), window.__LEGACY_SYSTEM_INIT_ASSETS__ = e), a.a.locale = n, c.a.locale = n
            }
        })), v(r, g, Object(o.g)({
            type: g,
            isReady: function (e) {
                return i.i.isReady(e) && i.c.isReady(e)
            },
            onSuccess: function (e, t) {
                var n = i.i.isReady() ? i.i.getLocale() : t.locale || a.a.locale,
                    r = t.resources;
                i.i.initialize(n, r, e, l.a), (s.b || f.a) && (i.i.initialize(n, r), window.__LEGACY_SYSTEM_INIT_ASSETS__ = e), a.a.locale = n, a.a.langId = t.langId || a.a.langId, c.a.locale = n, i.c.initialize(t.behaviors, e),
                    function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e in m || !t.behaviors || (m[e] = t.behaviors)
                    }(e, t)
            }
        })), v(r, O, Object(o.g)({
            type: O,
            isReady: a.a.isReady.bind(a.a),
            onSuccess: function (e, t) {
                a.a.onSuccess.call(a.a, e, t), y(t), p(t), i.i.initialize(t.locale || "en", t.resources, e, l.a), i.j.initializeNumeral(t.locale || "en"), i.c.initialize(t.behaviors, e)
            }
        })), r);
    t.e = w
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(23),
        c = n(4),
        u = n.n(c),
        l = n(52),
        s = n(26),
        f = n(8),
        d = n(2),
        p = n(24),
        y = n(53),
        m = n(118),
        v = n(44),
        b = n(6),
        h = n(270),
        g = n(345),
        O = n(225),
        w = n.n(O);
    n(970);

    function j(e) {
        return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function S(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function x(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function A(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = P(e);
            if (t) {
                var o = P(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return _(this, n)
        }
    }

    function _(e, t) {
        return !t || "object" !== j(t) && "function" != typeof t ? k(e) : t
    }

    function k(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function P(e) {
        return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var M = d.d[0].toUpperCase() + d.d.substring(1),
        E = S("span", {
            className: "myaccount-page-title__separator"
        }),
        C = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(i, e);
            var t, n, r, o = A(i);

            function i() {
                var e;
                x(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return L(k(e = o.call.apply(o, [this].concat(n))), "hasBack", (function (t) {
                    var n = e.props,
                        r = n.backFunc;
                    return n.forceBack || r || !(f.b || t)
                })), L(k(e), "handleBack", (function () {
                    var t = e.props,
                        n = t.currentRoute,
                        r = t.backFunc,
                        o = t.push,
                        i = t.goBack,
                        a = t.forceBack,
                        c = n && n.backPathname;
                    a ? i() : r ? r() : c ? o(c) : i()
                })), e
            }
            return t = i, (n = [{
                key: "componentDidMount",
                value: function () {
                    var e = this.props,
                        t = e.sticky,
                        n = e.toggleTitleN;
                    t && n(!0)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    var e = this.props,
                        t = e.sticky,
                        n = e.toggleTitleN;
                    t && n(!1)
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.className,
                        n = e.svg,
                        r = e.title,
                        o = e.sticky,
                        i = e.desktopActionButtons,
                        a = e.mobileActionButtons,
                        c = e.toggleNavbarN,
                        p = e.fullScreenModal,
                        y = e.currentRoute,
                        m = e.noSeparators,
                        h = e.unreadNotificationsCount,
                        O = y && y.title,
                        j = y && y.svg,
                        x = !y || y.firstLevel,
                        N = r || d.i.translate(O),
                        T = n || j,
                        A = "";
                    return window.messagesCount && window.messagesCount > 0 ? A = "(".concat(window.messagesCount, ") ") : h > 0 && (A = "(".concat(h, ") ")), S("div", {
                        className: u()("myaccount-page-title", t, {
                            "myaccount-page-title--legacy": f.b || l.a,
                            "myaccount-page-title--rtl": d.i.isRtl(),
                            "myaccount-page-title--static": !o,
                            "myaccount-page-title--full-screen-modal": p,
                            "myaccount-page-title--no-separators": m,
                            "myaccount-page-title--webview": s.a
                        })
                    }, void 0, S(w.a, {
                        titleTemplate: "".concat(A).concat(M, ": %s"),
                        title: "string" != typeof N ? O : N
                    }), S("div", {
                        className: "myaccount-page-title__wrapper"
                    }, void 0, S("div", {
                        className: "myaccount-page-title__start"
                    }, void 0, !f.b && x && S(v.a, {
                        className: "page-icon",
                        icon: T
                    }), !f.b && x && S(v.a, {
                        className: "menu-icon",
                        icon: b.nb,
                        onClick: function () {
                            return c(!0)
                        }
                    }), this.hasBack(x) && S(v.a, {
                        className: "back-icon",
                        icon: b.Mb,
                        onClick: this.handleBack,
                        "data-testid": "pagetitle-icon-back",
                        rotate: d.i.isRtl() ? 0 : 180
                    }), !f.b && E, S("span", {
                        className: "title"
                    }, void 0, N)), S("div", {
                        className: "myaccount-page-title__end"
                    }, void 0, S(g.a, {
                        actionButtons: i
                    }), S(g.a, {
                        actionButtons: a || i,
                        isMobile: !0
                    }))))
                }
            }]) && N(t.prototype, n), r && N(t, r), i
        }(o.Component);
    C.defaultProps = {
        sticky: !0
    };
    t.a = Object(i.c)((function (e) {
        return {
            fullScreenModal: Object(y.d)(e),
            currentRoute: Object(m.a)(e),
            unreadNotificationsCount: Object(h.c)(e)
        }
    }), {
        toggleNavbarN: p.i,
        toggleTitleN: p.l,
        goBack: a.b,
        push: a.c
    })(C)
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return b
    })), n.d(t, "c", (function () {
        return h
    })), n.d(t, "b", (function () {
        return g
    }));
    var r = n(47),
        o = n.n(r),
        i = n(13),
        a = n(10),
        c = n(43),
        u = n(8),
        l = n(49),
        s = n(191);

    function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(n), !0).forEach((function (t) {
                p(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var m = function (e) {
            if (!e) return !1;
            switch (y(e)) {
                case "string":
                    return /[?|&]action=/.test(e);
                case "object":
                    return e.search && /[?|&]action=/.test(e.search)
            }
            return !1
        },
        v = function (e) {
            return "/".concat(e.substring(e.indexOf("?"), e.length))
        },
        b = function (e) {
            var t = l.b.internal,
                n = e,
                r = function (e) {
                    return e && e.startsWith("http")
                }(e),
                c = m(e);
            if (a.a.IS_PAYER() && c && r) {
                var f = e.search(/[?|&]action=/),
                    d = o.a.parse(e.substring(f), {
                        ignoreQueryPrefix: !0
                    }).action,
                    p = a.a.deeplinks[d];
                if (p) {
                    var y = Object(i.a)(s.a, {
                        key: "key",
                        value: p.moduleKey
                    });
                    y && !y.payer && (t = l.b.external)
                }
            }
            return r ? c ? (t = u.b ? l.b.external : l.b.internal, n = u.b ? e : v(e)) : t = l.b.external : c ? (t = u.b ? l.b.external : l.b.internal, n = u.b ? function (e) {
                return "".concat(window.location.origin).concat(v(e))
            }(e) : e) : t = l.b.internal, {
                type: t,
                href: n
            }
        },
        h = function (e) {
            var t = e.router.location;
            if (m(t)) {
                var n = function (e) {
                    if (a.a.deeplinks) {
                        var t = g(e),
                            n = t.action;
                        if (n) {
                            var r = a.a.deeplinks[n];
                            if (r) return d(d({}, r), {}, {
                                query: t
                            })
                        }
                    }
                }(e);
                if (n) {
                    var r = n.moduleKey,
                        o = n.query,
                        c = n.params,
                        u = o || {},
                        l = c || {};
                    "string" == typeof l && (l = JSON.parse(l));
                    var s = Object(i.a)(Object(i.d)(), {
                        key: "key",
                        value: r
                    });
                    if (s) return {
                        pathname: s.pathname,
                        state: d(d({}, u), l)
                    }
                }
            }
        },
        g = function (e) {
            var t = d({}, e.router.location.state);
            return e.router.location.search && Object.assign(t, Object(c.b)(e)), t
        }
}, , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_JUMBOTRON_DATA", (function () {
        return o
    })), n.d(t, "JUMBOTRON_VISIBLE", (function () {
        return i
    }));
    var r = n(12),
        o = Object(r.k)("FETCH_JUMBOTRON_DATA"),
        i = "homepage/jumbotron/JUMBOTRON_VISIBLE"
}, , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "systemName", (function () {
        return o
    })), n.d(t, "promotionSystemName", (function () {
        return i
    })), n.d(t, "getApiUrl", (function () {
        return a
    })), n.d(t, "getAdsEndPoint", (function () {
        return c
    })), n.d(t, "sendAdClickedEndPoint", (function () {
        return u
    }));
    var r = n(291),
        o = "ActionsRequiredApi",
        i = "promotions",
        a = function () {
            return "gw-promotion/api/promotions/v1"
        },
        c = "".concat(a(), "?numberOfAds=").concat(r.MAX_ADS, "&locationId=").concat(r.ADS_LOCATION.homepage, "&locale="),
        u = "".concat(a(), "/Clicked")
}, , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_PROMOTIONS_DATA", (function () {
        return o
    })), n.d(t, "SEND_AD_CLICKED", (function () {
        return i
    }));
    var r = n(12),
        o = Object(r.k)("FETCH_PROMOTIONS_DATA"),
        i = Object(r.k)("SEND_AD_CLICKED")
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "apiUrl", (function () {
        return o
    })), n.d(t, "getActionsRequiredUrl", (function () {
        return i
    })), n.d(t, "systemName", (function () {
        return a
    }));
    var r = n(292),
        o = "gw-actionsrequired/actionrequired/v1",
        i = "".concat(o, "?&maxactions=").concat(r.MAX_ACTIONS, "&categories=").concat(r.ACTION_CATEGORY.jumbotron, "&locale="),
        a = "jumbotron"
}, , function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = n.n(o),
        a = n(1),
        c = n.n(a),
        u = n(7),
        l = n(61);
    var s, f, d = Object(u.f)(l.a)(r || (s = ["\n    && {\n        width: ", ";\n        padding-top: ", ";\n        margin-bottom: ", ";\n    }\n"], f || (f = s.slice(0)), r = Object.freeze(Object.defineProperties(s, {
        raw: {
            value: Object.freeze(f)
        }
    }))), (function (e) {
        return e.width || "auto"
    }), (function (e) {
        return e.paddingTop || "28px"
    }), (function (e) {
        return e.marginBottom || "20px"
    }));

    function p() {
        return (p = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function y(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var m = function (e) {
        var t = e.children,
            n = y(e, ["children"]);
        return i.a.createElement(d, p({
            shadow: !0
        }, n), t)
    };
    m.proptTypes = {
        children: c.a.node.isRequired
    };
    t.a = m
}, , function (e, t, n) {
    "use strict";
    var r = {
            CLOSE_SIDEBAR: "CLOSE_SIDEBAR"
        },
        o = "SET_HEADER";
    n.d(t, "d", (function () {
        return i
    })), n.d(t, "b", (function () {
        return a
    })), n.d(t, "c", (function () {
        return c
    })), n.d(t, "a", (function () {
        return r
    }));
    var i = function (e) {
            var t = e.onBackMessagePayload,
                n = e.title,
                r = void 0 === n ? "" : n,
                i = e.buttonType;
            return {
                type: o,
                payload: {
                    onBackMessagePayload: t,
                    title: r,
                    buttonType: void 0 === i ? "close" : i
                }
            }
        },
        a = function (e) {
            try {
                var t = function (t) {
                    var n = s(t),
                        r = u(t.data);
                    n && r && e(r)
                };
                return window.addEventListener("message", t),
                    function () {
                        window.removeEventListener("message", t)
                    }
            } catch (e) {
                return !1
            }
        },
        c = function (e) {
            try {
                return (window.ReactNativeWebView || window).postMessage(JSON.stringify(e)), !0
            } catch (e) {
                return !1
            }
        },
        u = function (e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return null
            }
        },
        l = function (e) {
            try {
                return e
            } catch (t) {
                return e
            }
        },
        s = function (e) {
            try {
                var t = l(e.origin),
                    n = l(window.location.origin),
                    r = !t.endsWith(n.substring(n.indexOf(".")));
                return !(!t || r)
            } catch (e) {
                return !1
            }
        }
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return m
    }));
    var r = n(8),
        o = n(50),
        i = n(10),
        a = n(52),
        c = n(59);

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = n(210).a;
    var f = function () {},
        d = {
            urlChanged: f,
            getTourByName: f
        },
        p = "".concat(s, "/lib/tours/tours.min.js"),
        y = "".concat(s, "/lib/tours/tours.min.css"),
        m = new(function () {
            function e() {
                var t = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, "urlChanged", (function () {
                    t.tr && t.tr.urlChanged(i.a.locale)
                })), l(this, "customUrlChange", (function (e) {
                    t.tr && t.tr.urlChanged(e, i.a.locale)
                })), l(this, "showTour", (function (e, n) {
                    t.tr && t.tr.getTourByName(e, i.a.locale, !!n)
                })), this.initTours = this.initTours.bind(this);
                var n = document,
                    r = n.createElement("script"),
                    o = n.createElement("link");
                r.id = "toursScript", n.getElementById(r.id) || (r.type = "text/javascript", r.async = !0, r.onload = this.initTours, r.src = p, o.href = y, o.rel = "stylesheet", o.async = !0, n.getElementsByTagName("head")[0].appendChild(r), n.getElementsByTagName("body")[0].appendChild(o))
            }
            var t, n, s;
            return t = e, (n = [{
                key: "initTours",
                value: function () {
                    this.tr = a.a ? d : new Tours({
                        isAuth: !(r.b || c.a),
                        lang: i.a.locale || "en",
                        getAuthToken: o.a.getAccessToken
                    })
                }
            }]) && u(t.prototype, n), s && u(t, s), e
        }());
    r.b && (window.tour = m)
}, , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getBalancesCards", (function () {
        return o
    })), n.d(t, "getBalancesResources", (function () {
        return i
    }));
    var r = function (e) {
            return e.widgets.balances
        },
        o = function (e) {
            return r(e).balances
        },
        i = function (e) {
            return r(e).resources
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "validateData", (function () {
        return a
    })), n.d(t, "jumbotronGtmViewEvent", (function () {
        return c
    })), n.d(t, "jumbotronGtmClickEvent", (function () {
        return u
    })), n.d(t, "jumbotronGtmCloseEvent", (function () {
        return l
    })), n.d(t, "jumbotronGtmAdditionalInfo", (function () {
        return s
    }));
    var r = n(127),
        o = n(41),
        i = n(126),
        a = function (e) {
            if (!(null == e ? void 0 : e.template)) return !1;
            switch (e.template) {
                case r.JUMBOTRON_TEMPLATES.default:
                case r.JUMBOTRON_TEMPLATES.promotional:
                    return function (e) {
                        return e && !!e.header && !!e.content
                    }(e);
                default:
                    return !1
            }
        },
        c = function (e) {
            o.a.pushEvent(i.systemName, "Jumbotron View banner", {
                eventCategory: "Jumbotron",
                eventAction: "View_banner",
                eventLabel: e
            })
        },
        u = function (e) {
            return o.a.pushEvent(i.systemName, "Jumbotron Click CTA", {
                eventCategory: "Jumbotron",
                eventAction: "Click_CTA",
                eventLabel: e
            })
        },
        l = function (e) {
            return o.a.pushEvent(i.systemName, "Jumbotron close banner", {
                eventCategory: "Jumbotron",
                eventAction: "Close_banner",
                eventLabel: e
            })
        },
        s = function (e) {
            return o.a.pushEvent(i.systemName, "Jumbotron click collapse text", {
                eventCategory: "Jumbotron",
                eventAction: "Click_Collapable_text",
                eventLabel: e
            })
        }
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_ACTIONS_REQUIRED_DATA", (function () {
        return o
    }));
    var r = n(12),
        o = Object(r.k)("FETCH_ACTIONS_REQUIRED_DATA")
}, , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getDataForBalancesImpressionGtm", (function () {
        return o
    })), n.d(t, "getDataForBalancesGtm", (function () {
        return i
    }));
    var r = n(85),
        o = function (e, t, n, o, i) {
            return Object(r.gtmEvent)({
                name: t,
                eventCategory: n,
                data: {
                    MA: {
                        balanceCarousel: {
                            impressions: a(e, o)
                        }
                    }
                },
                systemName: i
            })
        },
        i = function (e) {
            var t = e.data,
                n = e.name,
                o = e.eventCategory,
                i = e.total,
                c = e.systemName;
            return Object(r.gtmEvent)({
                name: n,
                eventCategory: o,
                data: {
                    MA: {
                        balanceCarousel: a(t, i)
                    }
                },
                systemName: c
            })
        },
        a = function (e, t) {
            if (e) return Array.isArray(e) ? e.map((function (e) {
                return c(e, t)
            })) : c(e, t)
        },
        c = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = e.Id,
                r = e.position,
                o = e.balance,
                i = o.amount,
                a = void 0 === i ? "" : i,
                c = o.currency,
                u = void 0 === c ? "" : c,
                l = e.content,
                s = (l = void 0 === l ? {} : l).action,
                f = (s = void 0 === s ? {} : s).key,
                d = void 0 === f ? "" : f,
                p = e.footer,
                y = (p = void 0 === p ? {} : p).action,
                m = (y = void 0 === y ? {} : y).key,
                v = void 0 === m ? "" : m,
                b = e.status;
            return {
                id: n,
                status: b,
                position: r,
                amount: a,
                currency: u,
                cardAction: d,
                mainAction: v,
                total: t
            }
        }
}, , , , function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function (t) {
                i(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function (e) {
            return "/" === e.pathname ? window["__base-href"] || "/" : window["__base-href"] + e.pathname
        },
        c = function (e) {
            return o(o({}, e), {}, {
                pathname: a(e)
            })
        },
        u = n(8),
        l = n(52),
        s = n(6),
        f = [{
            key: "PaymentRequest",
            name: "paymentrequest",
            pathname: u.b ? "/getpaid/paymentrequest" : "/getpaid/requestapayment",
            title: "RequestAPayment.Text",
            icon: "icon-request__new",
            svg: s.Lb
        }, {
            key: "ReceivingAccount",
            name: "receivingaccounts",
            pathname: "/getpaid/receivingaccounts",
            title: "ReceivingAccounts.Text",
            icon: "icon-receiving-accounts__new",
            svg: s.Hb,
            childRoutes: [{
                key: "RequestNewReceivingAccount",
                name: "requestNewReceivingAccount",
                pathname: "/getpaid/receivingaccounts/requestNewReceivingAccount",
                title: "GLPS_Swift_Request_New_Account.Text",
                icon: "icon-receiving-accounts__new"
            }]
        }],
        d = [{
            key: "MakeAPayment",
            name: "makeapayment",
            pathname: "/pay/makeapayment",
            title: "InNetworkPayment.Text",
            icon: "icon-pay-to-payoneer-user__new",
            svg: s.vb,
            payer: !0
        }, {
            key: "PayBeneficiaryBank",
            name: "paybeneficiarybank",
            pathname: "/pay/paybeneficiarybank",
            title: "OutOfNetworkPayment.Text",
            icon: "icon-non-payoneer-user__new",
            svg: s.sb
        }, {
            key: "BatchPayBeneficiaryBank",
            name: "batchpaybeneficiarybank",
            pathname: "/pay/batchpaybeneficiarybank/:step",
            title: "PayOutsideNetworkBatch.Text",
            icon: "icon-mass-actions",
            svg: s.ub,
            payer: !0
        }, {
            key: "PayVat",
            name: "payvat",
            pathname: "https://vat.payoneer.com",
            title: "PayVat.Text",
            icon: "icon-pay-vat__new",
            svg: s.xb,
            static: !0
        }, {
            key: "PayToAmazonAdvertising",
            name: "paytoamazonadvertising",
            pathname: "/pay/paytoamazonadvertising",
            title: "PayAnAmazonAdvertisingInvoice.Text",
            icon: "icon-amazon-ad__new",
            svg: s.g
        }, {
            key: "PayToAmazonTransparency",
            name: "paytoamazontransparency",
            pathname: "/pay/paytoamazontransparency",
            title: "PayAnAmazonTransparencyInvoice.Text",
            icon: "icon-amazon-t__new",
            svg: s.i
        }, {
            key: "InitiatePayment",
            name: "initiatepayment",
            pathname: "/pay/initiatepayment",
            title: "InitiateAPayment.Text",
            icon: "icon-initiate-payment__new",
            svg: s.gb,
            payer: !0
        }, {
            key: "BatchPayment",
            name: "batchpayment",
            pathname: "/pay/batchpayment",
            title: "BatchPayment.Text",
            icon: "icon-mass-actions",
            svg: s.mb,
            payer: !0
        }, {
            key: "RecurringPayments",
            name: "recurringpayments",
            pathname: "/pay/recurringpayments",
            title: "RecurringPayments.Text",
            icon: "icon-reoccurnig-payment__new",
            svg: s.Jb,
            payer: !0
        }, {
            key: "ManageRecurringPayments",
            name: "managerecurringpayments",
            pathname: "/pay/managerecurringpayments",
            title: "ManageRecurringPayments.Text",
            icon: "icon-reoccurnig-payment__new",
            svg: s.kb,
            payer: !0
        }],
        p = [{
            key: "WithdrawFunds",
            name: "withdrawfunds",
            pathname: u.b ? "/withdrawal/withdrawfunds" : "/withdrawandtransfer/withdrawfunds",
            title: "WithdrawToBank.Text",
            icon: "icon-withdraw-to-bank__new",
            svg: s.cc
        }, {
            key: "AutoWithdrawal",
            name: "autowithdrawal",
            pathname: u.b ? "/withdrawal/recurring" : "/withdrawandtransfer/autowithdrawal",
            title: "AutomaticWithdrawalPlans.Text",
            icon: "icon-automatic-withdraw__new",
            svg: s.o
        }, {
            key: "CrossBalance",
            name: "crossbalance",
            pathname: u.b ? "/relations/crossbalance" : "/withdrawandtransfer/crossbalance",
            title: "ManageCurrencies.Text",
            icon: "icon-manage-currencies__new",
            svg: s.jb
        }, {
            key: "FundsConsolidationSubAccount",
            name: "fundsconsolidationsubaccount",
            pathname: u.b ? "/fundsconsolidation/subaccount" : "/withdrawandtransfer/fundsconsolidation/subaccount",
            title: "ConsolidateFunds.Text",
            icon: "icon-consolidate-funds__new",
            svg: s.H
        }, {
            key: "FundsConsolidationMainAccount",
            name: "fundsconsolidationmainaccount",
            pathname: u.b ? "/fundsconsolidation/mainaccount" : "/withdrawandtransfer/fundsconsolidation/mainaccount",
            title: "ConsolidateFunds.Text",
            icon: "icon-consolidate-funds__new",
            svg: s.H
        }, {
            key: "FundsConsolidationAdminAccount",
            name: "fundsconsolidationadminaccount",
            pathname: u.b ? "/fundsconsolidation/adminaccount" : "/withdrawandtransfer/fundsconsolidation/adminaccount",
            title: "ConsolidateFunds.Text",
            icon: "icon-consolidate-funds__new",
            svg: s.H
        }],
        y = [{
            key: "Transactions",
            name: "transactions",
            pathname: u.b ? "/activity/transactions" : "/accountactivity/transactions",
            oldPathname: "/track/transactions",
            title: "Transactions.Text",
            icon: "icon-track__new",
            svg: s.Yb,
            payer: !0
        }, {
            key: "PaymentRequestHistory",
            name: "paymentrequesthistory",
            pathname: u.b ? "/paymentrequesthistory" : "/accountactivity/paymentrequestsent",
            title: "PaymentRequestsSent.Text",
            icon: "icon-question__new",
            svg: s.zb
        }, {
            key: "PaymentRequestReceived",
            name: "paymentrequestreceived",
            pathname: "/accountactivity/paymentrequestreceived",
            oldPathname: "/track/paymentrequestreceived",
            title: "PaymentRequestsReceived.Text",
            icon: "icon-payment-requests__new",
            svg: s.Ab,
            payer: !0
        }, {
            key: "ReportsCenter",
            name: "reports",
            pathname: "/accountactivity/reports",
            oldPathname: "/track/reports",
            title: "Reports.Text",
            icon: "icon-billing-portal__new",
            svg: s.t,
            payer: !0
        }, {
            key: "AmazonBankStatement",
            name: "amazonbankstatement",
            pathname: u.b ? "/activity/amazonbank" : "/accountactivity/statements/amazonbank",
            title: "AmazonBankStatement.Text",
            icon: "icon-billing-portal__new",
            svg: s.h
        }, {
            key: "GPSDetailsConfirmationStatement",
            name: "gpsdconfirmation",
            pathname: u.b ? "/activity/gpsdconfirmation" : "/accountactivity/statements/gpsdconfirmation",
            title: "GPSDConfirmation.Text",
            icon: "icon-billing-portal__new",
            svg: s.V
        }, {
            key: "GoodStandingStatement",
            name: "goodstandingstatement",
            pathname: u.b ? "/activity/goodstanding" : "/accountactivity/statements/goodstanding",
            title: "GoodStandingStatement.Text",
            icon: "icon-billing-portal__new",
            svg: s.Y
        }, {
            key: "MonthlyStatement",
            name: "monthlystatement",
            pathname: u.b ? "/activity/monthly" : "/accountactivity/statements/monthly",
            title: "MonthlyStatement.Text",
            icon: "icon-billing-portal__new",
            svg: s.pb
        }, {
            key: "DigitalFirc",
            name: "digitalfirc",
            pathname: u.b ? "/activity/digitalfirc" : "/accountactivity/digitalFirc",
            title: "DigitalFirc.Text",
            icon: "icon-billing-portal__new",
            svg: s.S
        }],
        m = [{
            key: "BankManagement",
            name: "bankmanagement",
            pathname: u.b ? "/bankmanagement" : "/banksandcards/bankmanagement",
            title: "BankAccountsForWithdrawal.Text",
            icon: "icon-bank-account__new",
            svg: s.q
        }, {
            key: "CardManagement",
            name: "cardmanagement",
            pathname: u.b ? "/cardmanagement" : "/banksandcards/cardmanagement",
            title: "PayoneerCards.Text",
            icon: "icon-cards__new",
            svg: s.A
        }, {
            key: "ManageRecipientAccounts",
            name: "managerecipientaccounts",
            pathname: "/banksandcards/bankmanagement?recipient=true",
            title: "RecipientBankAccounts.Text",
            icon: "icon-question__new",
            svg: s.Ib
        }, {
            key: "PaymentMethods",
            name: "paymentmethod",
            pathname: "/banksandcards/paymentmethods",
            oldPathname: "/settings/paymentmethods",
            title: "PaymentMethods.Text",
            icon: "icon-payment-method__new",
            svg: s.yb,
            payer: !0
        }],
        v = [{
            key: "StoreManagement",
            name: "storemanagement",
            pathname: u.b ? "/relations/storemanagement" : "/businessnetwork/storemanagement",
            title: "StoreManager.Text",
            icon: "icon-marketplace__new",
            svg: s.lb
        }, {
            key: "Contacts1",
            name: "contacts",
            pathname: u.b ? "/relations/contacts" : "/businessnetwork/contacts",
            title: "ContactsYouWorkWith.Text",
            icon: "icon-contacts__new",
            svg: s.I
        }, {
            key: "FundingSources",
            name: "fundingsources",
            pathname: u.b ? "/relations/fundingsources" : "/businessnetwork/fundingsources",
            title: "CompaniesYouWorkWith.Text",
            icon: "icon-enterprise__new",
            svg: s.Q
        }, {
            key: "RafUiApi",
            name: "referafriend",
            pathname: u.b ? "/relations/referafriend" : "/businessnetwork/referafriend",
            title: "ReferAFriend.Text",
            icon: "icon-refer-friend__new",
            svg: s.Kb
        }, {
            key: "BusinessApplications",
            name: "businessapplications",
            pathname: "https://www.payoneer.com/partner-directory",
            title: "BusinessApplications.Text",
            icon: "icon-business-credit__new",
            svg: s.v,
            static: !0
        }],
        b = n(59),
        h = [{
            key: "WidgetCenter",
            name: "widgetcenter",
            pathname: "/settings/widgetcenter",
            title: "WidgetCenter.Text",
            icon: "icon-profile-settings__new",
            svg: s.Eb,
            payer: !0
        }, {
            key: "EditProfile",
            name: "editprofile",
            pathname: "/settings/editprofile",
            title: "ProfileSettings.Text",
            icon: "icon-profile-settings__new",
            svg: s.Eb,
            payer: !0
        }, {
            key: "SecuritySettings",
            name: "securitysettings",
            pathname: "/settings/securitysettings",
            title: "SecuritySettings.Text",
            icon: "icon-secured",
            svg: s.Pb,
            payer: !0
        }, {
            key: "FdcApplication",
            name: "fdc",
            pathname: b.a ? "/secure/fdc" : "/settings/fdc",
            title: "VerificationCenter.Text",
            icon: "icon-verified-info__new",
            svg: s.ac,
            payer: !0
        }, {
            key: "ThirdPartiesAccountingApi",
            name: "thirdpartiesaccounting",
            pathname: "/settings/third-parties-accounting",
            title: "AccountingSoftwareIntegration.Text",
            icon: "icon-calculator__new",
            svg: s.w,
            payer: !0
        }, {
            key: "TaxForms",
            name: "taxinformationstatus",
            pathname: u.b ? "/relations/taxinformationstatus" : "/settings/taxinformationstatus",
            title: "TaxForms.Text",
            icon: "icon-tax-forms__new",
            svg: s.Xb,
            payer: !0
        }, {
            key: "Language",
            name: "language",
            pathname: "/settings?language=true",
            title: "Language.Text",
            icon: "icon-language__new",
            svg: s.hb,
            payer: !0,
            static: !0
        }, {
            key: "NotificationSettings",
            name: "notificationsettings",
            pathname: "/settings/notificationsettings",
            title: "NotificationSettings.Text",
            icon: "icon-bell-notification__new",
            svg: s.s,
            payer: !0
        }];
    t.a = function e(t) {
        if (t) {
            var n = t.childRoutes;
            return n ? o(o({}, c(t)), {}, {
                childRoutes: n.map((function (t) {
                    return e(t)
                }))
            }) : c(t)
        }
    }({
        key: "Home",
        name: "home",
        pathname: u.b ? "/dashboard" : "/",
        title: "HomeMenu.Text",
        icon: "icon-home__new",
        svg: s.Z,
        firstLevel: !0,
        payer: !0,
        childRoutes: [{
            key: "GetPaid",
            name: "getpaid",
            pathname: "/getpaid",
            title: "GetPaidMenu.Text",
            icon: "icon-get-paid__new",
            svg: s.W,
            firstLevel: !0,
            childRoutes: f
        }, {
            key: "Pay",
            name: "pay",
            pathname: "/pay",
            title: "PayMenu.Text",
            icon: "icon-pay__new",
            svg: s.wb,
            firstLevel: !0,
            payer: !0,
            childRoutes: d
        }, {
            key: "WithdrawAndtransfer",
            name: "withdrawandtransfer",
            pathname: "/withdrawandtransfer",
            title: "WithdrawAndTransferMenu.Text",
            icon: "icon-bank-transfer__new",
            svg: s.dc,
            firstLevel: !0,
            childRoutes: p
        }, {
            key: "EarlyPayments",
            name: "earlypayments",
            pathname: u.b ? "/getpaid/earlypayments" : "/capitaladvance",
            title: "CapitalAdvance.Text",
            icon: "icon-early-payments__new",
            svg: s.M,
            firstLevel: !0
        }, {
            key: "AccountActivity",
            name: "accountactivity",
            pathname: "/accountactivity",
            title: "AccountActivityMenu.Text",
            icon: "icon-account-activity__new",
            svg: s.a,
            firstLevel: !0,
            payer: !0,
            childRoutes: y
        }, {
            key: "BanksAndCards",
            name: "banksandcards",
            pathname: "/banksandcards",
            title: "BanksAndCardsMenu.Text",
            icon: "icon-bank-card__new",
            svg: s.r,
            firstLevel: !0,
            payer: !0,
            childRoutes: m
        }, {
            key: "BusinessNetwork",
            name: "businessnetwork",
            pathname: "/businessnetwork",
            title: "BusinessNetworkMenu.Text",
            icon: "icon-my-network__new",
            svg: s.qb,
            firstLevel: !0,
            childRoutes: v
        }, {
            key: "Settings",
            name: "settings",
            pathname: "/settings",
            title: "SettingsMenu.Text",
            icon: "icon-settings__new",
            svg: s.Rb,
            firstLevel: !0,
            payer: !0,
            childRoutes: h
        }, {
            key: "NotificationsUiApi",
            name: "notifications",
            pathname: u.b ? "/settings/notifications" : "/notifications",
            oldPathname: "/settings/notifications",
            title: "Notifications.Text",
            icon: "icon-notification__new",
            svg: s.tb,
            firstLevel: !0,
            payer: !0
        }, {
            key: "FeesUI",
            name: "fees",
            pathname: l.a ? "/internal/fees" : u.b ? "/settings/fees" : "/fees",
            oldPathname: "/settings/fees",
            title: "PricingAndFees.Text",
            icon: "icon-pricing-fees__new",
            svg: s.Db,
            firstLevel: !0,
            payer: !0
        }, {
            key: "NotAllowed",
            name: "notallowed",
            pathname: "/notallowed",
            title: "NotAllowed.Text",
            icon: "",
            svg: s.e,
            firstLevel: !0
        }]
    })
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "q", (function () {
        return u
    })), n.d(t, "s", (function () {
        return l
    })), n.d(t, "m", (function () {
        return s
    })), n.d(t, "f", (function () {
        return f
    })), n.d(t, "b", (function () {
        return d
    })), n.d(t, "k", (function () {
        return v
    })), n.d(t, "h", (function () {
        return b
    })), n.d(t, "j", (function () {
        return h
    })), n.d(t, "i", (function () {
        return g
    })), n.d(t, "g", (function () {
        return O
    })), n.d(t, "e", (function () {
        return w
    })), n.d(t, "p", (function () {
        return j
    })), n.d(t, "n", (function () {
        return S
    })), n.d(t, "o", (function () {
        return x
    })), n.d(t, "r", (function () {
        return N
    })), n.d(t, "c", (function () {
        return T
    })), n.d(t, "d", (function () {
        return A
    })), n.d(t, "l", (function () {
        return _
    })), n.d(t, "a", (function () {
        return k
    }));
    var r = n(51),
        o = n.n(r),
        i = n(55),
        a = n(18),
        c = n.n(a),
        u = "transactions",
        l = "TRANSACTIONS_TABLE",
        s = "PENDING_TRANSACTIONS_TABLE",
        f = "FUTURE_TRANSACTIONS_TABLE",
        d = "gw-activity/",
        p = "api/reports/monthlyReport",
        y = "api/reports/exportReport",
        m = "api/reports/statement",
        v = o()(d, "api/activity/getMainTransactions"),
        b = o()(d, "api/activity/getMoreTransactions"),
        h = o()(d, "api/activity/getItemDetails"),
        g = o()(d, "api/reports"),
        O = (o()(Object(i.a)("myaccount"), d, p), o()(Object(i.a)("myaccount"), d, y)),
        w = o()(Object(i.a)("myaccount"), d, m),
        j = 10,
        S = screen.width > 767 ? 40 : 10,
        x = screen.width > 767 ? 50 : 20,
        N = 3e3,
        T = c()().subtract(90, "days"),
        A = c()(),
        _ = "sawLBD-",
        k = {
            PayOut: 1,
            PayIn: 2
        }
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getActionsRequiredData", (function () {
        return a
    })), n.d(t, "getActionsRequiredResources", (function () {
        return c
    }));
    var r = n(45),
        o = n(416),
        i = function (e) {
            return e.widgets.actionsRequired
        },
        a = function (e) {
            var t = i(e).actions.filter((function (e) {
                return Object(o.actionValidator)(e)
            }));
            return t.find((function (e) {
                return e.category === r.ACTION_CATEGORY.high
            })) ? t.filter((function (e) {
                return e.category === r.ACTION_CATEGORY.high
            })) : t
        },
        c = function (e) {
            return i(e).resources
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FETCH_PENDING_PAYMENT_REQUEST_DATA", (function () {
        return a
    })), n.d(t, "fetchPendingPaymentRequestData", (function () {
        return c
    }));
    var r = n(12),
        o = n(407),
        i = n(2),
        a = Object(r.k)("FETCH_PENDING_PAYMENT_REQUEST_DATA"),
        c = function (e) {
            var t = e.onReady,
                n = e.name;
            return Object(r.f)({
                endpoint: "".concat(o.apiUrl, "/?language=").concat(i.i.getLocale()),
                method: "GET",
                nextType: a,
                onSuccessAction: function () {
                    t(n)
                },
                onFailureAction: function () {}
            })
        }
}, , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "fetchData", (function () {
        return i
    })), n.d(t, "sendJumbotronClicked", (function () {
        return a
    })), n.d(t, "sendJumbotronClosed", (function () {
        return c
    })), n.d(t, "resetData", (function () {
        return u
    }));
    var r = n(12),
        o = n(119),
        i = function (e, t, n) {
            return Object(r.f)({
                endpoint: e,
                method: "GET",
                nextType: o.FETCH_DATA,
                onSuccessAction: function () {
                    t && t(n)
                },
                onFailureAction: function () {}
            })
        },
        a = function (e, t) {
            return Object(r.f)({
                endpoint: e,
                method: "POST",
                nextType: o.SEND_JUMBOTRON_CLICKED,
                data: t
            })
        },
        c = function (e, t) {
            return Object(r.f)({
                endpoint: e,
                method: "POST",
                nextType: o.SEND_JUMBOTRON_CLOSED,
                data: t
            })
        },
        u = function () {
            return {
                type: o.RESET_DATA
            }
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "pastDue", (function () {
        return i
    }));
    var r = n(18),
        o = n.n(r),
        i = function (e) {
            var t = o()(),
                n = o()(e).endOf("day");
            return o()(n).isBefore(t)
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "StyledSeperator", (function () {
        return d
    })), n.d(t, "StyledMobileViewAll", (function () {
        return p
    }));
    var r, o, i, a, c, u, l, s = n(7);

    function f(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    t.default = s.f.div(c || (c = f(["\n    margin-bottom: 35px;\n    margin-top: 9px;\n\n    @media (max-width: ", ") {\n        ", "\n    }\n"])), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return function (e, t) {
            if (t) return Object(s.e)(r || (r = f(["\n            margin-bottom: 30px;\n        "])));
            switch (e) {
                case 1:
                    return Object(s.e)(o || (o = f(["\n                margin-bottom: 53px;\n            "])));
                case 2:
                    return Object(s.e)(i || (i = f(["\n                margin-bottom: 60px;\n            "])));
                case 3:
                    return Object(s.e)(a || (a = f(["\n                margin-bottom: 30px;\n            "])))
            }
        }(e.paymentsLength, e.isJumbotronVisible)
    }));
    var d = s.f.div(u || (u = f(["\n    min-width: 20px;\n\n    @media (max-width: ", ") {\n        background-color: ", ";\n        height: 2px;\n    }\n"])), (function (e) {
            return e.theme["screen-sm-min"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-100"]
        })),
        p = s.f.div(l || (l = f(["\n    @media (min-width: ", ") {\n        display: none;\n    }\n\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    background-color: white;\n    border-top: solid 2px ", ";\n"])), (function (e) {
            return e.theme["screen-sm-min"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-100"]
        }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    })), n.d(t, "b", (function () {
        return a
    }));
    var r;
    try {
        r = new URL(n.p)
    } catch (e) {
        console.error(e)
    }
    var o = r && r.origin.includes("pubs") ? r.origin : "//pubs.payoneer.com",
        i = /https?:\/\/pubs(\.\w+)?\.payoneer\.com([^.]|$)/g,
        a = r && r.origin.includes("pubs") ? function (e) {
            return "string" == typeof e ? e.replace(i, o + "$2") : e
        } : function (e) {
            return e
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "MultiActionsRequiredDeatilsContainer", (function () {
        return f
    })), n.d(t, "ButtonContainer", (function () {
        return d
    })), n.d(t, "MultiActionsRequiredButton", (function () {
        return p
    })), n.d(t, "MultiActionRequiredActionsContainer", (function () {
        return y
    }));
    var r, o, i, a, c = n(7),
        u = n(45),
        l = n(107);

    function s(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var f = c.f.div(r || (r = s(["\n    line-height: 1.5;\n    font-size: 18px;\n    display: flex;\n    flex-flow: column; \n    justify-content: center;\n"]))),
        d = c.f.div(o || (o = s(["\n    max-width: 520px;\n"]))),
        p = Object(c.f)(l.a)(i || (i = s(["\n    width: 100%;\n    margin-block: 20px;\n"]))),
        y = c.f.div(a || (a = s(["\n    display: grid;\n    grid-template-columns: auto max-content;\n    background-color: ", ";\n    color: ", ";\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 2px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);\n    padding: 0 14px;\n    padding-block-start: 0;\n    padding-inline-start: 90px;\n    cursor: ", ";\n    font-size: 18px;\n    div {\n        border-bottom: 1px solid ", ";    \n\n        &:last-child , &:nth-last-child(2){\n            border-bottom: initial;\n        }\n    }\n\n    @media (max-width: ", ")  {\n        padding-inline: 16px;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        font-size: 16px;\n        background-color: ", ";\n\n        div {\n            padding-block-start: 10px;\n            border-bottom: initial;  \n\n            &:nth-child(even){\n                border-bottom: 1px solid ", ";  \n\n                padding-block: 14px;\n            }\n\n            &:last-child{\n                border-bottom: initial;  \n            }\n        }\n    }\n"])), (function (e) {
            return e.category == u.ACTION_CATEGORY.high ? e.theme["brand-color-cold-gray-800"] : e.theme["white-color"]
        }), (function (e) {
            return e.category == u.ACTION_CATEGORY.high ? e.theme["white-color"] : e.theme["brand-color-cold-gray-700"]
        }), (function (e) {
            return e.clickable ? "pointer" : "initial"
        }), (function (e) {
            var t = e.category,
                n = e.theme;
            return t === u.ACTION_CATEGORY.high ? n["brand-color-cold-gray-600"] : n["brand-color-cold-gray-200"]
        }), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["white-color"]
        }), (function (e) {
            var t = e.category,
                n = e.theme;
            return t === u.ACTION_CATEGORY.high ? n["brand-color-cold-gray-600"] : n["brand-color-cold-gray-200"]
        }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "isJumbotronVisible", (function () {
        return r
    })), n.d(t, "isPaymentRequestVisible", (function () {
        return o
    })), n.d(t, "paymentRequestLength", (function () {
        return i
    })), n.d(t, "isBalancesVisible", (function () {
        return a
    }));
    var r = function (e) {
            var t;
            return null === (t = function (e) {
                var t;
                return null === (t = e.widgets) || void 0 === t ? void 0 : t.jumbotron
            }(e)) || void 0 === t ? void 0 : t.visible
        },
        o = function (e) {
            return e && e.widgets && e.widgets.paymentRequest && e.widgets.paymentRequest.payments && e.widgets.paymentRequest.payments.length > 0
        },
        i = function (e) {
            return e && e.widgets && e.widgets.paymentRequest && e.widgets.paymentRequest.payments && e.widgets.paymentRequest.payments.length > 0 ? e.widgets.paymentRequest.payments.length : 0
        },
        a = function (e) {
            return e.widgets && e.widgets.balances && e.widgets.balances.balances.length > 0
        }
}, , , , , , , , , , , function (e, t, n) {
    "use strict";
    n(0);
    var r, o, i, a, c = n(21),
        u = n(163);

    function l(e, t, n, r) {
        a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var c = new Array(i), u = 0; u < i; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && o)
            for (var l in o) void 0 === t[l] && (t[l] = o[l]);
        else t || (t = o || {});
        return {
            $$typeof: a,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var s = l(n(7).f.div(r || (o = ["\n    @media (min-width: ", ") {\n        margin: 0 auto;\n        width: 550px;\n    }\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))), (function (e) {
        return e.theme["screen-sm-min"]
    })), {}, void 0, l(u.a, {}, void 0, l(c.a, {
        width: "20%",
        height: "12px",
        marginBottom: "32px"
    }), l(c.a, {
        width: "18%",
        height: "10px"
    }), l(c.a, {
        width: "60%",
        height: "10px",
        marginBottom: "32px"
    }), l(c.a, {
        width: "18%",
        height: "10px"
    }), l(c.a, {
        width: "60%",
        height: "10px"
    })));
    t.a = function () {
        return s
    }
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "systemName", (function () {
        return o
    })), n.d(t, "getApiUrl", (function () {
        return i
    })), n.d(t, "getActionsRequiredUrl", (function () {
        return a
    }));
    var r = n(45),
        o = "ActionsRequiredApi",
        i = function () {
            return "gw-actionsrequired/actionrequired/v1"
        },
        a = "".concat(i(), "?maxactions=").concat(r.MAX_ACTIONS, "&categories=").concat(r.ACTION_CATEGORY.low, "&categories=").concat(r.ACTION_CATEGORY.high, "&locale=")
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "fetchBalancesData", (function () {
        return f
    })), n.d(t, "sendNewBalancesOrder", (function () {
        return d
    })), n.d(t, "setBalancesOrderAction", (function () {
        return p
    }));
    var r = n(12),
        o = n(2),
        i = n(24),
        a = n(287),
        c = n(97),
        u = n(424),
        l = n(68),
        s = o.i.translateFrom(l.systemName),
        f = function () {
            return Object(r.f)({
                endpoint: a.fetchBalancesDataUrl + o.i.getLocale(),
                method: "GET",
                nextType: c.FETCH_BALANCES_DATA,
                onFailureAction: function () {
                    return Object(u.setFaultsAction)()
                }
            })
        },
        d = function (e) {
            var t = e.balancesOrderStr,
                n = e.orderedBalanceList;
            return Object(r.f)({
                endpoint: a.sendNewBalancesOrderUrl,
                method: "POST",
                data: {
                    Order: t
                },
                nextType: c.SET_BALANCES_ORDER,
                onSuccessAction: function () {
                    return p(n)
                },
                onFailureAction: function (e) {
                    var t = [];
                    if (e && e.status) switch (e.status) {
                        case 400:
                            t.push(Object(i.f)(s("ErrorOccurred.Text_V2")));
                            break;
                        case 500:
                            t.push(Object(i.f)(s("500ErrorOccurred.Text_V2")));
                            break;
                        default:
                            t.push(Object(i.f)(s("ErrorOccurred.Text_V2")))
                    }
                    return t.length > 0 && t
                }
            })
        },
        p = function (e) {
            return {
                type: c.REORDER,
                payload: e
            }
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "fetchTransactionsData", (function () {
        return f
    })), n.d(t, "requestTemplateAction", (function () {
        return d
    }));
    var r = n(2),
        o = n(12),
        i = n(24),
        a = n(20),
        c = n(98),
        u = n(18),
        l = n.n(u),
        s = r.i.translateFrom(a.systemName),
        f = function () {
            return Object(o.f)({
                endpoint: a.fetchTransactionsDataUrl,
                method: "GET",
                data: {
                    locale: r.i.getLocale(),
                    numberOfResults: a.numOfTransactionsToShow,
                    returnFilters: !1,
                    fromDate: Object(a.formatDate)(l()().subtract(90, "days")),
                    toDate: Object(a.formatDate)(l()())
                },
                nextType: c.FETCH_TRANSACTIONS_DATA
            })
        },
        d = function (e, t) {
            return Object(o.f)({
                endpoint: a.getTemplateApi,
                nextType: c.GET_WIDGET_TEMPLATE,
                data: {
                    activityItemId: e,
                    activityType: t
                },
                onSuccessAction: function (e) {
                    var t = e.body;
                    return [{
                        type: c.GET_WIDGET_TEMPLATE.SUCCESS,
                        payload: t
                    }]
                },
                onFailureAction: function (e) {
                    return [{
                        type: c.GET_WIDGET_TEMPLATE.FAILURE,
                        payload: e
                    }, Object(i.f)("".concat(s("ServerSideError.Text", "Failed to fetch template.")), {
                        dismissAfter: a.toastErrorTimeout
                    })]
                }
            })
        }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(2),
        i = n(20),
        a = n(37),
        c = n(85);

    function u(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    t.default = function () {
        var e = o.i.isRtl() ? "icon-angle-left" : "icon-angle-right";
        return u("div", {
            className: "transactions-view-all",
            onClick: function () {
                return Object(c.gtmEvent)({
                    name: "CE View All Transactions Clicked",
                    eventCategory: "my account main"
                })
            }
        }, void 0, u(a.a, {
            href: Object(i.translate)("TransactionsWidgetViewAllLink.Text")
        }, void 0, Object(i.translate)("TransactionsWidgetViewAll.Text"), u("i", {
            className: e
        })))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "fetchPromotionsData", (function () {
        return c
    })), n.d(t, "sendAdClicked", (function () {
        return u
    }));
    var r = n(12),
        o = n(2),
        i = n(147),
        a = n(160),
        c = function () {
            return Object(r.f)({
                endpoint: i.getAdsEndPoint + o.i.getLocale(),
                method: "GET",
                nextType: a.FETCH_PROMOTIONS_DATA
            })
        },
        u = function (e) {
            return Object(r.f)({
                endpoint: i.sendAdClickedEndPoint,
                method: "POST",
                nextType: a.SEND_AD_CLICKED,
                data: e
            })
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getPartialState", (function () {
        return r
    })), n.d(t, "getTransactionsData", (function () {
        return o
    })), n.d(t, "getFutureTransactionsData", (function () {
        return i
    }));
    var r = function (e) {
            return e.widgets.transactions
        },
        o = function (e) {
            return r(e).Transactions
        },
        i = function (e) {
            return r(e).FutureTransactions
        }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return !!(e && e.link && e.resources && e.resources.button && (e.resources.title || e.resources.description))
    }
    n.r(t), n.d(t, "dataValidation", (function () {
        return r
    }))
}, , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n(427),
        a = n(429),
        c = n(430),
        u = n(431);

    function l(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var s = l(a.default, {});
    t.default = Object(o.memo)((function (e) {
        var t = e.card,
            n = void 0 === t ? {} : t,
            r = e.customDragLayer,
            o = void 0 !== r && r,
            a = e.isDragging,
            f = void 0 !== a && a,
            d = n.balance,
            p = (d = void 0 === d ? {} : d).currency;
        return l(u.default, {
            customDragLayer: o,
            isDragging: f
        }, void 0, l("div", {
            className: "flags-and-text"
        }, void 0, l(c.default, {
            currency: p
        }), l(i.default, {
            card: n
        })), s)
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Skeleton", (function () {
        return c
    }));
    var r, o, i = n(7);

    function a(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    t.default = i.f.div(r || (r = a(["\n    width: 100%;\n    height: 175px;\n    padding: 7px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    @media (min-width: ", ") {\n        flex-direction: row;\n    }\n"])), (function (e) {
        return e.theme["screen-sm-min"]
    }));
    var c = i.f.div(o || (o = a(["\n    width: 100%;\n    height: 30%;\n    background-color: ", ";\n    overflow: hidden;\n    padding: 0 10px 10px;\n    background: ", ";\n    box-shadow: ", ";\n\n    @media (min-width: ", ") {\n        width: 32%;\n        height: 100%;\n        padding-top: 10px;\n    }\n"])), (function (e) {
        return e.theme["brand-color-cold-gray-100"]
    }), (function (e) {
        return e.theme["white-color"]
    }), (function (e) {
        return e.theme["ma-box-shadow"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "gtmEvent", (function () {
        return c
    })), n.d(t, "promotionsGtmImpressionMapper", (function () {
        return u
    })), n.d(t, "promotionsGtmMapper", (function () {
        return l
    }));
    var r = n(41);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var c = function (e) {
            var t = e.name,
                n = e.eventLabel,
                c = e.eventCategory,
                u = e.data,
                l = e.systemName,
                s = a(e, ["name", "eventLabel", "eventCategory", "data", "systemName"]);
            r.a.pushEvent(l, t, function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function (t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                eventLabel: n,
                eventCategory: c,
                flowData: u
            }, s))
        },
        u = function (e) {
            var t = e.data,
                n = e.name,
                r = e.eventCategory,
                o = e.systemName;
            return c({
                name: n,
                eventCategory: r,
                systemName: o,
                data: {
                    MA: i({}, "".concat(o), {
                        impressions: s(t)
                    })
                }
            })
        },
        l = function (e) {
            var t = e.data,
                n = e.name,
                r = e.eventCategory,
                o = e.systemName;
            return c({
                name: n,
                eventCategory: r,
                systemName: o,
                data: {
                    MA: i({}, "".concat(o), s(t))
                }
            })
        },
        s = function (e) {
            return Array.isArray(e) ? e.map((function (e) {
                return f(e)
            })) : f(e)
        },
        f = function (e) {
            var t = e.Id,
                n = e.Priority,
                r = e.Title,
                o = e.Content,
                i = e.ClickToAction;
            return {
                Id: t,
                position: e.position,
                title: r.Key || "",
                content: o.Key || "",
                cta: i.Key || "",
                Priority: n
            }
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Skeleton", (function () {
        return c
    }));
    var r, o, i = n(7);

    function a(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    t.default = i.f.div(r || (r = a(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 7px 10px;\n    width: 100%;\n\n    height: 150px;\n\n    @media (min-width: ", ") {\n        flex-direction: column;\n        height: 413px;\n    }\n"])), (function (e) {
        return e.theme["screen-md-min"]
    }));
    var c = i.f.div(o || (o = a(["\n    width: 30%;\n    height: 100%;\n    background-color: ", ";\n    box-shadow: ", ";\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n\n    .line {\n        flex: 1;\n    }\n    .circle {\n        display: none;\n    }\n\n    @media (min-width: ", ") {\n        width: 100%;\n        height: 30%;\n\n        .circle {\n            display: block;\n        }\n    }\n"])), (function (e) {
        return e.theme["white-color"]
    }), (function (e) {
        return e.theme["ma-box-shadow"]
    }), (function (e) {
        return e.theme["screen-md-min"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Skeleton", (function () {
        return c
    }));
    var r, o, i = n(7);

    function a(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    t.default = i.f.div(r || (r = a(["\n    width: 100%;\n    height: 175px;\n    padding: 7px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    @media (min-width: ", ") {\n        flex-direction: row;\n    }\n"])), (function (e) {
        return e.theme["screen-sm-min"]
    }));
    var c = i.f.div(o || (o = a(["\n    width: 100%;\n    height: 30%;\n    background-color: ", ";\n    overflow: hidden;\n    padding: 0 10px 10px;\n    background: ", ";\n    box-shadow: ", ";\n\n    @media (min-width: ", ") {\n        width: 32%;\n        height: 100%;\n        padding-top: 10px;\n    }\n"])), (function (e) {
        return e.theme["brand-color-cold-gray-100"]
    }), (function (e) {
        return e.theme["white-color"]
    }), (function (e) {
        return e.theme["ma-box-shadow"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(5)),
        c = n(4),
        u = n.n(c),
        l = i.a.createContext({
            onReady: function () {},
            isReady: !1
        });

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function f(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function d(e) {
        return function (e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return b(this, n)
        }
    }

    function b(e, t) {
        return !t || "object" !== s(t) && "function" != typeof t ? h(e) : t
    }

    function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var O, w = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(i, e);
        var t, n, r, o = v(i);

        function i(e) {
            var t, n, r, a;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), t = o.call(this, e), n = h(t), a = function (e) {
                if (!t.state.ready) {
                    var n = t.props.widgets,
                        r = [].concat(d(t.state.readyWidgets), [e]),
                        o = !0;
                    n.forEach((function (e) {
                        o = o && r.includes(e)
                    })), t.setState({
                        readyWidgets: r,
                        ready: o
                    })
                }
            }, (r = "onReady") in n ? Object.defineProperty(n, r, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = a, t.state = {
                readyWidgets: [],
                ready: !1
            }, t.readyTimeout = null, t
        }
        return t = i, (n = [{
            key: "componentDidMount",
            value: function () {
                var e = this,
                    t = this.props.timeout,
                    n = this.state.ready;
                t && !n && (this.readyTimeout = setTimeout((function () {
                    e.setState({
                        ready: !0
                    })
                }), t))
            }
        }, {
            key: "componentDidUpdate",
            value: function (e, t) {
                var n = this.state.readyWidgets,
                    r = this.props,
                    o = r.widgets,
                    i = r.allWidgetsReady,
                    a = !0;
                o.forEach((function (e) {
                    a = a && n.includes(e)
                })), a && t.readyWidgets.length === n.length - 1 && i && i()
            }
        }, {
            key: "componentWillUnmount",
            value: function () {
                clearTimeout(this.readyTimeout)
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.children,
                    n = e.className;
                return f("div", {
                    className: u()("widget-handler", n, {})
                }, void 0, f(l.Provider, {
                    value: {
                        onReady: this.onReady,
                        ready: this.state.ready
                    }
                }, void 0, t))
            }
        }]) && y(t.prototype, n), r && y(t, r), i
    }(o.Component);
    n(971);

    function j(e, t, n, r) {
        O || (O = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: O,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var S, x = function (e) {
            var t = e.className,
                n = e.name;
            return j(l.Consumer, {}, void 0, (function (r) {
                var o = r.onReady,
                    a = r.ready,
                    c = i.a.Children.map(e.children, (function (e) {
                        return i.a.cloneElement(e, {
                            widget: {
                                name: n,
                                onReady: o,
                                ready: a
                            }
                        })
                    }));
                return j("div", {
                    className: u()("widget-template", t, {
                        "widget-template--loading": !a
                    })
                }, void 0, c)
            }))
        },
        N = n(130),
        T = n(2),
        A = n(12),
        _ = n(60),
        k = n(41),
        P = n(167),
        L = n(374),
        M = n(378),
        E = n(383),
        C = n(389),
        I = n(396),
        D = n(401),
        R = n(68),
        B = n(212),
        z = (n(614), n(10));

    function $(e) {
        return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function U(e, t, n, r) {
        S || (S = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: S,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function F(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function G(e, t) {
        return (G = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function q(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = H(e);
            if (t) {
                var o = H(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return V(this, n)
        }
    }

    function V(e, t) {
        return !t || "object" !== $(t) && "function" != typeof t ? Q(e) : t
    }

    function Q(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function H(e) {
        return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function W(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
//    var J = U(_.y, {
//            inverse: !0,
//            size: "15px",
//            className: "module-spinner"
//        }),
        Z = U(x, {
            name: "actionsrequired",
            className: "actions-required-widget"
        }, void 0, U(L.default.outlet, {})),
        K = U(x, {
            name: "jumbotron",
            className: "jumbotron-widget"
        }, void 0, U(I.default.outlet, {})),
        X = U(x, {
            name: "balances",
            className: "balances-widget"
        }, void 0, U(M.default.outlet, {})),
        ee = U(x, {
            name: "paymentrequest",
            className: "payment-request-widget"
        }, void 0, U(D.default.outlet, {})),
        te = U(x, {
            name: "transactions",
            className: "transactions-widget"
        }, void 0, U(E.default.outlet, {})),
        ne = U("div", {
            className: "transactions-promotions-separator"
        }),
        re = U(x, {
            name: "promotions",
            className: "promotions-widget"
        }, void 0, U(C.default.outlet, {})),
        oe = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && G(e, t)
            }(a, e);
            var t, n, r, i = q(a);

            function a() {
                var e;
                F(this, a);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return W(Q(e = i.call.apply(i, [this].concat(n))), "allWidgetsReady", (function () {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        event: "ajaxAssetsReady",
                        timestamp: Date.now()
                    }), P.a.showTour("HomePageTour", !1)
                })), e
            }
            return t = a, (n = [{
                key: "componentDidMount",
                value: function () {
                    (0, this.props.initSystem)({
                        initialize: W({}, N.a, R.getAssets + T.i.getLocale()),
                        system: R.systemName
                    }), k.a.virtualPage(R.systemName, {
                        virtualPage: "/"
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var e, t = this.props,
                        n = t.ready,
                        r = t.isJumbotronVisible,
                        i = t.isPaymentRequestVisible,
                        a = t.paymentRequestLength,
                        c = t.isBalancesVisible,
                        l = z.a.IS_PAYER() ? ["paymentrequest", "transactions", "promotions", "actionsrequired", "jumbotron"] : ["balances", "transactions", "promotions", "actionsrequired", "jumbotron"],
                        s = "payment-request__".concat(a),
                        f = !r && !i & !c;
                    return U(o.Fragment, {}, void 0, n ? U(w, {
                        className: u()("dashboard-widget-handler", (e = {
                            "jumbotron-widget--visible": r,
                            "jumbotron-widget--not_visible": !r,
                            "payment-request-widget--top": !r && i
                        }, W(e, s, i), W(e, "transactions--top", f), e)),
                        widgets: l,
                        timeout: 2e3,
                        allWidgetsReady: this.allWidgetsReady
                    }, void 0, Z, K, !z.a.IS_PAYER() && X, z.a.IS_PAYER() && ee, te, ne, re) : J)
                }
            }]) && Y(t.prototype, n), r && Y(t, r), a
        }(o.Component),
        ie = {
            initSystem: A.h
        };
    t.default = Object(a.c)((function (e) {
        return {
            ready: A.l.systemReady(e, R.systemName),
            isJumbotronVisible: Object(B.isJumbotronVisible)(e),
            isPaymentRequestVisible: Object(B.isPaymentRequestVisible)(e),
            paymentRequestLength: Object(B.paymentRequestLength)(e),
            isBalancesVisible: Object(B.isBalancesVisible)(e)
        }
    }), ie)(oe)
}, , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return o
    })), n.d(t, "c", (function () {
        return i
    }));
    var r = function (e) {
            return e.notifications && e.notifications.notificationsReady
        },
        o = function (e) {
            return e.notifications && e.notifications.notifications
        },
        i = function (e) {
            return e.notifications && e.notifications.unreadNotificationsCount
        }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(25);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(258).Skeleton, {}, void 0, i(o.b, {
        height: "16px",
        marginTop: "14px",
        marginBottom: "20px"
    }), i(o.b, {
        height: "12px"
    }), i(o.b, {
        height: "12px"
    }));
    t.default = function () {
        return a
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(25);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(260).Skeleton, {}, void 0, i(o.a, {
        marginTop: "16px"
    }, void 0, i(o.b, {
        className: "circle",
        circle: !0,
        width: "35px",
        height: "35px"
    }), i("div", {
        className: "line"
    }, void 0, i(o.b, {
        height: "12px"
    }), i(o.b, {
        height: "12px"
    }), i(o.b, {
        height: "12px"
    }))));
    t.default = function () {
        return a
    }
}, , function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(25);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(261).Skeleton, {}, void 0, i(o.b, {
        height: "16px",
        marginTop: "14px",
        marginBottom: "20px"
    }), i(o.b, {
        height: "12px"
    }), i(o.b, {
        height: "12px"
    }));
    t.default = function () {
        return a
    }
}, function (e, t, n) {
    "use strict";
    var r = n(9),
        o = n(3);
    t.a = r.a.injectRoute({
        path: o.a.fees.pathname,
        component: {
            promise: function () {
                return n.e(275).then(n.bind(null, 1001))
            }
        },
        reducer: {
            name: "fees",
            promise: function () {
                return n.e(275).then(n.bind(null, 999))
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(9),
        o = n(3);
    t.a = r.a.injectRoute({
        path: o.a.fdc.pathname,
        component: {
            promise: function () {
                return Promise.all([n.e(0), n.e(2), n.e(1), n.e(3), n.e(274)]).then(n.bind(null, 1e3))
            }
        },
        reducer: {
            name: "fdc",
            promise: function () {
                return Promise.all([n.e(0), n.e(2), n.e(1), n.e(3), n.e(274)]).then(n.bind(null, 1002))
            }
        }
    })
}, , , function (e, t, n) {
    "use strict";
    var r;
    n(0), n(847);

    function o(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var i = o("div", {
        className: "payoneer-loader"
    }, void 0, o("div", {
        className: "payoneer-loader__loader"
    }));
    t.a = function () {
        return i
    }
}, , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return O
    }));
    var r, o = n(0),
        i = (n(1), n(4)),
        a = n.n(i),
        c = n(2),
        u = n(85);
    n(974);

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function f(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return m(this, n)
        }
    }

    function m(e, t) {
        return !t || "object" !== l(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var b, h, g, O = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(i, e);
        var t, n, r, o = y(i);

        function i() {
            return f(this, i), o.apply(this, arguments)
        }
        return t = i, (n = [{
            key: "componentDidMount",
            value: function () {
                var e = this.props.gtm,
                    t = e.errorName,
                    n = e.errorMessage,
                    r = e.systemName,
                    o = void 0 === r ? "" : r;
                return Object(u.gtmEvent)({
                    name: "CE Error Message",
                    eventCategory: "my account main",
                    data: {
                        errorName: t,
                        errorMessage: n
                    },
                    systemName: o,
                    eventLabel: t
                })
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.className,
                    n = e.icon,
                    r = e.buttonText,
                    o = e.buttonAction,
                    i = e.title,
                    u = e.text;
                return s("div", {
                    className: a()("error-component", t, {
                        "error-component--rtl": c.i.isRtl()
                    })
                }, void 0, s("div", {
                    className: "error-component__icon"
                }, void 0, n), s("div", {
                    className: "error-component__content"
                }, void 0, s("div", {
                    className: "error-component__title"
                }, void 0, i), s("div", {
                    className: "error-component__text"
                }, void 0, u)), o && s("div", {
                    className: "error-component__retry",
                    onClick: o
                }, void 0, s("div", {
                    className: "error-component__button"
                }, void 0, r)))
            }
        }]) && d(t.prototype, n), r && d(t, r), i
    }(o.Component);
    b = O, h = "defaultProps", g = {
        icon: s("i", {
            className: "icon-alert__new"
        }),
        getAnalyticsData: !1
    }, h in b ? Object.defineProperty(b, h, {
        value: g,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : b[h] = g, t.b = O
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "useMock", (function () {
        return i
    })), n.d(t, "callApiRoot", (function () {
        return a
    })), n.d(t, "apiFetchBalancesData", (function () {
        return c
    })), n.d(t, "apiSendNewBalancesOrder", (function () {
        return u
    })), n.d(t, "systemName", (function () {
        return l
    })), n.d(t, "fetchBalancesDataUrl", (function () {
        return s
    })), n.d(t, "sendNewBalancesOrderUrl", (function () {
        return f
    })), n.d(t, "BALANCE_TYPE", (function () {
        return d
    }));
    var r = n(51),
        o = n.n(r),
        i = !0,
        a = "gw-balance",
        c = "API/Balances/v2?language=",
        u = "/API/Balances/SetBalanceOrdering",
        l = "BalanceViewApi",
        s = o()(a, c),
        f = o()(a, u),
        d = {
            WIRECARD: 99,
            DEFAULT: 1
        }
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    }));
    var r = n(41),
        o = n(194),
        i = n(2).i.translateFrom(o.q),
        a = {
            virtualPage: function () {
                r.a.virtualPage("activity", {
                    virtualPage: "/"
                })
            },
            virtualPageCustom: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r.a.virtualPage(e, t)
            },
            pushEvent: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r.a.pushEvent(o.q, e, t)
            },
            getActivityTypeNameById: function (e) {
                return i("ActivityType_" + e + ".Text") || ""
            },
            search: function (e) {
                a.pushEvent("CE Search", e ? {
                    eventLabel: "Clear search"
                } : void 0)
            },
            toggleSection: function (e, t) {
                a.pushEvent("CE " + (e ? "Open" : "Close") + " Section", {
                    eventLabel: t
                })
            },
            selectRow: function (e) {
                a.pushEvent("CE SelectRow", {
                    eventLabel: e
                })
            },
            actionItem: function (e) {
                a.pushEvent("CE Action Item", {
                    eventLabel: e
                })
            },
            paymentMethodChanged: function (e) {
                a.pushEvent("CE Balance Filter", {
                    eventLabel: e
                })
            },
            typeFilterChanged: function (e) {
                a.pushEvent("CE Type Filter", {
                    eventLabel: e
                })
            },
            changeDate: function (e) {
                a.pushEvent("CE Change Date", {
                    eventLabel: e
                })
            },
            exportReport: function (e) {
                var t = "print" === e ? "CE Table Header Print" : "CE Table Header Export";
                a.pushEvent(t, {
                    eventLabel: e
                })
            },
            loadMore: function (e) {
                a.pushEvent("CE Load More", {
                    eventLabel: e
                })
            },
            clickMonthlyStatement: function () {
                a.pushEvent("CE Click Monthly Statement")
            },
            downloadMonthlyStatement: function (e) {
                a.pushEvent("CE Download Statement", {
                    eventCategory: "Account Activity Monthly Statement",
                    eventLabel: e
                })
            },
            downloadMonthlyStatementError: function (e) {
                a.pushEvent("CE Download Statement Error", {
                    eventCategory: "Account Activity Monthly Statement",
                    eventLabel: e
                })
            },
            legacyBalanceDialogImpression: function () {
                a.pushEvent("CE Popup - Change Balance")
            },
            legacyBalanceDialogClose: function (e) {
                var t = e ? {
                    eventLabel: "Don't show again checked"
                } : {};
                a.pushEvent("CE Close Popup", t)
            },
            downloadStatement: function (e) {
                a.pushEvent("CE Download Statement", {
                    eventCategory: "Transaction Details",
                    eventLabel: e
                })
            },
            FAQClick: function () {
                a.pushEvent("CE FAQ Click")
            },
            selectRowNew: function (e, t) {
                a.pushEvent("CE Click transaction Item", {
                    flowData: {
                        TransactionItemStatus: e,
                        TransactionItemDate: t
                    },
                    eventCategory: "AccountActivity",
                    eventLabel: "Activity Transactions -> Click transaction Item"
                })
            },
            dialogOpened: function (e, t, n, r) {
                a.pushEvent("CE  View transaction Item Modal", {
                    flowData: {
                        TransactionItemStatus: e,
                        TransactionItemDate: t,
                        TransactionTotalAmount: n,
                        TransactionItemDescription: r
                    },
                    eventCategory: "AccountActivity",
                    eventLabel: "Activity Transactions-> View Transaction Item Modal"
                }), a.virtualPageCustom("/transactions/transaction-view", {
                    flowData: {
                        TransactionItemStatus: e,
                        TransactionItemDate: t,
                        TransactionTotalAmount: n,
                        TransactionItemDescription: r
                    },
                    virtualPage: "/transactions/transaction-view",
                    eventCategory: "AccountActivity",
                    eventLabel: "Activity Transactions-> View Transaction Item Modal"
                })
            },
            MainPageView: function (e) {
                var t = e.isEmptyState,
                    n = e.countOfTransactions,
                    r = e.emptyStateItems;
                a.pushEvent("CE  Page View Transactions Activity", {
                    flowData: {
                        isEmptyState: t,
                        countOfTransactions: n,
                        emptyStateItems: r
                    },
                    eventCategory: "AccountActivity",
                    eventLabel: "Page View Activity Transactions"
                }), a.virtualPageCustom("transactions", {
                    eventCategory: "AccountActivity",
                    eventLabel: "Page View Activity Transactions",
                    virtualPage: "/transactions"
                })
            },
            emptyStateClicks: function (e, t) {
                a.pushEvent(e, {
                    eventCategory: "AccountActivity",
                    eventLabel: t
                })
            }
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getData", (function () {
        return a
    })), n.d(t, "isFetching", (function () {
        return c
    }));
    var r = n(127),
        o = n(119),
        i = n(12),
        a = function (e) {
            var t = function (e) {
                return e.widgets.jumbotronTemplates
            }(e).data;
            if (!t || !t.Promotions || !t.Promotions[0]) return {};
            var n = t.Promotions[0],
                o = n.Title,
                i = n.Content,
                a = n.Icon,
                c = n.ClickToAction,
                u = n.CollapsibleText,
                l = n.Id,
                s = n.Name,
                f = n.CollapsibleContent,
                d = n.CloseOption,
                p = n.Background,
                y = n.Template;
            return {
                id: l,
                name: s,
                externalSourceId: n.ExternalSourceId,
                header: null == o ? void 0 : o.Value,
                content: null == i ? void 0 : i.Value,
                icon: a,
                action: c ? {
                    value: c.Value,
                    url: c.Url,
                    target: c.Target
                } : null,
                collapsibleText: null == u ? void 0 : u.Value,
                collapsibleContent: null == f ? void 0 : f.Value,
                closeable: d,
                backgroundImage: p,
                template: y || r.JUMBOTRON_TEMPLATES.default
            }
        },
        c = function (e) {
            return i.l.isCallPending(e, o.FETCH_DATA)
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ADS_LOCATION", (function () {
        return r
    })), n.d(t, "MAX_ADS", (function () {
        return o
    }));
    var r = {
            homepage: 1
        },
        o = 3
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ACTION_CATEGORY", (function () {
        return r
    })), n.d(t, "MAX_ACTIONS", (function () {
        return o
    }));
    var r = {
            jumbotron: 4
        },
        o = 1
}, , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
    var n = "";
    if (!("undefined" != typeof window && (0 === window.location.hash.indexOf("#/") || /MainPage\/[^.]+\.aspx/i.test(window.location.href)))) {
        var r = /^(\/(payer|ma(-\w+)?))(\/|$)/.exec(location.pathname);
        r && (n = r[1])
    }
    window["__base-href"] = n
}, , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "HeaderTitle", (function () {
        return u
    })), n.d(t, "IconToggle", (function () {
        return l
    }));
    var r, o, i = n(7),
        a = n(45);

    function c(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var u = i.f.div(r || (r = c(["\n    font-size: 21px;\n    color: ", ";\n    line-height: 1.4;\n\n    @media (max-width: ", ")  {\n        font-size: 16px;\n        font-weight: 700;\n        color: ", ";\n        margin-block: 4px;\n    }\n"])), (function (e) {
            return (null == e ? void 0 : e.category) == a.ACTION_CATEGORY.high ? e.theme["white-color"] : e.theme["brand-color-cold-gray-700"]
        }), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["white-color"]
        })),
        l = i.f.div(o || (o = c(["\n    font-size: 22px;\n    align-self: center;\n    transform: ", "; \n\n    @media (max-width: ", ")  {\n        color: ", ";\n        transform: ", "; \n    }\n"])), (function (e) {
            return e.isOpen ? "rotate(-90deg)" : "rotate(90deg)"
        }), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["white-color"]
        }), (function (e) {
            return e.isOpen ? "rotate(90deg)" : "rotate(-90deg)"
        }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(5),
        i = n(65),
        a = n(37),
        c = n(444);

    function u(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    t.default = function () {
        var e = Object(o.f)((function (e) {
                return Object(i.resourcesSelector)(e, "PendingPaymentRequestsHeader.Text")
            })),
            t = Object(o.f)((function (e) {
                return Object(i.resourcesSelector)(e, "ViewAllPendingPaymentRequests.Text")
            })),
            n = Object(o.f)(i.paymentsSelector);
        return u(c.default, {}, void 0, u("span", {
            className: "title",
            "data-testid": "prqTtile"
        }, void 0, e.Value), 3 === n.length && u(a.a, {
            href: t.Url,
            "data-testid": "prqViewAllLink"
        }, void 0, t.Value))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, c = n(0),
        u = n.n(c),
        l = (n(1), n(5)),
        s = n(23),
        f = n(4),
        d = n.n(f),
        p = n(2),
        y = n(60),
        m = n(187),
        v = n(37),
        b = n(103),
        h = n(68);

    function g(e, t, n, r) {
        a || (a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var c = new Array(i), u = 0; u < i; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && o)
            for (var l in o) void 0 === t[l] && (t[l] = o[l]);
        else t || (t = o || {});
        return {
            $$typeof: a,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var O, w = g(n(7).f.div(r || (o = ["\n    background-color: ", ";\n    width: calc(100% - 48px);\n    margin-left: 24px;\n    margin-right: 24px;\n    height: 1px; \n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))), (function (e) {
        return e.theme["brand-color-cold-gray-300"]
    })), {});

    function j() {
        return w
    }

    function S(e, t, n, r) {
        O || (O = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: O,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var x = S("i", {
            className: "icon-alert__new"
        }),
        N = S("i", {
            className: "icon-more-actions"
        }),
        T = S("div", {
            className: "active-border"
        }, void 0, S("div", {})),
        A = S(j, {}),
        _ = S("i", {
            className: "icon-alert__new"
        }),
        k = S("i", {
            className: "icon-cards__new"
        }),
        P = S("span", {
            className: "dash"
        }, void 0, "-"),
        L = S(j, {});
    t.default = Object(l.c)(null, {
        push: s.c
    })((function (e) {
        var t, n, r = e.card,
            o = e.resources,
            i = e.animate,
            a = e.openSnack,
            l = e.isSnackCard,
            s = e.isMobile,
            f = e.index,
            g = r.menu,
            O = r.balance,
            w = r.masked,
            j = r.content,
            M = r.footer,
            E = r.status,
            C = r.isBlocked,
            I = void 0 !== C && C,
            D = p.i.isRtl() ? "icon-angle-left" : "icon-angle-right",
            R = g && g.length > 0,
            B = S("header", {
                className: E === b.LocalBalanceStatus.Blocked ? "balance-card__blocked-header" : "balance-card__header",
                "data-testid": "widget-balance_blocked-header-".concat(f)
            }, void 0, E === b.LocalBalanceStatus.Blocked && S("div", {
                className: "blocked-balance"
            }, void 0, x, S("div", {
                className: "blocked-balance-text"
            }, void 0, o["BalanceBlocked.Text"])), R && S(y.q, {
                triggerIcon: N,
                defaultText: "",
                options: g,
                renderOption: function (e) {
                    return S("div", {
                        className: "inline-dropdown-option"
                    }, e.key, S(v.a, {
                        href: e.value
                    }, void 0, e.text))
                }
            })),
            z = !l && T,
            $ = O && S("div", {
                className: "balance",
                "data-testid": "widget-balance_card-balance-".concat(f)
            }, void 0, O.amount, " ", O.currency),
            U = function (e) {
                Object(m.getDataForBalancesGtm)({
                    data: r,
                    name: "main" === e ? "CE Balances Carousel Main Action Clicked" : "CE Balances Carousel Card Action Clicked",
                    eventCategory: "my account main",
                    systemName: h.systemName
                })
            },
            F = j && j.action ? j.action.link : "",
            Y = j && j.action ? j.action.text : "",
            G = S("span", {
                className: "masked-card"
            }, void 0, w && S("span", {}, void 0, S("span", {
                className: "masked"
            }, void 0, w.id, I && w && w.amount && parseFloat(w.amount) > 0 ? S("span", {}, void 0, " - ", w.amount, " ", O.currency, " ", S("div", {
                className: "wirecard_restricted"
            }, void 0, o["WireCardBlocked.Text"], " ", S("a", {
                target: "_blank",
                href: o["WireCardFAQUrl.Text"]
            }, void 0, o["FAQ.Text"]))) : w.amount && O && O.currency && j && j.action && j.action.text ? null : w.amount && O && O.currency ? S("span", {}, void 0, " - ", w.amount, " ", O.currency, " ", o["OnCard.Text"]) : void 0)), (t = w ? " - " : "", n = j && j.text && "".concat(t, " ").concat(j.text), j ? S(c.Fragment, {}, void 0, S("span", {}, void 0, n || j.text), " ", S(v.a, {
                href: F,
                className: "actions"
            }, void 0, S("span", {
                onClick: U
            }, void 0, Y, " ", S("i", {
                className: j.action && j.action.text ? D : ""
            })))) : null)),
            q = M && M.action && S("footer", {
                "data-testid": "widget-balance_balance-card-footer-".concat(f),
                className: d()("balance-card__footer", {
                    moreActionsSnack: l
                })
            }, void 0, S(v.a, {
                href: M.action.link
            }, void 0, S("span", {
                onClick: function () {
                    return U("main")
                }
            }, void 0, M.action.text, " ", S("i", {
                className: D
            })))),
            V = S("i", {
                className: D
            }),
            Q = l && R && g.map((function (e, t) {
                return S(u.a.Fragment, {}, t, A, S("footer", {
                    "data-testid": "widget-balance_balance-card-footer-".concat(t),
                    className: d()("balance-card__footer", {
                        footerSnackCard: l,
                        moreActionsSnack: !0
                    })
                }, t, S("div", {}, void 0, S(v.a, {
                    className: "myaccount-link",
                    href: e.value
                }, void 0, e.text, " ", V))))
            }));
        return S("div", {
            "data-testid": "widget-balances-balance-card-".concat(f),
            className: d()("balance-card", {
                "balance-card--animate": i,
                "balance-card--snack": l
            })
        }, void 0, z, S("div", {
            className: d()("balance-card__content", {
                "snack-seperator": l
            })
        }, void 0, B, S("main", {
            onClick: function () {
                s && a(r)
            },
            className: d()("balance-card__main", {
                mainSnackCard: l
            })
        }, void 0, S("div", {
            className: d()({
                "snack-header": l
            })
        }, void 0, l && E === b.LocalBalanceStatus.Blocked && S("div", {
            className: "balance-card__blocked-header header-snack",
            "data-testid": "widget-balance_blocked-header"
        }, void 0, _, " ", S("div", {
            className: "blocked-balance-text"
        }, void 0, o["BalanceBlocked.Text"])), $, S("div", {
            className: "card-details"
        }, void 0, w && S("span", {
            className: d()("masked-card-icon-wrapper", {
                "snack-icon": l
            })
        }, void 0, k), G, s && E === b.LocalBalanceStatus.Blocked && !l && (w || M) && P, s && E === b.LocalBalanceStatus.Blocked && !l && S("span", {
            className: "mobileBlockText"
        }, void 0, o["BalanceBlocked.Text"]))), S("i", {
            className: "icon-right-open-big ".concat(l ? "snackIcon" : "", " "),
            onClick: function () {
                return a(r)
            }
        })), !l && S("div", {
            className: "snackFooter"
        }, void 0, S("div", {}, void 0, q, Q))), l && S("div", {
            className: "snackFooter"
        }, void 0, L, q, Q))
    }))
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return S
    }));
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(4)),
        c = n.n(a),
        u = n(2),
        l = n(60),
        s = n(8);
    n(969);

    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = h(e);
            if (t) {
                var o = h(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return v(this, n)
        }
    }

    function v(e, t) {
        return !t || "object" !== f(t) && "function" != typeof t ? b(e) : t
    }

    function b(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var O = d("span", {
            className: "buttons-extension__separator"
        }),
        w = d("i", {
            className: "icon-more-actions"
        }),
        j = d("span", {
            className: "buttons-extension__separator"
        }),
        S = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }(f, e);
            var t, n, r, a = m(f);

            function f(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, f), g(b(t = a.call(this, e)), "handleHiddenMenuChange", (function (e) {
                    e && e()
                })), g(b(t), "transformHiddenButtons", (function (e) {
                    return e.map((function (e) {
                        return {
                            text: e.props.title || e.props.children,
                            value: e.props.onClick
                        }
                    }))
                })), g(b(t), "addHiddenButtonsMenu", (function (e) {
                    var n = t.transformHiddenButtons(e);
                    return d(o.Fragment, {}, void 0, O, d(l.q, {
                        className: "buttons-extension__hidden-menu",
                        triggerIcon: w,
                        defaultText: "",
                        options: n,
                        onChange: t.handleHiddenMenuChange
                    }))
                })), g(b(t), "createVisibleButton", (function (e, t, n) {
                    return d(i.a.Fragment, {}, t, n && j, d("div", {
                        className: "buttons-extension__button"
                    }, void 0, e))
                })), g(b(t), "addVisibleButtons", (function (e) {
                    return e.map((function (e, n, r) {
                        return t.createVisibleButton(e, n, t.shouldAddSeparator(r.length, n))
                    }))
                })), g(b(t), "shouldAddSeparator", (function (e, t) {
                    return 0 === t && 1 === e || t > 0 && t - 1 < e
                })), t
            }
            return t = f, (n = [{
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.actionButtons,
                        n = e.isMobile,
                        r = t && t.length > 0,
                        o = r && t.length > 3,
                        i = o ? t.slice(0, 2) : t;
                    return r ? d("div", {
                        className: c()("buttons-extension", {
                            "buttons-extension--rtl": u.i.isRtl(),
                            "buttons-extension--is-mobile": n,
                            "buttons-extension--legacy": s.b
                        })
                    }, void 0, r && this.addVisibleButtons(i), o && this.addHiddenButtonsMenu(t.slice(2))) : null
                }
            }]) && p(t.prototype, n), r && p(t, r), f
        }(o.Component)
}, , function (e, t, n) {}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    })), n.d(t, "b", (function () {
        return c
    }));
    var r = n(12),
        o = n(28),
        i = n(10),
        a = function () {
            return Object(r.f)(i.a.IS_PAYER() ? {
                nextType: o.c,
                endpoint: "gw-initiatepayment/api/v1/promotionMessage/aggregate",
                method: "POST",
                data: Object.keys(i.a.eligibility).filter((function (e) {
                    return i.a.eligibility[e].IsEligible
                })),
                meta: {
                    noReAuth: !0
                }
            } : {
                nextType: o.c,
                endpoint: "gw-notificationsuiapi/api/Notifications/NotificationsCounts",
                method: "GET",
                meta: {
                    noReAuth: !0
                }
            })
        },
        c = function (e) {
            return {
                type: o.i,
                payload: {
                    change: e
                }
            }
        }
}, , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return y
    }));
    var r, o = n(0),
        i = (n(1), n(44)),
        a = n(6);
    n(980);

    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = p(e);
            if (t) {
                var o = p(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(e, t) {
        return !t || "object" !== c(t) && "function" != typeof t ? d(e) : t
    }

    function d(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var y = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(f, e);
        var t, n, o, c = s(f);

        function f(e) {
            var t, n, r, o;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, f), t = c.call(this, e), n = d(t), o = function () {
                var e = t.props,
                    n = e.faqFunc,
                    r = e.faqLink;
                n && n(), setTimeout((function () {
                    window.open(r, "_blank")
                }), 300)
            }, (r = "handleFAQClick") in n ? Object.defineProperty(n, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = o, t
        }
        return t = f, (n = [{
            key: "render",
            value: function () {
                return function (e, t, n, o) {
                    r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                    var i = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {
                            children: void 0
                        }), 1 === a) t.children = o;
                    else if (a > 1) {
                        for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
                        t.children = c
                    }
                    if (t && i)
                        for (var l in i) void 0 === t[l] && (t[l] = i[l]);
                    else t || (t = i || {});
                    return {
                        $$typeof: r,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }(i.a, {
                    className: "faq-button",
                    icon: a.Gb,
                    onClick: this.handleFAQClick
                })
            }
        }]) && u(t.prototype, n), o && u(t, o), f
    }(o.Component)
}, , function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(8)),
        c = n(4),
        u = n.n(c),
        l = n(2),
        s = n(26);

    function f(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var d, p = function (e) {
        var t = e.title,
            n = e.onClose,
            r = e.navigation,
            o = e.testid;
        return f("header", {
            className: u()("entity-details-header", {
                "entity-details-header--legacy": a.b,
                "entity-details-header--rtl": l.i.isRtl()
            })
        }, void 0, f("div", {
            className: "entity-details-header__title",
            "data-testid": "title-" + o
        }, void 0, t), f("div", {
            className: "entity-details-header__end"
        }, void 0, a.b && r && f("div", {
            className: "navigation"
        }, void 0, f("i", {
            className: u()("icon-angle-left", {
                "icon-angle-left__disabled": r.isFirstInView
            }),
            onClick: r.selectPrevious
        }), f("i", {
            className: u()("icon-angle-right", {
                "icon-angle-right__disabled": r.isLastInView
            }),
            onClick: r.selectNext
        })), f("i", {
            className: "icon-close",
            onClick: n,
            "data-testid": "close-modal-button"
        })))
    };

    function y(e, t, n, r) {
        d || (d = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: d,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var m, v = function (e) {
        var t = e.navigation,
            n = t.selectNext,
            r = t.selectPrevious,
            o = t.isFirstInView,
            i = t.isLastInView;
        return y("div", {
            className: u()("entity-details-logo__navigations", {
                "entity-details-logo__navigations--rtl": l.i.isRtl()
            })
        }, void 0, y("i", {
            className: u()("icon-expander prev", {
                disabled: o
            }),
            onClick: r
        }), y("i", {
            className: u()("icon-expander next", {
                disabled: i
            }),
            onClick: n
        }))
    };

    function b(e, t, n, r) {
        m || (m = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: m,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var h, g = function (e) {
        var t = e.icon,
            n = e.text,
            r = e.info,
            o = e.navigation;
        return b("div", {
            className: "entity-details-logo"
        }, void 0, b("div", {
            className: "entity-details-logo__icon",
            "data-mf-replace": "**REMOVED**"
        }, void 0, "string" == typeof t ? b("div", {
            className: "icon-container"
        }, void 0, b("i", {
            className: t
        })) : t), n && b("div", {
            className: "entity-details-logo__text",
            "data-mf-replace": "**REMOVED**"
        }, void 0, n), o && b(v, {
            navigation: o
        }), r && b("div", {
            className: "entity-details-logo__info",
            "data-mf-replace": "**REMOVED**"
        }, void 0, r))
    };
    var O, w = function (e) {
        var t = e.children;
        return function (e, t, n, r) {
            h || (h = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps,
                i = arguments.length - 3;
            if (t || 0 === i || (t = {
                    children: void 0
                }), 1 === i) t.children = r;
            else if (i > 1) {
                for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                t.children = a
            }
            if (t && o)
                for (var u in o) void 0 === t[u] && (t[u] = o[u]);
            else t || (t = o || {});
            return {
                $$typeof: h,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }("div", {
            className: u()("entity-details-main", {
                "entity-details-main--rtl": l.i.isRtl()
            })
        }, void 0, t)
    };

    function j(e, t, n, r) {
        O || (O = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: O,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var S, x = function (e) {
        var t = e.logo,
            n = e.main;
        return j("div", {
            className: "entity-details-content"
        }, void 0, t && i.a.createElement(g, t), j(w, {
            children: n
        }))
    };
    var N, T = function (e) {
        return function (e, t, n, r) {
            S || (S = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps,
                i = arguments.length - 3;
            if (t || 0 === i || (t = {
                    children: void 0
                }), 1 === i) t.children = r;
            else if (i > 1) {
                for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                t.children = a
            }
            if (t && o)
                for (var u in o) void 0 === t[u] && (t[u] = o[u]);
            else t || (t = o || {});
            return {
                $$typeof: S,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }("div", {
            className: "entity-details-footer"
        }, void 0, e.children)
    };
    n(976);

    function A(e) {
        return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function k(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _(Object(n), !0).forEach((function (t) {
                P(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function L(e, t, n, r) {
        N || (N = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: N,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function M(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function C(e, t) {
        return (C = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function I(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = R(e);
            if (t) {
                var o = R(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return D(this, n)
        }
    }

    function D(e, t) {
        return !t || "object" !== A(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var B = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && C(e, t)
        }(i, e);
        var t, n, r, o = I(i);

        function i() {
            return M(this, i), o.apply(this, arguments)
        }
        return t = i, (n = [{
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.className,
                    n = e.header,
                    r = e.logo,
                    o = e.footer,
                    i = e.children,
                    c = e.navigation,
                    f = e.style,
                    d = e.testid;
                return L("div", {
                    className: u()("entity-details", t, {
                        "entity-details--legacy": a.b,
                        "entity-details--rtl": l.i.isRtl(),
                        "entity-details--no-footer": !o
                    }),
                    style: f,
                    "data-testid": d
                }, void 0, !s.a && n && L(p, {
                    title: n.title,
                    onClose: n.onClose,
                    navigation: c,
                    testid: d
                }), L(x, {
                    logo: r && k(k({}, r), {}, {
                        navigation: c
                    }),
                    main: i
                }), L(T, {}, void 0, o))
            }
        }]) && E(t.prototype, n), r && E(t, r), i
    }(o.Component);
    t.a = B
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(996),
        c = n(24),
        u = n(53),
        l = n(4),
        s = n.n(l),
        f = n(2),
        d = n(165);
    n(975);

    function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function y(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(e, t) {
        return !t || "object" !== p(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var O = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(i, e);
        var t, n, r, o = b(i);

        function i(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), (t = o.call(this, e)).state = {
                shakeClass: 0,
                key: e.responsiveSidebar.list.length
            }, t
        }
        return t = i, (n = [{
            key: "componentDidMount",
            value: function () {
                var e = this.props.toggleResponsiveSidebarList;
                Object(d.c)(Object(d.d)({
                    onBackMessagePayload: {
                        type: d.a.CLOSE_SIDEBAR
                    }
                })), e(!0)
            }
        }, {
            key: "UNSAFE_componentWillReceiveProps",
            value: function (e) {
                this.props.responsiveSidebar.selectedRow !== e.responsiveSidebar.selectedRow && this.setState({
                    shakeClass: 1 === this.state.shakeClass ? 2 : 1
                }), this.setState({
                    isIdle: !1
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function () {
                this.props.removeResponsiveSidebar()
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.responsiveSidebar.list,
                    n = e.children,
                    r = e.className,
                    o = this.state.key;
                if (!t || !t[o]) return null;
                var i = {
                    "responsive-side-bar--rtl": f.i.isRtl()
                };
                return i["responsive-side-bar--open".concat(o)] = t[o].isOpen, i["responsive-side-bar--close".concat(o)] = !t[o].isOpen, y(a.a, {}, void 0, y("div", {
                    className: s()("responsive-side-bar", r, i)
                }, void 0, y("div", {
                    className: s()("responsive-side-bar__content", "responsive-side-bar__content--shake".concat(this.state.shakeClass), {})
                }, void 0, n)))
            }
        }]) && m(t.prototype, n), r && m(t, r), i
    }(o.Component);
    t.a = Object(i.c)((function (e) {
        return {
            responsiveSidebar: Object(u.a)(e)
        }
    }), {
        toggleResponsiveSidebarList: c.j,
        removeResponsiveSidebar: c.d
    })(O)
}, function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(4)),
        c = n.n(a),
        u = n(2),
        l = n(61);

    function s(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var f, d = function (e) {
        var t = e.title,
            n = e.text,
            r = e.description;
        return s("div", {
            className: "entity-details-content-item-template"
        }, void 0, t && s("div", {
            className: "entity-details-content-item__header"
        }, void 0, t), n && s("div", {
            className: "entity-details-content-item__text"
        }, void 0, n), r && s("div", {
            className: "entity-details-content-item__description"
        }, void 0, r))
    };
    n(977);

    function p(e, t, n, r) {
        f || (f = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: f,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    t.a = function (e) {
        var t = e.title,
            n = e.text,
            r = e.description,
            o = e.borderBottom,
            a = e.borderTop,
            s = e.card,
            f = e.className;
        return p("div", {
            className: c()("entity-details-content-item", f, {
                "entity-details-content-item--rtl": u.i.isRtl(),
                "entity-details-content-item--border-top": a,
                "entity-details-content-item--border-bottom": o
            })
        }, void 0, s ? i.a.createElement(l.a, s, p(d, {
            title: t,
            text: n,
            description: r
        })) : p(d, {
            title: t,
            text: n,
            description: r
        }))
    }
}, , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n.n(o),
        a = n(1),
        c = n.n(a),
        u = n(5),
        l = n(207),
        s = n(290),
        f = n(399),
        d = n(182),
        p = n(441),
        y = n(2),
        m = n(126),
        v = n(127),
        b = n(565),
        h = n(10),
        g = n(134),
        O = n(23),
        w = n(49);

    function j(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function S() {
        return (S = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var x = j(f.default, {}),
        N = function (e) {
            var t = e.widget,
                n = e.channelLocationId,
                r = void 0 === n ? v.JUMBOTRON_LOCATION.homepage : n,
                a = Object(u.f)(s.getData),
                c = Object(u.f)(s.isFetching) || t && !t.ready,
                f = Object(u.e)(),
                N = Object(d.validateData)(a),
                T = a.name,
                A = a.id,
                _ = a.action,
                k = a.externalSourceId;
            Object(o.useEffect)((function () {
                var e = h.a.IS_PAYER() ? v.JUMBOTRON_PORTAL_TYPES.payer : v.JUMBOTRON_PORTAL_TYPES.receiver,
                    n = Object(m.fetchDataUrl)(r, y.i.getLocale(), e);
                return f(Object(l.fetchData)(n, null == t ? void 0 : t.onReady, null == t ? void 0 : t.name)),
                    function () {
                        return f(Object(l.resetData)())
                    }
            }), []), Object(o.useEffect)((function () {
                N && Object(d.jumbotronGtmViewEvent)(T)
            }), [A]);
            var P = {
                PromotionId: A,
                ExternalSourceId: k,
                ChannelLocationId: r,
                ExtraData: JSON.stringify({
                    userAgent: navigator.userAgent
                })
            };
            return j(p.default, {}, void 0, c ? x : N ? i.a.createElement(b.a, S({}, a, {
                onClose: function () {
                    return f(Object(l.sendJumbotronClosed)(m.jumbotronClosedUrl, P)), void Object(d.jumbotronGtmCloseEvent)(T)
                },
                onCollapse: function () {
                    return Object(d.jumbotronGtmAdditionalInfo)(T)
                },
                action: function () {
                    if (!_ || !_.value) return null;
                    var e = _.target,
                        t = _.value,
                        n = _.url;
                    return {
                        text: t,
                        onClick: function () {
                            f(Object(l.sendJumbotronClicked)(m.jumbotronClickedUrl, P)), Object(d.jumbotronGtmClickEvent)(T);
                            var t = Object(g.a)(n);
                            switch (t.type) {
                                case w.b.external:
                                    window.open(t.href, e || "_self");
                                    break;
                                case w.b.deeplink:
                                case w.b.internal:
                                    f(Object(O.c)(t.href))
                            }
                        }
                    }
                }()
            })) : null)
        };
    N.propsTypes = {
        widget: c.a.object,
        channelLocationId: c.a.number
    }, t.default = N
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(406),
        o = n(377),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "actionsRequired",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "fetchActionsRequiredData", (function () {
        return c
    }));
    var r = n(12),
        o = n(2),
        i = n(226),
        a = n(185),
        c = function (e, t) {
            return Object(r.f)({
                endpoint: i.getActionsRequiredUrl + o.i.getLocale(),
                method: "GET",
                nextType: a.FETCH_ACTIONS_REQUIRED_DATA,
                onSuccessAction: function () {
                    e(t)
                },
                onFailureAction: function () {}
            })
        }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(25);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(414).default, {}, void 0, i(o.a, {
        marginTop: "10px"
    }, void 0, i(o.b, {
        circle: !0,
        width: "28px",
        height: "28px"
    }), i("div", {
        className: "seperator"
    }), i(o.a, {
        justifyContent: "space-between"
    }, void 0, i(o.b, {
        width: "20%"
    }), i(o.b, {
        width: "20%"
    }))));
    t.default = function () {
        return a
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(185);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {
        actions: []
    };
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            o = t.payload;
        switch (n) {
            case r.FETCH_ACTIONS_REQUIRED_DATA.SUCCESS:
                return i(i({}, e), o)
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(423),
        o = n(382),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "balances",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0), n(1);
    var r, o = n(2),
        i = n(68);

    function a(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var c = o.i.translateFrom(i.systemName),
        u = a("span", {
            className: "disabled"
        }, void 0, "   "),
        l = a("span", {
            className: "balances-header-pipe"
        });
    t.default = function (e) {
        var t = e.setCardIndex,
            n = e.MAX_VISIBLE_CARDS,
            r = e.cardIndex,
            i = e.cardsLength,
            s = e.resources,
            f = e.fault,
            d = e.toggleOrderBalanceModal,
            p = o.i.isRtl() ? "icon-angle-right" : "icon-angle-left",
            y = o.i.isRtl() ? "icon-angle-left" : "icon-angle-right";
        return a("div", {
            className: "balances-widget-header"
        }, void 0, a("span", {
            className: "text"
        }, void 0, f ? c("BalanceErrorHeader.Text") : s["Balances.Text"], i > 3 && " (".concat(i, ") ")), i > 3 && a("span", {
            className: "actions"
        }, void 0, a("span", {
            className: r < n ? "disabled" : "",
            onClick: function () {
                return t(!1)
            }
        }, void 0, a("i", {
            className: p
        }), " ", s["Back.Text"]), u, a("span", {
            className: r > i - 1 - n ? "disabled" : "",
            onClick: function () {
                return t(!0)
            }
        }, void 0, s["Next.Text"], " ", a("i", {
            className: y
        })), l, a("i", {
            "data-testid": "widget_balance_icon-settings",
            className: "icon-settings__new",
            onClick: d
        })))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r;
    n(0), n(1);

    function o(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var i = o("div", {
            className: "load-more__red-border"
        }),
        a = o("i", {
            className: "icon-angle-down"
        }),
        c = o("i", {
            className: "icon-angle-up"
        });
    t.default = function (e) {
        var t = e.resources,
            n = e.loadMore,
            r = e.MAX_VISIBLE_CARDS,
            u = e.cardsLength,
            l = e.showAll;
        return u < r ? "" : o("div", {
            className: "load-more"
        }, void 0, i, o("div", {
            className: "load-more__content"
        }, void 0, l ? o("span", {
            onClick: n
        }, void 0, t["ShowLess.Text"], " ", c) : o("span", {
            onClick: n
        }, void 0, t["ShowMore.Text"], " (", u - r, ")", " ", a)))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n(5),
        a = n(567),
        c = (n(1), n(181)),
        u = n(229),
        l = n(425),
        s = n(426),
        f = n(568);

    function d(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function p(e) {
        return function (e) {
            if (Array.isArray(e)) return v(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || m(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || m(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
        }
    }

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var b = d(n(432).default, {}),
        h = {
            sendNewBalancesOrder: u.sendNewBalancesOrder
        };
    t.default = Object(i.c)((function (e) {
        return {
            balancesList: Object(c.getBalancesCards)(e),
            resources: Object(c.getBalancesResources)(e)
        }
    }), h)((function (e) {
        var t = e.balancesList,
            n = e.toggleOrderBalanceModal,
            r = e.sendNewBalancesOrder,
            i = e.resources,
            c = y(Object(o.useState)(t), 2),
            u = c[0],
            m = c[1],
            v = function (e, t) {
                var n = u[e],
                    r = p(u);
                r.splice(e, 1), r.splice(t, 0, n), m(r)
            };
        return d("div", {
            className: "edit-dialog-box"
        }, void 0, d(l.default, {
            resources: i,
            handleDoneClick: function () {
                var e;
                r({
                    balancesOrderStr: (e = u, e.map((function (e) {
                        return e.Id
                    })).join(",")),
                    orderedBalanceList: u
                }), n()
            }
        }), d("div", {
            className: "balances-list-box"
        }, void 0, d(a.a, {
            options: f.a
        }, void 0, d("div", {
            className: "balances-list-box__list",
            "data-testid": "widget-balance_balances-list-box"
        }, void 0, b, u.map((function (e, t) {
            return d(s.default, {
                index: t,
                card: e,
                moveCard: v
            }, e.Id)
        }))))))
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(97);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {
        balances: [],
        resources: {}
    };
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            o = t.payload;
        switch (n) {
            case r.FETCH_BALANCES_DATA.SUCCESS:
                return i(i({}, e), u(o));
            case r.SET_ERROR:
                return i(i({}, e), {}, {
                    fault: !0
                });
            case r.REORDER:
                return i(i({}, e), {}, {
                    balances: o
                })
        }
        return e
    };
    var u = function (e) {
        return i(i({}, e), {}, {
            balances: e.balances.map((function (e, t) {
                return Object.assign({}, e, {
                    position: t + 1
                })
            }))
        })
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(434),
        o = n(388),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "transactions",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(385)),
        a = n(386),
        c = n(231),
        u = n(4),
        l = n.n(u);

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function f(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = b(e);
            if (t) {
                var o = b(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return m(this, n)
        }
    }

    function m(e, t) {
        return !t || "object" !== s(t) && "function" != typeof t ? v(e) : t
    }

    function v(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var g = f(c.default, {}),
        O = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(u, e);
            var t, n, r, c = y(u);

            function u() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, u), h(v(e = c.call(this)), "onTabSelectedChange", (function (t) {
                    e.setState({
                        selectedTab: t
                    })
                })), h(v(e), "renderTransactionsTable", (function () {
                    var t = e.props,
                        n = t.transactions,
                        r = t.futureTransactions,
                        c = e.state.selectedTab,
                        u = "future" === c ? r : n;
                    return f(o.Fragment, {}, void 0, f(i.default, {
                        selectedTab: c,
                        onTabSelectedChange: e.onTabSelectedChange
                    }), f(a.default, {
                        transactions: u,
                        selectedTableName: c
                    }), g)
                })), e.state = {
                    selectedTab: "main"
                }, e
            }
            return t = u, (n = [{
                key: "render",
                value: function () {
                    var e = this.props.fetchFailed;
                    return f(o.Fragment, {}, void 0, f("div", {
                        className: l()("transactions-widget-index", {
                            "no-data": e
                        })
                    }, void 0, this.renderTransactionsTable()))
                }
            }]) && d(t.prototype, n), r && d(t, r), u
        }(o.Component);
    t.default = O
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(4)),
        a = n.n(i),
        c = n(20),
        u = n(85);

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return y(this, n)
        }
    }

    function y(e, t) {
        return !t || "object" !== l(t) && "function" != typeof t ? m(e) : t
    }

    function m(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var b = s(n(231).default, {}),
        h = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(i, e);
            var t, n, r, o = p(i);

            function i() {
                var e, t, n, r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), e = o.call(this), t = m(e), r = function (t) {
                    var n = t.currentTarget.getAttribute("name");
                    Object(u.gtmEvent)({
                        name: "future" === n ? "CE Click Upcoming" : "CE Click Latest",
                        eventCategory: "my account main"
                    }), e.props.onTabSelectedChange(n)
                }, (n = "handleChange") in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return t = i, (n = [{
                key: "render",
                value: function () {
                    var e = this,
                        t = this.props.selectedTab;
                    return s("div", {
                        className: "transactions-header"
                    }, void 0, s("div", {
                        className: "transactions-tabs"
                    }, void 0, ["main", "future"].map((function (n, r) {
                        return s("div", {
                            className: a()("transaction-tab", {
                                selected: t === n
                            }),
                            onClick: e.handleChange,
                            name: n
                        }, n + r, s("div", {}, void 0, Object(c.translate)(n + "TransactionsWidgetTab.Text")))
                    }))), b)
                }
            }]) && f(t.prototype, n), r && f(t, r), i
        }(o.Component);
    t.default = h
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "extractStringFromObj", (function () {
        return N
    }));
    var r, o = n(0),
        i = (n(1), n(4)),
        a = n.n(i),
        c = n(362),
        u = n(361),
        l = n(2),
        s = n(105),
        f = n(61),
        d = n(540),
        p = n(8),
        y = n(5),
        m = n(230),
        v = n(20),
        b = n(85),
        h = n(347),
        g = n.n(h);

    function O(e) {
        return function (e) {
            if (Array.isArray(e)) return x(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || S(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function w(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function j(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || S(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e, t) {
        if (e) {
            if ("string" == typeof e) return x(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
        }
    }

    function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var N = function (e, t) {
            return e ? e.ResKey ? t(e.ResKey, e.ResParams) : e.Value : ""
        },
        T = w("div", {
            className: "error-icon"
        }, void 0, w("i", {
            className: "icon-py-alert-ro"
        })),
        A = w("span", {}, void 0, w("i", {
            className: "icon-expander"
        }));
    t.default = Object(y.c)((function (e) {
        return {
            activityTemplate: e.widgets.transactions.activityTemplate
        }
    }), {
        requestTemplateAction: m.requestTemplateAction
    })((function (e) {
        var t = e.transactions,
            n = e.requestTemplateAction,
            r = e.activityTemplate,
            i = t && t.length > 0,
            y = j(Object(o.useState)(!1), 2),
            m = y[0],
            h = y[1],
            S = j(Object(o.useState)({
                _details: {
                    Details: []
                }
            }), 2),
            x = S[0],
            _ = S[1],
            k = function () {
                h(!1)
            },
            P = function (e, t, n, r) {
                return w("div", {
                    className: "card-wrap"
                }, r, w(f.a, {
                    collapsable: !0,
                    defaultOpen: !0,
                    title: e,
                    className: "details-box__card"
                }, void 0, function (e) {
                    return e && e.map((function (e, t) {
                        var n = e.Title,
                            r = e.Values,
                            o = e.Type;
                        return r && r.length > 0 && (!!r[0].ResKey || !!r[0].Value) && w(d.a, {
                            title: n && n.ResKey ? Object(v.translate)(n.ResKey, n.ResParams) : "",
                            titleResKey: n ? n.ResKey ? n.ResKey : n.Value : "",
                            values: O(r),
                            type: o
                        }, t)
                    }))
                }(n), t && w("div", {
                    className: "details-box-remark"
                }, void 0, t)))
            },
            L = function () {
                return r && r.Details ? r.Details.map((function (e, t) {
                    var n = e.Title,
                        r = e.Content,
                        o = e.Remark,
                        i = N(n, v.translate),
                        a = N(o, v.translate);
                    return P(i, a, r, t)
                })) : w("div", {
                    className: "error-wrapper"
                }, "error", T, w("div", {
                    className: "transactions-error"
                }, void 0, w("div", {
                    className: "transactions-error-title"
                }, void 0, Object(v.translate)("ActivityPopUpErrorLoadingDataTitle.Text")), w("div", {
                    className: "transactions-error-text"
                }, void 0, Object(v.translate)("ActivityPopUpErrorLoadingDataText.Text"))))
            },
            M = function () {
                var e, t, n, o, i, c, s = L(),
                    f = function () {
                        if (r && r.Remark) {
                            var e = N(r.Remark, v.translate);
                            return p.b ? w("div", {
                                className: g.a["activity-extension-wrapper"]
                            }, void 0, w("div", {
                                className: "activity-legal-remark"
                            }, void 0, e)) : w("div", {
                                className: "activity-legal-remark"
                            }, "remark", e)
                        }
                        return null
                    }(),
                    d = function () {
                        var e = x || {},
                            t = e.Date,
                            n = e.Amount,
                            r = e.Status;
                        return w("div", {}, void 0, w("div", {
                            className: "date"
                        }, void 0, l.i.formatDate(t)), w("div", {
                            className: "amount"
                        }, void 0, N(n, v.translate)), w("div", {
                            className: "status"
                        }, void 0, N(r, v.translate)))
                    }(),
                    y = (t = (e = x || {}).Description, n = e.ActivityName, o = e.Icon, i = N(t, v.translate), c = N(n, v.translate), w("div", {}, void 0, w("div", {
                        className: "icon-container"
                    }, void 0, w("i", {
                        className: o
                    })), w("div", {
                        className: a()("description-container", {
                            "description-container--legacy": p.b
                        })
                    }, void 0, i, c ? " - " + c : "")));
                return w(u.a, {
                    className: a()(g.a["transaction-details"], {
                        "transaction-details--legacy": p.b,
                        "transaction-details--rtl": l.i.isRtl()
                    }),
                    header: {
                        title: Object(v.translate)("ActivityDetailsTitle.Text"),
                        onClose: k
                    },
                    logo: {
                        icon: y,
                        info: d
                    },
                    footer: p.b && f,
                    children: [s, !p.b && f]
                })
            };
        return w("div", {}, void 0, w("div", {
            className: "transactions-content"
        }, void 0, i && t.map((function (e, t) {
            var r = l.i.formatDateWithoutYear(e.Date) + " " + l.i.formatYear(e.Date),
                o = N(e.ActivityName, v.translate),
                i = N(e.Description, v.translate);
            return w("div", {
                className: "transaction-row",
                onClick: function () {
                    return function (e) {
                        Object(b.gtmEvent)({
                            name: "CE Select Row",
                            eventCategory: "my account main",
                            eventLabel: Object(v.translate)("ActivityType_".concat(e.TypeId, ".Text")) || ""
                        }), x.ActivityId !== e.ActivityId ? (n(e.ActivityId, e.TypeId), h(!0), _(e)) : (h(!1), _({}))
                    }(e)
                }
            }, "activity_".concat(e.ActivityId, "_").concat(t), w("div", {
                className: "transaction-date"
            }, void 0, w("div", {
                className: "month-day"
            }, void 0, l.i.formatDateWithoutYear(e.Date)), w("div", {
                className: "year"
            }, void 0, l.i.formatYear(e.Date))), w("div", {
                className: "transaction-description",
                title: i + (o ? " - ".concat(o) : ""),
                "data-mf-replace-inner": "*****"
            }, void 0, i, o && w("span", {}, void 0, " - ".concat(o))), w("div", {
                className: "transaction-status"
            }, void 0, N(e.Status, v.translate)), w("div", {
                className: "transaction-amount"
            }, void 0, e.SplitAmount && "".concat(e.SplitAmount.Amount, " ").concat(e.SplitAmount.Currency)), w("div", {
                className: "transaction-mobile"
            }, void 0, w("span", {
                className: "transaction-date"
            }, void 0, r), w("span", {
                className: "transaction-status"
            }, void 0, N(e.Status, v.translate))), w("div", {
                className: a()("transaction-action", {
                    rtl: l.i.isRtl()
                })
            }, void 0, A))
        })), !i && w("div", {
            className: "transactions-empty-state"
        }, void 0, Object(v.translate)("TransactionsWidgetEmptyState.Text"))), p.b ? x && w(s.b, {
            className: "transaction-details-info",
            open: m
        }, void 0, M()) : x && m && w(c.a, {
            className: "transaction-details-info"
        }, void 0, M()))
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(25);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(435).default, {}, void 0, i(o.a, {}, void 0, i(o.b, {
        height: "12px",
        width: "18%",
        marginTop: "18px"
    }), i(o.b, {
        height: "12px",
        width: "20%",
        marginTop: "20px"
    })), i(o.b, {
        height: "12px",
        marginBottom: "20px",
        marginTop: "24px"
    }), i(o.b, {
        height: "12px",
        marginBottom: "20px"
    }), i(o.b, {
        height: "12px",
        marginBottom: "20px"
    }), i(o.b, {
        height: "12px",
        marginBottom: "20px"
    }), i(o.b, {
        height: "12px",
        marginBottom: "20px"
    }));
    t.default = function () {
        return a
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(98);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {
        fetchFailed: !1,
        activityTemplate: {}
    };
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            o = t.payload;
        switch (n) {
            case r.FETCH_TRANSACTIONS_DATA.SUCCESS:
                return i(i({}, e), o);
            case r.FETCH_TRANSACTIONS_DATA.FAILURE:
            case "@payoneer/GET_ASSETS_FAILURE":
                return i(i({}, e), {}, {
                    fetchFailed: !0
                });
            case r.GET_WIDGET_TEMPLATE.SUCCESS:
                return i(i({}, e), {}, {
                    activityTemplate: o
                });
            case r.GET_WIDGET_TEMPLATE.FAILURE:
                return i(i({}, e), {}, {
                    activityTemplate: null
                })
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(390),
        o = n(395),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "promotions",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(12),
        c = n(232),
        u = n(160),
        l = n(391),
        s = n(392),
        f = n(394);
    n(611);

    function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function y(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(e, t) {
        return !t || "object" !== d(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var O = p(f.default, {}),
        w = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(i, e);
            var t, n, r, o = b(i);

            function i() {
                return y(this, i), o.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "componentDidMount",
                value: function () {
                    (0, this.props.fetchPromotionsData)()
                }
            }, {
                key: "componentDidUpdate",
                value: function (e) {
                    var t = this.props,
                        n = t.isLoading,
                        r = t.widget;
                    if (r && !n && e.isLoading) {
                        var o = r.name,
                            i = r.onReady;
                        i && i(o)
                    }
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.isLoading,
                        n = e.widget,
                        r = e.promotions;
                    return p("div", {
                        className: "promotions-widget-outlet"
                    }, void 0, n && !n.ready || t ? O : p(s.default, {
                        promotions: r
                    }))
                }
            }]) && m(t.prototype, n), r && m(t, r), i
        }(o.Component),
        j = {
            fetchPromotionsData: c.fetchPromotionsData
        };
    t.default = Object(i.c)((function (e) {
        return {
            isLoading: a.l.isCallPending(e, u.FETCH_PROMOTIONS_DATA),
            promotions: Object(l.getPromotionsData)(e)
        }
    }), j)(w)
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getPromotionsData", (function () {
        return r
    }));
    var r = function (e) {
        return e.widgets.promotions
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(259)),
        a = n(393),
        c = n(147),
        u = n(10);

    function l(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    t.default = function (e) {
        var t = e.promotions;
        return Object(o.useEffect)((function () {
            t.length > 0 && Object(i.promotionsGtmImpressionMapper)({
                data: t,
                name: "CE Promotions Impression",
                eventCategory: u.a.IS_PAYER() ? "Payer Portal" : "my account main",
                systemName: c.promotionSystemName
            })
        }), []), l("div", {
            className: "promotions-list",
            "data-testid": "promotions-list"
        }, void 0, t && t.map((function (e, t) {
            return l(o.Fragment, {}, t, l(a.default, {
                promotion: e
            }), t < 2 && l("div", {
                className: "sep"
            }, t + 100))
        })))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(2)),
        c = n(5),
        u = n(147),
        l = n(259),
        s = n(107),
        f = n(232);

    function d() {
        return (d = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function p(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    t.default = function (e) {
        var t = e.promotion,
            n = Object(c.e)(),
            r = t.Id,
            o = t.ExternalSourceId,
            y = void 0 === o ? "" : o,
            m = t.Icon,
            v = void 0 === m ? "" : m,
            b = t.Title,
            h = (b = void 0 === b ? {} : b).Value,
            g = void 0 === h ? "" : h,
            O = t.Content,
            w = (O = void 0 === O ? {} : O).Value,
            j = void 0 === w ? "" : w,
            S = t.ClickToAction,
            x = (S = void 0 === S ? {} : S).Value,
            N = void 0 === x ? "" : x,
            T = S.Url,
            A = void 0 === T ? "" : T,
            _ = S.Target,
            k = void 0 === _ ? "" : _;
        return p("div", {
            className: "promotion",
            "data-testid": "promotion-".concat(r)
        }, void 0, p("div", {
            className: "promotion-container"
        }, void 0, v && p("div", {
            className: "promotion-container__icon"
        }, void 0, p("img", {
            src: v,
            "data-testid": "promotion-icon"
        })), p("div", {
            className: "promotion-container__main"
        }, void 0, p("div", {
            className: "promotion-container-details"
        }, void 0, p("p", {
            className: "promotion-container-details__title",
            "data-testid": "promotion-title"
        }, void 0, g), i.a.createElement("p", d({
            className: "promotion-container-details__description",
            "data-testid": "promotion-description"
        }, Object(a.h)(j)))))), p("div", {
            className: "promotion-container-footer"
        }, void 0, p("span", {
            onClick: function () {
                var e = {
                    PromotionId: r,
                    ExternalSourceId: y,
                    ExtraData: JSON.stringify({
                        userAgent: navigator.userAgent
                    })
                };
                Object(l.promotionsGtmMapper)({
                    data: t,
                    name: "CE Promotion Clicked",
                    eventCategory: "my account main",
                    systemName: u.promotionSystemName
                }), n(Object(f.sendAdClicked)(e))
            }
        }, void 0, p(s.a, {
            text: N,
            link: A,
            theme: "cancel",
            testid: "promotion-cta",
            target: k
        }))))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(260),
        i = n(272);

    function a(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var c = a(o.default, {}, void 0, a(i.default, {}), a(i.default, {}), a(i.default, {}));
    t.default = function () {
        return c
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(160),
        o = n(436);

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function (t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            i = t.payload;
        switch (n) {
            case r.FETCH_PROMOTIONS_DATA.SUCCESS:
                return Object(o.promotionsValidator)(u(i.Promotions))
        }
        return e
    };
    var u = function (e) {
        return e.map((function (e, t) {
            return a(a({}, e), {}, {
                position: t + 1
            })
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(437),
        o = n(442),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "jumbotron",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getJumbotron", (function () {
        return r
    }));
    var r = function (e) {
        return e.widgets.jumbotron.actions[0]
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(373),
        o = n(400),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "jumbotronTemplates",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(25);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(440).Skeleton, {}, void 0, i(o.a, {
        marginTop: "16px"
    }, void 0, i(o.b, {
        className: "circle",
        circle: !0,
        width: "35px",
        height: "35px"
    }), i("div", {
        className: "line"
    }, void 0, i(o.b, {
        height: "12px"
    }), i(o.b, {
        height: "12px"
    }), i(o.b, {
        height: "12px"
    }))));
    t.default = function () {
        return a
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(119);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {
        data: null
    };
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case r.FETCH_DATA.SUCCESS:
                return i(i({}, e), {}, {
                    data: t.payload
                });
            case r.RESET_DATA:
                return i(i({}, e), {}, {
                    data: null
                })
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(443),
        o = n(402),
        i = n(9);
    t.default = i.a.injectWidget({
        component: {
            promise: Promise.resolve({
                default: r.default
            })
        },
        reducer: {
            name: "paymentRequest",
            promise: Promise.resolve({
                default: o.default
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(198),
        o = n(15),
        i = n.n(o)()({
            payments: [],
            resources: {}
        });
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            o = t.payload;
        switch (n) {
            case r.FETCH_PENDING_PAYMENT_REQUEST_DATA.SUCCESS:
                return {
                    payments: o && o.PaymentRequests || [], resources: o && o.Resources || []
                }
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(5)),
        c = n(33),
        u = n(181),
        l = n(4),
        s = n.n(l),
        f = n(105),
        d = n(342),
        p = n(379),
        y = n(380);
    var m, v, b, h = n(7).f.div(r || (m = ["\n.snackBackground {\n  overflow: hidden;\n\n  .snack {\n    height: 0;\n    transition: height 0.3s;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    background: white;\n    opacity: 1;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .overlay {\n    visibility: hidden;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.5;\n    background: black;\n    z-index: 1;\n  }\n\n  &.openSnack {\n    .overlay {\n      visibility: visible;\n    }\n\n    .snack {\n      height: auto;\n      z-index: 10;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      .balance-card {\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n      }\n    }\n  }\n\n  &.closeSnack {\n    .overlay {\n      visibility: hidden;\n      transition-delay: 0.3s;\n      transition-property: visibility;\n    }\n  }\n}\n"], v || (v = m.slice(0)), r = Object.freeze(Object.defineProperties(m, {
        raw: {
            value: Object.freeze(v)
        }
    }))));

    function g(e, t, n, r) {
        b || (b = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: b,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var O = g("div", {
        className: "overlay"
    });

    function w(e) {
        var t = e.children,
            n = e.isOpen;
        return g(h, {}, void 0, g("div", {
            className: s()("snackBackground", {
                openSnack: n,
                closeSnack: !n
            })
        }, void 0, O, g("div", {
            className: "snack"
        }, void 0, t)))
    }
    var j, S = n(381),
        x = n(3),
        N = n(284),
        T = n(2),
        A = n(68),
        _ = n(187);

    function k(e) {
        return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function P(e, t, n, r) {
        j || (j = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: j,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function L(e) {
        return function (e) {
            if (Array.isArray(e)) return M(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return M(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function C(e, t) {
        return (C = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function I(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = B(e);
            if (t) {
                var o = B(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return D(this, n)
        }
    }

    function D(e, t) {
        return !t || "object" !== k(t) && "function" != typeof t ? R(e) : t
    }

    function R(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function B(e) {
        return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function z(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var $ = T.i.translateFrom(A.systemName),
        U = P("div", {
            className: "sep"
        }),
        F = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && C(e, t)
            }(a, e);
            var t, n, r, o = I(a);

            function a(e) {
                var t;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), z(R(t = o.call(this, e)), "loadMore", (function () {
                    return t.setState({
                        showAll: !t.state.showAll
                    })
                })), z(R(t), "setCardIndex", (function (e) {
                    var n = t.state,
                        r = n.cardIndex,
                        o = n.maxCardIndex,
                        i = t.props.cards;
                    if (!(e && r > i.length - 1 - t.MAX_VISIBLE_CARDS) && (e || !(r < t.MAX_VISIBLE_CARDS))) {
                        var a = e ? r + t.MAX_VISIBLE_CARDS : r - t.MAX_VISIBLE_CARDS;
                        Object(_.getDataForBalancesGtm)({
                            name: e ? "CE Balances Carousel Clicked Next" : "CE Balances Carousel Clicked Back",
                            eventCategory: "my account main"
                        }), o < a && Object(_.getDataForBalancesGtm)({
                            data: L(i).splice(a, a + t.MAX_VISIBLE_CARDS >= i.length ? i.length - a : t.MAX_VISIBLE_CARDS),
                            name: "CE Balances Carousel View More Cards",
                            eventCategory: "my account main",
                            total: i.length
                        }), t.setState({
                            animate: !0,
                            cardIndex: a,
                            maxCardIndex: o >= a + t.MAX_VISIBLE_CARDS ? o : a
                        })
                    }
                })), z(R(t), "closeAnimation", (function () {
                    t.state.animate && setTimeout((function () {
                        t.setState({
                            animate: !1
                        })
                    }), 600)
                })), z(R(t), "toggleSnack", (function (e) {
                    t.setState({
                        snackOpen: !t.state.snackOpen
                    }), e && t.setState({
                        card: e
                    })
                })), z(R(t), "toggleOrderBalanceModal", (function () {
                    var e = !t.state.displayBalanceOrderingModal;
                    t.setState({
                        displayBalanceOrderingModal: e
                    })
                }));
                var n = c.a.isTablet && !c.a.isMobile;
                return t.state = {
                    cardIndex: 0,
                    showAll: n,
                    animate: !0,
                    snackOpen: !1,
                    card: null,
                    maxCardIndex: 2
                }, t.MAX_VISIBLE_CARDS = 3, t
            }
            return t = a, (n = [{
                key: "componentDidMount",
                value: function () {
                    var e = this.props.cards;
                    e.length > 0 && Object(_.getDataForBalancesImpressionGtm)(L(e).splice(0, e.length >= this.MAX_VISIBLE_CARDS ? this.MAX_VISIBLE_CARDS : e.length), "CE Balances Carousel Impression", "my account main", e.length, A.systemName)
                }
            }, {
                key: "render",
                value: function () {
                    var e = this,
                        t = this.props,
                        n = t.cards,
                        r = t.resources,
                        o = t.fault,
                        a = this.state,
                        u = a.cardIndex,
                        l = a.showAll,
                        m = a.animate,
                        v = a.snackOpen,
                        b = a.displayBalanceOrderingModal,
                        h = l ? n : n.slice(u, u + this.MAX_VISIBLE_CARDS);
                    return n.length || o ? (this.closeAnimation(), P("div", {
                        className: s()({
                            "balances-widget-main": !o
                        })
                    }, void 0, P(p.default, {
                        setCardIndex: this.setCardIndex,
                        MAX_VISIBLE_CARDS: this.MAX_VISIBLE_CARDS,
                        cardIndex: u,
                        cardsLength: n.length,
                        resources: r,
                        fault: o,
                        toggleOrderBalanceModal: this.toggleOrderBalanceModal
                    }), b && P(f.b, {
                        className: "edit-balance-dialog",
                        open: !0
                    }, void 0, P(S.default, {
                        toggleOrderBalanceModal: this.toggleOrderBalanceModal
                    })), o && P("div", {
                        className: "balances-cards-list"
                    }, void 0, P(N.a, {
                        title: $("BalanceErrorTitle.Text"),
                        text: $("BalanceErrorText.Text"),
                        buttonText: $("Refresh.Text"),
                        buttonAction: function () {
                            location.href = x.a.home.pathname
                        },
                        gtm: {
                            errorName: "BalanceErrorTitle.Text",
                            errorMessage: "BalanceErrorText.Text",
                            systemName: A.systemName
                        }
                    })), P("div", {
                        className: "balances-cards-list-wrapper"
                    }, void 0, !o && P("div", {
                        className: "balances-cards-list"
                    }, void 0, h.map((function (t, n) {
                        return P(i.a.Fragment, {}, n, P(d.default, {
                            card: t,
                            resources: r,
                            animate: m,
                            openSnack: e.toggleSnack,
                            isSnackCard: !1,
                            isMobile: c.a.isMobile,
                            index: n
                        }), n < h.length - 1 && U)
                    }))), !o && n.length > 3 && P(y.default, {
                        loadMore: this.loadMore,
                        showAll: l,
                        MAX_VISIBLE_CARDS: this.MAX_VISIBLE_CARDS,
                        cardsLength: n.length,
                        resources: r
                    })), P(w, {
                        isOpen: v
                    }, void 0, this.state.card && P(d.default, {
                        card: this.state.card,
                        resources: r,
                        animate: m,
                        openSnack: this.toggleSnack,
                        isSnackCard: !0,
                        isMobile: c.a.isMobile
                    })))) : null
                }
            }]) && E(t.prototype, n), r && E(t, r), a
        }(o.Component);
    t.default = Object(a.c)((function (e) {
        return {
            cards: Object(u.getBalancesCards)(e),
            resources: Object(u.getBalancesResources)(e),
            fault: e.widgets.balances.fault
        }
    }))(F)
}, , , function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ActionsRequiredOutlet", (function () {
        return A
    }));
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(12),
        c = n(4),
        u = n.n(c),
        l = n(33),
        s = n(45),
        f = n(375),
        d = n(185),
        p = n(376),
        y = n(415),
        m = n(197);
    n(608);

    function v(e) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function b(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function w(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = x(e);
            if (t) {
                var o = x(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return j(this, n)
        }
    }

    function j(e, t) {
        return !t || "object" !== v(t) && "function" != typeof t ? S(e) : t
    }

    function S(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function x(e) {
        return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var T = b(p.default, {}),
        A = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(i, e);
            var t, n, r, o = w(i);

            function i() {
                var e;
                h(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return N(S(e = o.call.apply(o, [this].concat(n))), "state", {
                    actionsOpen: e.props.actions.length > 1 && e.props.actions[0].category === s.ACTION_CATEGORY.high && !l.a.isMobile
                }), N(S(e), "openActionsToggle", (function () {
                    var t = e.state.actionsOpen,
                        n = e.props.actions;
                    (n.length > 1 || 1 === n.length && l.a.isMobile) && e.setState({
                        actionsOpen: !t
                    })
                })), e
            }
            return t = i, (n = [{
                key: "componentDidMount",
                value: function () {
                    var e = this.props,
                        t = e.fetchActionsRequiredData,
                        n = e.widget;
                    t(n.onReady, n.name)
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.state.actionsOpen,
                        t = this.props,
                        n = t.isLoading,
                        r = t.widget,
                        o = t.actions,
                        i = r ? r.ready && !n : !n;
                    return i && !o.length ? null : b("div", {
                        className: u()("actions-required-widget-outlet", {
                            "actions-required-widget-outlet--open": e
                        })
                    }, void 0, i ? b(y.default, {
                        openActionsToggle: this.openActionsToggle,
                        actionsOpen: e
                    }) : T)
                }
            }]) && g(t.prototype, n), r && g(t, r), i
        }(o.Component),
        _ = {
            fetchActionsRequiredData: f.fetchActionsRequiredData
        };
    t.default = Object(i.c)((function (e) {
        return {
            isLoading: a.l.isCallPending(e, d.FETCH_ACTIONS_REQUIRED_DATA),
            actions: Object(m.getActionsRequiredData)(e)
        }
    }), _)(A)
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "apiUrl", (function () {
        return r
    })), n.d(t, "systemName", (function () {
        return o
    }));
    var r = "gw-prqservice/api/v1/payer/pendingpaymentrequests",
        o = "prqservice"
}, , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);
    t.default = a.f.div(r || (o = ["\n    width: 100%;\n    height: 50px;\n    box-shadow: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    background: ", ";\n    overflow: hidden;\n\n    @media (min-width: ", ") {\n        height: 64px;\n    }\n\n    > div {\n        display: flex;\n        align-items: center;\n    }\n\n    .seperator {\n        width: 2px;\n        height: 40px;\n        background-color: ", ";\n        margin: -12px 10px 0;\n    }\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))), (function (e) {
        return e.theme["ma-box-shadow"]
    }), (function (e) {
        return e.theme["white-color"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-200"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n(5),
        a = (n(1), n(33)),
        c = n(197),
        u = n(417),
        l = n(419),
        s = n(85),
        f = n(226);
    n(607);

    function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function y(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(e, t) {
        return !t || "object" !== d(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var O = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(i, e);
        var t, n, r, o = b(i);

        function i() {
            return y(this, i), o.apply(this, arguments)
        }
        return t = i, (n = [{
            key: "componentDidMount",
            value: function () {
                var e = this.props.actions;
                e.length > 0 && Object(s.actionsGtmImpressionMapper)({
                    data: e,
                    name: "CE CTA Action Required Impression",
                    eventCategory: "my account main",
                    systemName: f.systemName
                })
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.actions,
                    n = e.resources,
                    r = e.actionsOpen,
                    o = e.openActionsToggle;
                return t.length > 1 || a.a.isMobile ? p(l.default, {
                    actions: t,
                    resources: n,
                    actionsOpen: r,
                    openActionsToggle: o
                }) : p(u.default, {
                    actions: t
                })
            }
        }]) && m(t.prototype, n), r && m(t, r), i
    }(o.Component);
    t.default = Object(i.c)((function (e) {
        return {
            actions: Object(c.getActionsRequiredData)(e),
            resources: Object(c.getActionsRequiredResources)(e)
        }
    }), {})(O)
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "actionValidator", (function () {
        return r
    }));
    var r = function (e) {
        return !!e.resources && (!!e.link && (!!e.category && (!!e.resources.button.value && (!(!e.resources.title && !e.resources.description) && !!(e.resources.title && e.resources.title.value || e.resources.description && e.resources.description.value)))))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return f
    }));
    n(0), n(1);
    var r, o = n(107),
        i = n(76),
        a = n(418),
        c = n(45);

    function u(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var l = u(i.Icon, {
            className: "icon-file-error__new"
        }),
        s = u(i.HorizontalLine, {});

    function f(e) {
        var t = e.actions;
        if (!t || !t[0]) return null;
        var n = t[0],
            r = n.resources,
            f = r.description,
            d = r.title,
            p = r.button,
            y = n.category,
            m = n.link;
        return u(i.ActionContainer, {
            category: y
        }, void 0, u(i.DeatilsContainer, {}, void 0, l, s, u("div", {}, void 0, d && u(i.Title, {}, void 0, null == d ? void 0 : d.value), f && u(i.Paragraph, {}, void 0, null == f ? void 0 : f.value))), u(a.SingleButtonContainer, {}, void 0, u(o.a, {
            isSingle: !0,
            onClick: function () {
                return window.location.href = m
            },
            text: p.value,
            theme: y === c.ACTION_CATEGORY.high ? "action" : "service"
        }, void 0, p.value)))
    }
}, function (e, t, n) {
    "use strict";
    var r;
    n.r(t), n.d(t, "SingleButtonContainer", (function () {
        return a
    }));
    var o, i, a = n(7).f.div(r || (o = ["\n    width: max-content;\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return s
    }));
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(420)),
        c = n(422),
        u = n(33);

    function l(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function s(e) {
        var t = e.actions,
            n = e.resources,
            r = e.actionsOpen,
            o = e.openActionsToggle,
            s = u.a.isMobile,
            f = t[0].category;
        return i.a.createElement(i.a.Fragment, null, l(a.default, {
            numOfActions: t.length > 3 && s ? 3 : t.length,
            resources: n,
            category: f,
            actionsOpen: r,
            openActionsToggle: o
        }), r && l(c.default, {
            actions: t
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return s
    }));
    n(0), n(1);
    var r, o = n(421),
        i = n(76),
        a = n(340);

    function c(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var u = c(i.Icon, {
            className: "icon-file-error__new"
        }),
        l = c(i.HorizontalLine, {});

    function s(e) {
        var t = e.numOfActions,
            n = e.resources,
            r = e.category,
            s = e.actionsOpen,
            f = e.openActionsToggle,
            d = Object(o.default)({
                string: n["ActionsRequired_Title.General.Text"],
                params: {
                    numberOfActions: t
                }
            });
        return c(i.ActionContainer, {
            isOpen: s,
            category: r,
            onClick: f,
            clickable: !0
        }, void 0, c(i.DeatilsContainer, {}, void 0, u, l, c("div", {}, void 0, c(a.HeaderTitle, {
            category: r
        }, void 0, d))), c(a.IconToggle, {
            isOpen: s,
            className: "icon-right-open-big"
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getResource", (function () {
        return r
    }));
    var r = function (e) {
        var t = e.string,
            n = e.params,
            r = void 0 === n ? {} : n,
            o = t;
        return Object.keys(r).forEach((function (e) {
            o = o.replace("{{".concat(e, "}}"), r[e])
        })), o
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return f
    }));
    var r, o = n(0),
        i = (n(1), n(45)),
        a = n(33),
        c = n(37),
        u = n(76),
        l = n(211);

    function s(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function f(e) {
        var t = e.actions,
            n = t[0].category,
            r = a.a.isMobile ? t.slice(0, i.MAX_MOBILE_ACTIONS) : t;
        return s(l.MultiActionRequiredActionsContainer, {
            category: n
        }, void 0, r.map((function (e) {
            var t = e.resources,
                n = t.description,
                r = t.title,
                f = e.category,
                d = e.id;
            return s(o.Fragment, {}, d, s(l.MultiActionsRequiredDeatilsContainer, {
                description: n
            }, void 0, s(u.Title, {}, void 0, null == r ? void 0 : r.value), n && s(u.Paragraph, {
                category: f
            }, void 0, null == n ? void 0 : n.value)), s(l.ButtonContainer, {}, void 0, function (e) {
                var t = e.resources.button,
                    n = e.category,
                    r = e.link;
                return a.a.isMobile ? s(c.a, {
                    href: r
                }, void 0, t.value) : s(l.MultiActionsRequiredButton, {
                    onClick: function () {
                        return window.location.href = r
                    },
                    text: t.value,
                    theme: n === i.ACTION_CATEGORY.high ? "action" : "service"
                }, void 0, t.value)
            }(e)))
        })))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(12),
        c = n(229),
        u = n(97),
        l = n(403),
        s = n(433);
    n(609);

    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = h(e);
            if (t) {
                var o = h(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return b(this, n)
        }
    }

    function b(e, t) {
        return !t || "object" !== f(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var g = d(l.default, {}),
        O = d(s.default, {}),
        w = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(i, e);
            var t, n, r, o = v(i);

            function i() {
                return p(this, i), o.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "componentDidMount",
                value: function () {
                    (0, this.props.fetchBalancesData)()
                }
            }, {
                key: "componentDidUpdate",
                value: function (e) {
                    var t = this.props,
                        n = t.isLoading,
                        r = t.widget;
                    if (r && !n && e.isLoading) {
                        var o = r.name,
                            i = r.onReady;
                        i && i(o)
                    }
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.isLoading,
                        n = e.widget;
                    return d("div", {
                        className: "balances-widget-outlet"
                    }, void 0, n && !n.ready || t ? O : g)
                }
            }]) && y(t.prototype, n), r && y(t, r), i
        }(o.Component),
        j = {
            fetchBalancesData: c.fetchBalancesData
        };
    t.default = Object(i.c)((function (e) {
        return {
            isLoading: a.l.isCallPending(e, u.FETCH_BALANCES_DATA)
        }
    }), j)(w)
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "setFaultsAction", (function () {
        return o
    }));
    var r = n(97),
        o = function () {
            return {
                type: r.SET_ERROR
            }
        }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return i
    }));
    var r;
    n(0);

    function o(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function i(e) {
        var t = e.resources,
            n = e.handleDoneClick;
        return o("div", {
            className: "edit-dialog-box__header"
        }, void 0, o("span", {
            "data-testid": "widget-balance_reordering-title"
        }, void 0, t["OrderModalTitle.Text"]), o("span", {
            className: "done-reordering-button",
            "data-testid": "widget-balance_done-reordering-button",
            onClick: n
        }, void 0, t["Done.Text"]))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n.n(o),
        a = n(997),
        c = n(998),
        u = n(103),
        l = n(257),
        s = n(346);

    function f(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function (e) {
        var t = e.index,
            n = e.moveCard,
            d = e.card,
            p = Object(o.useRef)(null),
            y = f(Object(a.a)({
                accept: u.ItemTypes.BALANCE,
                hover: function (e, r) {
                    if (p.current) {
                        var o = e.index,
                            i = t;
                        if (o !== i) {
                            var a = p.current.getBoundingClientRect(),
                                c = (a.bottom - a.top) / 2,
                                u = r.getClientOffset().y - a.top;
                            o < i && u < c || o > i && u > c || (n(o, i), e.index = i)
                        }
                    }
                }
            }), 2)[1],
            m = f(Object(c.a)({
                item: {
                    type: u.ItemTypes.BALANCE,
                    id: d.Id,
                    index: t,
                    card: d
                },
                collect: function (e) {
                    return {
                        isDragging: e.isDragging()
                    }
                }
            }), 3),
            v = m[0].isDragging,
            b = m[1],
            h = m[2];
        return Object(o.useEffect)((function () {
            h(Object(s.a)(), {
                captureDraggingState: !0
            })
        }), []), b(y(p)), i.a.createElement("div", {
            ref: p
        }, function (e, t, n, o) {
            r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var i = e && e.defaultProps,
                a = arguments.length - 3;
            if (t || 0 === a || (t = {
                    children: void 0
                }), 1 === a) t.children = o;
            else if (a > 1) {
                for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
                t.children = c
            }
            if (t && i)
                for (var l in i) void 0 === t[l] && (t[l] = i[l]);
            else t || (t = i || {});
            return {
                $$typeof: r,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }(l.default, {
            card: d,
            isDragging: v
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return a
    }));
    n(0);
    var r, o = n(428);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function a(e) {
        var t = e.card,
            n = t.balance,
            r = t.masked,
            a = t.Id;
        return i(o.default, {
            "data-testid": "widget-balance_balance-item-".concat(a)
        }, void 0, "".concat(n.amount, " ").concat(n.currency), r && r.id && i("span", {
            className: "masked"
        }, void 0, " | ".concat(r.id)))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);
    t.default = a.f.span(r || (o = ["\n    margin: 0 16px;\n    color: ", ";\n    font-weight: bold;\n\n    .masked {\n        color: ", ";\n        font-weight: normal;\n    }\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))), (function (e) {
        return e.theme["brand-color-cold-gray-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-600"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return a
    }));
    var r;
    n(0);

    function o(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var i = o("path", {
        d: "M76.17,35.51h-50v-5h50Zm0,12.14h-50v5h50Zm0,17.14h-50v5h50Z",
        fill: "#c9cdd7"
    });

    function a() {
        return o("svg", {
            style: {
                width: "40px"
            },
            viewBox: "0 0 100 100"
        }, void 0, i)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return c
    }));
    n(0);
    var r, o = n(4),
        i = n.n(o);

    function a(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function c(e) {
        var t = e.currency;
        return a("div", {
            className: "flag-circle"
        }, void 0, a("div", {
            className: i()("flag-icon-image", "flag-" + t)
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);

    function c(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    t.default = a.f.div(r || (r = c(["\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    height: 61px;\n    border-bottom: #e4e7ed 1px solid;\n    padding: 0 16px;\n    align-items: center;\n    width: 500px;\n    position: relative;\n\n    ", ";\n\n    ", ";\n\n    @media (max-width: ", ") {\n        width: ", ";\n    }\n\n    .flags-and-text {\n        display: flex;\n        align-items: center;\n    }\n\n    .flag-circle {\n        width: 34px;\n        height: 34px;\n        display: inline-block;\n        border-radius: 50%;\n        border: solid 0.7px ", ";\n\n        .flag-icon-image {\n            width: 20px;\n            height: 15px;\n            margin: 9px 6px 0 6px;\n        }\n    }\n\n    &__text {\n        font-size: 18px;\n        padding: 5px;\n    }\n\n    b {\n        color: ", ";\n    }\n\n    i {\n        color: ", ";\n        font-size: 20px;\n        cursor: pointer;\n        &:hover {\n            color: ", ";\n        }\n    }\n"])), (function (e) {
        return e.customDragLayer && Object(a.e)(o || (o = c(["\n            background-color: white;\n            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n            width: 520px;\n        "])))
    }), (function (e) {
        return e.isDragging && Object(a.e)(i || (i = c(["\n            &::before {\n                content: '';\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                right: 0;\n                left: 0;\n                background-color: ", ";\n            }\n        "])), e.theme["brand-color-cold-gray-300"])
    }), (function (e) {
        return e.theme["screen-sm"]
    }), (function (e) {
        return e.customDragLayer ? "calc(100% - 12px)" : "100%"
    }), (function (e) {
        return e.theme["brand-color-cold-gray-500"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-600"]
    }), (function (e) {
        return e.theme["brand-color-blue-500"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(995),
        i = n(103),
        a = n(257);

    function c(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var u = {
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
    };

    function l(e, t) {
        if (!e || !t) return {
            display: "none"
        };
        var n = t.x,
            r = t.y,
            o = "translate(".concat(n, "px, ").concat(r, "px)");
        return {
            transform: o,
            WebkitTransform: o
        }
    }
    t.default = function () {
        var e = Object(o.a)((function (e) {
                return {
                    item: e.getItem(),
                    itemType: e.getItemType(),
                    initialOffset: e.getInitialSourceClientOffset(),
                    currentOffset: e.getSourceClientOffset(),
                    isDragging: e.isDragging()
                }
            })),
            t = e.itemType,
            n = e.isDragging,
            r = e.item,
            s = e.initialOffset,
            f = e.currentOffset;
        return n ? c("div", {
            style: u
        }, void 0, c("div", {
            style: l(s, f)
        }, void 0, function () {
            switch (t) {
                case i.ItemTypes.BALANCE:
                    var e = r.card;
                    return c(a.default, {
                        card: e,
                        customDragLayer: !0
                    });
                default:
                    return null
            }
        }())) : null
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r, o = n(271);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(258).default, {}, void 0, i(o.default, {}), i(o.default, {}), i(o.default, {}));
    t.default = function () {
        return a
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(2),
        c = n(12),
        u = n(130),
        l = n(230),
        s = n(98),
        f = n(233),
        d = n(20),
        p = n(384),
        y = n(387),
        m = n(3),
        v = n(284),
        b = n(4),
        h = n.n(b),
        g = n(8);
    n(610);

    function O(e) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function w(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function j(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function x(e, t) {
        return (x = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function N(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = _(e);
            if (t) {
                var o = _(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return T(this, n)
        }
    }

    function T(e, t) {
        return !t || "object" !== O(t) && "function" != typeof t ? A(e) : t
    }

    function A(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function k(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var P = w(y.default, {}),
        L = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && x(e, t)
            }(c, e);
            var t, n, r, i = N(c);

            function c() {
                var e;
                j(this, c);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return k(A(e = i.call.apply(i, [this].concat(n))), "fetchAssets", (function () {
                    e.props.initSystem({
                        initialize: k({}, u.a, "".concat(d.assetsApiRoot, "?locale=").concat(a.i.getLocale())),
                        system: d.systemName
                    })
                })), k(A(e), "renderHeader", (function (t) {
                    var n = e.props.fetchFailed;
                    return w("div", {
                        className: h()("transactions-widget-header", {
                            "error-fetch": n
                        })
                    }, void 0, Object(d.translate)("Transactions.Text"), t && w("div", {
                        className: "sub-title"
                    }, void 0, Object(d.translate)("TransactionsWidgetSubtitle.Text")))
                })), k(A(e), "renderErrorComponent", (function () {
                    return w(v.b, {
                        title: Object(d.t)("TransactionsWidgetErrorComponentTitle.Text"),
                        text: Object(d.t)("TransactionsWidgetErrorComponentText.Text"),
                        buttonText: Object(d.t)("Refresh.Text"),
                        buttonAction: function () {
                            location.href = m.a.home.path
                        },
                        gtm: {
                            errorName: "TransactionsWidgetErrorComponentTitle.Text",
                            errorMessage: "TransactionsWidgetErrorComponentText.Text",
                            systemName: d.systemName
                        }
                    })
                })), k(A(e), "renderTransactions", (function (e, t) {
                    return w(p.default, {
                        transactions: e && e.slice(0, d.numOfTransactionsToShow),
                        futureTransactions: t && t.slice(0, d.numOfTransactionsToShow)
                    })
                })), e
            }
            return t = c, (n = [{
                key: "componentDidMount",
                value: function () {
                    var e = this.props.fetchTransactionsData;
                    this.fetchAssets(), e()
                }
            }, {
                key: "componentDidUpdate",
                value: function (e) {
                    var t = this.props,
                        n = t.dataLoading,
                        r = t.widget;
                    if (r && !n && e.dataLoading) {
                        var o = r.name,
                            i = r.onReady;
                        i && i(o)
                    }
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.widget,
                        n = e.transactions,
                        r = e.futureTransactions,
                        i = e.fetchFailed,
                        a = e.systemReady,
                        c = e.dataLoading,
                        u = t.ready && a && !c,
                        l = n && n.slice(0, d.numOfTransactionsToShow),
                        s = r && r.slice(0, d.numOfTransactionsToShow);
                    return w("div", {
                        className: h()("transactions-widget-outlet", {
                            "transactions-widget-outlet--is-legacy": g.b
                        })
                    }, void 0, i ? w(o.Fragment, {}, void 0, this.renderHeader(!i), this.renderErrorComponent()) : u ? w(o.Fragment, {}, void 0, this.renderHeader(!0), this.renderTransactions(l, s)) : P)
                }
            }]) && S(t.prototype, n), r && S(t, r), c
        }(o.Component),
        M = {
            fetchTransactionsData: l.fetchTransactionsData,
            initSystem: c.h
        };
    t.default = Object(i.c)((function (e) {
        return {
            dataLoading: c.l.isCallPending(e, s.FETCH_TRANSACTIONS_DATA),
            systemReady: c.l.systemReady(e, d.systemName),
            transactions: Object(f.getTransactionsData)(e),
            futureTransactions: Object(f.getFutureTransactionsData)(e),
            fetchFailed: Object(f.getPartialState)(e).fetchFailed
        }
    }), M)(L)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);
    t.default = a.f.div(r || (o = ["\n    width: calc(100% - 10px);\n    margin: 7px 5px 0;\n    padding: 0 5px;\n    box-shadow: ", ";\n    background-color: ", ";\n    height: 240px;\n\n    @media (min-width: ", ") {\n        height: 350px;\n    }\n\n    @media (min-width: ", ") {\n        height: 400px;\n    }\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))), (function (e) {
        return e.theme["ma-box-shadow"]
    }), (function (e) {
        return e.theme["white-color"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["screen-md-min"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "promotionsValidator", (function () {
        return r
    }));
    var r = function (e) {
        return e.filter((function (e) {
            return !!((t = e) && t.ClickToAction && t.ClickToAction.Url && t.ClickToAction.Value && (t.Title || t.Title.Value || t.Content || t.Content.Value));
            var t
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(12),
        c = n(438),
        u = n(143),
        l = n(397),
        s = n(439),
        f = n(234),
        d = n(398);
    n(612);

    function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function y(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function m(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = O(e);
            if (t) {
                var o = O(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return g(this, n)
        }
    }

    function g(e, t) {
        return !t || "object" !== p(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var w = y(d.default.outlet, {}),
        j = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }(i, e);
            var t, n, r, o = h(i);

            function i() {
                return m(this, i), o.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "componentDidMount",
                value: function () {
                    var e = this.props,
                        t = e.fetchJumbotronData,
                        n = e.widget;
                    t(n.onReady, n.name)
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.isLoading,
                        n = e.widget,
                        r = e.data,
                        o = void 0 === r ? {} : r,
                        i = n ? n.ready && !t : !t;
                    return i && !Object(f.dataValidation)(o) ? w : y("div", {
                        className: "jumbotron-widget-outlet"
                    }, void 0, i ? y(s.default, {
                        data: o
                    }) : null)
                }
            }]) && v(t.prototype, n), r && v(t, r), i
        }(o.Component),
        S = {
            fetchJumbotronData: c.fetchJumbotronData
        };
    t.default = Object(i.c)((function (e) {
        return {
            isLoading: a.l.isCallPending(e, u.FETCH_JUMBOTRON_DATA),
            data: Object(l.getJumbotron)(e)
        }
    }), S)(j)
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "fetchJumbotronData", (function () {
        return u
    })), n.d(t, "setJumbotronVisible", (function () {
        return l
    }));
    var r = n(12),
        o = n(2),
        i = n(161),
        a = n(234),
        c = n(143),
        u = function (e, t) {
            return Object(r.f)({
                endpoint: i.getActionsRequiredUrl + o.i.getLocale(),
                method: "GET",
                nextType: c.FETCH_JUMBOTRON_DATA,
                onSuccessAction: function (n) {
                    var r = n.body;
                    if (e(t), r && r.actions[0] && Object(a.dataValidation)(r.actions[0])) return l()
                },
                onFailureAction: function () {}
            })
        },
        l = function () {
            return {
                type: c.JUMBOTRON_VISIBLE
            }
        }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(2)),
        c = n(107),
        u = n(33),
        l = n(4),
        s = n.n(l),
        f = n(8),
        d = n(41),
        p = n(161),
        y = n(210);

    function m(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function v() {
        return (v = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.data;
        Object(o.useEffect)((function () {
            d.a.pushEvent(p.systemName, "CE CTA Jumbotron Impression", {
                flowData: {
                    MA: {
                        jumbotron: {
                            impressions: [{
                                id: t.id,
                                systemName: p.systemName,
                                cta: t.resources.button.key,
                                category: t.category,
                                title: t.resources.title.key,
                                description: t.resources.description.key
                            }]
                        }
                    }
                }
            })
        }), []);
        var n = function () {
                d.a.pushEvent(p.systemName, "CE CTA Jumbotron Clicked", {
                    flowData: {
                        MA: {
                            jumbotron: {
                                id: t.id,
                                systemName: p.systemName,
                                cta: t.resources.button.key,
                                category: t.category,
                                title: t.resources.title.key,
                                description: t.resources.description.key
                            }
                        }
                    }
                })
            },
            r = Object(y.b)(t.resources && t.resources.background && t.resources.background.value),
            l = Object(y.b)(t.resources && t.resources.icon && t.resources.icon.value),
            b = t.resources && t.resources.title && t.resources.title.value,
            h = t.resources && t.resources.description && t.resources.description.value,
            g = t.resources && t.resources.button && t.resources.button.value,
            O = t.link,
            w = u.a.isMobile,
            j = w ? "none" : "url(".concat(r, ")");
        return t && t.resources && t.resources.htmlData ? i.a.createElement("div", v({
            className: "jumbotron-html"
        }, Object(a.h)(t.resources.htmlData))) : m("div", {
            className: s()("jumbotron-main", {
                "jumbotron-main--legacy": f.b
            }),
            style: {
                backgroundImage: "".concat(j)
            },
            "data-testid": "jumbotron-main"
        }, void 0, m("img", {
            src: l,
            className: "jumbotron-icon",
            "data-testid": "jumbotron-icon"
        }), i.a.createElement("div", v({
            className: "jumbotron-title"
        }, Object(a.h)(b), {
            "data-testid": "jumbotron-title"
        })), i.a.createElement("div", v({
            className: "jumbotron-description"
        }, Object(a.h)(h), {
            "data-testid": "jumbotron-description"
        })), m(c.a, {
            text: g,
            link: O,
            theme: "action",
            testid: "jumbotron-cta",
            gtmEvent: n
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Skeleton", (function () {
        return c
    }));
    var r, o, i = n(7);

    function a(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    t.default = i.f.div(r || (r = a(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 7px 10px;\n    width: 100%;\n\n    height: 150px;\n\n    @media (min-width: ", ") {\n        flex-direction: column;\n        height: 413px;\n    }\n"])), (function (e) {
        return e.theme["screen-md-min"]
    }));
    var c = i.f.div(o || (o = a(["\n    width: 100%;\n    background-color: ", ";\n    box-shadow: ", ";\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    padding: 10px;\n\n    .line {\n        flex: 1;\n    }\n"])), (function (e) {
        return e.theme["white-color"]
    }), (function (e) {
        return e.theme["ma-box-shadow"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);
    t.default = a.f.div(r || (o = ["\nwidth:100%;\nmargin-bottom: 30px;\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(143);

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function (t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {
        actions: [],
        visible: !1
    };
    t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            o = t.payload;
        switch (n) {
            case r.FETCH_JUMBOTRON_DATA.SUCCESS:
                return i(i({}, e), o);
            case r.JUMBOTRON_VISIBLE:
                return i(i({}, e), {}, {
                    visible: !0
                })
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n(5),
        a = n(1),
        c = n.n(a),
        u = n(12),
        l = n(65),
        s = n(341),
        f = n(445),
        d = n(198),
        p = n(452),
        y = n(209);
    n(613);

    function m(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var v = m(p.default, {}),
        b = m(s.default, {}),
        h = m(f.default, {});
    s.default.propTypes = {
        onReady: c.a.func,
        name: c.a.string
    }, t.default = function (e) {
        var t = Object(i.e)(),
            n = Object(i.f)(l.paymentsSelector),
            r = Object(i.f)((function (e) {
                return u.l.isCallPending(e, d.FETCH_PENDING_PAYMENT_REQUEST_DATA)
            })),
            a = Object(i.f)((function (e) {
                return Object(l.isJumbotronVisible)(e)
            })),
            c = e.widget,
            s = c.onReady,
            f = c.name,
            p = c.ready;
        return Object(o.useEffect)((function () {
            t(Object(d.fetchPendingPaymentRequestData)({
                onReady: s,
                name: f
            }))
        }), []), !p || r ? v : 0 === n.length ? null : m(y.default, {
            paymentsLength: n.length,
            isJumbotronVisible: a
        }, void 0, b, h)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);
    t.default = a.f.div(r || (o = ["\n    padding: 0 7px;\n    margin-bottom: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .title {\n        font-size: 20px;\n        font-weight: bold;\n\n        @media (max-width: ", ") {\n            color: #fff;\n        }\n    }\n\n    > a {\n        @media (max-width: ", ") {\n            display: none;\n        }\n    }\n"], i || (i = o.slice(0)), r = Object.freeze(Object.defineProperties(o, {
        raw: {
            value: Object.freeze(i)
        }
    }))), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = n(5),
        a = n(37),
        c = n(65),
        u = n(446),
        l = n(451),
        s = n(209);

    function f(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var d = f(s.StyledSeperator, {});
    t.default = function () {
        var e = Object(i.f)((function (e) {
                return Object(c.resourcesSelector)(e, "ViewAllPendingPaymentRequests.Text")
            })),
            t = Object(i.f)(c.paymentsSelector);
        return f(l.default, {}, void 0, t.map((function (n, r) {
            return f(o.Fragment, {}, n.Id, f(u.default, {
                data: n
            }), r < t.length - 1 && d, 3 === t.length && r === t.length - 1 && f(s.StyledMobileViewAll, {}, void 0, f(a.a, {
                href: e.Url,
                "data-testid": "prqViewAllLink"
            }, void 0, e.Value)))
        })))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n(0),
        i = (n(1), n(447)),
        a = n(449);

    function c(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    t.default = function (e) {
        var t = e.data;
        return c(o.Fragment, {}, void 0, c(i.default, {
            data: t
        }), c(a.default, {
            data: t
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return b
    }));
    n(0);
    var r, o = n(37),
        i = n(2),
        a = n(5),
        c = n(221),
        u = n.n(c),
        l = n(33),
        s = n(23),
        f = n(208),
        d = n(65),
        p = n(448);

    function y(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var m = y("span", {
            className: "sep"
        }),
        v = y("i", {
            className: "icon-alert__new"
        });

    function b(e) {
        var t = e.data,
            n = Object(a.e)(),
            r = Object(a.f)((function (e) {
                return Object(d.paymentsSelector)(e)
            })),
            c = Object(a.f)((function (e) {
                return Object(d.resourcesSelector)(e, "PastDuePendingPaymentRequest.Text")
            })),
            b = Object(a.f)((function (e) {
                return Object(d.resourcesSelector)(e, "DueDatePendingPaymentRequest.Text")
            })),
            h = t.DisplayName,
            g = t.Amount,
            O = t.Currency,
            w = t.DueDate,
            j = t.Actions[0],
            S = u.a.formatMoney(g, {
                symbol: O,
                format: "%v %s"
            });
        return y(p.default, {
            paymentsLength: r.length,
            "data-testid": t.Id,
            onClick: function () {
                l.a.isMobile && n(Object(s.c)(j.Url))
            }
        }, void 0, y("div", {
            className: "displayName",
            "data-testid": "prqDisplayName"
        }, void 0, h), y("div", {
            className: "balance",
            "data-testid": "prqBalance"
        }, void 0, S), y("div", {
            className: "dueDate",
            "data-testid": "prqDueDate"
        }, void 0, y("span", {
            "data-testid": "prqDate"
        }, void 0, "".concat(b.Value, " ").concat(i.i.formatDate(w))), Object(f.pastDue)(w) && y("span", {
            className: "pastDue"
        }, void 0, m, v, y("span", {
            className: "pastText",
            "data-testid": "prqPastDue"
        }, void 0, c.Value))), y("footer", {}, void 0, y(o.a, {
            href: j.Url,
            "data-testid": "prqAction"
        }, void 0, j.Value)))
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, c, u = n(7);

    function l(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var s = n(2).i.isRtl();
    t.default = u.f.div(r || (r = l(["\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.25;\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n    box-shadow: ", ";\n    ", "\n\n    @media (min-width: ", ") {\n        width: 300px;\n        min-width: 300px;\n        min-height: 179px;\n\n    }\n\n    @media (min-width: ", ") {\n        width: calc((100% - 20px - 20px) / 3);\n        min-width: auto;\n    }\n\n    .displayName {\n        margin: 16px 11px 0 11px;\n        font-size: 16px;\n        color: ", ";\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n    }\n\n    .balance {\n        font-size: 35px;\n        margin: 7px 11px 0 11px;\n        font-weight: 300;\n        line-height: 35px;\n    }\n\n    .dueDate {\n        color: ", ";\n        font-size: 14px;\n        margin: 20px 11px 0 11px;\n\n        @media (max-width: ", ") {\n            margin-bottom: 16px;\n        }\n    }\n\n    .pastDue {\n        > i {\n            color: ", ";\n            font-size: 18px;\n        }\n\n        .pastText {\n            margin: 0 3px;\n            color: ", ";\n        }\n\n        .sep {\n            margin: 0 8px;\n            min-width: 1px;\n            height: 100%;\n            border-left: solid 1px ", ";\n        }\n    }\n\n\n    footer {\n        margin-top: auto;\n        border-top: solid 2px ", ";\n        height: 50px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 0 11px;\n\n        @media (max-width: ", ") {\n            display: none;\n        }\n    }\n\n    /* Hide on mobile - ther's a special mobile component (PaymentRequestMobileCard) */\n    @media (max-width: ", ") {\n        ", ";\n    }\n"])), (function (e) {
        return e.theme["ma-box-shadow"]
    }), (function (e) {
        return s ? Object(u.e)(o || (o = l(["\n                  border-right: solid 5px ", ";\n              "])), e.theme["brand-color-orange-500"]) : Object(u.e)(i || (i = l(["\n                  border-left: solid 5px ", ";\n              "])), e.theme["brand-color-orange-500"])
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["screen-lg-min"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-600"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["brand-color-red-700"]
    }), (function (e) {
        return e.theme["brand-color-red-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-600"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-100"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return 1 === e.paymentsLength ? Object(u.e)(a || (a = l(["\n                      border-left: none;\n                  "]))) : Object(u.e)(c || (c = l(["\n                      display: none;\n                  "])))
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return y
    }));
    n(0);
    var r, o = n(37),
        i = n(2),
        a = n(5),
        c = n(221),
        u = n.n(c),
        l = n(65),
        s = n(208),
        f = n(450);

    function d(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var p = d("i", {
        className: "icon-alert__new"
    });

    function y(e) {
        var t = e.data,
            n = Object(a.f)((function (e) {
                return Object(l.paymentsSelector)(e)
            })),
            r = Object(a.f)((function (e) {
                return Object(l.resourcesSelector)(e, "PastDuePendingPaymentRequest.Text")
            })),
            c = Object(a.f)((function (e) {
                return Object(l.resourcesSelector)(e, "DueDatePendingPaymentRequest.Text")
            })),
            y = t.DisplayName,
            m = t.Amount,
            v = t.Currency,
            b = t.DueDate,
            h = t.Actions[0],
            g = u.a.formatMoney(m, {
                symbol: v,
                format: "%v %s"
            });
        switch (n.length) {
            case 0:
            case 1:
                return null;
            default:
                return d(o.a, {
                    href: h.Url,
                    "data-testid": t.Id
                }, void 0, d(f.default, {
                    pastDue: Object(s.pastDue)(b)
                }, void 0, d("div", {
                    className: "paymentDetails"
                }, void 0, d("div", {
                    className: "displayName",
                    "data-testid": "prqDisplayName"
                }, void 0, y), d("div", {
                    className: "dueDate",
                    "data-testid": "prqDueDate"
                }, void 0, d("div", {
                    "data-testid": "prqDate"
                }, void 0, "".concat(c.Value, " ").concat(i.i.formatDate(b))), Object(s.pastDue)(b) && d("div", {
                    className: "pastDue"
                }, void 0, p, d("span", {
                    className: "pastText",
                    "data-testid": "prqPastDue"
                }, void 0, r.Value)))), d("div", {
                    className: "balanceDetails"
                }, void 0, d("div", {
                    className: "balance",
                    "data-testid": "prqBalance"
                }, void 0, g))))
        }
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);

    function c(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var u = n(2).i.isRtl();
    t.default = a.f.div(r || (r = c(["\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.25;\n    background-color: #fff;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    @media (min-width: ", ") {\n        width: 300px;\n        min-width: 300px;\n        min-height: 179px;\n    }\n\n    @media (min-width: ", ") {\n        width: calc((100% - 20px - 20px) / 3);\n        min-width: auto;\n    }\n\n    .paymentDetails {\n        flex: 1 0 0;\n        ", "\n        overflow: hidden;\n\n        .displayName {\n            font-size: 16px;\n            color: ", ";\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        .dueDate {\n            color: ", ";\n            font-size: 14px;\n            ", "\n        }\n\n        .pastDue {\n            > i {\n                color: ", ";\n                font-size: 18px;\n            }\n\n            .pastText {\n                margin: 0 3px;\n                color: ", ";\n            }\n        }\n    }\n\n    .balanceDetails {\n        display: flex;\n        justify-content: flex-end;\n        flex: 1 0 0;\n        margin: 0 16px;\n        color: ", ";\n\n        .balance {\n            font-size: 20px;\n            line-height: 35px;\n            text-align: ", ";\n        }\n    }\n\n    /* Hide on desktop - ther's a special desktop component (PaymentRequestDesktopCard) */\n    @media (min-width: ", ") {\n        display: none;\n    }\n"])), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return e.theme["screen-lg-min"]
    }), (function (e) {
        return e.pastDue ? Object(a.e)(o || (o = c(["\n                      margin: 11px 16px;\n                  "]))) : Object(a.e)(i || (i = c(["\n                      margin: 19px 16px;\n                  "])))
    }), (function (e) {
        return e.theme["brand-color-cold-gray-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-600"]
    }), (function (e) {
        return e.pastDue ? "margin-top: 3px" : "margin-top: 9px"
    }), (function (e) {
        return e.theme["brand-color-red-700"]
    }), (function (e) {
        return e.theme["brand-color-red-700"]
    }), (function (e) {
        return e.theme["brand-color-cold-gray-700"]
    }), u ? "left" : "right", (function (e) {
        return e.theme["screen-sm-min"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(7);

    function c(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var u = n(2).i.isRtl();
    t.default = a.f.div(r || (r = c(["\n    display: flex;\n    flex-direction: row;\n    overflow: auto;\n    padding: 5px 7px;\n\n    @media (max-width: ", ") {\n        padding: 0px;\n        flex-direction: column;\n        ", "\n        box-shadow: ", ";\n    }\n"])), (function (e) {
        return e.theme["screen-sm-min"]
    }), (function (e) {
        return u ? Object(a.e)(o || (o = c(["\n                      border-right: solid 5px\n                          ", ";\n                  "])), e.theme["brand-color-orange-500"]) : Object(a.e)(i || (i = c(["\n                      border-left: solid 5px\n                          ", ";\n                  "])), e.theme["brand-color-orange-500"])
    }), (function (e) {
        return e.theme["ma-box-shadow"]
    }))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return c
    }));
    n(0);
    var r, o = n(274);

    function i(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var a = i(n(261).default, {}, void 0, i(o.default, {}), i(o.default, {}), i(o.default, {}));

    function c() {
        return a
    }
}, function (e, t, n) {
    "use strict";
    n(0), n(1);
    var r, o = n(5),
        i = n(23),
        a = n(8),
        c = n(4),
        u = n.n(c),
        l = n(2),
        s = n(107);
    n(985);

    function f(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var d = f("div", {
            className: "myaccount-long-card__seperator"
        }),
        p = function (e) {
            var t = e.icon,
                n = e.title,
                r = e.description,
                o = e.path,
                i = e.button,
                c = e.push,
                p = e.className,
                y = e.isActive,
                m = e.testid,
                v = e.gtmEvent,
                b = function () {
                    i.handleClick ? i.handleClick() : i.href ? c(i.href) : c(o)
                };
            return f("div", {
                className: u()("myaccount-long-card", p, {
                    "myaccount-long-card--rtl": l.i.isRtl(),
                    "myaccount-long-card--legacy": a.b
                }),
                "data-testid": m,
                onClick: b
            }, void 0, y && d, f("div", {
                className: "myaccount-long-card__wrapper"
            }, void 0, f("div", {
                className: "myaccount-long-card__icon"
            }, void 0, "string" == typeof t ? f("i", {
                className: t
            }) : t), f("div", {
                className: "myaccount-long-card__text"
            }, void 0, f("div", {
                className: "title"
            }, void 0, n), f("div", {
                className: "description"
            }, void 0, r)), f("div", {
                className: "myaccount-long-card__action"
            }, void 0, i && f(s.a, {
                onClick: b,
                className: "default-action",
                disabled: i.disabled,
                theme: "action",
                text: i.text,
                eligibleKey: i.eligibleKey,
                gtmEvent: v
            }))))
        };
    p.defaultProps = {
        isActive: !0
    }, t.a = Object(o.c)(null, {
        push: i.c
    })(p)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return k
    }));
    var r, o = n(0),
        i = (n(1), n(60)),
        a = n(18),
        c = n.n(a),
        u = n(363),
        l = n(4),
        s = n.n(l),
        f = n(194),
        d = n(2),
        p = n(289);

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = w(e);
            if (t) {
                var o = w(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return g(this, n)
        }
    }

    function g(e, t) {
        return !t || "object" !== y(t) && "function" != typeof t ? O(e) : t
    }

    function O(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function w(e) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var x = d.i.translateFrom(f.q),
        N = function (e) {
            return e.map((function (e, t) {
                var n = e.Value,
                    r = e.ResKey,
                    o = e.ResParams;
                return S("div", {
                    className: "detail-view__item detail-view__item--text"
                }, t, n || x(r, o || {}))
            }))
        },
        T = function (e) {
            return e.map((function (e, t) {
                var n = e.Value;
                return S("div", {
                    className: "detail-view__item detail-view__item--date"
                }, t, d.i.formatDate(n))
            }))
        },
        A = function (e, t, n) {
            var r = S(i.b, {
                theme: "action"
            }, void 0, t);
            return e.map((function (e, t) {
                var o = e.Value,
                    i = e.IsExternal,
                    a = e.ResKey,
                    c = e.ResParams;
                return S("a", {
                    href: o || x(a, c || {}) || "",
                    target: i ? "_blank" : void 0,
                    onClick: function () {
                        p.a && p.a.actionItem(n)
                    },
                    className: "detail-view__item detail-view__item--link"
                }, t, r)
            }))
        },
        _ = function (e) {
            return e.map((function (e, t) {
                var n = e.Value;
                return S("div", {
                    className: "detail-view__item detail-view__item--date"
                }, t, c()(n).format("L HH:mm"))
            }))
        },
        k = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }(i, e);
            var t, n, r, o = h(i);

            function i() {
                var e;
                m(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return j(O(e = o.call.apply(o, [this].concat(n))), "renderMethod", null), e
            }
            return t = i, (n = [{
                key: "UNSAFE_componentWillMount",
                value: function () {
                    switch (this.props.type) {
                        case 1:
                            this.renderMethod = N;
                            break;
                        case 2:
                            this.renderMethod = T;
                            break;
                        case 3:
                            this.renderMethod = A;
                            break;
                        case 5:
                            this.renderMethod = _
                    }
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.title,
                        n = e.values,
                        r = e.titleResKey,
                        o = this.renderMethod,
                        i = t ? "detail-view detail-view-" + t.toLowerCase() : "detail-view";
                    return S("div", {
                        className: s()(i, {
                            "detail-view-remark": !this.props.title & 1 === this.props.type
                        })
                    }, void 0, S(u.a, {
                        title: 3 === this.props.type ? "" : t,
                        text: o ? 3 === this.props.type ? o(n, t, r) : o(n) : ""
                    }))
                }
            }]) && v(t.prototype, n), r && v(t, r), i
        }(o.Component)
}, function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTkuNSAxNDMuNyI+PHBhdGggZmlsbD0iI0M4QzBDMCIgZD0iTTEyLjUgMjcyLjZjLjEuNSAwIC44LS41Ljl2LTFjLjIuMS4zLjEuNS4xeiIvPjxwYXRoIGZpbGw9IiNGRjQ4MDAiIGQ9Ik05OC4xIDE0MS41Yy0zLjItMS0zLjgtMy42LTMuNy02LjIuMS0yLjYuOS01LjEgMS43LTcuNiAyLjgtOC44IDYuNi0xNy4yIDExLjEtMjUuMyA2LjYtMTIgMTQuNS0yMy4xIDIzLjItMzMuNyA5LjgtMTEuOSAyMC41LTIzLjEgMzIuMS0zMy4zIDEwLjctOS40IDIyLjItMTcuNiAzNS0yNCA1LjItMi42IDEwLjctNC44IDE2LjQtNi4xIDEuOS0uNCAzLjktLjggNS45LTEgLjMtLjEuNSAwIC43IDBoLjRjLjIgMCAuNS4xLjctLjFoMy4xYy4zLjIuNi4xLjkuMWguNWMuMyAwIC41IDAgLjguMSA2LjIuNyAxMS40IDMuNCAxNS43IDcuOC43LjcgMS4zIDEuNSAxLjcgMi41LjQgMS4zLjEgMi4yLTEgMy0uOS42LTEuOC44LTIuOCAxLTIgLjMtNC4xLjYtNi4xIDEtOC4zIDEuNi0xNi40IDMuOS0yNC4zIDYuOC0xMi4zIDQuNS0yNCAxMC41LTM0LjcgMTguNC01LjcgNC4yLTEwLjkgOS0xNi4xIDEzLjhDMTQ1LjEgNzIuMyAxMzIgODcgMTIwLjUgMTAzYy03LjEgMTAtMTMuNiAyMC40LTE4LjcgMzEuNS0xIDIuMy0yLjEgNC41LTIuOSA2LjktLjEuMy0uNS4yLS44LjF6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTI1MS42IDcxLjVjLS44LTYtNS0xMC4xLTExLjEtMTAuNC00LjYtLjItOC44IDEtMTIuNiAzLjYtMi4yIDEuNi00LjEgMy41LTUuNyA1LjgtLjMtLjMgMC0uNy0uMS0xdi0uMWMuMy0yLjQuNi00LjguOC03LjEtLjItLjItLjMtLjItLjQtLjJoLTkuNGMtLjUgMC0uNy4yLS43LjdsLS45IDYuM2MtLjcgNC40LTEuNiA4LjctMi40IDEzbC00LjYgMjQuNGMtLjMgMS40LS41IDIuOC0uNyA0LjIuMSAwIC4yLjEuMy4xaDEwLjhjLjUgMCAuNS0uMy42LS43bDEuMi02LjNjMS01LjYgMi4xLTExLjEgMy4xLTE2LjcuOC00IDIuNC03LjggNC45LTExLjEgMS40LTEuOCAzLTMuNCA1LjEtNC41IDEuNC0uNyAyLjgtMS4yIDQuNC0xLjEgMy4xLjEgNC45IDEuNiA1LjUgNC42LjEuNi4xIDEuMy4yIDEuOS4xIDItLjIgNC0uNSA1LjktMS41IDguMi0zLjEgMTYuNS00LjcgMjQuNy0uMiAxLS41IDItLjUgMy4xaDExLjFjLjQgMCAuNi0uMi43LS42IDAtLjUuMi0xIC4zLTEuNSAxLjgtOS40IDMuNi0xOC45IDUuMy0yOC4zLjMtMi44LjUtNS44IDAtOC43em0xMjkuMS0xMC40Yy0xLjcgMC0zLjQtLjEtNS4xLjMtMy4xLjctNS42IDIuNC03LjggNC43LTEuNyAxLjctMyAzLjgtNC4yIDUuOS0uMy0uMS0uMS0uNC0uMy0uNnYtLjFjMC0uMyAwLS43LjEtMS4xLjMtMi40LjUtNC43LjctNy4xLjEtLjkuMS0uOS0uOC0uOWgtNy44Yy0xLjQgMC0xLjQgMC0xLjYgMS41LS43IDYuNS0xLjUgMTMtMi44IDE5LjUtMS40IDcuMy0yLjggMTQuNS00LjIgMjEuNy0uMyAyLS43IDMuOS0xLjEgNS45LjEgMCAuMy4xLjMuMWgxMC42Yy42IDAgLjctLjMuOC0uNy45LTQuOSAxLjgtOS44IDIuOC0xNC42LjYtMi45IDEtNS45IDEuOS04LjcgMS4xLTMuNSAyLjUtNi44IDQuOS05LjYgMi45LTMuNCA2LjUtNSAxMS00LjYuNiAwIC43LS4yLjgtLjcuNy0zLjQgMS40LTYuNyAyLjEtMTAuMS4yLS42LjEtLjctLjMtLjh6Ii8+PHBhdGggZmlsbD0iI0ZGNDgwMCIgZD0iTTEyMyA1MC4xYzAgNS44LTEuMSAxMS45LTMuMSAxNy45LS4zIDEtLjkgMi4xLTEuNiAyLjktMS4xIDEuNC0yLjMgMS40LTMuNCAwLS44LTEtMS40LTItMS43LTMuMi0xLjUtNi43LTMtMTMuNC00LjQtMjAuMi0xLjMtNi4zLTIuNS0xMi41LTMuNi0xOC44LS43LTQuNC0xLjUtOC43LTEuOC0xMy4yIDAtLjQtLjItLjktLjItMS40IDAtMS40LjctMiAyLTEuNiAxLjMuMyAyLjUuOSAzLjUgMS45IDMuNiAzLjYgNi41IDcuNyA4LjggMTIuMiAzLjcgNy4zIDUuNSAxNC45IDUuNSAyMy41eiIvPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik01NS4xIDU3LjhjLS44LTUuNi00LjEtOS42LTkuMi0xMi4xLTMuNy0xLjgtNy43LTIuNS0xMS45LTIuNy0zLjItLjItNi4zIDAtOS41LjItMi43LjItNS40LjUtOC4xIDEuMS0uNS4xLS44LjMtLjkuOGwtMy4xIDE2LjdDMTEgNjkgOS42IDc2LjEgOC4zIDgzLjNsLTQgMjEuN2MtLjMgMS43LS41IDMuNC0xIDUtLjIuMS0uMS4zLS4zLjN2LjRoMTAuN2MuOCAwIC45IDAgMS0uOC45LTQuOSAxLjgtOS43IDIuOC0xNC41LjYtMy4xIDEuMy02LjMgMS44LTkuNC4xLS42LjMtLjcuOC0uNi43LjEgMS41LjIgMi4zLjMgNS42LjUgMTEuMS0uMSAxNi40LTEuOSA1LjEtMS43IDkuNC00LjYgMTIuNS05LjEgMy41LTUuMiA0LjgtMTAuOCAzLjgtMTYuOXptLTExLjkgNy45Yy0xLjQgNC45LTQuOCA3LjktOS40IDkuNi0yLjEuOC00LjQgMS03IDEtMS40IDAtMy4xLS4yLTQuOC0uNS0uNC0uMS0uNi0uMi0uNS0uNyAxLjQtNy4yIDIuOC0xNC40IDQuMS0yMS42LjEtLjUuMy0uNy43LS44IDMuNi0uNSA3LjMtLjggMTAuOC4yIDIuNy43IDQuOCAyLjIgNS45IDQuOC45IDIuNi45IDUuNC4yIDh6bTE1Ny42IDkuN2MtMS43LTYuNC01LjUtMTEtMTEuOS0xMy4yLTMuNC0xLjItNi44LTEuNC0xMC40LTEtNi40LjctMTEuOSAzLjQtMTYuNCA4LjEtNS45IDYuMi04LjUgMTMuOC04LjcgMjIuMyAwIDEuNy4xIDMuNS41IDUuMiAxLjYgNyA1LjYgMTEuOSAxMi42IDE0LjEgMy43IDEuMiA3LjQgMS4zIDExLjIuNyA3LjMtMS4yIDEzLTQuOSAxNy40LTEwLjcgMy40LTQuNSA1LjItOS42IDYtMTUuMS41LTMuNS42LTctLjMtMTAuNHptLTExLjMgNy4yYy0uMyA0LjgtMS43IDkuNC00LjIgMTMuNS0xIDEuNy0yLjMgMy4yLTMuOCA0LjQtMiAxLjYtNC4yIDIuNS02LjkgMi40LTMuNS0uMi01LjktMS43LTcuNi00LjgtMS4xLTIuMS0xLjUtNC40LTEuNC03LjMuMS00LjIgMS4zLTguOCAzLjYtMTMgMS4zLTIuMyAyLjktNC4zIDUuMi01LjlzNC45LTIuMiA3LjctMS43IDQuNyAyLjEgNiA0LjUgMS42IDUuMSAxLjQgNy45em0xMjQuOCA4LjNjMy41IDAgNi45IDAgMTAuMy0uNCAzLjQtLjMgNi44LTEgMTAtMi4xIDEuNS0uNSAzLTEuMiA0LjMtMi4xIDQuNy0zIDYuNy03LjMgNi4zLTEyLjctLjQtNS41LTMuNC05LjMtOC41LTExLjMtMS43LS43LTMuNi0xLjEtNS41LTEuMi02LjQtLjMtMTIuMiAxLjQtMTcuMyA1LjUtNS41IDQuNC04LjkgMTAuMS0xMC44IDE2LjgtMS40IDUuMS0xLjYgMTAuNC0uMiAxNS41IDEuNSA1LjYgNSA5LjUgMTAuNSAxMS42IDIuMi44IDQuNSAxLjIgNi44IDEuNCAzLjUuMSA3LS4xIDEwLjQtLjkgMi43LS42IDUuNC0xLjQgNy45LTIuNi4zLS4yLjctLjMuNi0uOS0uMy0yLjYtLjctNS4yLTEtNy44LS40IDAtLjYuMS0uOS4yLTEuOC45LTMuNyAxLjYtNS42IDItMy40LjgtNi43IDEuMi0xMC4xLjUtMy44LS43LTYuNS0yLjgtNy43LTYuNi0uNC0xLjMtLjYtMi43LS42LTQgLjEtLjkuMS0uOSAxLjEtLjl6bTYuMi0xOC40YzEuNi0xLjMgMy4zLTIuMSA1LjMtMi41IDEuNi0uMyAzLjEtLjMgNC43LjEgMS44LjUgMy4yIDEuNiAzLjYgMy41LjQgMi0uMSAzLjgtMS42IDUuMS0xLjEgMS0yLjUgMS42LTQgMi4xLTIuNi44LTUuMyAxLTggMS4yLTEuNy4xLTMuNS4xLTUuMi4xLS4yIDAtLjQgMC0uNy0uMiAxLTMuNyAyLjktNi45IDUuOS05LjR6bS01MS4zIDE4LjRjNC41IDAgOC45LS4xIDEzLjMtLjggMy4yLS41IDYuNC0xLjMgOS4zLTIuOCA1LjEtMi41IDguMS02LjQgOC4xLTEyLjMgMC00LjMtMS40LTgtNC45LTEwLjctMi43LTIuMS01LjktMy05LjItMy4yLTYuMy0uNC0xMS45IDEuMy0xNi45IDUuMS01LjQgNC4xLTguOSA5LjYtMTAuOCAxNi4xLTEuNiA1LjMtMiAxMC44LS42IDE2LjIgMS4zIDUgNC4xIDguOCA4LjcgMTEuMiAyLjcgMS40IDUuNSAyIDguNSAyLjEgMy4yLjIgNi4zIDAgOS41LS43IDMuMS0uNiA2LTEuNCA4LjktMi44LjgtLjQuOC0uNC43LTEuMy0uMS0xLjEtLjMtMi4zLS40LTMuNC0uMi0xLjQtLjQtMi43LS42LTQuMi0uMi4xLS4zLjEtLjUuMi0zLjEgMS41LTYuMyAyLjQtOS43IDIuOC0yLjQuMi00LjkuMy03LjMtLjMtMy4yLS45LTUuNi0yLjktNi42LTYuMS0uNC0xLjMtLjYtMi43LS43LTQgMC0xLjQuMS0xLjEgMS4yLTEuMXptLjctMTAuN2MxLTIuNyAyLjQtNS4xIDQuNS03IDIuOC0yLjYgNS45LTMuOCA5LjgtMy40LjUgMCAxIC4yIDEuNS4zIDQuMiAxLjQgNCA2LjEgMiA4LjItMSAxLTIuMyAxLjctMy43IDIuMi0xLjguNi0zLjYgMS01LjUgMS4yLTMgLjMtNS45LjQtOSAuMyAwLS42LjItMS4yLjQtMS44eiIvPjxwYXRoIGZpbGw9IiMzNDM0MzQiIGQ9Ik0zODkuNyA2MS4zYy0zLjIuOC01IDQuMi00IDcuMy44IDIuNSAzLjMgNC4yIDUuOSA0czQuOS0yLjIgNS4yLTQuOHYtMi4xYy0uNy0zLjMtMy45LTUuMy03LjEtNC40em0xLjUgMTAuNGMtMi42IDAtNC45LTIuMi00LjktNC45IDAtMi42IDIuMS00LjggNC44LTQuOSAyLjcgMCA0LjkgMi4xIDQuOSA0LjggMCAyLjgtMi4xIDUtNC44IDV6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTk4LjUgNjIuOWMtMi4xLS42LTQuMy0xLTYuNi0xLjQtNC44LS43LTkuNS0uOC0xNC4zIDAtMTAuMyAxLjktMTggNy40LTIzLjEgMTYuNi0yLjggNS00LjEgMTAuNS00LjMgMTYuMi0uMSAzIC4zIDUuOSAxLjQgOC43IDIuMSA1IDUuOCA4IDExLjIgOC43IDQuNS41IDguNy0uNyAxMi4zLTMuNCAyLjUtMS45IDQuNS00LjMgNi4xLTdsLjgtMS4zaC4ybC0uMyAzYy0uMyAyLjMtLjQgNC42LS41IDcgMCAuNi4yLjcuNy43aDkuNGMuNiAwIC43LS4yLjctLjctLjEtMy4xLjEtNi4yLjMtOS4yLjQtNC40IDEtOC43IDEuOC0xMy4xIDEuNi03LjkgMy4xLTE1LjggNC44LTIzLjguMy0uNy40LS43LS42LTF6bS0xMi4zIDguNGMtLjMgMS43LS43IDMuNS0xIDUuMi0uNyAzLjQtMS4yIDYuOC0yLjEgMTAuMS0xIDMuNS0yLjMgNi45LTQuNSA5LjktMS4zIDEuOC0yLjggMy40LTQuNiA0LjUtMS42IDEtMy4zIDEuNS01LjIgMS40LTIuNC0uMi00LjItMS40LTUuMi0zLjYtLjYtMS4zLTEtMi43LTEtNC4yLS4zLTguNiAyLjgtMTUuOCA5LjYtMjEuMyAzLTIuNCA2LjMtMy40IDEwLTMuMyAxLjEgMCAyLjMuMSAzLjUuMy42LjIuNi4zLjUgMXoiLz48cGF0aCBmaWxsPSIjMzczNzM3IiBkPSJNMzkyLjMgNjdsLjEtLjJjLjctLjUuOS0xLjIuNy0yLS4zLS44LS45LTEuMS0xLjctMS4xaC0xLjZjLS40IDAtLjYuMi0uNi42djUuNWMwIC4zLjIuNC41LjRzLjQtLjEuNC0uNHYtMS41YzAtLjkuMi0xIDEuMS0uOS41LjEuNy41LjkuOWwuMyAxLjJjLjEuNS40LjcgMSAuNS0uMy0xLS4zLTIuMi0xLjEtM3ptLS44LS41aC0uNWMtLjggMC0uOSAwLS45LS44di0uM2MwLTEuMS40LTEuNCAxLjQtMSAuNS4yLjguNi44IDEgLjEuNS0uMy45LS44IDEuMXoiLz48L3N2Zz4="
}, , , , , , , , , , , , , , , , , , function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIj48dGl0bGU+bW9iaWxlX3JvdGF0ZV9pY29uPC90aXRsZT48Y2lyY2xlIGN4PSI2Mi4wOCIgY3k9IjU5Ljc1IiByPSI1NC40MiIgc3R5bGU9ImZpbGw6I2YyZjNmNyIvPjxwYXRoIGQ9Ik0xNy43OSwxNDQuNTVIMTIuNzJBMTAuMTIsMTAuMTIsMCwwLDEsMi42LDEzNC40M1Y4My44QTEwLjEyLDEwLjEyLDAsMCwxLDEyLjcyLDczLjY4aDUuMDdaIiBzdHlsZT0iZmlsbDojZGNkZmU1Ii8+PHBhdGggZD0iTTE5LjY4LDE0Ni40NWgtN2ExMiwxMiwwLDAsMS0xMi0xMlY4My44YTEyLDEyLDAsMCwxLDEyLTEyaDdabS03LTcwLjg4QTguMjQsOC4yNCwwLDAsMCw0LjUsODMuOHY1MC42M2E4LjIzLDguMjMsMCwwLDAsOC4yMiw4LjIyaDMuMTdWNzUuNTdaIiBzdHlsZT0iZmlsbDojYjZjMmQzIi8+PHBhdGggZD0iTTEwNi4zOCw3My42OEgxMTYuNWM0Ljg0LDAsMTAuMTMsNS4yOSwxMC4xMywxMC4xMnY1MC42M2MwLDQuODMtNS4yOSwxMC4xMi0xMC4xMywxMC4xMkgxMDYuMzhaIiBzdHlsZT0iZmlsbDojYzljZGQ3Ii8+PHBhdGggZD0iTTExNi41LDE0Ni40NWgtMTJWNzEuNzhoMTJjNS44NSwwLDEyLDYuMTgsMTIsMTJ2NTAuNjNDMTI4LjUzLDE0MC4yNywxMjIuMzUsMTQ2LjQ1LDExNi41LDE0Ni40NVptLTguMjItMy44aDguMjJjMy43NywwLDguMjMtNC40Niw4LjIzLTguMjJWODMuOGMwLTMuNzYtNC40Ni04LjIyLTguMjMtOC4yM2gtOC4yMloiIHN0eWxlPSJmaWxsOiM4Yzk4YWIiLz48cmVjdCB4PSIxNy43OSIgeT0iNzMuNjgiIHdpZHRoPSI4OC41OSIgaGVpZ2h0PSI3MC44NyIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwb2x5Z29uIHBvaW50cz0iMTA4LjI4IDE0Ni40NSAxNS44OSAxNDYuNDUgMTUuODkgNzEuNzggMjcuOTEgNzEuNzggMjcuOTEgNzUuNTggMTkuNjggNzUuNTggMTkuNjggMTQyLjY1IDEwNC40OCAxNDIuNjUgMTA0LjQ4IDc1LjU4IDYwLjgyIDc1LjU4IDYwLjgyIDcxLjc4IDEwOC4yOCA3MS43OCAxMDguMjggMTQ2LjQ1IiBzdHlsZT0iZmlsbDojYjZjMmQzIi8+PHJlY3QgeD0iMTEzLjk3IiB5PSIxMDQuMDUiIHdpZHRoPSI1LjA2IiBoZWlnaHQ9IjEyLjY2IiBzdHlsZT0iZmlsbDojOGM5OGFiIi8+PHBhdGggZD0iTTU2LjYsOTQuMjRhMjYuMTgsMjYuMTgsMCwwLDEsLjYzLTQxLjQ2bDQuNjksOC4xNiwxMy0yOC40OEw0NC4xNiwzMS4yMSw0OS4yOCwzOUEzNC43MSwzNC43MSwwLDAsMCwzNy4yMyw2NC44OSwzNC4zNCwzNC4zNCwwLDAsMCw1NS42OCw5NS40NFoiIHN0eWxlPSJmaWxsOiNmZmFkOGMiLz48cGF0aCBkPSJNNTYuMjEsOTcuODZsLTEuNDItLjc0YTM2LjE1LDM2LjE1LDAsMCwxLTgtNTguNDdsLTYuMjctOS40OSwzNy4yNiwxLjUyTDYyLjEyLDY1LjA5LDU2LjcsNTUuNjZhMjQuMjksMjQuMjksMCwwLDAsMS4wOSwzNy4xbDEuNDUsMS4xN1ptLTguNDMtNjQuNiw0LDYtMS4yNiwxLjA5QTMyLjcxLDMyLjcxLDAsMCwwLDM5LjEzLDY0LjksMzIuMzIsMzIuMzIsMCwwLDAsNDguNzIsODhhMjguMDgsMjguMDgsMCwwLDEsNy4zNy0zNi43N0w1Ny44MSw1MGwzLjkyLDYuODFMNzIsMzQuMjVaIiBzdHlsZT0iZmlsbDojOGM5OGFiIi8+PHBhdGggZD0iTTE1Ny42NCw0NS44M1Y0MC43N2ExMC4xMywxMC4xMywwLDAsMC0xMC4xMy0xMC4xMkg5Ni44OUExMC4xMiwxMC4xMiwwLDAsMCw4Ni43Niw0MC43N3Y1LjA2WiIgc3R5bGU9ImZpbGw6I2M5Y2RkNyIvPjxwYXRoIGQ9Ik0xNTkuNTMsNDcuNzNIODQuODZ2LTdhMTIsMTIsMCwwLDEsMTItMTJoNTAuNjJhMTIsMTIsMCwwLDEsMTIsMTJabS03MC44Ny0zLjhoNjcuMDhWNDAuNzdhOC4yNCw4LjI0LDAsMCwwLTguMjMtOC4yM0g5Ni44OWE4LjI0LDguMjQsMCwwLDAtOC4yMyw4LjIzWiIgc3R5bGU9ImZpbGw6IzhjOThhYiIvPjxwYXRoIGQ9Ik04Ni43NiwxMzQuNDN2MTAuMTJjMCw0Ljg0LDUuMjksMTAuMTMsMTAuMTMsMTAuMTNoNTAuNjJjNC44NCwwLDEwLjEzLTUuMjksMTAuMTMtMTAuMTNWMTM0LjQzWiIgc3R5bGU9ImZpbGw6I2M5Y2RkNyIvPjxwYXRoIGQ9Ik0xNDcuNTEsMTU2LjU4SDk2Ljg5Yy01Ljg1LDAtMTItNi4xOC0xMi0xMnYtMTJoNzQuNjd2MTJhMTMuMTQsMTMuMTQsMCwwLDEtMTIsMTJaTTg4LjY2LDEzNi4zM3Y4LjIyYzAsMy43Nyw0LjQ2LDguMjMsOC4yMyw4LjIzaDUwLjYyYTkuNDYsOS40NiwwLDAsMCw4LjIzLTguMjN2LTguMjJaIiBzdHlsZT0iZmlsbDojOGM5OGFiIi8+PHJlY3QgeD0iODYuNzYiIHk9IjQ1LjgzIiB3aWR0aD0iNjkuMTQiIGhlaWdodD0iODguNTkiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNMTU5LjUzLDEzNi4zM0g4NC44NlY0My45M2g3NC42N1ptLTcwLjg3LTMuOGg2Ny4wOFY0Ny43M0g4OC42NloiIHN0eWxlPSJmaWxsOiM4Yzk4YWIiLz48cmVjdCB4PSIxMTcuMTQiIHk9IjE0Mi4wMiIgd2lkdGg9IjEyLjY2IiBoZWlnaHQ9IjUuMDYiIHN0eWxlPSJmaWxsOiM4Yzk4YWIiLz48L3N2Zz4="
}, function (e, t, n) {
    e.exports = n.p + "assets/b79a3c80f2b8a90c936149d048dbc126.svg"
}, function (e, t, n) {
    e.exports = n.p + "assets/a023954f6ccd8bd692e2c9e913475ce9.svg"
}, function (e, t, n) {
    e.exports = n.p + "assets/c6ccfb715c57917d84018a6ff384fea2.svg"
}, function (e, t, n) {
    e.exports = n.p + "assets/11a95a499861bfa68e75e032a577d2a7.svg"
}, function (e, t, n) {
    e.exports = {
        brand: "payoneer",
        "brand-font": '"Roboto Condensed",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,system-ui,Cantarell,"Helvetica Neue",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        "brand-navigation-logo": "payoneer-logo-white.svg",
        "ma-link-color": "#399bda",
        "screen-sm": "690px",
        "screen-md-min": "992px",
        "screen-sm-min": "691px",
        "screen-lg-min": "1260px",
        "screen-xsm-min": "481px",
        "ma-page-title-separator-spacing-moblet": "16px",
        "ma-page-title-height-moblet": "50px",
        "ma-page-title-height-desktop": "70px",
        "ma-main-padding-mobile": "16px",
        "ma-main-padding-desktop": "10px",
        "ma-line-height": "22px",
        "ma-font-size": "16px",
        "ma-box-shadow": "0 1px 7px 0 rgba(0,0,0,0.15)",
        "brand-shadow-color": "rgba(136,136,136,0.2)",
        "brand-radio-shape-color": "#5ea2ce",
        "brand-placeholder-color": "#b9bfcb",
        "brand-card-shadow-color": "rgba(136,136,136,0.2)",
        "white-color": "#fff",
        "brand-color-cold-gray-100": "#f1f3f7",
        "brand-color-cold-gray-200": "#e4e7ed",
        "brand-color-cold-gray-300": "#c9cdd7",
        "brand-color-cold-gray-400": "#b9bfcb",
        "brand-color-cold-gray-500": "#c3cad9",
        "brand-color-cold-gray-600": "#8c98ab",
        "brand-color-cold-gray-700": "#636b78",
        "brand-color-cold-gray-800": "#515d6f",
        "brand-color-cold-gray-900": "#33373e",
        "brand-color-orange-500": "#ff4800",
        "brand-color-red-500": "#ea5e5c",
        "brand-color-red-700": "#df0303",
        "brand-color-blue-300": "#5ea2ce",
        "brand-color-blue-500": "#399bda",
        "brand-color-blue-700": "#3d7faa",
        "brand-color-primary": "#ff4800",
        "brand-text-color-error": "#e70000",
        "brand-disabled-color": "#b9bfcb",
        "brand-color-green-500": "#39c900"
    }
}, , , , , , , , function (e, t, n) {
    "use strict";
    var r, o = n(0),
        i = (n(1), n(5)),
        a = n(23),
        c = n(996),
        u = n(4),
        l = n.n(u),
        s = n(8),
        f = n(26),
        d = n(2),
        p = n(24),
        y = n(53),
        m = n(118),
        v = n(44);

    function b(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var h, g = d.i.translate,
        O = b("i", {
            className: "icon-info-stroke"
        }),
        w = b("i", {
            className: "icon-question"
        }),
        j = function (e) {
            var t = e.title,
                n = e.icon,
                r = e.svgIcon,
                o = e.goBack,
                a = e.faqLink,
                c = e.subtitle,
                u = Object(i.f)(m.a),
                s = t || u && g(u.title),
                p = r || u && u.svg,
                y = b("i", {
                    className: n
                }),
                h = b(v.a, {
                    icon: p
                });
            return b("div", {
                className: l()("fsm-header", {
                    "fsm-header--webview": f.a,
                    "has-subtitle": !!c
                })
            }, void 0, b("span", {
                className: "fsm-header__back"
            }, void 0, b("i", {
                className: d.i.isRtl() ? "icon-right-open-big" : "icon-right-open-big left",
                onClick: o
            })), b("div", {
                className: "fsm-header__title"
            }, void 0, b("div", {
                className: "fsm-header__title__main"
            }, void 0, b("span", {
                className: "fsm-header__title__main__icon"
            }, void 0, n ? y : p ? h : ""), b("span", {
                className: "fsm-header__title__main__text"
            }, void 0, s)), !!c && b("div", {
                className: "fsm-header__title__subtitle"
            }, void 0, c)), b("span", {
                className: "fsm-header__faq"
            }, void 0, !a && O, a && w))
        };
    var S, x = function (e) {
        var t = e.children;
        return function (e, t, n, r) {
            h || (h = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps,
                i = arguments.length - 3;
            if (t || 0 === i || (t = {
                    children: void 0
                }), 1 === i) t.children = r;
            else if (i > 1) {
                for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                t.children = a
            }
            if (t && o)
                for (var u in o) void 0 === t[u] && (t[u] = o[u]);
            else t || (t = o || {});
            return {
                $$typeof: h,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }("div", {
            style: {
                "--max-width": e.maxWidth
            },
            className: l()("fsm-body", {
                "fsm-body--webview": f.a
            })
        }, void 0, t)
    };

    function N(e, t, n, r) {
        S || (S = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: S,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var T, A = N("i", {
            className: "icon-expander"
        }),
        _ = function (e) {
            var t = e.onClick;
            return N("div", {
                className: l()("fsm-back-button", {
                    "fsm-back-button--rtl": d.i.isRtl()
                }),
                onClick: t
            }, void 0, A)
        };

    function k(e, t, n, r) {
        T || (T = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: T,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var P, L = k("i", {
            className: "icon-question"
        }),
        M = function (e) {
            var t = e.faqLink;
            return k("div", {
                className: l()("fsm-help-button", {
                    "fsm-help-button--rtl": d.i.isRtl()
                }),
                onClick: function () {
                    return window.open(t)
                }
            }, void 0, L)
        };

    function E(e, t, n, r) {
        P || (P = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: P,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var C, I = E("span", {}, void 0, " "),
        D = function (e) {
            var t = e.className,
                n = e.children,
                r = e.title,
                o = e.icon,
                i = e.svgIcon,
                a = e.goBack,
                c = e.hideBackButton,
                u = e.faqLink,
                s = e.subtitle,
                f = e.testid,
                p = e.maxWidth,
                y = E("i", {
                    className: o
                }),
                m = E(v.a, {
                    icon: i
                });
            return E("div", {
                className: l()("full-screen-modal-new--legacy", t, {}),
                "data-testid": f,
                style: {
                    "--max-width": p
                }
            }, void 0, E("div", {
                className: l()("fsm-header-legacy", {
                    "has-subtitle": !!s
                })
            }, void 0, E("div", {
                className: "fsm-header-legacy__mobile"
            }, void 0, E("div", {
                className: "fsm-header-legacy__start"
            }, void 0, !c && E("i", {
                className: d.i.isRtl() ? "icon-triangle-right" : "icon-triangle-left",
                onClick: a
            }), I, E("span", {
                className: "text"
            }, void 0, E("span", {}, void 0, r))), u && E("div", {
                className: "fsm-header-legacy__end"
            }, void 0, E("i", {
                className: "icon-question",
                onClick: function () {
                    return window.open(u, "_blank")
                }
            }))), E("div", {
                className: "fsm-header-legacy__desktop"
            }, void 0, E("i", {
                className: d.i.isRtl() ? "icon-triangle-right" : "icon-triangle-left",
                onClick: a,
                style: {
                    visibility: c ? "hidden" : "initial"
                }
            }), E("div", {
                className: "text"
            }, void 0, E("span", {
                className: "text__icon"
            }, void 0, o ? y : i ? m : ""), E("span", {
                className: "text__title"
            }, void 0, r), s && E("div", {
                className: "text__subtitle"
            }, void 0, s)), E("i", {
                className: "icon-question",
                onClick: function () {
                    return window.open(u, "_blank")
                },
                style: {
                    visibility: u ? "initial" : "hidden"
                }
            }))), E("div", {
                className: "fsm-body-legacy"
            }, void 0, n))
        };
    n(992);

    function R(e) {
        return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function B(e, t, n, r) {
        C || (C = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: C,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function z(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function $(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function U(e, t) {
        return (U = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function F(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = q(e);
            if (t) {
                var o = q(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return Y(this, n)
        }
    }

    function Y(e, t) {
        return !t || "object" !== R(t) && "function" != typeof t ? G(e) : t
    }

    function G(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function q(e) {
        return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Q = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && U(e, t)
        }(i, e);
        var t, n, r, o = F(i);

        function i() {
            var e;
            z(this, i);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return V(G(e = o.call.apply(o, [this].concat(n))), "handleBack", (function () {
                var t = e.props,
                    n = t.backFunc,
                    r = t.currentRoute,
                    o = t.push,
                    i = t.pathname,
                    a = t.goBack,
                    c = r && r.backPathname;
                i ? o(i) : n ? n() : c ? o(c) : a()
            })), e
        }
        return t = i, (n = [{
            key: "componentDidMount",
            value: function () {
                !s.b && this.props.toggleFullScreenModalN(!0)
            }
        }, {
            key: "componentWillUnmount",
            value: function () {
                !s.b && this.props.toggleFullScreenModalN(!1)
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.className,
                    n = e.children,
                    r = e.title,
                    o = e.icon,
                    i = e.svgIcon,
                    a = e.faqLink,
                    u = e.isFullScreenModalOpen,
                    p = e.isFullScreenModalClose,
                    y = e.hideBackButton,
                    m = e.subtitle,
                    v = e.testid,
                    b = e.maxWidth;
                return s.b ? B(D, {
                    className: t,
                    title: r,
                    subtitle: m,
                    icon: o,
                    svgIcon: i,
                    goBack: this.handleBack,
                    hideBackButton: y,
                    faqLink: a,
                    testid: v,
                    maxWidth: b
                }, void 0, n) : B(c.a, {
                    isOpened: u,
                    isOpen: u
                }, void 0, B("div", {
                    className: l()("full-screen-modal-new", t, {
                        "full-screen-modal-new--legacy": s.b,
                        "full-screen-modal-new--rtl": d.i.isRtl()
                    }),
                    "data-testid": v
                }, void 0, B("div", {
                    className: l()("full-screen-modal-new__content", {
                        "full-screen-modal-new__content--open": u,
                        "full-screen-modal-new__content--close": p
                    })
                }, void 0, !f.a && B(j, {
                    title: r,
                    subtitle: m,
                    icon: o,
                    svgIcon: i,
                    goBack: this.handleBack,
                    faqLink: a
                }), B(x, {
                    maxWidth: b
                }, void 0, n)), B(_, {
                    onClick: this.handleBack
                }), a && B(M, {
                    faqLink: a
                })))
            }
        }]) && $(t.prototype, n), r && $(t, r), i
    }(o.Component);
    t.a = Object(i.c)((function (e) {
        return {
            isFullScreenModalOpen: Object(y.d)(e),
            isFullScreenModalClose: Object(y.c)(e),
            currentRoute: Object(m.a)(e)
        }
    }), {
        toggleFullScreenModalN: p.h,
        goBack: a.b,
        push: a.c
    })(Q)
}, , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return g
    }));
    var r, o = n(0),
        i = n.n(o),
        a = (n(1), n(4)),
        c = n.n(a),
        u = n(8),
        l = n(26);
    n(991);

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function f(e, t, n, o) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var i = e && e.defaultProps,
            a = arguments.length - 3;
        if (t || 0 === a || (t = {
                children: void 0
            }), 1 === a) t.children = o;
        else if (a > 1) {
            for (var c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u + 3];
            t.children = c
        }
        if (t && i)
            for (var l in i) void 0 === t[l] && (t[l] = i[l]);
        else t || (t = i || {});
        return {
            $$typeof: r,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = b(e);
            if (t) {
                var o = b(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return m(this, n)
        }
    }

    function m(e, t) {
        return !t || "object" !== s(t) && "function" != typeof t ? v(e) : t
    }

    function v(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var g = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(s, e);
        var t, n, r, a = y(s);

        function s(e) {
            var t;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s), h(v(t = a.call(this, e)), "onSearchFocus", (function () {
                t.props.onSearchFocus && t.props.onSearchFocus(), t.setState({
                    inputInFocus: !0
                })
            })), h(v(t), "focusSearchBar", (function () {
                t.refs.searchInput.focus()
            })), h(v(t), "clearSearchBar", (function () {
                var e = t.props.searchFunc;
                e && e(""), t.refs.searchInput.value = "", t.props.onSearchBlur && t.props.onSearchBlur(), t.setState({
                    inputInFocus: !1
                })
            })), h(v(t), "checkCloseSearch", (function () {
                if (!t.props.searchText) return t.props.onSearchBlur && t.props.onSearchBlur(), t.setState({
                    inputInFocus: !1
                })
            })), h(v(t), "updateSearch", (function () {
                var e = t.props.searchFunc;
                e && e(t.refs.searchInput.value)
            })), h(v(t), "handleKeyPress", (function (e) {
                13 === e.charCode && t.refs.searchInput.blur()
            })), t.state = {
                inputInFocus: !1
            }, t
        }
        return t = s, (n = [{
            key: "render",
            value: function () {
                var e = this.props,
                    t = e.searchText,
                    n = e.searchPlaceHolder,
                    r = this.state.inputInFocus;
                return f(o.Fragment, {}, void 0, f("div", {
                    className: c()("mobile-search", {
                        "mobile-search--focused": r || t
                    })
                }, void 0, f("i", {
                    className: "icon-search__new",
                    onClick: this.focusSearchBar
                })), f("div", {
                    className: c()("mobile-search__input", {
                        "mobile-search__input--focused": r,
                        "mobile-search__input--webview": l.a,
                        "mobile-search__input--legacy": u.b
                    })
                }, void 0, i.a.createElement("input", {
                    type: "text",
                    ref: "searchInput",
                    placeholder: n,
                    onChange: this.updateSearch,
                    value: t || "",
                    onFocus: this.onSearchFocus,
                    onBlur: this.checkCloseSearch,
                    onKeyPress: this.handleKeyPress
                }), f("i", {
                    className: "icon-close",
                    onClick: this.clearSearchBar
                })))
            }
        }]) && d(t.prototype, n), r && d(t, r), s
    }(o.Component)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    e.exports = n.p + "robots.txt"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
    e.exports = function () {}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(796), n(316), n(319);
    var r, o = n(0),
        i = n.n(o),
        a = n(29),
        c = n(7),
        u = n(5),
        l = n(109),
        s = n(12),
        f = n(99),
        d = n(10),
        p = n(41),
        y = n(2),
        m = (n(1), n(102)),
        v = n(558),
        b = n(24),
        h = n(219),
        g = n(165),
        O = Object(o.memo)((function () {
            var e = Object(u.e)(),
                t = function () {
                    return e(Object(h.g)())
                },
                n = Object(u.f)((function (e) {
                    return e.layout.responsiveSidebar
                })),
                r = function (r) {
                    switch (r.type) {
                        case g.a.CLOSE_SIDEBAR:
                            if (!n.list || !n.list.length) return;
                            return e(Object(b.a)(t));
                        default:
                            return
                    }
                };
            return Object(o.useEffect)((function () {
                var e = Object(g.b)(r);
                return function () {
                    e()
                }
            }), [n]), null
        })),
        w = n(100),
        j = n(279),
        S = n(162),
        x = n(36),
        N = n(4),
        T = n.n(N),
        A = n(8),
        _ = (n(167), function (e) {
            var t = 0 === location.pathname.indexOf("/payer");
            return !(e.IS_PAYER() || !t) && (window.location.href = window.location.origin, !0)
        }),
        k = n(59),
        P = n(52),
        L = "undefined" != typeof window && window.location.pathname.startsWith("/opa"),
        M = n(996),
        E = n(559),
        C = n.n(E);
    var I, D, R, B = c.f.div(r || (I = ["\n    display: flex;\n    justify-content: center;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    position: fixed;\n    background-color: ", ";\n    z-index: 999999;\n    text-align: center;\n    flex-direction: column;\n\n    .icon {\n        height: auto;\n        background: url(", ") center no-repeat;\n        min-height: 148px;\n        width: 100%;\n        margin-bottom: 36px;\n    }\n    .content {\n        font-family: ", ";\n        font-size: 1.31rem;\n        font-weight: normal;\n        font-style: normal;\n        line-height: normal;\n        letter-spacing: normal;\n        text-align: center;\n        color: #767f8b;\n    }\n"], D || (D = I.slice(0)), r = Object.freeze(Object.defineProperties(I, {
        raw: {
            value: Object.freeze(D)
        }
    }))), (function (e) {
        return e.theme["brand-color-cold-gray-100"]
    }), C.a, (function (e) {
        return e.theme["brand-font"]
    }));

    function z(e, t, n, r) {
        R || (R = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: R,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function $(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return U(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var F, Y = y.i.translate,
        G = function () {
            var e = "screen" in window && screen.orientation && screen.orientation.angle || window.orientation;
            return !e || 90 != e && 270 != e && -90 != e ? "portrait" : "landscape"
        },
        q = z("div", {
            className: "icon"
        }),
        V = function (e) {
            var t = e.contentMessage,
                n = e.isReady,
                r = $(Object(o.useState)(G()), 2),
                i = r[0],
                a = r[1];
            if (Object(o.useEffect)((function () {
                    var e = function () {
                        return a(G())
                    };
                    return window.addEventListener("orientationchange", e),
                        function () {
                            window.removeEventListener("orientationchange", e)
                        }
                }), []), !n || "portrait" === i) return null;
            var c = t || Y("DeviceRotationAlertMessage.Text", "To view the page, rotate your device");
            return z(M.a, {
                isOpened: !0
            }, void 0, z(B, {}, void 0, q, z("div", {
                className: "content"
            }, void 0, c)))
        },
        Q = V = Object(u.c)((function (e) {
            return {
                isReady: A.b ? s.l.systemReady(e, window.__LEGACY_SYSTEM_INIT_ASSETS__) : s.l.systemReady(e)
            }
        }))(V),
        H = n(33),
        W = n(225),
        J = n.n(W),
        Z = n(96),
        K = n(9),
        X = n(3),
        ee = n(131),
        te = n(262);

    function ne(e, t, n, r) {
        F || (F = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: F,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var re, oe = ne(ee.a, {
            title: "Home"
        }),
        ie = ne(te.default, {}),
        ae = function () {
            return ne("div", {
                className: "dashboard - outlet"
            }, void 0, !A.b && oe, ie)
        },
        ce = K.a.injectRoute({
            path: X.a.home.pathname,
            component: {
                promise: Promise.resolve({
                    default: ae
                })
            }
        }),
        ue = K.a.injectRoute({
            path: X.a.bankmanagement.pathname,
            component: {
                promise: function () {
                    return n.e(261).then(n.bind(null, 2642))
                }
            },
            middleware: {
                promise: function () {
                    return n.e(264).then(n.bind(null, 2643))
                }
            }
        }),
        le = K.a.injectRoute({
            path: X.a.cardmanagement.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(97), n.e(267)]).then(n.bind(null, 2662))
                }
            },
            reducer: {
                name: "cardManagement",
                promise: function () {
                    return Promise.all([n.e(2), n.e(97), n.e(267)]).then(n.bind(null, 2714))
                }
            }
        }),
        se = K.a.injectRoute({
            path: X.a.withdrawfunds.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(19), n.e(310)]).then(n.bind(null, 2665))
                }
            },
            reducer: {
                name: "withdrawFunds",
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(19), n.e(310)]).then(n.bind(null, 2697))
                }
            }
        }),
        fe = K.a.injectRoute({
            path: X.a.autowithdrawal.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(6), n.e(12), n.e(260)]).then(n.bind(null, 2670))
                }
            },
            reducer: {
                name: "autoWithdrawal",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(6), n.e(12), n.e(260)]).then(n.bind(null, 2644))
                }
            }
        }),
        de = K.a.injectRoute({
            path: X.a.earlypayments.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(6), n.e(272)]).then(n.bind(null, 2673))
                }
            },
            reducer: {
                name: "earlyPayments",
                promise: function () {
                    return Promise.all([n.e(2), n.e(6), n.e(272)]).then(n.bind(null, 2715))
                }
            }
        }),
        pe = K.a.injectRoute({
            path: X.a.paymentrequest.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(12), n.e(292)]).then(n.bind(null, 2666))
                }
            },
            reducer: {
                name: "createPrqs",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(12), n.e(292)]).then(n.bind(null, 2703))
                }
            }
        }),
        ye = n(275),
        me = K.a.injectRoute({
            path: X.a.taxinformationstatus.pathname,
            component: {
                promise: function () {
                    return n.e(304).then(n.bind(null, 2698))
                }
            },
            reducer: {
                name: "taxInformationStatus",
                promise: function () {
                    return n.e(304).then(n.bind(null, 2716))
                }
            }
        }),
        ve = K.a.injectRoute({
            path: X.a.transactions.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(12), n.e(306)]).then(n.bind(null, 2677))
                }
            },
            reducer: {
                name: "activity",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(12), n.e(306)]).then(n.bind(null, 2704))
                }
            }
        }),
        be = K.a.injectRoute({
            path: X.a.notifications.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(98), n.e(286)]).then(n.bind(null, 2678))
                }
            },
            reducer: {
                name: "notifications",
                promise: function () {
                    return Promise.all([n.e(98), n.e(286)]).then(n.bind(null, 2705))
                }
            }
        }),
        he = K.a.injectRoute({
            path: X.a.receivingaccounts.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(295)]).then(n.bind(null, 2663))
                }
            },
            reducer: {
                name: "receivingAccounts",
                promise: function () {
                    return Promise.all([n.e(2), n.e(295)]).then(n.bind(null, 2645))
                }
            }
        }),
        ge = K.a.injectRoute({
            path: X.a.paymentrequesthistory.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(6), n.e(12), n.e(260)]).then(n.bind(null, 2681))
                }
            },
            reducer: {
                name: "paymentRequestHistory",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(6), n.e(12), n.e(260)]).then(n.bind(null, 2717))
                }
            }
        }),
        Oe = K.a.injectRoute({
            path: X.a.fundingsources.pathname,
            component: {
                promise: function () {
                    return n.e(276).then(n.bind(null, 2687))
                }
            },
            reducer: {
                name: "fundingSources",
                promise: function () {
                    return n.e(276).then(n.bind(null, 2711))
                }
            }
        }),
        we = K.a.injectRoute({
            path: X.a.referafriend.pathname,
            component: {
                promise: function () {
                    return n.e(298).then(n.bind(null, 2674))
                }
            },
            reducer: {
                name: "referAFriend",
                promise: function () {
                    return n.e(298).then(n.bind(null, 2646))
                }
            }
        }),
        je = K.a.injectRoute({
            path: X.a.crossbalance.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(270)]).then(n.bind(null, 2694))
                }
            },
            reducer: {
                name: "crossBalance",
                promise: function () {
                    return Promise.all([n.e(2), n.e(270)]).then(n.bind(null, 2692))
                }
            }
        }),
        Se = K.a.injectRoute({
            path: X.a.contacts.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(98), n.e(268)]).then(n.bind(null, 2675))
                }
            },
            reducer: {
                name: "contacts",
                promise: function () {
                    return Promise.all([n.e(2), n.e(98), n.e(268)]).then(n.bind(null, 2647))
                }
            }
        }),
        xe = K.a.injectRoute({
            path: X.a.storemanagement.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(6), n.e(303)]).then(n.bind(null, 2661))
                }
            },
            reducer: {
                name: "storeManagement",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(6), n.e(303)]).then(n.bind(null, 2680))
                }
            }
        }),
        Ne = K.a.injectRoute({
            path: ["".concat(X.a.makeapayment.pathname, "/:flowType?/:token?")],
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(19), n.e(283)]).then(n.bind(null, 2676))
                }
            },
            reducer: {
                name: "makeapayment",
                promise: function () {
                    return Promise.all([n.e(2), n.e(19), n.e(283)]).then(n.bind(null, 2648))
                }
            }
        }),
        Te = n(276),
        Ae = n(220),
        _e = n(6);
    n(978);

    function ke(e, t, n, r) {
        re || (re = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: re,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Pe, Le = y.i.translate,
        Me = function () {
            return i.a.createElement(i.a.Fragment, null, ke(ee.a, {
                title: Le("NotFound.Text"),
                svg: _e.e
            }), ke("div", {
                className: "not-found-route"
            }, void 0, ke(Ae.a, {
                headerText: "404",
                mode: "pageNotFound",
                content: Le("UnknownPath.Text")
            })))
        },
        Ee = K.a.injectRoute({
            path: X.a.thirdpartiesaccounting.pathname,
            component: {
                promise: function () {
                    return n.e(305).then(n.bind(null, 2649))
                }
            },
            reducer: {
                name: "thirdPartiesAccounting",
                promise: function () {
                    return n.e(305).then(n.bind(null, 2650))
                }
            }
        }),
        Ce = K.a.injectRoute({
            path: "/pay/selectionpage",
            component: {
                promise: function () {
                    return n.e(294).then(n.bind(null, 2706))
                }
            }
        }),
        Ie = K.a.injectRoute({
            path: X.a.paybeneficiarybank.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(19), n.e(288)]).then(n.bind(null, 2686))
                }
            },
            reducer: {
                name: "pon",
                promise: function () {
                    return Promise.all([n.e(2), n.e(19), n.e(288)]).then(n.bind(null, 2693))
                }
            }
        }),
        De = K.a.injectRoute({
            path: X.a.paytoamazonadvertising.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(96), n.e(289)]).then(n.bind(null, 2664))
                }
            },
            reducer: {
                name: "ponAmazon",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(96), n.e(289)]).then(n.bind(null, 2707))
                }
            }
        }),
        Re = K.a.injectRoute({
            path: X.a.paytoamazontransparency.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(96), n.e(289)]).then(n.bind(null, 2664))
                }
            },
            reducer: {
                name: "ponAmazon",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(96), n.e(289)]).then(n.bind(null, 2707))
                }
            }
        }),
        Be = K.a.injectRoute({
            path: X.a.editprofile.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(273)]).then(n.bind(null, 2672))
                }
            },
            reducer: {
                name: "editProfile",
                promise: function () {
                    return Promise.all([n.e(2), n.e(273)]).then(n.bind(null, 2699))
                }
            },
            middleware: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(273)]).then(n.bind(null, 2700))
                }
            }
        }),
        ze = K.a.injectRoute({
            path: X.a.securitysettings.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(8), n.e(301)]).then(n.bind(null, 2683))
                }
            },
            reducer: {
                name: "securitySettings",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(8), n.e(301)]).then(n.bind(null, 2708))
                }
            },
            middleware: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(8), n.e(301)]).then(n.bind(null, 2701))
                }
            }
        }),
        $e = K.a.injectRoute({
            path: X.a.notificationsettings.pathname,
            component: {
                promise: function () {
                    return n.e(285).then(n.bind(null, 2688))
                }
            },
            reducer: {
                name: "notificationSettings",
                promise: function () {
                    return n.e(285).then(n.bind(null, 2651))
                }
            }
        }),
        Ue = K.a.injectRoute({
            path: X.a.digitalfirc.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(12), n.e(99), n.e(271)]).then(n.bind(null, 2684))
                }
            },
            reducer: {
                name: "digitalFirc",
                promise: function () {
                    return Promise.all([n.e(0), n.e(12), n.e(99), n.e(271)]).then(n.bind(null, 2652))
                }
            }
        }),
        Fe = function () {
            return Promise.all([n.e(2), n.e(277)]).then(n.bind(null, 2671))
        },
        Ye = function () {
            return Promise.all([n.e(2), n.e(277)]).then(n.bind(null, 2653))
        },
        Ge = K.a.injectRoute({
            path: [X.a.fundsconsolidationsubaccount.pathname],
            component: {
                promise: Fe
            },
            reducer: {
                name: "fundsConsolidation",
                promise: Ye
            }
        }),
        qe = K.a.injectRoute({
            path: [X.a.fundsconsolidationmainaccount.pathname],
            component: {
                promise: Fe
            },
            reducer: {
                name: "fundsConsolidation",
                promise: Ye
            }
        }),
        Ve = K.a.injectRoute({
            path: [X.a.fundsconsolidationadminaccount.pathname],
            component: {
                promise: Fe
            },
            reducer: {
                name: "fundsConsolidation",
                promise: Ye
            }
        }),
        Qe = K.a.injectRoute({
            path: "/activity/statements",
            component: {
                promise: function () {
                    return n.e(258).then(n.bind(null, 2695))
                }
            }
        }),
        He = K.a.injectRoute({
            path: X.a.batchpaybeneficiarybank.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(19), n.e(96), n.e(290)]).then(n.bind(null, 2667))
                }
            },
            reducer: {
                name: "payOutsideNetworkBatch",
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(19), n.e(96), n.e(290)]).then(n.bind(null, 2696))
                }
            }
        }),
        We = X.a.amazonbankstatement,
        Je = X.a.gpsdconfirmation,
        Ze = X.a.monthlystatement,
        Ke = X.a.goodstandingstatement,
        Xe = K.a.injectRoute({
            path: We.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2669))
                }
            },
            reducer: {
                name: "statements",
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2654))
                }
            }
        }),
        et = K.a.injectRoute({
            path: Je.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2669))
                }
            },
            reducer: {
                name: "statements",
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2654))
                }
            }
        }),
        tt = K.a.injectRoute({
            path: Ze.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2669))
                }
            },
            reducer: {
                name: "statements",
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2654))
                }
            }
        }),
        nt = K.a.injectRoute({
            path: Ke.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2669))
                }
            },
            reducer: {
                name: "statements",
                promise: function () {
                    return Promise.all([n.e(0), n.e(1), n.e(12), n.e(99), n.e(302)]).then(n.bind(null, 2654))
                }
            }
        });

    function rt(e, t, n, r) {
        Pe || (Pe = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Pe,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var ot, it = rt(Z.d, {}, void 0, ce, Ge, qe, Ve, ue, le, ge, ve, se, fe, de, pe, he, Be, ze, Te.a, ye.a, be, Ee, $e, Oe, we, me, xe, je, Se, Ne, Ie, He, De, Re, Ce, Qe, Xe, et, tt, nt, Ue, rt(Z.b, {
        path: "*"
    }, void 0, rt(Me, {})));

    function at(e, t, n, r) {
        ot || (ot = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ot,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var ct, ut = at("div", {
            className: "myaccount__container__wrapper"
        }, void 0, at((function () {
            return it
        }), {})),
        lt = function () {
            return at("div", {
                className: T()("myaccount__container", {
                    rtl: y.i.isRtl(),
                    legacy: A.b
                })
            }, void 0, at(J.a, {}, void 0, at("html", {
                lang: y.i.getLocale() || "en"
            })), at("div", {
                className: T()("myaccount__container__outlet")
            }, void 0, ut))
        },
        st = n(26),
        ft = "undefined" != typeof window && window.location.search.includes("outlet=standalone"),
        dt = n(348),
        pt = n(191),
        yt = n(13),
        mt = n(53),
        vt = n(37),
        bt = n(118);
    n(979);

    function ht(e, t, n, r) {
        ct || (ct = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ct,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var gt, Ot = Object(u.c)((function (e) {
            return {
                breadcrumbs: Object(bt.b)(e)
            }
        }))((function (e) {
            var t = e.breadcrumbs;
            return t ? ht("div", {
                className: "myaccount-breadcrumbs"
            }, void 0, t.map((function (e, n) {
                return n < t.length - 1 ? ht(i.a.Fragment, {}, n, ht(vt.a, {
                    href: e.pathname
                }, void 0, y.i.translate(e.title)), ht("i", {
                    className: y.i.isRtl() ? "icon-angle-left" : "icon-angle-right"
                })) : ht("span", {}, n, y.i.translate(e.title))
            }))) : ""
        })),
        wt = n(134),
        jt = n(359);
    n(981);

    function St() {
        return (St = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function xt(e, t) {
        if (null == e) return {};
        var n, r, o = function (e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var Nt, Tt = function (e) {
            var t = e.style,
                n = e.className,
                r = e.large,
                o = e.onClick,
                a = xt(e, ["style", "className", "large", "onClick"]),
                c = "".concat(d.a.firstName && d.a.firstName[0]).concat(d.a.lastName && d.a.lastName[0]);
            return i.a.createElement("div", St({
                style: t,
                className: T()("user-details-icon", n, {
                    "user-details-icon--large": r
                }),
                onClick: o,
                "data-testid": "user-details-icon"
            }, a), d.a.isVIP && function (e, t, n, r) {
                gt || (gt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = r;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var u in o) void 0 === t[u] && (t[u] = o[u]);
                else t || (t = o || {});
                return {
                    $$typeof: gt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }("div", {
                className: "user-details-icon__vip"
            }, void 0, y.i.translate("VIP.Text")), c.toUpperCase())
        },
        At = n(23),
        _t = n(270);
    n(982);

    function kt(e, t, n, r) {
        Nt || (Nt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Nt,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Pt, Lt = Object(u.c)((function (e) {
        return {
            unreadNotificationsCount: Object(_t.c)(e)
        }
    }), {
        push: At.c
    })((function (e) {
        var t = e.style,
            n = e.className,
            r = e.unreadNotificationsCount,
            o = e.push;
        return kt("i", {
            style: t,
            className: T()("notification-bell icon-notification__new", n, {
                "notification-bell--active": r > 0
            }),
            onClick: function () {
                return o(X.a.notifications.pathname)
            }
        }, void 0, r > 0 && kt("div", {
            className: "red-point"
        }, void 0, kt("span", {
            className: "msg-count"
        }, void 0, r)))
    }));
    n(983);

    function Mt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Et(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Mt(Object(n), !0).forEach((function (t) {
                Ct(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ct(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var It, Dt = function (e) {
            var t = e.style,
                n = e.className,
                r = Object(u.e)();
            return function (e, t, n, r) {
                Pt || (Pt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = r;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var u in o) void 0 === t[u] && (t[u] = o[u]);
                else t || (t = o || {});
                return {
                    $$typeof: Pt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }("div", {
                style: t,
                className: "payoneer-logo ".concat(n),
                onClick: function () {
                    d.a.IS_PAYER() && (Object(yt.e)(Et(Et({}, X.a.initiatepayment), {}, {
                        payer: !0
                    })) ? r(Object(At.c)(X.a.transactions.pathname)) : r(Object(At.c)(X.a.paymentrequestreceived.pathname))), r(Object(At.c)(X.a.home.pathname))
                }
            })
        },
        Rt = n(72);

    function Bt(e, t, n, r) {
        It || (It = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: It,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var zt = Bt(Lt, {}, "1"),
        $t = Bt(jt.a, {
            faqLink: ""
        }, "0"),
        Ut = Bt(te.default, {}),
        Ft = function () {
            var e = Object(u.e)(),
                t = Object(u.f)(wt.c);
            return t ? Bt(Z.a, {
                to: t
            }) : Bt(Rt.a, {
                className: "home-index main-height",
                header: {
                    title: H.a.isLandsacape ? Bt(Dt, {
                        style: {
                            height: "40px",
                            width: "80px"
                        }
                    }) : "",
                    desktopActions: H.a.isLandsacape ? [!d.a.IS_PAYER() && zt, Bt(Tt, {
                        onClick: function () {
                            return e(Object(b.k)(!0))
                        },
                        "data-testid": "avatar-click"
                    }, "0")] : [$t]
                }
            }, void 0, Ut)
        },
        Yt = n(79);

    function Gt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function qt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Gt(Object(n), !0).forEach((function (t) {
                Vt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Vt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Qt, Ht = X.a.paymentrequest,
        Wt = X.a.receivingaccounts,
        Jt = X.a.paymentrequesthistory,
        Zt = [{
            id: 1
        }],
        Kt = [qt(qt({
            groupId: 1,
            type: "linkcard"
        }, Ht), {}, {
            flip: !1,
            footer: {
                link: qt(qt({}, Jt), {}, {
                    href: Jt.pathname,
                    eligibleKey: Jt.key
                })
            }
        }), qt(qt({
            groupId: 1,
            type: "linkcard"
        }, Wt), {}, {
            description: "ReceivingAccountsDesc.Text",
            flip: !1
        })];

    function Xt(e) {
        return (Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function en(e, t, n, r) {
        Qt || (Qt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Qt,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function tn(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function nn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function rn(e, t) {
        return (rn = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function on(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = cn(e);
            if (t) {
                var o = cn(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return an(this, n)
        }
    }

    function an(e, t) {
        return !t || "object" !== Xt(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function cn(e) {
        return (cn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var un, ln = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && rn(e, t)
        }(i, e);
        var t, n, r, o = on(i);

        function i() {
            return tn(this, i), o.apply(this, arguments)
        }
        return t = i, (n = [{
            key: "render",
            value: function () {
                var e = Zt,
                    t = Kt.filter(yt.e);
                return en(Rt.a, {
                    className: "get-paid-index",
                    header: {}
                }, void 0, en(Yt.a, {
                    groups: e,
                    modules: t
                }))
            }
        }]) && nn(t.prototype, n), r && nn(t, r), i
    }(o.Component);

    function sn(e, t, n, r) {
        un || (un = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: un,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var fn = X.a.getpaid,
        dn = X.a.earlypayments,
        pn = X.a.paymentrequest,
        yn = X.a.receivingaccounts,
        mn = sn(Z.a, {
            to: "/404"
        }),
        vn = function (e) {
            var t = e.children;
            return sn("div", {
                className: "get-paid-outlet main-height"
            }, void 0, sn(Z.d, {}, void 0, sn(Z.b, {
                exact: !0,
                path: fn.pathname,
                component: ln
            }), Object(yt.e)(dn) && de, Object(yt.e)(pn) && pe, Object(yt.e)(yn) && he, mn), t)
        };

    function bn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? bn(Object(n), !0).forEach((function (t) {
                gn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function gn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var On, wn = X.a.makeapayment,
        jn = X.a.paybeneficiarybank,
        Sn = X.a.paytoamazonadvertising,
        xn = X.a.paytoamazontransparency,
        Nn = X.a.managerecipientaccounts,
        Tn = X.a.payvat,
        An = X.a.initiatepayment,
        _n = X.a.batchpayment,
        kn = X.a.recurringpayments,
        Pn = X.a.managerecurringpayments,
        Ln = X.a.batchpaybeneficiarybank,
        Mn = [{
            id: 1,
            title: d.a.IS_PAYER() && "PayFromYourPayoneerBalance.Text"
        }, {
            id: 2,
            title: d.a.IS_PAYER() && "PayWithOtherPaymentMethods.Text"
        }],
        En = [hn(hn({
            groupId: 1,
            type: "linkcard"
        }, wn), {}, {
            description: "InNetworkPaymentDesc.Text",
            flip: !0
        }), hn(hn({
            groupId: 1,
            type: "linkcard"
        }, jn), {}, {
            description: "OutOfNetworkPaymentDesc.Text",
            flip: !1,
            footer: {
                link: hn(hn({}, Nn), {}, {
                    title: "ManageReipientAccounts.Text",
                    href: Nn.pathname,
                    eligibleKey: Nn.key
                })
            }
        }), hn(hn({
            groupId: 1,
            type: "linkcard"
        }, Ln), {}, {
            description: "PayOutsideNetworkBatchDesc.Text",
            payer: !0
        }), hn(hn({
            groupId: 1,
            type: "linkcard"
        }, Sn), {}, {
            flip: !1
        }), hn(hn({
            groupId: 1,
            type: "linkcard"
        }, xn), {}, {
            flip: !1
        }), hn(hn({
            groupId: 1,
            type: "linkcard"
        }, Tn), {}, {
            flip: !1,
            blank: !0
        }), hn(hn({
            groupId: 2,
            type: "linkcard"
        }, An), {}, {
            description: "InitiateAPaymentDesc.Text",
            payer: !0
        }), hn(hn({
            groupId: 2,
            type: "linkcard"
        }, _n), {}, {
            description: "BatchPaymentDesc.Text",
            payer: !0
        }), hn(hn({
            groupId: 2,
            type: "linkcard"
        }, kn), {}, {
            description: "RecurringPaymentsDesc.Text",
            footer: {
                link: hn(hn({}, Pn), {}, {
                    href: Pn.pathname,
                    eligibleKey: Pn.key
                })
            },
            payer: !0
        })];

    function Cn(e, t, n, r) {
        On || (On = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: On,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var In, Dn = function () {
            var e = Mn,
                t = En.filter(yt.e);
            return Cn(Rt.a, {
                className: "pay-index",
                header: {}
            }, void 0, Cn(Yt.a, {
                groups: e,
                modules: t
            }))
        },
        Rn = K.a.injectRoute({
            path: X.a.batchpayment.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(266)]).then(n.bind(null, 2691))
                }
            },
            reducer: {
                name: "batchpayments",
                promise: function () {
                    return Promise.all([n.e(2), n.e(266)]).then(n.bind(null, 2655))
                }
            }
        }),
        Bn = K.a.injectRoute({
            path: "".concat(X.a.initiatepayment.pathname, "/:invite?/:inviteId?"),
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(6), n.e(279)]).then(n.bind(null, 2668))
                }
            },
            reducer: {
                name: "initiatepayment",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(6), n.e(279)]).then(n.bind(null, 2709))
                }
            }
        }),
        zn = K.a.injectRoute({
            path: X.a.recurringpayments.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(96), n.e(297)]).then(n.bind(null, 2685))
                }
            },
            reducer: {
                name: "recurringPayments",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(96), n.e(297)]).then(n.bind(null, 2718))
                }
            }
        }),
        $n = K.a.injectRoute({
            path: X.a.managerecurringpayments.pathname,
            component: {
                promise: function () {
                    return n.e(284).then(n.bind(null, 2689))
                }
            }
        });

    function Un(e, t, n, r) {
        In || (In = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: In,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Fn = X.a.pay,
        Yn = X.a.makeapayment,
        Gn = X.a.paybeneficiarybank,
        qn = X.a.initiatepayment,
        Vn = X.a.batchpayment,
        Qn = X.a.recurringpayments,
        Hn = X.a.managerecurringpayments,
        Wn = X.a.paytoamazonadvertising,
        Jn = X.a.paytoamazontransparency,
        Zn = X.a.batchpaybeneficiarybank,
        Kn = Un(Z.a, {
            to: "/404"
        }),
        Xn = function (e) {
            var t = e.children;
            return Un("div", {
                className: "pay-outlet main-height"
            }, void 0, Un(Z.d, {}, void 0, Un(Z.b, {
                exact: !0,
                path: Fn.pathname,
                component: Dn
            }), Object(yt.e)(Yn) && Ne, Object(yt.e)(Gn) && Ie, Object(yt.e)(Wn) && De, Object(yt.e)(Jn) && Re, Object(yt.e)(qn) && Bn, Object(yt.e)(Vn) && Rn, Object(yt.e)(Qn) && zn, Object(yt.e)(Hn) && $n, Object(yt.e)(Zn) && He, Kn), t)
        };

    function er(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function tr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? er(Object(n), !0).forEach((function (t) {
                nr(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function nr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var rr, or = X.a.withdrawfunds,
        ir = X.a.bankmanagement,
        ar = X.a.autowithdrawal,
        cr = X.a.crossbalance,
        ur = X.a.fundsconsolidationsubaccount,
        lr = X.a.fundsconsolidationmainaccount,
        sr = X.a.fundsconsolidationadminaccount,
        fr = [{
            id: 1
        }],
        dr = [tr(tr({
            groupId: 1,
            type: "linkcard"
        }, or), {}, {
            flip: !0,
            description: "Withdrawal2020Description.Text",
            footer: {
                link: tr(tr({}, ir), {}, {
                    title: "ManageBankAccounts.Text",
                    href: ir.pathname,
                    eligibleKey: ir.key
                })
            }
        }), tr(tr({
            groupId: 1,
            type: "linkcard"
        }, ar), {}, {
            flip: !1
        }), tr(tr({
            groupId: 1,
            type: "linkcard"
        }, cr), {}, {
            description: "ManageCurrenciesDesc.Text",
            flip: !0
        }), tr(tr({
            groupId: 1,
            type: "linkcard"
        }, ur), {}, {
            description: "ConsolidateFundsDesc.Text",
            flip: !0
        }), tr(tr({
            groupId: 1,
            type: "linkcard"
        }, lr), {}, {
            description: "ConsolidateFundsDesc.Text",
            flip: !0
        }), tr(tr({
            groupId: 1,
            type: "linkcard"
        }, sr), {}, {
            description: "ConsolidateFundsDesc.Text",
            flip: !0
        })];

    function pr(e) {
        return (pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function yr(e, t, n, r) {
        rr || (rr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: rr,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function mr(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function vr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function br(e, t) {
        return (br = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function hr(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = Or(e);
            if (t) {
                var o = Or(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return gr(this, n)
        }
    }

    function gr(e, t) {
        return !t || "object" !== pr(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Or(e) {
        return (Or = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var wr, jr = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && br(e, t)
        }(i, e);
        var t, n, r, o = hr(i);

        function i() {
            return mr(this, i), o.apply(this, arguments)
        }
        return t = i, (n = [{
            key: "render",
            value: function () {
                var e = fr,
                    t = dr.filter(yt.e);
                return yr(Rt.a, {
                    className: "withdraw-and-transfer-index",
                    header: {}
                }, void 0, yr(Yt.a, {
                    groups: e,
                    modules: t
                }))
            }
        }]) && vr(t.prototype, n), r && vr(t, r), i
    }(o.Component);

    function Sr(e, t, n, r) {
        wr || (wr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: wr,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var xr = X.a.withdrawandtransfer,
        Nr = X.a.withdrawfunds,
        Tr = X.a.autowithdrawal,
        Ar = X.a.crossbalance,
        _r = X.a.fundsconsolidationsubaccount,
        kr = X.a.fundsconsolidationmainaccount,
        Pr = X.a.fundsconsolidationadminaccount,
        Lr = Sr(Z.a, {
            to: "/404"
        }),
        Mr = function () {
            return Sr("div", {
                className: "withdraw-and-transfer-outlet main-height"
            }, void 0, Sr(Z.d, {}, void 0, Sr(Z.b, {
                exact: !0,
                path: xr.pathname,
                component: jr
            }), Object(yt.e)(Nr) && se, Object(yt.e)(Tr) && fe, Object(yt.e)(Ar) && je, Object(yt.e)(_r) && Ge, Object(yt.e)(kr) && qe, Object(yt.e)(Pr) && Ve, Lr))
        };

    function Er(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Cr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Er(Object(n), !0).forEach((function (t) {
                Ir(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Er(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ir(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Dr, Rr = X.a.transactions,
        Br = X.a.paymentrequesthistory,
        zr = X.a.paymentrequestreceived,
        $r = X.a.reports,
        Ur = X.a.amazonbankstatement,
        Fr = X.a.gpsdconfirmation,
        Yr = X.a.monthlystatement,
        Gr = X.a.goodstandingstatement,
        qr = X.a.digitalfirc,
        Vr = [{
            id: 1
        }, {
            id: 2,
            title: "ReportsAndStatements.Text"
        }],
        Qr = [Cr(Cr({
            groupId: 1,
            type: "linkcard"
        }, zr), {}, {
            flip: !1,
            payer: !0
        }), Cr(Cr({
            groupId: 1,
            type: "linkcard"
        }, Rr), {}, {
            flip: !1,
            payer: !0
        }), Cr(Cr({
            groupId: 1,
            type: "linkcard"
        }, Br), {}, {
            flip: !1
        }), Cr(Cr({
            groupId: 2,
            type: "linkcard"
        }, $r), {}, {
            flip: !1,
            payer: !0
        }), Cr(Cr({
            groupId: 2,
            type: "linkcard"
        }, Ur), {}, {
            flip: !0,
            description: "AmazonBankStatementDescription.Text"
        }), Cr(Cr({
            groupId: 2,
            type: "linkcard"
        }, Fr), {}, {
            flip: !0,
            description: "GPSDConfirmationStatementDescription.Text"
        }), Cr(Cr({
            groupId: 2,
            type: "linkcard"
        }, Yr), {}, {
            flip: !0,
            description: "MonthlyStatementDescription.Text"
        }), Cr(Cr({
            groupId: 2,
            type: "linkcard"
        }, Gr), {}, {
            flip: !0,
            description: "GoodStandingStatementDescription.Text"
        }), Cr(Cr({
            groupId: 2,
            type: "linkcard"
        }, qr), {}, {
            description: "DigitalFircDescription.Text",
            flip: !0
        })];

    function Hr(e, t, n, r) {
        Dr || (Dr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Dr,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Wr, Jr = function () {
            var e = Vr,
                t = Qr.filter(yt.e);
            return Hr(Rt.a, {
                className: "account-activity-outlet",
                header: {}
            }, void 0, Hr(Yt.a, {
                groups: e,
                modules: t
            }))
        },
        Zr = K.a.injectRoute({
            path: ["".concat(X.a.paymentrequestreceived.pathname, "/:prid?/:action?")],
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(6), n.e(12), n.e(293)]).then(n.bind(null, 2682))
                }
            },
            reducer: {
                name: "paymentRequestReceived",
                promise: function () {
                    return Promise.all([n.e(0), n.e(2), n.e(6), n.e(12), n.e(293)]).then(n.bind(null, 2656))
                }
            }
        }),
        Kr = K.a.injectRoute({
            path: X.a.reports.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(0), n.e(12), n.e(299)]).then(n.bind(null, 2710))
                }
            }
        });

    function Xr(e, t, n, r) {
        Wr || (Wr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Wr,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var eo = X.a.accountactivity,
        to = X.a.transactions,
        no = X.a.paymentrequesthistory,
        ro = X.a.reports,
        oo = X.a.paymentrequestreceived,
        io = X.a.amazonbankstatement,
        ao = X.a.gpsdconfirmation,
        co = X.a.monthlystatement,
        uo = X.a.goodstandingstatement,
        lo = X.a.digitalfirc,
        so = Xr(Z.a, {
            to: "/404"
        }),
        fo = function () {
            return Xr("div", {
                className: "account-activity-outlet main-height"
            }, void 0, Xr(Z.d, {}, void 0, Xr(Z.b, {
                exact: !0,
                path: eo.pathname,
                component: Jr
            }), Object(yt.e)(to) && ve, Object(yt.e)(no) && ge, Object(yt.e)(oo) && Zr, Object(yt.e)(ro) && Kr, Object(yt.e)(io) && Xe, Object(yt.e)(ao) && et, Object(yt.e)(co) && tt, Object(yt.e)(uo) && nt, Object(yt.e)(lo) && Ue, so))
        };

    function po(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function yo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? po(Object(n), !0).forEach((function (t) {
                mo(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : po(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function mo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var vo, bo = X.a.bankmanagement,
        ho = X.a.receivingaccounts,
        go = X.a.cardmanagement,
        Oo = X.a.managerecipientaccounts,
        wo = X.a.paymentmethod,
        jo = [{
            id: 1
        }, {
            id: 2
        }],
        So = [yo(yo({
            groupId: 1,
            type: "linkcard"
        }, bo), {}, {
            flip: !1
        }), yo(yo({
            groupId: 1,
            type: "linkcard"
        }, ho), {}, {
            flip: !1
        }), yo(yo({
            groupId: 1,
            type: "linkcard"
        }, go), {}, {
            flip: !1
        }), yo(yo({
            groupId: 1,
            type: "linkcard"
        }, Oo), {}, {
            flip: !1
        }), yo(yo({
            groupId: 2,
            type: "linkcard"
        }, wo), {}, {
            flip: !1,
            payer: !0
        })];

    function xo(e) {
        return (xo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function No(e, t, n, r) {
        vo || (vo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: vo,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function To(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Ao(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _o(e, t) {
        return (_o = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function ko(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = Lo(e);
            if (t) {
                var o = Lo(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return Po(this, n)
        }
    }

    function Po(e, t) {
        return !t || "object" !== xo(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Lo(e) {
        return (Lo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var Mo, Eo = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _o(e, t)
            }(i, e);
            var t, n, r, o = ko(i);

            function i() {
                return To(this, i), o.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "render",
                value: function () {
                    var e = jo,
                        t = So.filter(yt.e);
                    return No(Rt.a, {
                        className: "get-paid-index",
                        header: {}
                    }, void 0, No(Yt.a, {
                        groups: e,
                        modules: t
                    }))
                }
            }]) && Ao(t.prototype, n), r && Ao(t, r), i
        }(o.Component),
        Co = K.a.injectRoute({
            path: X.a.paymentmethod.pathname,
            component: {
                promise: function () {
                    return Promise.all([n.e(2), n.e(291)]).then(n.bind(null, 2679))
                }
            },
            reducer: {
                name: "payinMethods",
                promise: function () {
                    return Promise.all([n.e(2), n.e(291)]).then(n.bind(null, 2657))
                }
            }
        });

    function Io(e, t, n, r) {
        Mo || (Mo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Mo,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Do = X.a.banksandcards,
        Ro = X.a.bankmanagement,
        Bo = X.a.cardmanagement,
        zo = X.a.paymentmethod,
        $o = Io(Z.a, {
            to: "/404"
        }),
        Uo = function () {
            return Io("div", {
                className: "get-paid-outlet"
            }, void 0, Io(Z.d, {}, void 0, Io(Z.b, {
                exact: !0,
                path: Do.pathname,
                component: Eo
            }), Object(yt.e)(Ro) && ue, Object(yt.e)(Bo) && le, Object(yt.e)(zo) && Co, $o))
        };

    function Fo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Yo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Fo(Object(n), !0).forEach((function (t) {
                Go(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fo(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Go(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var qo, Vo = X.a.storemanagement,
        Qo = X.a.contacts,
        Ho = X.a.fundingsources,
        Wo = X.a.referafriend,
        Jo = X.a.businessapplications,
        Zo = [{
            id: 1
        }],
        Ko = [Yo(Yo({
            groupId: 1,
            type: "linkcard"
        }, Vo), {}, {
            flip: !1
        }), Yo(Yo({
            groupId: 1,
            type: "linkcard"
        }, Qo), {}, {
            flip: !1
        }), Yo(Yo({
            groupId: 1,
            type: "linkcard"
        }, Ho), {}, {
            flip: !1
        }), Yo(Yo({
            groupId: 1,
            type: "linkcard"
        }, Jo), {}, {
            flip: !1,
            blank: !0,
            static: !0
        }), Yo(Yo({
            groupId: 1,
            type: "linkcard"
        }, Wo), {}, {
            flip: !1
        })];

    function Xo(e) {
        return (Xo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ei(e, t, n, r) {
        qo || (qo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: qo,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function ti(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ni(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ri(e, t) {
        return (ri = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function oi(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = ai(e);
            if (t) {
                var o = ai(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return ii(this, n)
        }
    }

    function ii(e, t) {
        return !t || "object" !== Xo(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ai(e) {
        return (ai = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var ci, ui = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ri(e, t)
        }(i, e);
        var t, n, r, o = oi(i);

        function i() {
            return ti(this, i), o.apply(this, arguments)
        }
        return t = i, (n = [{
            key: "render",
            value: function () {
                var e = Zo,
                    t = Ko.filter(yt.e);
                return ei(Rt.a, {
                    className: "business-network-index",
                    header: {}
                }, void 0, ei(Yt.a, {
                    groups: e,
                    modules: t
                }))
            }
        }]) && ni(t.prototype, n), r && ni(t, r), i
    }(o.Component);

    function li(e, t, n, r) {
        ci || (ci = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ci,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var si = X.a.businessnetwork,
        fi = X.a.storemanagement,
        di = X.a.contacts,
        pi = X.a.fundingsources,
        yi = X.a.referafriend,
        mi = li(Z.a, {
            to: "/404"
        }),
        vi = function () {
            return li("div", {
                className: "business-network-outlet main-height"
            }, void 0, li(Z.d, {}, void 0, li(Z.b, {
                exact: !0,
                path: si.pathname,
                component: ui
            }), Object(yt.e)(fi) && xe, Object(yt.e)(yi) && we, Object(yt.e)(di) && Se, Object(yt.e)(pi) && Oe, mi))
        };

    function bi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function hi(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? bi(Object(n), !0).forEach((function (t) {
                gi(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bi(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function gi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Oi, wi = X.a.editprofile,
        ji = X.a.securitysettings,
        Si = X.a.fdc,
        xi = X.a.taxinformationstatus,
        Ni = X.a.thirdpartiesaccounting,
        Ti = X.a.language,
        Ai = X.a.notificationsettings,
        _i = [{
            id: 1
        }],
        ki = [hi(hi({
            groupId: 1,
            type: "linkcard"
        }, wi), {}, {
            flip: !1
        }), hi(hi({
            groupId: 1,
            type: "linkcard"
        }, Ai), {}, {
            description: "NotificationSettings.Text",
            flip: !1
        }), hi(hi({
            groupId: 1,
            type: "linkcard"
        }, ji), {}, {
            flip: !1
        }), hi(hi({
            groupId: 1,
            type: "linkcard"
        }, Si), {}, {
            flip: !1
        }), hi(hi({
            groupId: 1,
            type: "linkcard"
        }, Ni), {}, {
            flip: !1
        }), hi(hi({
            groupId: 1,
            type: "linkcard"
        }, xi), {}, {
            flip: !1
        }), hi(hi({
            groupId: 1,
            type: "linkcard"
        }, Ti), {}, {
            flip: !1
        })],
        Pi = n(105),
        Li = Object(s.k)("POST_CHANGE_LANGUAGE");
    var Mi, Ei = function (e) {
        return function (e, t, n, r) {
            Oi || (Oi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps,
                i = arguments.length - 3;
            if (t || 0 === i || (t = {
                    children: void 0
                }), 1 === i) t.children = r;
            else if (i > 1) {
                for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                t.children = a
            }
            if (t && o)
                for (var u in o) void 0 === t[u] && (t[u] = o[u]);
            else t || (t = o || {});
            return {
                $$typeof: Oi,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }("input", {
            className: "language-select-container__search",
            type: "text",
            value: e.value,
            onChange: e.onChange,
            placeholder: y.i.translate("Search.Text")
        })
    };

    function Ci(e, t, n, r) {
        Mi || (Mi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Mi,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Ii, Di = Ci("i", {
            className: "icon-check02"
        }),
        Ri = function (e) {
            var t = e.item,
                n = e.onLanguageClick;
            return Ci("div", {
                className: T()("language-select-container__list-item", {
                    "language-select-container__list-item--selected": t.selected
                }),
                onClick: function () {
                    return n(t.value)
                }
            }, void 0, t.text, t.selected && Di)
        };

    function Bi(e, t, n, r) {
        Ii || (Ii = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Ii,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var zi, $i = function (e) {
            var t = e.languages,
                n = e.onLanguageClick;
            return Bi("div", {
                className: "language-select-container__list"
            }, void 0, t.map((function (e, t) {
                return Bi(Ri, {
                    item: e,
                    onLanguageClick: n
                }, t)
            })))
        },
        Ui = n(60);

    function Fi(e, t, n, r) {
        zi || (zi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: zi,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Yi, Gi = y.i.translate,
        qi = function (e) {
            var t = e.selectedLang,
                n = e.changeLanguageConfirm,
                r = e.closeDialog;
            return Fi("div", {
                className: "language-select-container__footer"
            }, void 0, Fi(Ui.b, {
                disabled: !t,
                className: "confirm-button",
                onClick: n,
                type: "submit"
            }, void 0, Gi("ChangeButton.Text")), Fi(Ui.b, {
                className: "cancel-button",
                theme: "cancel",
                onClick: r
            }, void 0, Gi("CancelButton.Text")))
        };
    n(988);

    function Vi(e) {
        return (Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Qi(e, t, n, r) {
        Yi || (Yi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Yi,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function Hi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Wi(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Hi(Object(n), !0).forEach((function (t) {
                na(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hi(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ji(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Zi(e, t) {
        return (Zi = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ki(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = ta(e);
            if (t) {
                var o = ta(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return Xi(this, n)
        }
    }

    function Xi(e, t) {
        return !t || "object" !== Vi(t) && "function" != typeof t ? ea(e) : t
    }

    function ea(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ta(e) {
        return (ta = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function na(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var ra, oa = y.i.translate,
        ia = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Zi(e, t)
            }(i, e);
            var t, n, r, o = Ki(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), na(ea(t = o.call(this, e)), "handleSearch", (function (e) {
                    t.setState({
                        searchText: e.target.value
                    })
                })), na(ea(t), "filterBySearch", (function (e) {
                    var n = t.state.searchText;
                    return "" === n || (e.value.indexOf(n) > -1 || e.text.indexOf(n) > -1)
                })), na(ea(t), "mapSelectedLanguage", (function (e) {
                    return Wi(Wi({}, e), {}, {
                        selected: e.value === t.state.selectedLang
                    })
                })), na(ea(t), "onLanguageClick", (function (e) {
                    t.setState({
                        selectedLang: e
                    })
                })), t.state = {
                    searchActive: !1,
                    searchText: "",
                    selectedLang: y.i.getLocale()
                }, t.languages = y.i.getSupportedLocales(), t.changeLanguageConfirm = t.changeLanguageConfirm.bind(ea(t)), t.closeDialog = t.closeDialog.bind(ea(t)), t
            }
            return t = i, (n = [{
                key: "closeDialog",
                value: function () {
                    this.props.push(X.a.settings.pathname)
                }
            }, {
                key: "changeLanguageConfirm",
                value: function () {
                    this.props.changeLanguage(this.state.selectedLang), this.closeDialog()
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.state.selectedLang,
                        t = this.languages.filter(this.filterBySearch).map(this.mapSelectedLanguage);
                    return Qi(Pi.b, {
                        className: "language-select",
                        name: "language-select",
                        title: oa("ChangeLanguageTitle.Text"),
                        open: !0,
                        onClose: this.closeDialog
                    }, void 0, Qi("div", {
                        className: "language-select-container"
                    }, void 0, Qi(Ei, {
                        value: this.state.searchText,
                        onChange: this.handleSearch
                    }), Qi($i, {
                        languages: t,
                        onLanguageClick: this.onLanguageClick
                    }), Qi(qi, {
                        selectedLang: e,
                        closeDialog: this.closeDialog,
                        changeLanguageConfirm: this.changeLanguageConfirm
                    })))
                }
            }]) && Ji(t.prototype, n), r && Ji(t, r), i
        }(o.Component);

    function aa(e, t, n, r) {
        ra || (ra = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ra,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var ca, ua = aa(Object(u.c)(null, {
            changeLanguage: function (e) {
                return Object(s.f)({
                    endpoint: "".concat("gw-myaccount/api/v2/user/language", "?language=").concat(e),
                    method: "PUT",
                    nextType: Li,
                    onSuccessAction: function () {
                        window.location.reload(!0)
                    },
                    onFailureAction: function () {
                        window.location.reload(!0)
                    }
                })
            },
            push: At.c
        })(ia), {}),
        la = function () {
            var e = Object(Z.h)().search,
                t = _i,
                n = ki.filter(yt.e);
            return aa(Rt.a, {
                className: "settings-index",
                header: {}
            }, void 0, aa(Yt.a, {
                groups: t,
                modules: n
            }), e.includes("language=true") && ua)
        };
    K.a.injectRoute({
        path: X.a.widgetcenter.pathname,
        component: {
            promise: function () {
                return n.e(309).then(n.bind(null, 2702))
            }
        }
    });

    function sa(e, t, n, r) {
        ca || (ca = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ca,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var fa, da = X.a.settings,
        pa = X.a.editprofile,
        ya = X.a.securitysettings,
        ma = X.a.fdc,
        va = X.a.taxinformationstatus,
        ba = X.a.thirdpartiesaccounting,
        ha = X.a.notificationsettings,
        ga = sa(Z.a, {
            to: "/404"
        }),
        Oa = function () {
            return sa("div", {
                className: "settings-outlet main-height"
            }, void 0, sa(Z.d, {}, void 0, sa(Z.b, {
                exact: !0,
                path: da.pathname,
                component: la
            }), !1, Object(yt.e)(pa) && Be, Object(yt.e)(ya) && ze, Object(yt.e)(ma) && Te.a, Object(yt.e)(ba) && Ee, Object(yt.e)(va) && me, Object(yt.e)(ha) && $e, ga))
        };
    var wa, ja = c.f.div(fa || (fa = function (e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }(["\n\n"])));

    function Sa(e, t, n, r) {
        wa || (wa = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: wa,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var xa, Na = y.i.translate,
        Ta = function () {
            return Sa(ja, {}, void 0, Sa(ee.a, {
                title: Na("NotAllowed.Text"),
                svg: _e.e
            }), Sa(Ae.a, {
                headerText: "403",
                mode: "pageNotFound",
                content: Na("Forbidden.Text")
            }))
        };

    function Aa(e, t, n, r) {
        xa || (xa = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: xa,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var _a, ka = X.a.home,
        Pa = X.a.getpaid,
        La = X.a.earlypayments,
        Ma = X.a.pay,
        Ea = X.a.withdrawandtransfer,
        Ca = X.a.accountactivity,
        Ia = X.a.banksandcards,
        Da = X.a.businessnetwork,
        Ra = X.a.settings,
        Ba = X.a.notifications,
        za = X.a.fees,
        $a = X.a.notallowed,
        Ua = Aa(Z.b, {
            path: "*"
        }, void 0, Aa(Me, {})),
        Fa = function () {
            return Aa("div", {
                className: "main-modules-container"
            }, void 0, Aa(Z.d, {}, void 0, Object(yt.c)(ka.key) && Aa(Z.b, {
                exact: !0,
                path: ka.pathname,
                component: Ft
            }), Object(yt.c)(Pa.key) && Aa(Z.b, {
                path: Pa.pathname,
                component: vn
            }), Object(yt.c)(Ma.key) && Aa(Z.b, {
                path: Ma.pathname,
                component: Xn
            }), Object(yt.c)(Ea.key) && Aa(Z.b, {
                path: Ea.pathname,
                component: Mr
            }), Object(yt.e)(La) && de, Object(yt.c)(Ca.key) && Aa(Z.b, {
                path: Ca.pathname,
                component: fo
            }), Object(yt.c)(Ia.key) && Aa(Z.b, {
                path: Ia.pathname,
                component: Uo
            }), Object(yt.c)(Da.key) && Aa(Z.b, {
                path: Da.pathname,
                component: vi
            }), Object(yt.c)(Ra.key) && Aa(Z.b, {
                path: Ra.pathname,
                component: Oa
            }), Object(yt.e)(Ba) && be, Object(yt.e)(za) && ye.a, Aa(Z.b, {
                exact: !0,
                path: $a.pathname,
                component: Ta
            }), Ua))
        };

    function Ya(e, t, n, r) {
        _a || (_a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: _a,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Ga, qa = Ya(Fa, {}),
        Va = Ya("div", {
            className: "main-header-container"
        }),
        Qa = Ya(Ot, {}),
        Ha = Ya(Fa, {}),
        Wa = function () {
            var e = Object(u.f)(mt.b),
                t = Object(u.f)(mt.d),
                n = Object(u.f)(mt.c);
            return Ya("main", {
                className: T()("myaccount-layout__main", {
                    "myaccount-layout__main--rtl": y.i.isRtl(),
                    "myaccount-layout__main--full-screen-modal-open": t,
                    "myaccount-layout__main--full-screen-modal-close": n
                })
            }, void 0, function () {
                switch (!0) {
                    case st.a:
                        return qa;
                    default:
                        return i.a.createElement(i.a.Fragment, null, e && Va, e && Qa, Ha)
                }
            }())
        };

    function Ja(e, t, n, r) {
        Ga || (Ga = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Ga,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Za, Ka = Ja(Wa, {}),
        Xa = function () {
            return Ka
        },
        ec = n(94),
        tc = n(43);
    var nc, rc = c.f.div(Za || (Za = function (e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n    width: 100%;\n    flex: 1;\n\n    header {\n        position: relative;\n        background: ", ";\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        height: ", ";\n        /* decreasing clicking area from header */\n        padding: 0 ", ";\n\n        @media (min-width: ", ") {\n            /* header desktop */\n            justify-content: flex-end;            \n            padding: 0;\n            height: ", ";\n            border-bottom: 1px solid ", ";\n            background: transparent;\n        }\n    }\n\n    .main-container {\n        display: flex;\n        justify-content: center;\n    }\n\n    .logo {\n        height: 35px;\n        margin: 0 ", ";\n\n        @media (min-width: ", ") {\n            /* logo desktop */\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            height: 50px;\n        }\n    }\n\n    nav {\n        ul { display: flex; }\n        li {            \n            display: flex;\n            align-items: center;\n\n            &:not(:first-child):before {\n                /* separator expect from first child (as background-color) */\n                content: ' ';\n                display: inline-block;\n                /* remove 5px margin due to clicking area */\n                margin: 0 ", ";\n                background: ", ";\n                width: 1px;\n                padding: 15px 0;\n            }\n            .icon-sign-out__new:before { font-size: 20px; }\n        }\n        \n        @media (max-width: ", ") {\n            /* increase clicking area in mobile */\n            li a { \n                color: ", ";\n                padding: ", "; \n\n                &:hover {\n                    color: ", ";\n                }\n            }\n        }\n\n        @media (min-width: ", ") {\n            /* nav desktop */\n            padding: 0 23px;\n\n            li {\n                &:not(:first-child):before {\n                    /* separator expect from first child (as | char) */\n                    content: '|';\n                    margin: 0 12px;\n                    color: ", ";\n                    background: transparent;\n                }\n            }\n        }\n    }\n"])), (function (e) {
            return e.theme["brand-color-cold-gray-900"]
        }), (function (e) {
            return e.theme["ma-page-title-height-moblet"]
        }), (function (e) {
            return "calc(".concat(e.theme["ma-page-title-separator-spacing-moblet"], " - ").concat("8px", ")")
        }), (function (e) {
            return e.theme["screen-sm-min"]
        }), (function (e) {
            return e.theme["ma-page-title-height-desktop"]
        }), (function (e) {
            return e.theme["brand-color-cold-gray-300"]
        }), "8px", (function (e) {
            return e.theme["screen-sm-min"]
        }), (function (e) {
            return "calc(".concat(e.theme["ma-page-title-separator-spacing-moblet"], " - ").concat("8px", ")")
        }), (function (e) {
            return e.theme["brand-color-cold-gray-600"]
        }), (function (e) {
            return e.theme["screen-sm"]
        }), (function (e) {
            return e.theme["white-color"]
        }), "8px", (function (e) {
            return e.theme["white-color"]
        }), (function (e) {
            return e.theme["screen-sm-min"]
        }), (function (e) {
            return e.theme["brand-color-gray-dark"]
        })),
        oc = n(541),
        ic = n.n(oc),
        ac = n(560),
        cc = n.n(ac);

    function uc(e, t, n, r) {
        nc || (nc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: nc,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var lc, sc = y.i.translateFrom(),
        fc = H.a.isMobile,
        dc = uc("div", {
            className: "main-container"
        }, void 0, uc(Wa, {})),
        pc = function () {
            var e = Object(u.e)(),
                t = function () {
                    return e(Object(ec.a)())
                },
                n = fc ? cc.a : ic.a,
                r = fc ? uc(vt.a, {
                    className: "icon-sign-out__new",
                    onClick: t
                }) : uc(vt.a, {
                    onClick: t
                }, void 0, sc("SignOut.Text"));
            return uc(rc, {
                className: "stand-alone-view"
            }, void 0, uc("header", {}, void 0, uc("img", {
                src: n,
                className: "logo"
            }), uc("nav", {}, void 0, uc("ul", {}, void 0, uc("li", {}, void 0, uc(vt.a, {
                onClick: function () {
                    var e = window.location.href,
                        t = Object(tc.c)(e, "outlet");
                    window.location.href = t
                }
            }, void 0, sc("GoToMyAccount.Text"))), uc("li", {}, void 0, r)))), dc)
        };
    var yc, mc = function () {
        var e = Object(u.f)(mt.e),
            t = Object(u.f)(mt.f),
            n = Object(u.e)();
        return function (e, t, n, r) {
            lc || (lc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var o = e && e.defaultProps,
                i = arguments.length - 3;
            if (t || 0 === i || (t = {
                    children: void 0
                }), 1 === i) t.children = r;
            else if (i > 1) {
                for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                t.children = a
            }
            if (t && o)
                for (var u in o) void 0 === t[u] && (t[u] = o[u]);
            else t || (t = o || {});
            return {
                $$typeof: lc,
                type: e,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }("div", {
            className: T()("mobile-nav-cover-new", {
                "mobile-nav-cover-new--close": !e && !t
            }),
            onClick: function () {
                n(Object(b.i)(!1)), n(Object(b.k)(!1))
            }
        })
    };

    function vc(e, t, n, r) {
        yc || (yc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: yc,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var bc = vc("div", {
            className: "sep"
        }),
        hc = vc(Dt, {}),
        gc = vc(Lt, {}),
        Oc = function () {
            var e = Object(u.e)();
            return vc("div", {
                className: "myaccount-logo"
            }, void 0, vc("div", {
                className: "myaccount-logo__start"
            }, void 0, vc("i", {
                className: "icon-close__new",
                onClick: function () {
                    e(Object(b.i)(!1))
                }
            }), bc, hc), vc("div", {
                className: "myaccount-logo__end"
            }, void 0, !d.a.IS_PAYER() && gc, vc(Tt, {
                onClick: function () {
                    e(Object(b.k)(!0)), e(Object(b.i)(!1))
                }
            })))
        },
        wc = n(55);

    function jc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Sc(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? jc(Object(n), !0).forEach((function (t) {
                xc(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jc(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function xc(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Nc, Tc = X.a.home,
        Ac = X.a.getpaid,
        _c = X.a.earlypayments,
        kc = X.a.pay,
        Pc = X.a.withdrawandtransfer,
        Lc = X.a.accountactivity,
        Mc = X.a.banksandcards,
        Ec = X.a.businessnetwork,
        Cc = X.a.settings,
        Ic = n(44);

    function Dc(e, t, n, r) {
        Nc || (Nc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Nc,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Rc, Bc = y.i.translate,
        zc = function (e) {
            var t = e.item,
                n = e.isActive;
            if (t) {
                var r = t.href,
                    o = t.svg,
                    a = t.title,
                    c = t.className;
                return i.a.createElement(i.a.Fragment, null, Dc("div", {
                    className: T()("active-border", {
                        "active-border--active": n
                    })
                }), Dc(vt.a, {
                    href: r,
                    className: T()("link-item", c, {
                        "link-item--no-icon": !o
                    })
                }, void 0, Dc(Ic.a, {
                    icon: o
                }), Dc("span", {
                    className: "text"
                }, void 0, Bc(a))))
            }
        };

    function $c(e, t, n, r) {
        Rc || (Rc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Rc,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function Uc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Fc(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Uc(Object(n), !0).forEach((function (t) {
                Yc(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uc(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Yc(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Gc(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return qc(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qc(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function qc(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var Vc, Qc = y.i.translate,
        Hc = $c("i", {
            className: "icon-angle-down"
        }),
        Wc = function (e) {
            var t = e.item;
            if (t) {
                var n = Object(Z.h)(),
                    r = Gc(Object(o.useState)(!1), 2),
                    i = r[0],
                    a = r[1];
                Object(o.useEffect)((function () {
                    i || a(n.pathname.includes(t.path))
                }), [n]);
                return $c("div", {
                    className: T()("drop-down-item", {
                        "drop-down-item--open": i
                    })
                }, void 0, $c("div", {
                    className: "drop-down-item__title",
                    onClick: function () {
                        return a(!i)
                    }
                }, void 0, $c("span", {}, void 0, $c("i", {
                    className: t.icon
                }), $c("span", {
                    className: "text"
                }, void 0, Qc(t.title))), Hc), t.childRoutes && $c("section", {
                    className: "drop-down-item__dropdown"
                }, void 0, t.childRoutes.map((function (e, t) {
                    return $c(nu, {
                        item: Fc(Fc({}, e), {}, {
                            icon: null
                        })
                    }, t)
                }))))
            }
        };

    function Jc(e, t, n, r) {
        Vc || (Vc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Vc,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Zc, Kc = y.i.translate,
        Xc = function (e) {
            var t = e.item;
            if (t) {
                var n = Object(u.e)(),
                    r = t.title,
                    o = t.svg;
                return Jc("div", {
                    className: "signout-item",
                    onClick: function () {
                        return n(Object(ec.a)())
                    }
                }, void 0, Jc(Ic.a, {
                    icon: o
                }), Jc("span", {
                    className: "text"
                }, void 0, Kc(r)))
            }
        };

    function eu(e, t, n, r) {
        Zc || (Zc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Zc,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var tu, nu = function (e) {
        var t = e.item;
        if (t) {
            var n = Object(u.f)((function (e) {
                    return Object(bt.c)(e, t.pathname)
                })),
                r = "dropdown" === t.type && t.childRoutes && 1 === t.childRoutes.length ? "link" : t.type;
            return eu("div", {
                className: T()("nav-item", "nav-item--".concat(r), {
                    "nav-item--active": n,
                    "nav-item--rtl": y.i.isRtl()
                }),
                "data-testid": "nav-item-".concat(t.name)
            }, void 0, function (e) {
                switch (e.type) {
                    case "dropdown":
                        return e.childRoutes && 1 === e.childRoutes.length ? eu(zc, {
                            item: e,
                            isActive: n
                        }) : eu(Wc, {
                            item: e,
                            isActive: n
                        });
                    case "signout":
                        return eu(Xc, {
                            item: e
                        });
                    case "link":
                    case "externalLink":
                    default:
                        return eu(zc, {
                            item: e,
                            isActive: n
                        })
                }
            }(t))
        }
    };

    function ru(e, t, n, r) {
        tu || (tu = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: tu,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function ou(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function iu(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ou(Object(n), !0).forEach((function (t) {
                au(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ou(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function au(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var cu, uu = function () {
            var e, t, n, r;
            return ru("div", {
                className: "nav-list"
            }, void 0, (e = d.a, t = e.IS_PAYER() && e.activeCategories && -1 !== e.activeCategories.indexOf(1) ? [{
                type: "externalLink",
                title: "AccountHome.Text",
                icon: "icon-home__new",
                svg: _e.Z,
                className: "separated-link",
                href: "".concat(Object(wc.a)("myaccount"), "?skipselectionpage=1"),
                payer: !0,
                static: !0
            }] : [], n = H.a.isTablet ? [{
                type: "signout",
                title: "SignOut.Text",
                icon: "icon-sign_out",
                svg: _e.Tb,
                static: !0,
                payer: !0
            }] : [], r = H.a.isTablet ? [Sc({
                type: "link"
            }, Cc)] : [], [Sc({
                type: "link"
            }, Tc), Sc({
                type: "link"
            }, Ac), Sc({
                type: "link"
            }, kc), Sc({
                type: "link"
            }, Pc), Sc({
                type: "link"
            }, _c), Sc({
                type: "link"
            }, Lc), Sc({
                type: "link"
            }, Mc), Sc({
                type: "link"
            }, Ec)].concat(r, t, n)).map((function (e) {
                if (e.static) return e;
                if (!d.a.IS_PAYER() || e.payer) {
                    var t = Object(yt.c)(e.key);
                    return t && iu(iu(iu({}, e), t), {}, {
                        href: t.redirectTo
                    })
                }
            })).filter((function (e) {
                return e
            })).map((function (e, t) {
                return ru(nu, {
                    item: e
                }, t)
            })))
        },
        lu = n(63),
        su = n(95);

    function fu() {
        return (fu = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function du(e, t, n, r) {
        cu || (cu = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: cu,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var pu, yu = y.i.translate,
        mu = du("span", {
            className: "separator"
        }, void 0, "|"),
        vu = du("br", {}),
        bu = du("span", {
            className: "separator"
        }, void 0, "|"),
        hu = function () {
            var e = yu("PrivacyLink.Text"),
                t = yu("PayerTermsAndConditionsLink.Text"),
                n = yu("ReceiverTermsAndConditionsLink.Text"),
                r = "com" !== su.b && yu("TLDLicense.".concat(y.d, ".").concat(su.b));
            return du("footer", {}, void 0, du("p", {
                className: "title"
            }, void 0, du("a", {
                href: e,
                target: "_blank"
            }, void 0, yu("Privacy.Text")), mu, du("a", {
                href: d.a.IS_PAYER() ? t : n,
                target: "_blank"
            }, void 0, yu("Terms.Text")), r && i.a.createElement(i.a.Fragment, null, vu, i.a.createElement("span", fu({
                className: "text"
            }, Object(y.h)(r)))), bu, du(lu.a, {
                to: X.a.fees.pathname
            }, void 0, yu("Fees.Text"))), i.a.createElement("p", fu({
                className: "text"
            }, Object(y.h)(yu("PayoneerInc.Text")))))
        };

    function gu(e, t, n, r) {
        pu || (pu = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: pu,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Ou, wu = gu(Oc, {}),
        ju = gu(hu, {}),
        Su = function () {
            var e = Object(u.e)(),
                t = Object(u.f)(mt.d),
                n = Object(u.f)(mt.c),
                r = Object(u.f)(mt.e);
            return gu("nav", {
                className: T()("myaccount-layout__navbar", {
                    "myaccount-layout__navbar--rtl": y.i.isRtl(),
                    "myaccount-layout__navbar--open": r,
                    "myaccount-layout__navbar--rtl--open": y.i.isRtl() && r,
                    "myaccount-layout__navbar--full-screen-modal-open": t,
                    "myaccount-layout__navbar--full-screen-modal-close": n
                })
            }, void 0, gu("main", {}, void 0, wu, gu(uu, {
                logoutAction: function () {
                    return e(Object(ec.a)())
                }
            })), ju)
        };

    function xu(e, t, n, r) {
        Ou || (Ou = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Ou,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Nu, Tu = xu(Lt, {}),
        Au = function () {
            var e = Object(u.e)();
            return xu("div", {
                className: "right-pane-actions"
            }, void 0, xu("div", {
                className: "right-pane-actions__start"
            }, void 0, !d.a.IS_PAYER() && Tu, xu("i", {
                className: X.a.settings.icon,
                onClick: function () {
                    return e(Object(At.c)(X.a.settings.pathname))
                }
            })), xu("div", {
                className: "right-pane-actions__end"
            }, void 0, xu("span", {
                className: "sign_out",
                onClick: function () {
                    return e(Object(ec.a)())
                }
            }, void 0, y.i.translate("SignOut.Text")), xu("i", {
                className: "icon-close__new",
                onClick: function () {
                    return e(Object(b.k)(!1))
                }
            })))
        };

    function _u(e, t, n, r) {
        Nu || (Nu = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Nu,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var ku, Pu = y.i.translate,
        Lu = _u(Tt, {
            large: !0
        }),
        Mu = _u("br", {}),
        Eu = function () {
            var e = d.a.firstName,
                t = d.a.lastName,
                n = d.a.customerId,
                r = d.a.lastLogin,
                o = d.a.chType,
                i = d.a.companyName;
            return _u("div", {
                className: T()("user-details", {})
            }, void 0, Lu, _u("div", {
                className: "user-name",
                "data-testid": "user-name"
            }, void 0, e, " ", t), 2 === o && _u("div", {
                className: "user-name user-company",
                "data-testid": "user-company"
            }, void 0, i), _u("div", {
                className: "customer-id",
                "data-testid": "customer-id"
            }, void 0, "".concat(Pu("CustomerId.Text"), ": ").concat(n)), r && _u("div", {
                className: "last-login",
                "data-testid": "last-login"
            }, void 0, "".concat(Pu("LastLogin.Text"), ": ").concat(y.i.formatDate(r), ","), Mu, "".concat(y.i.format(r, "12hours", !0), " ").concat(Pu("EST.Text"))))
        };

    function Cu(e, t, n, r) {
        ku || (ku = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ku,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }

    function Iu(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Du(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Du(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Du(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var Ru, Bu = y.i.translate,
        zu = Cu("i", {
            className: "icon-contact__new"
        }),
        $u = function () {
            var e = d.a.supportLink,
                t = Iu(Object(o.useState)((function () {
                    return d.a.isVIP ? "EmailOurVIPCustomer.Text" : "EmailOurCustomer.Text"
                })), 1)[0],
                n = Iu(Object(o.useState)((function () {
                    return d.a.isVIP ? "VIPSupportLinkText.Text" : "SupportLink.Text"
                })), 1)[0];
            return Cu("div", {
                className: "user-contacts"
            }, void 0, Cu("div", {
                className: "user-contacts__container"
            }, void 0, zu, Cu("p", {}, void 0, Bu(t)), Cu(vt.a, {
                href: e,
                className: "customer-care",
                "data-testid": "support-center-link",
                target: "_blank"
            }, void 0, Bu(n))))
        },
        Uu = n(561),
        Fu = n.n(Uu),
        Yu = n(562),
        Gu = n.n(Yu),
        qu = n(563),
        Vu = n.n(qu);

    function Qu(e, t, n, r) {
        Ru || (Ru = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Ru,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Hu, Wu = y.i.translate,
        Ju = Qu("img", {
            src: Fu.a
        }),
        Zu = Qu("img", {
            src: Gu.a
        }),
        Ku = Qu("img", {
            src: Vu.a
        }),
        Xu = function () {
            var e = d.a.country,
                t = Wu("IOSAppLink.Text"),
                n = Wu("AndroidApkLink.Text"),
                r = Wu("AndroidLink.Text");
            return Qu("footer", {
                className: "right-pane-footer"
            }, void 0, Qu("a", {
                href: t,
                target: "_blank",
                "data-testid": "ios-app-link"
            }, void 0, Ju), e && e.toLowerCase() === "CN".toLowerCase() && Qu("a", {
                href: n,
                download: !0,
                rel: "noopener noreferrer",
                "data-testid": "android-apk-link",
                className: "android-apk-link"
            }, void 0, Zu), Qu("a", {
                href: r,
                target: "_blank",
                "data-testid": "android-app-link"
            }, void 0, Ku))
        };

    function el(e, t, n, r) {
        Hu || (Hu = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Hu,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var tl, nl = el(Au, {}),
        rl = el(Eu, {}),
        ol = el($u, {}),
        il = el(Xu, {}),
        al = function () {
            var e = Object(u.f)(mt.f),
                t = Object(u.f)(mt.d),
                n = Object(u.f)(mt.c);
            return el("div", {
                className: T()("myaccount-layout__right-pane", {
                    "myaccount-layout__right-pane--rtl": y.i.isRtl(),
                    "myaccount-layout__right-pane--open": e,
                    "myaccount-layout__right-pane--rtl--open": y.i.isRtl() && e,
                    "myaccount-layout__right-pane--full-screen-modal-open": t,
                    "myaccount-layout__right-pane--full-screen-modal-close": n
                })
            }, void 0, nl, rl, ol, !d.a.IS_PAYER() && il)
        };

    function cl(e, t, n, r) {
        tl || (tl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: tl,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var ul, ll = cl(mc, {}),
        sl = cl(Su, {}),
        fl = cl(Wa, {}),
        dl = cl(al, {}),
        pl = function () {
            return i.a.createElement(i.a.Fragment, null, ll, sl, fl, dl)
        };
    n(989);

    function yl(e, t, n, r) {
        ul || (ul = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: ul,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var ml, vl = yl(Xa, {}),
        bl = yl(pc, {}),
        hl = yl(pl, {}),
        gl = function () {
            ! function (e) {
                Object(yt.f)(pt.a), e(Object(b.b)()), st.a || (e(Object(dt.a)()), d.a.IS_PAYER() || setInterval((function () {
                    e(Object(dt.a)())
                }), 3e5))
            }(Object(u.e)());
            return yl("div", {
                className: T()("myaccount-layout", {
                    "myaccount-layout--rtl": y.i.isRtl()
                })
            }, void 0, function () {
                switch (!0) {
                    case st.a:
                        return vl;
                    case ft:
                        return bl;
                    default:
                        return hl
                }
            }())
        },
        Ol = K.a.injectRoute({
            path: "/internal",
            component: {
                promise: function () {
                    return n.e(281).then(n.bind(null, 2712))
                }
            }
        }),
        wl = K.a.injectRoute({
            path: "/secure",
            component: {
                promise: function () {
                    return n.e(300).then(n.bind(null, 2690))
                }
            }
        });
    var jl, Sl = function () {
            return function (e, t, n, r) {
                ml || (ml = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps,
                    i = arguments.length - 3;
                if (t || 0 === i || (t = {
                        children: void 0
                    }), 1 === i) t.children = r;
                else if (i > 1) {
                    for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
                    t.children = a
                }
                if (t && o)
                    for (var u in o) void 0 === t[u] && (t[u] = o[u]);
                else t || (t = o || {});
                return {
                    $$typeof: ml,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }(Z.d, {}, void 0, P.a && Ol, k.a && wl)
        },
        xl = K.a.injectRoute({
            path: "/verifyemail",
            component: {
                promise: function () {
                    return n.e(308).then(n.bind(null, 2713))
                }
            },
            reducer: {
                name: "verifyEmail",
                promise: function () {
                    return n.e(308).then(n.bind(null, 2658))
                }
            }
        });
    n(990);

    function Nl(e, t, n, r) {
        jl || (jl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: jl,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Tl, Al = Nl("div", {
            className: "myaccount-restricted-layout__logo"
        }),
        _l = Nl("i", {
            className: "icon-sign-out__new"
        }),
        kl = {
            logoutAction: ec.a,
            replace: At.d
        };

    function Pl(e, t, n, r) {
        Tl || (Tl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Tl,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Ll, Ml = Pl(Object(u.c)((function () {
            return {}
        }), kl)((function (e) {
            var t = e.verifyEmail,
                n = e.logoutAction,
                r = e.replace;
            return Object(o.useEffect)((function () {
                t && r("/verifyemail")
            }), []), Nl("div", {
                className: T()("myaccount-restricted-layout", {
                    "myaccount-restricted-layout--rtl": y.i.isRtl()
                })
            }, void 0, Al, Nl("div", {
                className: "myaccount-restricted-layout__log-out",
                onClick: n
            }, void 0, _l, Nl("span", {
                className: "signout-text"
            }, void 0, y.i.translate("SignOut.Text"))), t && xl)
        })), {
            verifyEmail: !0
        }),
        El = Pl(Sl, {}),
        Cl = Pl(lt, {}),
        Il = Pl(gl, {}),
        Dl = function () {
            if (d.a.IS_PAYER() && d.a.isEmailNotVerified) return Ml;
            switch (!0) {
                case k.a:
                case P.a:
                case L:
                    return El;
                case A.b:
                    return Cl;
                default:
                    return Il
            }
        };
    n(578), n(572);

    function Rl(e, t, n, r) {
        Ll || (Ll = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Ll,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    var Bl = Rl(j.a, {}),
        zl = Rl(Dl, {}),
        $l = Rl(Q, {}),
        Ul = Rl(w.b, {}),
        Fl = Rl(O, {}),
        Yl = function (e) {
            var t = e.history,
                n = e.ready;
            return n ? n && function (e) {
                var t = !1;
                return [_].forEach((function (n) {
                    t = n(e)
                })), t
            }(d.a) ? null : (H.a && b.c && Object(b.c)(H.a), Rl("div", {
                className: T()("myaccount", {
                    "myaccount--new": !A.b,
                    "myaccount--ios": /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && !window.MSStream
                })
            }, void 0, Rl(m.a, {
                history: t
            }, void 0, zl), $l, Rl(v.a, {
                refreshTokenUrl: x.d.TOKEN
            }), Ul, Rl(S.a, {
                showSuccessToast: w.e,
                showErrorToast: w.d,
                locale: f.a.locale
            }), Fl)) : Bl
        },
        Gl = Object(u.c)((function (e) {
            return {
                ready: s.l.systemReady(e) || A.b || k.a || P.a || L
            }
        }), {
            deviceOrientation: b.c
        })(Yl),
        ql = n(130),
        Vl = n(50),
        Ql = n(564);

    function Hl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Wl(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Hl(Object(n), !0).forEach((function (t) {
                Jl(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hl(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Jl(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Zl, Kl = {
            rem: function (e) {
                return e / 16 + "rem"
            }
        },
        Xl = Wl(Wl({}, n.n(Ql).a), Kl);
    n(993);

    function es(e, t, n, r) {
        Zl || (Zl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var o = e && e.defaultProps,
            i = arguments.length - 3;
        if (t || 0 === i || (t = {
                children: void 0
            }), 1 === i) t.children = r;
        else if (i > 1) {
            for (var a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c + 3];
            t.children = a
        }
        if (t && o)
            for (var u in o) void 0 === t[u] && (t[u] = o[u]);
        else t || (t = o || {});
        return {
            $$typeof: Zl,
            type: e,
            key: void 0 === n ? null : "" + n,
            ref: null,
            props: t,
            _owner: null
        }
    }
    l.b.location.state = {};
    var ts, ns, rs, os = es(u.a, {
        store: l.a
    }, void 0, es(c.d, {
        theme: Xl
    }, void 0, es(Gl, {
        history: l.b
    })));
    switch (!0) {
        case A.b:
            d.a.locale = Object(A.d)(), y.i.initialize(d.a.locale, {}), y.j.initializeNumeral(d.a.locale);
            break;
        case k.a:
        case P.a:
            var is = tc.a.locale || y.e.defaultLocale;
            y.i.initialize(is, {}), y.j.initializeNumeral(is), P.a && (d.a.customerId = tc.a.accountHolderId, d.a.locale = is, d.a.langiId = Object(A.c)());
            break;
        default:
            d.a.appStore = l.a, d.a.gtm = p.a, Vl.a.needsAuthorization() && Vl.a.setValidateTokenOnWindowFocus((function () {
                l.a.dispatch(ec.b)
            }));
            var as = "webview" === tc.a.outlet;
            l.a.dispatch(Object(s.h)({
                initialize: (ts = {}, ns = ql.c, rs = as ? "".concat(f.a.getUserUrl, "?skipEligibilityChecks=true") : f.a.getUserUrl, ns in ts ? Object.defineProperty(ts, ns, {
                    value: rs,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : ts[ns] = rs, ts)
            }))
    }
    Object(a.render)(os, document.getElementById(A.b ? "widgetContainer" : "container") || document.getElementById("container"))
}], [[994, 100, 269, 307, 278]]]);
