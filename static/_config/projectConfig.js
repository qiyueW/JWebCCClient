require('electron-connect').client.create();

const win = require('../static/_common/win/winRenderer.js');
const dao = require('../static/_common/_lowdb/configDBRenderer.js');
const uiTool = require('../static/_common/tools/uiTools.js');
//------------------------------------------------------------
//保存
function saveConfig() {
    if (dao.saveServer_configDB(
            uiTool.getValueById('configURL'), uiTool.getValueById('configAccount'), uiTool.getValueById('configPassword')
        )) {
        uiTool.f_notification_save_ok();
    } else {
        uiTool.f_notification_save_err();
    }
}
//初始化
window.onload = function() {
    var obj = dao.getServer_configDB();
    var finalVar = dao.finalVar;
    uiTool.setValueById('configURL', obj[finalVar.system_config_server_url]);
    uiTool.setValueById('configAccount', obj[finalVar.system_config_server_userAccount]);
    uiTool.setValueById('configPassword', obj[finalVar.system_config_server_userPassword]);
}