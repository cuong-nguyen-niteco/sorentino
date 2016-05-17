'use strict';

angular.module('sorentinoApp', [
  'sorentinoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'jkuri.gallery',
  'ckeditor'
])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('product', {
        url: '/product/:id',
        templateUrl: 'app/product/product.html',
        controller: 'ProductController',
        controllerAs: 'prodCtrl'
      })
      .state('collection', {
        url: '/collection/:id',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('create-edit-product', {
        url: '/admin/create-edit-product',
        templateUrl: 'app/admin/create-product.html',
        controller: 'CreateProductController',
        controllerAs: 'adminCtrl',
        params: {product: {}}
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'adminCtrl'
      })
    ;

    $locationProvider.html5Mode(true);
  });
