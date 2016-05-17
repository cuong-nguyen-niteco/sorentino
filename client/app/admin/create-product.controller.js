'use strict';

(function() {

  class CreateProductController {

    constructor($http, $stateParams, $state) {
      this.editorOptions = {
        language: 'en',
        allowedContent: true,
        entities: false
      };
      this.specDesc = "";
      this.specDetail = "";
      this.specMat = "";

      this.imageRoot = '/assets/images/products/';
      this.$http = $http;
      this.$state = $state;
      this.$stateParams = $stateParams;

      this.specDescShow = true;
      this.specDetailShow = false;
      this.specMatShow = false;

      this.isEditingMode = !!$stateParams.product;
      this.product = this.isEditingMode ? $stateParams.product : {};
      this.collectionModel = {};
      this.collections = [];
      this.colors = [];
      this.selectedColor = {};

      if (this.product.collections) {
        this.product.collections.forEach(item => {
          this.collectionModel[item] = item;
        });
      }

      if (this.product.colors) {
        this.product.colors.forEach((item,idx) => {
          let color = angular.copy(item);
          color.imageDisplay = "";
          color.id = idx + 1;
          color.images.forEach(ele => {
            color.imageDisplay += ele.replace(this.imageRoot, "") + ";";
          });
          this.colors.push(color);
        });
      }

      if (this.product.spec) {
        this.specDesc = this.product.spec.description;
        this.specDetail = this.product.spec.details;
        this.specMat = this.product.spec.material;
      }

      this.$http.get('/api/constant/collection').then(response => {
        this.collections = response.data.collections;
      });
    }

    changeSpecDescShow() {
      this.specDescShow = !this.specDescShow;
    }

    getTemplate(color) {
      if (color.id === this.selectedColor.id) return 'edit';
      else return 'display';
    };


    addColor() {
      let newColor = {id:(this.colors.length + 1), name: '', images: ''};
      this.colors.push(newColor);
      this.selectedColor = angular.copy(newColor);
    };

    editColor(color) {
      this.selectedColor = angular.copy(color);
    };

    deleteColor(color) {
      if (confirm("Delete this color?")) {
        for (let i = 0; i < this.colors.length; i++) {
          if (this.colors[i].id === color.id) {
            this.colors.splice(i, 1);
          }
        }
      }
    };

    saveColor(idx) {
      this.colors[idx] = angular.copy(this.selectedColor);
      this.reset();
    };

    reset() {
      this.selectedColor = {};
    };

    buildCollections() {
      let collections = [];
      for (let item in this.collectionModel) {
        if (this.collectionModel[item] !== false) {
          collections.push(item);
        }
      }
      return collections;
    }

    buildColorImages() {
      let colors = [];
      let root = this.imageRoot;
      this.colors.forEach(function(item){
        if (item.name && item.code && item.imageDisplay) {
          let color = {};
          color.name = item.name;
          color.code = item.code;
          color.images = [];
          item.imageDisplay.split(';').forEach(function(image){
            if (image) {
              color.images.push(`${root}${image.trim()}`);
            }
          });
          colors.push(color);
        }
      });
      return colors;
    }

    buildSpec() {
      return {
        description:  this.specDesc,
        details:  this.specDetail,
        material:  this.specMat
      }
    }

    submitProduct() {
      this.product.collections = this.buildCollections();
      this.product.colors = this.buildColorImages();
      this.product.spec = this.buildSpec();

      if (this.isEditingMode) {
        this.$http.post('/api/product/edit', {product: this.product}).then(response => {
          this.$state.go("admin");
        })
      } else {
        this.$http.post('/api/product/add', this.product).then(response => {
          this.$state.go("admin");
        })
      }
    }
  }

  angular.module('sorentinoApp')
    .controller('CreateProductController', CreateProductController);

})();
