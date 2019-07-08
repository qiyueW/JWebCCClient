const { ipcRenderer } = require('electron');
const lowdbKey = require('../../../../_key/lowdb/lowdbKey')
const key = require('../../../../_key/_Key')

function saveServer(url, account, password) {
    var obj = {}
    obj[lowdbKey.config.server.url] = url;
    obj[lowdbKey.config.server.account] = account;
    obj[lowdbKey.config.server.password] = password;
    return ipcRenderer.sendSync(key.ipcKey.lowdb.config.server_save, obj)
}

function getServer() {
    var obj = ipcRenderer.sendSync(key.ipcKey.lowdb.config.server_get, '');
    return obj;
}

function saveProject(realPath, regexAndPath) {
    var obj = {}
    obj[lowdbKey.config.project.real] = realPath;
    obj[lowdbKey.config.project.regexMapPath] = regexAndPath;
    return ipcRenderer.sendSync(key.ipcKey.lowdb.config.project_save, obj)
}

function getProject() {
    var obj = ipcRenderer.sendSync(key.ipcKey.lowdb.config.project_get, '');
    return obj;
}

function saveProjectMap(kv) {
    var obj = {}
    obj[lowdbKey.config.projectMap.kv] = kv;
    return ipcRenderer.sendSync(key.ipcKey.lowdb.config.projectMap_save, obj)
}

function getProjectMap() {
    var obj = ipcRenderer.sendSync(key.ipcKey.lowdb.config.projectMap_get, '');
    return obj;
}


exports.saveServer = saveServer
exports.getServer = getServer

exports.saveProject = saveProject
exports.getProject = getProject

exports.saveProjectMap = saveProjectMap
exports.getProjectMap = getProjectMap


exports.lowdbKey = lowdbKey