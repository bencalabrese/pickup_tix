var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart');

var OrderConfirmation = React.createClass({
  getInitialState: function() {
    return { tickets: CartStore.tickets() };
  },

  componentDidMount: function() {
    this.listener = CartStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ tickets: CartStore.tickets() });
  },


  assignTickets: function() {
    CartActions.assignTickets(this.state.tickets);
  },

  render: function() {
    var spectacle = this.props.spectacle,
        performance = this.props.performance,
        tickets = this.props.tickets;

    var datetime = moment(performance.datetime),
        date = datetime.format("MMMM Do, YYYY"),
        time = datetime.format("h:mm a");

    var ticketsString;

    switch (this.state.tickets.length) {
      case 1:
        ticketsString = "Yourself";
        break;
      case 2:
        ticketsString = "Yourself and 1 friend";
        break;
      default:
        ticketsString = "Yourself and " +
          (this.state.tickets.length - 1) + " friends";
        break;
    }

    return (
      <div className="spectacle-modal-content">
        <div className="order-confirmation">
          <h2>Confirm Your Order</h2>
          <p>You have selected seats for:</p>
          <p>{ticketsString}</p>
          <br></br>

          <p>To see:</p>
          <p>{spectacle.title} at {spectacle.venue}</p>
          <br></br>

          <p>For the performance at:</p>
          <p>{time} on {date}</p>
          <div className="cart-progress-buttons">
            <button onClick={this.goToDates}>
              &lt;&lt;&nbsp;&nbsp;&nbsp;Back to Pick Seats
            </button>

            <button onClick={this.assignTickets}>
              Complete Reservation
            </button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = OrderConfirmation;
