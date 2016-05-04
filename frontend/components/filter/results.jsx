var React = require('react'),
    SpectaclesIndex = require('../spectacles/spectacles_index'),
    FilterStore = require('../../stores/filter');

var FilterResults = React.createClass({
  getInitialState: function() {
    return { filters: FilterStore.all() };
  },

  componentWillMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ filters: FilterStore.all() });
  },

  render: function() {
    return (
      <div className="results-pane">
        <SpectaclesIndex filters={this.state.filters}/>
      </div>
    );
  }
});

module.exports = FilterResults;
