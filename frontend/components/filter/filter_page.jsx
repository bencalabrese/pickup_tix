var React = require('react'),
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
