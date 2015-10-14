import angular from 'angular';
import uiRouter from 'angular-ui-router';
import markdownEditorComponent from './markdownEditor.component';
import filters from '../../filters/filters';

let markdownEditorModule = angular.module('markdownEditor', [
  uiRouter,
  filters.name
])

.directive('markdownEditor', markdownEditorComponent);

export default markdownEditorModule;
