//服务器配置
exports.system_config_server_url = 'config.server.url' //服务器 路径
exports.system_config_server_userAccount = 'config.server.userAccount' //服务器 登陆的账号
exports.system_config_server_userPassword = 'config.server.userPassword' //服务器 登陆的密码


//项目配置
// exports.system_config_project_real = 'config.project.real' //项目真实 路径
// exports.system_config_project_real_map = 'config.project.regex_path' //你的表达式 绑定 【{真实路径+你的路径}】  这是一个数组。里面的命名为 k1=path;
// exports.system_config_project_real_map_key = 'config.project.regex_path_key' //你的表达式 绑定 【{真实路径+你的路径}】  这是一个数组里的某个元素的属性名;


var obj = {
    real: 'config.project.real', //项目真实 路径
    regexMapPath: 'config.project.regex_path', //你的表达式 绑定 【{真实路径+你的路径}】  这是一个数组。
}
var projectMapConfigDBKey = {
    maps: 'config.project_map.keyvalue', //项目用到的键值对(数据组) var xx=[];  key=xxxxxxxxxxxxxxx
}
exports.projectConfigDBKey = obj;
exports.projectMapConfigDBKey = projectMapConfigDBKey; //