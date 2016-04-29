var Store = require('flux/utils').Store,
    SpectacleConstants = require('../constants/spectacle_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    SpectacleStore = new Store(dispatcher);

// API
SpectacleStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SpectacleConstants.RECEIVE_FILTERED_SPECTACLES:
      resetSpectacles(payload.fetchedSpectacles);
      this.__emitChange();
      break;

    case SpectacleConstants.RECEIVE_SINGLE_SPECTACLE:
      updateSingleSpectacle(payload.fetchedSpectacle);
      this.__emitChange();
      break;
  }
};

SpectacleStore.all = function() {
  var result = [];

  Object.keys(_spectacles).forEach(function(id) {
    result.push(_spectacles[id]);
  });

  return result;
};

SpectacleStore.find = function(id) {
  return $.extend(true, {}, _spectacles[id]);
};

// private
var _spectacles = {};

function resetSpectacles(fetchedSpectacles) {
  _spectacles = {};

  fetchedSpectacles.forEach(function(spectacle) {
    _spectacles[spectacle.id] = spectacle;
  });
}

function updateSingleSpectacle(fetchedSpectacle) {
  _spectacles[fetchedSpectacle.id] = fetchedSpectacle;
}

module.exports = SpectacleStore;
