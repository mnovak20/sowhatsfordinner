'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('MainCtrl', function ($log, $scope, $http, socket ,Auth, chatMessage, $modal) {
    $scope.awesomeThings = [];
    $scope.openSockets = {};
    $scope.suggestDish = '';
    var user = Auth.getCurrentUser();
    var activeUsers = '';

    

    $scope.openModal = function () {

    var modalInstance = $modal.open({
      templateUrl: 'dinnerModal.html',
      controller: DinnerInstanceCtrl,
      size: 'large',
      resolve: {
     
      }
    });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $http.get('/api/activeUsers').success(function(activeUsers) {
      $scope.activeUsers = activeUsers;
      socket.syncUpdates('activeUsers', $scope.activeUsers);
    });

    socket.socket.on('activeUsers', function(data){
      $scope.activeUsers = data;
      $scope.$apply();
      console.log($scope.activeUsers);
      // $http.post('/api/activeUsers', {activeUser : data} ).success(function() {
      // });
    });

    user.$promise.then(function() {
      socket.socket.emit('currentUser', user.name);
      socket.socket.emit('getUsers');
    });

    



    $scope.addThing = function() {
      $http.post('/api/things', { message: $scope.newThing, currentUser: user.name, timeSent: new Date()});
      $scope.newThing = '';

      // if($scope.newThing) {
      //  $http.post('/api/things', { message: $scope.newThing, currentUser: user.name, timeSent: new Date()});
      //  $scope.newThing = '';
      // }else{
      // $scope.newThing = 'You need to type something in';
      // }
    };

    $scope.sw4d = chatMessage.sw4d;
    // $scope.suggestEAH = chatMessage.suggestEAH;
    // $scope.suggestEAHdish = chatMessage.suggestEAHdish;
    // $scope.suggestOI = chatMessage.suggestOI;


    // $scope.suggest = function(){

    //   $http.post('/api/things', {name: $scope.suggestDish , currentUser: user.name, timeSent: new Date()});
    // };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.like = function(thing) {
      if(thing.dinnerType == 'Eat out'){
        thing.eatOutDetails.likes++;
      }else if (thing.dinnerType == 'Order in'){
        thing.orderInDetails.likes++;
      }else if (thing.dinnerType  == 'Cook at home'){
         thing.cookAtHomeDetails.likes++;
      }
      $http.put('/api/things/' + thing._id, thing);
    };

    $scope.$on('$put', function () {
      socket.unsyncUpdates('thing');
    });


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  })

  


  .controller('suggestDishCtrl', function($scope, $http, Auth, chatMessage){


  })

  .factory('chatMessage', function($http,socket,Auth){
    var user = Auth.getCurrentUser();
    // var suggestEAHdish = '';
    // var suggestOrderInPlace = '';


    return {
      

      sw4d :function(){
        return $http.post('/api/things', {message: 'So what\'s for dinner?', currentUser: user.name, timeSent: new Date()})

      },
      suggestEAH : function(){
        $http.post('/api/things', {message: this.suggestEAHdish, dinnerType: 'Cook at home - ' ,currentUser:user.name, timeSent: new Date()})
        this.suggestEAHdish = '';
      },
      suggestOI : function(){
        $http.post('/api/things', {message: this.suggestOrderInPlace, dinnerType: 'Order in from - ' ,currentUser:user.name, timeSent: new Date()})
        this.suggestOrderInPlace = '';
      }
    };
  })


var DinnerInstanceCtrl = function ($scope, $modalInstance, $http, Auth) {
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

    $http.get('/api/eatouts').success(function(eatOutUsuals) {  
      // console.log(eatOutUsuals);
      $scope.eatOutUsuals = eatOutUsuals;
      // console.log("this is $scope.eatOutUsuals:" , $scope.eatOutUsuals);
    });

    $scope.sendGraze = function(){
      var user = Auth.getCurrentUser();
      $http.post('/api/things', { message: 'We\'re grazing tonight.', currentUser: user.name, timeSent: new Date(), dinnerType: 'graze'});
    }

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


    $http.get('/api/orderins').success(function(orderInUsuals) {  
      // console.log(orderInUsuals);
      $scope.orderInUsuals = orderInUsuals;
    });

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

// .service('chatMessage', function($http,socket,Auth){
//     this.user = Auth.getCurrentUser();
//     this.sw4d = function(){
//       return $http.post('/api/things', {name: 'So what\'s for dinner?', currentUser: user.name, timeSent: new Date()});
//     };

//   })




