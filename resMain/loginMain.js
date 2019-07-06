const configDao = require('./configDBMain');
const hostTool = require('../_tools/serverHostTool');
const reqTool = require('../_tools/requestTool');
const lowdbKey = require('../_key/lowdb/lowdbKey')
const key = require('../_key/_Key')
const _winKey = require('../_key/_winKey')
const win = require('./winMain')
var requestUrl = '/sys/user/manager/login/user.jw'; //sys/user/manager/login/user.jw


function login(obj, f_result) {
    if (!obj) {
        obj = configDao.getServer()
    }
    var hostName = obj[lowdbKey.config.server.url]
    var data = {}
    var account = obj[lowdbKey.config.server.account]; //账号
    var password = obj[lowdbKey.config.server.password] //密码
    if (!hostName || !account || !password) {
        f_result('-2', -1)
        return; //检查不通过
    }
    data.account = account
    data.password = password
    var hostObject = hostTool.formatServerHostUrl(hostName)
    return reqTool.post_async(hostObject.protocol, hostObject.host, hostObject.port, requestUrl, data, f_result)
}



//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC = function(ipcMain, rootWin) {
    if (regCount > 0) {
        return;
    }
    regCount++;
    ipcMain.on(key.ipcKey.userSession.login, (event, arg) => { // async function() 
        login(arg, function(rs, t) {
            if (rs == '1') {
                event.returnValue = true
            } else {
                event.returnValue = false
            }
            setTimeout(() => {
                if (rs == '1') {
                    clearTimeout();
                    win.closeWin(_winKey.objects.userSession.login);
                    win.showWin(_winKey.objects.root)
                }
            }, 2000);
        })
    });

    ipcMain.on(key.ipcKey.userSession.out, (event, arg) => {
        event.returnValue = ''
    });


}

exports.login = login