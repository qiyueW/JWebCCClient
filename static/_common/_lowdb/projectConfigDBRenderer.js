const { ipcRenderer } = require('electron');
const finalVar = require('./_lowdbConst.js')
const key = require('../Key.js')


function saveServer_configDB(url, account, password) {
    var obj = {}
    obj[finalVar.system_config_server_url] = url;
    obj[finalVar.system_config_server_userAccount] = account;
    obj[finalVar.system_config_server_userPassword] = password;
    return ipcRenderer.sendSync(key.ipcKey_configDBMain_save, obj)
}

function getServer_configDB() {
    var obj = ipcRenderer.sendSync(key.ipcKey_configDBMain_get, '');
    return obj;
}

exports.saveServer_configDB = saveServer_configDB
exports.getServer_configDB = getServer_configDB
exports.finalVar = finalVar