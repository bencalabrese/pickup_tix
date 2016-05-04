var Store = require('flux/utils').Store,
    CartConstants = require('../constants/cart_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    CartStore = new Store(dispatcher);

// API
CartStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case CartConstants.RECEIVE_SINGLE_PERFORMANCE:
      resetPerformance(payload.fetchedPerformance);
      this.__emitChange();
      break;

    case CartConstants.ADD_SINGLE_TICKET:
      addTicket(payload.ticketId);
      this.__emitChange();
      break;

    case CartConstants.REMOVE_SINGLE_TICKET:
      removeTicket(payload.ticketId);
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
  return _tickets.slice();
};

// private
var _performance = null;
var _tickets = [];
var _cartStatus = "closed";

function resetPerformance(fetchedPerformance) {
  _performance = fetchedPerformance;
}

function addTicket(ticketId) {
  _tickets.push(ticketId);
}

function removeTicket(ticketId) {
  _tickets.splice(_tickets.indexOf(ticketId), 1);
}

function updateCartStatus(newStatus) {
  _cartStatus = newStatus;
}

function resetCart() {
  _cartStatus = "closed";
  _tickets = [];
  _performance = null;
}

module.exports = CartStore;
