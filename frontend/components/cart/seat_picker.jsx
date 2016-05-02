var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart'),
    VenueSection = require('./venue_section');

var SeatPicker = React.createClass({
  getInitialState: function() {
    return { venueMap: CartStore.performance().venueMap };
  },

  componentDidMount: function() {
    this.listener = CartStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ venueMap: CartStore.performance().venueMap });
  },

  toggleTicket: function(event) {
    var ticketId = event.currentTarget.getAttribute("data-id");

    CartActions.addSingleTicket(ticketId);
  },

  render: function() {
    var venueMap = this.state.venueMap;

    var sections = venueMap.map(function(section) {
      return <VenueSection
               key={section.name}
               seatBlocks={section.seat_blocks}/>;
    });

    return (

      <div>
        Hello world
        {sections}
      </div>
    );
  }

});

module.exports = SeatPicker;
