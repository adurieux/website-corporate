'use strict';

angular.module('websiteCorporateApp').controller('MainCtrl', [
    '$scope', '$http', '$modal', '$routeParams',
    function ($scope, $http, $modal, $routeParams) {

    $scope.interval = 5000;
    $scope.slides = {
        stream: {active: false},

        link: {active: false},
        coupon: {active: false},
        shoppinglist: {active: false},
        inbanner: {active: false},

        search: {active: false},
        substitution: {active: false},
        recommandation: {active: false},
    };

    var subscribe = function(){
        var modalInstance = $modal.open({
            templateUrl: '/src/mailinglist/modal.html',
            controller: MailingListModalController,
            resolve: {
                $http: function () {
                    return $http;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
        });
    };
    $scope.subscribe = subscribe;

    var init = function() {
        var service = $routeParams.service;
        if (service) {
            if (service == 'link') {
                service = 'shoppinglist';
            } else if (service == 'inbanner') {
                service = 'shoppinglist';
            } else if (service == 'search') {
                service = 'substitution';
            }
            for (var name in $scope.slides) {
                if (name === service) {
                    $scope.slides[name].active = true;
                    $scope.interval = 99999;
                    return;
                }
            }
        };
        $scope.slides.stream.active = true;
    };
    init();

}]);