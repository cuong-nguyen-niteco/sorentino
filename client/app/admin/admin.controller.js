'use strict';

(function() {

  class AdminController {

    constructor($http, $state, $stateParams) {
      this.products = [];
      this.$http = $http;
      this.$state = $state;

      this.$http.get('/api/product/all').then(response => {
        let temp = response.data.data;
        temp.sort(function(a, b) {
          return a.priority - b.priority;
        });

        this.products = temp;
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

    onCreate(){
      this.$state.go("create-edit-product", {product: null});
    }
  }

  angular.module('sorentinoApp')
    .controller('AdminController', AdminController);

})();
