var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterActions = require('../../actions/filter_actions'),
    SetFilterStep = require('../../mixins/set_filter_step'),
    moment = require('moment'),
    DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');

var DateRangePicker = React.createClass({
  mixins: [SetFilterStep],

  getInitialState: function() {
    return { date_range: FilterStore.all().date_range };
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
    var newRange = [newStart, this.state.date_range[1]];
    newRange = [moment.min(newRange), moment.max(newRange)];
    FilterActions.setFilter({ date_range: newRange });
  },

  updateEnd: function(newEnd) {
    var newRange = [this.state.date_range[0], newEnd];
    newRange = [moment.min(newRange), moment.max(newRange)];
    FilterActions.setFilter({ date_range: newRange });
  },

  render: function() {
    var startDate = this.state.date_range[0],
        endDate   = this.state.date_range[1];

    return (
      <div>
        <h3>Select Date Range</h3>

        <h5>Start Date</h5>

        <div className="filter-options">
          <DatePicker
              selected={startDate}
              onChange={this.updateStart}
              startDate={startDate}
              endDate={endDate}/>

          <h5>End Date</h5>
          <DatePicker
            selected={endDate}
            onChange={this.updateEnd}
            startDate={startDate}
            endDate={endDate}/>
        </div>

        <p onClick={this.goToVenueSize}>
          <span className="next-filter-link">Pick Venue Size >></span>
        </p>
      </div>
    );
  }
});

module.exports = DateRangePicker;
