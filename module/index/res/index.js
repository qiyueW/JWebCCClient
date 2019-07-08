// require('electron-connect').client.create();

const ccData = require('./loadCreateDataRenderer')
const ccDataKey = require('../../../_key/cc/ccDataKey')
const uiTool = require('../../../_tools/uiTools');

var $ = require("jquery");
var ccJsonData
    //------------------------------------------------------------
function f_getLoadData() {
    var data = ccData.loadCCData();
    if (data) {
        uiTool.notification.loadData_ok()
        ccJsonData = JSON.parse(data);
        var showHtml = ''
        for (var i = 0; i < ccJsonData.length; i++) {
            showHtml += row(ccJsonData[i][ccDataKey.ccData.filename], ccJsonData[i][ccDataKey.ccData.filepath])
        }
        $('#tbodyContent').html(showHtml)
    } else {
        uiTool.notification.loadData_err()
        ccJsonData = null
        $('#tbodyContent').html('')
    }
}

function row(filename, filepath) {
    return '<div class="uk-grid-collapse uk-child-width-expand@s" uk-grid>' +
        '<div>' + filename + '</div><div class="uk-background-primary uk-light">' + filepath + '</div>' +
        '</div>'
}
//-----------------------------------------------------------

function f_createFile() {
    if (ccJsonData) {
        for (var i = 0; i < ccJsonData.length; i++) {
            ccData.createCCDataFile(ccJsonData[i]);
        }
    }
}
exports.f_getLoadData = f_getLoadData
exports.f_createFile = f_createFile