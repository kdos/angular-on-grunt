'use strict';

/**
 * @ngdoc function
 * @name komalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the komalApp
 */
angular.module('komalApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.goTo = function(path){
    	$location.path(path);
    }
  });
