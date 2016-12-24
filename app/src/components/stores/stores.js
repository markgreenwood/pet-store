import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller
};

controller.$inject = [ 'storeService' ];

function controller(stores) {
  this.styles = styles;

  this.add = (store) => {
    this.loading = true;
    stores.add(store)
      .then(saved => {
        this.loading = false;
        this.stores.push(saved);
      });
  };
}