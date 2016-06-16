var React = require('react'),
    moment = require('moment'),
    SpectaclePreview = require('../spectacles/spectacle_preview');

var BookedPerformance = React.createClass({

  render: function() {
    var spectaclePreview,
        performance = this.props.performance,
        datetime = moment(performance.datetime),
        date = datetime.format("MMMM Do, YYYY"),
        time = datetime.format("h:mm a"),
        ticketsString;

    switch (performance.num_tickets) {
      case 1:
        ticketsString = "Ticket for yourself";
        break;
      case 2:
        ticketsString = "Tickets for yourself and 1 friend";
        break;
      default:
        ticketsString = "Tickets for yourself and " +
          (performance.num_tickets - 1) + " friends";
        break;
    }

    var spectacle = this.props.spectacle;
    if(spectacle.id) {
      var photoUrl = "http://res.cloudinary.com/bencalabrese/image/upload/c_lfill,h_140,w_240/" + spectacle.image_url;

      var img = <img src={photoUrl} alt={spectacle.title}/>;
    }

    return (
      <li className="booked-performance group">
        {img}
        <h4>{performance.title}</h4>
        <p>{time} on {date}</p>
        <p>{ticketsString}</p>
      </li>
    );
  }

});

module.exports = BookedPerformance;
