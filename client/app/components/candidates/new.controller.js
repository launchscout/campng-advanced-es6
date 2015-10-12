class NewController {
  constructor(CandidateService, $state) {
    this.candidate = {};
    this.candidateService = CandidateService;
    this.state = $state;
  }
  save() {
    this.candidateService.create(this.candidate).then( (candidate) => {
      this.state.go("showCandidate", {candidateId: candidate.id});
    });
  }
}

NewController.$inject = ["CandidateService", "$state"];
export default NewController;
