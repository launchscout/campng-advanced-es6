import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Candidates from './candidates/candidates';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Candidates.name
]);

export default componentModule;
