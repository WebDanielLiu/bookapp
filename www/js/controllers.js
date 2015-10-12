angular.module('remix.controllers', [])

.controller('WelcomeCtrl', function($scope, $state, LoginWinService) {
  $scope.login = function() {
    LoginWinService.show();
  };

  $scope.wander = function() {
    $state.go('tab.book');
  };
})

.controller('LoginCtrl', function($scope, $state, UserService, LoginWinService) {
  $scope.loginMode = true;

  $scope.switch = function() {
    $scope.loginMode = !$scope.loginMode;
  };

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

.controller('BookCtrl', function($scope, $ionicScrollDelegate, BookService, Api) {
  var itemHeight = 54;
  $scope.onscroll = function() {
    var top = $ionicScrollDelegate.getScrollPosition().top;

    setTimeout(function() {
      var newTop = $ionicScrollDelegate.getScrollPosition().top;
      if (newTop == top) {
        var chapters = $scope.chapters;
        var idx = Math.floor(Math.floor(newTop / itemHeight) / 10);

        chapters.forEach(function(ch, i) {
          ch.current = i == idx;
        });
        if (idx < 0) {
          idx = 0;
        }
        $scope.currentChapter = chapters[idx].name;
        $scope.$apply();
      }
    }, 100);
  };

  $scope.chapters = BookService.getChapters();
  $scope.currentChapter = $scope.chapters[0].name;
  $scope.pages = BookService.getPages();

  $scope.goTo = function(chapter) {
    //Api.getUserInfo(1).then(function(data) {
    //  alert(JSON.stringify(data));
    //}, function(res) {
    //  alert('failed')
    //});
    $scope.currentChapter = chapter.name;
    $ionicScrollDelegate.scrollTo(0, $scope.chapters.indexOf(chapter) * 10 * itemHeight);
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
