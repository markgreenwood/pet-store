routes.$inject = [ '$stateProvider', '$urlRouteProvider' ];

export default function routes($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise('/');
}