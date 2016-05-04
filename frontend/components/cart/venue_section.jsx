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

        {seatBlocks}
      </div>
    );
  }

});

module.exports = VenueSection;
