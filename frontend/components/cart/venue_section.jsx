var React = require('react'),
    SeatBlock = require('./seat_block');

var VenueSection = React.createClass({

  render: function() {
    var seatBlocks = this.props.seatBlocks.map(function(seatBlock, idx) {
      return <SeatBlock
        key={idx}
        style={seatBlock.style}
        seats={seatBlock.matrix}/>;
    });


    return (
      <div className="seating-section">
        <h2>{this.props.name}</h2>

        <div className="seat-blocks">
          {seatBlocks}
        </div>

        <div className="stage">Stage</div>
      </div>
    );
  }

});

module.exports = VenueSection;
