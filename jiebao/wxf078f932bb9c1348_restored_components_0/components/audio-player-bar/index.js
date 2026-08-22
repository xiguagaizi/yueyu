Component({
        options: {
            styleIsolation: "isolated"
        },
        properties: {
            title: {
                type: String,
                value: ""
            },
            audioSrc: {
                type: String,
                value: ""
            },
            isPlaying: {
                type: Boolean,
                value: !1
            },
            progressValue: {
                type: Number,
                value: 0
            },
            currentTimeLabel: {
                type: String,
                value: "00:00"
            },
            durationLabel: {
                type: String,
                value: "00:00"
            },
            paragraphPlaybackLabel: {
                type: String,
                value: ""
            },
            isFavorite: {
                type: Boolean,
                value: !1
            },
            episodeLoading: {
                type: Boolean,
                value: !1
            },
            loadError: {
                type: String,
                value: ""
            }
        },
        methods: {
            emit: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.triggerEvent(t, e)
            },
            onFavoriteTap: function() {
                this.emit("favorite")
            },
            onSettingTap: function() {
                this.emit("setting")
            },
            onPlayTap: function() {
                this.emit("playtoggle")
            },
            onStopLoopTap: function() {
                this.emit("stoploop")
            },
            onProgressDragStart: function(t) {
                this.emit("progressdragstart", t.detail || {})
            },
            onProgressDrag: function(t) {
                this.emit("progressdrag", t.detail || {})
            },
            onProgressDragEnd: function(t) {
                this.emit("progressdragend", t.detail || {})
            },
            onProgressChange: function(t) {
                this.emit("progresschange", t.detail || {})
            }
        }
    });