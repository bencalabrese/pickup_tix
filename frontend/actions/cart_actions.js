var CartApiUtil = require('../util/cart_api_util');

var CartClientActions = {
  fetchSinglePerformance: function(id) {
    CartApiUtil.fetchSinglePerformance(id);
  },

  assignTickets: function(ticketIds) {
    CartApiUtil.assignTickets(ticketIds);
  }
};

module.exports = CartClientActions;
