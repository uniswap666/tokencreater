(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    312: function (t, e, r) {
        "use strict";
        r.r(e);
        var s = {name: "Footer"}, a = r(40), o = Object(a.a)(s, (function () {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("b-container", {
                staticClass: "footer",
                attrs: {fluid: ""}
            }, [r("b-row", {staticClass: "bg-dark text-light py-4"}, [r("b-col", {
                attrs: {
                    lg: "12",
                    xl: "8",
                    "offset-xl": "2"
                }
            }, [r("b-row", [r("b-col", {attrs: {lg: "4"}}, [r("b-list-group", {attrs: {flush: ""}}, [r("b-list-group-item", {
                staticClass: "text-light",
                attrs: {to: "/"}
            }, [t._v("\n                            BEP20 Token Generator\n                        ")]), t._v(" "), r("b-list-group-item", {
                staticClass: "text-light",
                attrs: {to: "/docs/"}
            }, [t._v("\n                            Documentation\n                        ")])], 1)], 1), t._v(" "), r("b-col", {attrs: {lg: "4"}}, [r("b-list-group", {attrs: {flush: ""}}, [r("b-list-group-item", {
                staticClass: "text-light",
                attrs: {to: "/create-token/"}
            }, [t._v("\n                            Create BEP20 Token\n                        ")])], 1)], 1), t._v(" "), r("b-col", {attrs: {lg: "4"}}, [r("b-list-group", {attrs: {flush: ""}}, [r("b-list-group-item", {
                directives: [{
                    name: "b-modal",
                    rawName: "v-b-modal.modal-terms",
                    modifiers: {"modal-terms": !0}
                }]
            }, [r("small", [t._v("Terms of Use")])])], 1)], 1)], 1)], 1), t._v(" "), r("b-col", {
                attrs: {
                    lg: "12",
                    xl: "8",
                    "offset-xl": "2"
                }
            }, [r("hr")], 1)], 1), t._v(" "), r("b-modal", {
                attrs: {
                    id: "modal-terms",
                    title: "Terms of Use",
                    size: "lg",
                    centered: "",
                    "hide-footer": ""
                }
            }, [r("b-embed", {
                attrs: {
                    type: "iframe",
                    aspect: "4by3",
                    src: "/bep20-generator-terms.html",
                    allow: "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",
                    allowfullscreen: ""
                }
            })], 1)], 1)
        }), [], !1, null, null, null);
        e.default = o.exports
    }
}]);
