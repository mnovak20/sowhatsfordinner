'use strict';

describe('Controller: EatoutCtrl', function () {

  // load the controller's module
  beforeEach(module('sowhatsfordinnerApp'));

  var EatoutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EatoutCtrl = $controller('EatoutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
