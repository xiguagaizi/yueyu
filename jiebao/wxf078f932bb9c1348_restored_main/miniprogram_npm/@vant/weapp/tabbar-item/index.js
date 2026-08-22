Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = require("../common/component"),
        t = require("../common/relation");
    (0, e.VantComponent)({
        props: {
            info: null,
            name: null,
            icon: String,
            dot: Boolean,
            url: {
                type: String,
                value: ""
            },
            linkType: {
                type: String,
                value: "redirectTo"
            },
            iconPrefix: {
                type: String,
                value: "van-icon"
            }
        },
        relation: (0, t.useParent)("tabbar"),
        data: {
            active: !1,
            activeColor: "",
            inactiveColor: ""
        },
        methods: {
            onClick: function() {
                var e = this.parent;
                if (e) {
                    var t = e.children.indexOf(this),
                        i = this.data.name || t;
                    i !== this.data.active && e.$emit("change", i)
                }
                var a = this.data,
                    n = a.url,
                    o = a.linkType;
                if (n && wx[o]) return wx[o]({
                    url: n
                });
                this.$emit("click")
            },
            updateFromParent: function() {
                var e = this.parent;
                if (e) {
                    var t = e.children.indexOf(this),
                        i = e.data,
                        a = this.data,
                        n = (a.name || t) === i.active,
                        o = {};
                    n !== a.active && (o.active = n), i.activeColor !== a.activeColor && (o.activeColor = i.activeColor), i.inactiveColor !== a.inactiveColor && (o.inactiveColor = i.inactiveColor), Object.keys(o).length > 0 && this.setData(o)
                }
            }
        }
    });