import CandidatesModule from './candidates'
import CandidatesController from './candidates.controller';
import CandidatesComponent from './candidates.component';
import CandidatesTemplate from './candidates.html';

describe('Candidates', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CandidatesModule.name));
  beforeEach(inject((_$rootScope_, $controller) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      var mockCandidateService = {
        query() {
          return {
            then(success, fail) {
              success([]);
            }
          }
        }
      };
      return new CandidatesController(mockCandidateService);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('candidates');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CandidatesTemplate).to.match(/{{\s?candidate\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CandidatesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CandidatesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CandidatesController);
      });
  });
});
