var windowsTools;
const template = [
    {
      label: '项目区',
      submenu: [
        { label: '配置项目',
          click () {
            console.log('👋')
          }
        },
        { label: '配置键值对' }
      ]
    },
    {
      label: '服务器区',
      submenu: [
        { label: '配置服务器',
          click () {
            windowsTools.createRootConfigServer();
          }
        }
      ]
    }
  ]
  function f_regMenu(m,tools){
    windowsTools=tools;
    const menu = m.buildFromTemplate(template)
    m.setApplicationMenu(menu)
  }


  exports.f_regMenu=f_regMenu;