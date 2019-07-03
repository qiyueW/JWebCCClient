var ipcMain;
var WIN;

function f_closeWin(winkey){
    ipcMain.on('closeWIN', (event, arg) => {
        WIN[winkey].close();
    })
}