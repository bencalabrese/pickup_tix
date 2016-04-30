var FilterConstants = require('../constants/filter_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var FilterActions = {
  setFilter: function(filter) {
    dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FILTER,
      filter: filter
    });
  },

  updateFilterStep: function(filterStep) {
    dispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FILTER_STEP,
      filterStep: filterStep
    });
  }
};

module.exports = FilterActions;
