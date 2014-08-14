'use strict';

angular.module('websiteCorporateApp', [
    'ngCookies',
    'ngRoute',
    'ui.bootstrap',
]);


angular.module('websiteCorporateApp').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    });    
    $routeProvider.when('/cgu', {
        templateUrl: 'views/cgu.html',
        controller: 'MainCtrl'
    });
    $routeProvider.when('/download', {
        templateUrl: 'views/download.html',
        controller: 'DownloadCtrl'
    });
    $routeProvider.when('/cgu.html', {
        templateUrl: 'views/cgu.html',
        controller: 'MainCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});