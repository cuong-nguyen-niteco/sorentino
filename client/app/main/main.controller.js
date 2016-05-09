'use strict';

(function() {

class MainController {
  constructor($http, $stateParams, $state) {
    this.showSortBy = false;
    this.$http = $http;
    this.selectedSortBy = {id: -1, name: ""};

    this.collectionId = parseInt($stateParams.id);
    this.collection = {id:-1, name:"All Bags"};

    if (isNaN(this.collectionId)) {
      $state.go("main");
    }

    this.sortBy = [
      {
        id: 1,
        name: "Price: Low To High"
      },{
        id: 2,
        name: "Price: High To Low"
      }
    ];

    this.items = [];
    this.pagination = {
      page : 1,
      pageSize: 8,
      totalHit: 0
    };

    this.currItems = [];

    this.$http.get('/api/constant/product').then(response => {
      if (this.collectionId) {
        let collectionIdTmp = this.collectionId;
        let itemsTmp = this.items;

        response.data.products.forEach(function(item){
          if (item.collections.indexOf(collectionIdTmp) != -1) {
            itemsTmp.push(item);
          }
        });
      } else {
        this.items = response.data.products;
      }
      this.pagination.totalHit = this.items.length;
      this.currItems = this.items.slice(0, this.pagination.page * this.pagination.pageSize);
    });

    this.$http.get('/api/constant/collection').then(response => {
      let collectionTmp;
      if (this.collectionId) {
        let collectionIdTmp = this.collectionId;
        response.data.collections.forEach(function (item) {
          if (collectionIdTmp == item.id) {
            collectionTmp = item;
          }
        });
      }
      if (collectionTmp) {
        this.collection = collectionTmp;
      }
    });

  }

  showHideSortBy(show) {
    this.showSortBy = show;
  }

  setSortBy(item) {
    this.selectedSortBy = item;
    this.items.sort(function(a, b) {
      if (item.id == 1) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    this.pagination.page = 1;
    this.currItems = this.items.slice(0, this.pagination.page * this.pagination.pageSize);
  }

  loadMore() {
    let offset = this.currItems.length;
    this.pagination.page++;
    let newItems = this.items.slice(offset, this.pagination.page * this.pagination.pageSize);
    let currItemTmp = this.currItems;
    newItems.forEach(function(item){
      currItemTmp.push(item);
    });
  }
}

angular.module('sorentinoApp')
  .controller('MainController', MainController);

})();
