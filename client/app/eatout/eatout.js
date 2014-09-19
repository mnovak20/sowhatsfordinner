'use strict';

angular.module('sowhatsfordinnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eatout', {
        url: '/eatout',
        templateUrl: 'app/eatout/eatout.html',
        controller: 'EatoutCtrl'
      });
  });