'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('EatoutCtrl', function ($scope, $http, socket) {
   $scope.eatOutUsuals = [];

    $scope.sendRestaurant = function(){
    	// console.log($scope.cookAtHomeDish)
    	$http.post('/api/eatouts', {nameOfPlace: $scope.nameOfPlace, addressOfPlace: $scope.addressOfPlace, phoneOfPlace: $scope.phoneOfPlace, website: $scope.website})
    	$scope.nameOfPlace = '';
    	$scope.addressOfPlace = '';
    	$scope.phoneOfPlace = '';
    	$scope.website = '';
    }

    $http.get('/api/eatouts').success(function(eatOutUsuals) {
    	
      $scope.eatOutUsuals = eatOutUsuals;
      // console.log("this is $scope.eatOutUsuals: ", $scope.eatOutUsuals);
      socket.syncUpdates('eatout', $scope.eatOutUsuals);
      //eatoute is the database name
    });

    $scope.deleteThing = function(eatOutUsual) {
      $http.delete('/api/eatouts/' + eatOutUsual._id);
    };

     $scope.$on('$destroy', function () {
      socket.unsyncUpdates('eatout');
      //cookathome on line 27 is the database name
    });

  });
