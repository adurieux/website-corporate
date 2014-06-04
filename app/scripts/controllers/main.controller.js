'use strict';

angular.module('websiteCorporateApp').controller('MainCtrl', function ($scope, $http) {

    $scope.mailingListRecord = {
        origin: 0,   // Website Corporate Alkemics
        email: null
    };

    $scope.isRegisteredInMailingList = false;    

    /*
     * Register a user to the mailing list
     * Default is a POST to the endpoint 
     * Fallback with a GET to have the email in the logs
     */
    $scope.registerMailingList = function () {
        var record = $scope.mailingListRecord;
        $http.post(
            'https://auth.alkemics.com/auth/v1/mailinglist/register',
            record
        ).success(function (response) {
            console.log($scope.isRegisteredInMailingList);
            $scope.isRegisteredInMailingList = true;
            console.log($scope.isRegisteredInMailingList);
        }).error(function (response) {
            $http.get(
                'https://auth.alkemics.com/auth/v1/mailinglist/register',
                record
            );
            $scope.isRegisteredInMailingList = true;
        });
    };
});