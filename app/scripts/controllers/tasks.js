'use strict';

/**
 * @ngdoc function
 * @name classifyApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the classifyApp
 */
angular.module('classifyApp')
  .controller('TasksCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
