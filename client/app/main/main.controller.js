'use strict';

angular.module('sowhatsfordinnerApp')
  .controller('MainCtrl', function ($scope, $http, socket ,Auth, chatMessage) {
    $scope.awesomeThings = [];
    $scope.openSockets = {};
    $scope.suggestDish = '';
    var user = Auth.getCurrentUser();


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { message: $scope.newThing, currentUser: user.name, timeSent: new Date()});
      $scope.newThing = '';
    };

    $scope.sw4d = chatMessage.sw4d;
    $scope.suggestEAH = chatMessage.suggestEAH;
    $scope.suggestEAHdish = chatMessage.suggestEAHdish;
    $scope.suggestOI = chatMessage.suggestOI;


    // $scope.suggest = function(){

    //   $http.post('/api/things', {name: $scope.suggestDish , currentUser: user.name, timeSent: new Date()});
    // };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.like = function(thing) {
      thing.dinnerType.likes++;
      console.log(thing.dinnerType.likes);
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




// .service('chatMessage', function($http,socket,Auth){
//     this.user = Auth.getCurrentUser();
//     this.sw4d = function(){
//       return $http.post('/api/things', {name: 'So what\'s for dinner?', currentUser: user.name, timeSent: new Date()});
//     };

//   })




