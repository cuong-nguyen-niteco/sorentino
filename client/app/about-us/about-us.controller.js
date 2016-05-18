'use strict';

class AboutUsController {
  constructor($http) {
    this.$http = $http;
    this.aboutUs = {};

    this.$http.get('/api/setting/about-us').then(response => {
      this.aboutUs = response.data.data;
    });
  }

}

angular.module('sorentinoApp')
  .controller('AboutUsController', AboutUsController);
