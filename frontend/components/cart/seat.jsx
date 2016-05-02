var React = require('react');

var Seat = React.createClass({

  render: function() {
    var seat = this.props.seat;
    var td;

    if (seat) {
      if (seat.available) {
        td = <td className="available seat" data-id={seat.id}/>;
      } else {
        td = <td className="unavailable seat"/>;
      }
    } else {
      td = <td className="null-seat seat"/>;
    }


    return td;
  }

});

module.exports = Seat;
