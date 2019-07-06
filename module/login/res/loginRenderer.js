const { ipcRenderer } = require('electron');
const lowdbKey = require('../../../_key/lowdb/lowdbKey')
const key = require('../../../_key/_Key')


function login(obj) {
    return ipcRenderer.sendSync(key.ipcKey.userSession.login, obj)
}

// function getServer_configDB() {
//     var obj = ipcRenderer.sendSync(key.ipcKey_configDBMain_get, '');
//     return obj;
// }

exports.login = login
    // exports.getServer_configDB = getServer_configDB
    // exports.lowdbKey = lowdbKey