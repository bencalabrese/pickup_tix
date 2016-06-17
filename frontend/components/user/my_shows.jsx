var React = require('react'),
    CurrenUserStateMixin = require('../../mixins/current_user_state'),
    UserSpectacleResults = require('./user_spectacle_results'),
    UpcomingPerformancesPanel = require('./upcoming_performances_panel');

var MyShows = React.createClass({
  mixins: [CurrenUserStateMixin],

  render: function() {
    var user = this.state.currentUser;

    if (!user) {
      return <div>Please login to see this page</div>;
    }

    return (
      <div className="my-shows">
        <UserSpectacleResults
          allBookedPerformances={user.allBookedPerformances}
          spectacleIds={user.spectacleIds}/>
        <UpcomingPerformancesPanel
          upcomingPerformances={user.upcomingPerformances}/>
      </div>
    );
  }

});

module.exports = MyShows;
