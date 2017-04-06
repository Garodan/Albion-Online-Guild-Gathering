var app = angular.module('guildsApp',[])
  app.controller('NewsCtrl', function($scope, $http){
    $http.get('news.json').then(function(newsResponse) {
      $scope.news = newsResponse.data;
    });
  });
