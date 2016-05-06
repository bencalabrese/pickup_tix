var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart'),
    SetCartStatus = require('../../mixins/set_cart_status');

var OrderConfirmation = React.createClass({
  mixins: [SetCartStatus],

  getInitialState: function() {
    return { success: false };
  },

  assignTickets: function() {
    CartActions.assignTickets(
      this.props.tickets,
      this.orderSuccess
    );
  },

  orderSuccess: function() {
    this.setState({ success: true });
    CartActions.resetCart();
  },

  render: function() {
    var content;

    if (this.state.success) {
      content = (
        <div className="order-confirmation">
          <h2>Success!</h2>
          <p>All of your seats have been reserved.</p>
          <br></br>
          <p>Enjoy the show!</p>

          <div className="cart-progress-buttons">
            <button onClick={this.goToDetail}>
              &lt;&lt;&nbsp;&nbsp;&nbsp;Back to Show Details
            </button>

            <button onClick={this.props.closeCallback}>
              Explore other shows&nbsp;&nbsp;&nbsp;>>
            </button>
          </div>
        </div>
      );
    } else {
      var spectacle = this.props.spectacle,
          performance = this.props.performance,
          tickets = this.props.tickets;

      var datetime = moment(performance.datetime),
          date = datetime.format("MMMM Do, YYYY"),
          time = datetime.format("h:mm a");

      var ticketsString;

      switch (tickets.length) {
        case 1:
          ticketsString = "Yourself";
          break;
        case 2:
          ticketsString = "Yourself and 1 friend";
          break;
        default:
          ticketsString = "Yourself and " +
            (this.props.tickets.length - 1) + " friends";
          break;
      }

      content = (
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
            <button onClick={this.goToSeats}>
              &lt;&lt;&nbsp;&nbsp;&nbsp;Back to Pick Seats
            </button>

            <button onClick={this.assignTickets}>
              Complete Reservation
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="spectacle-modal-content">
        <div
          onClick={this.props.closeCallback}
          className="modal-close-x">
            &times;
        </div>

        {content}
      </div>
    );
  }

});

module.exports = OrderConfirmation;
