'use strict';

(function() {

class ProductController {

  constructor($http) {
    this.$http = $http;

  }

  $onInit() {
    
  }
}

angular.module('sorentinoApp')
  .component('product', {
    templateUrl: 'app/product/product.html',
    controller: ProductController
  });

})();
