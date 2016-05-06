var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart'),
    VenueSection = require('./venue_section'),
    SetCartStatus = require('../../mixins/set_cart_status');

var SeatPicker = React.createClass({
  mixins: [SetCartStatus],

  getInitialState: function() {
    var venueMap = CartStore.performance().venueMap;

    return {
      venueMap: venueMap,
      tickets: CartStore.tickets(),
      selected: venueMap[0].name
    };
  },

  componentDidMount: function() {
    this.listener = CartStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    if (CartStore.performance()) {
      var venueMap = CartStore.performance().venueMap;

      this.setState({
        venueMap: venueMap,
        tickets: CartStore.tickets(),
        selected: venueMap[0].name
      });
    }
  },

  selectSection: function(event) {
    var sectionName = event.currentTarget.getAttribute("name");
    this.setState({ selected: sectionName });
  },

  render: function() {
    var venueMap = this.state.venueMap;
    var selectedSection = this.state.selected;

    var sectionNames = venueMap.map(function(section) {
      var className = selectedSection === section.name ?
        "selected-section" :
        "";

      return (
        <h2
          className={className}
          key={section.name}
          name={section.name}
          onClick={this.selectSection}>
            {section.name}
        </h2>
      );
    }.bind(this));

    var sections = venueMap.map(function(section) {
      var selected = selectedSection === section.name ? true : false;

      return (
        <VenueSection
          selected={selected}
          key={section.name}
          seatBlocks={section.seat_blocks}/>
      );
    });

    var ticketsString;

    switch (this.state.tickets.length) {
      case 0:
        ticketsString = "You have not selected any seats.";
        break;
      case 1:
        ticketsString = "You have selected a seat for yourself.";
        break;
      case 2:
        ticketsString = "You have selected seats for yourself and 1 friend.";
        break;
      default:
        ticketsString = "You have selected seats for yourself and " +
          (this.state.tickets.length - 1) + " friends.";
        break;
    }


    return (
      <div className="spectacle-modal-content">
        <div className="seat-picker">
          <div>{sectionNames}</div>
          {sections}

          <p className="tickets-string">{ticketsString}</p>

          <div className="cart-progress-buttons">
            <button onClick={this.goToPerformances}>
              &lt;&lt;&nbsp;&nbsp;&nbsp;Back to Pick Dates
            </button>

            <button onClick={this.goToConfirmation}>
              Confirm Your Reservation&nbsp;&nbsp;&nbsp;>>
            </button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SeatPicker;
