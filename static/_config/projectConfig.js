require('electron-connect').client.create();

const win = require('../static/_common/win/winRenderer.js');
const dao = require('../static/_common/_lowdb/projectConfigDBRenderer.js');
const uiTool = require('../static/_common/tools/uiTools.js');
var $ = require("jquery");
//------------------------------------------------------------
//保存
function saveConfig() {
    var obj = []
    var v1, v2;
    for (var i = 0; i < 20; i++) {
        v1 = uiTool.getValueById('r' + i + "_1")
        v2 = uiTool.getValueById('r' + i + "_2")
        if (v1 && v2) {
            obj.push({
                k1: v1,
                k2: v2
            });
        }
    }
    var realpath = uiTool.getValueById('realpathID');

    if (dao.saveProject_configDB(realpath, obj)) {
        uiTool.f_notification_save_ok();
    } else {
        uiTool.f_notification_save_err();
    }

}
//初始化
window.onload = function() {
    var content = "";
    for (var i = 0; i < 20; i++) {
        content = content + row(i);
    }

    function row(index) {
        return '<div class="uk-grid-collapse uk-child-width-expand@s" uk-grid>' +
            '<div><input type="text" style="width: 100%"  id="r' + index + '_1" /></div>' +
            '<div><input type="text" style="width: 100%"  id="r' + index + '_2" /></div>' +
            '</div>'
    }
    $('#tbodyContent').html(content);
    var obj = dao.getproject_configDB();
    var keyVar = dao.finalVar;

    uiTool.setValueById('realpathID', obj[keyVar.projectConfigDBKey.real]);
    var forObj;
    for (var i = 0; i < obj[keyVar.projectConfigDBKey.regexMapPath].length; i++) {
        forObj = obj[keyVar.projectConfigDBKey.regexMapPath][i];
        uiTool.setValueById('r' + i + "_1", forObj.k1);
        uiTool.setValueById('r' + i + "_2", forObj.k2);
    }

}