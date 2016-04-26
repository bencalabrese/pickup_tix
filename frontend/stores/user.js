var Store = require('flux/utils').Store,
    UserConstants = require('../constants/user_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    _currentUser = null,
    _authErrors = [],
    UserStore = new Store(dispatcher);

// API
UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_CURRENT_USER:
      _currentUser = payload.currentUser;
      _authErrors = [];
      this.__emitChange();
      break;

    case UserConstants.RECEIVE_AUTH_ERRORS:
      _authErrors = payload.authErrors;
      this.__emitChange();
      break;

    case UserConstants.DESTROY_CURRENT_USER:
      _currentUser = null;
      _authErrors = [];
      this.__emitChange();
      break;
  }
};

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.authErrors = function() {
  return _authErrors.slice();
};

module.exports = UserStore;
