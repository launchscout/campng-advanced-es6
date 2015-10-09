class CandidatesController {
  constructor(CandidateService) {
    this.name = 'candidates';
    this.candidateService = CandidateService;
    this.candidateService.query().then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

CandidatesController.$inject = ["CandidateService"];

export default CandidatesController;
