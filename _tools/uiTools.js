//保存成功
function f_notification_save_ok() {
    f_notification('保存成功', 'success', 'top-center')
}
//保存失败
function f_notification_save_err() {
    f_notification('保存失败', 'danger', 'top-center')
}

//对html节点的取值。通过id，取value的值
function getValueById(id) {
    return window.document.getElementById(id).value;
}
//对html节点的设置值。通过id，设置value的值
function setValueById(id, value) {
    window.document.getElementById(id).value = value;
}

exports.notification = {
    login_ok: function() {
        f_notification('登陆成功', 'success', 'top-center')
    },
    login_err: function() {
        f_notification('登陆失败', 'danger', 'top-center')
    },
    loadData_ok: function() {
        f_notification('加载成功', 'success', 'top-center')
    },
    loadData_err: function() {
        f_notification('加载失败', 'danger', 'top-center')
    },

    message: function(message, isOK) {
        if (isOK) {
            f_notification(message, 'success', 'top-center')
        } else {
            f_notification(message, 'danger', 'top-center')
        }

    }
}

exports.f_notification_save_ok = f_notification_save_ok
exports.f_notification_save_err = f_notification_save_err

exports.getValueById = getValueById
exports.setValueById = setValueById


// status:
// primary	UIkit.notification("...", {status:'primary'})
// success	UIkit.notification("...", {status:'success'})
// warning	UIkit.notification("...", {status:'warning'})
// danger	UIkit.notification("...", {status:'danger'})

// pos
// top-left	UIkit.notification("...", {pos: 'top-left'})
// top-center	UIkit.notification("...", {pos: 'top-center'})
// top-right	UIkit.notification("...", {pos: 'top-right'})
// bottom-left	UIkit.notification("...", {pos: 'bottom-left'})
// bottom-center	UIkit.notification("...", {pos: 'bottom-center'})
// bottom-right	UIkit.notification("...", {pos: 'bottom-right'})

function f_notification(message, status, pos) {
    UIkit.notification({
        message: message,
        status: status,
        timeout: 2000,
        pos: pos
    });
}