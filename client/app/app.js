'use strict';

angular.module('sorentinoApp', [
  'sorentinoApp.auth',
  'sorentinoApp.admin',
  'sorentinoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match',
  'jkuri.gallery',
  'ckeditor',
  'ngAnimate'
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
        controllerAs: 'cpCtrl',
        authenticate: true,
        params: {product: null}
      })
      .state('about-us', {
        url: '/about-us',
        templateUrl: 'app/about-us/about-us.html',
        controller: 'AboutUsController',
        controllerAs: 'auCtrl'
      })
      .state('contact-us', {
        url: '/contact-us',
        templateUrl: 'app/contact-us/contact-us.html',
        controller: 'ContactUsController',
        controllerAs: 'cuCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'adminCtrl',
        authenticate: 'admin'
      })
      .state('settings', {
        url: '/admin/settings',
        templateUrl: 'app/admin/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      })
      .state('about-us-admin', {
        url: '/admin/about-us',
        templateUrl: 'app/admin/about-us/about-us.html',
        controller: 'AboutUsAdminController',
        controllerAs: 'auaCtrl',
        authenticate: true
      })
      .state('contact-us-admin', {
        url: '/admin/contact-us',
        templateUrl: 'app/admin/contact-us/contact-us.html',
        controller: 'ContactUsAdminController',
        controllerAs: 'cuaCtrl',
        authenticate: true
      })
    ;

    $locationProvider.html5Mode(true);
  });
