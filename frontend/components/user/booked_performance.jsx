var React = require('react'),
    SpectaclePreview = require('../spectacles/spectacle_preview');

var BookedPerformance = React.createClass({

  render: function() {
    var spectaclePreview;

    if(this.props.spectacle.id) {
      spectaclePreview = <SpectaclePreview spectacle={this.props.spectacle}/>;
    }
    return (
      <li className="booked-performance">
        {spectaclePreview}
        Hello World
      </li>
    );
  }

});

module.exports = BookedPerformance;
