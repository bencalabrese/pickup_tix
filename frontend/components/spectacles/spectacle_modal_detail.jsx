var React = require('react');

var SpectacleModalDetail = React.createClass({

  render: function() {
    var spectacle = this.props.spectacle;

    return (
      <div className="spectacle-modal-content">
        <div className="spectacle-modal-picture-pane">
          <img src={spectacle.image_url}/>
          <button>Reserve Tickets</button>
          <button>Find Other Shows</button>
        </div>

        <div className="spectacle-modal-details">
          <h2>{spectacle.title}</h2>
          <h6>The Curran Theater | 200+ seats</h6>
          <h6>April 22nd 2016 - May 8th 2016</h6>
          <p>
            {spectacle.description}
          </p>
        </div>
      </div>
    );
  }

});

module.exports = SpectacleModalDetail;
