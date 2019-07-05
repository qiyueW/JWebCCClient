exports.config = {
    server: {
        /**
         * 服务器的路径
         */
        url: 'config.server.url',
        /**
         * 登陆的账号
         */
        account: 'config.server.account',
        /**
         * 登陆的密码
         */
        password: 'config.server.password'
    },
    project: {
        /**
         * 存放项目真实路径
         */
        real: 'config.project.real',
        /**
         * 项目路径：表达式 绑定 路径, 是数组
         */
        regexMapPath: 'config.project.regexMapPath',
        /**
         * 从regexMapPath 数组读到 元素obj,  从obj取出正则表达式的key 
         */
        regexMapPath_regexKey: 'k1',
        /**
         * 从regexMapPath 数组读到 元素obj,  从obj取出路径的key 
         */
        regexMapPath_pathKey: 'k2',
    },
    projectMap: {
        /**
         * 项目键值对： 是数组
         */
        kv: 'config.projectMap.kv',
        /**
         * kv 数组读到 元素obj,  从obj取出 键 的key
         */
        kv_keyKey: 'k1',
        /**
         * kv  数组读到 元素obj,  从obj取出 值 的key
         */
        kv_valueKey: 'k2',
    }
}