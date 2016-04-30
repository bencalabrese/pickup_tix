var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterSidebar = require('./sidebar'),
    FilterResults = require('./results');

var FilterPage = React.createClass({
  render: function() {
    return (
      <div className="filter">
        <FilterSidebar/>
        <FilterResults/>
      </div>
    );
  }
});

module.exports = FilterPage;
