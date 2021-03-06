// 加载代码数据
const { ipcRenderer } = require('electron');
const key = require('../../../_key/_Key')
const dao = require('../../_common/lowdb/config/configDBRenderer');
const lowdbKey = dao.lowdbKey
const ccDataKey = require('../../../_key/cc/ccDataKey')

const fsTool = require('../../../_tools/fileTool')
const uiTool = require('../../../_tools/uiTools');

function loadCCData() {
    return ipcRenderer.sendSync(key.ipcKey.userSession.loadCCData, '');
}
/**
 * 创建一个ccdData的文件
 * @param {String} obj ccData对象
 */
async function createCCDataFile(obj) {
    var projectObjct = dao.getProject();
    var proKV = dao.getProjectMap()[lowdbKey.config.projectMap.kv]

    //真实路径：项目
    var projectFilePath_real = projectObjct[lowdbKey.config.project.real];
    //项目：文件路径
    var filepath = obj[ccDataKey.ccData.filepath].replace(/\./g, '/');
    //项目：文件名
    var fileName = obj[ccDataKey.ccData.filename];
    //项目：文件在项目的路径+文件名
    var fileNameAndFilePath = fsTool.formatFilepath(filepath, fileName)

    //文件真实路径：文件真实路径=项目真实路径+文件项目路径 
    var realpath = fsTool.formatFilepath(projectFilePath_real, filepath); //默认是  文件真实路径=项目真实路径+文件路径

    var projecRegextPathMap = projectObjct[lowdbKey.config.project.regexMapPath]
        //根据表达式，找到文件的追加的路径
    if (projecRegextPathMap) {
        for (var i = 0; i < projecRegextPathMap.length; i++) {
            if (new RegExp(projecRegextPathMap[i][lowdbKey.config.project.regexMapPath_regexKey]).test(fileNameAndFilePath)) {
                //文件真实路径=项目真实路径+追加的路径+文件路径
                realpath = fsTool.formatFilepath(projectFilePath_real, projecRegextPathMap[i][lowdbKey.config.project.regexMapPath_pathKey]);
                realpath = fsTool.formatFilepath(realpath, filepath);
                break;
            }
        }
    }

    //项目文件内容
    var content = obj[ccDataKey.ccData.filecontext]

    //对内容进行替换
    if (proKV) {
        for (var i = 0; i < proKV.length; i++) {
            content = content.replace(new RegExp(proKV[i][lowdbKey.config.projectMap.kv_keyKey], 'g'), proKV[i][lowdbKey.config.projectMap.kv_valueKey])
        }
    }

    var rs = await fsTool.writeFileSync(realpath, fileName, content);
    uiTool.notification.message(fileName + ' 生成成功', true)
}

exports.loadCCData = loadCCData
exports.createCCDataFile = createCCDataFile