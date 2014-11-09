'use strict';

angular.module('censusApp')
.controller('MainCtrl', function ($scope, $http, socket) {
    $scope.loginWithFacebook = function() {
        $window.location.href = '/auth/facebook';
    }
});
