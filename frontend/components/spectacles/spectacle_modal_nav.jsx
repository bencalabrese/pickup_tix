var React = require('react'),
    SetCartStatus = require('../../mixins/set_cart_status'),
    CartStore = require('../../stores/cart');

var SpectacleModalNav = React.createClass({
  mixins: [SetCartStatus],

  render: function() {
    var status = CartStore.cartStatus();

    return (
      <nav className="spectacle-modal-nav">
        <button
          onClick={this.goToDetail}
          className={status === "closed" ? "selected" : null}>
            Show Details
        </button>
        <button
          onClick={this.goToPerformances}
          className={status === "picking performance" ? "selected" : null}>
            Select Date
        </button>
        <button
          onClick={this.goToSeats}
          className={status === "picking seats" ? "selected" : null}>
            Choose Seats
        </button>
        <button
          onClick={this.goToConfirmation}
          className={status === "confirmation" ? "selected" : null}>
            Confirmation
        </button>
      </nav>
    );
  }

});

module.exports = SpectacleModalNav;
