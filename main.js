var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var updater = require('electron-updater');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
    console.log(0)
app.on('ready', function() {
    console.log(1)

  updater.on('ready', function () {
    console.log(2)

    // Create the browser window.
    console.log(__dirname)
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/electron/dev.html');

    // Open the devtools.
    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  });

  updater.on('updateRequired', function () {        
      app.quit();
  });

  updater.on('updateAvailable', function () {
      mainWindow.webContents.send('update-available');
  });
  
  var customLogger = {
    log: console.log,
    error: console.error,
    info: console.info,
    warn: console.warn,
    debug: console.debug
  };

  updater.start(customLogger);
});

