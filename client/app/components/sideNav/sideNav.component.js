import template from './sideNav.html';
import controller from './sideNav.controller';
import './sideNav.styl';

let sideNavComponent = function () {
  return {
    restrict: 'E',
    scope: {
      candidates: "="
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default sideNavComponent;
