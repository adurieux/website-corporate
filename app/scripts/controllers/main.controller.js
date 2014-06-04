'use strict';

/**
 * Modal that allows the user to register on the mailing list
 */
var MailingListModalController = function ($scope, $modalInstance, $http) {

    $scope.mailingListRecord = {
        origin: 0,   // Website Corporate Alkemics
        email: null,
        message: "Merci de bien vouloir m'inscrire à votre mailing list.",
    };

    /*
     * Register a user to the mailing list
     * Default is a POST to the endpoint
     * Fallback with a GET to have the email in the logs
     */
    $scope.ok = function () {
        var record = $scope.mailingListRecord;
        $http.post(
            'https://auth.alkemics.com/auth/v1/mailinglist/register',
            record
        ).success(function (response) {
            $modalInstance.close($scope.product);
        }).error(function (response) {
            $http.get(
                'https://auth.alkemics.com/auth/v1/mailinglist/register',
                record
            );
            $modalInstance.close($scope.product);
        });
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


angular.module('websiteCorporateApp').controller('MainCtrl', function ($scope, $http, $modal, $location) {

    var subscribe = function(){
        var modalInstance = $modal.open({
            templateUrl: '/views/mailinglist.html',
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
            $location.path('/flux/maker/product');
        });
    };
    $scope.subscribe = subscribe;
});