var React = require('react'),
    FilterStore = require('../../stores/filter'),
    CurrentFilters = require('./current_filters'),
    FiltersIndex = require('./filters_index');

var FilterSidebar = React.createClass({
  getInitialState: function() {
    return {
      filters: FilterStore.all(),
      filterStep: FilterStore.filterStep(),
    };
  },

  componentWillMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({
      filters: FilterStore.all(),
      filterStep: FilterStore.filterStep(),
    });
  },

  render: function() {
    return (
      <div className="sidebar">
        <img src="http://www.placekitten.com/250/250"/>
        <CurrentFilters
          filters={this.state.filters}
          filterStep={this.state.filterStep}/>
        <FiltersIndex filterStep={this.state.filterStep}/>
      </div>
    );
  }
});

module.exports = FilterSidebar;
