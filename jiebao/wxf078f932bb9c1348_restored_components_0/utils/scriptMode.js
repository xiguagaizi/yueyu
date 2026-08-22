Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.SCRIPT_MODE = void 0, exports.getScriptMode = function() {
        try {
            if (wx.getStorageSync("learning_zi_script_mode") === e.SIMPLIFIED) return e.SIMPLIFIED
        } catch (e) {}
        return e.TRADITIONAL
    }, exports.setScriptMode = t, exports.toggleScriptMode = function(I) {
        return t(I === e.SIMPLIFIED ? e.TRADITIONAL : e.SIMPLIFIED)
    };
    var e = {
        TRADITIONAL: "traditional",
        SIMPLIFIED: "simplified"
    };

    function t(t) {
        var I = t === e.SIMPLIFIED ? e.SIMPLIFIED : e.TRADITIONAL;
        return wx.setStorageSync("learning_zi_script_mode", I), I
    }
    exports.SCRIPT_MODE = e;