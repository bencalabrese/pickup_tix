var React = require('react'),
    moment = require('moment'),
    CartActions = require('../../actions/cart_actions'),
    CartStore = require('../../stores/cart'),
    SetCartStatus = require('../../mixins/set_cart_status'),
    SpectaclePreview = require('../spectacles/spectacle_preview');

var PerformancePicker = React.createClass({
  mixins: [SetCartStatus],

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
    });

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
      <div className="spectacle-modal-content">
        <div
          onClick={this.props.closeCallback}
          className="modal-close-x">
            &times;
        </div>

        <div className="performance-picker">
          <h2>Select a Performance</h2>

          <SpectaclePreview spectacle={this.props.spectacle}/>

          <div className="performance-picker-frame">
            <select onChange={this.selectPerformance}>
              <option value="none">Pick a date</option>
              {performances}
            </select>

            <pre>{selectedText}</pre>
          </div>

          <div className="cart-progress-buttons">
            <button onClick={this.goToDetail}>
              &lt;&lt;&nbsp;&nbsp;&nbsp;Back to Show Details
            </button>

            <button onClick={this.goToSeats}>
              Choose Your Seats&nbsp;&nbsp;&nbsp;>>
            </button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PerformancePicker;
