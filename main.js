const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  win.removeMenu()
}
try {
  require('electron-reloader')(module)
} catch (_) {}

app.whenReady().then(createWindow)