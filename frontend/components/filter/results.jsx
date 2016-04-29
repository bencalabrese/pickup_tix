var React = require('react'),
    SpectaclesIndex = require('../spectacles/spectacles_index');

var FilterResults = React.createClass({

  render: function() {
    return (
      <div>
        <SpectaclesIndex filters={this.props.filters}/>
      </div>
    );
  }

});

module.exports = FilterResults;
