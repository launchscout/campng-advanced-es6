import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SideNavComponent from './side_nav.component';

let SideNavModule = angular.module('SideNav', [
  uiRouter
])

.directive('sideNav', SideNavComponent);

export default SideNavModule;
