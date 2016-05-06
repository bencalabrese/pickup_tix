var React = require('react'),
    SeatBlock = require('./seat_block');

var VenueSection = React.createClass({
  getInitialState: function() {
    return { selected: this.props.selected };
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ selected: newProps.selected });
  },

  render: function() {
    var seatBlocks = this.props.seatBlocks.map(function(seatBlock, idx) {
      return <SeatBlock
        key={idx}
        style={seatBlock.style}
        seats={seatBlock.matrix}/>;
    });

    var selectedClass = this.state.selected ? " selected-section" : "";

    return (
      <div className="seating-section">
        <div className={"seat-blocks" + selectedClass}>
          {seatBlocks}
        </div>

        <div className={"stage" + selectedClass}>Stage</div>
      </div>
    );
  }

});

module.exports = VenueSection;
