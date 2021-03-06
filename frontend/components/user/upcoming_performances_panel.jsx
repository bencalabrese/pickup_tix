var React = require('react'),
    UpcomingPerformance = require('./upcoming_performance');

var UpcomingPerformancesPanel = React.createClass({

  render: function() {
    var performances = this.props.upcomingPerformances.map(function(p) {
      return <UpcomingPerformance key={p.performance_id} performance={p}/>;
    });


    return (
      <div className="sidebar upcoming-performances-panel">
        <h3>Upcoming Shows</h3>

        <ul>
          {performances}
        </ul>
      </div>
    );
  }

});

module.exports = UpcomingPerformancesPanel;
