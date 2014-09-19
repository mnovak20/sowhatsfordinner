'use strict';

angular.module('sowhatsfordinnerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('groups', {
        url: '/groups',
        templateUrl: 'app/groups/groups.html',
        controller: 'GroupsCtrl',
        authenticate: true
      });
  });