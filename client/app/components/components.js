import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SideNav from './sideNav/sideNav';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  SideNav.name
]);

export default componentModule;
