var React = require('react'),
    moment = require('moment'),
    SetCartStatus = require('../../mixins/set_cart_status');

var SpectacleModalDetail = React.createClass({
  mixins: [SetCartStatus],

  render: function() {
    var spectacle = this.props.spectacle;

    var startDate = moment(spectacle.first_performance).format("MMMM Do YYYY");
    var endDate = moment(spectacle.last_performance).format("MMMM Do YYYY");

    var photoUrl = "http://res.cloudinary.com/bencalabrese/image/upload/c_lfill,h_320,w_400/" + spectacle.image_url;

    return (
      <div className="spectacle-modal-content">
        <div
          onClick={this.props.closeCallback}
          className="modal-close-x">
            &times;
        </div>

        <div className="spectacle-modal-picture-pane">
          <img src={photoUrl} alt={spectacle.title}/>
          <button onClick={this.goToPerformances}>
            Reserve Tickets&nbsp;&nbsp;>>
          </button>
        </div>

        <div className="spectacle-modal-details">
          <h2>{spectacle.title}</h2>
          <h6>{spectacle.venue}</h6>
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
