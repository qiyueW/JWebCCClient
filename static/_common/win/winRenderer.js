const { ipcRenderer } = require('electron');
const key = require('../Key.js')
const winConstVar = require('./_winConst.js')

//关闭 配置服务器 的窗口
function f_close_root_config_server() {
    ipcRenderer.sendSync(key.ipcKey_winMain_closeSystemWIN, winConstVar.key_root_config_server);
}

//关闭 配置项目 的窗口
function f_close_root_config_project() {
    ipcRenderer.sendSync(key.ipcKey_winMain_closeSystemWIN, winConstVar.key_root_config_project);
}

//关闭 配置项目-键值对 的窗口
function f_close_root_config_projectMap() {
    ipcRenderer.sendSync(key.ipcKey_winMain_closeSystemWIN, winConstVar.key_root_config_projectMap);
}


exports.f_close_root_config_server = f_close_root_config_server
exports.f_close_root_config_project = f_close_root_config_project
exports.f_close_root_config_projectMap = f_close_root_config_projectMap