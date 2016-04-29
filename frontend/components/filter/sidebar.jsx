var React = require('react'),
    CurrentFilters = require('./current_filters');

var FilterSidebar = React.createClass({
  render: function() {
    return (
      <div className="sidebar">
        <img src="http://www.placekitten.com/250/250"/>
        <CurrentFilters
          filters={this.props.filters}
          filterStep={this.props.filterStep}/>
        <FiltersIndex
          availableFilters={this.props.availableFilters}
          filterStep={this.props.filterStep}/>
      </div>
    );
  }
});

module.exports = FilterSidebar;
