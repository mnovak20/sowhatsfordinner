'use strict';

angular.module('sowhatsfordinnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dinner', {
        url: '/dinner',
        templateUrl: 'app/dinner/dinner.html',
        controller: 'DinnerCtrl'
      });
  });