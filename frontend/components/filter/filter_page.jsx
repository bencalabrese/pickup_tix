var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterSidebar = require('./sidebar'),
    FilterResults = require('./results');

var FilterPage = React.createClass({
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
      <div className="filter">
        <FilterSidebar
          filters={this.state.filters}
          filterStep={this.state.filterStep}/>
        <FilterResults filters={this.state.filters}/>
      </div>
    );
  }
});

module.exports = FilterPage;
