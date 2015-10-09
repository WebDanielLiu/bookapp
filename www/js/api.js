angular.module('remix.api', [])

.factory('Api', function($q, $http) {

  return {
    getUserInfo: function(id) {
      return $q(function(resolve, reject) {
        $http.get('https://www.remixapi.net/api/UserInfo/GetById/' + id).then(function(response) {
          resolve(response.data);
        }, function(response) {
          reject(response);
        });
      });
    }
  }
});