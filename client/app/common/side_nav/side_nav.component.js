import template from './side_nav.html';
import controller from './side_nav.controller';
import './side_nav.styl';

let SideNavComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default SideNavComponent;
