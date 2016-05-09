'use strict';

class NavbarController {
  constructor($http) {
    this.$http = $http;
    this.menu = [];
  }

  $onInit() {
    this.$http.get('/api/constant/menu').then(response => {
      this.menu = response.data.menu;
      this.$http.get('/api/constant/collection').then(response => {
        for(let i=0; i<this.menu.length; i++) {
          if (this.menu[i].name.toLowerCase() === "collections") {
            this.menu[i].items = response.data.collections;
            break;
          }
        }
      });
    });


  }
}

angular.module('sorentinoApp')
  .controller('NavbarController', NavbarController);
