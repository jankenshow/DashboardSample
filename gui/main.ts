const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadURL('http://localhost:8080')
}

app.whenReady().then(() => {
    createWindow()
})

app.on(
    'certificate-error',
    function (event, webContents, url, error, certificate, callback) {
        event.preventDefault()
        callback(true)
    }
)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
