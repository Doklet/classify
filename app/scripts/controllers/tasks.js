'use strict';

angular.module('classifyApp')
  .controller('TasksCtrl', function($scope) {

    $scope.tasks = [{
      id: '0',
      name: 'Sort apples',
      description: 'Sort bad from good apples',
      text: 'Time to sort some apples',
      updated: '15:28'
    }, {
      id: '1',
      name: 'Register new purchase',
      description: 'Register a new purchase ',
      text: 'Lets register some customers ',
      updated: '13:18'
    }];

  });
