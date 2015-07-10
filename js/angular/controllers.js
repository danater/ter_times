var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('HomeCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $scope.limit = 6;

    $http.get('js/angular/articles/articles.json').success(function(data) {
      $scope.allArticles = data;
      $scope.articles = $scope.allArticles;
      $scope.recent = [];
      for (var i = 0; i < $scope.allArticles.length; i++) {
        if($scope.articles[i].recent == true) {
          $scope.recent.push($scope.articles[i]);
        }
      };
      slice($scope.limit);
    });

    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

    function slice(limit) {
      $scope.slicedArticles = $scope.articles.slice(0, limit);
      $scope.chunkedData = chunk($scope.slicedArticles, 2);
    }

    $scope.loadMore = function() {
      console.log('run');
      $scope.limit = $scope.limit + 4;
      slice($scope.limit);
    }

    $scope.filter = function(type) {
      switch(type) {
        case 1:
          $scope.articles = $scope.allArticles;
          $scope.limit = 6;
          slice($scope.limit);
          break;
        case 2:
          $scope.articles = filterArticles('Arts & Culture');
          $scope.limit = 6;
          slice($scope.limit);
          break;
        case 3:
          $scope.articles = filterArticles('Entertainment');
          $scope.limit = 6;
          slice($scope.limit);
          break;
        case 4:
          $scope.articles = filterArticles('Travel');
          $scope.limit = 6;
          slice($scope.limit);
          break;
        case 5:
          $scope.articles = filterArticles('Food');
          $scope.limit = 6;
          slice($scope.limit);
          break;
        default:
          $scope.articles = $scope.allArticles;
          $scope.limit = 6;
          slice($scope.limit);
      }
    }

    filterArticles = function(category) {
      temp = [];
      for (var i = 0; i < $scope.allArticles.length; i++) {
        if($scope.allArticles[i].category == category) {
          temp.push($scope.allArticles[i]);
        }
      };

      return temp;
    }
  
}]);