import angular from 'angular';
import CandidateService from './candidateService';

let CandidatesModule = angular.module('candidates', []);

CandidatesModule.service("CandidateService", CandidateService);

export default CandidatesModule;
