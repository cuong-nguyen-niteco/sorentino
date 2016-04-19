'use strict';

angular.module('sorentinoApp', [
  'sorentinoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('product', {
        url: '/product',
        template: '<product></product>'
      })
    ;

    $locationProvider.html5Mode(true);
  });
