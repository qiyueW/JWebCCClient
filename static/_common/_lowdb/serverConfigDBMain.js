const finalVar = require('./_lowdbConst.js')
const key = require('../Key.js')
const lowDao = require('./_lowdbDao.js')

//配置区 数据库
const configDB = lowDao.getConfigDB();

//配置区：设置
function set(key, value) {
    lowDao.set(configDB, key, value);
}

//配置区：设置整个配置
function setAll(param_configDbObj) {
    configDB.set(finalVar.system_config_server_url, param_configDbObj[finalVar.system_config_server_url]).value();
    configDB.set(finalVar.system_config_server_userAccount, param_configDbObj[finalVar.system_config_server_userAccount]).value();
    configDB.set(finalVar.system_config_server_userPassword, param_configDbObj[finalVar.system_config_server_userPassword]).value();
    configDB.write();
}
//配置区：取出数据
function get(key) {
    if (key) {
        return lowDao.get(configDB, key);
    }
    var obj = {}
    obj[finalVar.system_config_server_url] = configDB.get(finalVar.system_config_server_url).value()
    obj[finalVar.system_config_server_userAccount] = configDB.get(finalVar.system_config_server_userAccount).value()
    obj[finalVar.system_config_server_userPassword] = configDB.get(finalVar.system_config_server_userPassword).value()
    return obj;
}

//从配置区里，判断是否有指定的值
function isHasData_noEmpty(key) {
    return lowDao.isHasData_noEmpty(configDB, key)
}



exports.isHasData_noEmpty = isHasData_noEmpty
exports.get = get;
exports.set = set;
exports.setAll = setAll;
exports.finalVar = finalVar;




//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC_configDB = function(ipcMain) {
    if (regCount > 0) {
        return;
    }
    regCount++;
    ipcMain.on(key.ipcKey_configDBMain_save, (event, arg) => {
        setAll(arg)
        event.returnValue = true
    });

    ipcMain.on(key.ipcKey_configDBMain_get, (event, arg) => {
        event.returnValue = get();
    });


};