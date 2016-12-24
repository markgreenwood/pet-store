import template from './new-store.html';
import styles from './new-store.scss';

export default {
  template,
  bindings: {
    add: '<'
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

  this.addNew = () => {
    this.add({
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