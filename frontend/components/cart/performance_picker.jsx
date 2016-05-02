var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart');

var PerformancePicker = React.createClass({
  getInitialState: function() {
    return { selected: CartStore.performance() };
  },

  componentDidMount: function() {
    this.listener = CartStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ selected: CartStore.performance() });
  },

  selectPerformance: function(event) {
    var id = event.currentTarget.getAttribute("data-pos");
    CartActions.fetchSinglePerformance(id);
  },

  render: function() {
    var performances = this.props.performances.map(function(performance){
      var prettyPerformance = moment(performance.datetime).format("MMMM Do YYYY");
      return (
        <li key={performance.id}
            data-pos={performance.id}
            onClick={this.selectPerformance}>
          {prettyPerformance}
        </li>
      );
    }.bind(this));

    var selectedText;
    var selected = this.state.selected;

    if (selected) {
      var selectedDate = moment(selected.datetime).format("MMMM Do YYYY");
      var remainingSeats = selected.availableTicketCount;

      selectedText = "You have selected" + selectedDate + "\nThere are " + remainingSeats + " remaining seats.";
    } else {
      selectedText = "You have not selected a performance.";
    }

    return (

      <div>
        <ul>
          {performances}
        </ul>

        <p>{selectedText}</p>
      </div>
    );
  }

});

module.exports = PerformancePicker;
