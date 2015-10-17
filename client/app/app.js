import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Candidates from './candidates/candidates';

import "bootstrap-webpack";
import 'normalize.css';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  Candidates.name
])

.directive('app', AppComponent);
