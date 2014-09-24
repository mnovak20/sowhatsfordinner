'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window,socket) {
    $scope.user = {};
    $scope.errors = {};
    var userName;
    


    // $scope.sendUser = function(){
    //   var userName = getCurrentUser;
    //   console.log(userName.name);
    //   socket.socket.emit('currentUser', userName.name);
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
          // userName = Auth.getCurrentUser();
          // // console.log(userName);
          // userName.$promise.then(function() {
          //   // console.log("USER AFTER RESOLUTION: ", userName);
          //   socket.socket.emit('currentUser', userName.name);  
          // })
  

          // function keepChecking() {
          //   if(useR.$resolved == false) {
          //     console.log("Wasnt ready");
          //     setTimeout(keepChecking, 0);
          //   } else {
          //     console.log("USER", useR);
          //   }
          // }
          // setTimeout(keepChecking, 0);

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
