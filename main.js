
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1360,
        height: 768,

        // Enable nodejs
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Set Icon.
    mainWindow.setIcon(path.join(__dirname, "/public/icon.png"));

    // If developement mode, open chrome devtools
    if (isDev) { mainWindow.webContents.openDevTools(); }
    mainWindow.removeMenu();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});