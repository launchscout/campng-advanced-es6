class SideNavController {
  constructor(CandidateService) {
    this.name = 'candidates';
    this.candidateService = CandidateService;
    this.candidateService.query().then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

SideNavController.$inject = ["CandidateService"];

export default SideNavController;
