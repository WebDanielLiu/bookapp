1. install [Node.js](https://nodejs.org/en/)
1. npm install -g bower
1. npm install -g cordova ionic
1. run the following commands to add platforms
    1. ionic platform add ios
    1. ionic platform add android
1. bower install ngCordova
1. run the following commands to add plugins
    1. cordova plugin add org.apache.cordova.device
    1. cordova plugin add cordova-plugin-crosswalk-webview
    1. cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
    1. cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
    1. cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
1. build
    1. ionic build ios
    1. ionic build android
1. ionic emulate ios
1. ionic emulate android
