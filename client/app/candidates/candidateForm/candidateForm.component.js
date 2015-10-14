import template from './candidateForm.html';
import controller from './candidateForm.controller';
import './candidateForm.styl';

let candidateFormComponent = function () {
  return {
    restrict: 'E',
    scope: {
      candidate: "=",
      save: "&"
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default candidateFormComponent;
