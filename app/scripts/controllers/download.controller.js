'use strict';

/**
 * Modal that allows the user to register on the mailing list
 */
var DownloadModalController = function ($scope, $modalInstance, $http, $location) {

    $scope.header = "Je reçois la présentation par email";
    $scope.mailingListRecord = {
        origin: 1,   // Download
        email: null,
        message: "Je souhaiterais recevoir la présentation Alkemics - IFLS du jeudi 05 juin."
    };

    /*
     * Register a user to the mailing list
     * Default is a POST to the endpoint
     * Fallback with a GET to have the email in the logs
     */
    $scope.ok = function () {
        (new Image()).src = 'https://auth.alkemics.com/auth/v1/mailinglist/register?email=' + $scope.mailingListRecord.email + '&message=' + $scope.mailingListRecord.message;
        var record = $scope.mailingListRecord;
        $http.post(
            'https://auth.alkemics.com/auth/v1/mailinglist/register',
            record
        ).success(function (response) {
            $modalInstance.close($scope.product);
        }).error(function (response) {
            $http.get(
                'https://auth.alkemics.com/auth/v1/mailinglist/register',
                {
                    params: record     
                }                
            );
            $modalInstance.close($scope.product);
        });
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


angular.module('websiteCorporateApp').controller('DownloadCtrl', [
    '$scope', '$http', '$modal', '$location',
    function ($scope, $http, $modal, $location) {

    var subscribe = function(){
        var modalInstance = $modal.open({
            templateUrl: '/views/mailinglist.html',
            controller: DownloadModalController,
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
}]);