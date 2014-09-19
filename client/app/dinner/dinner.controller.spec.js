'use strict';

describe('Controller: DinnerCtrl', function () {

  // load the controller's module
  beforeEach(module('sowhatsfordinnerApp'));

  var DinnerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DinnerCtrl = $controller('DinnerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
