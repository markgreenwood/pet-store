import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
  template,
  bindings: {
    storesList: '<'
  },
  controller
};

controller.$inject = [ 'storeService', '$state' ];

function controller(stores, $state) {
  this.styles = styles;

  this.gotoStore = (id) => {
    $state.go('store.pets', { id });
  };
}