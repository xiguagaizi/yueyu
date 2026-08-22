Component({
        options: {
            styleIsolation: "isolated"
        },
        properties: {
            show: {
                type: Boolean,
                value: !1
            },
            courseInfo: {
                type: Object,
                value: null
            },
            episodes: {
                type: Array,
                value: []
            },
            activeEpisodeId: {
                type: String,
                value: ""
            }
        },
        methods: {
            onClose: function() {
                this.triggerEvent("close")
            },
            onSelect: function(e) {
                var t, o = (null == e || null === (t = e.currentTarget) || void 0 === t ? void 0 : t.dataset) || {};
                this.triggerEvent("select", {
                    uuid: o.uuid || ""
                })
            }
        }
    });