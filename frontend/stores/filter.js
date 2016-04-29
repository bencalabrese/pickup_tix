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
  }
};

FilterStore.all = function() {
  return $.extend(true, {}, _filters);
};

// private
var _filters = {
  keyword: ""
};

function setFilter(filter) {
  // TODO
  // doublecheck that this mutates _filters
  $.extend(_filters, filter);
}

module.exports = FilterStore;
