'use strict';

class LoginController {
  constructor(Auth, $state, $stateParams) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.referrer = $stateParams.referrer;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        if (this.referrer) {
          this.$state.go(this.referrer);
        } else {
          this.$state.go('admin');
        }
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('sorentinoApp')
  .controller('LoginController', LoginController);
