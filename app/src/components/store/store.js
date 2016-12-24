import template from './store.html';
import styles from './store.scss';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller: function() {
    this.styles = styles;
  }
};