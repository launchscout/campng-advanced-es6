import template from './markdownEditor.html';
import controller from './markdownEditor.controller';
import './markdownEditor.styl';

let markdownEditorComponent = function () {
  return {
    restrict: 'EA',
    scope: {
      text: "="
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default markdownEditorComponent;
