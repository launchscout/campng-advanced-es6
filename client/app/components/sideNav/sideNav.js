import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sideNavComponent from './sideNav.component';

let sideNavModule = angular.module('sideNav', [
  uiRouter
])

.directive('sideNav', sideNavComponent);

export default sideNavModule;
