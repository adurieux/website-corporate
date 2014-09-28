'use strict';

/**
 * Directive that connects the login view to the authentication events broadcasted
 * on the event bus.
 */
angular.module('websiteCorporateApp').directive('randomCustomer', [
    '$interval',
    function ($interval) {
        // List of current customers
        var brandIds = [
            4310, 1068, 1042, 1070, 2696, 3750, 1064, 4667, 4666, 1630, 4205, 1295, 1594, 2630, 4380, 5061, 5062, 1052, 1316, 1703, 5063, 1096, 1659, 1413, 1600, 1660, 2560, 2615, 2708, 4069, 4315, 4394, 5075, 1552, 2608, 4891, 1463, 4507, 4892, 4894, 1297, 1106, 1284, 1212, 1305, 1312, 1314, 1387, 1453, 1454, 1462, 1477, 1508, 1509, 1513, 1582, 1592, 1629, 2994, 3013, 5079, 1036, 1077, 1108, 1114, 1116, 1126, 1150, 1153, 1226, 1349, 1350, 1386, 1561, 1599, 1632, 1640, 1680, 2563, 2588, 2703, 2726, 2749, 3777, 3868, 4106, 4196, 5086, 2949, 1030, 1065, 1227, 1581, 1420, 5111, 3773, 4475, 5117, 5122, 5106, 1094, 1354, 1445, 1482, 1542, 2942, 2950, 5113, 1372, 2597, 2635, 3011, 3019, 4105, 4768, 1130, 5136, 4732, 4748, 4508, 1586, 1101, 4548, 2926, 2612
        ];
        var getRandomBrandId = function() {
            return brandIds[Math.floor(Math.random()*brandIds.length)];
        };
        return {
            restrict: 'AEC',
            templateUrl: '/src/home/randomCustomer-view.html',
            link: function($scope, elem, attrs) {

                var count = parseInt(attrs.len, 10);
                var offset = 20;

                // Init
                $scope.brandIds = brandIds.slice(0 + offset, offset + count);

                // Refresh
                $interval(function(){
                    // Position of the element to change
                    var index = Math.floor(Math.random() * count);
                    // Find an element that is not in the current array
                    var brandId = getRandomBrandId();
                    while ($scope.brandIds.indexOf(brandId) !== -1) {
                        brandId = getRandomBrandId();
                    }
                    $scope.brandIds[index] = brandId;
                }, parseInt(attrs.interval, 10));

            }
        };
    }
]);
