Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = require("../common/component"),
        o = require("../mixins/button"),
        n = require("../common/color"),
        e = require("../common/utils");
    (0, t.VantComponent)({
        mixins: [o.button],
        classes: ["cancle-button-class", "confirm-button-class"],
        props: {
            show: {
                type: Boolean,
                observer: function(t) {
                    !t && this.stopLoading()
                }
            },
            title: String,
            message: String,
            theme: {
                type: String,
                value: "default"
            },
            confirmButtonId: String,
            className: String,
            customStyle: String,
            asyncClose: Boolean,
            messageAlign: String,
            beforeClose: null,
            overlayStyle: String,
            useSlot: Boolean,
            useTitleSlot: Boolean,
            useConfirmButtonSlot: Boolean,
            useCancelButtonSlot: Boolean,
            showCancelButton: Boolean,
            closeOnClickOverlay: Boolean,
            confirmButtonOpenType: String,
            width: null,
            zIndex: {
                type: Number,
                value: 2e3
            },
            confirmButtonText: {
                type: String,
                value: "确认"
            },
            cancelButtonText: {
                type: String,
                value: "取消"
            },
            confirmButtonColor: {
                type: String,
                value: n.RED
            },
            cancelButtonColor: {
                type: String,
                value: n.GRAY
            },
            showConfirmButton: {
                type: Boolean,
                value: !0
            },
            overlay: {
                type: Boolean,
                value: !0
            },
            transition: {
                type: String,
                value: "scale"
            }
        },
        data: {
            loading: {
                confirm: !1,
                cancel: !1
            },
            callback: function() {}
        },
        methods: {
            onConfirm: function() {
                this.handleAction("confirm")
            },
            onCancel: function() {
                this.handleAction("cancel")
            },
            onClickOverlay: function() {
                this.close("overlay")
            },
            close: function(t) {
                var o = this;
                this.setData({
                    show: !1
                }), wx.nextTick((function() {
                    o.$emit("close", t);
                    var n = o.data.callback;
                    n && n(t, o)
                }))
            },
            stopLoading: function() {
                this.setData({
                    loading: {
                        confirm: !1,
                        cancel: !1
                    }
                })
            },
            handleAction: function(t) {
                var o, n = this;
                this.$emit(t, {
                    dialog: this
                });
                var i = this.data,
                    l = i.asyncClose,
                    a = i.beforeClose;
                l || a ? (this.setData(((o = {})["loading.".concat(t)] = !0, o)), a && (0, e.toPromise)(a(t)).then((function(o) {
                    o ? n.close(t) : n.stopLoading()
                }))) : this.close(t)
            }
        }
    });