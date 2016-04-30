var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterActions = require('../../actions/filter_actions'),
    moment = require('moment'),
    DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');

var DateRangePicker = React.createClass({
  getInitialState: function() {
    return { date_range: [moment(), moment()] };
  },

  componentDidMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ date_range: FilterStore.all().date_range });
  },

  updateStart: function(newStart) {
    this.state.date_range[0] = newStart;
    FilterActions.setFilter({ date_range: this.state.date_range });
  },

  updateEnd: function(newEnd) {
    this.state.date_range[1] = newEnd;
    FilterActions.setFilter({ date_range: this.state.date_range });
  },

  render: function() {
    var startDate = this.state.date_range[0],
        endDate   = this.state.date_range[1];

    return (
      <div>
        <h3>Select Date Range</h3>

        <h5>Start Date</h5>
        <DatePicker selected={startDate} onChange={this.updateStart}/>

        <h5>End Date</h5>
        <DatePicker selected={endDate} onChange={this.updateEnd}/>

        <button>Pick Venue Size >></button>
      </div>
    );
  }
});

module.exports = DateRangePicker;
