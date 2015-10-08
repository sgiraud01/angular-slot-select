'use strict';

/**
 * @ngdoc directive
 * @name angularSlotSelectApp.directive:slotSelect
 * @description
 * # slotSelect
 */
angular.module('angularSlotSelectApp')
  .directive('slotSelect', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the slotSelect directive');
      }
    };
  });
