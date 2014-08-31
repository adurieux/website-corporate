'use strict';

/**
 * Modal that allows the user to register on the mailing list
 */
angular.module('websiteCorporateApp').controller('ContactController', [
    '$scope', '$modalInstance', '$$sdkUser', '$location', '$window', 'user', 'message',
    function ($scope, $modalInstance, $$sdkUser, $location, $window, user, message) {

    message = message ? message : "Merci de m'inscrire à votre mailing list.";

    $scope.record = {
        message: message,
        type: null,
        subject: null,
        origin: 1, // Dashboard Flux
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        phonenumber: user.phoneNumber,
        page_url: $location.protocol() + '://' + $location.host() + $location.path()
    };

    $scope.submit = function () {
        if (!$scope.record.username) {
            $window.alert('Merci de préciser votre email.');
            return;
        }
        $$sdkUser.MailingListPost($scope.record).then(function (response) {
            $modalInstance.close();
        }, function (response) {
            $modalInstance.close();
        });
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
