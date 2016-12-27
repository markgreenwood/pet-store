import template from './new-store.html';
import styles from './new-store.scss';

export default {
  template,
  require: {
    parent: '^stores'
  },
  controller
};

controller.$inject = [ '$state' ];

function controller($state) {

  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.address.street = '';
    this.address.city = '';
    this.address.state = '';
  };

  this.gotoStoresAll = () => {
    $state.go('stores.all');
  };

  this.addNew = () => {
    this.parent.add({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    });

    this.reset();
    $state.go('stores.all');
  };
}