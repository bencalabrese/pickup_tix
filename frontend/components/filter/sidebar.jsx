var React = require('react'),
    CurrentFilters = require('./current_filters'),
    FiltersIndex = require('./filters_index');

var FilterSidebar = React.createClass({
  render: function() {
    return (
      <div className="sidebar">
        <img src="http://www.placekitten.com/250/250"/>
        <CurrentFilters
          filters={this.props.filters}
          filterStep={this.props.filterStep}/>
        <FiltersIndex filterStep={this.props.filterStep}/>
      </div>
    );
  }
});

module.exports = FilterSidebar;
