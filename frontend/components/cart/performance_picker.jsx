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
    var id = event.currentTarget.value;

    if (id !== "none") { CartActions.fetchSinglePerformance(id); }
  },

  render: function() {
    var performances = this.props.performances.map(function(performance){
      var pretty = moment(performance.datetime).format("MMMM Do YYYY");
      return (
        <option
          key={performance.id}
          value={performance.id}>
            {pretty}
        </option>
      );
    }.bind(this));

    var selectedText;
    var selected = this.state.selected;

    if (selected) {
      var selectedDate = moment(selected.datetime).format("MMMM Do YYYY");
      var remainingSeats = selected.availableTicketCount;

      selectedText = "You have selected " + selectedDate +
        "\n\nThere are " + remainingSeats + " remaining seats.";
    } else {
      selectedText = "You have not selected a performance.";
    }

    return (
      <div>
        <h2>Select a Performance</h2>
        <select onChange={this.selectPerformance}>
          <option value="none">Pick a date</option>
          {performances}
        </select>

        <pre>{selectedText}</pre>
      </div>
    );
  }

});

module.exports = PerformancePicker;
