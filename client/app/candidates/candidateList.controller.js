class CandidateListController {
  constructor(CandidateService) {
    CandidateService.query().then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

CandidateListController.$inject = ["CandidateService"];

export default CandidateListController;
