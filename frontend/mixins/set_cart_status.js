var CartActions = require('../actions/cart_actions'),
    CurrentUserStateMixin = require('./current_user_state'),
    CartStore = require('../stores/cart');

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
      this.addTooltip(event.currentTarget, "Please login to book tickets");
    }
  },

  goToSeats: function(event) {
    event.preventDefault();
    if (this.state.currentUser) {
      if (CartStore.performance()) {
        CartActions.updateCartStatus("picking seats");
      } else {
        this.addTooltip(event.currentTarget, "Please pick a performance first");
      }
    } else {
      this.addTooltip(event.currentTarget, "Please login to book tickets");
    }
  },

  goToConfirmation: function(event) {
    event.preventDefault();
    if (this.state.currentUser) {
      if (CartStore.performance()) {
        if (CartStore.tickets().length > 0) {
          CartActions.updateCartStatus("confirmation");
        } else {
          this.addTooltip(event.currentTarget, "Please pick seats first");
        }
      } else {
        this.addTooltip(event.currentTarget, "Please pick a performance first");
      }
    } else {
      this.addTooltip(event.currentTarget, "Please login to book tickets");
    }
  },

  addTooltip: function(button, message) {
    var $button = $(button);

    $button.attr("data-tooltip", message);
    $button.addClass("tooltip");

    setTimeout(function() {
      $button.addClass("tooltip-fadeout");

      setTimeout(function() {
        $button.removeClass("tooltip");
        $button.removeClass("tooltip-fadeout");
      }, 2000);
    }, 1500);
  }
};

module.exports = SetCartStatus;
