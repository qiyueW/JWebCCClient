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
    configDB.set(finalVar.projectMapConfigDBKey.maps, param_configDbObj[finalVar.projectMapConfigDBKey.maps]).value(); //这个是一个数组
    configDB.write();
}
//配置区：取出数据
function get(key) {
    if (key) {
        return lowDao.get(configDB, key);
    }
    var obj = {}
    obj[finalVar.projectMapConfigDBKey.maps] = configDB.get(finalVar.projectMapConfigDBKey.maps).value() //这个是一个数组
    return obj;
}


exports.get = get;
exports.set = set;
exports.setAll = setAll;





//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC_configDB = function(ipcMain) {
    if (regCount > 0) {
        return;
    }
    regCount++;
    ipcMain.on(key.ipcKey_configDBMain_save_projectMap, (event, arg) => {
        setAll(arg)
        event.returnValue = true
    });

    ipcMain.on(key.ipcKey_configDBMain_get_projectMap, (event, arg) => {
        event.returnValue = get();
    });


};