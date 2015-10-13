import angular from 'angular';
import uiRouter from 'angular-ui-router';
import showTemplate from './show.html'
import CandidateService from './candidateService';
import CandidateListController from './candidateList.controller';
import ShowCandidateController from './show.controller';

let CandidatesModule = angular.module('candidates', [uiRouter])

.config(($stateProvider) => {
  $stateProvider.state('showCandidate', {
    url: '/candidates/:candidateId',
    template: showTemplate,
    controller: ShowCandidateController,
    controllerAs: "vm"
  });

})


CandidatesModule.service("CandidateService", CandidateService);

CandidatesModule.controller("CandidateListController", CandidateListController);

export default CandidatesModule;
