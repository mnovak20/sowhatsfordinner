'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window,socket) {
    $scope.user = {};
    $scope.errors = {};
    


    // $scope.sendUser = function(){
    //   console.log(userName.name);
    //   socket.socket.emit('currentUser', userName);
    // };

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');


        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
