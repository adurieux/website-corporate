'use strict';

angular.module('websiteCorporateApp').controller('ServiceCtrl', [
    '$scope', '$http', '$modal', '$routeParams', '$window',
    function ($scope, $http, $modal, $routeParams, $window) {

    $scope.interval = 10000;
    $scope.slide = {screen: true};
    $scope.slides = {
        stream: {active: false, screen: true},

        link: {active: false, screen: true},
        coupon: {active: false, screen: true},
        shoppinglist: {active: false, screen: true},
        inbanner: {active: false, screen: true},

        scan: {active: false, screen: false},
        search: {active: false, screen: true},
        substitution: {active: false, screen: true},
        recommandation: {active: false, screen: true}
    };

    /**
     * Displays the contact form.
     */
    $scope.subscribe = function(message){
        $modal.open({
            templateUrl: '/src/contact/modal.html',
            controller: 'ContactController',
            resolve: {
                message: function() {
                    return message;
                },
                user: function() {
                    return {};
                }
            }
        });
    };

    $scope["goto"] = function(url) {
        $window.location.href = url;
    };

    var init = function() {
        var service = $routeParams.service;
        if (service) {
            // Some routes do not have a dedicated page yet
            if (service === 'link') {
                service = 'shoppinglist';
            } else if (service === 'inbanner') {
                service = 'shoppinglist';
            } else if (service === 'search') {
                service = 'substitution';
            }
            for (var name in $scope.slides) {
                if (name === service) {
                    $scope.slides[name].active = true;
                    $scope.slide = $scope.slides[name];
                    return;
                }
            }
        }
        $scope.slides.stream.active = true;
    };
    init();

}]);