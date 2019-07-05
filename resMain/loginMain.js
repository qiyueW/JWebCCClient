const configDao = require('../module/_common/lowdb/config/configDBRenderer');
const hostTool = require('../_tools/serverHostTool');
const reqTool = require('../_tools/requestTool');
const lowdbKey = require('../_key/lowdb/lowdbKey')
const key = require('../_key/_Key')

var requestUrl = '/sys/user/manager/login/user.jw';


function login(f_result, obj) {
    if (!obj) {
        obj = configDao.getServer()
    }
    var hostName = obj[lowdbKey.lowModule.lowdb.config.server.url]
    var data = {}
    var account = obj[lowdbKey.lowModule.lowdb.config.server.account]; //账号
    var password = obj[lowdbKey.lowModule.lowdb.config.server.password] //密码
    if (!hostName || !account || !password) {
        f_result('-2', -1)
        return; //检查不通过
    }
    data.account = account
    data.password = password
    var hostObject = hostTool.formatServerHostUrl(hostName)
    reqTool.post(hostObject.protocol, hostObject.host, hostObject.port, requestUrl, data, f_result)
}



//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC_login = function(ipcMain, rootWin) {
    if (regCount > 0) {
        return;
    }
    regCount++;
    ipcMain.on(key.ipcKey.userSession.login, (event, arg) => {
        login(arg, function(d, t) {
            if (d == '1') {
                event.returnValue = true
                setTimeout(() => {
                    rootWin.reload('index.html');
                }, 2000);
            } else {
                event.returnValue = false
            }
        })

    });

    ipcMain.on(key.ipcKey.userSession.out, (event, arg) => {
        event.returnValue = get();
    });


}

exports.login = login