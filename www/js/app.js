// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $ionicModal, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $rootScope
    }).then(function(modal) {
      $rootScope.loginWin = modal;
    });

    // Triggered in the login modal to close it
    $rootScope.closeLogin = function() {
      $rootScope.loginWin.hide();
    };
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.book', {
    url: '/book',
    views: {
      'tab-book': {
        templateUrl: 'templates/tab-book.html',
        controller: 'BookCtrl'
      }
    }
  })
  .state('tab.book-page', {
    url: '/book/:page',
    views: {
      'tab-book': {
        templateUrl: 'templates/tab-page.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('tab.exer', {
    url: '/exer',
    views: {
      'tab-exer': {
        templateUrl: 'templates/tab-exer.html',
        controller: 'ExerCtrl'
      }
    }
  })
  .state('tab.exer-detail', {
    url: '/exer/:chatId',
    views: {
      'tab-exer': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.notif', {
    url: '/notif',
    views: {
      'tab-notif': {
        templateUrl: 'templates/tab-notif.html',
        controller: 'NotifCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/book');

});
