var React = require('react'),
    FilterStore = require('../../stores/filter'),
    FilterActions = require('../../actions/filter_actions'),
    SetFilterStep = require('../../mixins/set_filter_step'),
    VENUE_SIZES = require('../../constants/filter_name_maps').VENUE_SIZES;

var VenueSizePicker = React.createClass({
  mixins: [SetFilterStep],

  getInitialState: function() {
    return { venue_size: FilterStore.all().venue_size };
  },

  componentDidMount: function() {
    this.listener = FilterStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ venue_size: FilterStore.all().venue_size });
  },

  inStore: function(tuple) {
    if (!this.state.venue_size) { return false; }
    var venue_size = this.state.venue_size;
    return (tuple[0] === venue_size[0]) && (tuple[1] === venue_size[1]);
  },

  toggleVenueSize: function(event) {
    var venue_size;
    var tuple = event.currentTarget.getAttribute("data-tuple");
    tuple = tuple.split(",").map(function(char) {
      return parseInt(char);
    });

    if (!this.inStore(tuple)) {
      venue_size = tuple;
    }

    FilterActions.setFilter({ venue_size: venue_size });
  },

  render: function() {
    var sizeLIs = VENUE_SIZES.map(function(vS) {
      var className = this.inStore(vS.tuple) ? "selected" : "unselected";

      return (
        <li data-tuple={vS.tuple}
            onClick={this.toggleVenueSize}
            key={vS.tuple}>
          <a className={className}>{vS.name}</a>
        </li>
      );
    }.bind(this));

    return (
      <div>
        <h3>Select Venue Size</h3>
        <ul className="filter-options">
          {sizeLIs}
        </ul>

        <p onClick={this.goToTags}>
          <span className="next-filter-link">Pick tags >></span>
        </p>
      </div>
    );
  }
});

module.exports = VenueSizePicker;
