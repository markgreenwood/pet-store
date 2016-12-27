import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    storesList: '<'
  },
  controller
};

controller.$inject = [ 'storeService', '$state', '$log' ];

function controller(storeService, $state, $log) {

  this.styles = styles;

  $log.log('Initializing stores controller');

  this.add = (store) => {
    console.log('Entering the stores controller add() function...');
    this.loading = true;
    $log.log('saving store ', store);
    console.log('Invoking the storeService add() function...');
    storeService.add(store)
      .then(saved => {
        console.log('Resolving promise: saved ', saved);
        $log.log('saved ', saved);
        this.loading = false;
        console.log('Pushing to stores list: ', saved);
        this.storesList.push(saved);
        $state.go('stores.all');
      })
      .catch(err => {
        $log.log('error ', err);
      });
  };
}