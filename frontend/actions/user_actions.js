var UserApiUtil = require('../util/user_api_util');

var UserActions = {
  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  login: function(credentials) {
    UserApiUtil.login(credentials);
  },

  logout: function() {
    UserApiUtil.logout();
  },

  create: function(credentials) {
    UserApiUtil.create(credentials);
  },

  destroy: function() {
    UserApiUtil.destroy();
  }
};

module.exports = UserActions;
