var React = require('react'),
    UserStore = require('../../stores/user'),
    browserHistory = require('react-router').browserHistory,
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

    var filters = { ids: user.spectacleIds };

    return (
      <div className="my-shows">
        <UserSpectacleResults filters={filters}/>
        <UpcomingPerformancesPanel
          upcomingPerformances={user.upcomingPerformances}/>
      </div>
    );
  }

});

module.exports = MyShows;
