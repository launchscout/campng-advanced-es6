import angular from 'angular';
import uiRouter from 'angular-ui-router';
import candidateFormComponent from './candidateForm.component';

let candidateFormModule = angular.module('candidateForm', [
  uiRouter
])

.directive('candidateForm', candidateFormComponent);

export default candidateFormModule;
