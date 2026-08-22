Component({
        properties: {
            title: {
                type: String
            },
            desc: {
                type: String
            },
            path: {
                type: String
            },
            background: {
                type: String,
                value: "red"
            },
            backgroundImage: {
                type: String
            },
            borderRadius: {
                type: String,
                value: "20rpx"
            },
            titleColor: {
                type: String,
                value: ""
            },
            descColor: {
                type: String,
                value: ""
            },
            size: {
                type: String,
                value: "normal"
            },
            icon: {
                type: String,
                value: ""
            }
        },
        data: {},
        methods: {
            nav: function() {
                var t = this,
                    e = t.data,
                    i = e.path,
                    n = e.icon,
                    r = e.title;
                wx.navigateTo({
                    url: i,
                    success: function() {
                        t.triggerEvent("nav", {
                            path: i,
                            title: r,
                            icon: n
                        })
                    }
                })
            }
        }
    });