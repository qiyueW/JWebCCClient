require('electron-connect').client.create();



//------------------------------------------------------------
function f_save() {
    UIkit.notification({
        message: '保存成功!',
        status: 'success',
        timeout: 2000,
        pos: 'top-center'
    });
}