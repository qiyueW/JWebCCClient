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
        var showHtml = ''
        for (var i = 0; i < ccJsonData.length; i++) {
            console.log(ccJsonData[i]);
            showHtml += row(ccJsonData[i][ccDataKey.ccData.filename], ccJsonData[i][ccDataKey.ccData.filepath])
                // ctext += ccJsonData[i][ccDataKey.ccData.filename] + ' ' + ccJsonData[i][ccDataKey.ccData.filepath] + '<br>'
        }

        $('#tbodyContent').html(showHtml)
    } else {
        uiTool.notification.loadData_err()
    }
}

function row(filename, filepath) {
    return '<div class="uk-grid-collapse uk-child-width-expand@s" uk-grid>' +
        '<div>' + filename + '</div><div class="uk-background-primary uk-light">' + filepath + '</div>' +
        '</div>'
}
//-----------------------------------------------------------


exports.f_getLoadData = f_getLoadData