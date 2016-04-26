var UserConstants = require('../constants/user_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var ServerActions = {
  receiveCurrentUser: function(currentUser) {
    dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },

  recieveErrors: function(authErrors) {
    dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_AUTH_ERRORS,
      authErrors: authErrors
    });
  },

  destroyCurrentUser: function() {
    dispatcher.dispatch({
      actionType: UserConstants.DESTROY_CURRENT_USER
    });
  }
};

module.exports = ServerActions;
