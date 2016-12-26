import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller
};

controller.$inject = [ 'storeService', '$log' ];

function controller(stores, $log) {

  const self = this;
  self.styles = styles;

  self.add = (store) => {
    self.loading = true;
    $log.log('saving store ', store);
    stores.add(store)
      .then(saved => {
        $log.log('saved ', saved);
        self.loading = false;
        self.stores.push(saved);
      });
  };
}