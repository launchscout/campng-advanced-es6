class CandidateService {
  constructor($http, $rootScope) {
    this.http = $http;
    this.rootScope = $rootScope;
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
      this.rootScope.$broadcast("candidateChange", candidate);
      return response.data;
    });
  }

  update(candidate) {
    return this.http.post(`/candidates/${candidate.id}`, candidate).then( (response) => {
      this.rootScope.$broadcast("candidateChange", candidate);
      return response.data;
    });
  }

}

CandidateService.$inject = ["$http", "$rootScope"];

export default CandidateService;
