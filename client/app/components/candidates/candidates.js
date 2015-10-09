import angular from 'angular';
import uiRouter from 'angular-ui-router';
import candidatesComponent from './candidates.component';

let candidatesModule = angular.module('candidates', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('candidates', {
      url: '/candidates',
      template: '<candidates></candidates>'
    });
})

.directive('candidates', candidatesComponent);

export default candidatesModule;
