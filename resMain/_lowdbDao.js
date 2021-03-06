// 本地数据库
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

//configDB数据库
var adapter = new FileSync('configDB.json')
var configDB = low(adapter)

//-----------------------------------------------------暴露区--------------------------------------------
exports.getConfigDB = getConfigDB;
exports.isHasData_noEmpty = isHasData_noEmpty;
exports.get = get

//取得configDB 数据库
function getConfigDB() {
    return configDB;
}

//取得configDB 数据库
function get(db, key) {
    return db.get(key).value();;
}
//从配置区里，判断是否有指定的值
function isHasData_noEmpty(db, key) {
    var v = db.get(key).value();
    if (v == '' || null == v || v == undefined) {
        return false;
    }
    return true;
}