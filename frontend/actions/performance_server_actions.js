var PerformanceConstants = require('../constants/performance_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var PerformanceServerActions = {
  receiveSinglePerformance: function(fetchedPerformance) {
    dispatcher.dispatch({
      actionType: PerformanceConstants.RECEIVE_SINGLE_PERFORMANCE,
      fetchedPerformance: fetchedPerformance
    });
  },
};

module.exports = PerformanceServerActions;
