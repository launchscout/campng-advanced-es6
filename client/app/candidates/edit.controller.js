class EditController {
  constructor(CandidateService, $stateParams, $state) {
    this.candidate = {};
    this.candidateService = CandidateService;
    this.state = $state;
    this.candidateService.get($stateParams.id).then( (candidate) => {
      this.candidate = candidate;
    });

  }
  save() {
    this.candidateService.update(this.candidate).then( (candidate) => {
      this.state.go("showCandidate", {id: candidate.id});
    });
  }
}

EditController.$inject = ["CandidateService", "$stateParams", "$state"];
export default EditController;
