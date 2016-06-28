const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    title: 'Hyperfox'
  })
  mainWindow.loadURL(`http://lolcathost:3000`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})