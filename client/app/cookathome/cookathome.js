'use strict';

angular.module('sowhatsfordinnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cookathome', {
        url: '/cookathome',
        templateUrl: 'app/cookathome/cookathome.html',
        controller: 'CookathomeCtrl'
      });
  });