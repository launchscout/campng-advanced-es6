import angular from 'angular';
import helloFilter from './helloFilter';
import markdownFilter from './markdownFilter';

let FiltersModule = angular.module('app.filters', [])
  .filter("hello", helloFilter)
  .filter("markdown", markdownFilter)

export default FiltersModule;
