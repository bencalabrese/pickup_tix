var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart'),
    VenueSection = require('./venue_section');

var SeatPicker = React.createClass({
  getInitialState: function() {
    return {
      venueMap: CartStore.performance().venueMap,
      tickets: CartStore.tickets()
    };
  },

  componentDidMount: function() {
    this.listener = CartStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({
      venueMap: CartStore.performance().venueMap,
      tickets: CartStore.tickets()
    });
  },

  render: function() {
    var venueMap = this.state.venueMap;

    var sections = venueMap.map(function(section) {
      return <VenueSection
               key={section.name}
               seatBlocks={section.seat_blocks}/>;
    });

    var tickets = this.state.tickets.map(function(ticket) {
      return <li key={ticket}>{ticket}</li>;
    });

    return (

      <div>
        Hello world
        {sections}

        <ul className="tickets-list">
          {tickets}
        </ul>
      </div>
    );
  }

});

module.exports = SeatPicker;
