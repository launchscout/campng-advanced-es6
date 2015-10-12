import CandidatesModule from "./candidates"

describe('CandidateService', () => {
  beforeEach(window.module(CandidatesModule.name));

  let candidateService, httpBackend;

  beforeEach(inject((CandidateService, $httpBackend) => {
    candidateService = CandidateService;
    httpBackend = $httpBackend;
  }));

  it("should find candidates", function() {
    httpBackend.expectGET('/candidates').respond([{name: "Bob"}]);
    candidateService.query().then( (candidates) => {
      expect(candidates.length).to.equal(1);
    });
    httpBackend.flush();
  });

});
