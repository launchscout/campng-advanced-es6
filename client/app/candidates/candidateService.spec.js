import CandidatesModule from "./candidates"

describe('CandidateService', () => {
  beforeEach(window.module(CandidatesModule.name));

  let candidateService, httpBackend;

  beforeEach(inject((CandidateService, $httpBackend) => {
    candidateService = CandidateService;
    httpBackend = $httpBackend;
  }));

  it("should find candidates", function() {
    let retrievedCandidates = [];
    httpBackend.expectGET('/candidates').respond([{name: "Bob"}]);
    candidateService.query().then( (candidates) => {
      retrievedCandidates = candidates;
      expect(retrievedCandidates.length).to.equal(1);
    });
    httpBackend.flush();
  });

  it("should find candidate by id", function() {
    let retrievedCandidate = {};
    httpBackend.expectGET('/candidates/1').respond({name: "Bob", id: 1});
    candidateService.get(1).then( (candidate) => {
      retrievedCandidate = candidate;
      expect(retrievedCandidate.id).to.equal(1);
    });
    httpBackend.flush();
  });

});
