'use strict';

class NavbarController {
  constructor($http) {
    this.$http = $http;
    this.menu = [];
  }

  $onInit() {
    this.$http.get('/api/constant').then(response => {
      this.menu = response.data.menu;
      this.$http.get('/api/constant/collection').then(response => {
        for(let i=0; i<this.menu.left.length; i++) {
          if (this.menu.left[i].name.toLowerCase() === "collections") {
            this.menu.left[i].items = response.data.collections;
            break;
          }
        }

        for(let i=0; i<this.menu.right.length; i++) {
          if (this.menu.right[i].name.toLowerCase() === "collections") {
            this.menu.right[i].items = response.data.collections;
            break;
          }
        }
      });
    });
  }

  isAcvite(name) {

  }
}

angular.module('sorentinoApp')
  .controller('NavbarController', NavbarController);
