'use strict';

class AboutUsAdminController {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.editorOptions = {
      language: 'en',
      allowedContent: true,
      entities: false
    };

    this.aboutUs = {};
    this.message = "";

    this.$http.get('/api/setting/about-us').then(response => {
      this.aboutUs = response.data.data;
    });
  }

  submit() {
    this.$http.post('/api/setting/edit', {setting: this.aboutUs}).then(response => {
      if (response.data.err) {
        this.message = "Update Error!"
      } else {
        this.message = "Update Successfully!"
      }
    })
  }
}

angular.module('sorentinoApp')
  .controller('AboutUsAdminController', AboutUsAdminController);
