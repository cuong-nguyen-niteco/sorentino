'use strict';

class ContactUsAdminController {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.editorOptions = {
      language: 'en',
      allowedContent: true,
      entities: false
    };

    this.contactUs = {};
    this.message = "";

    this.$http.get('/api/setting/contact-us').then(response => {
      this.contactUs = response.data.data;
    });
  }

  submit() {
    this.$http.post('/api/setting/edit', {setting: this.contactUs}).then(response => {
      if (response.data.err) {
        this.message = "Update Error!"
      } else {
        this.message = "Update Successfully!"
      }
    })
  }
}

angular.module('sorentinoApp')
  .controller('ContactUsAdminController', ContactUsAdminController);
