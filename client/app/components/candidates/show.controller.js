class ShowController {
  constructor($stateParams, CandidateService) {
    CandidateService.get($stateParams.candidateId).then( (candidate) => {
      console.log(candidate);
      this.candidate = candidate;
    });
  }
}

ShowController.$inject = ["$stateParams", "CandidateService"];
export default ShowController;
