'use strict';

(function() {

  class AdminController {

    constructor($http, $state, $stateParams) {
      this.products = [];
      this.$http = $http;
      this.$state = $state;

      this.$http.get('/api/product/all').then(response => {
        this.products = response.data.data;
      });
    }

    onDelete(product){
      if (confirm("Delete this product?")) {
        this.$http.post("/api/product/delete",{product:product}).then(function(response){
          console.log(response.data);
          product.hide = true;
        });
      }
    }

    onEdit(product){
      this.$state.go("create-edit-product", {product: product});
    }
  }

  angular.module('sorentinoApp')
    .controller('AdminController', AdminController);

})();
