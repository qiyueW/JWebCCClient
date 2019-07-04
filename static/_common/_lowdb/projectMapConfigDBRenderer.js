const { ipcRenderer } = require('electron');
const finalVar = require('./_lowdbConst.js')
const key = require('../Key.js')


function saveProjectMap_configDB(kv) {
    var obj = {}
    obj[finalVar.projectMapConfigDBKey.maps] = kv;
    return ipcRenderer.sendSync(key.ipcKey_configDBMain_save_projectMap, obj)
}

function getProjectMap_configDB() {
    var obj = ipcRenderer.sendSync(key.ipcKey_configDBMain_get_projectMap, '');
    return obj;
}

exports.saveProjectMap_configDB = saveProjectMap_configDB
exports.getProjectMap_configDB = getProjectMap_configDB
exports.finalVar = finalVar