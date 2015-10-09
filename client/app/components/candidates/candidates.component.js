import template from './candidates.html';
import controller from './candidates.controller';
import './candidates.styl';

let candidatesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'candidatesCtrl',
    bindToController: true
  };
};

export default candidatesComponent;
