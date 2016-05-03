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



    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

});

module.exports = SeatBlock;