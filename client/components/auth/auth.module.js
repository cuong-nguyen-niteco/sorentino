'use strict';

angular.module('sorentinoApp.auth', [
  'sorentinoApp.constants',
  'sorentinoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
