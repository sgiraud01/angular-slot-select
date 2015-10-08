'use strict';

describe('Directive: slotSelect', function () {

  // load the directive's module
  beforeEach(module('angularSlotSelectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slot-select></slot-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slotSelect directive');
  }));
});
