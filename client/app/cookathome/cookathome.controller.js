'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('CookathomeCtrl', function ($scope, $http, socket) {
  	$scope.cookAtHomeUsuals = [];

    $scope.sendDish = function(){
    	// console.log($scope.cookAtHomeDish)
    	$http.post('/api/cookathomes', {nameOfDish: $scope.cookAtHomeDish})
    	$scope.cookAtHomeDish = '';
    }

    $http.get('/api/cookathomes').success(function(cookAtHomeUsuals) {
    	
      $scope.cookAtHomeUsuals = cookAtHomeUsuals;
      console.log($scope.cookAtHomeUsuals);
      socket.syncUpdates('cookathome', $scope.cookAtHomeUsuals);
      //cookathome on line 17 is the database name
    });


     $scope.deleteThing = function(cookAtHomeUsual) {
      $http.delete('/api/cookathomes/' + cookAtHomeUsual._id);
    };

     $scope.$on('$destroy', function () {
      socket.unsyncUpdates('cookathome');
      //cookathome on line 27 is the database name
    });

  });
