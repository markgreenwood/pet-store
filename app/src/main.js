import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import routes from './routes';

const app = angular.module('petStoreApp', [ // eslint-disable-line no-unused-vars
  components,
  services,
  uiRouter,
  defaultRoute
]);

app.config(routes);
app.value('apiUrl', 'https://pet-store-401.herokuapp.com/api/unauth');