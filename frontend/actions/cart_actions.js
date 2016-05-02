var CartApiUtil = require('../util/cart_api_util'),
    CartConstants = require('../constants/cart_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var CartClientActions = {
  fetchSinglePerformance: function(id) {
    CartApiUtil.fetchSinglePerformance(id);
  },

  assignTickets: function(ticketIds) {
    CartApiUtil.assignTickets(ticketIds);
  },

  updateCartStatus: function(newStatus) {
    dispatcher.dispatch({
      actionType: CartConstants.UPDATE_CART_STATUS,
      newStatus: newStatus
    });
  },

  resetCart: function() {
    dispatcher.dispatch({
      actionType: CartConstants.RESET_CART
    });
  },

  addSingleTicket: function(id) {
    dispatcher.dispatch({
      actionType: CartConstants.ADD_SINGLE_TICKET,
      ticketId: id
    });
  },

  removeSingleTicket: function(id) {
    dispatcher.dispatch({
      actionType: CartConstants.REMOVE_SINGLE_TICKET,
      ticketId: id
    });
  }
};

module.exports = CartClientActions;
