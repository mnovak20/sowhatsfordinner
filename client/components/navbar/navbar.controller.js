'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, socket) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      var userName = Auth.getCurrentUser();
      // console.log(userName);
      // userName.$promise.then(function() {
      // console.log("USER AFTER RESOLUTION: ", userName);
      socket.socket.emit('logOutUser', userName.name);
      // }
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });