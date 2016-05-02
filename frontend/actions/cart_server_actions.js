var CartConstants = require('../constants/cart_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var CartServerActions = {
  receiveSinglePerformance: function(fetchedPerformance) {
    dispatcher.dispatch({
      actionType: CartConstants.RECEIVE_SINGLE_PERFORMANCE,
      fetchedPerformance: fetchedPerformance
    });
  },

  resetCart: function() {
    dispatcher.dispatch({
      actionType: CartConstants.RESET_CART
    });
  }
};

module.exports = CartServerActions;
