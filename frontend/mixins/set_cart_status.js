var CartActions = require('../actions/cart_actions');

var SetCartStatus = {
  goToDetail: function(event) {
    event.preventDefault();
    CartActions.updateCartStatus("closed");
  },

  goToPerformances: function(event) {
    event.preventDefault();
    CartActions.updateCartStatus("picking performance");
  },

  goToSeats: function(event) {
    event.preventDefault();
    CartActions.updateCartStatus("picking seats");
  },

  goToConfirmation: function(event) {
    event.preventDefault();
    CartActions.updateCartStatus("confirmation");
  }
};

module.exports = SetCartStatus;
