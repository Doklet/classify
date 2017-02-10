'use strict';

/**
 * @ngdoc overview
 * @name classifyApp
 * @description
 * # classifyApp
 *
 * Main module of the application.
 */
angular
  .module('classifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/labels', {
        templateUrl: 'views/labels.html',
        controller: 'LabelsCtrl'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/task', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl'
      })
      .when('/dataset', {
        templateUrl: 'views/dataset.html',
        controller: 'DatasetCtrl'
      })
      .when('/models', {
        templateUrl: 'views/models.html',
        controller: 'ModelsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
