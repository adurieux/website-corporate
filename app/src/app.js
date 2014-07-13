'use strict';

angular.module('websiteCorporateApp', [
    'ngCookies',
    'ngRoute',
    'ui.bootstrap',
]);


angular.module('websiteCorporateApp').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/service/index.html',
        controller: 'MainCtrl'
    });
    $routeProvider.when('/service/:family/:service', {
        templateUrl: 'src/service/index.html',
        controller: 'MainCtrl'
    });
    $routeProvider.when('/technology', {
        templateUrl: 'src/technology/index.html',
        controller: 'TechnologyCtrl'
    });
    $routeProvider.when('/cgu', {
        templateUrl: 'src/cgu/index.html',
        controller: 'CguCtrl'
    });
    $routeProvider.when('/cgu.html', {
        templateUrl: 'src/cgu/index.html',
        controller: 'CguCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});