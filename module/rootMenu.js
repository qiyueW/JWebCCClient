var wins;
const template = [{
        label: '菜单',
        submenu: []
    }, {
        label: '代码生成器配置',
        submenu: [{
                label: '项目设置',
                click() {
                    wins.createWindow.config.project();
                }
            },
            {
                label: '项目键值对设置',
                click() {
                    wins.createWindow.config.projectMap();
                }
            },
            { type: 'separator' },
            {
                label: '服务器配置',
                click() {
                    wins.createWindow.config.server();
                }
            }
        ]
    }

]

function f_regMenu(m, tools) {
    wins = tools;
    const menu = m.buildFromTemplate(template)
    m.setApplicationMenu(menu)
}


exports.f_regMenu = f_regMenu;