var React = require('react'),
    SetCartStatus = require('../../mixins/set_cart_status');

var SpectacleModalNav = React.createClass({
  mixins: [SetCartStatus],

  render: function() {
    return (
      <nav className="spectacle-modal-nav">
        <button onClick={this.goToDetail}>Show Details</button>
        <button onClick={this.goToPerformances}>Select Date</button>
        <button onClick={this.goToSeats}>Choose Seats</button>
        <button onClick={this.goToConfirmation}>Confirmation</button>
      </nav>
    );
  }

});

module.exports = SpectacleModalNav;
