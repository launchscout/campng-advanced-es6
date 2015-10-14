import angular from 'angular';
import helloFilter from './helloFilter';

let FiltersModule = angular.module('app.filters', [])
  .filter("hello", helloFilter)

export default FiltersModule;
