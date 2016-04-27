var React = require('react');

var SpectaclesIndexItem = React.createClass({
  render: function() {
    var spectacle = this.props.spectacle;

    return (
      <div className="spectacle-thumbnail">
        <img src={spectacle.image_url} alt={spectacle.title}/>
        <p className="venue-name">
          {spectacle.venue_name}
          <span className="date-range">Apr 22 - May 8</span>
        </p>
        <h4>{spectacle.title}</h4>
        <p className="thumbnail-description">{spectacle.description}</p>
      </div>
    );
  }
});

module.exports = SpectaclesIndexItem;
