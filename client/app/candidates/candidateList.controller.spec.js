import CandidatesModule from "./candidates"
import CandidateListController from "./candidateList.controller"
import setup from "sinon-stub-promise";

describe('CandidateListController', () => {
  beforeEach(window.module(CandidatesModule.name));

  let candidateListController, serviceMock, promise;

  beforeEach( () => {
    setup(sinon);
    promise= sinon.stub().returnsPromise();
    serviceMock = {
      query() {
        return promise;
      }
    }
    candidateListController = new CandidateListController(serviceMock);
  });

  it("queries the candidate list", () => {
    promise.resolves([{name: "Bob"}]);
    expect(candidateListController.candidates.length).to.equal(1);
  });
});
