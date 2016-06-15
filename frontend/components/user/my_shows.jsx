var React = require('react'),
    UserStore = require('../../stores/user'),
    browserHistory = require('react-router').browserHistory,
    CurrenUserStateMixin = require('../../mixins/current_user_state'),
    SpectaclesIndex = require('../spectacles/spectacles_index');

var MyShows = React.createClass({
  mixins: [CurrenUserStateMixin],

  render: function() {
    var user = this.state.currentUser;

    if (!user) {
      return <div>Please login to see this page</div>;
    }

    var filters = { ids: user.spectacleIds };

    return (
      <div>
        Hello World
        <SpectaclesIndex filters={filters}/>
      </div>
    );
  }

});

module.exports = MyShows;
