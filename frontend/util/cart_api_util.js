var CartServerActions = require('../actions/cart_server_actions'),
    browserHistory = require('react-router').browserHistory;

var CartApiUtil = {
  fetchSinglePerformance: function(id) {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/performances/' + id,
      success: function(fetchedPerformance) {
        CartServerActions.receiveSinglePerformance(fetchedPerformance);
      },
      error: function(response) {
      }
    });
  },

  assignTickets: function(ticketIds) {
    $.ajax({
      method: 'PATCH',
      dataType: 'json',
      url: 'api/tickets',
      data: { ticket_ids: ticketIds },
      success: function() {
        CartServerActions.updateCartStatus("checkout completed");
      },
      error: function(response) {
      }
    });
  }
};

module.exports = CartApiUtil;
