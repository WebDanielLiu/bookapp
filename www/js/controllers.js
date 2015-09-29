angular.module('starter.controllers', [])

.controller('BookCtrl', function($scope, $ionicModal) {

  var chapters = ['intro', 'l', 'ee', 'v', 'th', 'e', 'a', 'oo', 'r'];
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
    alert(chapter)
  };

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
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
})

.controller('NotifCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
