var PerformanceServerActions = require('../actions/performance_server_actions'),
    browserHistory = require('react-router').browserHistory;

var PerformanceApiUtil = {
  fetchSinglePerformance: function(id) {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/performances/' + id,
      success: function(fetchedPerformance) {
        PerformanceServerActions.receiveSinglePerformance(fetchedPerformance);
      },
      error: function(response) {
      }
    });
  }
};

module.exports = PerformanceApiUtil;
