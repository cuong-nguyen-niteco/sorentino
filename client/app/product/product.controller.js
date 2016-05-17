'use strict';

(function() {

class ProductController {

  constructor($http, $stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.product = {};
    this.color = {};
    this.currColorName = "";

    this.mainImage = "";
    this.mainImageIndex = -1;
    this.imageGalerry = [];
    this.spec = "";
    this.specType = 1;

    this.$http.get('/api/product/' + this.$stateParams.id).then(response => {
      this.product = response.data.product;
      this.changeColor(this.product.colors[0]);
      this.spec = this.product.spec.description;
      this.specType = 1;
   });
  }

  changeColor(color) {
    this.imageGalerry = [];
    this.color = color;
    this.currColorName = color.name;
    this.mainImage = this.color.images[0];
    this.mainImageIndex = 0;
    let imageGalerryTmp = this.imageGalerry;
    this.color.images.forEach(function(image){
      imageGalerryTmp.push({
        thumb:"", img: image, description:""
      });
    })
  }

  setMainImage(image) {
    this.mainImage = image;
    this.mainImageIndex = this.color.images.indexOf(image);
  }

  setSpec(spec, specType){
    this.spec = spec;
    this.specType = specType;
  }
}

angular.module('sorentinoApp')
  .controller('ProductController', ProductController);

})();
