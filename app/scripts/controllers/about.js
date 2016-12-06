'use strict';

/**
 * @ngdoc function
 * @name classifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classifyApp
 */
angular.module('classifyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
