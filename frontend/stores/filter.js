var Store = require('flux/utils').Store,
    FilterConstants = require('../constants/filter_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    FilterStore = new Store(dispatcher),
    moment = require('moment');

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
  category_ids: [],
  tag_ids: [],
  date_range: [moment(), moment().add(1, 'week')]
};

var _filterStep = 1;

function setFilter(filter) {
  $.extend(_filters, filter);
}

function setFilterStep(filterStep) {
  _filterStep = filterStep;
}

module.exports = FilterStore;
