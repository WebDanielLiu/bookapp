angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope, $state, LoginWinService) {
  $scope.login = function() {
    LoginWinService.show();
  };

  $scope.wander = function() {
    $state.go('tab.book');
  };
})

.controller('LoginCtrl', function($scope, $state, UserService, LoginWinService) {
  $scope.closeLogin = function() {
    LoginWinService.hide();
  };

  $scope.login = function() {

  };

  $scope.doLogin = function() {
    UserService.login().then(function() {
      LoginWinService.remove().then(function() {
        $state.go('tab.book');
      });
    });
  };
})

.controller('BookCtrl', function($scope, $ionicScrollDelegate) {

  var itemHeight = 54;
  $scope.onscroll = function() {
    var top = $ionicScrollDelegate.getScrollPosition().top,
        idx = Math.floor(Math.floor(top / itemHeight) / 20);

    //console.log(idx)
    chapters.forEach(function(ch, i) {
        ch.current = i == idx;
    });
    if (idx < 0) {
      idx = 0;
    }
    chapters[idx].current = true;
    $scope.$apply();
  };

  var chapters = [{
    name: 'intro',
    current: true
  }, {
    name: 'l'
  }, {
    name: 'ee'
  }, {
    name: 'v'
  }, {
    name: 'th'
  }, {
    name: 'e'
  }, {
    name: 'a'
  }, {
    name: 'oo'
  }, {
    name: 'r'
  }];
  $scope.chapters = chapters;

  var pages = [];
  for (var i=0; i<180; i++) {
    pages.push({
      page: i+1,
      chapter: chapters[Math.floor(i/20)]
    });
  }

  $scope.pages = pages;

  $scope.goTo = function(chapter) {
    $ionicScrollDelegate.scrollTo(0, chapters.indexOf(chapter) * 20 * itemHeight);
  };
})

.controller('PageCtrl', function($scope, $rootScope) {
  $scope.play = function() {
    $rootScope.loginWin.show();
  };
})

.controller('ExerCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

    $scope.exer = function() {
      alert(1)
    };
})

.controller('NotifCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope, $state, UserService, LoginWinService) {
  $scope.UserService = UserService;

  $scope.login = function() {
    LoginWinService.show();
  };

  $scope.logout = function() {
    UserService.logout().then(function() {
      $state.go('welcome');
    });
  };
});
