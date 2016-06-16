var React = require('react'),
    SpectaclesIndex = require('../spectacles/spectacles_index');

var UserSpecatcleResults = React.createClass({
  render: function() {
    return (
      <div className="results-pane">
        <h2>My Shows</h2>
        <SpectaclesIndex filters={this.props.filters}/>
      </div>
    );
  }
});

module.exports = UserSpecatcleResults;
