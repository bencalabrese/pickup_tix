var React = require('react'),
    moment = require('moment'),
    SetFilterStep = require('../../mixins/set_filter_step'),
    FilterActions = require("../../actions/filter_actions"),
    CATEGORIES = require('../../constants/filter_name_maps').CATEGORIES;

var CurrentFilters = React.createClass({
  mixins: [SetFilterStep],

  render: function() {
    var filters = this.props.filters,
        allFilters = [];

    if (filters.category_ids) {
      var categories = filters.category_ids.map(function(id) {
        return CATEGORIES[id - 1].name;
      }).join(", ");
      if (categories.length < 1) { categories = "None"; }
    }

    if (filters.date_range) {
      var date1 = moment(filters.date_range[0]).format("M/D/YY");
      var date2 = moment(filters.date_range[1]).format("M/D/YY");
      var dates = date1 + " - " + date2;
    }

    if (filters.venue_size) {
      var maxSeats = filters.venue_size[1] === 1000 ?
        " - 100+" :
        " - " + filters.venue_size[1];

      var venueRange = filters.venue_size[0] + maxSeats;

      var venueSize = venueRange + " seats";
    }

    allFilters.push(
      <span key="1">
        <a onClick={this.goToCategories} key="1">{categories}</a>
      </span>
    );
    allFilters.push(
      <span key="2">
        &nbsp;> <a onClick={this.goToDates} key="2">{dates}</a>
       </span>
    );
    allFilters.push(
      <span key="3">
        &nbsp;> <a onClick={this.goToVenueSize} key="3">{venueSize}</a>
      </span>
    );

    return (
      <p className="current-filters">{allFilters}</p>
    );
  }
});

module.exports = CurrentFilters;
