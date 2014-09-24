'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('DinnerCtrl', function ($scope, $modal, Auth, socket, $http) {
  	$scope.eatOutUsuals = {};
  	$scope.suggestedDish = {};
  	$scope.suggestedDishUsual = {};
  	$scope.suggestedEatOut = {};
  	$scope.suggestedEatOutUsual = {};
  	$scope.suggestedOrderIn = {};
  	$scope.suggestedOrderInUsual = {};
  	var Address = '';
  	var Phone = '';
  	var Web = '';
    
    $http.get('/api/cookathomes').success(function(cookAtHomeUsuals) {	
      $scope.cookAtHomeUsuals = cookAtHomeUsuals;
    });

    $http.get('/api/eatouts').success(function(eatOutUsuals) {	
      // console.log(eatOutUsuals);
      $scope.eatOutUsuals = eatOutUsuals;
      // console.log("this is $scope.eatOutUsuals:" , $scope.eatOutUsuals);

    });

    $http.get('/api/orderins').success(function(orderInUsuals) {	
      // console.log(orderInUsuals);
      $scope.orderInUsuals = orderInUsuals;
    });





    // $scope.$watch('suggestedDish.val', function(newval, oldval) {
    // 	if(newval) {
    // 		console.log(newval)
    // 		console.log('suggested Dish on scope: ', $scope.suggestedDish.val);
    // 	}
    // })
    $scope.sendCookAtHome = function(){
    	var user = Auth.getCurrentUser();
   
    	if($scope.suggestedDish.val){
    		$http.post('/api/things', { message: 'We\'re going to eat at home tonight!', currentUser: user.name, timeSent: new Date(), dinnerType:'Cook at home', cookAtHomeDetails:{nameOfDish: $scope.suggestedDish.val, likes: 0}});
      	$scope.suggestedDish.val = '';
    	} else{
    		console.log($scope.suggestedDishUsual.val);
    		$http.post('/api/things', { message: 'We\'re going to eat at home tonight!', currentUser: user.name, timeSent: new Date(), dinnerType:'Cook at home', cookAtHomeDetails:{nameOfDish: $scope.suggestedDishUsual.val, likes: 0}});
    	}
    }
    $scope.sendEatOut = function(){
    	var user = Auth.getCurrentUser();
   	console.log($scope.eatOutUsuals.length);
    	if($scope.suggestedEatOut.val){

    		$http.post('/api/things', { message: 'We\'re going out tonight!', currentUser: user.name, timeSent: new Date(), dinnerType:'Eat out', eatOutDetails:{restName: $scope.suggestedEatOut.val, restPhone: $scope.suggestedEatOut.phone, restAddress: $scope.suggestedEatOut.address, restWeb: $scope.suggestedEatOut.website,  likes: 0}});
      	$scope.suggestedEatOut.val = '';
      	$scope.suggestedEatOut.phone = '';
      	$scope.suggestedEatOut.address = '';
      	$scope.suggestedEatOut.website = '';
    	} else{
    		for(var i = 0; i < $scope.eatOutUsuals.length; i++){
    				// console.log('eatOutUsuals: ', $scope.eatOutUsuals[i].nameOfPlace);
    				// console.log('suggestedEatOutUsuals: ', $scope.suggestedEatOutUsual.val);
    				// console.log($scope.eatOutUsuals[i].nameOfPlace == $scope.suggestedEatOutUsual.val);
    			if($scope.suggestedEatOutUsual.val == $scope.eatOutUsuals[i].nameOfPlace){
    				Phone = $scope.eatOutUsuals[i].phoneOfPlace;
    				Web = $scope.eatOutUsuals[i].website;
    				Address = $scope.eatOutUsuals[i].addressOfPlace;
    				$http.post('/api/things', { message: 'We\'re going out tonight!', currentUser: user.name, timeSent: new Date(), dinnerType:'Eat out', eatOutDetails:{restName: $scope.suggestedEatOutUsual.val, restPhone: Phone, restAddress: Address, restWeb: Web,  likes: 0}});
    			} else{
    				console.log("Didn't find a match");
    			} 
    		};
    		
    	}
    };

    $scope.sendOrderIn = function(){
    	var user = Auth.getCurrentUser();
   	console.log($scope.orderInUsuals.length);
    	if($scope.suggestedOrderIn.val){

    		$http.post('/api/things', { message: 'We\'re going to order in tonight!', currentUser: user.name, timeSent: new Date(), dinnerType:'Order in', orderInDetails:{restName: $scope.suggestedOrderIn.val, restPhone: $scope.suggestedOrderIn.phone, restAddress: $scope.suggestedOrderIn.address, restWeb: $scope.suggestedOrderIn.website,  likes: 0}});
      	$scope.suggestedOrderIn.val = '';
      	$scope.suggestedOrderIn.phone = '';
      	$scope.suggestedOrderIn.address = '';
      	$scope.suggestedOrderIn.website = '';
    	} else{
    		for(var i = 0; i < $scope.orderInUsuals.length; i++){
    				// console.log('eatOutUsuals: ', $scope.eatOutUsuals[i].nameOfPlace);
    				// console.log('suggestedEatOutUsuals: ', $scope.suggestedEatOutUsual.val);
    				// console.log($scope.eatOutUsuals[i].nameOfPlace == $scope.suggestedEatOutUsual.val);
    			if($scope.suggestedOrderInUsual.val == $scope.orderInUsuals[i].nameOfPlace){
    				Phone = $scope.orderInUsuals[i].phoneOfPlace;
    				Web = $scope.orderInUsuals[i].website;
    				Address = $scope.orderInUsuals[i].addressOfPlace;
    				console.log("Name:" + $scope.suggestedOrderInUsual.val + ", Phone:" + Phone + ", Address:"+ Address + ", Website:" + Web);
    				$http.post('/api/things', { message: 'We\'re going to order in tonight!', currentUser: user.name, timeSent: new Date(), dinnerType:'Order in', orderInDetails:{restName: $scope.suggestedOrderInUsual.val, restPhone: Phone, restAddress: Address, restWeb: Web,  likes: 0}});
    			} else{
    				console.log("Didn't find a match");
    			} 
    		};
    		
    	}
    }
  });
