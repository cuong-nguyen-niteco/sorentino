'use strict';

class ContactUsController {
  constructor($http) {
    this.$http = $http;
    this.contactUs = {};

    this.$http.get('/api/setting/contact-us').then(response => {
      this.contactUs = response.data.data;
    });
  }

}

angular.module('sorentinoApp')
  .controller('ContactUsController', ContactUsController);
