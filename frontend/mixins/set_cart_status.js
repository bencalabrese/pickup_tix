var CartActions = require('../actions/cart_actions'),
    CurrentUserStateMixin = require('./current_user_state');

var SetCartStatus = {
  mixins: [CurrentUserStateMixin],

  goToDetail: function(event) {
    event.preventDefault();
    CartActions.updateCartStatus("closed");
  },

  goToPerformances: function(event) {
    event.preventDefault();
    if (this.state.currentUser) {
      CartActions.updateCartStatus("picking performance");
    } else {
      alert("Please login to book tickets");
    }
  },

  goToSeats: function(event) {
    event.preventDefault();
    if (this.state.currentUser) {
      CartActions.updateCartStatus("picking seats");
    } else {
      alert("Please login to book tickets");
    }
  },

  goToConfirmation: function(event) {
    event.preventDefault();
    if (this.state.currentUser) {
      CartActions.updateCartStatus("confirmation");
    } else {
      alert("Please login to book tickets");
    }
  }
};

module.exports = SetCartStatus;
