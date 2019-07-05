var key_root = 'Root'; //
var key_root_config_server = 'root_config_server'; //存放根窗口的子窗口-配置服务器
var key_root_config_project = 'root_config_project'; //存放根窗口的子窗口-配置项目
var key_root_config_projectMap = 'root_config_projectMap'; //存放根窗口的子窗口-配置项目用到的键值对

exports.key_root = key_root
exports.key_root_config_server = key_root_config_server
exports.key_root_config_project = key_root_config_project
exports.key_root_config_projectMap = key_root_config_projectMap

exports.objects = {
    /**
     * 存放根窗口 的实例key
     */
    root: 'win_objects_Root',
    config: {
        /**
         * 存放 配置窗口（服务器配置） 的实例key
         */
        server: 'win_objects_config_server',
        /**
         * 存放 配置窗口（服务器配置） 的实例key
         */
        project: 'win_objects_config_project',
        /**
         * 存放 配置窗口（服务器配置） 的实例key
         */
        projectMap: 'win_objects_config_projectMap',
    },
    userSession: {
        login: 'win_objects_userSession_login'
    }
}