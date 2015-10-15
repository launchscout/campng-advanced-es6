import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dollarInputGroupComponent from './dollarInputGroup.component';

let dollarInputGroupModule = angular.module('dollarInputGroup', [
  uiRouter
])

.directive('dollarInputGroup', dollarInputGroupComponent);

export default dollarInputGroupModule;
