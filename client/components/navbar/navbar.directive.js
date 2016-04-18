'use strict';

angular.module('sorentinoApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav',
    link: function (scope, element) {
      element.addClass('nav-bar').addClass('nav-bar--fixed');
      $("navbar").headroom({
        "offset": 124,//$(window).height(),//TODO:get 100vh * 1.5
        "tolerance": {
          down: 0,
          up:100
        },
        "classes": {
          "initial": "animated"
          //"pinned": "slideInDown",
          //"unpinned": "slideOutUp"
        }
      });
    }
  }));
