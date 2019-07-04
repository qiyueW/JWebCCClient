const { ipcRenderer } = require('electron');
const finalVar = require('./_lowdbConst.js')
const key = require('../Key.js')


function saveProject_configDB(realPath, regexAndPath) {
    var obj = {}
    obj[finalVar.projectConfigDBKey.real] = realPath;
    obj[finalVar.projectConfigDBKey.regexMapPath] = regexAndPath;
    return ipcRenderer.sendSync(key.ipcKey_configDBMain_save_project, obj)
}

function getproject_configDB() {
    var obj = ipcRenderer.sendSync(key.ipcKey_configDBMain_get_project, '');
    return obj;
}

exports.saveProject_configDB = saveProject_configDB
exports.getproject_configDB = getproject_configDB
exports.finalVar = finalVar