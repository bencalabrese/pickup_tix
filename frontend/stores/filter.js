var Store = require('flux/utils').Store,
    FilterConstants = require('../constants/filter_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    FilterStore = new Store(dispatcher);

// API
FilterStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_FILTER:
      setFilter(payload.filter);
      this.__emitChange();
      break;

    case FilterConstants.UPDATE_FILTER_STEP:
      setFilterStep(payload.filterStep);
      this.__emitChange();
      break;

    case FilterConstants.UPDATE_AVAILABLE_FILTERS:
      setAvailableFilters(payload.availableFilters);
      this.__emitChange();
      break;
  }
};

FilterStore.all = function() {
  return $.extend(true, {}, _filters);
};

FilterStore.filterStep = function() {
  return _filterStep;
};

FilterStore.availableFilters = function() {
  _availableFilters.slice();
};

// private
var _filters = {
  dates: ["2013-02-08", "2013-04-08"],
  venueSize: "200+"
};

var _filterStep = 3;

var _availableFilters = [];

function setFilter(filter) {
  // TODO
  // doublecheck that this mutates _filters
  $.extend(_filters, filter);
}

function setFilterStep(filterStep) {
  _filterStep = filterStep;
}

function setAvailableFilters(availableFilters) {
  _availableFilters = availableFilters;
}

module.exports = FilterStore;
