// 加载代码数据
const { ipcRenderer } = require('electron');
const key = require('../../../_key/_Key')

function loadCCData() {
    return ipcRenderer.sendSync(key.ipcKey.userSession.loadCCData, '');
}

exports.loadCCData = loadCCData