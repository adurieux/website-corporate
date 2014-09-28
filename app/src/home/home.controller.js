'use strict';

angular.module('websiteCorporateApp').controller('MainCtrl', [
    '$scope', '$modal', '$anchorScroll', '$location',
    function ($scope, $modal, $anchorScroll, $location) {

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

    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };

    $scope.range = function(n) {
        return new Array(n);
    };

}]);