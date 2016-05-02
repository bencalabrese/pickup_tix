var React = require('react'),
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
    return (
      <button onClick={this.assignTickets}>Reserve Seats</button>
    );
  }

});

module.exports = OrderConfirmation;
