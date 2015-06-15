'use strict';

/**
 * @ngdoc function
 * @name komalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the komalApp
 */
angular.module('komalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
