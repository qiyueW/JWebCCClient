const dao = require('../../_common/_lowdb/serverConfigDBMain.js');
const hostTool = require('../../_common/tools/serverHostTool');
const reqTool = require('../../_common/tools/requestTool');


var obj = dao.get();
var finalVar = dao.finalVar;

var hostName = obj[finalVar.system_config_server_url];
var requestUrl = '/sys/user/manager/login/user.jw';

function login() {
    var data = {}
    var account = obj[finalVar.system_config_server_userAccount]; //账号
    var password = obj[finalVar.system_config_server_userPassword] //密码
    if (!hostName || !account || !password) {
        return -2; //检查不通过
    }
    data.account = account;
    data.password = password;
    var sendData = 'account=' + account + '&password=' + password
    var hostObject = hostTool.formatServerHostUrl(hostName);
    console.log(hostObject);
    reqTool.post(hostObject.protocol, hostObject.host, hostObject.port, requestUrl, sendData);
}

exports.login = login;