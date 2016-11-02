'use strict';

/**
 * @ngdoc overview
 * @name rock3rlabsApp
 * @description
 * # rock3rlabsApp
 *
 * Main module of the application.
 */
angular
  .module('rock3rlabsApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/analitycs', {
        templateUrl: 'views/analitycs.html',
        controller: 'analitycsCtrl',
        controllerAs: 'analitycs'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .when('/boardbrief', {
        templateUrl: 'views/404.html',
      })
      .when('/briefcase', {
        templateUrl: 'views/404.html',
      })
      .otherwise({
        redirectTo: '/analitycs'
      });
  });
