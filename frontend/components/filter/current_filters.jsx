var React = require('react'),
    moment = require('moment'),
    SetFilterStep = require('../../mixins/set_filter_step'),
    FilterActions = require("../../actions/filter_actions");

var CurrentFilters = React.createClass({
  mixins: [SetFilterStep],

  render: function() {
    var filters = this.props.filters,
        categories = "All Event Types",
        dates = " > All dates",
        venueSize = " > Any venue size",
        allFilters = [];

    if (filters.categories) {
      categories = filters.categories.join(", ");
    }

    if (filters.dates) {
      var date1 = moment(filters.dates[0]).format("D/M/YY");
      var date2 = moment(filters.dates[1]).format("D/M/YY");
      dates = " > " + date1 + " - " + date2;
    }

    if (filters.venueSize) {
      venueSize = " > " + filters.venueSize + " seats";
    }

    allFilters.push(
      <a onClick={this.goToCategories} key="1">{categories}</a>
    );
    allFilters.push(
      <a onClick={this.goToDates} key="2">{dates}</a>
    );
    allFilters.push(
      <a onClick={this.goToVenueSize} key="3">{venueSize}</a>
    );

    var filterLinks = allFilters.slice(0, this.props.filterStep);

    return (
      <p>{filterLinks}</p>
    );
  }
});

module.exports = CurrentFilters;
