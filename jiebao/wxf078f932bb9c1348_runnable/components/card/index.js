Component({
        options: {
            virtualHost: !0
        },
        properties: {
            background: {
                type: String,
                value: ""
            },
            color: {
                type: String
            },
            title: {
                type: String,
                value: ""
            },
            navLink: {
                type: String,
                value: ""
            }
        },
        data: {},
        methods: {
            nav: function() {
                this.data.navLink && wx.navigateTo({
                    url: this.data.navLink
                })
            }
        }
    });