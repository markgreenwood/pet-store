import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

import ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';
import 'angular-material/layouts/angular-material.layouts.min.css';
import 'angular-aria';
import 'angular-animate';

import routes from './routes';
import http from './http';
import auth from './auth';

const app = angular.module('petStoreApp', [
  components,
  services,
  uiRouter,
  angular.module('ui.router.state.events').name,
  defaultRoute,
  ngMaterial,
  dialog
]);

app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api');

app.config(http);
app.config(routes);
app.run(auth);