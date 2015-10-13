import CandidatesModule from "./candidates"
import ShowCandidateController from "./show.controller"
import setup from "sinon-stub-promise";

describe('ShowCandidateController', () => {
  beforeEach(window.module(CandidatesModule.name));

  let showCandidateController, serviceMock, promise;

  beforeEach( () => {
    setup(sinon);
    promise= sinon.stub().returnsPromise();
    serviceMock = {
      get: promise
    }
  });

  it("gets the candidate by id", () => {
    promise.resolves({name: "Bob", id: 1});
    showCandidateController = new ShowCandidateController(serviceMock, {id: 1});
    expect(showCandidateController.candidate.id).to.equal(1);
    expect(promise).to.have.been.calledWith(1);
  });
});
