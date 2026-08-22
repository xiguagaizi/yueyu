Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        e = require("../common/relation"),
        a = require("../common/utils"),
        n = [];
    (0, t.VantComponent)({
        field: !0,
        classes: ["title-class"],
        relation: (0, e.useChildren)("dropdown-item", (function() {
            this.updateItemListData()
        })),
        props: {
            activeColor: {
                type: String,
                observer: "updateChildrenData"
            },
            overlay: {
                type: Boolean,
                value: !0,
                observer: "updateChildrenData"
            },
            zIndex: {
                type: Number,
                value: 10
            },
            duration: {
                type: Number,
                value: 200,
                observer: "updateChildrenData"
            },
            direction: {
                type: String,
                value: "down",
                observer: "updateChildrenData"
            },
            safeAreaTabBar: {
                type: Boolean,
                value: !1
            },
            closeOnClickOverlay: {
                type: Boolean,
                value: !0,
                observer: "updateChildrenData"
            },
            closeOnClickOutside: {
                type: Boolean,
                value: !0
            }
        },
        data: {
            itemListData: []
        },
        beforeCreate: function() {
            var t = (0, a.getSystemInfoSync)().windowHeight;
            this.windowHeight = t, n.push(this)
        },
        destroyed: function() {
            var t = this;
            n = n.filter((function(e) {
                return e !== t
            }))
        },
        methods: {
            updateItemListData: function() {
                this.setData({
                    itemListData: this.children.map((function(t) {
                        return t.data
                    }))
                })
            },
            updateChildrenData: function() {
                this.children.forEach((function(t) {
                    t.updateDataFromParent()
                }))
            },
            toggleItem: function(t) {
                this.children.forEach((function(e, a) {
                    var n = e.data.showPopup;
                    a === t ? e.toggle() : n && e.toggle(!1, {
                        immediate: !0
                    })
                }))
            },
            close: function() {
                this.children.forEach((function(t) {
                    t.toggle(!1, {
                        immediate: !0
                    })
                }))
            },
            getChildWrapperStyle: function() {
                var t = this,
                    e = this.data,
                    n = e.zIndex,
                    o = e.direction;
                return (0, a.getRect)(this, ".van-dropdown-menu").then((function(e) {
                    var i = e.top,
                        r = void 0 === i ? 0 : i,
                        d = e.bottom,
                        c = "down" === o ? void 0 === d ? 0 : d : t.windowHeight - r,
                        l = "z-index: ".concat(n, ";");
                    return l += "down" === o ? "top: ".concat((0, a.addUnit)(c), ";") : "bottom: ".concat((0, a.addUnit)(c), ";")
                }))
            },
            onTitleTap: function(t) {
                var e = this,
                    a = t.currentTarget.dataset.index;
                this.children[a].data.disabled || (n.forEach((function(t) {
                    t && t.data.closeOnClickOutside && t !== e && t.close()
                })), this.toggleItem(a))
            }
        }
    });