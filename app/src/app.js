'use strict';

angular.module('websiteCorporateApp', [
    'ngCookies',
    'ngRoute',
    'ui.bootstrap',
    'sdk-dashboard'
]);


angular.module('websiteCorporateApp').config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'src/home/index-en.html',
        controller: 'MainCtrl'
    });

    $routeProvider.when('/service/:family/:service', {
        templateUrl: 'src/service/index.html',
        controller: 'ServiceCtrl'
    });

    $routeProvider.when('/about/technology', {
        templateUrl: 'src/about/technology/technology.html',
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

    $routeProvider.when('/download', {
        templateUrl: 'src/download/index.html',
        controller: 'DownloadCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});