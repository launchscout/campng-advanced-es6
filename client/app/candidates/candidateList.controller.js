class CandidateListController {
  constructor(CandidateService, $scope) {
    this.candidateService = CandidateService;
    this.fetchCandidates();
    $scope.$on("candidateChange", () => {
      this.fetchCandidates();
    });
  }

  fetchCandidates() {
    this.candidateService.query().then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

CandidateListController.$inject = ["CandidateService", "$scope"];

export default CandidateListController;
