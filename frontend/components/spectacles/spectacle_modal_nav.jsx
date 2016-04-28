var React = require('react');

var SpectacleModalNav = React.createClass({

  render: function() {
    return (
      <nav className="spectacle-modal-nav">
        <button>Show Details</button>
        <button>Select Date</button>
        <button>Choose Seats</button>
        <button>Confirmation</button>
      </nav>
    );
  }

});

module.exports = SpectacleModalNav;
