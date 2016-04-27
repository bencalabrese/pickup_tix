var React = require('react'),
    SpectaclesIndex = require('../spectacles/spectacles_index');

var Splash = React.createClass({
  render: function() {
    return (
      <div className="content">
        I'm the splash
        <SpectaclesIndex/>
      </div>
    );
  }
});

module.exports = Splash;
