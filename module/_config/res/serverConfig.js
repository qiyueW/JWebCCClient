require('electron-connect').client.create();

const win = require('../../_common/win/winRenderer');
const dao = require('../../_common/lowdb/config/configDBRenderer');
const uiTool = require('../../../_tools/uiTools');
//------------------------------------------------------------
//保存
function saveConfig() {
    if (dao.saveServer(
            uiTool.getValueById('configURL'), uiTool.getValueById('configAccount'), uiTool.getValueById('configPassword')
        )) {
        uiTool.f_notification_save_ok();
    } else {
        uiTool.f_notification_save_err();
    }
}
//初始化
function onload() {
    var obj = dao.getServer();
    var lowdbKey = dao.lowdbKey;
    uiTool.setValueById('configURL', obj[lowdbKey.config.server.url]);
    uiTool.setValueById('configAccount', obj[lowdbKey.config.server.account]);
    uiTool.setValueById('configPassword', obj[lowdbKey.config.server.password]);
}

exports.saveConfig = saveConfig
exports.onload = onload
exports.f_close_root_config_server = win.f_close_root_config_server