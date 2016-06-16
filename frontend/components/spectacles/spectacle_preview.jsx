var React = require('react'),
    moment = require('moment');

var SpectaclePreview = React.createClass({

  render: function() {
    var spectacle = this.props.spectacle,
        startDate = moment(spectacle.first_performance).format("MMM D"),
        endDate = moment(spectacle.last_performance).format("MMM D");

    var dateRange = startDate + " - " + endDate;

    var photoUrl = "http://res.cloudinary.com/bencalabrese/image/upload/c_lfill,h_140,w_240/" + spectacle.image_url;

    return (
      <div
        className="spectacle-thumbnail performance-preview">
        <img src={photoUrl} alt={spectacle.title}/>

        <p className="category-name">
          {spectacle.category}
          <span className="date-range">{dateRange}</span>
        </p>

        <h4>{spectacle.title}</h4>

        <p className="thumbnail-description">
          {spectacle.description}
        </p>
      </div>
    );
  }

});

module.exports = SpectaclePreview;
