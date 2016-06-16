var React = require('react'),
    moment = require('moment');

var UpcomingPerformance = React.createClass({

  render: function() {
    var performance = this.props.performance,
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

    return (
      <li className="upcoming-performance">
        <h4>{performance.title}</h4>
        <p>{time} on {date}</p>
        <p>{ticketsString}</p>
      </li>
    );
  }

});

module.exports = UpcomingPerformance;
