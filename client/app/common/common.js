import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import SideNav from './side_nav/side_nav'
import CandidateService from './candidateService.js';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  SideNav.name
]);

commonModule.service("CandidateService", CandidateService);

export default commonModule;
