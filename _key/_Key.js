exports.ipcKey = {
    lowdb: {
        config: {
            /**
             * 保存  服务器配置
             */
            server_save: 'ipckey_lowdb_config_server_save',
            /**
             * 读取 服务器配置
             */
            server_get: 'ipckey_lowdb_config_server_get',
            /**
             *保存 项目配置
             */
            project_save: 'ipckey_lowdb_config_project_save',
            /**
             * 读取 项目配置
             */
            project_get: 'ipckey_lowdb_config_project_get',
            /**
             * 保存 项目键值对
             */
            projectMap_save: 'ipckey_lowdb_config_projectMap_save',
            /**
             * 读取 项目键值对
             */
            projectMap_get: 'ipckey_lowdb_config_projectMap_get',
        }
    },
    window: {
        /**
         *关闭 窗口
         */
        close: 'ipckey_window_close',
        /**
         *创建 窗口
         */
        create: 'ipckey_window_create',
        /**
         * 打开 窗口
         */
        opean: 'ipckey_window_opean'
    },
    userSession: {
        /**
         * 登陆
         */
        login: 'ipckey_userSession_login',
        /**
         * 退出
         */
        out: 'ipckey_userSession_out'
    }
}