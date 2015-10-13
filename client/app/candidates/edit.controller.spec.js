import CandidatesModule from "./candidates"
import EditCandidateController from "./edit.controller"
import setup from "sinon-stub-promise";

describe('EditCandidateController', () => {
  beforeEach(window.module(CandidatesModule.name));

  let editCandidateController, serviceMock, stateMock, getPromise, updatePromise, candidate, stateTransitionSpy;

  beforeEach( () => {
    setup(sinon);
    getPromise= sinon.stub().returnsPromise();
    updatePromise= sinon.stub().returnsPromise();
    serviceMock = {
      update: updatePromise,
      get: getPromise
    };
    stateTransitionSpy = sinon.spy();
    stateMock = { go: stateTransitionSpy };
  });

  it("finds the candidate", () => {
    getPromise.resolves({name: "Bob", id: 1});
    editCandidateController = new EditCandidateController(serviceMock, {id: 1}, stateMock);
    expect(editCandidateController.candidate.id).to.equal(1);
    expect(editCandidateController.candidate.name).to.equal("Bob");
    expect(getPromise).to.have.been.calledWith(1);
  });

  it("saves the candidate", () => {
    updatePromise.resolves({name: "Bob", id: 1});
    getPromise.resolves({name: "Bob", id: 1});
    editCandidateController = new EditCandidateController(serviceMock, {id: 1}, stateMock);
    editCandidateController.candidate = {name: "Bob", id: 1};
    editCandidateController.save(candidate);
    expect(updatePromise).to.have.been.calledWith(editCandidateController.candidate);
    expect(stateTransitionSpy).to.have.been.calledWith("showCandidate", {id: 1});
  });
});
