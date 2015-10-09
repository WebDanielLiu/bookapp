1. nstall [Node.js](https://nodejs.org/en/)
1. Install bower
    * npm install -g bower
1. Install ionic
    * npm install -g cordova ionic
1. Run the following commands to add platforms. It will download files to folder platforms/.
    * ionic platform add ios
    * ionic platform add android
1. Install ng-cordova, the following command will download js files to www/lib/
    * bower install ngCordova
1. Run the following commands to add plugins. It will download files to folder plugins/
    * cordova plugin add cordova-plugin-whitelist
    * cordova plugin add org.apache.cordova.device
1. build
    * ionic build ios
    * ionic build android
1. Run in simulator. You need to have android studio and/or Xcode install on your computer.
    * ionic emulate ios
    * ionic emulate android
