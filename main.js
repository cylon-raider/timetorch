const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

const isDev = false; // Set to true if using localhost during development

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize; // excludes taskbar
    const winWidth = 400;
    const winHeight = 200;
    const margin = 10;
    
    const win = new BrowserWindow({
        width: winWidth,
        height: winHeight,
        x: width - winWidth - margin,
        y: height - winHeight - margin,
        transparent: true,
        frame: false,
        hasShadow: false,
        alwaysOnTop: true,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          contextIsolation: true,
          nodeIntegration: false
        }
  });

  // Load the app: either dev server or built static files
  if (isDev) {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools(); // Only open DevTools in dev mode
  } else {
    win.loadFile(path.join(__dirname, 'ui', 'build', 'index.html'));
    win.webContents.openDevTools(); // Comment this out if you don’t want DevTools in prod
  }

  // Optional: You can position the window after load, or skip this
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('set-window-position', { x: 100, y: 100 }); // Only works if you're handling this in renderer
  });
}

// Electron app lifecycle
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
