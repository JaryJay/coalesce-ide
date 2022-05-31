const { app, BrowserWindow } = require('electron');
const path = require('path');

const windowProperties = {
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
    },
    frame: false
};


// ============================================================================
//
// I did not write this code!
// Boilerplate code copied from
// https://dev.to/olyno/how-to-create-an-electron-application-with-vite-im
//
// ============================================================================

app.setUserTasks([
    {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'New Window',
        description: 'Create a new window'
    }
]);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const isDev = process.env.IS_DEV === 'true';

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow(windowProperties);
    mainWindow.setMenuBarVisibility(false);

    // Open the DevTools.
    if (isDev) {
        mainWindow.loadURL('http://localhost:3000');
        // mainWindow.webContents.openDevTools();
    } else {
        // mainWindow.removeMenu();
        mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
    }
    return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    const mainWindow = createWindow();
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
