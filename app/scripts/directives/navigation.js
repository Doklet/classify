'use strict';

angular.module('classifyApp')
  .controller('navigationCtrl', function($scope, $location, Client) {

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

    $scope.model = Client.getSelectedModel();
    
  });

angular.module('classifyApp')
  .directive('navigation', function() {
    return {
      controller: 'navigationCtrl',
      templateUrl: 'views/navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
