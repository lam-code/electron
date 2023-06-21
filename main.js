console.log("hello");

const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    
  })

  win.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

