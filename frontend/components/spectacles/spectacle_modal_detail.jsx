var React = require('react'),
    moment = require('moment');

var SpectacleModalDetail = React.createClass({
  render: function() {
    var spectacle = this.props.spectacle;

    var startDate = moment(spectacle.first_performance).format("MMMM Do YYYY");
    var endDate = moment(spectacle.last_performance).format("MMMM Do YYYY");

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
          <h6>{startDate} - {endDate}</h6>
          <p>
            {spectacle.description}
          </p>
        </div>
      </div>
    );
  }

});

module.exports = SpectacleModalDetail;
