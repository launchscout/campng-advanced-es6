import CandidatesModule from "./candidates"
import NewCandidateController from "./new.controller"
import setup from "sinon-stub-promise";

describe('NewCandidateController', () => {
  beforeEach(window.module(CandidatesModule.name));

  let newCandidateController, serviceMock, stateMock, promise, candidate, stateTransitionSpy;

  beforeEach( () => {
    setup(sinon);
    promise= sinon.stub().returnsPromise();
    serviceMock = {
      create: promise
    };
    stateTransitionSpy = sinon.spy();
    stateMock = { go: stateTransitionSpy };
    newCandidateController = new NewCandidateController(serviceMock, stateMock);
    newCandidateController.candidate = {name: "Bob"};
  });

  it("saves the candidate", () => {
    promise.resolves({name: "Bob", id: 1});
    newCandidateController.save(candidate);
    expect(promise).to.have.been.calledWith(newCandidateController.candidate);
    expect(stateTransitionSpy).to.have.been.calledWith("showCandidate", {id: 1});
  });
});
