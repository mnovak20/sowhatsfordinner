'use strict';

angular.module('sowhatsfordinnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orderin', {
        url: '/orderin',
        templateUrl: 'app/orderin/orderin.html',
        controller: 'OrderinCtrl'
      });
  });