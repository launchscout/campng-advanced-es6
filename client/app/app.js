import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import "bootstrap-webpack";

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])

.directive('app', AppComponent);
