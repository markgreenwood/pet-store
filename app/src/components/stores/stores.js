import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller: function() {
    this.styles = styles;
  }
};