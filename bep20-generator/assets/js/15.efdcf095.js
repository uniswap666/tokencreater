(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
    313: function (a, t, e) {
        "use strict";
        e.r(t);
        var n = {name: "Header", props: {page: {type: String, default: null}}}, r = e(40),
            o = Object(r.a)(n, (function () {
                var a = this, t = a.$createElement, e = a._self._c || t;
                return e("b-navbar", {
                    attrs: {
                        toggleable: "md",
                        type: "dark",
                        variant: "dark"
                    }
                }, [e("b-navbar-toggle", {attrs: {target: "nav_collapse"}}), a._v(" "), e("b-navbar-brand", {attrs: {to: "/"}}, [e("b-icon-house")], 1), a._v(" "), e("b-collapse", {
                    attrs: {
                        "is-nav": "",
                        id: "nav_collapse"
                    }
                }, [e("b-navbar-nav", [e("b-nav-item", {
                    attrs: {
                        to: "/create-token/",
                        active: "Generator" === a.page
                    }
                }, [a._v("Create BEP20 Token")])], 1), a._v(" "), e("b-navbar-nav", {staticClass: "ml-auto"}, [e("b-nav-item", {
                    attrs: {
                        to: "/",
                        active: "Home" === a.page
                    }
                }, [a._v("Home")]), a._v(" "), e("b-nav-item", {
                    attrs: {
                        to: "/docs/",
                        active: "Docs" === a.page
                    }
                }, [a._v("Docs")])], 1)], 1)], 1)
            }), [], !1, null, null, null);
        t.default = o.exports
    }
}]);
