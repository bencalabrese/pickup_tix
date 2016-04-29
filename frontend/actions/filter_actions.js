var FilterConstants = require('../constants/filter_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var CartServerActions = {
  setFilter: function(filter) {
    dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FILTER,
      filter: filter
    });
  }
};

module.exports = CartServerActions;
