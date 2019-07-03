const { ipcRenderer } = require('electron');

var key_root_config_server='root_config_server';//存放根窗口的子窗口-配置服务器
var key_root_config_project='root_config_project';//存放根窗口的子窗口-配置项目
var key_root_config_projectMap='root_config_projectMap';//存放根窗口的子窗口-配置项目用到的键值对

function f_close_root_config_server(){
    ipcRenderer.sendSync('winMain_closeSystemWIN',key_root_config_server);
}