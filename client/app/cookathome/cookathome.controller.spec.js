'use strict';

describe('Controller: CookathomeCtrl', function () {

  // load the controller's module
  beforeEach(module('sowhatsfordinnerApp'));

  var CookathomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookathomeCtrl = $controller('CookathomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
