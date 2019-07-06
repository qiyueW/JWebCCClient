// 加载代码数据
const configDao = require('./configDBMain');
const hostTool = require('../_tools/serverHostTool');
const reqTool = require('../_tools/requestTool');
const lowdbKey = require('../_key/lowdb/lowdbKey')
const key = require('../_key/_Key')
var requestUrl = '/cc/fangan/use/create/cc.jw';


function loadCCData(f_result) {
    var obj = configDao.getServer()
    var hostName = obj[lowdbKey.config.server.url]
    var hostObject = hostTool.formatServerHostUrl(hostName)
    return reqTool.post_async(hostObject.protocol, hostObject.host, hostObject.port, requestUrl, '', f_result)
}


//--------------------------------IPC------------------------------------------------
var regCount = 0;
//只注册一次
exports.regIPC = function(ipcMain) {
    if (regCount > 0) {
        return;
    }
    regCount++;
    ipcMain.on(key.ipcKey.userSession.loadCCData, (event, arg) => {
        loadCCData(function(rs, t) {
            event.returnValue = rs
        })
    });

    ipcMain.on(key.ipcKey.userSession.out, (event, arg) => {
        event.returnValue = ''
    });
}

exports.loadCCData = loadCCData