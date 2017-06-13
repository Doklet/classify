'use strict';

angular.module('classifyApp')
  .controller('ModelsCtrl', function($scope, Client) {

    $scope.models = [
      // {
      //   id: 'imagenet',
      //   thumb: 'images/shafer.jpeg',
      //   name: 'Hundar',
      //   description: 'Detekterar olika hundraser'
      // }, 
      {
        id: 'apple',
        thumb: 'images/apple.jpg',
        name: 'Defekta äpplen',
        description: 'Skiljer bra från dåliga äpplen'
      }, {
        id: 'flower',
        thumb: 'images/roses.jpg',
        name: 'Blommor',
        description: 'Detekterar rosor och tulpaner'
      }, {
        id: 'home',
        thumb: 'images/home.jpg',
        name: 'Situationer',
        description: 'Detekterar olika situationer i hemmet'
      }
    ];

    $scope.selected = function(model) {
      Client.setSelectedModel(model);
    };

  });
