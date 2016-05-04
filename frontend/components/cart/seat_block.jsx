var React = require('react'),
    Seat = require('./seat');

var SeatBlock = React.createClass({

  render: function() {
    var rows = this.props.seats.map(function(row, rowIdx) {
      var seats = row.map(function(seat, seatIdx) {
        return <Seat key={seat.id} seat={seat}/>;
      });

      return <tr key={rowIdx}>{seats}</tr>;
    });

    var styles = this.props.style.split(","),
        rotate = styles[0],
        top    = styles[1],
        right  = styles[2];

    var style = {
      transform: "rotate(" + rotate + "deg)",
      top      : top + "px",
      right    : right + "px",
      position : "relative"
    };

    return (
      <table style={style}>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

});

module.exports = SeatBlock;
