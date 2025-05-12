const { contextBridge } = require('electron')
const { app: remoteApp } = require('@electron/remote')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    appVersion: () => remoteApp.getVersion()
    // we can also expose variables, not just functions
})