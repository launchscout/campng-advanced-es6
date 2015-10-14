import angular from 'angular';
import uiRouter from 'angular-ui-router';
import starRatingComponent from './starRating.component';

let starRatingModule = angular.module('starRating', [
  uiRouter
])

.directive('starRating', starRatingComponent);

export default starRatingModule;
