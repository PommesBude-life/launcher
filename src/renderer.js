const information = document.getElementById('info')
information.innerText = `Diese App nutzt Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), und Electron (v${versions.electron()})`

window.addEventListener('DOMContentLoaded', () => {
    const version = window.electron.appVersion();
    document.title = `PommesBude.life | Launcher | v${version}`;
})