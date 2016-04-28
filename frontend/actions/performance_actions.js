var PerformanceApiUtil = require('../util/performance_api_util');

var PerformanceClientActions = {
  fetchSinglePerformance: function(id) {
    PerformanceApiUtil.fetchSinglePerformance(id);
  }
};

module.exports = PerformanceClientActions;
