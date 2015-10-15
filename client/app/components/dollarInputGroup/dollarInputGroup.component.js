import template from './dollarInputGroup.html';
import controller from './dollarInputGroup.controller';

let dollarInputGroupComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    transclude: true
  };
};

export default dollarInputGroupComponent;
