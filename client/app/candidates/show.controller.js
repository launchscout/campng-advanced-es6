class ShowCandidateController {
  constructor(CandidateService, $stateParams) {
    CandidateService.get($stateParams.id).then( (candidate) => {
      this.candidate = candidate;
    });
  }
}

ShowCandidateController.$inject = ["CandidateService", "$stateParams"];

export default ShowCandidateController;
