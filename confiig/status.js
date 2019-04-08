module.exports = {
    SUCCESS: { code: 0, msg: '成功' },
    ERRER: { code: -1, msg: '失败' },
    USERNAME_REQ: { code: 401, msg: '账号为空' },
    PASSWORD_ERR: { code: 402, msg: '密码为空' },
    USER_ERROR: { code: 403, msg: '没有此用户' },
    PASSWORD_ERROR: { code: 404, msg: '密码错误' },
    GETUSER_ERROR: { code: 405, msg: '获取用户信息失败' },
    USERNAME_LENGTH_ERR: { code: 406, msg: '手机号码不对' },

    USER_REPEAT_ERR: { code: 501, msg: '用户已存在' },
    UUID_ERR: { code: 999, msg: 'uuid必传' }
}
