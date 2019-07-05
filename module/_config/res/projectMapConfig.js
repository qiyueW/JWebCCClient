require('electron-connect').client.create();

const win = require('../static/_common/win/winRenderer.js');
const dao = require('../static/_common/_lowdb/projectMapConfigDBRenderer.js');
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
        if (v1) {
            obj.push({
                k1: v1,
                k2: v2
            });
        }
    }
    if (dao.saveProjectMap_configDB(obj)) {
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
    var obj = dao.getProjectMap_configDB();
    var keyVar = dao.finalVar;

    var forObj;
    for (var i = 0; i < obj[keyVar.projectMapConfigDBKey.maps].length; i++) {
        forObj = obj[keyVar.projectMapConfigDBKey.maps][i];
        uiTool.setValueById('r' + i + "_1", forObj.k1);
        uiTool.setValueById('r' + i + "_2", forObj.k2);
    }

}