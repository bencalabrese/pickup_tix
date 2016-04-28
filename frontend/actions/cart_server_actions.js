var CartConstants = require('../constants/cart_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var CartServerActions = {
  receiveSinglePerformance: function(fetchedPerformance) {
    dispatcher.dispatch({
      actionType: CartConstants.RECEIVE_SINGLE_PERFORMANCE,
      fetchedPerformance: fetchedPerformance
    });
  },

  updateCartStatus: function(newStatus) {
    dispatcher.dispatch({
      actionType: CartConstants.UPDATE_CART_STATUS,
      newStatus: newStatus
    });
  }
};

module.exports = CartServerActions;
