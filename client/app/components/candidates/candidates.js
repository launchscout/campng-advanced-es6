import angular from 'angular';
import uiRouter from 'angular-ui-router';
import candidatesComponent from './candidates.component';
import ShowCandidateController from './show.controller.js'
import NewCandidateController from './new.controller.js'
import showTemplate from './show.html'
import newTemplate from './new.html'

let candidatesModule = angular.module('candidates', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('newCandidate', {
      url: '/candidates/new',
      template: newTemplate,
      controller: NewCandidateController,
      controllerAs: "vm"
    })
    .state('showCandidate', {
      url: '/candidates/:candidateId',
      template: showTemplate,
      controller: ShowCandidateController,
      controllerAs: "vm"
    });
})

.directive('candidates', candidatesComponent);

export default candidatesModule;
