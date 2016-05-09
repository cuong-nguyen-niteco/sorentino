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

    this.$http.get('/api/constant/product/' + this.$stateParams.id).then(response => {
      this.product = response.data;
      this.changeColor(this.product.colors[0]);
   });
  }

  changeColor(color) {
    this.imageGalerry = [];
    this.color = color;
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
}

angular.module('sorentinoApp')
  .controller('ProductController', ProductController);

})();
