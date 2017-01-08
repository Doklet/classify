'use strict';

describe('Controller: LabelsCtrl', function () {

  // load the controller's module
  beforeEach(module('classifyApp'));

  var LabelsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LabelsCtrl = $controller('LabelsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
