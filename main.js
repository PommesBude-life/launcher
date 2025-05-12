const { app, BrowserWindow } = require('electron')
const path = require('node:path')

// handling startup events
if (require('electron-squirrel-startup')) app.quit();

// handling auto update
require('update-electron-app');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        nodeIntegration: true,
        contextIsolation: false,
        icon: __dirname + '/src/img/favicon.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('src/index.html')
    win.setAutoHideMenuBar(true)
    win.setMenuBarVisibility(true)
    win.setAppDetails({
        appId: 'PommesBude.launcher',
        relaunchDisplayName: app.getName(),      // optional
    });

}

app.whenReady().then(() => {


    createWindow()

    app.setAppUserModelId("life.pommesbude.launcher.launcher");

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

