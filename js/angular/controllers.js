var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('PortfolioListCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $scope.publisher = '';
    $scope.category = '';

    $scope.getMyCtrlScope = function() {
      return $scope;   
    }

    $http.get('js/angular/articles/articles.json').success(function(data) {
      $scope.articles = data;
      $scope.chunkedData = chunk($scope.articles, 4);
      $scope.publishers = [];
      $scope.categories = [];
      for (var i = 0; i < $scope.articles.length; i++) {
        if($scope.publishers.indexOf($scope.articles[i].publisher)) {
          if($scope.publisher == '') {
            $scope.publisher = $scope.articles[i].publisher;
          }
          $scope.publishers.push($scope.articles[i].publisher);
        }
        if($scope.categories.indexOf($scope.articles[i].category)) {
          $scope.categories.push($scope.articles[i].category);
        }
      };
    });

    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

    $scope.clearFilter = function() {
      $scope.category = '';
    }

    $scope.isSelectedCat = function(c) {
      if($scope.category == c) {
        return true;
      }
    }

    $scope.isSelectedPub = function(p) {
      if($scope.publisher == p) {
        return true;
      }
    }

    $scope.isNoneSelected = function() {
      if($scope.category == '') {
        return true;
      }
    }

    
  
}]);

portfolioControllers.controller('AboutCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    
    $scope.article = $routeParams.article;
  
}]);

portfolioControllers.controller('NameCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    
    $scope.article = $routeParams.article;
  
}]);