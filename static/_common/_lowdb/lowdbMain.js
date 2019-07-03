const finalVar = require('./_lowdbConst.js')
const key=require('../Key.js')

// 本地数据库
const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('configDB.json')
const configDB = low(adapter)

//往配置区，存放数据
exports.put_configDB=function(key,value){
  configDB.set(key,value).write();
}
//从配置区，取出数据
exports.get_configDB=function(key){
  return configDB.get(key).value();
}
//从配置区里，判断是否有指定的值
exports.isHasData_noEmpty=function(key){
  var v=configDB.get(key).value();
  if(v==''||null==v||v==undefined){
    return false;
  }
  
  return true;
}

//--------------------------------------------------------------------------------
//注册
exports.regColseEventIPC=function(ipcMain){
  ipcMain.on(key.ipcKey_lowdbMain_configDB_save, (event, arg) => {
    console.log(arg)

    configDB.set(finalVar.system_config_server_url,arg[finalVar.system_config_server_url]).value();
    configDB.set(finalVar.system_config_server_userAccount,arg[finalVar.system_config_server_userAccount]).value();
    configDB.set(finalVar.system_config_server_userPassword,arg[finalVar.system_config_server_userPassword]).value();
    configDB.write();
    console.log('server2....................................................')
    event.returnValue=true
  });
  
  ipcMain.on(key.ipcKey_lowdbMain_configDB_get, (event, arg) => {
    var obj={}
    obj[finalVar.system_config_server_url]=configDB.get(finalVar.system_config_server_url).value()
    obj[finalVar.system_config_server_userAccount]=configDB.get(finalVar.system_config_server_userAccount).value()
    obj[finalVar.system_config_server_userPassword]=configDB.get(finalVar.system_config_server_userPassword).value()
    console.log(obj)

    event.returnValue=obj
  });


}