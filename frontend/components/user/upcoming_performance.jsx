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
        ticketsString = "Yourself";
        break;
      case 2:
        ticketsString = "Yourself and 1 friend";
        break;
      default:
        ticketsString = "Yourself and " +
          (performance.num_tickets - 1) + " friends";
        break;
    }

    return (
      <li>
        <h4>{performance.title}</h4>
        <p>{time} on {date}</p>
        <p>for {ticketsString}</p>
      </li>
    );
  }

});

module.exports = UpcomingPerformance;
