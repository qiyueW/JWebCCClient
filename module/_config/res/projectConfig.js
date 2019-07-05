require('electron-connect').client.create();

const win = require('../../../module/_common/win/winRenderer');
const dao = require('../../_common/lowdb/config/configDBRenderer');
const uiTool = require('../../../_tools/uiTools');
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

    if (dao.saveProject(realpath, obj)) {
        uiTool.f_notification_save_ok();
    } else {
        uiTool.f_notification_save_err();
    }

}
//初始化
function onload() {
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
    var obj = dao.getProject()
    var lowdbKey = dao.lowdbKey;

    uiTool.setValueById('realpathID', obj[lowdbKey.config.project.real]);
    var forObj;
    for (var i = 0; i < obj[lowdbKey.config.project.regexMapPath].length; i++) {
        forObj = obj[lowdbKey.config.project.regexMapPath][i];
        uiTool.setValueById('r' + i + "_1", forObj.k1);
        uiTool.setValueById('r' + i + "_2", forObj.k2);
    }

}
exports.saveConfig = saveConfig
exports.onload = onload
exports.f_close_root_config_project = win.f_close_root_config_project