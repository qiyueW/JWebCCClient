// 加载代码数据
const { ipcRenderer } = require('electron');
const key = require('../../../_key/_Key')
const dao = require('../../_common/lowdb/config/configDBRenderer');
const lowdbKey=dao.lowdbKey
const projectObjct=dao.getProject();
const fsTool=require('../../../_tools/fileTool')

function loadCCData() {
    return ipcRenderer.sendSync(key.ipcKey.userSession.loadCCData, '');
}

/**
 *   obj[lowdbKey.config.server.url] = url;
 *   obj[lowdbKey.config.server.account] = account;
 *   obj[lowdbKey.config.server.password] = password;
 */
function getProjectConfig() {
    return dao.getProject();
}

/**
 * 创建一个ccdData的文件
 * @param {String} obj ccData对象
 */
function createRow(obj){
    //项目文件路径
    var filepath=obj[ccDataKey.ccData.filepath];
    //项目真实路径
    var projectFilePath=projectObjct[lowdbKey.config.project.real];
    //文件真实路径=项目真实路径+文件项目路径
    var realpath;

    //根据表达式，找到文件的真实路径
    if(projectObjct[lowdbKey.config.project.regexMapPath]){
        for(kv in projectObjct[lowdbKey.config.project.regexMapPath]){
            if(kv[lowdbKey.config.project.regexMapPath_regexKey].test(filepath)){

            }
        }
    }else{
        realpath=fsTool.formatFilepath(projectFilePath,filepath.replace('.','/'));
    }


    //项目文件内容
    var content=obj[ccDataKey.ccData.filecontext]
    //对内容进行替换
    if(projectObjct[lowdbKey.config.projectMap.kv]){
        for(kv in projectObjct[lowdbKey.config.projectMap.kv]){
            content=content.replace(kv[lowdbKey.config.projectMap.kv_keyKey],kv[lowdbKey.config.projectMap.kv_valueKey])
        }
    }

    console.log(
        fsTool.writeFileSync(realpath,obj[ccDataKey.ccData.filename],content)
    )
}

exports.loadCCData = loadCCData