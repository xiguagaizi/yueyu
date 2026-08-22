Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.resolveTeacherBindingErrorMessage = function(_) {
        var N, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "操作失败",
            D = (null == _ || null === (N = _.data) || void 0 === N ? void 0 : N.msg) || (null == _ ? void 0 : _.msg) || (null == _ ? void 0 : _.message) || (null == _ ? void 0 : _.errMsg) || "";
        if (!D) return e;
        return E[D] || D
    };
    var E = {
        TEACHER_BINDING_QUOTA_EXHAUSTED: "绑定名额已用完，请先扩充名额",
        TEACHER_CAPACITY_REACHED: "绑定名额已用完，请先扩充名额",
        NO_ACTIVE_BINDING: "当前尚未与该学员建立绑定关系",
        ONLY_TEACHER_ALLOWED: "仅老师账号可操作",
        STUDENT_NOT_FOUND: "未找到对应学员",
        LINK_NOT_FOUND: "未找到绑定关系",
        EMPTY_INVITE_CODE: "请输入邀请码",
        INVALID_INVITE_CODE: "邀请码无效",
        INVITE_CODE_EXPIRED: "邀请码已过期",
        ALREADY_BOUND: "已建立绑定关系，无需重复操作",
        BINDING_BLOCKED: "当前无法建立绑定关系",
        PENDING_REQUEST_NOT_FOUND: "未找到待处理申请"
    };