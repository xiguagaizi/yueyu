Component({
        properties: {
            text: {
                type: String,
                value: "点击「添加小程序」，方便下次访问"
            },
            type: {
                type: String,
                value: "bar"
            },
            show: {
                type: Boolean,
                value: !1,
                observer: function(t) {
                    t && this.show(), !t && this.close()
                }
            },
            showDetail: {
                type: Boolean,
                value: !1,
                observer: function(t) {
                    t && this.showDetail()
                }
            },
            auto: {
                type: Boolean,
                value: !1
            },
            background: {
                type: String,
                value: "#fff"
            },
            color: {
                type: String,
                value: "#000"
            },
            customNavbar: {
                type: Boolean,
                value: !1
            },
            logo: {
                type: String
            },
            name: {
                type: String
            },
            delay: {
                type: Number,
                value: 0
            },
            duration: {
                type: Number,
                value: 5
            },
            backdrop: {
                type: Boolean,
                value: !1
            }
        },
        data: {
            showHint: !1,
            showBackdrop: !1,
            position: {
                top: 0,
                right: 0
            },
            timer: null
        },
        lifetimes: {
            attached: function() {
                this._attached()
            }
        },
        pageLifetimes: {
            resize: function(t) {
                this._updatePosition()
            }
        },
        attached: function() {
            this._attached()
        },
        methods: {
            onTapBackdrop: function() {
                this.close()
            },
            onTapClose: function() {
                this.close()
            },
            show: function() {
                var t = this;
                this.setData({
                    show: !0,
                    showHint: !0,
                    showBackdrop: this.data.backdrop || "card" === this.data.type
                }), "bar" === this.data.type && this.data.duration > 0 && (this.data.timer = setTimeout((function() {
                    "bar" === t.data.type && t.close()
                }), 1e3 * this.data.duration)), this.triggerEvent("show")
            },
            close: function() {
                this.setData({
                    show: !1,
                    showHint: !1,
                    showBackdrop: !1
                }), wx.setStorageSync("PIN_PROMPT_DATE", Date.now()), this.triggerEvent("close")
            },
            showDetail: function() {
                this.data.timer && clearTimeout(this.data.timer), this.setData({
                    show: !0,
                    showHint: !0,
                    showBackdrop: !0,
                    type: "card"
                }), this.triggerEvent("showDetail")
            },
            shouldShow: function() {
                return this.data.auto ? !wx.getStorageSync("PIN_PROMPT_DATE") : this.data.show
            },
            _attached: function() {
                var t = this;
                this._updatePosition(), this.shouldShow() && setTimeout((function() {
                    t.show()
                }), 1e3 * this.data.delay)
            },
            _updatePosition: function() {
                var t = this,
                    e = !!wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : {};
                wx.getSystemInfo({
                    success: function(o) {
                        t.setData({
                            position: {
                                top: t.data.customNavbar ? e.bottom : 0,
                                right: o.screenWidth - e.left - 3 * e.width / 4
                            }
                        })
                    }
                })
            }
        }
    });