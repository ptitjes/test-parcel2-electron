import path from 'path';

import { app, BrowserWindow } from 'electron';
import { format } from 'url';

let mainWindow: BrowserWindow | undefined;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      nodeIntegration: true,
    },
  });

  if (!app.isPackaged) {
    await mainWindow.loadURL('http://localhost:3000');
  } else {
    await mainWindow.loadURL(
      format({
        pathname: path.join(__dirname, '../renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', async () => {
    mainWindow = undefined;
  });
});
