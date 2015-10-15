import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ssnComponent from './ssn.component';

let ssnModule = angular.module('ssn', [
  uiRouter
])

.directive('ssn', ssnComponent);

export default ssnModule;
