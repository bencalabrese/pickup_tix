var UserStore = require('../stores/user'),
    UserActions = require('../actions/user_actions');

var CurrenUserStateMixin = {
  getInitialState: function() {
    return {
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    };
  },

  componentDidMount: function() {
    this.UserStorelistener = UserStore.addListener(this.updateUser);

    if (!UserStore.currentUser) {
      UserActions.fetchCurrentUser();
    }
  },

  componentWillUnmount: function(nextProps, nextState) {
    this.UserStorelistener.remove();
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  }
};

module.exports = CurrenUserStateMixin;
