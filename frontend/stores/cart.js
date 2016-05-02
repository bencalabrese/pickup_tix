var Store = require('flux/utils').Store,
    CartConstants = require('../constants/cart_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    CartStore = new Store(dispatcher);

// API
CartStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case CartConstants.RECEIVE_SINGLE_PERFORMANCE:
      resetPerformance(payload.fetchedPerformance);
      setTickets(payload.fetchedPerformance);
      this.__emitChange();
      break;

    case CartConstants.ADD_SINGLE_TICKET:
      addTicket(payload.ticket);
      this.__emitChange();
      break;

    case CartConstants.REMOVE_SINGLE_TICKET:
      removeTicket(payload.ticket);
      this.__emitChange();
      break;

    case CartConstants.UPDATE_CART_STATUS:
      updateCartStatus(payload.newStatus);
      this.__emitChange();
      break;

    case CartConstants.RESET_CART:
      resetCart();
      this.__emitChange();
      break;
  }
};

CartStore.performance = function() {
  if (!_performance) { return null; }
  return $.extend(true, {}, _performance);
};

CartStore.cartStatus = function() {
  return _cartStatus;
};

CartStore.tickets = function() {
  var result = [];

  Object.keys(_tickets).forEach(function(id){
    result.push($.extend(true, {}, _tickets[id]));
  });

  return result;
};

// private
var _performance = null;
var _tickets = {};
var _cartStatus = "closed";

function resetPerformance(newPerformance) {
  _performance = newPerformance;
}

function addTicket(ticket) {
  _tickets[ticket.id] = ticket;
}

function removeTicket(ticket) {
  delete _tickets[ticket.id];
}

function updateCartStatus(newStatus) {
  _cartStatus = newStatus;
}

function resetCart() {
  _cartStatus = "closed";
  _tickets = {};
  _performance = null;
}

function setTickets(fetchedPerformance) {
  fetchedPerformance.tickets.forEach(function(ticket) {
    _tickets[ticket.id] = ticket;
  });
}

module.exports = CartStore;
