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
      .otherwise({
        redirectTo: '/'
      });
  });
