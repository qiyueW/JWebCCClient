var windowsTools;
const template = [{
        label: '菜单',
        submenu: []
    }, {
        label: '代码生成器配置',
        submenu: [{
                label: '服务器配置',
                click() {
                    windowsTools.createRootConfigServer();
                }
            },
            {
                label: '项目设置',
                click() {
                    windowsTools.createRootConfigProject();
                }
            },
            {
                label: '项目键值对设置',
                click() {
                    windowsTools.createRootConfigProjectMap();
                }
            }
        ]
    }

]

function f_regMenu(m, tools) {
    windowsTools = tools;
    const menu = m.buildFromTemplate(template)
    m.setApplicationMenu(menu)
}


exports.f_regMenu = f_regMenu;