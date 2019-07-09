const lowdbKey = require('../_key/lowdb/lowdbKey')
const key = require('../_key/_Key')
const lowDao = require('./_lowdbDao')

//配置区 数据库
const configDB = lowDao.getConfigDB();

//配置区：设置
function set(key, value) {
    lowDao.set(configDB, key, value);
}
if (undefined == getServer(lowdbKey.config.server.url)) {
    configDB.set(lowdbKey.config.server.url, 'http://127.0.0.1').value(); //默认服务器地址是127.0.0.1
    if (undefined == getServer(lowdbKey.config.server.account)) {
        configDB.set(lowdbKey.config.server.account, '').value();
    }
    if (undefined == getServer(lowdbKey.config.server.password)) {
        configDB.set(lowdbKey.config.server.password, '').value();
    }
    //如果项目键值对为null,设置默认值
    if (undefined == configDB.get(lowdbKey.config.projectMap.kv).value()) {
        var kv = [{
                "k1": "&#34;",
                "k2": "\""
            },
            {
                "k1": "&quot;",
                "k2": "\""
            },
            {
                "k1": "&#92;",
                "k2": "\\"
            }
        ]
        configDB.set(lowdbKey.config.projectMap.kv, kv).value(); //这个是一个数组
    }

    configDB.write();
}
//--------------------------------服务器配置------------------------------------------------

//配置区：往configDB 保存 服务器配置
function setServer(param_configDbObj) { //config.server.url=lowdbKey.config.server.url
    configDB.set(lowdbKey.config.server.url, param_configDbObj[lowdbKey.config.server.url]).value();
    configDB.set(lowdbKey.config.server.account, param_configDbObj[lowdbKey.config.server.account]).value();
    configDB.set(lowdbKey.config.server.password, param_configDbObj[lowdbKey.config.server.password]).value();
    configDB.write();
}
//配置区：往configDB 取出 服务器配置
function getServer(key) {
    if (key) {
        return lowDao.get(configDB, key);
    }
    var obj = {}
    obj[lowdbKey.config.server.url] = configDB.get(lowdbKey.config.server.url).value()
    obj[lowdbKey.config.server.account] = configDB.get(lowdbKey.config.server.account).value()
    obj[lowdbKey.config.server.password] = configDB.get(lowdbKey.config.server.password).value()
    return obj;
}
//--------------------------------项目配置------------------------------------------------
//配置区：往configDB 保存 项目配置 
function setProject(param_configDbObj) {
    configDB.set(lowdbKey.config.project.real, param_configDbObj[lowdbKey.config.project.real]).value();
    configDB.set(lowdbKey.config.project.regexMapPath, param_configDbObj[lowdbKey.config.project.regexMapPath]).value(); //这个是一个数组
    configDB.write();
}
//配置区：从configDB 取出 项目配置
function getProject(key) {
    if (key) {
        return lowDao.get(configDB, key);
    }
    var obj = {}
    obj[lowdbKey.config.project.real] = configDB.get(lowdbKey.config.project.real).value()
    obj[lowdbKey.config.project.regexMapPath] = configDB.get(lowdbKey.config.project.regexMapPath).value() //这个是一个数组
    return obj;
}
//--------------------------------项目键值对配置------------------------------------------------
//配置区：往configDB 保存 项目键值对
function setProjectMap(param_configDbObj) {
    configDB.set(lowdbKey.config.projectMap.kv, param_configDbObj[lowdbKey.config.projectMap.kv]).value(); //这个是一个数组
    configDB.write();
}
//配置区：从configDB 取出 项目键值对
function getProjectMap(key) {
    if (key) {
        return lowDao.get(configDB, key);
    }
    var obj = {}
    obj[lowdbKey.config.projectMap.kv] = configDB.get(lowdbKey.config.projectMap.kv).value() //这个是一个数组
    return obj;
}


//从配置区里，判断是否有指定的值
function isHasData_noEmpty(key) {
    return lowDao.isHasData_noEmpty(configDB, key)
}

exports.isHasData_noEmpty = isHasData_noEmpty

exports.set = set;

exports.getServer = getServer;
exports.setServer = setServer;

exports.getProject = getProject;
exports.setProject = setProject;

exports.getProjectMap = getProjectMap;
exports.setProjectMap = setProjectMap;


//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC_configDB = function(ipcMain) {
    if (regCount > 0) {
        return;
    }
    regCount++;

    //服务器配置
    ipcMain.on(key.ipcKey.lowdb.config.server_save, (event, arg) => {
        setServer(arg)
        event.returnValue = true
    })
    ipcMain.on(key.ipcKey.lowdb.config.server_get, (event, arg) => {
        event.returnValue = getServer();
    })

    //项目配置
    ipcMain.on(key.ipcKey.lowdb.config.project_save, (event, arg) => {
        setProject(arg)
        event.returnValue = true
    })
    ipcMain.on(key.ipcKey.lowdb.config.project_get, (event, arg) => {
        event.returnValue = getProject();
    })

    //项目键值对配置
    ipcMain.on(key.ipcKey.lowdb.config.projectMap_save, (event, arg) => {
        setProjectMap(arg)
        event.returnValue = true
    })
    ipcMain.on(key.ipcKey.lowdb.config.projectMap_get, (event, arg) => {
        event.returnValue = getProjectMap();
    })

}