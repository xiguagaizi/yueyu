Component({
        properties: {
            background: {
                type: String
            },
            headColor: {
                type: String,
                value: "#ffffff"
            },
            headerBackground: {
                type: String,
                value: ""
            },
            groupName: {
                type: String,
                value: ""
            },
            list: {
                type: Array,
                value: []
            },
            size: {
                type: String,
                value: "normal"
            }
        },
        data: {},
        methods: {
            nav: function(e) {
                this.triggerEvent("nav", e.detail)
            }
        }
    });