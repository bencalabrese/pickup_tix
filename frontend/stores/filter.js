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
  }
};

FilterStore.all = function() {
  return $.extend(true, {}, _filters);
};

FilterStore.filterStep = function() {
  return _filterStep;
};

// private
var _filters = {
  dates: ["2013-02-08", "2013-04-08"],
  venueSize: "200+",
  categories: [1, 3]
};

var _filterStep = 1;

function setFilter(filter) {
  // TODO
  // doublecheck that this mutates _filters
  $.extend(_filters, filter);
}

function setFilterStep(filterStep) {
  _filterStep = filterStep;
}

module.exports = FilterStore;
