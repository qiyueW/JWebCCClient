function saveServer_configDB(url,account,password){
    var obj={}
    obj[finalVar.system_config_server_url]=url;
    obj[finalVar.system_config_server_userAccount]=account;
    obj[finalVar.system_config_server_userPassword]=password;
    return ipcRenderer.sendSync(key.ipcKey_lowdbMain_configDB_save,obj)
}

function getServer_configDB(){
    var obj= ipcRenderer.sendSync(key.ipcKey_lowdbMain_configDB_get,'');
    return obj;
}