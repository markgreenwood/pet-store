import angular from 'angular';
import './scss/main.scss';
import components from './components';
import uiRouter from 'angular-ui-router';
import routes from './routes';

const app = angular.module('petStoreApp', [ // eslint-disable-line no-unused-vars
  components,
  uiRouter
]);

app.config(routes);
