var UserApiUtil = require('../util/user_api_util');

var UserActions = {
  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  login: function(credentials, callback) {
    UserApiUtil.login(credentials, callback);
  },

  logout: function() {
    UserApiUtil.logout();
  },

  create: function(credentials, callback) {
    UserApiUtil.create(credentials, callback);
  },

  destroy: function() {
    UserApiUtil.destroy();
  }
};

module.exports = UserActions;
