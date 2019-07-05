const dao = require('../../_common/_lowdb/serverConfigDBMain.js');
const hostTool = require('../../_common/tools/serverHostTool');
const reqTool = require('../../_common/tools/requestTool');
const finalVar = require('../../_common/_lowdb/_lowdbConst')
const key = require('../../_common/Key')

var requestUrl = '/sys/user/manager/login/user.jw';


function login(f_result,obj) {
    if(!obj){
        obj = dao.get()
    }
    var hostName = obj[finalVar.system_config_server_url]
    var data = {}
    var account = obj[finalVar.system_config_server_userAccount]; //账号
    var password = obj[finalVar.system_config_server_userPassword] //密码
    if (!hostName || !account || !password) {
        f_result('-2',-1)
        return; //检查不通过
    }
    data.account = account
    data.password = password
    var hostObject = hostTool.formatServerHostUrl(hostName)
    reqTool.post(hostObject.protocol, hostObject.host, hostObject.port, requestUrl, data,f_result)
}



//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC_login = function(ipcMain,rootWin) {
    if (regCount > 0) {
        return;
    }
    regCount++;
    ipcMain.on(key.ipcKey_loginMain_login, (event, arg) => {
        login(arg,function(d,t){
            if(d=='1'){
                event.returnValue = true
                setTimeout(() => {
                    rootWin.reload('index.html');    
                }, 2000);
            }
            else{
                event.returnValue = false
            }
        })
        
    });

    ipcMain.on(key.ipcKey_loginMain_out, (event, arg) => {
        event.returnValue = get();
    });


}

exports.login = login