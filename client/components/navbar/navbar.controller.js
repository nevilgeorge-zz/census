'use strict';

angular.module('censusApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, 
    {
      'title': 'Sign up',
      'link': '/signup'
    },
    {
      'title': 'Profile',
      'link': '/Student/:id'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });