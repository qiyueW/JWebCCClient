var WIN={};
var BrowserWindow;
var key_Root='Root';//存放根窗口
var key_root_config_server='root_config_server';//存放根窗口的子窗口-配置服务器
var key_root_config_project='root_config_project';//存放根窗口的子窗口-配置项目
var key_root_config_projectMap='root_config_projectMap';//存放根窗口的子窗口-配置项目用到的键值对


exports.setBrowserWindow=function(obj){
    BrowserWindow=obj;
}

//--------------------------------------------------------------------------------
exports.createRoot=function(){//根
  if(!WIN[key_Root]){
    private_createWindow(key_Root,{
      width: 800,height:600,
      webPreferences: {
        nodeIntegration: true
      }
    },'index.html');
  }
  return  WIN[key_Root];
};

exports.createRootConfigServer=function(){//创建子窗口
  private_createRootConfigServer(key_root_config_server,'服务器配置','_config/serverConfig.html');
};


//--------------------------------------------------------------------------------
exports.regColseEventIPC=function(ipcMain){
  ipcMain.on('winMain_closeSystemWIN', (event, arg) => {
    // console.log('aaaaaaaaaaaaa'+arg)
    WIN[arg].close();
})
}
//--------------------------------------------------------------------------------


//根的子窗口
function private_createRootConfigServer(key,title,url){
  if(!WIN[key]){
    private_createWindow(key
      ,{parent:WIN[key_Root]
        ,title,title
        ,frame :false
        ,width: 700
        ,height:400
        ,webPreferences: {
          nodeIntegration: true
        }
      }
      ,url);
  }
    // // 打开开发者工具
    // WIN[key].webContents.openDevTools()
  return  WIN[key];
}
//窗口
function private_createWindow (winkey,options,url,f_fun) {
    // 创建浏览器窗口。
    WIN[winkey]= new BrowserWindow(options)
  
    // 加载index.html文件
    if("12".match(/^http:[\w]+$/)){

    }else{
      WIN[winkey].loadFile(url)
    }
    // 当 window 被关闭，这个事件会被触发。
    WIN[winkey].on('closed', () => {
      if(f_fun){
        f_fun();
      }
      WIN[winkey] = null
    })
    return WIN[winkey];
  }

