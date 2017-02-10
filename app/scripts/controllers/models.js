'use strict';

angular.module('classifyApp')
  .controller('ModelsCtrl', function($scope, Client) {

    $scope.models = [{
      id: undefined,
      name: 'All models',
      description: 'Use all the models'
    }, {
      id: 'imagenet',
      name: 'Detect misced objects',
      description: 'Detect a misced amount of object (good on cats and dogs)'
    }, {
      id: 'apple',
      name: 'Detect anomalies on appels',
      description: 'Separate good from bad apples'
    }, {
      id: 'flower',
      name: 'Roses and tuplies',
      description: 'Detect roses and tulips'
    }];

    $scope.selected = function(model) {
      Client.setSelected(model);
    };

  });
