'use strict';

angular.module('websiteCorporateApp').controller('DownloadCtrl', [
    '$scope', '$http', '$modal',
    function ($scope, $http, $modal) {

    var subscribe = function(){
        var modalInstance = $modal.open({
            templateUrl: '/src/mailinglist/modal.html',
            controller: 'DownloadModalCtrl'
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
        });
    };
    $scope.subscribe = subscribe;
}]);
