'use strict';

angular.module('websiteCorporateApp', [
  'ngCookies',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cgu', {
        templateUrl: 'views/cgu.html',
        controller: 'MainCtrl'
      })
      .when('/cgu.html', {
        templateUrl: 'views/cgu.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
