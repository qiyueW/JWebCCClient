const key = require('../Key.js')
const winConstVar = require('./_winConst.js')


var WIN = {};
var BrowserWindow;

exports.setBrowserWindow = function(obj) {
    BrowserWindow = obj;
}

//--------------------------------------------------------------------------------
exports.createRoot = function() { //根
    if (!WIN[winConstVar.key_root]) {
        private_createWindow(winConstVar.key_root, {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        }, 'index.html');
    }
    return WIN[winConstVar.key_root];
};

exports.createRootConfigServer = function() { //创建子窗口-服务器配置
    private_createRootConfigServer(winConstVar.key_root_config_server, '服务器配置', '_config/serverConfig.html');
};

exports.createRootConfigProject = function() { //创建子窗口-项目配置
    private_createRootConfigServer(winConstVar.key_root_config_project, '项目配置', '_config/projectConfig.html');
};
exports.createRootConfigProjectMap = function() { //创建子窗口-项目键值对配置
    private_createRootConfigServer(winConstVar.key_root_config_projectMap, '项目键值对配置', '_config/projectMapConfig.html');
};

//--------------------------------------------------------------------------------
exports.regColseEventIPC = function(ipcMain) {
    ipcMain.on(key.ipcKey_winMain_closeSystemWIN, (event, arg) => {
        WIN[arg].close();
    })
}

//--------------------------------------------------------------------------------
//根的子窗口
function private_createRootConfigServer(key, title, url) {
    if (!WIN[key]) {
        private_createWindow(key, {
            parent: WIN[winConstVar.key_root],
            title,
            title,
            frame: false,
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        }, url);
    }
    // // 打开开发者工具
    // WIN[key].webContents.openDevTools()
    return WIN[key];
}
//窗口
function private_createWindow(winkey, options, url, f_fun) {
    // 创建浏览器窗口。
    WIN[winkey] = new BrowserWindow(options)

    // 加载index.html文件
    if ("12".match(/^http:[\w]+$/)) {

    } else {
        WIN[winkey].loadFile(url)
    }
    // 当 window 被关闭，这个事件会被触发。
    WIN[winkey].on('closed', () => {
        if (f_fun) {
            f_fun();
        }
        WIN[winkey] = null
    })
    return WIN[winkey];
}