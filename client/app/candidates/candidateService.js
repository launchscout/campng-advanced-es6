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

}

CandidateService.$inject = ["$http"];

export default CandidateService;
