// 调试工具
// const client = require('electron-connect').client;

//electron框架
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const rootMenu = require('./module/rootMenu') //用户框架的 菜单

const wins = require('./resMain/winMain') //窗口集中管理
const configDB = require('./resMain/configDBMain');
const login = require('./resMain/loginMain')
const ccData = require('./resMain/loadCreateDataMain')

wins.setBrowserWindow(BrowserWindow); //初始化

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win
    // Electron 会在初始化后并准备
    // 创建浏览器窗口时，调用这个函数。
    // 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

async function createWindow() {
    var rs
    try {
        rs = await login.login()
    } catch (error) {
        console.log('........net err.......')
    }


    win = wins.createWindow.root('./module/index/index.html');
    if (rs == '1') {
        win.show();
    } else {
        wins.createWindow.usersession.login();
    }
    // 注册ipc监听
    wins.regColseEventIPC(ipcMain)
    configDB.regIPC_configDB(ipcMain)
    login.regIPC(ipcMain, win)
    ccData.regIPC(ipcMain)

    //注册菜单
    rootMenu.f_regMenu(Menu, wins)

    // 打开开发者工具
    // win.webContents.openDevTools()
}


// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow()
    }
})