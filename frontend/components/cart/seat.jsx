var React = require('react'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart');

var Seat = React.createClass({
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


  addSingleTicket: function(event) {
    var id = parseInt(event.currentTarget.getAttribute("data-id"));
    CartActions.addSingleTicket(id);
  },

  removeSingleTicket: function(event) {
    var id = parseInt(event.currentTarget.getAttribute("data-id"));
    CartActions.removeSingleTicket(id);
  },

  selected: function(id) {
    return this.state.tickets.indexOf(id) !== -1;
  },

  render: function() {
    var seat = this.props.seat;
    var td;

    if (!seat) { return <td className="null-seat seat"/>; }
    if (!seat.available) { return <td className="unavailable seat"/>; }

    if (this.selected(seat.id)) {
      td = (
        <td
          className="selected seat"
          data-id={seat.id}
          onClick={this.removeSingleTicket}/>
      );
    } else {
      td = (
        <td
          className="available seat"
          data-id={seat.id}
          onClick={this.addSingleTicket}/>
      );
    }

    return td;
  }

});

module.exports = Seat;
