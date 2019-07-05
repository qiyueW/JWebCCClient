const { ipcRenderer } = require('electron');
const finalVar = require('../../../_key/lowdb/lowdbKey')
const key = require('../../_common/Key')


function login(obj) {
    var obj = {}
    obj[finalVar.system_config_server_url] = url;
    obj[finalVar.system_config_server_userAccount] = account;
    obj[finalVar.system_config_server_userPassword] = password;
    return ipcRenderer.sendSync(key.ipcKey_loginMain_login, obj)
}

function getServer_configDB() {
    var obj = ipcRenderer.sendSync(key.ipcKey_configDBMain_get, '');
    return obj;
}

exports.login = login
exports.getServer_configDB = getServer_configDB
exports.finalVar = finalVar