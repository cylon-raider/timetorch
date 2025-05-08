// Import Electron's core modules to control the app and create windows
const { app, BrowserWindow } = require('electron');

// Import Node's built-in path module to handle file paths
const path = require('path');

// Function that creates a new browser window (the TimeTorch overlay)
function createWindow() {
  const win = new BrowserWindow({
    // Set fixed size for the overlay (adjust as needed)
    width: 400,
    height: 120,

    // Make background transparent (so it floats above other apps nicely)
    transparent: true,

    // Removes the OS frame (no minimize/maximize/close buttons)
    frame: false,

    // Keep this window always on top of other windows
    alwaysOnTop: true,

    // Enable use of preload.js and other web preferences
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Optional but useful later
    }
  });

  // DEV MODE: Load React development server (from `npm run react-start`)
  win.loadURL('http://localhost:3000');

  // PROD MODE (after running `npm run build`): Load the built static React files
  // Uncomment this line and comment out the line above when you're ready to package the app
  // win.loadFile(path.join(__dirname, 'ui/build/index.html'));
}

// Once Electron is ready, create the window
app.whenReady().then(createWindow);

// Handle macOS-specific behavior where apps stay open until Cmd+Q
app.on('window-all-closed', () => {
  // On Windows/Linux, quit the app when all windows are closed
  if (process.platform !== 'darwin') app.quit();
});
