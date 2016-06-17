var React = require('react'),
    SpectacleStore = require('../../stores/spectacle'),
    SpectacleClientActions = require('../../actions/spectacle_actions'),
    BookedPerformance = require('./booked_performance');

var UserSpecatcleResults = React.createClass({
  componentDidMount: function() {
    this.listener = SpectacleStore.addListener(this._onChange);

    var filters = { ids: this.props.spectacleIds };
    SpectacleClientActions.fetchSpectaclesByParams(filters);
  },

  componentWillReceiveProps: function(newProps) {
    var filters = { ids: newProps.spectacleIds };
    SpectacleClientActions.fetchSpectaclesByParams(filters);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.forceUpdate();
  },

  render: function() {
    var allBookedPerformances = this.props.allBookedPerformances.map(function(p) {
      var spectacle = SpectacleStore.find(p.spectacle_id);

      return <BookedPerformance
        key={p.performance_id}
        performance={p}
        spectacle={spectacle}/>;
    });

    return (
      <div className="results-pane">
        <h2>My Shows</h2>
        <ul>
          {allBookedPerformances}
        </ul>
      </div>
    );
  }
});

module.exports = UserSpecatcleResults;
