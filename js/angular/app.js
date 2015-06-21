var portfolioApp = angular.module('portfolioApp', [
  'ngRoute', 'portfolioControllers'
]);

//LOCAL
portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/js/angular/partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

//GITHUB
/*
portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/portfolio', {
        templateUrl: '/dana_ter/js/angular/partials/portfolio_list.html',
        controller: 'PortfolioListCtrl'
      }).
      when('/portfolio/:title', {
        templateUrl: '/dana_ter/js/angular/partials/portfolio_list.html',
        controller: 'PortfolioViewCtrl'
      }).
      otherwise({
        redirectTo: '/portfolio'
      });
  }]);

  */