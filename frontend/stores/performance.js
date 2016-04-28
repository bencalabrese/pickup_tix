var Store = require('flux/utils').Store,
    PerformanceConstants = require('../constants/performance_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    PerformanceStore = new Store(dispatcher);

// API
PerformanceStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PerformanceConstants.RECEIVE_SINGLE_PERFORMANCE:
      _performance = payload.fetchedPerformance;
      this.__emitChange();
      break;
  }
};

PerformanceStore.performance = function() {
  if (!_performance) { return null; }
  return $.extend(true, {}, _performance);
};

// private
var _performance = null;

module.exports = PerformanceStore;
