angular.module('guildApp', [])
  .controller('ItemsCtrl', function($scope, $http){
    $http.get('items.json').then(function(articlesResponse) {
      $scope.articles = articlesResponse.data;
    });
  });
