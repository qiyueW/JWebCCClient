const { ipcRenderer } = require('electron');
const lowdbKey = require('../../../_key/lowdb/lowdbKey')
const key = require('../../../_key/_Key')


function login(obj) {
    return ipcRenderer.sendSync(key.ipcKey.userSession.login, obj)
}

function exitLogin() {
    return ipcRenderer.sendSync(key.ipcKey.userSession.out, '0')
}
// function getServer_configDB() {
//     var obj = ipcRenderer.sendSync(key.ipcKey_configDBMain_get, '');
//     return obj;
// }
exports.exitLogin = exitLogin
exports.login = login
    // exports.getServer_configDB = getServer_configDB
    // exports.lowdbKey = lowdbKey