class CandidateService {
  constructor($http) {
    this.http = $http;
  }

  query() {
    return this.http.get("/candidates").then( (response) => {
      console.log("in the service promise");
      return response.data;
    });
  }

  get(candidateId) {
    return this.http.get(`/candidates/${candidateId}`).then( (response) => {
      return response.data;
    });
  }

  create(candidate) {
    return this.http.post("/candidates", candidate).then( (response) => {
      return response.data;
    });
  }

  update(candidate) {
    return this.http.post(`/candidates/${candidate.id}`, candidate).then( (response) => {
      return response.data;
    });
  }

}

CandidateService.$inject = ["$http"];

export default CandidateService;
