routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.all',
    url: '/all',
    resolve: {
      stores: [ 'storeService', stores => stores.getAll() ]
    },
    component: 'storesAll'
  });

  $stateProvider.state({
    name: 'stores.add',
    url: '/add',
    resolve: {
      add: [ 'storeService', stores => stores.add ]
    },
    component: 'newStore'
  });

  $stateProvider.state({
    name: 'store',
    url: '/{id}',
    abstract: true,
    resolve: {
      store: [ 'storeService', '$transition$', (stores, t) => stores.get(t.params().id) ]
    },
    component: 'store'
  });

  $stateProvider.state({
    name: 'store.pets',
    url: '/pets',
    component: 'storePets'
  });

  $stateProvider.state({
    name: 'store.addPet',
    url: '/add-pet',
    component: 'addPet'
  });

  $urlRouterProvider.otherwise('/stores/all');
}