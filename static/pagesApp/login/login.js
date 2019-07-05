require('electron-connect').client.create();

const dao = require('../../static/_common/_lowdb/serverConfigDBRenderer.js');
const uiTool = require('../../static/_common/tools/uiTools.js');
const loginTool=require('./loginRenderer.js')///../static/pagesApp/
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
function login(){
   var obj={
    configURL:uiTool.getValueById('configURL'),
    configAccount:uiTool.getValueById('configAccount'),
    configPassword:uiTool.getValueById('configPassword')
   }
   loginTool.login(obj)
   console.log(obj);
}
//初始化
window.onload = function() {
    var obj = dao.getServer_configDB();
    var finalVar = dao.finalVar;
    uiTool.setValueById('configURL', obj[finalVar.system_config_server_url]);
    uiTool.setValueById('configAccount', obj[finalVar.system_config_server_userAccount]);
    uiTool.setValueById('configPassword', obj[finalVar.system_config_server_userPassword]);
}