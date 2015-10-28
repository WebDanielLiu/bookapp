angular.module('remix', ['ionic', 'ngCordova', 'remix.controllers', 'remix.services', 'remix.api', 'remix.ngIOS9UIWebViewPatch'])

.run(function($ionicPlatform, $state, UserService) {
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

    if (!UserService.isLoggedIn()) {
      $state.go('welcome');
    }
  });
})

.config(['$httpProvider', function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
  $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
  $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
  $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
  $httpProvider.defaults.useXDomain = true;
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'WelcomeCtrl'
  })
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
    .state('tab.play', {
      url:'/play',
      views: {
        'tab-book': {
          templateUrl: 'templates/tab-play.html',
          controller: 'PlayCtrl'
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
  $urlRouterProvider.otherwise('/welcome');

});
