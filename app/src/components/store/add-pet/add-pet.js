import template from './add-pet.html';
import styles from './add-pet.scss';

export default {
  template,
  bindings: {
    add: '<',
    store: '<'
  },
  controller
};

controller.$inject = [ '$state' ];

function controller($state) {
  this.styles = styles;

  this.addNew = () => {
    this.add({
      name: this.name,
      animal: this.animal,
      store: this.store._id
    });
  };

  this.cancel = () => {
    $state.go('store.pets');
  };
}