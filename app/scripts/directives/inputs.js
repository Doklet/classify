'use strict';

angular.module('classifyApp')
  .controller('inputsCtrl', function($scope, Client) {

	$scope.status = Client.getStatus();

  });

angular.module('classifyApp')
  .directive('inputs', function() {
    return {
      controller: 'inputsCtrl',
      templateUrl: 'views/inputs.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
