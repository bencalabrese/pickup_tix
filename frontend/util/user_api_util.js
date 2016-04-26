var UserServerActions = require('../actions/user_server_actions'),
    hashHistory = require('react-router').hashHistory;

var UserApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/user',
      success: function(currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function(response) {
        UserServerActions.recieveErrors(response.responseJSON.errors);
      }
    });
  },

  login: function(credentials) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'api/session',
      data: credentials,
      success: function(currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function(response) {
        UserServerActions.recieveErrors(response.responseJSON.errors);
      }
    });
  },

  logout: function() {
    $.ajax({
      method: 'DELETE',
      dataType: 'json',
      url: 'api/session',
      success: function() {
        UserServerActions.destroyCurrentUser();
      },
      error: function(response) {
        UserServerActions.recieveErrors(response.responseJSON.errors);
      }
    });
  },

  create: function(credentials) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'api/user',
      data: credentials,
      success: function(currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function(response) {
        UserServerActions.recieveErrors(response.responseJSON.errors);
      }
    });
  },

  destroy: function() {
    $.ajax({
      method: 'DELETE',
      dataType: 'json',
      url: 'api/user',
      success: function() {
        UserServerActions.destroyCurrentUser();
      },
      error: function(response) {
        UserServerActions.recieveErrors(response.responseJSON.errors);
      }
    });
  }
};

module.exports = UserApiUtil;
