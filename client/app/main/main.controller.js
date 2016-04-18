'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
    this.items = [
      "/assets/images/products/tui1.jpg",
      "/assets/images/products/tui2.jpg",
      "/assets/images/products/tui3.jpg",
      "/assets/images/products/tui2.jpg",
      "/assets/images/products/tui3.jpg",
      "/assets/images/products/tui1.jpg"
    ];
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }
}

angular.module('sorentinoApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
