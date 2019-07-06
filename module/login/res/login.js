require('electron-connect').client.create();

const dao = require('../../_common/lowdb/config/configDBRenderer');
var lowdbKey = dao.lowdbKey;

const uiTool = require('../../../_tools/uiTools');
const loginTool = require('../res/loginRenderer') ///../static/pagesApp/
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

function login() {
    var obj = {}
    obj[lowdbKey.config.server.url] = uiTool.getValueById('configURL')
    obj[lowdbKey.config.server.account] = uiTool.getValueById('configAccount')
    obj[lowdbKey.config.server.password] = uiTool.getValueById('configPassword')

    if (loginTool.login(obj)) {
        uiTool.notification.login_ok();
    } else {
        uiTool.notification.login_err();
    }

}
//初始化
function onload() {
    var obj = dao.getServer()
    var lowdbKey = dao.lowdbKey
    console.log(obj)
    uiTool.setValueById('configURL', obj[lowdbKey.config.server.url]);
    uiTool.setValueById('configAccount', obj[lowdbKey.config.server.account]);
    uiTool.setValueById('configPassword', obj[lowdbKey.config.server.password]);
}

exports.login = login
exports.saveConfig = saveConfig
exports.onload = onload
exports.lowdbKey = lowdbKey