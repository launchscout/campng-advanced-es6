import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SideNav from './sideNav/sideNav';
import starRating from './starRating/starRating';
import markdownEditor from './markdownEditor/markdownEditor';
import dollarInputGroup from './dollarInputGroup/dollarInputGroup';
import ssn from './ssn/ssn';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  SideNav.name,
  markdownEditor.name,
  starRating.name,
  dollarInputGroup.name,
  ssn.name
]);

export default componentModule;
