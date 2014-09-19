'use strict';

describe('Controller: OrderinCtrl', function () {

  // load the controller's module
  beforeEach(module('sowhatsfordinnerApp'));

  var OrderinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderinCtrl = $controller('OrderinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
