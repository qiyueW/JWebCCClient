const key = require('../_key/_Key')
const winKey = require('../_key/_winKey')

var WIN = {};
var BrowserWindow;

exports.setBrowserWindow = function(obj) {
    BrowserWindow = obj;
}

exports.createWindow = {
    root: function(rootPage) { //根
        if (!WIN[winKey.objects.root]) {
            private_createWindow(winKey.objects.root, {
                width: 800,
                height: 600,
                show: false,
                webPreferences: {
                    nodeIntegration: true
                }
            }, rootPage);
        }
        return WIN[winKey.objects.root];
    },
    config: {
        server: function() { //创建子窗口-服务器配置
            private_createRootConfigServer(winKey.objects.config.server, '服务器配置', 'module/_config/serverConfig.html');
        },
        project: function() { //创建子窗口-项目配置
            private_createRootConfigServer(winKey.objects.config.project, '项目配置', 'module/_config/projectConfig.html');
        },
        projectMap: function() { //创建子窗口-项目键值对配置
            private_createRootConfigServer(winKey.objects.config.projectMap, '项目键值对配置', 'module/_config/projectMapConfig.html');
        }
    },
    usersession: {
        login: function() {
            private_createRootConfigServer(winKey.objects.userSession.login, '登陆', './module/login/login.html')
        }
    }
}

function closeWin(key) {
    if (WIN[key]) {
        WIN[key].close();
    }
}

function showWin(key) {
    if (WIN[key]) {
        WIN[key].show()
    }
}

function hideWin(key) {
    if (WIN[key]) {
        WIN[key].hide()
    }
}

exports.closeWin = closeWin
exports.showWin = showWin
exports.hideWin = hideWin

//--------------------------------------------------------------------------------
exports.regColseEventIPC = function(ipcMain) {
    ipcMain.on(key.ipcKey.window.close, (event, arg) => {
        closeWin(arg);
    })
}

//--------------------------------------------------------------------------------
//根的子窗口
function private_createRootConfigServer(key, title, url) {
    if (!WIN[key]) {
        private_createWindow(key, {
            parent: WIN[winKey.key_root],
            title: title,
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
    WIN[winkey].loadFile(url)
        // 当 window 被关闭，这个事件会被触发。
    WIN[winkey].on('closed', () => {
        if (f_fun) {
            f_fun();
        }
        WIN[winkey] = null
    })
    return WIN[winkey];
}