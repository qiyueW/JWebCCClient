require('electron-connect').client.create();

const dao = require('../../_common/_lowdb/serverConfigDBMain.js'); //../../../static/_common/_lowdb/serverConfigDBRenderer.js
const uiTool = require('../../_common/tools/uiTools.js');
//------------------------------------------------------------
//初始化
window.onload = function() {
    var obj = dao.getServer_configDB();
    var finalVar = dao.finalVar;
    uiTool.setValueById('configURL', obj[finalVar.system_config_server_url]);
    uiTool.setValueById('configAccount', obj[finalVar.system_config_server_userAccount]);
    uiTool.setValueById('configPassword', obj[finalVar.system_config_server_userPassword]);
}