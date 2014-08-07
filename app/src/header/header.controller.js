'use strict';

angular.module('websiteCorporateApp').controller('HeaderCtrl', [
    '$scope', '$http', '$modal', '$routeParams', '$window',
    function ($scope, $http, $modal, $routeParams, $window) {

    /**
     * Displays the contact form.
     */
    $scope.subscribe = function(message){
        var modalInstance = $modal.open({
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
}]);