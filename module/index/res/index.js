require('electron-connect').client.create();

const ccData = require('./loadCreateDataRenderer')
const ccDataKey = require('../../../_key/cc/ccDataKey')
const uiTool = require('../../../_tools/uiTools');

var $ = require("jquery");

//------------------------------------------------------------
function f_getLoadData() {
    var data = ccData.loadCCData();
    if (data) {

        uiTool.notification.loadData_ok()
        var ctext = ''
        var ccJsonData = JSON.parse(data);
        for (var i = 0; i < ccJsonData.length; i++) {
            console.log(ccJsonData[i]);
            ctext += ccJsonData[i][ccDataKey.ccData.filename] + ' ' + ccJsonData[i][ccDataKey.ccData.filepath] + '<br>'
        }

        $('#showCCData').html(ctext)
    } else {
        uiTool.notification.loadData_err()
    }
}

function showTitleToHtml(obj) {

}


exports.f_getLoadData = f_getLoadData